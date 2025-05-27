import { Chapter } from '../types';

export const englishChapters:
Chapter[] = [
//1.Functions
{
  id: 'functions',
  name: 'Functions',
  description: 'Understanding mathematical functions and their properties',
  questions: [
    {
      id: 'func_1',
      question: 'What is the domain of f(x) = 1/x?',
      options: ['All real numbers', 'All real numbers except 0', 'Only positive numbers', 'Only negative numbers'],
      correct: 'All real numbers except 0',
      explanation: 'Division by zero is undefined, so x cannot equal 0.',
      difficulty: 'easy'
    },
    {
      id: 'func_2',
      question: 'What is f(3) if f(x) = x² + 2?',
      options: ['5', '9', '11', '7'],
      correct: '11',
      explanation: 'Substitute x = 3: f(3) = 3² + 2 = 9 + 2 = 11.',
      difficulty: 'easy'
    },
    {
      id: 'func_3',
      question: 'Which of the following is not a function?',
      options: ['y = x²', 'y = √x', 'x = y²', 'y = 2x + 3'],
      correct: 'x = y²',
      explanation: 'x = y² fails the vertical line test, so it is not a function.',
      difficulty: 'easy'
    },
    {
      id: 'func_4',
      question: 'What is the range of f(x) = x²?',
      options: ['All real numbers', 'x ≥ 0', 'x > 0', 'x ≤ 0'],
      correct: 'x ≥ 0',
      explanation: 'The square of any real number is non-negative.',
      difficulty: 'easy'
    },
    {
      id: 'func_5',
      question: 'Which of the following is the inverse of f(x) = 2x + 1?',
      options: ['f⁻¹(x) = (x - 1)/2', 'f⁻¹(x) = 2x - 1', 'f⁻¹(x) = x + 1', 'f⁻¹(x) = (x + 1)/2'],
      correct: 'f⁻¹(x) = (x - 1)/2',
      explanation: 'To find the inverse, solve y = 2x + 1 for x.',
      difficulty: 'easy'
    },
    {
      id: 'func_6',
      question: 'If f(x) = x - 3 and g(x) = x², what is (f ∘ g)(2)?',
      options: ['1', '4', '2', '0'],
      correct: '-1',
      explanation: 'g(2) = 4; then f(4) = 4 - 3 = 1.',
      difficulty: 'easy'
    },
    {
      id: 'func_7',
      question: 'Which function is linear?',
      options: ['f(x) = 2x', 'f(x) = x²', 'f(x) = 1/x', 'f(x) = √x'],
      correct: 'f(x) = 2x',
      explanation: 'A linear function has the form f(x) = mx + b.',
      difficulty: 'easy'
    },
    {
      id: 'func_8',
      question: 'What is the value of f(0) if f(x) = 5x + 7?',
      options: ['7', '5', '0', '-7'],
      correct: '7',
      explanation: 'f(0) = 5×0 + 7 = 7.',
      difficulty: 'easy'
    },
    {
      id: 'func_9',
      question: 'What type of function is f(x) = |x|?',
      options: ['Linear', 'Quadratic', 'Absolute value', 'Exponential'],
      correct: 'Absolute value',
      explanation: 'The function has a "V" shape and represents absolute value.',
      difficulty: 'easy'
    },
    {
      id: 'func_10',
      question: 'What is the image of x = 2 under f(x) = 3x - 1?',
      options: ['5', '6', '7', '4'],
      correct: '5',
      explanation: 'f(2) = 3×2 - 1 = 6 - 1 = 5.',
      difficulty: 'easy'
    }
  ]
}
