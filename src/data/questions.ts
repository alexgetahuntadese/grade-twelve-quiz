
import { Chapter, Question } from './types';
import { mathematicsChapters } from './subjects/mathematics';
import { physicsChapters } from './subjects/physics';
import { chemistryChapters } from './subjects/chemistry';
import { biologyChapters } from './subjects/biology';
import { englishChapters } from './subjects/english';
import { historyChapters } from './subjects/history';
import { generateAllQuestionsForChapter } from '@/utils/questionGenerator';

const subjectChapters: { [subject: string]: Chapter[] } = {
  mathematics: mathematicsChapters,
  physics: physicsChapters,
  chemistry: chemistryChapters,
  biology: biologyChapters,
  english: englishChapters,
  history: historyChapters
};

export const getChaptersBySubject = (subject: string): Chapter[] => {
  return subjectChapters[subject] || [];
};

export const getQuestionsByChapter = (subject: string, chapterId: string): Question[] => {
  const chapters = subjectChapters[subject] || [];
  const chapter = chapters.find(ch => ch.id === chapterId);
  const existingQuestions = chapter?.questions || [];
  
  // Generate additional questions to ensure we have enough for all difficulties
  const generatedQuestions = generateAllQuestionsForChapter(subject, chapterId);
  
  // Combine existing and generated questions
  const allQuestions = [...existingQuestions, ...generatedQuestions];
  
  // Shuffle questions to ensure randomness
  return shuffleArray(allQuestions);
};

// Utility function to shuffle array
const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

export const getAllSubjects = (): string[] => {
  return Object.keys(subjectChapters);
};

export const getTotalQuestionsBySubject = (subject: string): number => {
  const chapters = subjectChapters[subject] || [];
  // Account for both existing and generated questions (30 per chapter: 10 easy + 10 medium + 10 hard)
  return chapters.reduce((total, chapter) => {
    const existingCount = chapter.questions.length;
    const generatedCount = 30; // 10 per difficulty level
    return total + existingCount + generatedCount;
  }, 0);
};

// Function to get fresh questions (generates new ones each time)
export const getFreshQuestionsByChapter = (subject: string, chapterId: string, difficulty: 'easy' | 'medium' | 'hard', count: number = 10): Question[] => {
  const allQuestions = getQuestionsByChapter(subject, chapterId);
  const filteredQuestions = allQuestions.filter(q => q.difficulty === difficulty);
  
  // If we don't have enough questions, generate more
  if (filteredQuestions.length < count) {
    const additionalQuestions = generateAllQuestionsForChapter(subject, chapterId)
      .filter(q => q.difficulty === difficulty);
    filteredQuestions.push(...additionalQuestions);
  }
  
  // Shuffle and return the requested count
  const shuffled = shuffleArray(filteredQuestions);
  return shuffled.slice(0, count);
};
