
import { Chapter } from '../types';

export const physicalEducationChapters: Chapter[] = [
  {
    id: 'fitness_health',
    name: 'Fitness and Health',
    description: 'Physical fitness, health, and wellness concepts',
    questions: [
      // Easy Questions
      {
        id: 'pe_fitness_easy_1',
        question: 'What is physical fitness?',
        options: ['Being tall', 'Ability to perform physical activities', 'Having muscles', 'Being thin'],
        correct: 'Ability to perform physical activities',
        explanation: 'Physical fitness is the ability to perform physical activities effectively.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_2',
        question: 'How many minutes of exercise should you get daily?',
        options: ['10 minutes', '30 minutes', '60 minutes', '120 minutes'],
        correct: '60 minutes',
        explanation: 'Health experts recommend at least 60 minutes of physical activity daily for children.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_3',
        question: 'What is cardiovascular exercise?',
        options: ['Lifting weights', 'Exercise that strengthens the heart', 'Stretching', 'Balance training'],
        correct: 'Exercise that strengthens the heart',
        explanation: 'Cardiovascular exercise strengthens the heart and improves circulation.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_4',
        question: 'What should you do before exercising?',
        options: ['Eat a big meal', 'Warm up', 'Take a nap', 'Watch TV'],
        correct: 'Warm up',
        explanation: 'Warming up prepares your body for exercise and helps prevent injury.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_5',
        question: 'What is flexibility?',
        options: ['Muscle strength', 'Range of motion in joints', 'Running speed', 'Body weight'],
        correct: 'Range of motion in joints',
        explanation: 'Flexibility refers to the range of motion available in your joints.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'pe_fitness_med_1',
        question: 'What are the components of physical fitness?',
        options: ['Strength only', 'Cardio, strength, flexibility, body composition', 'Running and jumping', 'Diet and sleep'],
        correct: 'Cardio, strength, flexibility, body composition',
        explanation: 'The main components are cardiovascular endurance, muscular strength, flexibility, and body composition.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'pe_fitness_hard_1',
        question: 'What is the FITT principle?',
        options: ['Fitness goals', 'Frequency, Intensity, Time, Type', 'Exercise equipment', 'Nutrition plan'],
        correct: 'Frequency, Intensity, Time, Type',
        explanation: 'FITT stands for Frequency, Intensity, Time, and Type - key variables in exercise planning.',
        difficulty: 'hard'
      }
    ]
  }
];
