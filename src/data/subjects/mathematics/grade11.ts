
import { Chapter } from '../../types';

export const grade11MathematicsChapters: Chapter[] = [
  {
    id: 'math-11-1',
    name: 'Functions and Relations',
    description: 'Advanced study of functions, their properties, and applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'math-11-1-1',
        question: 'What is a function?',
        options: ['A relation where each input has exactly one output', 'Any set of ordered pairs', 'A graph', 'An equation'],
        correct: 'A relation where each input has exactly one output',
        explanation: 'A function is a relation where each input (domain element) has exactly one output (range element).',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-2',
        question: 'What is the domain of a function?',
        options: ['The output values', 'The input values', 'The graph', 'The equation'],
        correct: 'The input values',
        explanation: 'The domain of a function is the set of all possible input values (x-values).',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-3',
        question: 'If f(x) = 2x + 3, what is f(2)?',
        options: ['5', '7', '9', '11'],
        correct: '7',
        explanation: 'f(2) = 2(2) + 3 = 4 + 3 = 7',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-4',
        question: 'What is the range of a function?',
        options: ['The input values', 'The output values', 'The domain', 'The x-intercepts'],
        correct: 'The output values',
        explanation: 'The range of a function is the set of all possible output values (y-values).',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-5',
        question: 'Which test can determine if a graph represents a function?',
        options: ['Horizontal line test', 'Vertical line test', 'Diagonal line test', 'Circle test'],
        correct: 'Vertical line test',
        explanation: 'The vertical line test determines if a graph is a function - no vertical line should intersect the graph more than once.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-6',
        question: 'What is f(x) = x² called?',
        options: ['Linear function', 'Quadratic function', 'Cubic function', 'Exponential function'],
        correct: 'Quadratic function',
        explanation: 'f(x) = x² is a quadratic function because the highest power of x is 2.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-7',
        question: 'If f(x) = 3x - 1, what is f(0)?',
        options: ['-1', '0', '1', '3'],
        correct: '-1',
        explanation: 'f(0) = 3(0) - 1 = 0 - 1 = -1',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-8',
        question: 'What is the graph of f(x) = c (where c is constant) called?',
        options: ['Parabola', 'Horizontal line', 'Vertical line', 'Circle'],
        correct: 'Horizontal line',
        explanation: 'A constant function f(x) = c graphs as a horizontal line at y = c.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-9',
        question: 'What is the y-intercept of f(x) = 2x + 5?',
        options: ['2', '5', '-5', '0'],
        correct: '5',
        explanation: 'The y-intercept occurs when x = 0, so f(0) = 2(0) + 5 = 5.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-1-10',
        question: 'What is an even function?',
        options: ['f(-x) = f(x)', 'f(-x) = -f(x)', 'f(x) = 2x', 'f(x) has even degree'],
        correct: 'f(-x) = f(x)',
        explanation: 'An even function satisfies f(-x) = f(x), meaning it\'s symmetric about the y-axis.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'math-11-1-11',
        question: 'What is the domain of f(x) = 1/(x-2)?',
        options: ['All real numbers', 'x ≠ 2', 'x > 2', 'x < 2'],
        correct: 'x ≠ 2',
        explanation: 'The function is undefined when x = 2 (division by zero), so the domain is all real numbers except x = 2.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-12',
        question: 'If f(x) = x² and g(x) = 2x + 1, what is (f∘g)(x)?',
        options: ['2x² + 1', '(2x + 1)²', 'x² + 2x + 1', '2x² + 2x + 1'],
        correct: '(2x + 1)²',
        explanation: '(f∘g)(x) = f(g(x)) = f(2x + 1) = (2x + 1)²',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-13',
        question: 'What is the inverse of f(x) = 2x - 3?',
        options: ['(x + 3)/2', '(x - 3)/2', '2x + 3', '(2x - 3)⁻¹'],
        correct: '(x + 3)/2',
        explanation: 'To find the inverse: y = 2x - 3, solve for x: x = (y + 3)/2, so f⁻¹(x) = (x + 3)/2.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-14',
        question: 'What is the range of f(x) = x² + 1?',
        options: ['All real numbers', 'y ≥ 1', 'y ≤ 1', 'y > 0'],
        correct: 'y ≥ 1',
        explanation: 'Since x² ≥ 0 for all real x, we have x² + 1 ≥ 1, so the range is y ≥ 1.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-15',
        question: 'Which function is one-to-one?',
        options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = 2x + 1', 'f(x) = x² + 1'],
        correct: 'f(x) = 2x + 1',
        explanation: 'A linear function with non-zero slope is one-to-one (passes horizontal line test).',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-16',
        question: 'What is the domain of f(x) = √(x - 3)?',
        options: ['x ≥ 3', 'x > 3', 'x ≤ 3', 'All real numbers'],
        correct: 'x ≥ 3',
        explanation: 'For the square root to be real, we need x - 3 ≥ 0, which means x ≥ 3.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-17',
        question: 'If f(x) = x³, what type of symmetry does it have?',
        options: ['Even function', 'Odd function', 'No symmetry', 'Both even and odd'],
        correct: 'Odd function',
        explanation: 'f(-x) = (-x)³ = -x³ = -f(x), so f(x) = x³ is an odd function (symmetric about origin).',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-18',
        question: 'What is the vertex of f(x) = (x - 2)² + 3?',
        options: ['(2, 3)', '(-2, 3)', '(2, -3)', '(-2, -3)'],
        correct: '(2, 3)',
        explanation: 'The vertex form f(x) = (x - h)² + k has vertex at (h, k), so the vertex is (2, 3).',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-19',
        question: 'What is the horizontal asymptote of f(x) = (2x + 1)/(x - 1)?',
        options: ['y = 0', 'y = 1', 'y = 2', 'y = -1'],
        correct: 'y = 2',
        explanation: 'For rational functions, the horizontal asymptote is the ratio of leading coefficients: 2/1 = 2.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-1-20',
        question: 'If f(x) = 2x and g(x) = x + 3, what is (f + g)(x)?',
        options: ['2x + 3', '2x² + 6x', '2x + x + 3', '3x + 3'],
        correct: '3x + 3',
        explanation: '(f + g)(x) = f(x) + g(x) = 2x + (x + 3) = 3x + 3',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'math-11-1-21',
        question: 'What is the domain of f(x) = ln(x² - 4)?',
        options: ['x > 2 or x < -2', 'x ≥ 2 or x ≤ -2', '-2 < x < 2', 'x ≠ ±2'],
        correct: 'x > 2 or x < -2',
        explanation: 'For ln to be defined, x² - 4 > 0, which means x² > 4, so x > 2 or x < -2.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-22',
        question: 'If f(x) = (x + 1)/(x - 1) and g(x) = x², what is the domain of (f∘g)(x)?',
        options: ['All real numbers', 'x ≠ 1', 'x ≠ ±1', 'x ≠ -1'],
        correct: 'x ≠ ±1',
        explanation: '(f∘g)(x) = f(x²) = (x² + 1)/(x² - 1). This is undefined when x² = 1, so x ≠ ±1.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-23',
        question: 'What is the inverse of f(x) = (2x + 1)/(x - 3)?',
        options: ['(3x + 1)/(x - 2)', '(x - 3)/(2x + 1)', '(3x - 1)/(x + 2)', '(x + 3)/(2x - 1)'],
        correct: '(3x + 1)/(x - 2)',
        explanation: 'Setting y = (2x + 1)/(x - 3) and solving for x gives x = (3y + 1)/(y - 2), so f⁻¹(x) = (3x + 1)/(x - 2).',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-24',
        question: 'What is the range of f(x) = -2/(x² + 1)?',
        options: ['(-2, 0]', '[-2, 0)', '(-∞, 0]', '[0, ∞)'],
        correct: '(-2, 0]',
        explanation: 'Since x² + 1 ≥ 1, we have -2/(x² + 1) ≤ -2/1 = -2, and it approaches 0 as x → ∞, so range is (-2, 0].',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-25',
        question: 'If f(x) = ax + b and f(f(x)) = 4x + 9, what are the values of a and b?',
        options: ['a = 2, b = 3', 'a = -2, b = -3', 'a = 2, b = 3 or a = -2, b = -3', 'Cannot be determined'],
        correct: 'a = 2, b = 3 or a = -2, b = -3',
        explanation: 'f(f(x)) = a(ax + b) + b = a²x + ab + b = 4x + 9. So a² = 4 and ab + b = 9, giving a = ±2 and b = 3 or -3.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-26',
        question: 'What is the maximum value of f(x) = 5 - 2x² on the interval [-1, 2]?',
        options: ['3', '5', '1', '-3'],
        correct: '5',
        explanation: 'f(x) = 5 - 2x² is a downward parabola with maximum at x = 0. f(0) = 5, which is the maximum on [-1, 2].',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-27',
        question: 'For what values of k does f(x) = x² + kx + 1 have no real zeros?',
        options: ['k > 2', 'k < -2', '-2 < k < 2', 'k ≠ 0'],
        correct: '-2 < k < 2',
        explanation: 'For no real zeros, discriminant < 0: k² - 4(1)(1) < 0, so k² < 4, giving -2 < k < 2.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-28',
        question: 'What is the period of f(x) = 3sin(2x - π/3)?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: 'π',
        explanation: 'For f(x) = A sin(Bx + C), the period is 2π/|B|. Here B = 2, so period = 2π/2 = π.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-29',
        question: 'If f(x) = |x - 2| + |x + 1|, what is the minimum value of f(x)?',
        options: ['0', '1', '2', '3'],
        correct: '3',
        explanation: 'The minimum occurs between x = -1 and x = 2. For x in [-1, 2], f(x) = (2 - x) + (x + 1) = 3.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-1-30',
        question: 'What is the equation of the asymptote of f(x) = (x² + 1)/(x - 1)?',
        options: ['y = x + 1', 'y = x - 1', 'y = x + 2', 'y = x'],
        correct: 'y = x + 1',
        explanation: 'Using polynomial long division: (x² + 1)/(x - 1) = x + 1 + 2/(x - 1). The oblique asymptote is y = x + 1.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'math-11-2',
    name: 'Trigonometry',
    description: 'Advanced trigonometric functions, identities, and applications',
    questions: [
      // Easy Questions (10)
      {
        id: 'math-11-2-1',
        question: 'What is sin(30°)?',
        options: ['1/2', '√3/2', '√2/2', '1'],
        correct: '1/2',
        explanation: 'sin(30°) = 1/2 is a fundamental trigonometric value.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-2',
        question: 'What is cos(60°)?',
        options: ['1/2', '√3/2', '√2/2', '1'],
        correct: '1/2',
        explanation: 'cos(60°) = 1/2 is a fundamental trigonometric value.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-3',
        question: 'What is tan(45°)?',
        options: ['1', '1/2', '√3', '√2'],
        correct: '1',
        explanation: 'tan(45°) = 1 because sin(45°) = cos(45°) = √2/2.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-4',
        question: 'What is the period of y = sin(x)?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: '2π',
        explanation: 'The sine function has a period of 2π radians (360°).',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-5',
        question: 'What is the range of y = cos(x)?',
        options: ['[-1, 1]', '[0, 1]', '[-π, π]', 'All real numbers'],
        correct: '[-1, 1]',
        explanation: 'The cosine function has a range of [-1, 1].',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-6',
        question: 'What is sin(90°)?',
        options: ['0', '1', '-1', '1/2'],
        correct: '1',
        explanation: 'sin(90°) = 1 is a fundamental trigonometric value.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-7',
        question: 'What is cos(0°)?',
        options: ['0', '1', '-1', '1/2'],
        correct: '1',
        explanation: 'cos(0°) = 1 is a fundamental trigonometric value.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-8',
        question: 'Which function is undefined when cos(x) = 0?',
        options: ['sin(x)', 'cos(x)', 'tan(x)', 'cot(x)'],
        correct: 'tan(x)',
        explanation: 'tan(x) = sin(x)/cos(x), so it\'s undefined when cos(x) = 0.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-9',
        question: 'What is the amplitude of y = 3sin(x)?',
        options: ['1', '3', 'π', '2π'],
        correct: '3',
        explanation: 'The amplitude of y = A sin(x) is |A|, so for y = 3sin(x), amplitude = 3.',
        difficulty: 'easy'
      },
      {
        id: 'math-11-2-10',
        question: 'What is sin²(x) + cos²(x) equal to?',
        options: ['0', '1', '2', 'sin(2x)'],
        correct: '1',
        explanation: 'The Pythagorean identity: sin²(x) + cos²(x) = 1 for all x.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'math-11-2-11',
        question: 'What is sin(π/6) in exact form?',
        options: ['1/2', '√3/2', '√2/2', '1/√2'],
        correct: '1/2',
        explanation: 'sin(π/6) = sin(30°) = 1/2.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-12',
        question: 'What is the period of y = tan(2x)?',
        options: ['π', 'π/2', '2π', 'π/4'],
        correct: 'π/2',
        explanation: 'The period of y = tan(Bx) is π/|B|. For y = tan(2x), period = π/2.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-13',
        question: 'What is cos(π - x) equal to?',
        options: ['cos(x)', '-cos(x)', 'sin(x)', '-sin(x)'],
        correct: '-cos(x)',
        explanation: 'Using the identity cos(π - x) = -cos(x).',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-14',
        question: 'What is sin(2x) equal to?',
        options: ['2sin(x)', 'sin²(x)', '2sin(x)cos(x)', 'sin(x) + cos(x)'],
        correct: '2sin(x)cos(x)',
        explanation: 'The double angle formula: sin(2x) = 2sin(x)cos(x).',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-15',
        question: 'What is the phase shift of y = sin(x - π/4)?',
        options: ['π/4 to the right', 'π/4 to the left', 'π/2 to the right', 'No shift'],
        correct: 'π/4 to the right',
        explanation: 'For y = sin(x - c), the phase shift is c units to the right.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-16',
        question: 'What is csc(x) equal to?',
        options: ['1/sin(x)', '1/cos(x)', '1/tan(x)', 'cos(x)/sin(x)'],
        correct: '1/sin(x)',
        explanation: 'csc(x) = 1/sin(x) is the cosecant function.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-17',
        question: 'What is cos(2x) equal to?',
        options: ['2cos(x)', 'cos²(x) - sin²(x)', '2cos²(x)', 'cos(x) - sin(x)'],
        correct: 'cos²(x) - sin²(x)',
        explanation: 'The double angle formula: cos(2x) = cos²(x) - sin²(x).',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-18',
        question: 'In which quadrant is both sin(x) and cos(x) negative?',
        options: ['First', 'Second', 'Third', 'Fourth'],
        correct: 'Third',
        explanation: 'In the third quadrant, both sine and cosine are negative.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-19',
        question: 'What is the domain of y = tan(x)?',
        options: ['All real numbers', 'x ≠ π/2 + nπ', 'x ≠ nπ', '[-1, 1]'],
        correct: 'x ≠ π/2 + nπ',
        explanation: 'tan(x) is undefined when cos(x) = 0, which occurs at x = π/2 + nπ.',
        difficulty: 'medium'
      },
      {
        id: 'math-11-2-20',
        question: 'What is tan(π/4) equal to?',
        options: ['1', '1/2', '√3', '√2'],
        correct: '1',
        explanation: 'tan(π/4) = tan(45°) = 1.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'math-11-2-21',
        question: 'What is sin(π/12) in exact form?',
        options: ['(√6 - √2)/4', '(√6 + √2)/4', '(√3 - 1)/4', '(√3 + 1)/4'],
        correct: '(√6 - √2)/4',
        explanation: 'Using sin(π/12) = sin(π/3 - π/4) and difference formula gives (√6 - √2)/4.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-22',
        question: 'What is the general solution to sin(x) = 1/2?',
        options: ['x = π/6 + 2nπ', 'x = π/6 + 2nπ or x = 5π/6 + 2nπ', 'x = π/3 + 2nπ', 'x = π/4 + 2nπ'],
        correct: 'x = π/6 + 2nπ or x = 5π/6 + 2nπ',
        explanation: 'sin(x) = 1/2 at x = π/6 and x = 5π/6 in [0, 2π], plus integer multiples of 2π.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-23',
        question: 'What is cos(π/8) in exact form?',
        options: ['√(2 + √2)/2', '√(2 - √2)/2', '(√2 + 1)/2', '(√2 - 1)/2'],
        correct: '√(2 + √2)/2',
        explanation: 'Using the half-angle formula: cos(π/8) = cos(π/4 ÷ 2) = √(2 + √2)/2.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-24',
        question: 'What is the sum sin(15°) + cos(15°)?',
        options: ['√6/2', '√3/2', '(√6 + √2)/2', '1'],
        correct: '√6/2',
        explanation: 'sin(15°) + cos(15°) = (√6 - √2)/4 + (√6 + √2)/4 = √6/2.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-25',
        question: 'What is tan(π/8) in exact form?',
        options: ['√2 - 1', '√2 + 1', '(√2 - 1)/2', '2 - √2'],
        correct: '√2 - 1',
        explanation: 'Using the half-angle formula: tan(π/8) = tan(π/4 ÷ 2) = √2 - 1.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-26',
        question: 'What is the maximum value of f(x) = 3sin(x) + 4cos(x)?',
        options: ['5', '7', '12', '1'],
        correct: '5',
        explanation: 'The maximum value of a sin(x) + b cos(x) is √(a² + b²). Here, √(3² + 4²) = √25 = 5.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-27',
        question: 'What is sin(3x) in terms of sin(x)?',
        options: ['3sin(x)', 'sin³(x)', '3sin(x) - 4sin³(x)', 'sin(x) + 2sin²(x)'],
        correct: '3sin(x) - 4sin³(x)',
        explanation: 'Using the triple angle formula: sin(3x) = 3sin(x) - 4sin³(x).',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-28',
        question: 'What is the period of y = sin(x/3)?',
        options: ['2π', '6π', '2π/3', 'π/3'],
        correct: '6π',
        explanation: 'The period of y = sin(Bx) is 2π/|B|. For y = sin(x/3), period = 2π/(1/3) = 6π.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-29',
        question: 'What is the value of sin(arccos(3/5))?',
        options: ['3/5', '4/5', '5/3', '5/4'],
        correct: '4/5',
        explanation: 'If cos(θ) = 3/5, then sin(θ) = √(1 - cos²(θ)) = √(1 - 9/25) = √(16/25) = 4/5.',
        difficulty: 'hard'
      },
      {
        id: 'math-11-2-30',
        question: 'What is the number of solutions to sin(x) = x/π in the interval [0, π]?',
        options: ['1', '2', '3', '0'],
        correct: '1',
        explanation: 'Graphically, y = sin(x) and y = x/π intersect once in [0, π] at the origin and near x = π.',
        difficulty: 'hard'
      }
    ]
  }
];
