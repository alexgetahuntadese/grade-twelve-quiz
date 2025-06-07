
import { Chapter } from '../types';

export const mathematicsChapters: Chapter[] = [
  {
    id: 'algebra',
    name: 'Algebra',
    description: 'Basic algebraic principles and equation solving',
    questions: [
      // Easy Questions
      {
        id: 'alg_1',
        question: 'Solve for x: x + 5 = 10',
        options: ['x = 2', 'x = 5', 'x = 10', 'x = 15'],
        correct: 'x = 5',
        explanation: 'Subtract 5 from both sides: x = 10 - 5 = 5',
        difficulty: 'easy'
      },
      {
        id: 'alg_2',
        question: 'Solve for y: 2y = 12',
        options: ['y = 4', 'y = 6', 'y = 8', 'y = 24'],
        correct: 'y = 6',
        explanation: 'Divide both sides by 2: y = 12 / 2 = 6',
        difficulty: 'easy'
      },
      {
        id: 'alg_3',
        question: 'Simplify: 3a + 2a',
        options: ['5a', '6a', 'a', '5a²'],
        correct: '5a',
        explanation: 'Combine like terms: 3a + 2a = 5a',
        difficulty: 'easy'
      },
      {
        id: 'alg_4',
        question: 'Solve for z: z - 3 = 7',
        options: ['z = 4', 'z = 7', 'z = 10', 'z = 21'],
        correct: 'z = 10',
        explanation: 'Add 3 to both sides: z = 7 + 3 = 10',
        difficulty: 'easy'
      },
      {
        id: 'alg_5',
        question: 'Simplify: 4b - b',
        options: ['4', '3b', '4b²', '3'],
        correct: '3b',
        explanation: 'Combine like terms: 4b - b = 3b',
        difficulty: 'easy'
      },
      {
        id: 'alg_6',
        question: 'Solve for x: x/2 = 5',
        options: ['x = 2.5', 'x = 5', 'x = 10', 'x = 7'],
        correct: 'x = 10',
        explanation: 'Multiply both sides by 2: x = 5 * 2 = 10',
        difficulty: 'easy'
      },
      {
        id: 'alg_7',
        question: 'Simplify: 2(x + 3)',
        options: ['2x + 3', '2x + 6', 'x + 6', '5x'],
        correct: '2x + 6',
        explanation: 'Distribute the 2: 2*x + 2*3 = 2x + 6',
        difficulty: 'easy'
      },
      {
        id: 'alg_8',
        question: 'Solve for a: 3a + 2 = 8',
        options: ['a = 1', 'a = 2', 'a = 3', 'a = 4'],
        correct: 'a = 2',
        explanation: 'Subtract 2 from both sides: 3a = 6. Divide by 3: a = 2',
        difficulty: 'easy'
      },
      {
        id: 'alg_med_1',
        question: 'Solve for x: 2x + 3 = 5x - 6',
        options: ['x = 1', 'x = 2', 'x = 3', 'x = 4'],
        correct: 'x = 3',
        explanation: 'Subtract 2x from both sides: 3 = 3x - 6. Add 6: 9 = 3x. Divide by 3: x = 3',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_2',
        question: 'Expand: (x + 2)(x - 3)',
        options: ['x² + 6', 'x² - 6', 'x² - x - 6', 'x² + x - 6'],
        correct: 'x² - x - 6',
        explanation: 'Use FOIL: x*x - 3*x + 2*x - 6 = x² - x - 6',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_3',
        question: 'Solve for y: (y + 1)/3 = 4',
        options: ['y = 7', 'y = 9', 'y = 11', 'y = 13'],
        correct: 'y = 11',
        explanation: 'Multiply by 3: y + 1 = 12. Subtract 1: y = 11',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_4',
        question: 'Factor: x² - 4',
        options: ['(x - 2)(x - 2)', '(x + 2)(x + 2)', '(x + 4)(x - 1)', '(x + 2)(x - 2)'],
        correct: '(x + 2)(x - 2)',
        explanation: 'Difference of squares: (x + 2)(x - 2)',
        difficulty: 'medium'
      },
      {
        id: 'alg_med_5',
        question: 'Solve for a: √(a) = 5',
        options: ['a = 10', 'a = 20', 'a = 25', 'a = 30'],
        correct: 'a = 25',
        explanation: 'Square both sides: a = 5² = 25',
        difficulty: 'medium'
      },
      {
        id: 'alg_hard_1',
        question: 'Solve for x: |2x - 1| = 5',
        options: ['x = -2, 3', 'x = -3, 2', 'x = -1, 3', 'x = -3, 1'],
        correct: 'x = -2, 3',
        explanation: '2x - 1 = 5 or 2x - 1 = -5. Solving gives x = 3 or x = -2',
        difficulty: 'hard'
      },
      {
        id: 'alg_hard_2',
        question: 'Solve the system: x + y = 5, x - y = 1',
        options: ['x = 3, y = 2', 'x = 2, y = 3', 'x = 4, y = 1', 'x = 1, y = 4'],
        correct: 'x = 3, y = 2',
        explanation: 'Add equations: 2x = 6, x = 3. Substitute: 3 + y = 5, y = 2',
        difficulty: 'hard'
      },
      {
        id: 'alg_hard_3',
        question: 'Simplify: (x² - 4)/(x - 2)',
        options: ['x - 2', 'x + 2', 'x', '2'],
        correct: 'x + 2',
        explanation: 'Factor: (x + 2)(x - 2)/(x - 2) = x + 2',
        difficulty: 'hard'
      },
      {
        id: 'alg_hard_4',
        question: 'Solve for x: x² - 5x + 6 = 0',
        options: ['x = 1, 6', 'x = 2, 3', 'x = -2, -3', 'x = -1, -6'],
        correct: 'x = 2, 3',
        explanation: 'Factor: (x - 2)(x - 3) = 0. So x = 2 or x = 3',
        difficulty: 'hard'
      },
      {
        id: 'alg_hard_5',
        question: 'What is the quadratic formula?',
        options: ['x = (-b ± √(b² - 4ac))/2', 'x = (-b ± √(b² - 4ac))/(2a)', 'x = (b ± √(b² - 4ac))/(2a)', 'x = (b ± √(b² + 4ac))/(2a)'],
        correct: 'x = (-b ± √(b² - 4ac))/(2a)',
        explanation: 'The quadratic formula solves ax² + bx + c = 0',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_functions',
    name: 'Grade 11: Functions and Trigonometry',
    description: 'Advanced functions, trigonometric identities, and graphing',
    questions: [
      // Easy Questions
      {
        id: 'g11_func_easy_1',
        question: 'What is a function?',
        options: ['A line', 'A relation with unique output for each input', 'A circle', 'A square'],
        correct: 'A relation with unique output for each input',
        explanation: 'A function is a relation where each input has exactly one output.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_2',
        question: 'What is the domain of a function?',
        options: ['Set of outputs', 'Set of inputs', 'The graph', 'The y-intercept'],
        correct: 'Set of inputs',
        explanation: 'The domain is the set of all possible input values for a function.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_3',
        question: 'What is the range of a function?',
        options: ['Set of inputs', 'Set of outputs', 'The x-intercept', 'The slope'],
        correct: 'Set of outputs',
        explanation: 'The range is the set of all possible output values for a function.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_4',
        question: 'What is sin(0)?',
        options: ['0', '1', '-1', 'Undefined'],
        correct: '0',
        explanation: 'The sine of 0 degrees is 0.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_easy_5',
        question: 'What is cos(0)?',
        options: ['0', '1', '-1', 'Undefined'],
        correct: '1',
        explanation: 'The cosine of 0 degrees is 1.',
        difficulty: 'easy'
      },
      {
        id: 'g11_func_med_1',
        question: 'If f(x) = x² + 1, what is f(2)?',
        options: ['1', '3', '5', '7'],
        correct: '5',
        explanation: 'f(2) = 2² + 1 = 4 + 1 = 5',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_2',
        question: 'What is the period of sin(x)?',
        options: ['π', '2π', '3π', '4π'],
        correct: '2π',
        explanation: 'The period of sin(x) is 2π.',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_3',
        question: 'What is the amplitude of 3cos(x)?',
        options: ['1', '2', '3', '4'],
        correct: '3',
        explanation: 'The amplitude is the coefficient of the trigonometric function.',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_4',
        question: 'What is tan(π/4)?',
        options: ['0', '1', '-1', 'Undefined'],
        correct: '1',
        explanation: 'tan(π/4) = sin(π/4) / cos(π/4) = 1',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_med_5',
        question: 'What is the inverse of f(x) = 2x?',
        options: ['x/2', '2/x', '-2x', '-x/2'],
        correct: 'x/2',
        explanation: 'Let y = 2x, then x = y/2. So f⁻¹(x) = x/2',
        difficulty: 'medium'
      },
      {
        id: 'g11_func_hard_1',
        question: 'What is the domain of f(x) = √(x - 2)?',
        options: ['x < 2', 'x ≤ 2', 'x > 2', 'x ≥ 2'],
        correct: 'x ≥ 2',
        explanation: 'The expression inside the square root must be non-negative: x - 2 ≥ 0, so x ≥ 2',
        difficulty: 'hard'
      },
      {
        id: 'g11_func_hard_2',
        question: 'What is the range of f(x) = sin²(x)?',
        options: ['(-1, 1)', '[0, 1]', '(-∞, ∞)', '(-1, 0)'],
        correct: '[0, 1]',
        explanation: 'Since -1 ≤ sin(x) ≤ 1, then 0 ≤ sin²(x) ≤ 1',
        difficulty: 'hard'
      },
      {
        id: 'g11_func_hard_3',
        question: 'What is the period of tan(2x)?',
        options: ['π/4', 'π/2', 'π', '2π'],
        correct: 'π/2',
        explanation: 'The period of tan(x) is π, so the period of tan(2x) is π/2',
        difficulty: 'hard'
      },
      {
        id: 'g11_func_hard_4',
        question: 'Simplify: sin²(x) + cos²(x)',
        options: ['0', '1', '2', 'sin(2x)'],
        correct: '1',
        explanation: 'This is the fundamental trigonometric identity: sin²(x) + cos²(x) = 1',
        difficulty: 'hard'
      },
      {
        id: 'g11_func_hard_5',
        question: 'If f(x) = x + 1 and g(x) = x², what is f(g(x))?',
        options: ['x² + 1', '(x + 1)²', 'x³ + x²', 'x² + 2x + 1'],
        correct: 'x² + 1',
        explanation: 'f(g(x)) = f(x²) = x² + 1',
        difficulty: 'hard'
      }
    ]
  },

  // Grade 12 Units according to New Curriculum
  {
    id: 'grade12_sequences_series',
    name: 'Grade 12 Unit 1: Sequences and Series',
    description: 'Arithmetic and geometric sequences, series, mathematical induction',
    questions: [
      // Easy Questions
      {
        id: 'g12_seq_easy_1',
        question: 'What is an arithmetic sequence?',
        options: ['Sequence with constant ratio', 'Sequence with constant difference', 'Random sequence', 'Geometric pattern'],
        correct: 'Sequence with constant difference',
        explanation: 'An arithmetic sequence has a constant difference between consecutive terms.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_2',
        question: 'In the sequence 2, 5, 8, 11, ..., what is the common difference?',
        options: ['2', '3', '5', '8'],
        correct: '3',
        explanation: 'The common difference is 5 - 2 = 3.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_3',
        question: 'What is the general term of an arithmetic sequence?',
        options: ['an = a₁ + (n-1)d', 'an = a₁ × r^(n-1)', 'an = n²', 'an = 2n'],
        correct: 'an = a₁ + (n-1)d',
        explanation: 'The nth term of an arithmetic sequence is an = a₁ + (n-1)d.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_4',
        question: 'What is a geometric sequence?',
        options: ['Sequence with constant difference', 'Sequence with constant ratio', 'Linear sequence', 'Quadratic sequence'],
        correct: 'Sequence with constant ratio',
        explanation: 'A geometric sequence has a constant ratio between consecutive terms.',
        difficulty: 'easy'
      },
      {
        id: 'g12_seq_easy_5',
        question: 'In the sequence 2, 6, 18, 54, ..., what is the common ratio?',
        options: ['2', '3', '4', '6'],
        correct: '3',
        explanation: 'The common ratio is 6/2 = 3.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_seq_med_1',
        question: 'Find the 10th term of the arithmetic sequence: 3, 7, 11, 15, ...',
        options: ['35', '37', '39', '41'],
        correct: '39',
        explanation: 'a₁ = 3, d = 4. a₁₀ = 3 + (10-1)×4 = 3 + 36 = 39.',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_2',
        question: 'Find the sum of the first 5 terms of: 2, 4, 6, 8, ...',
        options: ['20', '25', '30', '35'],
        correct: '30',
        explanation: 'S₅ = 5/2 × (2×2 + (5-1)×2) = 5/2 × 12 = 30.',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_3',
        question: 'Find the 6th term of the geometric sequence: 2, 6, 18, ...',
        options: ['162', '486', '1458', '4374'],
        correct: '486',
        explanation: 'a₁ = 2, r = 3. a₆ = 2 × 3⁵ = 2 × 243 = 486.',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_4',
        question: 'What is the sum formula for an arithmetic series?',
        options: ['Sn = n/2[2a + (n-1)d]', 'Sn = a(1-rⁿ)/(1-r)', 'Sn = n²', 'Sn = nd'],
        correct: 'Sn = n/2[2a + (n-1)d]',
        explanation: 'This is the formula for the sum of n terms of an arithmetic series.',
        difficulty: 'medium'
      },
      {
        id: 'g12_seq_med_5',
        question: 'What is the sum formula for a geometric series?',
        options: ['Sn = n/2[2a + (n-1)d]', 'Sn = a(1-rⁿ)/(1-r)', 'Sn = n²', 'Sn = ar'],
        correct: 'Sn = a(1-rⁿ)/(1-r)',
        explanation: 'This is the formula for the sum of n terms of a geometric series where r ≠ 1.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_seq_hard_1',
        question: 'What is mathematical induction?',
        options: ['Guessing method', 'Proof technique for natural numbers', 'Statistical method', 'Algebraic operation'],
        correct: 'Proof technique for natural numbers',
        explanation: 'Mathematical induction is a proof technique used to prove statements about natural numbers.',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_2',
        question: 'Find the sum to infinity of 1 + 1/2 + 1/4 + 1/8 + ...',
        options: ['1', '2', '3', 'Diverges'],
        correct: '2',
        explanation: 'This is a geometric series with a = 1, r = 1/2. S∞ = 1/(1-1/2) = 2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_3',
        question: 'For what values of r does a geometric series converge?',
        options: ['r > 1', 'r < 1', '|r| < 1', '|r| > 1'],
        correct: '|r| < 1',
        explanation: 'A geometric series converges when the absolute value of the common ratio is less than 1.',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_4',
        question: 'Prove by induction: 1 + 2 + 3 + ... + n = n(n+1)/2. What is the base case?',
        options: ['n = 0', 'n = 1', 'n = 2', 'n = -1'],
        correct: 'n = 1',
        explanation: 'The base case is typically n = 1, where LHS = 1 and RHS = 1(2)/2 = 1.',
        difficulty: 'hard'
      },
      {
        id: 'g12_seq_hard_5',
        question: 'What is the sum of the first n odd numbers?',
        options: ['n', 'n²', '2n-1', 'n(n+1)/2'],
        correct: 'n²',
        explanation: 'The sum of the first n odd numbers is n². This can be proven by induction.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_calculus_intro',
    name: 'Grade 12 Unit 2: Introduction to Calculus',
    description: 'Limits, derivatives, basic integration, and applications',
    questions: [
      // Easy Questions
      {
        id: 'g12_calc_easy_1',
        question: 'What is a limit in calculus?',
        options: ['Maximum value', 'Value a function approaches', 'Minimum value', 'Average value'],
        correct: 'Value a function approaches',
        explanation: 'A limit is the value that a function approaches as the input approaches a certain value.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_2',
        question: 'What is the derivative of a constant?',
        options: ['The constant', '0', '1', 'Undefined'],
        correct: '0',
        explanation: 'The derivative of any constant is 0.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_3',
        question: 'What does the derivative represent?',
        options: ['Area under curve', 'Rate of change', 'Maximum point', 'y-intercept'],
        correct: 'Rate of change',
        explanation: 'The derivative represents the instantaneous rate of change of a function.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_4',
        question: 'What is the derivative of x?',
        options: ['0', '1', 'x', '2x'],
        correct: '1',
        explanation: 'The derivative of x with respect to x is 1.',
        difficulty: 'easy'
      },
      {
        id: 'g12_calc_easy_5',
        question: 'What is integration the reverse of?',
        options: ['Addition', 'Multiplication', 'Differentiation', 'Division'],
        correct: 'Differentiation',
        explanation: 'Integration is the reverse process of differentiation.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_calc_med_1',
        question: 'Find the derivative of f(x) = 3x²',
        options: ['6x', '3x', '9x²', '6x²'],
        correct: '6x',
        explanation: 'Using power rule: d/dx(3x²) = 3 × 2x¹ = 6x.',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_2',
        question: 'What is the limit of (x² - 1)/(x - 1) as x approaches 1?',
        options: ['0', '1', '2', 'Undefined'],
        correct: '2',
        explanation: 'Factor: (x - 1)(x + 1)/(x - 1) = x + 1. As x → 1, limit = 2.',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_3',
        question: 'Find ∫ 2x dx',
        options: ['2x', 'x²', 'x² + C', '2x² + C'],
        correct: 'x² + C',
        explanation: 'The antiderivative of 2x is x² + C.',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_4',
        question: 'What is the power rule for derivatives?',
        options: ['d/dx(xⁿ) = nxⁿ', 'd/dx(xⁿ) = nxⁿ⁻¹', 'd/dx(xⁿ) = xⁿ⁻¹', 'd/dx(xⁿ) = nx'],
        correct: 'd/dx(xⁿ) = nxⁿ⁻¹',
        explanation: 'The power rule states that the derivative of xⁿ is nxⁿ⁻¹.',
        difficulty: 'medium'
      },
      {
        id: 'g12_calc_med_5',
        question: 'Find the derivative of f(x) = x³ - 2x + 5',
        options: ['3x² - 2', '3x² - 2x + 5', 'x² - 2', '3x - 2'],
        correct: '3x² - 2',
        explanation: 'Using power rule and constant rule: f\'(x) = 3x² - 2 + 0 = 3x² - 2.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_calc_hard_1',
        question: 'Find the derivative of f(x) = sin(x²)',
        options: ['cos(x²)', '2x cos(x²)', 'cos(2x)', '2x sin(x²)'],
        correct: '2x cos(x²)',
        explanation: 'Using chain rule: f\'(x) = cos(x²) × 2x = 2x cos(x²).',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_2',
        question: 'Evaluate ∫₀¹ x² dx',
        options: ['1/3', '1/2', '1', '2/3'],
        correct: '1/3',
        explanation: '∫x² dx = x³/3. Evaluating from 0 to 1: (1³/3) - (0³/3) = 1/3.',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_3',
        question: 'What is the chain rule?',
        options: ['d/dx[f(g(x))] = f\'(x)g\'(x)', 'd/dx[f(g(x))] = f\'(g(x))g\'(x)', 'd/dx[f(g(x))] = f(g\'(x))', 'd/dx[f(g(x))] = f\'(x) + g\'(x)'],
        correct: 'd/dx[f(g(x))] = f\'(g(x))g\'(x)',
        explanation: 'The chain rule for composite functions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_4',
        question: 'Find the critical points of f(x) = x³ - 3x² + 2',
        options: ['x = 0, 2', 'x = 1, 2', 'x = 0, 1', 'x = 2, 3'],
        correct: 'x = 0, 2',
        explanation: 'f\'(x) = 3x² - 6x = 3x(x - 2) = 0, so x = 0 or x = 2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_calc_hard_5',
        question: 'What does the Fundamental Theorem of Calculus state?',
        options: ['Integration and differentiation are inverses', 'All functions are continuous', 'Derivatives always exist', 'Integrals are always positive'],
        correct: 'Integration and differentiation are inverses',
        explanation: 'The Fundamental Theorem connects differentiation and integration as inverse operations.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_statistics',
    name: 'Grade 12 Unit 3: Statistics',
    description: 'Descriptive statistics, probability distributions, and data analysis',
    questions: [
      // Easy Questions
      {
        id: 'g12_stats_easy_1',
        question: 'What is statistics?',
        options: ['Study of numbers only', 'Collection, analysis, and interpretation of data', 'Computer science', 'Pure mathematics'],
        correct: 'Collection, analysis, and interpretation of data',
        explanation: 'Statistics involves collecting, analyzing, interpreting, and presenting data.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stats_easy_2',
        question: 'What is the mean?',
        options: ['Middle value', 'Most frequent value', 'Average of all values', 'Highest value'],
        correct: 'Average of all values',
        explanation: 'The mean is the sum of all values divided by the number of values.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stats_easy_3',
        question: 'What is probability?',
        options: ['Certainty of event', 'Likelihood of event occurring', 'Impossibility of event', 'Random number'],
        correct: 'Likelihood of event occurring',
        explanation: 'Probability measures how likely an event is to occur.',
        difficulty: 'easy'
      },
      {
        id: 'g12_stats_easy_4',
        question: 'What is the range of probability values?',
        options: ['0 to 10', '0 to 1', '-1 to 1', '1 to 100'],
        correct: '0 to 1',
        explanation: 'Probability values range from 0 (impossible) to 1 (certain).',
        difficulty: 'easy'
      },
      {
        id: 'g12_stats_easy_5',
        question: 'What is a sample?',
        options: ['Entire population', 'Subset of population', 'Research method', 'Data type'],
        correct: 'Subset of population',
        explanation: 'A sample is a subset of a population used to make inferences about the whole population.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_stats_med_1',
        question: 'What is standard deviation?',
        options: ['Average value', 'Measure of spread', 'Highest value', 'Sample size'],
        correct: 'Measure of spread',
        explanation: 'Standard deviation measures how spread out data points are from the mean.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stats_med_2',
        question: 'In a normal distribution, what percentage of data falls within one standard deviation?',
        options: ['50%', '68%', '95%', '99%'],
        correct: '68%',
        explanation: 'In a normal distribution, approximately 68% of data falls within one standard deviation of the mean.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stats_med_3',
        question: 'What is correlation?',
        options: ['Causation', 'Relationship between variables', 'Average difference', 'Random variation'],
        correct: 'Relationship between variables',
        explanation: 'Correlation measures the strength and direction of a linear relationship between two variables.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stats_med_4',
        question: 'What is the median?',
        options: ['Average value', 'Middle value when ordered', 'Most frequent value', 'Highest value'],
        correct: 'Middle value when ordered',
        explanation: 'The median is the middle value when data is arranged in ascending order.',
        difficulty: 'medium'
      },
      {
        id: 'g12_stats_med_5',
        question: 'What is the mode?',
        options: ['Average value', 'Middle value', 'Most frequent value', 'Range of values'],
        correct: 'Most frequent value',
        explanation: 'The mode is the value that appears most frequently in a dataset.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_stats_hard_1',
        question: 'What is the Central Limit Theorem?',
        options: ['Samples are always normal', 'Sample means approach normal distribution', 'All data is centered', 'Limits exist everywhere'],
        correct: 'Sample means approach normal distribution',
        explanation: 'The Central Limit Theorem states that sample means approach a normal distribution as sample size increases.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stats_hard_2',
        question: 'What is a Type I error in hypothesis testing?',
        options: ['Accepting false hypothesis', 'Rejecting true hypothesis', 'Calculation error', 'Sampling error'],
        correct: 'Rejecting true hypothesis',
        explanation: 'A Type I error occurs when we reject a true null hypothesis.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stats_hard_3',
        question: 'What is the formula for variance?',
        options: ['σ² = Σ(x - μ)²/n', 'σ = Σ(x - μ)/n', 'σ² = Σx²/n', 'σ² = (Σx)²/n'],
        correct: 'σ² = Σ(x - μ)²/n',
        explanation: 'Variance is the average of squared deviations from the mean.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stats_hard_4',
        question: 'What is a confidence interval?',
        options: ['Range of sample values', 'Range likely to contain population parameter', 'Sample size', 'Test statistic'],
        correct: 'Range likely to contain population parameter',
        explanation: 'A confidence interval is a range of values likely to contain the true population parameter.',
        difficulty: 'hard'
      },
      {
        id: 'g12_stats_hard_5',
        question: 'What is the null hypothesis?',
        options: ['Alternative claim', 'Status quo assumption', 'Research hypothesis', 'Final conclusion'],
        correct: 'Status quo assumption',
        explanation: 'The null hypothesis represents the status quo or no effect assumption in hypothesis testing.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_linear_programming',
    name: 'Grade 12 Unit 4: Introduction to Linear Programming',
    description: 'Linear inequalities, feasible regions, optimization problems',
    questions: [
      // Easy Questions
      {
        id: 'g12_lp_easy_1',
        question: 'What is linear programming?',
        options: ['Programming computers', 'Optimization with linear constraints', 'Drawing lines', 'Solving equations'],
        correct: 'Optimization with linear constraints',
        explanation: 'Linear programming is a method for optimizing a linear objective function subject to linear constraints.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_2',
        question: 'What is an objective function?',
        options: ['A constraint', 'Function to be optimized', 'Variable definition', 'Graph line'],
        correct: 'Function to be optimized',
        explanation: 'The objective function is what we want to maximize or minimize in linear programming.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_3',
        question: 'What is a constraint in linear programming?',
        options: ['Objective function', 'Limitation or restriction', 'Variable', 'Solution'],
        correct: 'Limitation or restriction',
        explanation: 'Constraints are limitations or restrictions that must be satisfied in the optimization problem.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_4',
        question: 'What is a feasible region?',
        options: ['Area of invalid solutions', 'Region where all constraints are satisfied', 'Objective function graph', 'Variable space'],
        correct: 'Region where all constraints are satisfied',
        explanation: 'The feasible region contains all points that satisfy all constraints.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lp_easy_5',
        question: 'Where does the optimal solution typically occur?',
        options: ['Center of feasible region', 'Corner points of feasible region', 'Outside feasible region', 'On constraint lines only'],
        correct: 'Corner points of feasible region',
        explanation: 'In linear programming, the optimal solution occurs at corner points (vertices) of the feasible region.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_lp_med_1',
        question: 'Graph the inequality x + y ≤ 4. Which side of the line x + y = 4 is shaded?',
        options: ['Above the line', 'Below the line', 'On the line only', 'Both sides'],
        correct: 'Below the line',
        explanation: 'For x + y ≤ 4, we shade below and including the line x + y = 4.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_2',
        question: 'What method is used to solve linear programming graphically?',
        options: ['Substitution method', 'Corner point method', 'Elimination method', 'Factoring method'],
        correct: 'Corner point method',
        explanation: 'The corner point method evaluates the objective function at each vertex of the feasible region.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_3',
        question: 'If we want to maximize z = 3x + 2y, and we have corner points (0,0), (0,5), (4,0), (2,3), which gives the maximum?',
        options: ['(0,0)', '(0,5)', '(4,0)', '(2,3)'],
        correct: '(4,0)',
        explanation: 'Evaluating: (0,0)→0, (0,5)→10, (4,0)→12, (2,3)→12. Both (4,0) and (2,3) give maximum value 12.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_4',
        question: 'What are the standard form constraints for linear programming?',
        options: ['All ≥', 'All ≤', 'All =', 'Variables ≥ 0 and constraints ≤'],
        correct: 'Variables ≥ 0 and constraints ≤',
        explanation: 'Standard form requires non-negative variables and constraints in ≤ form.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lp_med_5',
        question: 'What happens if the feasible region is unbounded?',
        options: ['No solution exists', 'Infinite solutions exist', 'Solution may be unbounded', 'Always bounded solution'],
        correct: 'Solution may be unbounded',
        explanation: 'With an unbounded feasible region, the optimal value might be infinite (unbounded).',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_lp_hard_1',
        question: 'What is the simplex method?',
        options: ['Graphical method', 'Algebraic method for solving LP problems', 'Guess and check', 'Trial and error'],
        correct: 'Algebraic method for solving LP problems',
        explanation: 'The simplex method is an algebraic procedure for solving linear programming problems with many variables.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_2',
        question: 'What is degeneracy in linear programming?',
        options: ['No feasible solution', 'Multiple optimal solutions', 'Basic variable equals zero', 'Unbounded solution'],
        correct: 'Basic variable equals zero',
        explanation: 'Degeneracy occurs when a basic variable in the simplex method equals zero.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_3',
        question: 'What is duality in linear programming?',
        options: ['Two-variable problems', 'Every LP has an associated dual problem', 'Double checking solutions', 'Binary variables'],
        correct: 'Every LP has an associated dual problem',
        explanation: 'Every linear programming problem has an associated dual problem with specific relationships.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_4',
        question: 'What is sensitivity analysis?',
        options: ['Finding errors', 'Studying how changes in parameters affect the solution', 'Emotional analysis', 'Variable sensitivity'],
        correct: 'Studying how changes in parameters affect the solution',
        explanation: 'Sensitivity analysis examines how changes in coefficients affect the optimal solution.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lp_hard_5',
        question: 'What conditions must be met for a linear programming problem to have a solution?',
        options: ['Feasible and bounded', 'At least two variables', 'Non-negative objective', 'Integer variables'],
        correct: 'Feasible and bounded',
        explanation: 'A LP problem needs a feasible region that exists and is bounded to guarantee an optimal solution.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_mathematical_applications_business',
    name: 'Grade 12 Unit 5: Mathematical Applications in Business',
    description: 'Business mathematics, financial calculations, and economic applications',
    questions: [
      // Easy Questions
      {
        id: 'g12_biz_easy_1',
        question: 'What is simple interest?',
        options: ['Interest on principal only', 'Interest on interest', 'Complex calculation', 'Banking fee'],
        correct: 'Interest on principal only',
        explanation: 'Simple interest is calculated only on the original principal amount.',
        difficulty: 'easy'
      },
      {
        id: 'g12_biz_easy_2',
        question: 'What is the formula for simple interest?',
        options: ['I = Prt', 'I = P(1+r)^t', 'I = P + rt', 'I = Pr/t'],
        correct: 'I = Prt',
        explanation: 'Simple interest formula: I = Principal × rate × time.',
        difficulty: 'easy'
      },
      {
        id: 'g12_biz_easy_3',
        question: 'What is compound interest?',
        options: ['Interest on principal only', 'Interest on principal and accumulated interest', 'Banking service', 'Loan penalty'],
        correct: 'Interest on principal and accumulated interest',
        explanation: 'Compound interest is calculated on both principal and previously earned interest.',
        difficulty: 'easy'
      },
      {
        id: 'g12_biz_easy_4',
        question: 'What is profit?',
        options: ['Total revenue', 'Revenue minus costs', 'Total costs', 'Revenue plus costs'],
        correct: 'Revenue minus costs',
        explanation: 'Profit is the difference between total revenue and total costs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_biz_easy_5',
        question: 'What is percentage?',
        options: ['Parts per thousand', 'Parts per hundred', 'Parts per ten', 'Parts per million'],
        correct: 'Parts per hundred',
        explanation: 'Percentage means parts per hundred (per cent).',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_biz_med_1',
        question: 'Calculate simple interest: P = $1000, r = 5%, t = 3 years',
        options: ['$150', '$200', '$250', '$300'],
        correct: '$150',
        explanation: 'I = 1000 × 0.05 × 3 = $150.',
        difficulty: 'medium'
      },
      {
        id: 'g12_biz_med_2',
        question: 'What is the compound interest formula?',
        options: ['A = P(1 + r)^t', 'A = P + rt', 'A = Prt', 'A = P/rt'],
        correct: 'A = P(1 + r)^t',
        explanation: 'Compound amount formula: A = P(1 + r)^t.',
        difficulty: 'medium'
      },
      {
        id: 'g12_biz_med_3',
        question: 'If cost price is $80 and selling price is $100, what is the profit percentage?',
        options: ['20%', '25%', '30%', '35%'],
        correct: '25%',
        explanation: 'Profit = 100 - 80 = $20. Profit% = (20/80) × 100% = 25%.',
        difficulty: 'medium'
      },
      {
        id: 'g12_biz_med_4',
        question: 'What is depreciation?',
        options: ['Increase in value', 'Decrease in value over time', 'Interest earned', 'Tax payment'],
        correct: 'Decrease in value over time',
        explanation: 'Depreciation is the decrease in value of an asset over time.',
        difficulty: 'medium'
      },
      {
        id: 'g12_biz_med_5',
        question: 'Calculate compound amount: P = $1000, r = 10%, t = 2 years',
        options: ['$1200', '$1210', '$1220', '$1100'],
        correct: '$1210',
        explanation: 'A = 1000(1 + 0.10)² = 1000 × 1.21 = $1210.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_biz_hard_1',
        question: 'What is present value?',
        options: ['Future amount', 'Current worth of future amount', 'Interest rate', 'Time period'],
        correct: 'Current worth of future amount',
        explanation: 'Present value is the current worth of a future amount of money.',
        difficulty: 'hard'
      },
      {
        id: 'g12_biz_hard_2',
        question: 'What is an annuity?',
        options: ['Single payment', 'Series of equal payments', 'Interest calculation', 'Loan amount'],
        correct: 'Series of equal payments',
        explanation: 'An annuity is a series of equal payments made at regular intervals.',
        difficulty: 'hard'
      },
      {
        id: 'g12_biz_hard_3',
        question: 'What is NPV (Net Present Value)?',
        options: ['Total future value', 'Present value of cash flows minus initial investment', 'Interest rate', 'Annual payment'],
        correct: 'Present value of cash flows minus initial investment',
        explanation: 'NPV is the present value of future cash flows minus the initial investment.',
        difficulty: 'hard'
      },
      {
        id: 'g12_biz_hard_4',
        question: 'What is break-even analysis?',
        options: ['Profit calculation', 'Point where revenue equals costs', 'Loss calculation', 'Interest analysis'],
        correct: 'Point where revenue equals costs',
        explanation: 'Break-even analysis finds the point where total revenue equals total costs.',
        difficulty: 'hard'
      },
      {
        id: 'g12_biz_hard_5',
        question: 'What is the effective interest rate?',
        options: ['Nominal rate', 'Actual rate considering compounding', 'Simple interest rate', 'Discount rate'],
        correct: 'Actual rate considering compounding',
        explanation: 'Effective interest rate is the actual rate earned or paid considering the effect of compounding.',
        difficulty: 'hard'
      }
    ]
  }
];
