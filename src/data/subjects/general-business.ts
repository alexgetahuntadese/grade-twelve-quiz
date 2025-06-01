
import { Chapter } from '../types';

export const generalBusinessChapters: Chapter[] = [
  {
    id: 'business_fundamentals',
    name: 'Business Fundamentals',
    description: 'Basic concepts of business and entrepreneurship',
    questions: [
      // Easy Questions
      {
        id: 'bus_fund_easy_1',
        question: 'What is a business?',
        options: ['A hobby', 'An organization that provides goods or services', 'A government agency', 'A social club'],
        correct: 'An organization that provides goods or services',
        explanation: 'A business is an organization that provides goods or services to customers.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_2',
        question: 'What is profit?',
        options: ['Total sales', 'Revenue minus expenses', 'Number of customers', 'Business size'],
        correct: 'Revenue minus expenses',
        explanation: 'Profit is what remains after subtracting expenses from revenue.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_3',
        question: 'What is marketing?',
        options: ['Selling products', 'Promoting and selling products or services', 'Making products', 'Buying products'],
        correct: 'Promoting and selling products or services',
        explanation: 'Marketing involves promoting and selling products or services to customers.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_4',
        question: 'What is an entrepreneur?',
        options: ['An employee', 'Someone who starts a business', 'A customer', 'A supplier'],
        correct: 'Someone who starts a business',
        explanation: 'An entrepreneur is someone who starts and operates a business.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_5',
        question: 'What is customer service?',
        options: ['Making products', 'Helping customers', 'Counting money', 'Managing inventory'],
        correct: 'Helping customers',
        explanation: 'Customer service involves helping customers with their needs and questions.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'bus_fund_med_1',
        question: 'What is a business plan?',
        options: ['Daily schedule', 'Document outlining business strategy', 'Employee handbook', 'Product catalog'],
        correct: 'Document outlining business strategy',
        explanation: 'A business plan is a document that outlines a business strategy and goals.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'bus_fund_hard_1',
        question: 'What is return on investment (ROI)?',
        options: ['Total investment', 'Profit divided by investment cost', 'Number of customers', 'Business age'],
        correct: 'Profit divided by investment cost',
        explanation: 'ROI measures the efficiency of an investment by comparing profit to investment cost.',
        difficulty: 'hard'
      }
    ]
  }
];
