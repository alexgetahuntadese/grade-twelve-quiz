
import { Chapter } from '../types';

export const informationTechnologyChapters: Chapter[] = [
  {
    id: 'computer_basics',
    name: 'Computer Basics',
    description: 'Introduction to computers and information technology',
    questions: [
      // Easy Questions
      {
        id: 'it_basics_easy_1',
        question: 'What does CPU stand for?',
        options: ['Computer Personal Unit', 'Central Processing Unit', 'Computer Program Unit', 'Central Program Unit'],
        correct: 'Central Processing Unit',
        explanation: 'CPU stands for Central Processing Unit, the brain of the computer.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_2',
        question: 'What is software?',
        options: ['Physical parts of computer', 'Programs and applications', 'Computer screen', 'Keyboard and mouse'],
        correct: 'Programs and applications',
        explanation: 'Software refers to programs and applications that run on a computer.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_3',
        question: 'What is the internet?',
        options: ['A computer game', 'Global network of computers', 'A software program', 'A type of computer'],
        correct: 'Global network of computers',
        explanation: 'The internet is a global network connecting millions of computers worldwide.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_4',
        question: 'What is an operating system?',
        options: ['A game', 'Software that manages computer resources', 'A website', 'A computer part'],
        correct: 'Software that manages computer resources',
        explanation: 'An operating system manages computer hardware and software resources.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_5',
        question: 'What is RAM?',
        options: ['Random Access Memory', 'Really Awesome Memory', 'Rapid Action Memory', 'Read And Modify'],
        correct: 'Random Access Memory',
        explanation: 'RAM stands for Random Access Memory, temporary storage for running programs.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'it_basics_med_1',
        question: 'What is the difference between hardware and software?',
        options: ['No difference', 'Hardware is physical, software is programs', 'Hardware is new, software is old', 'Hardware is expensive, software is free'],
        correct: 'Hardware is physical, software is programs',
        explanation: 'Hardware refers to physical components, software refers to programs and applications.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'it_basics_hard_1',
        question: 'What is binary code?',
        options: ['Programming language', 'Number system using 0s and 1s', 'Computer virus', 'Internet protocol'],
        correct: 'Number system using 0s and 1s',
        explanation: 'Binary code is a number system using only 0s and 1s that computers use to process information.',
        difficulty: 'hard'
      }
    ]
  }
];
