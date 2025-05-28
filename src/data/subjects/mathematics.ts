
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
      correct: '1',
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
    // Medium Questions
    {
      id: 'func_11',
      question: 'What is the composition (f ∘ g)(x) if f(x) = 2x + 1 and g(x) = x²?',
      options: ['2x² + 1', '2x³ + x²', '(2x + 1)²', '2(x + 1)²'],
      correct: '2x² + 1',
      explanation: '(f ∘ g)(x) = f(g(x)) = f(x²) = 2(x²) + 1 = 2x² + 1.',
      difficulty: 'medium'
    },
    {
      id: 'func_12',
      question: 'If f(x) = √(x - 2), what is the domain of f?',
      options: ['x ≥ 2', 'x > 2', 'All real numbers', 'x ≥ 0'],
      correct: 'x ≥ 2',
      explanation: 'For the square root to be defined, x - 2 ≥ 0, so x ≥ 2.',
      difficulty: 'medium'
    },
    {
      id: 'func_13',
      question: 'What is the range of f(x) = -x² + 4?',
      options: ['y ≤ 4', 'y ≥ 4', 'All real numbers', 'y ≥ -4'],
      correct: 'y ≤ 4',
      explanation: 'This is a downward parabola with vertex at (0, 4), so the maximum value is 4.',
      difficulty: 'medium'
    },
    {
      id: 'func_14',
      question: 'If f is one-to-one and f(3) = 7, what is f⁻¹(7)?',
      options: ['3', '7', '1/7', 'undefined'],
      correct: '3',
      explanation: 'If f(3) = 7, then by definition of inverse function, f⁻¹(7) = 3.',
      difficulty: 'medium'
    },
    {
      id: 'func_15',
      question: 'What is the vertical asymptote of f(x) = 1/(x - 3)?',
      options: ['x = 3', 'x = -3', 'y = 3', 'y = 0'],
      correct: 'x = 3',
      explanation: 'Vertical asymptotes occur where the denominator equals zero: x - 3 = 0, so x = 3.',
      difficulty: 'medium'
    },
    // Hard Questions
    {
      id: 'func_16',
      question: 'If f(x) = (2x - 1)/(x + 3), what is f⁻¹(x)?',
      options: ['(3x + 1)/(2 - x)', '(x + 3)/(2x - 1)', '(3x - 1)/(2 + x)', '(2x + 1)/(x - 3)'],
      correct: '(3x + 1)/(2 - x)',
      explanation: 'Let y = (2x - 1)/(x + 3). Solve for x: y(x + 3) = 2x - 1, yx + 3y = 2x - 1, x(y - 2) = -3y - 1, x = -(3y + 1)/(y - 2) = (3y + 1)/(2 - y).',
      difficulty: 'hard'
    },
    {
      id: 'func_17',
      question: 'What is the limit of f(x) = (x² - 4)/(x - 2) as x approaches 2?',
      options: ['4', '2', '0', 'undefined'],
      correct: '4',
      explanation: 'Factor: (x² - 4)/(x - 2) = (x + 2)(x - 2)/(x - 2) = x + 2. As x → 2, the limit is 2 + 2 = 4.',
      difficulty: 'hard'
    },
    {
      id: 'func_18',
      question: 'If f(x) = x³ - 3x² + 2x, how many real zeros does f have?',
      options: ['1', '2', '3', '0'],
      correct: '3',
      explanation: 'f(x) = x(x² - 3x + 2) = x(x - 1)(x - 2). The zeros are x = 0, 1, 2.',
      difficulty: 'hard'
    },
    {
      id: 'func_19',
      question: 'What is the period of f(x) = 3sin(2x - π/4) + 1?',
      options: ['π', '2π', 'π/2', '4π'],
      correct: 'π',
      explanation: 'For f(x) = sin(bx), the period is 2π/|b|. Here b = 2, so period = 2π/2 = π.',
      difficulty: 'hard'
    },
    {
      id: 'func_20',
      question: 'If f(x) = ln(x² + 1), what is f\'(x)?',
      options: ['2x/(x² + 1)', '1/(x² + 1)', '2x', 'ln(2x)'],
      correct: '2x/(x² + 1)',
      explanation: 'Using chain rule: f\'(x) = 1/(x² + 1) · d/dx(x² + 1) = 1/(x² + 1) · 2x = 2x/(x² + 1).',
      difficulty: 'hard'
    }
  ]
}
];
