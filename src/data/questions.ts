import { Question, Chapter } from './types';
import { mathematicsChapters } from './subjects/mathematics';
import { physicsChapters } from './subjects/physics';
import { chemistryChapters } from './subjects/chemistry';
import { biologyChapters } from './subjects/biology';
import { englishChapters } from './subjects/english';
import { historyChapters } from './subjects/history';
import { geographyChapters } from './subjects/geography';

export interface QuestionsBySubject {
  mathematics: Chapter[];
  physics: Chapter[];
  chemistry: Chapter[];
  biology: Chapter[];
  english: Chapter[];
  history: Chapter[];
  geography: Chapter[];
}

export const questionsBySubject: QuestionsBySubject = {
  mathematics: mathematicsChapters,
  physics: physicsChapters,
  chemistry: chemistryChapters,
  biology: biologyChapters,
  english: englishChapters,
  history: historyChapters,
  geography: geographyChapters
};

export const getTotalQuestionsBySubject = (subject: string): number => {
  if (!questionsBySubject[subject]) {
    return 0;
  }
  return questionsBySubject[subject].reduce((total, chapter) => total + chapter.questions.length, 0);
};

export const getChaptersBySubject = (subject: string): Chapter[] => {
    return questionsBySubject[subject] || [];
};

export const getQuestionsForQuiz = (subject: string, chapterId: string, difficulty: 'easy' | 'medium' | 'hard', numberOfQuestions: number): Question[] => {
  const chapter = questionsBySubject[subject]?.find(c => c.id === chapterId);
  if (!chapter) {
    return [];
  }

  const filteredQuestions = chapter.questions.filter(q => q.difficulty === difficulty);
  if (filteredQuestions.length <= numberOfQuestions) {
    return filteredQuestions;
  }

  const shuffledQuestions = [...filteredQuestions].sort(() => 0.5 - Math.random());
  return shuffledQuestions.slice(0, numberOfQuestions);
};
