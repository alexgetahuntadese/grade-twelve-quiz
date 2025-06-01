
import { Chapter } from '../types';

export const economicsChapters: Chapter[] = [
  {
    id: 'basic_economics',
    name: 'Basic Economic Principles',
    description: 'Introduction to economic concepts and principles',
    questions: [
      // Easy Questions
      {
        id: 'econ_basic_easy_1',
        question: 'What is economics?',
        options: ['Study of money', 'Study of scarcity and choice', 'Study of business', 'Study of government'],
        correct: 'Study of scarcity and choice',
        explanation: 'Economics is the study of how people make choices when resources are scarce.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_2',
        question: 'What are the two main branches of economics?',
        options: ['Micro and Macro', 'Local and Global', 'Public and Private', 'Theory and Practice'],
        correct: 'Micro and Macro',
        explanation: 'Economics is divided into microeconomics and macroeconomics.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_3',
        question: 'What is opportunity cost?',
        options: ['The price of goods', 'Cost of production', 'Value of next best alternative', 'Total expenses'],
        correct: 'Value of next best alternative',
        explanation: 'Opportunity cost is the value of the next best alternative that is given up.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_4',
        question: 'What determines the price in a free market?',
        options: ['Government', 'Supply and demand', 'Production cost', 'Consumer income'],
        correct: 'Supply and demand',
        explanation: 'In a free market, prices are determined by the interaction of supply and demand.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_5',
        question: 'What is inflation?',
        options: ['Rising prices', 'Falling prices', 'Stable prices', 'No prices'],
        correct: 'Rising prices',
        explanation: 'Inflation is a general increase in prices over time.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'econ_basic_med_1',
        question: 'What is GDP?',
        options: ['Government Debt Program', 'Gross Domestic Product', 'Global Development Plan', 'General Distribution Policy'],
        correct: 'Gross Domestic Product',
        explanation: 'GDP measures the total value of goods and services produced in a country.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'econ_basic_hard_1',
        question: 'What is the marginal utility theory?',
        options: ['Utility increases with consumption', 'Utility decreases with each additional unit', 'Utility remains constant', 'Utility is unpredictable'],
        correct: 'Utility decreases with each additional unit',
        explanation: 'Marginal utility theory states that additional satisfaction decreases with each additional unit consumed.',
        difficulty: 'hard'
      }
    ]
  }
];
