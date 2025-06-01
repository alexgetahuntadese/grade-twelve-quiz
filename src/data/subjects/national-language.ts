
import { Chapter } from '../types';

export const nationalLanguageChapters: Chapter[] = [
  {
    id: 'amharic_basics',
    name: 'Amharic Language Basics',
    description: 'Introduction to Ethiopian national language - Amharic',
    questions: [
      // Easy Questions
      {
        id: 'amharic_easy_1',
        question: 'What is the national language of Ethiopia?',
        options: ['English', 'Amharic', 'Oromo', 'Tigrinya'],
        correct: 'Amharic',
        explanation: 'Amharic is the official working language of Ethiopia.',
        difficulty: 'easy'
      },
      {
        id: 'amharic_easy_2',
        question: 'How do you say "hello" in Amharic?',
        options: ['Selam', 'Tadias', 'Dehna', 'Ishi'],
        correct: 'Selam',
        explanation: 'Selam is the common greeting for hello in Amharic.',
        difficulty: 'easy'
      },
      {
        id: 'amharic_easy_3',
        question: 'What script is used to write Amharic?',
        options: ['Latin', 'Ge\'ez', 'Arabic', 'Cyrillic'],
        correct: 'Ge\'ez',
        explanation: 'Amharic uses the Ge\'ez script, also known as Fidel.',
        difficulty: 'easy'
      },
      {
        id: 'amharic_easy_4',
        question: 'How do you say "thank you" in Amharic?',
        options: ['Ameseginalehu', 'Yikirta', 'Beka', 'Ishi'],
        correct: 'Ameseginalehu',
        explanation: 'Ameseginalehu means thank you in Amharic.',
        difficulty: 'easy'
      },
      {
        id: 'amharic_easy_5',
        question: 'What does "Ethiopia" mean in Amharic?',
        options: ['Ityopya', 'Habesha', 'Afrika', 'Addis'],
        correct: 'Ityopya',
        explanation: 'Ethiopia is called Ityopya in Amharic.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'amharic_med_1',
        question: 'How many letters are in the Amharic alphabet?',
        options: ['26', '33', '231', '280'],
        correct: '231',
        explanation: 'The Amharic writing system has 231 basic characters.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'amharic_hard_1',
        question: 'Which language family does Amharic belong to?',
        options: ['Indo-European', 'Afro-Asiatic', 'Niger-Congo', 'Sino-Tibetan'],
        correct: 'Afro-Asiatic',
        explanation: 'Amharic belongs to the Semitic branch of the Afro-Asiatic language family.',
        difficulty: 'hard'
      }
    ]
  }
];
