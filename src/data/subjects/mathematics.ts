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
      },

      // Medium Questions
      {
        id: 'func_m1',
        question: 'What is the vertex of the parabola f(x) = x² - 4x + 3?',
        options: ['(2, -1)', '(2, 1)', '(-2, -1)', '(1, 0)'],
        correct: '(2, -1)',
        explanation: 'For f(x) = ax² + bx + c, vertex x = -b/2a = 4/2 = 2. f(2) = 4 - 8 + 3 = -1.',
        difficulty: 'medium'
      },
      {
        id: 'func_m2',
        question: 'If f(x) = 3x + 1 and g(x) = x² - 2, what is (g ∘ f)(1)?',
        options: ['14', '15', '16', '13'],
        correct: '14',
        explanation: 'f(1) = 4, then g(4) = 16 - 2 = 14.',
        difficulty: 'medium'
      },
      {
        id: 'func_m3',
        question: 'What is the equation of the inverse of f(x) = (x + 3)/2?',
        options: ['f⁻¹(x) = 2x - 3', 'f⁻¹(x) = 2x + 3', 'f⁻¹(x) = (x - 3)/2', 'f⁻¹(x) = x/2 - 3'],
        correct: 'f⁻¹(x) = 2x - 3',
        explanation: 'Let y = (x + 3)/2, solve for x: 2y = x + 3, so x = 2y - 3.',
        difficulty: 'medium'
      },
      {
        id: 'func_m4',
        question: 'What is the domain of f(x) = √(x - 5)?',
        options: ['x ≥ 5', 'x > 5', 'x ≤ 5', 'All real numbers'],
        correct: 'x ≥ 5',
        explanation: 'For real square roots, the expression under the radical must be non-negative.',
        difficulty: 'medium'
      },
      {
        id: 'func_m5',
        question: 'If f(x) = x² and g(x) = x + 2, what is f(g(x))?',
        options: ['x² + 2', '(x + 2)²', 'x² + 4x + 4', 'Both B and C'],
        correct: 'Both B and C',
        explanation: 'f(g(x)) = f(x + 2) = (x + 2)² = x² + 4x + 4.',
        difficulty: 'medium'
      },
      {
        id: 'func_m6',
        question: 'What is the range of f(x) = -x² + 4?',
        options: ['y ≤ 4', 'y ≥ 4', 'y < 4', 'All real numbers'],
        correct: 'y ≤ 4',
        explanation: 'This is a downward parabola with maximum value at the vertex (0, 4).',
        difficulty: 'medium'
      },
      {
        id: 'func_m7',
        question: 'Which function is odd?',
        options: ['f(x) = x²', 'f(x) = x³', 'f(x) = |x|', 'f(x) = x² + 1'],
        correct: 'f(x) = x³',
        explanation: 'An odd function satisfies f(-x) = -f(x). For x³: (-x)³ = -x³.',
        difficulty: 'medium'
      },
      {
        id: 'func_m8',
        question: 'What is the horizontal asymptote of f(x) = (2x + 1)/(x - 3)?',
        options: ['y = 2', 'y = 1', 'y = 0', 'y = 3'],
        correct: 'y = 2',
        explanation: 'For rational functions, divide leading coefficients: 2/1 = 2.',
        difficulty: 'medium'
      },
      {
        id: 'func_m9',
        question: 'If f(x) = |x - 2|, what is f(-1)?',
        options: ['3', '-3', '1', '-1'],
        correct: '3',
        explanation: 'f(-1) = |-1 - 2| = |-3| = 3.',
        difficulty: 'medium'
      },
      {
        id: 'func_m10',
        question: 'What is the period of f(x) = sin(2x)?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: 'π',
        explanation: 'For sin(bx), the period is 2π/b = 2π/2 = π.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'func_h1',
        question: 'What is the inverse of f(x) = (x + 1)/(x - 1) for x ≠ 1?',
        options: ['f⁻¹(x) = (x + 1)/(x - 1)', 'f⁻¹(x) = (x - 1)/(x + 1)', 'f⁻¹(x) = (1 + x)/(1 - x)', 'f⁻¹(x) = (1 - x)/(1 + x)'],
        correct: 'f⁻¹(x) = (x + 1)/(x - 1)',
        explanation: 'This function is its own inverse, which can be verified by composition.',
        difficulty: 'hard'
      },
      {
        id: 'func_h2',
        question: 'What is lim(x→∞) (3x² + 2x + 1)/(x² - x + 5)?',
        options: ['3', '∞', '0', 'Does not exist'],
        correct: '3',
        explanation: 'Divide by highest power of x: limit is ratio of leading coefficients.',
        difficulty: 'hard'
      },
      {
        id: 'func_h3',
        question: 'If f(x) = x³ - 3x + 1, what is f\'(2)?',
        options: ['9', '3', '11', '7'],
        correct: '9',
        explanation: 'f\'(x) = 3x² - 3, so f\'(2) = 3(4) - 3 = 12 - 3 = 9.',
        difficulty: 'hard'
      },
      {
        id: 'func_h4',
        question: 'What is the equation of the tangent line to f(x) = x² at x = 3?',
        options: ['y = 6x - 9', 'y = 6x + 9', 'y = 3x + 9', 'y = 6x - 18'],
        correct: 'y = 6x - 9',
        explanation: 'f\'(x) = 2x, so slope at x=3 is 6. Point is (3,9). Using point-slope form.',
        difficulty: 'hard'
      },
      {
        id: 'func_h5',
        question: 'What is the critical point of f(x) = x³ - 3x² + 2?',
        options: ['x = 0, 2', 'x = 1, 3', 'x = 0, 3', 'x = 2, 3'],
        correct: 'x = 0, 2',
        explanation: 'f\'(x) = 3x² - 6x = 3x(x - 2) = 0 when x = 0 or x = 2.',
        difficulty: 'hard'
      },
      {
        id: 'func_h6',
        question: 'What is ∫(2x + 1)dx?',
        options: ['x² + x + C', '2x² + x + C', 'x² + 2x + C', '2x + C'],
        correct: 'x² + x + C',
        explanation: 'Integrate term by term: ∫2x dx + ∫1 dx = x² + x + C.',
        difficulty: 'hard'
      },
      {
        id: 'func_h7',
        question: 'What is the amplitude of f(x) = 3sin(2x + π/4)?',
        options: ['3', '2', 'π/4', '1'],
        correct: '3',
        explanation: 'In f(x) = A sin(Bx + C), the amplitude is |A| = 3.',
        difficulty: 'hard'
      },
      {
        id: 'func_h8',
        question: 'What is the removable discontinuity of f(x) = (x² - 4)/(x - 2)?',
        options: ['x = 2', 'x = -2', 'x = 4', 'No discontinuity'],
        correct: 'x = 2',
        explanation: 'Factor: (x+2)(x-2)/(x-2) = x+2 for x≠2. Removable discontinuity at x=2.',
        difficulty: 'hard'
      },
      {
        id: 'func_h9',
        question: 'What is the Maclaurin series for e^x up to x³?',
        options: ['1 + x + x²/2 + x³/6', '1 + x + x² + x³', 'x + x²/2 + x³/6', '1 + x + x²/2'],
        correct: '1 + x + x²/2 + x³/6',
        explanation: 'e^x = Σ(x^n/n!) = 1 + x + x²/2! + x³/3! + ...',
        difficulty: 'hard'
      },
      {
        id: 'func_h10',
        question: 'What is the radius of convergence for Σ(x^n/n!) from n=0 to ∞?',
        options: ['1', '∞', '0', 'e'],
        correct: '∞',
        explanation: 'Using ratio test: lim|a_{n+1}/a_n| = lim|x/(n+1)| = 0 for all x.',
        difficulty: 'hard'
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
      },
      {
        id: 'lim_6',
        question: 'What is lim(x → 1) (x + 2)?',
        options: ['1', '2', '3', '4'],
        correct: '3',
        explanation: 'Direct substitution: 1 + 2 = 3.',
        difficulty: 'easy'
      },
      {
        id: 'lim_7',
        question: 'Which limit does not exist?',
        options: ['lim(x → 0) x', 'lim(x → 0) 1/x²', 'lim(x → 0) 1/x', 'lim(x → 0) x²'],
        correct: 'lim(x → 0) 1/x',
        explanation: 'Left and right limits are different (±∞), so the limit does not exist.',
        difficulty: 'easy'
      },
      {
        id: 'lim_8',
        question: 'What is lim(x → 2) (x² - 4)/(x - 2)?',
        options: ['0', '2', '4', 'Undefined'],
        correct: '4',
        explanation: 'Factor: (x-2)(x+2)/(x-2) = x+2, so limit is 2+2 = 4.',
        difficulty: 'easy'
      },
      {
        id: 'lim_9',
        question: 'What makes a function continuous at a point?',
        options: ['Function is defined', 'Limit exists', 'Function value equals limit', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Continuity requires: function defined, limit exists, and function value equals limit.',
        difficulty: 'easy'
      },
      {
        id: 'lim_10',
        question: 'What is lim(x → 0) sin(x)/x?',
        options: ['0', '1', '∞', 'Undefined'],
        correct: '1',
        explanation: 'This is a fundamental limit in calculus.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'lim_m1',
        question: 'What is lim(x → ∞) (3x² + 1)/(2x² - 5)?',
        options: ['3/2', '∞', '0', '1'],
        correct: '3/2',
        explanation: 'Divide by highest power: limit is ratio of leading coefficients.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m2',
        question: 'What is lim(x → 0) (1 - cos(x))/x²?',
        options: ['0', '1/2', '1', '∞'],
        correct: '1/2',
        explanation: 'Using L\'Hôpital\'s rule twice or the standard limit formula.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m3',
        question: 'Where is f(x) = |x|/x discontinuous?',
        options: ['x = 0', 'x = 1', 'x = -1', 'Nowhere'],
        correct: 'x = 0',
        explanation: 'The function is undefined at x = 0 and has a jump discontinuity.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m4',
        question: 'What is lim(x → 1) (x³ - 1)/(x - 1)?',
        options: ['1', '2', '3', '0'],
        correct: '3',
        explanation: 'Factor: (x-1)(x²+x+1)/(x-1) = x²+x+1, so limit is 1+1+1 = 3.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m5',
        question: 'What is lim(x → 0⁺) ln(x)?',
        options: ['0', '1', '-∞', '∞'],
        correct: '-∞',
        explanation: 'As x approaches 0 from the right, ln(x) approaches negative infinity.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m6',
        question: 'What is lim(x → ∞) (1 + 1/x)ˣ?',
        options: ['1', 'e', '∞', '0'],
        correct: 'e',
        explanation: 'This is the definition of e as a limit.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m7',
        question: 'What type of discontinuity does f(x) = (x² - 1)/(x - 1) have at x = 1?',
        options: ['Jump', 'Removable', 'Infinite', 'None'],
        correct: 'Removable',
        explanation: 'The limit exists but the function is undefined at x = 1.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m8',
        question: 'What is lim(x → 0) (eˣ - 1)/x?',
        options: ['0', '1', 'e', '∞'],
        correct: '1',
        explanation: 'This is the definition of the derivative of eˣ at x = 0.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m9',
        question: 'What is lim(x → 2⁻) 1/(x - 2)?',
        options: ['0', '∞', '-∞', '1'],
        correct: '-∞',
        explanation: 'As x approaches 2 from the left, (x-2) is negative and approaches 0.',
        difficulty: 'medium'
      },
      {
        id: 'lim_m10',
        question: 'What is lim(x → 0) x sin(1/x)?',
        options: ['0', '1', 'Does not exist', '∞'],
        correct: '0',
        explanation: 'Using squeeze theorem: -|x| ≤ x sin(1/x) ≤ |x|.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'lim_h1',
        question: 'What is lim(x → 0) (tan(x) - sin(x))/x³?',
        options: ['0', '1/2', '1/3', '1'],
        correct: '1/2',
        explanation: 'Using Taylor series or L\'Hôpital\'s rule three times.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h2',
        question: 'What is lim(x → ∞) x(π/2 - arctan(x))?',
        options: ['0', '1', 'π/2', '∞'],
        correct: '1',
        explanation: 'Let u = 1/x, then use L\'Hôpital\'s rule on lim(u → 0⁺) (π/2 - arctan(1/u))/u.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h3',
        question: 'What is lim(x → 0⁺) x^x?',
        options: ['0', '1', 'e', '∞'],
        correct: '1',
        explanation: 'Rewrite as e^(x ln x) and find lim(x → 0⁺) x ln x = 0.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h4',
        question: 'What is lim(n → ∞) (1 + 2/n)^(3n)?',
        options: ['e²', 'e⁶', 'e³', '1'],
        correct: 'e⁶',
        explanation: 'Rewrite as [(1 + 2/n)^(n/2)]^6 and use the fact that lim(1 + a/n)^n = e^a.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h5',
        question: 'What is lim(x → 0) (cos(x) - cos(2x))/x²?',
        options: ['0', '3/2', '-3/2', '1'],
        correct: '3/2',
        explanation: 'Using Taylor expansions or L\'Hôpital\'s rule twice.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h6',
        question: 'What is lim(x → ∞) (x² + x + 1)/(x² - x + 1)?',
        options: ['1', '∞', '0', 'Does not exist'],
        correct: '1',
        explanation: 'Divide by x²: (1 + 1/x + 1/x²)/(1 - 1/x + 1/x²) → 1.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h7',
        question: 'What is lim(x → 0) (x - sin(x))/x³?',
        options: ['0', '1/6', '1/3', '1'],
        correct: '1/6',
        explanation: 'Using Taylor series: sin(x) = x - x³/6 + O(x⁵).',
        difficulty: 'hard'
      },
      {
        id: 'lim_h8',
        question: 'What is lim(x → 1) (1/ln(x) - 1/(x-1))?',
        options: ['0', '1/2', '-1/2', '∞'],
        correct: '1/2',
        explanation: 'Combine fractions and use L\'Hôpital\'s rule or Taylor expansion.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h9',
        question: 'What is lim(x → 0⁺) (1/x)sin(x)?',
        options: ['0', '1', '∞', 'Does not exist'],
        correct: '1',
        explanation: 'Rewrite as sin(x)/x and use the fundamental limit.',
        difficulty: 'hard'
      },
      {
        id: 'lim_h10',
        question: 'What is lim(x → 0) (e^(x²) - cos(x))/x²?',
        options: ['1', '3/2', '2', '5/2'],
        correct: '3/2',
        explanation: 'Using Taylor series: e^(x²) ≈ 1 + x², cos(x) ≈ 1 - x²/2.',
        difficulty: 'hard'
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
      },
      {
        id: 'deriv_3',
        question: 'What is d/dx(3x)?',
        options: ['3', '3x', 'x', '0'],
        correct: '3',
        explanation: 'The derivative of 3x is 3.',
        difficulty: 'easy'
      },
      {
        id: 'deriv_4',
        question: 'What is the derivative of f(x) = x³?',
        options: ['3x²', 'x²', '3x', '3'],
        correct: '3x²',
        explanation: 'Using the power rule: d/dx(x³) = 3x².',
        difficulty: 'easy'
      },
      {
        id: 'deriv_5',
        question: 'What is d/dx(x + 5)?',
        options: ['1', '5', 'x', '6'],
        correct: '1',
        explanation: 'The derivative of x is 1, and the derivative of 5 is 0.',
        difficulty: 'easy'
      },
      {
        id: 'deriv_6',
        question: 'What rule is used to find d/dx(x² + 3x)?',
        options: ['Product rule', 'Quotient rule', 'Sum rule', 'Chain rule'],
        correct: 'Sum rule',
        explanation: 'The sum rule states that the derivative of a sum is the sum of derivatives.',
        difficulty: 'easy'
      },
      {
        id: 'deriv_7',
        question: 'What is the power rule?',
        options: ['d/dx(xⁿ) = nxⁿ⁻¹', 'd/dx(xⁿ) = xⁿ⁻¹', 'd/dx(xⁿ) = nxⁿ', 'd/dx(xⁿ) = xⁿ'],
        correct: 'd/dx(xⁿ) = nxⁿ⁻¹',
        explanation: 'The power rule: bring down the exponent and reduce the power by 1.',
        difficulty: 'easy'
      },
      {
        id: 'deriv_8',
        question: 'What is d/dx(√x)?',
        options: ['1/(2√x)', '2√x', '1/√x', '√x/2'],
        correct: '1/(2√x)',
        explanation: 'Rewrite as x^(1/2), then apply power rule: (1/2)x^(-1/2) = 1/(2√x).',
        difficulty: 'easy'
      },
      {
        id: 'deriv_9',
        question: 'What does the derivative represent geometrically?',
        options: ['Area under curve', 'Slope of tangent line', 'y-intercept', 'Maximum value'],
        correct: 'Slope of tangent line',
        explanation: 'The derivative gives the slope of the tangent line at any point.',
        difficulty: 'easy'
      },
      {
        id: 'deriv_10',
        question: 'What is d/dx(1/x)?',
        options: ['-1/x²', '1/x²', '-1/x', '1/x'],
        correct: '-1/x²',
        explanation: 'Rewrite as x⁻¹, then apply power rule: -1·x⁻² = -1/x².',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'deriv_m1',
        question: 'What is d/dx(x²·sin(x)) using the product rule?',
        options: ['2x·sin(x) + x²·cos(x)', '2x·cos(x) + x²·sin(x)', 'x²·cos(x)', '2x·sin(x)'],
        correct: '2x·sin(x) + x²·cos(x)',
        explanation: 'Product rule: (uv)\' = u\'v + uv\'. Here u = x², v = sin(x).',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m2',
        question: 'What is d/dx(sin(x)/x)?',
        options: ['(x·cos(x) - sin(x))/x²', 'cos(x)/x', 'sin(x)/x²', '(cos(x) - sin(x))/x'],
        correct: '(x·cos(x) - sin(x))/x²',
        explanation: 'Using quotient rule: (u/v)\' = (u\'v - uv\')/v².',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m3',
        question: 'What is d/dx(sin(3x))?',
        options: ['3cos(3x)', 'cos(3x)', '3sin(3x)', '-3cos(3x)'],
        correct: '3cos(3x)',
        explanation: 'Using chain rule: d/dx(sin(u)) = cos(u)·u\', where u = 3x.',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m4',
        question: 'What is d/dx(e^(2x))?',
        options: ['2e^(2x)', 'e^(2x)', '2e^x', 'e^(2x)·ln(2)'],
        correct: '2e^(2x)',
        explanation: 'Using chain rule: d/dx(e^u) = e^u·u\', where u = 2x.',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m5',
        question: 'What is d/dx(ln(x²))?',
        options: ['2/x', '1/x²', '2x', '1/x'],
        correct: '2/x',
        explanation: 'Using chain rule: d/dx(ln(u)) = (1/u)·u\', where u = x². Or use ln(x²) = 2ln(x).',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m6',
        question: 'What is the second derivative of f(x) = x⁴?',
        options: ['12x²', '4x³', '12x', '24x'],
        correct: '12x²',
        explanation: 'f\'(x) = 4x³, so f\'\'(x) = 12x².',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m7',
        question: 'What is d/dx(tan(x))?',
        options: ['sec²(x)', 'sec(x)', 'csc²(x)', 'cos²(x)'],
        correct: 'sec²(x)',
        explanation: 'The derivative of tan(x) is sec²(x) = 1/cos²(x).',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m8',
        question: 'What is d/dx((x² + 1)³)?',
        options: ['3(x² + 1)²', '6x(x² + 1)²', '3(x² + 1)²·2x', '6x(x² + 1)'],
        correct: '6x(x² + 1)²',
        explanation: 'Using chain rule: 3(x² + 1)²·2x = 6x(x² + 1)².',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m9',
        question: 'At what point does f(x) = x³ - 3x have a horizontal tangent?',
        options: ['x = ±1', 'x = 0', 'x = ±√3', 'x = 3'],
        correct: 'x = ±1',
        explanation: 'Horizontal tangents occur when f\'(x) = 0. f\'(x) = 3x² - 3 = 0 when x = ±1.',
        difficulty: 'medium'
      },
      {
        id: 'deriv_m10',
        question: 'What is d/dx(arcsin(x))?',
        options: ['1/√(1-x²)', '1/√(1+x²)', '-1/√(1-x²)', '1/(1+x²)'],
        correct: '1/√(1-x²)',
        explanation: 'The derivative of arcsin(x) is 1/√(1-x²).',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'deriv_h1',
        question: 'What is d/dx(x^x) for x > 0?',
        options: ['x^x(ln(x) + 1)', 'x^(x-1)', 'x^x·ln(x)', 'x^x/x'],
        correct: 'x^x(ln(x) + 1)',
        explanation: 'Use logarithmic differentiation: ln(y) = x ln(x), then differentiate implicitly.',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h2',
        question: 'What is the derivative of f(x) = sin⁻¹(2x) at x = 1/4?',
        options: ['2/√3', '4/√3', '2', '1/√3'],
        correct: '4/√3',
        explanation: 'f\'(x) = 2/√(1-4x²). At x = 1/4: f\'(1/4) = 2/√(1-1/4) = 2/√(3/4) = 4/√3.',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h3',
        question: 'What is d²y/dx² if y = e^(x²)?',
        options: ['2xe^(x²) + 4x²e^(x²)', '(2 + 4x²)e^(x²)', '4xe^(x²)', 'Both A and B'],
        correct: 'Both A and B',
        explanation: 'First derivative: 2xe^(x²). Second derivative: 2e^(x²) + 4x²e^(x²) = (2 + 4x²)e^(x²).',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h4',
        question: 'Find dy/dx if x² + y² = 25 (implicit differentiation)',
        options: ['-x/y', '-y/x', 'x/y', 'y/x'],
        correct: '-x/y',
        explanation: 'Differentiate both sides: 2x + 2y(dy/dx) = 0, so dy/dx = -x/y.',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h5',
        question: 'What is the nth derivative of sin(x)?',
        options: ['sin(x + nπ/2)', 'cos(x + nπ/2)', 'sin(x + n)', 'cos(x + n)'],
        correct: 'sin(x + nπ/2)',
        explanation: 'Pattern: sin, cos, -sin, -cos repeats every 4 derivatives.',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h6',
        question: 'What is d/dx(∫₀ˣ sin(t²)dt)?',
        options: ['sin(x²)', 'cos(x²)', '2x sin(x²)', 'sin(x)'],
        correct: 'sin(x²)',
        explanation: 'By Fundamental Theorem of Calculus: d/dx(∫ₐˣ f(t)dt) = f(x).',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h7',
        question: 'What is the derivative of f(x) = |x³|?',
        options: ['3x²', '3|x|x', '3x|x|', 'Undefined at x = 0'],
        correct: '3x|x|',
        explanation: 'For x ≥ 0: f\'(x) = 3x². For x < 0: f\'(x) = -3x². Combined: f\'(x) = 3x|x|.',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h8',
        question: 'What is lim(h→0) [f(x+h) - f(x)]/h called?',
        options: ['Derivative', 'Limit', 'Integral', 'Differential'],
        correct: 'Derivative',
        explanation: 'This is the definition of the derivative using the limit definition.',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h9',
        question: 'What is d/dx(cot⁻¹(x))?',
        options: ['-1/(1+x²)', '1/(1+x²)', '-1/√(1-x²)', '1/√(1-x²)'],
        correct: '-1/(1+x²)',
        explanation: 'The derivative of cot⁻¹(x) is -1/(1+x²).',
        difficulty: 'hard'
      },
      {
        id: 'deriv_h10',
        question: 'If f(x) = (sin(x))^(cos(x)), what is f\'(π/2)?',
        options: ['0', '1', '-1', 'π/2'],
        correct: '0',
        explanation: 'At x = π/2: f(π/2) = 1^0 = 1. Using logarithmic differentiation, f\'(π/2) = 0.',
        difficulty: 'hard'
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
      },
      {
        id: 'int_3',
        question: 'What is ∫1 dx?',
        options: ['1', 'x', 'x + C', '0'],
        correct: 'x + C',
        explanation: 'The antiderivative of 1 is x plus a constant.',
        difficulty: 'easy'
      },
      {
        id: 'int_4',
        question: 'What is ∫x³ dx?',
        options: ['x⁴/4 + C', '3x² + C', 'x⁴ + C', '4x³ + C'],
        correct: 'x⁴/4 + C',
        explanation: 'Using the power rule for integration: increase power by 1, divide by new power.',
        difficulty: 'easy'
      },
      {
        id: 'int_5',
        question: 'What is ∫₀¹ x dx?',
        options: ['1/2', '1', '2', '0'],
        correct: '1/2',
        explanation: '∫x dx = x²/2, so ∫₀¹ x dx = [x²/2]₀¹ = 1/2 - 0 = 1/2.',
        difficulty: 'easy'
      },
      {
        id: 'int_6',
        question: 'What is the constant of integration?',
        options: ['Always 0', 'Always 1', 'Any constant C', 'Must be positive'],
        correct: 'Any constant C',
        explanation: 'The constant of integration represents any constant value.',
        difficulty: 'easy'
      },
      {
        id: 'int_7',
        question: 'What is ∫0 dx?',
        options: ['0', 'C', 'x', 'undefined'],
        correct: 'C',
        explanation: 'The integral of 0 is just a constant C.',
        difficulty: 'easy'
      },
      {
        id: 'int_8',
        question: 'What is ∫eˣ dx?',
        options: ['eˣ + C', 'xeˣ + C', 'eˣ/x + C', 'ln(x) + C'],
        correct: 'eˣ + C',
        explanation: 'The exponential function is its own antiderivative.',
        difficulty: 'easy'
      },
      {
        id: 'int_9',
        question: 'What is ∫1/x dx for x > 0?',
        options: ['ln(x) + C', 'x² + C', '1/x² + C', '-1/x + C'],
        correct: 'ln(x) + C',
        explanation: 'The antiderivative of 1/x is the natural logarithm.',
        difficulty: 'easy'
      },
      {
        id: 'int_10',
        question: 'What is ∫sin(x) dx?',
        options: ['cos(x) + C', '-cos(x) + C', 'sin(x) + C', '-sin(x) + C'],
        correct: '-cos(x) + C',
        explanation: 'The antiderivative of sin(x) is -cos(x) + C.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'int_m1',
        question: 'What is ∫x·eˣ dx using integration by parts?',
        options: ['(x-1)eˣ + C', 'xeˣ + C', '(x+1)eˣ + C', 'x²eˣ + C'],
        correct: '(x-1)eˣ + C',
        explanation: 'Using ∫u dv = uv - ∫v du with u = x, dv = eˣ dx.',
        difficulty: 'medium'
      },
      {
        id: 'int_m2',
        question: 'What is ∫sin²(x) dx?',
        options: ['x/2 - sin(2x)/4 + C', 'x/2 + sin(2x)/4 + C', '-cos²(x)/2 + C', 'sin(x)cos(x) + C'],
        correct: 'x/2 - sin(2x)/4 + C',
        explanation: 'Use identity sin²(x) = (1 - cos(2x))/2.',
        difficulty: 'medium'
      },
      {
        id: 'int_m3',
        question: 'What is ∫₁² (1/x²) dx?',
        options: ['1/2', '-1/2', '1', '3/2'],
        correct: '1/2',
        explanation: '∫1/x² dx = -1/x, so ∫₁² (1/x²) dx = [-1/x]₁² = -1/2 - (-1) = 1/2.',
        difficulty: 'medium'
      },
      {
        id: 'int_m4',
        question: 'What substitution works for ∫2x(x² + 1)⁵ dx?',
        options: ['u = x', 'u = x² + 1', 'u = 2x', 'u = (x² + 1)⁵'],
        correct: 'u = x² + 1',
        explanation: 'With u = x² + 1, du = 2x dx, which appears in the integral.',
        difficulty: 'medium'
      },
      {
        id: 'int_m5',
        question: 'What is ∫cos(3x) dx?',
        options: ['sin(3x)/3 + C', '3sin(3x) + C', '-sin(3x)/3 + C', 'sin(3x) + C'],
        correct: 'sin(3x)/3 + C',
        explanation: 'Using substitution u = 3x, du = 3dx.',
        difficulty: 'medium'
      },
      {
        id: 'int_m6',
        question: 'What is ∫ln(x) dx?',
        options: ['x ln(x) - x + C', '1/x + C', 'x/ln(x) + C', 'x ln(x) + C'],
        correct: 'x ln(x) - x + C',
        explanation: 'Using integration by parts with u = ln(x), dv = dx.',
        difficulty: 'medium'
      },
      {
        id: 'int_m7',
        question: 'What is ∫₀^(π/2) sin(x) dx?',
        options: ['0', '1', '2', 'π/2'],
        correct: '1',
        explanation: '∫sin(x) dx = -cos(x), so ∫₀^(π/2) sin(x) dx = [-cos(x)]₀^(π/2) = 0 - (-1) = 1.',
        difficulty: 'medium'
      },
      {
        id: 'int_m8',
        question: 'What is ∫x√(x² + 1) dx?',
        options: ['(2/3)(x² + 1)^(3/2) + C', '(1/3)(x² + 1)^(3/2) + C', '√(x² + 1) + C', 'x(x² + 1)^(3/2) + C'],
        correct: '(1/3)(x² + 1)^(3/2) + C',
        explanation: 'Use substitution u = x² + 1, du = 2x dx.',
        difficulty: 'medium'
      },
      {
        id: 'int_m9',
        question: 'What is ∫tan(x) dx?',
        options: ['-ln|cos(x)| + C', 'ln|cos(x)| + C', 'ln|sin(x)| + C', '-ln|sin(x)| + C'],
        correct: '-ln|cos(x)| + C',
        explanation: 'Rewrite as ∫(sin(x)/cos(x)) dx and use substitution u = cos(x).',
        difficulty: 'medium'
      },
      {
        id: 'int_m10',
        question: 'What is ∫₋₁¹ x³ dx?',
        options: ['0', '1/2', '2', '4'],
        correct: '0',
        explanation: 'x³ is an odd function, so its integral over a symmetric interval is 0.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'int_h1',
        question: 'What is ∫₀^∞ e^(-x²) dx?',
        options: ['√π/2', '1', 'π/2', '√π'],
        correct: '√π/2',
        explanation: 'This is the Gaussian integral, equals √π/2.',
        difficulty: 'hard'
      },
      {
        id: 'int_h2',
        question: 'What is ∫x²e^x dx using integration by parts?',
        options: ['(x² - 2x + 2)e^x + C', 'x²e^x + C', '(x² + 2x + 2)e^x + C', '2xe^x + C'],
        correct: '(x² - 2x + 2)e^x + C',
        explanation: 'Apply integration by parts twice: first with u = x², then u = x.',
        difficulty: 'hard'
      },
      {
        id: 'int_h3',
        question: 'What is ∫₀^(π/4) sec²(x) dx?',
        options: ['1', 'π/4', '√2', 'tan(1)'],
        correct: '1',
        explanation: '∫sec²(x) dx = tan(x), so ∫₀^(π/4) sec²(x) dx = [tan(x)]₀^(π/4) = 1 - 0 = 1.',
        difficulty: 'hard'
      },
      {
        id: 'int_h4',
        question: 'What is ∫1/(1 + x²) dx?',
        options: ['arctan(x) + C', 'ln(1 + x²) + C', '1/(2x) + C', 'x/(1 + x²) + C'],
        correct: 'arctan(x) + C',
        explanation: 'This is a standard integral formula.',
        difficulty: 'hard'
      },
      {
        id: 'int_h5',
        question: 'What is ∫sin(x)cos(x) dx?',
        options: ['sin²(x)/2 + C', '-cos²(x)/2 + C', 'sin(2x)/4 + C', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Multiple correct forms due to trigonometric identities and constants.',
        difficulty: 'hard'
      },
      {
        id: 'int_h6',
        question: 'What is ∫₁^e (ln(x)/x) dx?',
        options: ['1/2', '1', 'e', '(ln(e))²/2'],
        correct: '1/2',
        explanation: 'Use substitution u = ln(x), du = dx/x. Then ∫₀¹ u du = [u²/2]₀¹ = 1/2.',
        difficulty: 'hard'
      },
      {
        id: 'int_h7',
        question: 'What is ∫e^x sin(x) dx?',
        options: ['e^x(sin(x) - cos(x))/2 + C', 'e^x sin(x) + C', 'e^x cos(x) + C', 'e^x(sin(x) + cos(x))/2 + C'],
        correct: 'e^x(sin(x) - cos(x))/2 + C',
        explanation: 'Use integration by parts twice, or complex exponentials.',
        difficulty: 'hard'
      },
      {
        id: 'int_h8',
        question: 'What is ∫₀^∞ xe^(-x) dx?',
        options: ['1', '2', '1/2', '∞'],
        correct: '1',
        explanation: 'Use integration by parts or recognize as Γ(2) = 1.',
        difficulty: 'hard'
      },
      {
        id: 'int_h9',
        question: 'What is ∫√(a² - x²) dx using trigonometric substitution?',
        options: ['(x√(a² - x²) + a²arcsin(x/a))/2 + C', 'arcsin(x/a) + C', '√(a² - x²) + C', 'a²arcsin(x/a) + C'],
        correct: '(x√(a² - x²) + a²arcsin(x/a))/2 + C',
        explanation: 'Use substitution x = a sin(θ) and integrate.',
        difficulty: 'hard'
      },
      {
        id: 'int_h10',
        question: 'What is ∫₋∞^∞ 1/(1 + x²) dx?',
        options: ['π', '2π', 'π/2', '∞'],
        correct: 'π',
        explanation: '∫1/(1 + x²) dx = arctan(x), so the improper integral equals π.',
        difficulty: 'hard'
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
      },
      {
        id: 'alg_3',
        question: 'Solve for x: x - 7 = 12',
        options: ['x = 5', 'x = 19', 'x = -5', 'x = 84'],
        correct: 'x = 19',
        explanation: 'Add 7 to both sides: x = 12 + 7 = 19.',
        difficulty: 'easy'
      },
      {
        id: 'alg_4',
        question: 'What is 3x + 2x?',
        options: ['5x', '6x', '5x²', '6'],
        correct: '5x',
        explanation: 'Combine like terms: 3x + 2x = 5x.',
        difficulty: 'easy'
      },
      {
        id: 'alg_5',
        question: 'Solve for x: 4x = 20',
        options: ['x = 5', 'x = 4', 'x = 16', 'x = 80'],
        correct: 'x = 5',
        explanation: 'Divide both sides by 4: x = 20/4 = 5.',
        difficulty: 'easy'
      },
      {
        id: 'alg_6',
        question: 'What is the y-intercept of y = 2x - 3?',
        options: ['2', '-3', '3', '0'],
        correct: '-3',
        explanation: 'In y = mx + b form, b is the y-intercept, so it is -3.',
        difficulty: 'easy'
      },
      {
        id: 'alg_7',
        question: 'Simplify: 2(x + 3)',
        options: ['2x + 3', '2x + 6', 'x + 6', '2x + 9'],
        correct: '2x + 6',
        explanation: 'Distribute: 2(x + 3) = 2x + 6.',
        difficulty: 'easy'
      },
      {
        id: 'alg_8',
        question: 'What is x² + x² + x²?',
        options: ['3x²', 'x⁶', '3x', 'x³'],
        correct: '3x²',
        explanation: 'Combine like terms: x² + x² + x² = 3x².',
        difficulty: 'easy'
      },
      {
        id: 'alg_9',
        question: 'Solve for x: x/3 = 4',
        options: ['x = 12', 'x = 1', 'x = 7', 'x = 4/3'],
        correct: 'x = 12',
        explanation: 'Multiply both sides by 3: x = 4 × 3 = 12.',
        difficulty: 'easy'
      },
      {
        id: 'alg_10',
        question: 'What is the coefficient of x in 5x + 3?',
        options: ['5', '3', '8', '15'],
        correct: '5',
        explanation: 'The coefficient is the number multiplying the variable.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'alg_m1',
        question: 'Solve the system: x + y = 5, x - y = 1',
        options: ['x = 3, y = 2', 'x = 2, y = 3', 'x = 4, y = 1', 'x = 1, y = 4'],
        correct: 'x = 3, y = 2',
        explanation: 'Add equations: 2x = 6, so x = 3. Substitute: 3 + y = 5, so y = 2.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m2',
        question: 'Factor: x² + 5x + 6',
        options: ['(x + 2)(x + 3)', '(x + 1)(x + 6)', '(x - 2)(x - 3)', '(x + 5)(x + 1)'],
        correct: '(x + 2)(x + 3)',
        explanation: 'Find two numbers that multiply to 6 and add to 5: 2 and 3.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m3',
        question: 'Solve: x² - 4 = 0',
        options: ['x = ±2', 'x = 4', 'x = 2', 'x = 0'],
        correct: 'x = ±2',
        explanation: 'x² = 4, so x = ±√4 = ±2.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m4',
        question: 'What is the vertex of y = x² - 4x + 3?',
        options: ['(2, -1)', '(-2, 15)', '(4, 3)', '(0, 3)'],
        correct: '(2, -1)',
        explanation: 'Vertex x-coordinate: -b/2a = 4/2 = 2. y(2) = 4 - 8 + 3 = -1.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m5',
        question: 'Simplify: (x + 3)²',
        options: ['x² + 6x + 9', 'x² + 9', 'x² + 3x + 9', 'x² + 6x + 6'],
        correct: 'x² + 6x + 9',
        explanation: '(a + b)² = a² + 2ab + b² = x² + 6x + 9.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m6',
        question: 'Solve: 2x² + 8x = 0',
        options: ['x = 0, -4', 'x = 0, 4', 'x = 2, -4', 'x = -2, 4'],
        correct: 'x = 0, -4',
        explanation: 'Factor: 2x(x + 4) = 0, so x = 0 or x = -4.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m7',
        question: 'What is the discriminant of x² + 3x + 2?',
        options: ['1', '9', '5', '17'],
        correct: '1',
        explanation: 'Discriminant = b² - 4ac = 9 - 4(1)(2) = 9 - 8 = 1.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m8',
        question: 'Solve for y: 3x + 2y = 12',
        options: ['y = (12 - 3x)/2', 'y = 12 - 3x', 'y = (12 + 3x)/2', 'y = 6 - 3x/2'],
        correct: 'y = (12 - 3x)/2',
        explanation: 'Isolate y: 2y = 12 - 3x, so y = (12 - 3x)/2.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m9',
        question: 'What is the inverse of f(x) = 3x - 1?',
        options: ['f⁻¹(x) = (x + 1)/3', 'f⁻¹(x) = 3x + 1', 'f⁻¹(x) = (x - 1)/3', 'f⁻¹(x) = x/3 + 1'],
        correct: 'f⁻¹(x) = (x + 1)/3',
        explanation: 'Let y = 3x - 1, solve for x: x = (y + 1)/3.',
        difficulty: 'medium'
      },
      {
        id: 'alg_m10',
        question: 'Simplify: √(x² + 6x + 9)',
        options: ['|x + 3|', 'x + 3', '√(x + 3)', 'x² + 3'],
        correct: '|x + 3|',
        explanation: 'x² + 6x + 9 = (x + 3)², so √(x² + 6x + 9) = |x + 3|.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'alg_h1',
        question: 'Solve: x⁴ - 5x² + 4 = 0',
        options: ['x = ±1, ±2', 'x = ±2, ±3', 'x = ±1, ±4', 'x = ±2, ±√5'],
        correct: 'x = ±1, ±2',
        explanation: 'Let u = x². Then u² - 5u + 4 = 0, so u = 1, 4. Thus x² = 1, 4, giving x = ±1, ±2.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h2',
        question: 'Find the sum of roots of 2x² - 7x + 3 = 0',
        options: ['7/2', '-7/2', '3/2', '-3/2'],
        correct: '7/2',
        explanation: 'For ax² + bx + c = 0, sum of roots = -b/a = 7/2.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h3',
        question: 'Solve: |2x - 3| = 7',
        options: ['x = 5, -2', 'x = 2, -5', 'x = 5, 2', 'x = -2, -5'],
        correct: 'x = 5, -2',
        explanation: '2x - 3 = 7 or 2x - 3 = -7, so x = 5 or x = -2.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h4',
        question: 'What is the remainder when x³ + 2x² - x + 1 is divided by (x - 1)?',
        options: ['3', '1', '5', '0'],
        correct: '3',
        explanation: 'By remainder theorem, substitute x = 1: 1 + 2 - 1 + 1 = 3.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h5',
        question: 'Solve: log₂(x) + log₂(x - 2) = 3',
        options: ['x = 4', 'x = 6', 'x = 8', 'x = 2'],
        correct: 'x = 4',
        explanation: 'log₂(x(x-2)) = 3, so x(x-2) = 8. Solving x² - 2x - 8 = 0 gives x = 4.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h6',
        question: 'Find the maximum value of f(x) = -x² + 4x - 1',
        options: ['3', '4', '1', '2'],
        correct: '3',
        explanation: 'Vertex at x = -b/2a = 4/2 = 2. f(2) = -4 + 8 - 1 = 3.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h7',
        question: 'Solve the inequality: x² - 3x - 4 > 0',
        options: ['x < -1 or x > 4', 'x < 1 or x > 4', '-1 < x < 4', '1 < x < 4'],
        correct: 'x < -1 or x > 4',
        explanation: 'Factor: (x + 1)(x - 4) > 0. Solution is x < -1 or x > 4.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h8',
        question: 'What is the coefficient of x³ in (x + 2)⁵?',
        options: ['40', '80', '20', '10'],
        correct: '40',
        explanation: 'Using binomial theorem: C(5,3) × 1³ × 2² = 10 × 4 = 40.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h9',
        question: 'Solve: 3^(x+1) = 27^x',
        options: ['x = 1/2', 'x = 2', 'x = 1', 'x = 3'],
        correct: 'x = 1/2',
        explanation: '3^(x+1) = (3³)^x = 3^(3x), so x + 1 = 3x, giving x = 1/2.',
        difficulty: 'hard'
      },
      {
        id: 'alg_h10',
        question: 'Find all real solutions: √(x + 3) = x - 3',
        options: ['x = 6', 'x = 1', 'x = 6, 1', 'No real solutions'],
        correct: 'x = 6',
        explanation: 'Square both sides: x + 3 = (x - 3)². Solving gives x = 1, 6. Check: only x = 6 works.',
        difficulty: 'hard'
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
      },
      {
        id: 'geom_3',
        question: 'What is the perimeter of a square with side length 4?',
        options: ['16', '8', '12', '20'],
        correct: '16',
        explanation: 'Perimeter = 4 × side length = 4 × 4 = 16.',
        difficulty: 'easy'
      },
      {
        id: 'geom_4',
        question: 'What is the area of a rectangle with length 6 and width 4?',
        options: ['24', '20', '10', '36'],
        correct: '24',
        explanation: 'Area = length × width = 6 × 4 = 24.',
        difficulty: 'easy'
      },
      {
        id: 'geom_5',
        question: 'How many sides does a hexagon have?',
        options: ['5', '6', '7', '8'],
        correct: '6',
        explanation: 'A hexagon has 6 sides.',
        difficulty: 'easy'
      },
      {
        id: 'geom_6',
        question: 'What is the circumference of a circle with radius 2?',
        options: ['4π', '2π', '8π', 'π'],
        correct: '4π',
        explanation: 'Circumference = 2πr = 2π(2) = 4π.',
        difficulty: 'easy'
      },
      {
        id: 'geom_7',
        question: 'What type of angle is 90°?',
        options: ['Acute', 'Right', 'Obtuse', 'Straight'],
        correct: 'Right',
        explanation: 'A 90° angle is called a right angle.',
        difficulty: 'easy'
      },
      {
        id: 'geom_8',
        question: 'What is the area of a triangle with base 6 and height 4?',
        options: ['12', '24', '10', '6'],
        correct: '12',
        explanation: 'Area = (1/2) × base × height = (1/2) × 6 × 4 = 12.',
        difficulty: 'easy'
      },
      {
        id: 'geom_9',
        question: 'How many degrees are in a straight line?',
        options: ['90°', '180°', '270°', '360°'],
        correct: '180°',
        explanation: 'A straight line forms an angle of 180°.',
        difficulty: 'easy'
      },
      {
        id: 'geom_10',
        question: 'What is the volume of a cube with side length 3?',
        options: ['9', '27', '18', '12'],
        correct: '27',
        explanation: 'Volume = side³ = 3³ = 27.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'geom_m1',
        question: 'What is the length of the hypotenuse in a right triangle with legs 3 and 4?',
        options: ['5', '7', '6', '25'],
        correct: '5',
        explanation: 'Using Pythagorean theorem: c² = 3² + 4² = 9 + 16 = 25, so c = 5.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m2',
        question: 'What is the area of a parallelogram with base 8 and height 5?',
        options: ['40', '13', '26', '20'],
        correct: '40',
        explanation: 'Area = base × height = 8 × 5 = 40.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m3',
        question: 'What is the surface area of a cube with side length 4?',
        options: ['96', '64', '48', '24'],
        correct: '96',
        explanation: 'Surface area = 6 × side² = 6 × 4² = 6 × 16 = 96.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m4',
        question: 'What is the diagonal of a rectangle with sides 6 and 8?',
        options: ['10', '14', '12', '100'],
        correct: '10',
        explanation: 'Using Pythagorean theorem: d² = 6² + 8² = 36 + 64 = 100, so d = 10.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m5',
        question: 'What is the area of a circle with diameter 10?',
        options: ['25π', '50π', '100π', '10π'],
        correct: '25π',
        explanation: 'Radius = diameter/2 = 5. Area = πr² = π(5)² = 25π.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m6',
        question: 'How many degrees are in each interior angle of a regular pentagon?',
        options: ['108°', '120°', '90°', '72°'],
        correct: '108°',
        explanation: 'Interior angle = (n-2)×180°/n = (5-2)×180°/5 = 108°.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m7',
        question: 'What is the volume of a cylinder with radius 3 and height 4?',
        options: ['36π', '12π', '24π', '9π'],
        correct: '36π',
        explanation: 'Volume = πr²h = π(3)²(4) = 36π.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m8',
        question: 'What is the area of a trapezoid with parallel sides 6 and 10, and height 4?',
        options: ['32', '40', '24', '64'],
        correct: '32',
        explanation: 'Area = (1/2)(b₁ + b₂)h = (1/2)(6 + 10)(4) = 32.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m9',
        question: 'What is the arc length of a circle with radius 5 and central angle 60°?',
        options: ['5π/3', '10π/3', '25π/6', 'π/3'],
        correct: '5π/3',
        explanation: 'Arc length = rθ = 5 × (60° × π/180°) = 5 × π/3 = 5π/3.',
        difficulty: 'medium'
      },
      {
        id: 'geom_m10',
        question: 'What is the area of a sector with radius 6 and central angle 90°?',
        options: ['9π', '18π', '36π', '6π'],
        correct: '9π',
        explanation: 'Area = (1/2)r²θ = (1/2)(6)²(π/2) = 18π/2 = 9π.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'geom_h1',
        question: 'What is the volume of a sphere with radius 6?',
        options: ['288π', '144π', '216π', '432π'],
        correct: '288π',
        explanation: 'Volume = (4/3)πr³ = (4/3)π(6)³ = (4/3)π(216) = 288π.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h2',
        question: 'What is the distance between points (1, 2) and (4, 6)?',
        options: ['5', '25', '7', '√7'],
        correct: '5',
        explanation: 'Distance = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h3',
        question: 'What is the area of an equilateral triangle with side length 6?',
        options: ['9√3', '18√3', '6√3', '36√3'],
        correct: '9√3',
        explanation: 'Area = (√3/4)s² = (√3/4)(6)² = (√3/4)(36) = 9√3.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h4',
        question: 'What is the surface area of a sphere with radius 4?',
        options: ['64π', '32π', '16π', '128π'],
        correct: '64π',
        explanation: 'Surface area = 4πr² = 4π(4)² = 4π(16) = 64π.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h5',
        question: 'What is the length of the median to the hypotenuse in a right triangle with legs 6 and 8?',
        options: ['5', '10', '7', '√82'],
        correct: '5',
        explanation: 'Median to hypotenuse = hypotenuse/2. Hypotenuse = √(6² + 8²) = 10, so median = 5.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h6',
        question: 'What is the area of a regular hexagon with side length 4?',
        options: ['24√3', '48√3', '12√3', '36√3'],
        correct: '24√3',
        explanation: 'Area = (3√3/2)s² = (3√3/2)(4)² = (3√3/2)(16) = 24√3.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h7',
        question: 'What is the volume of a cone with radius 3 and height 8?',
        options: ['24π', '72π', '36π', '8π'],
        correct: '24π',
        explanation: 'Volume = (1/3)πr²h = (1/3)π(3)²(8) = (1/3)π(72) = 24π.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h8',
        question: 'What is the apothem of a regular pentagon with side length 10?',
        options: ['5√(5+2√5)', '10√5', '5√3', '5(1+√5)'],
        correct: '5√(5+2√5)',
        explanation: 'For regular pentagon, apothem = s/(2tan(36°)) = 5√(5+2√5).',
        difficulty: 'hard'
      },
      {
        id: 'geom_h9',
        question: 'What is the equation of a circle with center (2, -3) and radius 5?',
        options: ['(x-2)² + (y+3)² = 25', '(x+2)² + (y-3)² = 25', '(x-2)² + (y-3)² = 5', '(x+2)² + (y+3)² = 5'],
        correct: '(x-2)² + (y+3)² = 25',
        explanation: 'Circle equation: (x-h)² + (y-k)² = r², where (h,k) is center and r is radius.',
        difficulty: 'hard'
      },
      {
        id: 'geom_h10',
        question: 'What is the volume of a frustum of a cone with radii 2 and 4, and height 6?',
        options: ['56π', '28π', '84π', '42π'],
        correct: '56π',
        explanation: 'Volume = (1/3)πh(r₁² + r₁r₂ + r₂²) = (1/3)π(6)(4 + 8 + 16) = 56π.',
        difficulty: 'hard'
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
      },
      {
        id: 'trig_3',
        question: 'What is tan(45°)?',
        options: ['0', '1', '√3', '1/√3'],
        correct: '1',
        explanation: 'The tangent of 45° is 1.',
        difficulty: 'easy'
      },
      {
        id: 'trig_4',
        question: 'What is sin(0°)?',
        options: ['0', '1', '-1', '0.5'],
        correct: '0',
        explanation: 'The sine of 0° is 0.',
        difficulty: 'easy'
      },
      {
        id: 'trig_5',
        question: 'What is cos(90°)?',
        options: ['0', '1', '-1', '0.5'],
        correct: '0',
        explanation: 'The cosine of 90° is 0.',
        difficulty: 'easy'
      },
      {
        id: 'trig_6',
        question: 'What is sin(30°)?',
        options: ['1/2', '√3/2', '√2/2', '1'],
        correct: '1/2',
        explanation: 'The sine of 30° is 1/2.',
        difficulty: 'easy'
      },
      {
        id: 'trig_7',
        question: 'What is cos(60°)?',
        options: ['1/2', '√3/2', '√2/2', '0'],
        correct: '1/2',
        explanation: 'The cosine of 60° is 1/2.',
        difficulty: 'easy'
      },
      {
        id: 'trig_8',
        question: 'What does SOH stand for in SOHCAHTOA?',
        options: ['Sine = Opposite/Hypotenuse', 'Sine = Opposite/Height', 'Sum of Hypotenuse', 'Sin over Hypotenuse'],
        correct: 'Sine = Opposite/Hypotenuse',
        explanation: 'SOH means Sine = Opposite/Hypotenuse.',
        difficulty: 'easy'
      },
      {
        id: 'trig_9',
        question: 'What is tan(0°)?',
        options: ['0', '1', '∞', 'undefined'],
        correct: '0',
        explanation: 'The tangent of 0° is 0.',
        difficulty: 'easy'
      },
      {
        id: 'trig_10',
        question: 'In a right triangle, what is the relationship sin²θ + cos²θ?',
        options: ['0', '1', '2', 'tan²θ'],
        correct: '1',
        explanation: 'The Pythagorean identity: sin²θ + cos²θ = 1.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'trig_m1',
        question: 'What is sin(150°)?',
        options: ['1/2', '-1/2', '√3/2', '-√3/2'],
        correct: '1/2',
        explanation: 'sin(150°) = sin(180° - 30°) = sin(30°) = 1/2.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m2',
        question: 'What is the period of sin(2x)?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: 'π',
        explanation: 'For sin(bx), period = 2π/b = 2π/2 = π.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m3',
        question: 'What is cos(120°)?',
        options: ['-1/2', '1/2', '-√3/2', '√3/2'],
        correct: '-1/2',
        explanation: 'cos(120°) = cos(180° - 60°) = -cos(60°) = -1/2.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m4',
        question: 'If sin(θ) = 3/5 and θ is in quadrant I, what is cos(θ)?',
        options: ['4/5', '-4/5', '3/4', '-3/4'],
        correct: '4/5',
        explanation: 'Using sin²θ + cos²θ = 1: cos²θ = 1 - 9/25 = 16/25, so cos(θ) = 4/5.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m5',
        question: 'What is the amplitude of y = 3sin(x)?',
        options: ['1', '3', 'π', '2π'],
        correct: '3',
        explanation: 'The amplitude is the coefficient of the sine function, which is 3.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m6',
        question: 'What is tan(π/4)?',
        options: ['0', '1', '√3', '1/√3'],
        correct: '1',
        explanation: 'tan(π/4) = tan(45°) = 1.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m7',
        question: 'What is the reference angle for 225°?',
        options: ['45°', '60°', '30°', '90°'],
        correct: '45°',
        explanation: '225° is in quadrant III. Reference angle = 225° - 180° = 45°.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m8',
        question: 'What is sin(π/6)?',
        options: ['1/2', '√3/2', '√2/2', '1'],
        correct: '1/2',
        explanation: 'sin(π/6) = sin(30°) = 1/2.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m9',
        question: 'What is the domain of y = tan(x)?',
        options: ['All real numbers', 'x ≠ nπ', 'x ≠ π/2 + nπ', 'x ≥ 0'],
        correct: 'x ≠ π/2 + nπ',
        explanation: 'Tangent is undefined where cosine equals zero.',
        difficulty: 'medium'
      },
      {
        id: 'trig_m10',
        question: 'What is cos(3π/4)?',
        options: ['-√2/2', '√2/2', '-1/2', '1/2'],
        correct: '-√2/2',
        explanation: 'cos(3π/4) = cos(135°) = -cos(45°) = -√2/2.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'trig_h1',
        question: 'What is sin(2θ) if sin(θ) = 3/5 and cos(θ) = 4/5?',
        options: ['24/25', '7/25', '12/25', '1'],
        correct: '24/25',
        explanation: 'sin(2θ) = 2sin(θ)cos(θ) = 2(3/5)(4/5) = 24/25.',
        difficulty: 'hard'
      },
      {
        id: 'trig_h2',
        question: 'What is the exact value of sin(15°)?',
        options: ['(√6 - √2)/4', '(√6 + √2)/4', '(√3 - 1)/4', '(√3 + 1)/4'],
        correct: '(√6 - √2)/4',
        explanation: 'sin(15°) = sin(45° - 30°) = sin(45°)cos(30°) - cos(45°)sin(30°).',
        difficulty: 'hard'
      },
      {
        id: 'trig_h3',
        question: 'What is the general solution to sin(x) = 1/2?',
        options: ['x = π/6 + 2πn, 5π/6 + 2πn', 'x = π/3 + 2πn, 2π/3 + 2πn', 'x = π/6 + πn', 'x = π/6 + nπ/2'],
        correct: 'x = π/6 + 2πn, 5π/6 + 2πn',
        explanation: 'Sin(x) = 1/2 at x = π/6 and x = 5π/6, plus multiples of 2π.',
        difficulty: 'hard'
      },
      {
        id: 'trig_h4',
        question: 'What is cos(2θ) if tan(θ) = 4/3?',
        options: ['-7/25', '7/25', '-24/25', '24/25'],
        correct: '-7/25',
        explanation: 'If tan(θ) = 4/3, then sin(θ) = 4/5, cos(θ) = 3/5. cos(2θ) = cos²(θ) - sin²(θ) = 9/25 - 16/25 = -7/25.',
        difficulty: 'hard'
      },
      {
        id: 'trig_h5',
        question: 'What is the exact value of tan(75°)?',
        options: ['2 + √3', '2 - √3', '√3 + 1', '√3 - 1'],
        correct: '2 + √3',
        explanation: 'tan(75°) = tan(45° + 30°) = (tan(45°) + tan(30°))/(1 - tan(45°)tan(30°)) = 2 + √3.',
        difficulty: 'hard'
      },
      {
        id: 'trig_h6',
        question: 'What is the sum sin(α) + sin(β) equal to?',
        options: ['2sin((α+β)/2)cos((α-β)/2)', '2cos((α+β)/2)sin((α-β)/2)', 'sin(α+β)', 'cos(α-β)'],
        correct: '2sin((α+β)/2)cos((α-β)/2)',
        explanation: 'This is the sum-to-product formula for sine.',
        difficulty: 'hard'
      },
      {
        id: 'trig_h7',
        question: 'What is the derivative of sin(x²)?',
        options: ['cos(x²)', '2x cos(x²)', '2x sin(x²)', 'x cos(x²)'],
        correct: '2x cos(x²)',
        explanation: 'Using chain rule: d/dx[sin(x²)] = cos(x²) · 2x = 2x cos(x²).',
        difficulty: 'hard'
      },
      {
        id: 'trig_h8',
        question: 'What is ∫sin(x)cos(x) dx?',
        options: ['sin²(x)/2 + C', '-cos²(x)/2 + C', 'sin(2x)/4 + C', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Multiple correct forms due to trigonometric identities.',
        difficulty: 'hard'
      },
      {
        id: 'trig_h9',
        question: 'In triangle ABC, if a = 7, b = 9, and C = 60°, what is c?',
        options: ['√37', '√67', '√97', '√127'],
        correct: '√67',
        explanation: 'Using law of cosines: c² = a² + b² - 2ab cos(C) = 49 + 81 - 126(1/2) = 67.',
        difficulty: 'hard'
      },
      {
        id: 'trig_h10',
        question: 'What is the area of triangle with sides a = 5, b = 6, and included angle C = 120°?',
        options: ['15√3/2', '15√3', '30', '15'],
        correct: '15√3/2',
        explanation: 'Area = (1/2)ab sin(C) = (1/2)(5)(6)sin(120°) = 15(√3/2) = 15√3/2.',
        difficulty: 'hard'
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
      },
      {
        id: 'stat_3',
        question: 'What is the median of 1, 3, 5, 7, 9?',
        options: ['3', '5', '7', '25'],
        correct: '5',
        explanation: 'The median is the middle value when data is ordered: 5.',
        difficulty: 'easy'
      },
      {
        id: 'stat_4',
        question: 'What is the mode of 2, 3, 3, 4, 5?',
        options: ['2', '3', '4', '5'],
        correct: '3',
        explanation: 'The mode is the most frequently occurring value: 3.',
        difficulty: 'easy'
      },
      {
        id: 'stat_5',
        question: 'What is the range of 10, 15, 8, 12, 20?',
        options: ['10', '12', '13', '8'],
        correct: '12',
        explanation: 'Range = maximum - minimum = 20 - 8 = 12.',
        difficulty: 'easy'
      },
      {
        id: 'stat_6',
        question: 'If you roll a die, what is the probability of getting an even number?',
        options: ['1/6', '1/3', '1/2', '2/3'],
        correct: '1/2',
        explanation: 'Even numbers on a die: 2, 4, 6. Probability = 3/6 = 1/2.',
        difficulty: 'easy'
      },
      {
        id: 'stat_7',
        question: 'What is the sum of all probabilities in a probability distribution?',
        options: ['0', '1', '100', 'Varies'],
        correct: '1',
        explanation: 'The sum of all probabilities must equal 1.',
        difficulty: 'easy'
      },
      {
        id: 'stat_8',
        question: 'What is the probability of getting heads twice when flipping a fair coin twice?',
        options: ['1/4', '1/2', '3/4', '1'],
        correct: '1/4',
        explanation: 'P(HH) = P(H) × P(H) = 1/2 × 1/2 = 1/4.',
        difficulty: 'easy'
      },
      {
        id: 'stat_9',
        question: 'What type of data is height?',
        options: ['Discrete', 'Continuous', 'Nominal', 'Binary'],
        correct: 'Continuous',
        explanation: 'Height can take any value within a range, making it continuous.',
        difficulty: 'easy'
      },
      {
        id: 'stat_10',
        question: 'What is the mean of 0, 5, 10?',
        options: ['5', '7.5', '10', '15'],
        correct: '5',
        explanation: 'Mean = (0 + 5 + 10) ÷ 3 = 15 ÷ 3 = 5.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'stat_m1',
        question: 'What is the standard deviation of 2, 4, 6?',
        options: ['√8/3', '2', '4/3', '√(8/3)'],
        correct: '√(8/3)',
        explanation: 'Mean = 4. Variance = [(2-4)² + (4-4)² + (6-4)²]/3 = 8/3. SD = √(8/3).',
        difficulty: 'medium'
      },
      {
        id: 'stat_m2',
        question: 'In a normal distribution, what percentage of data falls within 1 standard deviation?',
        options: ['68%', '95%', '99.7%', '50%'],
        correct: '68%',
        explanation: 'The empirical rule: 68% of data falls within 1 standard deviation.',
        difficulty: 'medium'
      },
      {
        id: 'stat_m3',
        question: 'What is P(A or B) if P(A) = 0.3, P(B) = 0.4, and P(A and B) = 0.1?',
        options: ['0.6', '0.7', '0.8', '0.5'],
        correct: '0.6',
        explanation: 'P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.3 + 0.4 - 0.1 = 0.6.',
        difficulty: 'medium'
      },
      {
        id: 'stat_m4',
        question: 'What is the variance of 1, 2, 3, 4, 5?',
        options: ['2', '2.5', '10', '√2'],
        correct: '2',
        explanation: 'Mean = 3. Variance = [(1-3)² + (2-3)² + (3-3)² + (4-3)² + (5-3)²]/5 = 10/5 = 2.',
        difficulty: 'medium'
      },
      {
        id: 'stat_m5',
        question: 'What is the probability of drawing a red card from a standard deck?',
        options: ['1/4', '1/2', '1/3', '2/3'],
        correct: '1/2',
        explanation: 'There are 26 red cards out of 52 total: 26/52 = 1/2.',
        difficulty: 'medium'
      },
      {
        id: 'stat_m6',
        question: 'What is the 75th percentile also called?',
        options: ['First quartile', 'Second quartile', 'Third quartile', 'Median'],
        correct: 'Third quartile',
        explanation: 'The 75th percentile is the third quartile (Q3).',
        difficulty: 'medium'
      },
      {
        id: 'stat_m7',
        question: 'If events A and B are independent, what is P(A and B)?',
        options: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) - P(B)', 'P(A)/P(B)'],
        correct: 'P(A) × P(B)',
        explanation: 'For independent events, P(A ∩ B) = P(A) × P(B).',
        difficulty: 'medium'
      },
      {
        id: 'stat_m8',
        question: 'What is the coefficient of variation if mean = 20 and standard deviation = 4?',
        options: ['0.2', '0.8', '5', '16'],
        correct: '0.2',
        explanation: 'Coefficient of variation = standard deviation/mean = 4/20 = 0.2.',
        difficulty: 'medium'
      },
      {
        id: 'stat_m9',
        question: 'What is the probability of getting at least one head in three coin flips?',
        options: ['7/8', '1/8', '3/8', '1/2'],
        correct: '7/8',
        explanation: 'P(at least one head) = 1 - P(all tails) = 1 - (1/2)³ = 1 - 1/8 = 7/8.',
        difficulty: 'medium'
      },
      {
        id: 'stat_m10',
        question: 'What is the interquartile range (IQR)?',
        options: ['Q3 - Q1', 'Q4 - Q2', 'Max - Min', 'Q2 - Q1'],
        correct: 'Q3 - Q1',
        explanation: 'IQR = third quartile - first quartile = Q3 - Q1.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'stat_h1',
        question: 'What is the probability of getting exactly 2 heads in 5 coin flips?',
        options: ['10/32', '5/16', '1/4', '3/8'],
        correct: '10/32',
        explanation: 'Using binomial probability: C(5,2) × (1/2)⁵ = 10 × 1/32 = 10/32.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h2',
        question: 'What is the expected value of a die roll?',
        options: ['3.5', '3', '4', '21'],
        correct: '3.5',
        explanation: 'E(X) = (1+2+3+4+5+6)/6 = 21/6 = 3.5.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h3',
        question: 'What is the correlation coefficient between X and Y if they are perfectly negatively correlated?',
        options: ['-1', '0', '1', '∞'],
        correct: '-1',
        explanation: 'Perfect negative correlation has r = -1.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h4',
        question: 'In a normal distribution with μ = 100 and σ = 15, what is P(X > 115)?',
        options: ['0.16', '0.32', '0.68', '0.84'],
        correct: '0.16',
        explanation: '115 is 1 standard deviation above mean. P(X > μ + σ) ≈ 0.16.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h5',
        question: 'What is the degrees of freedom for a chi-square test with a 3×4 contingency table?',
        options: ['6', '11', '12', '7'],
        correct: '6',
        explanation: 'df = (rows - 1)(columns - 1) = (3 - 1)(4 - 1) = 2 × 3 = 6.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h6',
        question: 'What is the probability density function of a standard normal distribution at x = 0?',
        options: ['1/√(2π)', '1/2', '0', '1'],
        correct: '1/√(2π)',
        explanation: 'For standard normal: f(0) = (1/√(2π))e^(-0²/2) = 1/√(2π).',
        difficulty: 'hard'
      },
      {
        id: 'stat_h7',
        question: 'What is the variance of a binomial distribution with n = 10 and p = 0.3?',
        options: ['2.1', '3', '7', '21'],
        correct: '2.1',
        explanation: 'Variance of binomial = np(1-p) = 10 × 0.3 × 0.7 = 2.1.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h8',
        question: 'What is the margin of error for a 95% confidence interval with n = 100 and σ = 10?',
        options: ['1.96', '19.6', '0.196', '1.645'],
        correct: '1.96',
        explanation: 'Margin of error = z_(α/2) × σ/√n = 1.96 × 10/√100 = 1.96.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h9',
        question: 'What is the power of a statistical test?',
        options: ['1 - α', '1 - β', 'α', 'β'],
        correct: '1 - β',
        explanation: 'Power = probability of correctly rejecting false null = 1 - β.',
        difficulty: 'hard'
      },
      {
        id: 'stat_h10',
        question: 'What is the expected value of the sample variance for a population with variance σ²?',
        options: ['σ²', 'σ²/n', 'σ', '(n-1)σ²/n'],
        correct: 'σ²',
        explanation: 'The sample variance is an unbiased estimator: E[s²] = σ².',
        difficulty: 'hard'
      }
    ]
  }
];
