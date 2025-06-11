
import { Chapter } from '../types';

export const grade11GeographyChapters: Chapter[] = [
  {
    id: 'grade11_human_geography',
    name: 'Grade 11: Human Geography and Urbanization',
    description: 'Population patterns, migration, and urban development',
    questions: [
      // Easy Questions
      {
        id: 'g11_human_easy_1',
        question: 'What is population density?',
        options: ['Total population', 'Number of people per unit area', 'Birth rate', 'Migration rate'],
        correct: 'Number of people per unit area',
        explanation: 'Population density measures how many people live in a given area, usually per square kilometer.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_2',
        question: 'What is urbanization?',
        options: ['Rural development', 'Growth of cities and urban areas', 'Population decline', 'Agricultural expansion'],
        correct: 'Growth of cities and urban areas',
        explanation: 'Urbanization is the process of population shift from rural to urban areas and city growth.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_3',
        question: 'What is migration?',
        options: ['Population growth', 'Movement of people from one place to another', 'City planning', 'Economic development'],
        correct: 'Movement of people from one place to another',
        explanation: 'Migration is the movement of people from one geographic area to another.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_4',
        question: 'What is a megacity?',
        options: ['Small town', 'City with over 10 million people', 'Rural area', 'Industrial zone'],
        correct: 'City with over 10 million people',
        explanation: 'A megacity is defined as an urban area with a population exceeding 10 million people.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_5',
        question: 'What causes rural-to-urban migration?',
        options: ['Better climate', 'Economic opportunities in cities', 'More land', 'Better farming'],
        correct: 'Economic opportunities in cities',
        explanation: 'People migrate from rural to urban areas seeking better economic opportunities and services.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_human_med_1',
        question: 'What is the demographic transition model?',
        options: ['Migration pattern', 'Model showing population change over time', 'Urban planning tool', 'Economic theory'],
        correct: 'Model showing population change over time',
        explanation: 'The demographic transition model shows how birth and death rates change as countries develop.',
        difficulty: 'medium'
      },
      {
        id: 'g11_human_med_2',
        question: 'What are push and pull factors in migration?',
        options: ['Physical forces', 'Factors that drive people away and attract them', 'Economic indicators', 'Urban features'],
        correct: 'Factors that drive people away and attract them',
        explanation: 'Push factors drive people away from an area; pull factors attract them to a new area.',
        difficulty: 'medium'
      },
      {
        id: 'g11_human_med_3',
        question: 'What is urban sprawl?',
        options: ['City center development', 'Uncontrolled expansion of urban areas', 'Population decline', 'Industrial growth'],
        correct: 'Uncontrolled expansion of urban areas',
        explanation: 'Urban sprawl is the uncontrolled expansion of urban areas into surrounding regions.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_human_hard_1',
        question: 'What is the concentric zone model?',
        options: ['Migration theory', 'Urban structure model with zones radiating from center', 'Population theory', 'Economic model'],
        correct: 'Urban structure model with zones radiating from center',
        explanation: 'The concentric zone model describes urban structure as zones radiating outward from the city center.',
        difficulty: 'hard'
      },
      {
        id: 'g11_human_hard_2',
        question: 'What is carrying capacity in human geography?',
        options: ['Transportation ability', 'Maximum population an area can sustain', 'Economic output', 'Urban density limit'],
        correct: 'Maximum population an area can sustain',
        explanation: 'Carrying capacity is the maximum number of people an environment can sustain indefinitely.',
        difficulty: 'hard'
      }
    ]
  }
];
