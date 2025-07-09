
import { Chapter } from '../../types';

export const grade12MathematicsChapters: Chapter[] = [
  {
    id: 'grade12_functions',
    name: 'Grade 12 - Advanced Functions',
    description: 'Polynomial, rational, exponential and logarithmic functions',
    questions: [
      {
        id: 'func-1',
        question: 'What is the domain of f(x) = 1/(x-2)?',
        options: ['All real numbers', 'x ≠ 2', 'x > 2', 'x < 2'],
        correct: 'x ≠ 2',
        explanation: 'The function is undefined when the denominator equals zero, so x cannot equal 2.',
        difficulty: 'easy'
      },
      {
        id: 'func-2',
        question: 'If f(x) = 2x + 3, what is f⁻¹(x)?',
        options: ['(x-3)/2', '(x+3)/2', '2x-3', '2x+3'],
        correct: '(x-3)/2',
        explanation: 'To find the inverse, swap x and y, then solve for y: x = 2y + 3, so y = (x-3)/2.',
        difficulty: 'medium'
      },
      {
        id: 'func-3',
        question: 'What is log₂(8)?',
        options: ['2', '3', '4', '8'],
        correct: '3',
        explanation: 'log₂(8) = 3 because 2³ = 8.',
        difficulty: 'easy'
      },
      {
        id: 'func-4',
        question: 'Simplify: log(100) + log(10)',
        options: ['3', '110', '1000', '11'],
        correct: '3',
        explanation: 'log(100) + log(10) = 2 + 1 = 3 (assuming base 10).',
        difficulty: 'medium'
      },
      {
        id: 'func-5',
        question: 'What is the horizontal asymptote of f(x) = (2x+1)/(x-3)?',
        options: ['y = 0', 'y = 1', 'y = 2', 'y = 3'],
        correct: 'y = 2',
        explanation: 'For rational functions, the horizontal asymptote is the ratio of leading coefficients: 2/1 = 2.',
        difficulty: 'hard'
      },
      {
        id: 'func-6',
        question: 'If f(x) = x² and g(x) = x + 2, what is (f∘g)(x)?',
        options: ['x² + 2', '(x+2)²', 'x² + 4', 'x + 2²'],
        correct: '(x+2)²',
        explanation: '(f∘g)(x) = f(g(x)) = f(x+2) = (x+2)².',
        difficulty: 'medium'
      },
      {
        id: 'func-7',
        question: 'What is the period of f(x) = sin(2x)?',
        options: ['π/2', 'π', '2π', '4π'],
        correct: 'π',
        explanation: 'The period of sin(bx) is 2π/|b|, so for sin(2x) it is 2π/2 = π.',
        difficulty: 'medium'
      },
      {
        id: 'func-8',
        question: 'Solve: 2^x = 16',
        options: ['x = 2', 'x = 3', 'x = 4', 'x = 8'],
        correct: 'x = 4',
        explanation: '2^x = 16 = 2⁴, so x = 4.',
        difficulty: 'easy'
      },
      {
        id: 'func-9',
        question: 'What is the amplitude of f(x) = 3sin(x) + 2?',
        options: ['1', '2', '3', '5'],
        correct: '3',
        explanation: 'The amplitude is the coefficient of the sine function, which is 3.',
        difficulty: 'medium'
      },
      {
        id: 'func-10',
        question: 'Find the vertex of f(x) = x² - 4x + 3',
        options: ['(2, -1)', '(2, 1)', '(-2, -1)', '(4, 3)'],
        correct: '(2, -1)',
        explanation: 'The vertex is at x = -b/2a = 4/2 = 2, and f(2) = 4 - 8 + 3 = -1.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_calculus',
    name: 'Grade 12 - Introduction to Calculus',
    description: 'Limits, derivatives, and basic integration',
    questions: [
      {
        id: 'calc-1',
        question: 'What is the derivative of f(x) = x²?',
        options: ['x', '2x', 'x²', '2x²'],
        correct: '2x',
        explanation: 'Using the power rule: d/dx(x²) = 2x^(2-1) = 2x.',
        difficulty: 'easy'
      },
      {
        id: 'calc-2',
        question: 'What is the derivative of f(x) = 3x³ + 2x?',
        options: ['9x² + 2', '9x³ + 2x', '6x² + 2', '3x² + 2'],
        correct: '9x² + 2',
        explanation: 'd/dx(3x³ + 2x) = 3(3x²) + 2(1) = 9x² + 2.',
        difficulty: 'medium'
      },
      {
        id: 'calc-3',
        question: 'What is lim(x→0) (sin x)/x?',
        options: ['0', '1', '∞', 'undefined'],
        correct: '1',
        explanation: 'This is a famous limit in calculus: lim(x→0) (sin x)/x = 1.',
        difficulty: 'hard'
      },
      {
        id: 'calc-4',
        question: 'What is ∫ 2x dx?',
        options: ['2x', 'x²', 'x² + C', '2x + C'],
        correct: 'x² + C',
        explanation: 'The antiderivative of 2x is x² + C, where C is the constant of integration.',
        difficulty: 'medium'
      },
      {
        id: 'calc-5',
        question: 'What is the derivative of f(x) = e^x?',
        options: ['e^x', 'xe^(x-1)', 'e', 'x'],
        correct: 'e^x',
        explanation: 'The derivative of e^x is e^x itself.',
        difficulty: 'medium'
      },
      {
        id: 'calc-6',
        question: 'Find the critical points of f(x) = x³ - 3x²',
        options: ['x = 0, 2', 'x = 0, 3', 'x = 1, 2', 'x = -1, 3'],
        correct: 'x = 0, 2',
        explanation: 'f\'(x) = 3x² - 6x = 3x(x-2) = 0, so x = 0 or x = 2.',
        difficulty: 'hard'
      },
      {
        id: 'calc-7',
        question: 'What is lim(x→∞) 1/x?',
        options: ['1', '0', '∞', 'undefined'],
        correct: '0',
        explanation: 'As x approaches infinity, 1/x approaches 0.',
        difficulty: 'easy'
      },
      {
        id: 'calc-8',
        question: 'What is the derivative of f(x) = ln(x)?',
        options: ['1/x', 'ln(x)', 'x', 'e^x'],
        correct: '1/x',
        explanation: 'The derivative of the natural logarithm ln(x) is 1/x.',
        difficulty: 'medium'
      },
      {
        id: 'calc-9',
        question: 'What is ∫ x² dx?',
        options: ['x³/3 + C', 'x³ + C', '2x + C', 'x + C'],
        correct: 'x³/3 + C',
        explanation: 'Using the power rule for integration: ∫ x² dx = x³/3 + C.',
        difficulty: 'medium'
      },
      {
        id: 'calc-10',
        question: 'Find the slope of the tangent line to y = x² at x = 3',
        options: ['3', '6', '9', '12'],
        correct: '6',
        explanation: 'The slope is the derivative at x = 3: f\'(x) = 2x, so f\'(3) = 6.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_statistics',
    name: 'Grade 12 - Statistics and Probability',
    description: 'Advanced statistical analysis and probability distributions',
    questions: [
      {
        id: 'stat-1',
        question: 'What is the mean of the data set: 2, 4, 6, 8, 10?',
        options: ['5', '6', '7', '8'],
        correct: '6',
        explanation: 'Mean = (2+4+6+8+10)/5 = 30/5 = 6.',
        difficulty: 'easy'
      },
      {
        id: 'stat-2',
        question: 'What is the median of: 1, 3, 5, 7, 9, 11?',
        options: ['5', '6', '7', '8'],
        correct: '6',
        explanation: 'For even number of values, median = (5+7)/2 = 6.',
        difficulty: 'easy'
      },
      {
        id: 'stat-3',
        question: 'What is the probability of getting heads on a fair coin?',
        options: ['0.25', '0.5', '0.75', '1'],
        correct: '0.5',
        explanation: 'A fair coin has equal probability for heads and tails: 1/2 = 0.5.',
        difficulty: 'easy'
      },
      {
        id: 'stat-4',
        question: 'What is the standard deviation formula?',
        options: ['√(Σ(x-μ)²/n)', 'Σ(x-μ)²/n', '√(Σ(x-μ)²/(n-1))', 'Σ(x-μ)/n'],
        correct: '√(Σ(x-μ)²/n)',
        explanation: 'Standard deviation is the square root of the variance.',
        difficulty: 'medium'
      },
      {
        id: 'stat-5',
        question: 'In a normal distribution, what percentage of data falls within 1 standard deviation?',
        options: ['68%', '95%', '99.7%', '50%'],
        correct: '68%',
        explanation: 'The empirical rule states that 68% of data falls within 1 standard deviation.',
        difficulty: 'medium'
      },
      {
        id: 'stat-6',
        question: 'What is P(A or B) if A and B are mutually exclusive?',
        options: ['P(A) + P(B)', 'P(A) × P(B)', 'P(A) - P(B)', '0'],
        correct: 'P(A) + P(B)',
        explanation: 'For mutually exclusive events, P(A or B) = P(A) + P(B).',
        difficulty: 'medium'
      },
      {
        id: 'stat-7',
        question: 'What is the mode of: 2, 3, 3, 4, 5, 5, 5, 6?',
        options: ['3', '4', '5', '6'],
        correct: '5',
        explanation: 'The mode is the most frequently occurring value, which is 5 (appears 3 times).',
        difficulty: 'easy'
      },
      {
        id: 'stat-8',
        question: 'What is the range of: 10, 15, 20, 25, 30?',
        options: ['15', '20', '25', '30'],
        correct: '20',
        explanation: 'Range = maximum - minimum = 30 - 10 = 20.',
        difficulty: 'easy'
      },
      {
        id: 'stat-9',
        question: 'If P(A) = 0.3 and P(B) = 0.4, what is P(A and B) if A and B are independent?',
        options: ['0.7', '0.12', '0.1', '0.0'],
        correct: '0.12',
        explanation: 'For independent events, P(A and B) = P(A) × P(B) = 0.3 × 0.4 = 0.12.',
        difficulty: 'hard'
      },
      {
        id: 'stat-10',
        question: 'What is the first quartile (Q1) of: 1, 2, 3, 4, 5, 6, 7, 8?',
        options: ['2', '2.5', '3', '3.5'],
        correct: '2.5',
        explanation: 'Q1 is the median of the lower half: median of {1,2,3,4} = (2+3)/2 = 2.5.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_trigonometry',
    name: 'Grade 12 - Advanced Trigonometry',
    description: 'Trigonometric identities, equations, and applications',
    questions: [
      {
        id: 'trig-1',
        question: 'What is sin(90°)?',
        options: ['0', '1', '-1', '√2/2'],
        correct: '1',
        explanation: 'sin(90°) = 1.',
        difficulty: 'easy'
      },
      {
        id: 'trig-2',
        question: 'What is cos(0°)?',
        options: ['0', '1', '-1', '√2/2'],
        correct: '1',
        explanation: 'cos(0°) = 1.',
        difficulty: 'easy'
      },
      {
        id: 'trig-3',
        question: 'What is tan(45°)?',
        options: ['0', '1', '√2', '√3'],
        correct: '1',
        explanation: 'tan(45°) = sin(45°)/cos(45°) = (√2/2)/(√2/2) = 1.',
        difficulty: 'easy'
      },
      {
        id: 'trig-4',
        question: 'What is the identity sin²θ + cos²θ equal to?',
        options: ['0', '1', '2', 'sin(2θ)'],
        correct: '1',
        explanation: 'This is the Pythagorean identity: sin²θ + cos²θ = 1.',
        difficulty: 'medium'
      },
      {
        id: 'trig-5',
        question: 'What is sin(2θ) in terms of sin θ and cos θ?',
        options: ['2sin θ', '2cos θ', '2sin θ cos θ', 'sin²θ - cos²θ'],
        correct: '2sin θ cos θ',
        explanation: 'The double angle formula: sin(2θ) = 2sin θ cos θ.',
        difficulty: 'medium'
      },
      {
        id: 'trig-6',
        question: 'What is cos(2θ) in terms of cos θ?',
        options: ['2cos θ', 'cos²θ - sin²θ', '2cos²θ - 1', 'Both B and C'],
        correct: 'Both B and C',
        explanation: 'cos(2θ) = cos²θ - sin²θ = 2cos²θ - 1 (using sin²θ = 1 - cos²θ).',
        difficulty: 'hard'
      },
      {
        id: 'trig-7',
        question: 'What is the period of y = sin x?',
        options: ['π', '2π', 'π/2', '4π'],
        correct: '2π',
        explanation: 'The sine function has a period of 2π.',
        difficulty: 'easy'
      },
      {
        id: 'trig-8',
        question: 'What is sec θ equal to?',
        options: ['sin θ', 'cos θ', '1/sin θ', '1/cos θ'],
        correct: '1/cos θ',
        explanation: 'Secant is the reciprocal of cosine: sec θ = 1/cos θ.',
        difficulty: 'medium'
      },
      {
        id: 'trig-9',
        question: 'Solve: sin θ = 1/2 for 0° ≤ θ ≤ 360°',
        options: ['30°, 150°', '30°, 60°', '60°, 120°', '45°, 135°'],
        correct: '30°, 150°',
        explanation: 'sin θ = 1/2 when θ = 30° or θ = 180° - 30° = 150°.',
        difficulty: 'hard'
      },
      {
        id: 'trig-10',
        question: 'What is the amplitude of y = 4sin(3x)?',
        options: ['3', '4', '7', '12'],
        correct: '4',
        explanation: 'The amplitude is the coefficient of the sine function, which is 4.',
        difficulty: 'medium'
      }
    ]
  }
];
