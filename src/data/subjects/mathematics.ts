
import { Chapter } from '../types';

export const mathematicsChapters: Chapter[] = [
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
    },
{
  id: 'limits',
  name: 'Limits and Continuity',
  description: 'Understanding the behavior of functions as inputs approach certain values',
  questions: [
    {
      id: 'lim_1',
      question: 'What is the limit of f(x) = 2x as x approaches 3?',
      options: ['6', '3', '2', '5'],
      correct: '6',
      explanation: 'Direct substitution gives 2×3 = 6.',
      difficulty: 'easy'
    },
    {
      id: 'lim_2',
      question: 'lim(x → 0) x² = ?',
      options: ['0', '1', '∞', 'Undefined'],
      correct: '0',
      explanation: 'As x approaches 0, x² also approaches 0.',
      difficulty: 'easy'
    },
    {
      id: 'lim_3',
      question: 'Which function is continuous for all real numbers?',
      options: ['f(x) = x²', 'f(x) = 1/x', 'f(x) = √(x-1)', 'f(x) = ln(x)'],
      correct: 'f(x) = x²',
      explanation: 'Polynomial functions like x² are continuous everywhere.',
      difficulty: 'easy'
    },
    {
      id: 'lim_4',
      question: 'What is the limit of a constant function f(x) = 5 as x approaches any value?',
      options: ['0', 'x', '5', 'Undefined'],
      correct: '5',
      explanation: 'The value of a constant function is always the same.',
      difficulty: 'easy'
    },
    {
      id: 'lim_5',
      question: 'lim(x → ∞) 1/x = ?',
      options: ['1', '0', '∞', 'Undefined'],
      correct: '0',
      explanation: 'As x increases, 1/x decreases toward 0.',
      difficulty: 'easy'
    },
    {
      id: 'lim_6',
      question: 'Which of the following causes a discontinuity?',
      options: ['Jump in the graph', 'Constant function', 'x² function', 'Linear function'],
      correct: 'Jump in the graph',
      explanation: 'A jump creates a break in the graph, leading to discontinuity.',
      difficulty: 'easy'
    },
    {
      id: 'lim_7',
      question: 'If lim(x → 2) f(x) = 4, what does this mean?',
      options: ['f(2) = 4', 'f(x) becomes 4 as x gets close to 2', 'f(x) is undefined', 'x = 4'],
      correct: 'f(x) becomes 4 as x gets close to 2',
      explanation: 'The limit describes behavior as x approaches a value, not necessarily the function value.',
      difficulty: 'easy'
    },
    {
      id: 'lim_8',
      question: 'What is the limit of f(x) = |x|/x as x approaches 0?',
      options: ['0', '1', '-1', 'Does not exist'],
      correct: 'Does not exist',
      explanation: 'The left and right-hand limits are different, so the limit does not exist.',
      difficulty: 'easy'
    },
    {
      id: 'lim_9',
      question: 'If a function is continuous at x = a, then:',
      options: ['lim(x→a) f(x) = f(a)', 'f(a) is undefined', 'f(x) is infinite at a', 'There is a hole at a'],
      correct: 'lim(x→a) f(x) = f(a)',
      explanation: 'This is the definition of continuity at a point.',
      difficulty: 'easy'
    },
    {
      id: 'lim_10',
      question: 'What is lim(x → 1) (x² - 1)/(x - 1)?',
      options: ['2', '0', '1', 'Does not exist'],
      correct: '2',
      explanation: 'Factor: (x² - 1)/(x - 1) = (x+1); at x = 1, it becomes 2.',
      difficulty: 'medium'
    }
  ]
}
];