import { Chapter } from '../types';
import { grade11MathematicsChapters } from './mathematics/grade11';
import { grade12MathematicsChapters } from './mathematics/grade12';

export const mathematicsChapters: Chapter[] = [
  {
    id: 'basic_arithmetic',
    name: 'Basic Arithmetic',
    description: 'Foundation arithmetic operations and number theory',
    questions: [
      {
        id: 'arith-1',
        question: 'What is 5 + 3?',
        options: ['6', '7', '8', '9'],
        correct: '8',
        explanation: '5 + 3 equals 8.',
        difficulty: 'easy'
      },
      {
        id: 'arith-2',
        question: 'What is 10 - 4?',
        options: ['4', '5', '6', '7'],
        correct: '6',
        explanation: '10 - 4 equals 6.',
        difficulty: 'easy'
      },
      {
        id: 'arith-3',
        question: 'What is 2 x 6?',
        options: ['8', '10', '12', '14'],
        correct: '12',
        explanation: '2 multiplied by 6 equals 12.',
        difficulty: 'easy'
      },
      {
        id: 'arith-4',
        question: 'What is 20 / 5?',
        options: ['2', '3', '4', '5'],
        correct: '4',
        explanation: '20 divided by 5 equals 4.',
        difficulty: 'easy'
      },
      {
        id: 'arith-5',
        question: 'What is the next prime number after 7?',
        options: ['8', '9', '10', '11'],
        correct: '11',
        explanation: 'The next prime number after 7 is 11.',
        difficulty: 'medium'
      },
      {
        id: 'arith-6',
        question: 'What is the square root of 81?',
        options: ['7', '8', '9', '10'],
        correct: '9',
        explanation: 'The square root of 81 is 9.',
        difficulty: 'medium'
      },
      {
        id: 'arith-7',
        question: 'What is 15% of 200?',
        options: ['20', '25', '30', '35'],
        correct: '30',
        explanation: '15% of 200 is 30.',
        difficulty: 'medium'
      },
      {
        id: 'arith-8',
        question: 'What is 2^5 (2 to the power of 5)?',
        options: ['16', '24', '32', '64'],
        correct: '32',
        explanation: '2 to the power of 5 is 32.',
        difficulty: 'medium'
      },
      {
        id: 'arith-9',
        question: 'What is the value of π (pi) to two decimal places?',
        options: ['3.10', '3.12', '3.14', '3.16'],
        correct: '3.14',
        explanation: 'The value of pi to two decimal places is 3.14.',
        difficulty: 'hard'
      },
      {
        id: 'arith-10',
        question: 'What is the sum of the first 10 natural numbers?',
        options: ['45', '50', '55', '60'],
        correct: '55',
        explanation: 'The sum of the first 10 natural numbers is 55.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'algebra_basics',
    name: 'Algebra Fundamentals',
    description: 'Introduction to algebraic expressions and equations',
    questions: [
      {
        id: 'alg-1',
        question: 'Solve for x: x + 5 = 12',
        options: ['5', '6', '7', '8'],
        correct: '7',
        explanation: 'Subtracting 5 from both sides gives x = 7.',
        difficulty: 'easy'
      },
      {
        id: 'alg-2',
        question: 'Solve for y: 3y = 15',
        options: ['3', '4', '5', '6'],
        correct: '5',
        explanation: 'Dividing both sides by 3 gives y = 5.',
        difficulty: 'easy'
      },
      {
        id: 'alg-3',
        question: 'Simplify: 2a + 3a - a',
        options: ['3a', '4a', '5a', '6a'],
        correct: '4a',
        explanation: 'Combining like terms gives 4a.',
        difficulty: 'easy'
      },
      {
        id: 'alg-4',
        question: 'Expand: 2(x + 3)',
        options: ['2x + 3', '2x + 5', '2x + 6', '2x + 9'],
        correct: '2x + 6',
        explanation: 'Distributing the 2 gives 2x + 6.',
        difficulty: 'easy'
      },
      {
        id: 'alg-5',
        question: 'Solve for x: 2x + 4 = 10',
        options: ['2', '3', '4', '5'],
        correct: '3',
        explanation: 'Subtracting 4 and dividing by 2 gives x = 3.',
        difficulty: 'medium'
      },
      {
        id: 'alg-6',
        question: 'Solve for y: 5y - 3 = 12',
        options: ['1', '2', '3', '4'],
        correct: '3',
        explanation: 'Adding 3 and dividing by 5 gives y = 3.',
        difficulty: 'medium'
      },
      {
        id: 'alg-7',
        question: 'Factor: x^2 - 4',
        options: ['(x - 2)(x - 2)', '(x + 2)(x + 2)', '(x + 2)(x - 2)', '(x - 4)(x + 1)'],
        correct: '(x + 2)(x - 2)',
        explanation: 'Using the difference of squares gives (x + 2)(x - 2).',
        difficulty: 'medium'
      },
      {
        id: 'alg-8',
        question: 'Simplify: (3x^2)(4x^3)',
        options: ['7x^5', '12x^5', '7x^6', '12x^6'],
        correct: '12x^5',
        explanation: 'Multiplying coefficients and adding exponents gives 12x^5.',
        difficulty: 'medium'
      },
      {
        id: 'alg-9',
        question: 'Solve for x: |x| = 5',
        options: ['5', '-5', '5 and -5', 'No solution'],
        correct: '5 and -5',
        explanation: 'The absolute value of x is 5 when x is 5 or -5.',
        difficulty: 'hard'
      },
      {
        id: 'alg-10',
        question: 'Solve for x: √(x + 2) = 4',
        options: ['12', '13', '14', '15'],
        correct: '14',
        explanation: 'Squaring both sides and subtracting 2 gives x = 14.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'geometry_basics',
    name: 'Geometry Fundamentals',
    description: 'Basic geometric shapes, properties, and measurements',
    questions: [
      {
        id: 'geo-1',
        question: 'What is the area of a rectangle with length 5 and width 3?',
        options: ['8', '10', '15', '20'],
        correct: '15',
        explanation: 'Area of a rectangle is length x width, so 5 x 3 = 15.',
        difficulty: 'easy'
      },
      {
        id: 'geo-2',
        question: 'What is the perimeter of a square with side length 4?',
        options: ['8', '12', '16', '20'],
        correct: '16',
        explanation: 'Perimeter of a square is 4 x side length, so 4 x 4 = 16.',
        difficulty: 'easy'
      },
      {
        id: 'geo-3',
        question: 'What is the sum of angles in a triangle?',
        options: ['90°', '120°', '180°', '360°'],
        correct: '180°',
        explanation: 'The sum of angles in a triangle is always 180 degrees.',
        difficulty: 'easy'
      },
      {
        id: 'geo-4',
        question: 'What is a polygon with five sides called?',
        options: ['Triangle', 'Quadrilateral', 'Pentagon', 'Hexagon'],
        correct: 'Pentagon',
        explanation: 'A polygon with five sides is called a pentagon.',
        difficulty: 'easy'
      },
      {
        id: 'geo-5',
        question: 'What is the area of a circle with radius 7 (use π = 22/7)?',
        options: ['44', '88', '154', '220'],
        correct: '154',
        explanation: 'Area of a circle is πr^2, so (22/7) x 7^2 = 154.',
        difficulty: 'medium'
      },
      {
        id: 'geo-6',
        question: 'What is the volume of a cube with side length 3?',
        options: ['9', '18', '27', '81'],
        correct: '27',
        explanation: 'Volume of a cube is side^3, so 3^3 = 27.',
        difficulty: 'medium'
      },
      {
        id: 'geo-7',
        question: 'What is the Pythagorean theorem?',
        options: ['a + b = c', 'a^2 + b^2 = c^2', 'a - b = c', 'a^2 - b^2 = c^2'],
        correct: 'a^2 + b^2 = c^2',
        explanation: 'The Pythagorean theorem is a^2 + b^2 = c^2 for right triangles.',
        difficulty: 'medium'
      },
      {
        id: 'geo-8',
        question: 'What is the circumference of a circle with diameter 14 (use π = 22/7)?',
        options: ['22', '44', '66', '88'],
        correct: '44',
        explanation: 'Circumference is πd, so (22/7) x 14 = 44.',
        difficulty: 'medium'
      },
      {
        id: 'geo-9',
        question: 'What is the surface area of a sphere with radius 3?',
        options: ['36π', '45π', '48π', '54π'],
        correct: '36π',
        explanation: 'Surface area of a sphere is 4πr^2, so 4π(3^2) = 36π.',
        difficulty: 'hard'
      },
      {
        id: 'geo-10',
        question: 'What is the volume of a cylinder with radius 2 and height 5?',
        options: ['10π', '20π', '30π', '40π'],
        correct: '20π',
        explanation: 'Volume of a cylinder is πr^2h, so π(2^2)(5) = 20π.',
        difficulty: 'hard'
      }
    ]
  },
  
  // Add all Grade 11 chapters
  ...grade11MathematicsChapters,
  
  // Add all Grade 12 chapters
  ...grade12MathematicsChapters
];
