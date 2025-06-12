
import { Chapter } from '../types';

export const mathematicsChapters: Chapter[] = [
  {
    id: 'algebra',
    name: 'Algebra',
    description: 'Equations, functions, and algebraic expressions',
    questions: [
      // Easy Questions
      {
        id: 'alg_1',
        question: 'What is 2x + 3 = 7? Solve for x.',
        options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
        correct: 'x = 2',
        explanation: '2x + 3 = 7, so 2x = 4, therefore x = 2.',
        difficulty: 'easy'
      },
      {
        id: 'alg_2',
        question: 'What is the coefficient of x in 5x + 3?',
        options: ['3', '5', '8', 'x'],
        correct: '5',
        explanation: 'The coefficient is the number multiplying the variable, which is 5.',
        difficulty: 'easy'
      },
      {
        id: 'alg_3',
        question: 'Simplify: 3x + 2x',
        options: ['5x', '6x', '5x²', '6x²'],
        correct: '5x',
        explanation: 'Combining like terms: 3x + 2x = 5x',
        difficulty: 'easy'
      },
      {
        id: 'alg_4',
        question: 'What is the value of 3² + 2²?',
        options: ['5', '13', '25', '10'],
        correct: '13',
        explanation: '3² = 9 and 2² = 4, so 9 + 4 = 13',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'alg_med_1',
        question: 'Solve: 2x - 5 = 3x + 1',
        options: ['x = -6', 'x = -1', 'x = 1', 'x = 6'],
        correct: 'x = -6',
        explanation: '2x - 5 = 3x + 1, so -5 - 1 = 3x - 2x, therefore -6 = x',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_2',
        question: 'Factor: x² - 9',
        options: ['(x - 3)(x - 3)', '(x + 3)(x + 3)', '(x + 3)(x - 3)', 'Cannot be factored'],
        correct: '(x + 3)(x - 3)',
        explanation: 'This is a difference of squares: x² - 9 = x² - 3² = (x + 3)(x - 3)',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_3',
        question: 'What is the slope of the line y = 2x + 5?',
        options: ['2', '5', '7', '2x'],
        correct: '2',
        explanation: 'In the form y = mx + b, the slope is m = 2',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'alg_hard_1',
        question: 'Solve the quadratic equation: x² - 5x + 6 = 0',
        options: ['x = 2, 3', 'x = 1, 6', 'x = -2, -3', 'x = 0, 5'],
        correct: 'x = 2, 3',
        explanation: 'Factoring: (x - 2)(x - 3) = 0, so x = 2 or x = 3',
        difficulty: 'hard'
      },
      {
        id: 'alg_hard_2',
        question: 'Simplify: (x² + 3x + 2)/(x + 1)',
        options: ['x + 2', 'x + 1', 'x - 1', 'x² + 2'],
        correct: 'x + 2',
        explanation: 'Factor numerator: (x + 1)(x + 2)/(x + 1) = x + 2',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geometry',
    name: 'Geometry',
    description: 'Shapes, angles, and spatial relationships',
    questions: [
      // Easy Questions
      {
        id: 'geo_1',
        question: 'How many sides does a triangle have?',
        options: ['2', '3', '4', '5'],
        correct: '3',
        explanation: 'A triangle has exactly 3 sides.',
        difficulty: 'easy'
      },
      {
        id: 'geo_2',
        question: 'What is the sum of angles in a triangle?',
        options: ['90°', '180°', '270°', '360°'],
        correct: '180°',
        explanation: 'The sum of all angles in any triangle is always 180°.',
        difficulty: 'easy'
      },
      {
        id: 'geo_3',
        question: 'What is the perimeter of a square with side length 5?',
        options: ['15', '20', '25', '10'],
        correct: '20',
        explanation: 'Perimeter = 4 × side length = 4 × 5 = 20',
        difficulty: 'easy'
      },
      {
        id: 'geo_4',
        question: 'How many degrees in a right angle?',
        options: ['45°', '90°', '180°', '360°'],
        correct: '90°',
        explanation: 'A right angle measures exactly 90 degrees.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'geo_med_1',
        question: 'What is the area of a rectangle with length 8 and width 3?',
        options: ['11', '22', '24', '64'],
        correct: '24',
        explanation: 'Area = length × width = 8 × 3 = 24',
        difficulty: 'medium'
      },
      {
        id: 'geo_med_2',
        question: 'What is the circumference of a circle with radius 7? (Use π = 22/7)',
        options: ['14', '22', '44', '154'],
        correct: '44',
        explanation: 'Circumference = 2πr = 2 × (22/7) × 7 = 44',
        difficulty: 'medium'
      },
      {
        id: 'geo_med_3',
        question: 'In a right triangle, if one angle is 30°, what is the third angle?',
        options: ['30°', '60°', '90°', '120°'],
        correct: '60°',
        explanation: '180° - 90° - 30° = 60°',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'geo_hard_1',
        question: 'What is the area of a circle with diameter 14? (Use π = 22/7)',
        options: ['154', '308', '44', '88'],
        correct: '154',
        explanation: 'Radius = 7, Area = πr² = (22/7) × 7² = (22/7) × 49 = 154',
        difficulty: 'hard'
      },
      {
        id: 'geo_hard_2',
        question: 'In a triangle with sides 3, 4, and 5, what type of triangle is it?',
        options: ['Acute', 'Right', 'Obtuse', 'Equilateral'],
        correct: 'Right',
        explanation: '3² + 4² = 9 + 16 = 25 = 5², so it satisfies Pythagorean theorem',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade11_functions',
    name: 'Grade 11: Functions and Relations',
    description: 'Functions, domain, range, and function operations',
    questions: [
      // Easy Questions
      {
        id: 'g11_func_easy_1',
        question: 'What is a function?',
        options: ['Any equation', 'A relation where each input has exactly one output', 'A graph', 'A number'],
        correct: 'A relation where each input has exactly one output',
        explanation: 'A function assigns exactly one output value to each input value.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_2',
        question: 'If f(x) = 2x + 1, what is f(3)?',
        options: ['6', '7', '5', '8'],
        correct: '7',
        explanation: 'f(3) = 2(3) + 1 = 6 + 1 = 7',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_3',
        question: 'What is the domain of f(x) = x + 5?',
        options: ['All real numbers', 'x > 0', 'x ≥ 0', 'x ≠ 0'],
        correct: 'All real numbers',
        explanation: 'Linear functions have domain of all real numbers.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_4',
        question: 'What is the y-intercept of f(x) = 3x - 4?',
        options: ['3', '-4', '4', '0'],
        correct: '-4',
        explanation: 'The y-intercept occurs when x = 0: f(0) = 3(0) - 4 = -4',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_func_med_1',
        question: 'If f(x) = x² and g(x) = x + 2, what is (f ∘ g)(x)?',
        options: ['x² + 2', '(x + 2)²', 'x² + 4x + 4', 'Both B and C'],
        correct: 'Both B and C',
        explanation: '(f ∘ g)(x) = f(g(x)) = f(x + 2) = (x + 2)² = x² + 4x + 4',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_2',
        question: 'What is the inverse of f(x) = 2x - 3?',
        options: ['f⁻¹(x) = (x + 3)/2', 'f⁻¹(x) = (x - 3)/2', 'f⁻¹(x) = 2x + 3', 'f⁻¹(x) = x/2 + 3'],
        correct: 'f⁻¹(x) = (x + 3)/2',
        explanation: 'Let y = 2x - 3, solve for x: x = (y + 3)/2, so f⁻¹(x) = (x + 3)/2',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_3',
        question: 'What is the range of f(x) = x² for x ∈ ℝ?',
        options: ['All real numbers', 'y ≥ 0', 'y > 0', 'y ≤ 0'],
        correct: 'y ≥ 0',
        explanation: 'Since x² is always non-negative, the range is y ≥ 0.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_func_hard_1',
        question: 'If f(x) = √(x - 1), what is the domain?',
        options: ['x ≥ 1', 'x > 1', 'x ≥ 0', 'All real numbers'],
        correct: 'x ≥ 1',
        explanation: 'For the square root to be defined, x - 1 ≥ 0, so x ≥ 1.',
        difficulty: 'hard'
      },
      {
        id: 'g11_func_hard_2',
        question: 'Which function is one-to-one?',
        options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = 2x + 1', 'f(x) = x² + 1'],
        correct: 'f(x) = 2x + 1',
        explanation: 'A linear function with non-zero slope is one-to-one (passes horizontal line test).',
        difficulty: 'hard'
      }
    ]
  }
];
