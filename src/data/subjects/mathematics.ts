import { Chapter } from '../types';

export const mathematicsChapters: Chapter[] = [
  {
    id: 'number_system',
    name: 'Number System',
    description: 'Integers, fractions, decimals, and real numbers',
    questions: [
      {
        id: 'num_1',
        question: 'What is the value of π (pi) to two decimal places?',
        options: ['3.14', '3.16', '3.20', '3.22'],
        correct: '3.14',
        explanation: 'π (pi) is approximately equal to 3.14',
        difficulty: 'easy'
      },
      {
        id: 'num_2',
        question: 'Which of the following is a rational number?',
        options: ['√2', 'π', '1/3', '√3'],
        correct: '1/3',
        explanation: 'A rational number can be expressed as a fraction p/q',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'algebra_basics',
    name: 'Algebra Basics',
    description: 'Introduction to algebraic expressions and equations',
    questions: [
      {
        id: 'alg_1',
        question: 'What is the value of x in the equation 2x + 5 = 15?',
        options: ['5', '10', '15', '20'],
        correct: '5',
        explanation: 'Subtract 5 from both sides: 2x = 10, then divide by 2: x = 5',
        difficulty: 'easy'
      },
      {
        id: 'alg_2',
        question: 'Simplify: 3x + 2x',
        options: ['5x', '6x', '5x²', '6x²'],
        correct: '5x',
        explanation: 'Combine like terms: 3x + 2x = 5x',
        difficulty: 'easy'
      }
    ]
  },

  // Grade 11 Chapter
  {
    id: 'grade11_advanced_algebra',
    name: 'Grade 11: Advanced Algebra',
    description: 'Quadratic equations, polynomials, and advanced algebraic concepts',
    questions: [
      // Easy Questions
      {
        id: 'g11_alg_easy_1',
        question: 'What is the discriminant of the quadratic equation x² + 5x + 6 = 0?',
        options: ['1', '5', '25', '49'],
        correct: '1',
        explanation: 'Discriminant = b² - 4ac = 5² - 4(1)(6) = 25 - 24 = 1',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_2',
        question: 'Factor: x² + 7x + 12',
        options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x - 3)(x - 4)'],
        correct: '(x + 3)(x + 4)',
        explanation: 'Find two numbers that multiply to 12 and add to 7: 3 and 4',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_3',
        question: 'What is the vertex form of a parabola?',
        options: ['y = ax² + bx + c', 'y = a(x - h)² + k', 'y = ax + b', 'y = a(x + h)² - k'],
        correct: 'y = a(x - h)² + k',
        explanation: 'Vertex form is y = a(x - h)² + k where (h, k) is the vertex',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_4',
        question: 'Solve: x² - 9 = 0',
        options: ['x = ±3', 'x = ±9', 'x = 3', 'x = 9'],
        correct: 'x = ±3',
        explanation: 'x² = 9, so x = ±√9 = ±3',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_5',
        question: 'What is the degree of the polynomial 3x⁴ + 2x² - 5?',
        options: ['2', '3', '4', '5'],
        correct: '4',
        explanation: 'The degree is the highest power of x, which is 4',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_6',
        question: 'Simplify: (x + 2)²',
        options: ['x² + 4', 'x² + 4x + 4', 'x² + 2x + 4', 'x² + 4x + 2'],
        correct: 'x² + 4x + 4',
        explanation: '(x + 2)² = x² + 2(x)(2) + 2² = x² + 4x + 4',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_7',
        question: 'What is the axis of symmetry for y = x² + 6x + 5?',
        options: ['x = -3', 'x = 3', 'x = -6', 'x = 6'],
        correct: 'x = -3',
        explanation: 'Axis of symmetry: x = -b/2a = -6/2(1) = -3',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_8',
        question: 'Factor: x² - 16',
        options: ['(x - 4)(x - 4)', '(x + 4)(x - 4)', '(x + 4)(x + 4)', 'Cannot be factored'],
        correct: '(x + 4)(x - 4)',
        explanation: 'This is a difference of squares: x² - 16 = (x + 4)(x - 4)',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_9',
        question: 'What is the y-intercept of y = 2x² + 3x - 1?',
        options: ['-1', '1', '2', '3'],
        correct: '-1',
        explanation: 'Y-intercept occurs when x = 0: y = 2(0)² + 3(0) - 1 = -1',
        difficulty: 'easy'
      },
      {
        id: 'g11_alg_easy_10',
        question: 'Solve: 2x² = 32',
        options: ['x = ±4', 'x = ±8', 'x = ±16', 'x = ±2'],
        correct: 'x = ±4',
        explanation: 'x² = 16, so x = ±√16 = ±4',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_alg_med_1',
        question: 'Solve using the quadratic formula: x² - 4x + 3 = 0',
        options: ['x = 1, 3', 'x = -1, -3', 'x = 2, 2', 'x = 1, -3'],
        correct: 'x = 1, 3',
        explanation: 'x = (4 ± √(16-12))/2 = (4 ± 2)/2 = 3 or 1',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_2',
        question: 'Complete the square: x² + 8x + 7',
        options: ['(x + 4)² - 9', '(x + 4)² + 7', '(x + 8)² - 57', '(x + 4)² - 16'],
        correct: '(x + 4)² - 9',
        explanation: 'x² + 8x + 7 = (x + 4)² - 16 + 7 = (x + 4)² - 9',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_3',
        question: 'Find the vertex of y = x² - 6x + 8',
        options: ['(3, -1)', '(3, 1)', '(-3, -1)', '(-3, 1)'],
        correct: '(3, -1)',
        explanation: 'x = -b/2a = 6/2 = 3, y = 9 - 18 + 8 = -1',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_4',
        question: 'Factor completely: 2x³ - 8x',
        options: ['2x(x² - 4)', '2x(x + 2)(x - 2)', 'x(2x² - 8)', '2(x³ - 4x)'],
        correct: '2x(x + 2)(x - 2)',
        explanation: '2x³ - 8x = 2x(x² - 4) = 2x(x + 2)(x - 2)',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_5',
        question: 'Solve: x² + 6x + 9 = 0',
        options: ['x = -3 (double root)', 'x = 3', 'x = ±3', 'No real solutions'],
        correct: 'x = -3 (double root)',
        explanation: '(x + 3)² = 0, so x = -3 with multiplicity 2',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_6',
        question: 'What is the range of y = -(x - 2)² + 5?',
        options: ['y ≤ 5', 'y ≥ 5', 'y ≤ 2', 'y ≥ -5'],
        correct: 'y ≤ 5',
        explanation: 'Since a = -1 < 0, parabola opens down with maximum at (2, 5)',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_7',
        question: 'Solve: |x - 3| = 5',
        options: ['x = 8, -2', 'x = 8, 2', 'x = -8, 2', 'x = -8, -2'],
        correct: 'x = 8, -2',
        explanation: 'x - 3 = 5 or x - 3 = -5, so x = 8 or x = -2',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_8',
        question: 'Factor: x³ - 27',
        options: ['(x - 3)(x² + 3x + 9)', '(x - 3)³', '(x - 3)(x + 3)²', '(x - 3)(x² - 3x + 9)'],
        correct: '(x - 3)(x² + 3x + 9)',
        explanation: 'Difference of cubes: a³ - b³ = (a - b)(a² + ab + b²)',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_9',
        question: 'Simplify: (2x + 3)² - (2x - 3)²',
        options: ['12x', '24x', '4x² + 18', '0'],
        correct: '24x',
        explanation: '(a + b)² - (a - b)² = 4ab = 4(2x)(3) = 24x',
        difficulty: 'medium'
      },
      {
        id: 'g11_alg_med_10',
        question: 'Find k such that x² + kx + 9 is a perfect square trinomial',
        options: ['k = ±6', 'k = ±3', 'k = ±9', 'k = ±18'],
        correct: 'k = ±6',
        explanation: 'For (x ± 3)², the middle term is ±6x, so k = ±6',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_alg_hard_1',
        question: 'Solve the system: x² + y² = 25, x + y = 7',
        options: ['(3,4), (4,3)', '(0,5), (5,0)', '(1,6), (6,1)', '(2,5), (5,2)'],
        correct: '(3,4), (4,3)',
        explanation: 'Substitute y = 7-x into first equation: x² + (7-x)² = 25, solve to get x = 3,4',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_2',
        question: 'Find the sum of roots of 3x² - 7x + 2 = 0',
        options: ['7/3', '-7/3', '2/3', '-2/3'],
        correct: '7/3',
        explanation: 'Sum of roots = -b/a = -(-7)/3 = 7/3',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_3',
        question: 'Solve: √(x + 3) = x - 3',
        options: ['x = 6', 'x = 1', 'x = 6, 1', 'No solution'],
        correct: 'x = 6',
        explanation: 'Square both sides: x + 3 = (x-3)², solve and check: only x = 6 works',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_4',
        question: 'Factor completely: x⁴ - 16',
        options: ['(x² + 4)(x² - 4)', '(x² + 4)(x + 2)(x - 2)', '(x + 2)²(x - 2)²', '(x² - 4)²'],
        correct: '(x² + 4)(x + 2)(x - 2)',
        explanation: 'x⁴ - 16 = (x²)² - 4² = (x² + 4)(x² - 4) = (x² + 4)(x + 2)(x - 2)',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_5',
        question: 'Find the minimum value of f(x) = x² + 4x + 7',
        options: ['3', '4', '7', '-7'],
        correct: '3',
        explanation: 'Complete the square: f(x) = (x + 2)² + 3, minimum is 3',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_6',
        question: 'Solve: x/(x-1) + 2/(x+1) = 4/(x²-1)',
        options: ['x = 2', 'x = -2', 'x = 0', 'No solution'],
        correct: 'x = 2',
        explanation: 'Multiply by (x²-1), simplify to get x(x+1) + 2(x-1) = 4, solve x² + 3x - 6 = 0',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_7',
        question: 'Find the product of roots of 2x² + 5x - 3 = 0',
        options: ['-3/2', '3/2', '-5/2', '5/2'],
        correct: '-3/2',
        explanation: 'Product of roots = c/a = -3/2',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_8',
        question: 'Solve: |x² - 4| = 3',
        options: ['x = ±√7, ±1', 'x = ±√7', 'x = ±1', 'x = ±√7, ±√-1'],
        correct: 'x = ±√7, ±1',
        explanation: 'x² - 4 = 3 or x² - 4 = -3, giving x² = 7 or x² = 1',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_9',
        question: 'Find k such that x² - 6x + k = 0 has one repeated root',
        options: ['9', '-9', '6', '-6'],
        correct: '9',
        explanation: 'For repeated roots, discriminant = 0: 36 - 4k = 0, so k = 9',
        difficulty: 'hard'
      },
      {
        id: 'g11_alg_hard_10',
        question: 'Solve the inequality: x² - 5x + 6 < 0',
        options: ['x < 2 or x > 3', '2 < x < 3', 'x < -3 or x > -2', '-3 < x < -2'],
        correct: '2 < x < 3',
        explanation: 'Factor: (x-2)(x-3) < 0, solution is between the roots: 2 < x < 3',
        difficulty: 'hard'
      }
    ]
  }
];
