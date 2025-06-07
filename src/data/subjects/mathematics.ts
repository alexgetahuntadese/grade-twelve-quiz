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

      // Medium Questions
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

      // Hard Questions
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

      // Medium Questions
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

      // Hard Questions
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

  {
    id: 'grade12_calculus_intro',
    name: 'Grade 12: Introduction to Calculus',
    description: 'Limits, derivatives, and basic integration',
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
      }
    ]
  },

  {
    id: 'grade12_statistics',
    name: 'Grade 12: Statistics and Probability',
    description: 'Advanced statistics, probability distributions, and data analysis',
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
      }
    ]
  },

  {
    id: 'grade12_advanced_algebra',
    name: 'Grade 12: Advanced Algebra and Sequences',
    description: 'Complex algebraic operations, sequences, series, and mathematical induction',
    questions: [
      // Easy Questions
      {
        id: 'g12_adv_alg_easy_1',
        question: 'What is an arithmetic sequence?',
        options: ['Sequence with constant ratio', 'Sequence with constant difference', 'Random sequence', 'Geometric pattern'],
        correct: 'Sequence with constant difference',
        explanation: 'An arithmetic sequence has a constant difference between consecutive terms.',
        difficulty: 'easy'
      },
      {
        id: 'g12_adv_alg_easy_2',
        question: 'In the sequence 2, 5, 8, 11, ..., what is the common difference?',
        options: ['2', '3', '5', '8'],
        correct: '3',
        explanation: 'The common difference is 5 - 2 = 3.',
        difficulty: 'easy'
      },
      {
        id: 'g12_adv_alg_easy_3',
        question: 'What is the general term of an arithmetic sequence?',
        options: ['an = a₁ + (n-1)d', 'an = a₁ × r^(n-1)', 'an = n²', 'an = 2n'],
        correct: 'an = a₁ + (n-1)d',
        explanation: 'The nth term of an arithmetic sequence is an = a₁ + (n-1)d.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_adv_alg_med_1',
        question: 'Find the 10th term of the arithmetic sequence: 3, 7, 11, 15, ...',
        options: ['35', '37', '39', '41'],
        correct: '39',
        explanation: 'a₁ = 3, d = 4. a₁₀ = 3 + (10-1)×4 = 3 + 36 = 39.',
        difficulty: 'medium'
      },
      {
        id: 'g12_adv_alg_med_2',
        question: 'What is a geometric sequence?',
        options: ['Sequence with constant difference', 'Sequence with constant ratio', 'Linear sequence', 'Quadratic sequence'],
        correct: 'Sequence with constant ratio',
        explanation: 'A geometric sequence has a constant ratio between consecutive terms.',
        difficulty: 'medium'
      },
      {
        id: 'g12_adv_alg_med_3',
        question: 'Find the sum of the first 5 terms of: 2, 4, 6, 8, ...',
        options: ['20', '25', '30', '35'],
        correct: '30',
        explanation: 'S₅ = 5/2 × (2×2 + (5-1)×2) = 5/2 × 12 = 30.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_adv_alg_hard_1',
        question: 'What is mathematical induction?',
        options: ['Guessing method', 'Proof technique for natural numbers', 'Statistical method', 'Algebraic operation'],
        correct: 'Proof technique for natural numbers',
        explanation: 'Mathematical induction is a proof technique used to prove statements about natural numbers.',
        difficulty: 'hard'
      },
      {
        id: 'g12_adv_alg_hard_2',
        question: 'Find the sum to infinity of 1 + 1/2 + 1/4 + 1/8 + ...',
        options: ['1', '2', '3', 'Diverges'],
        correct: '2',
        explanation: 'This is a geometric series with a = 1, r = 1/2. S∞ = 1/(1-1/2) = 2.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_analytical_geometry',
    name: 'Grade 12: Analytical Geometry',
    description: 'Coordinate geometry, conic sections, and transformations',
    questions: [
      // Easy Questions
      {
        id: 'g12_geom_easy_1',
        question: 'What is the distance formula between two points?',
        options: ['d = √[(x₂-x₁)² + (y₂-y₁)²]', 'd = (x₂-x₁) + (y₂-y₁)', 'd = x₂ + y₂', 'd = √(x₂ + y₂)'],
        correct: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
        explanation: 'The distance formula is derived from the Pythagorean theorem.',
        difficulty: 'easy'
      },
      {
        id: 'g12_geom_easy_2',
        question: 'What is the slope of a vertical line?',
        options: ['0', '1', '-1', 'Undefined'],
        correct: 'Undefined',
        explanation: 'A vertical line has undefined slope because the denominator in the slope formula is zero.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_geom_med_1',
        question: 'Find the equation of a line passing through (2,3) with slope 2',
        options: ['y = 2x - 1', 'y = 2x + 3', 'y = 2x + 1', 'y = x + 2'],
        correct: 'y = 2x - 1',
        explanation: 'Using point-slope form: y - 3 = 2(x - 2), which gives y = 2x - 1.',
        difficulty: 'medium'
      },
      {
        id: 'g12_geom_med_2',
        question: 'What is the standard form of a circle equation?',
        options: ['(x-h)² + (y-k)² = r²', 'x² + y² = r', 'x + y = r²', '(x+h)² + (y+k)² = r'],
        correct: '(x-h)² + (y-k)² = r²',
        explanation: 'The standard form of a circle with center (h,k) and radius r.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_geom_hard_1',
        question: 'What type of conic section is represented by x²/4 + y²/9 = 1?',
        options: ['Circle', 'Ellipse', 'Parabola', 'Hyperbola'],
        correct: 'Ellipse',
        explanation: 'This is the standard form of an ellipse with semi-major axis 3 and semi-minor axis 2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_geom_hard_2',
        question: 'Find the focus of the parabola y² = 4px where p = 2',
        options: ['(0,2)', '(2,0)', '(1,0)', '(0,1)'],
        correct: '(2,0)',
        explanation: 'For a parabola y² = 4px, the focus is at (p,0). With p = 2, focus is at (2,0).',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_exponential_logarithmic',
    name: 'Grade 12: Exponential and Logarithmic Functions',
    description: 'Properties of exponential and logarithmic functions, solving equations',
    questions: [
      // Easy Questions
      {
        id: 'g12_exp_easy_1',
        question: 'What is log₁₀(100)?',
        options: ['1', '2', '10', '100'],
        correct: '2',
        explanation: 'log₁₀(100) = 2 because 10² = 100.',
        difficulty: 'easy'
      },
      {
        id: 'g12_exp_easy_2',
        question: 'What is e^(ln(5))?',
        options: ['1', '5', 'e', 'ln(5)'],
        correct: '5',
        explanation: 'The exponential and natural logarithm are inverse functions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_exp_easy_3',
        question: 'What is the value of e (approximately)?',
        options: ['2.718', '3.142', '1.414', '2.236'],
        correct: '2.718',
        explanation: 'e ≈ 2.718 is the base of natural logarithms.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_exp_med_1',
        question: 'Solve for x: 2^x = 16',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 8'],
        correct: 'x = 4',
        explanation: '2^4 = 16, so x = 4.',
        difficulty: 'medium'
      },
      {
        id: 'g12_exp_med_2',
        question: 'What is log₂(8) + log₂(4)?',
        options: ['3', '4', '5', '6'],
        correct: '5',
        explanation: 'log₂(8) = 3, log₂(4) = 2. Using log properties: log₂(8×4) = log₂(32) = 5.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_exp_hard_1',
        question: 'Solve for x: e^(2x) = 7',
        options: ['x = ln(7)/2', 'x = 2ln(7)', 'x = ln(14)', 'x = 7/2'],
        correct: 'x = ln(7)/2',
        explanation: 'Taking ln of both sides: 2x = ln(7), so x = ln(7)/2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_exp_hard_2',
        question: 'What is the domain of f(x) = ln(x - 3)?',
        options: ['x > 0', 'x > 3', 'x ≥ 3', 'All real numbers'],
        correct: 'x > 3',
        explanation: 'The argument of ln must be positive: x - 3 > 0, so x > 3.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_matrix_algebra',
    name: 'Grade 12: Matrix Algebra',
    description: 'Matrix operations, determinants, and systems of equations',
    questions: [
      // Easy Questions
      {
        id: 'g12_matrix_easy_1',
        question: 'What is a matrix?',
        options: ['A number', 'A rectangular array of numbers', 'A function', 'A graph'],
        correct: 'A rectangular array of numbers',
        explanation: 'A matrix is a rectangular arrangement of numbers in rows and columns.',
        difficulty: 'easy'
      },
      {
        id: 'g12_matrix_easy_2',
        question: 'What is the size of a 3×2 matrix?',
        options: ['6 elements', '5 elements', '3 rows, 2 columns', '2 rows, 3 columns'],
        correct: '3 rows, 2 columns',
        explanation: 'A 3×2 matrix has 3 rows and 2 columns.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_matrix_med_1',
        question: 'When can two matrices be multiplied?',
        options: ['Always', 'When they have same dimensions', 'When columns of first = rows of second', 'Never'],
        correct: 'When columns of first = rows of second',
        explanation: 'Matrix multiplication requires the number of columns in the first matrix to equal the number of rows in the second.',
        difficulty: 'medium'
      },
      {
        id: 'g12_matrix_med_2',
        question: 'What is the identity matrix?',
        options: ['Matrix of all zeros', 'Matrix of all ones', 'Square matrix with 1s on diagonal, 0s elsewhere', 'Any square matrix'],
        correct: 'Square matrix with 1s on diagonal, 0s elsewhere',
        explanation: 'The identity matrix has 1s on the main diagonal and 0s elsewhere.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_matrix_hard_1',
        question: 'What is the determinant of a 2×2 matrix [[a,b],[c,d]]?',
        options: ['a+d-b-c', 'ad-bc', 'ac-bd', 'a+b+c+d'],
        correct: 'ad-bc',
        explanation: 'The determinant of a 2×2 matrix is ad - bc.',
        difficulty: 'hard'
      },
      {
        id: 'g12_matrix_hard_2',
        question: 'When does a matrix have an inverse?',
        options: ['Always', 'When it is square', 'When determinant ≠ 0', 'When it is symmetric'],
        correct: 'When determinant ≠ 0',
        explanation: 'A square matrix has an inverse if and only if its determinant is non-zero.',
        difficulty: 'hard'
      }
    ]
  }
];
