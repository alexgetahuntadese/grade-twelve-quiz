import { Chapter } from '../types';

export const mathematicsChapters: Chapter[] = [
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
      }
    ]
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
      }
    ]
  },
  {
    id: 'derivatives',
    name: 'Derivatives',
    description: 'Rate of change and slopes of curves',
    questions: [
      {
        id: 'deriv_1',
        question: 'What is the derivative of f(x) = x²?',
        options: ['x', '2x', 'x²', '2'],
        correct: '2x',
        explanation: 'Using the power rule: d/dx(x²) = 2x.',
        difficulty: 'easy'
      },
      {
        id: 'deriv_2',
        question: 'What is the derivative of a constant?',
        options: ['1', '0', 'The constant itself', 'x'],
        correct: '0',
        explanation: 'The derivative of any constant is always 0.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'integrals',
    name: 'Integrals',
    description: 'Area under curves and antiderivatives',
    questions: [
      {
        id: 'int_1',
        question: 'What is ∫2x dx?',
        options: ['x²', 'x² + C', '2x²', '2x² + C'],
        correct: 'x² + C',
        explanation: 'The antiderivative of 2x is x² plus a constant of integration.',
        difficulty: 'easy'
      },
      {
        id: 'int_2',
        question: 'What does the definite integral represent geometrically?',
        options: ['Slope', 'Area under the curve', 'Maximum value', 'Minimum value'],
        correct: 'Area under the curve',
        explanation: 'A definite integral gives the area between the curve and the x-axis.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'algebra',
    name: 'Algebra',
    description: 'Solving equations and working with variables',
    questions: [
      {
        id: 'alg_1',
        question: 'Solve for x: 2x + 5 = 11',
        options: ['x = 3', 'x = 8', 'x = 6', 'x = 16'],
        correct: 'x = 3',
        explanation: '2x = 11 - 5 = 6, so x = 3.',
        difficulty: 'easy'
      },
      {
        id: 'alg_2',
        question: 'What is the slope of the line y = 3x + 2?',
        options: ['3', '2', '5', '1'],
        correct: '3',
        explanation: 'In y = mx + b form, m is the slope, so the slope is 3.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'geometry',
    name: 'Geometry',
    description: 'Shapes, angles, and spatial relationships',
    questions: [
      {
        id: 'geom_1',
        question: 'What is the area of a circle with radius 3?',
        options: ['9π', '6π', '3π', '18π'],
        correct: '9π',
        explanation: 'Area = πr² = π(3)² = 9π.',
        difficulty: 'easy'
      },
      {
        id: 'geom_2',
        question: 'How many degrees are in a triangle?',
        options: ['90°', '180°', '270°', '360°'],
        correct: '180°',
        explanation: 'The sum of angles in any triangle is always 180°.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'trigonometry',
    name: 'Trigonometry',
    description: 'Relationships between angles and sides in triangles',
    questions: [
      {
        id: 'trig_1',
        question: 'What is sin(90°)?',
        options: ['0', '1', '0.5', '√2/2'],
        correct: '1',
        explanation: 'The sine of 90° is 1.',
        difficulty: 'easy'
      },
      {
        id: 'trig_2',
        question: 'What is cos(0°)?',
        options: ['0', '1', '-1', '0.5'],
        correct: '1',
        explanation: 'The cosine of 0° is 1.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'statistics',
    name: 'Statistics and Probability',
    description: 'Data analysis and probability theory',
    questions: [
      {
        id: 'stat_1',
        question: 'What is the mean of 2, 4, 6, 8?',
        options: ['4', '5', '6', '7'],
        correct: '5',
        explanation: 'Mean = (2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5.',
        difficulty: 'easy'
      },
      {
        id: 'stat_2',
        question: 'If you flip a fair coin, what is the probability of getting heads?',
        options: ['0.25', '0.5', '0.75', '1'],
        correct: '0.5',
        explanation: 'A fair coin has equal probability of heads or tails, so P(heads) = 1/2 = 0.5.',
        difficulty: 'easy'
      }
    ]
  }
];
