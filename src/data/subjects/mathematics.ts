import { Chapter } from '../types';

export const mathematicsChapters: Chapter[] = [
  {
    id: 'functions',
    name: 'Functions',
    description: 'Domain, range, composition and inverse functions',
    questions: [
      // Easy questions
      {
        id: 'math_func_easy_1',
        question: 'What is the domain of f(x) = 1/x?',
        options: ['All real numbers', 'All real numbers except 0', 'Only positive numbers', 'Only negative numbers'],
        correct: 'All real numbers except 0',
        explanation: 'Division by zero is undefined, so x cannot equal 0.',
        difficulty: 'easy'
      },
      {
        id: 'math_func_easy_2',
        question: 'If f(x) = 2x + 3, what is f(0)?',
        options: ['0', '2', '3', '5'],
        correct: '3',
        explanation: 'f(0) = 2(0) + 3 = 0 + 3 = 3',
        difficulty: 'easy'
      },
      {
        id: 'math_func_easy_3',
        question: 'What is the range of f(x) = x²?',
        options: ['All real numbers', 'All positive numbers', 'All non-negative numbers', 'All negative numbers'],
        correct: 'All non-negative numbers',
        explanation: 'x² is always greater than or equal to 0 for any real number x.',
        difficulty: 'easy'
      },
      {
        id: 'math_func_easy_4',
        question: 'If f(x) = x - 5, what is f(10)?',
        options: ['5', '10', '15', '-5'],
        correct: '5',
        explanation: 'f(10) = 10 - 5 = 5',
        difficulty: 'easy'
      },
      {
        id: 'math_func_easy_5',
        question: 'Which of the following represents a function?',
        options: ['x = y²', 'y = x²', 'x² + y² = 1', 'y² = x² + 1'],
        correct: 'y = x²',
        explanation: 'A function must pass the vertical line test. y = x² passes this test.',
        difficulty: 'easy'
      },
      {
        id: 'math_func_easy_6',
        question: 'What is the domain of f(x) = √x?',
        options: ['All real numbers', 'x ≥ 0', 'x > 0', 'x ≤ 0'],
        correct: 'x ≥ 0',
        explanation: 'Square root is only defined for non-negative real numbers.',
        difficulty: 'easy'
      },
      {
        id: 'math_func_easy_7',
        question: 'If f(x) = 3x, what is f(4)?',
        options: ['7', '12', '4', '3'],
        correct: '12',
        explanation: 'f(4) = 3(4) = 12',
        difficulty: 'easy'
      },
      
      // Medium questions
      {
        id: 'math_func_med_1',
        question: 'If f(x) = x² - 4x + 3 and g(x) = 2x + 1, what is (f ∘ g)(x)?',
        options: ['4x² - 4x', '4x² + 4x', '4x² - 4x + 2', '4x² + 4x + 2'],
        correct: '4x² - 4x',
        explanation: '(f ∘ g)(x) = f(g(x)) = f(2x + 1) = (2x + 1)² - 4(2x + 1) + 3 = 4x² + 4x + 1 - 8x - 4 + 3 = 4x² - 4x',
        difficulty: 'medium'
      },
      {
        id: 'math_func_med_2',
        question: 'What is the inverse of f(x) = 3x - 7?',
        options: ['(x + 7)/3', '(x - 7)/3', '3x + 7', '(7 - x)/3'],
        correct: '(x + 7)/3',
        explanation: 'To find the inverse: y = 3x - 7, solve for x: x = (y + 7)/3, so f⁻¹(x) = (x + 7)/3',
        difficulty: 'medium'
      },
      {
        id: 'math_func_med_3',
        question: 'Find the domain of f(x) = 1/(x² - 9)',
        options: ['All real numbers except ±3', 'All real numbers except 3', 'All real numbers except -3', 'All real numbers'],
        correct: 'All real numbers except ±3',
        explanation: 'x² - 9 = 0 when x = ±3, and division by zero is undefined.',
        difficulty: 'medium'
      },
      {
        id: 'math_func_med_4',
        question: 'If f(x) = |x - 2|, what is the range of f?',
        options: ['All real numbers', 'y ≥ 0', 'y ≥ 2', 'y ≥ -2'],
        correct: 'y ≥ 0',
        explanation: 'Absolute value functions always produce non-negative outputs.',
        difficulty: 'medium'
      },
      {
        id: 'math_func_med_5',
        question: 'What is the domain of f(x) = ln(x - 3)?',
        options: ['x > 3', 'x ≥ 3', 'x < 3', 'All real numbers'],
        correct: 'x > 3',
        explanation: 'Natural logarithm is only defined for positive arguments, so x - 3 > 0, which means x > 3.',
        difficulty: 'medium'
      },
      {
        id: 'math_func_med_6',
        question: 'If f(x) = x² + 1 and g(x) = √x, what is the domain of (f ∘ g)(x)?',
        options: ['x ≥ 0', 'x > 0', 'All real numbers', 'x ≥ 1'],
        correct: 'x ≥ 0',
        explanation: 'For (f ∘ g)(x) = f(√x) to be defined, we need x ≥ 0 for the square root.',
        difficulty: 'medium'
      },
      
      // Hard questions
      {
        id: 'math_func_hard_1',
        question: 'Find the inverse of f(x) = (2x + 1)/(x - 3), x ≠ 3',
        options: ['(3x + 1)/(x - 2)', '(3x - 1)/(x - 2)', '(x + 3)/(2x - 1)', '(2x - 1)/(x + 3)'],
        correct: '(3x + 1)/(x - 2)',
        explanation: 'Setting y = (2x + 1)/(x - 3) and solving for x: y(x - 3) = 2x + 1, yx - 3y = 2x + 1, x(y - 2) = 3y + 1, x = (3y + 1)/(y - 2)',
        difficulty: 'hard'
      },
      {
        id: 'math_func_hard_2',
        question: 'If f(x) = x³ - 3x² + 2x and g(x) = x - 1, find (f/g)(x) and its domain',
        options: ['x² - 2x, x ≠ 1', 'x² + 2x, x ≠ 1', 'x² - 2, x ≠ 1', 'x² + 2, x ≠ 1'],
        correct: 'x² - 2x, x ≠ 1',
        explanation: 'f(x) = x(x² - 3x + 2) = x(x - 1)(x - 2), so (f/g)(x) = x(x - 1)(x - 2)/(x - 1) = x(x - 2) = x² - 2x, x ≠ 1',
        difficulty: 'hard'
      },
      {
        id: 'math_func_hard_3',
        question: 'For what values of k does f(x) = kx² + (k-1)x + 1 have exactly one real root?',
        options: ['k = 1/5 or k = 1', 'k = 1/5 only', 'k = 1 only', 'k = 0 or k = 1'],
        correct: 'k = 1/5 or k = 1',
        explanation: 'For exactly one real root, discriminant = 0: (k-1)² - 4k(1) = 0, k² - 2k + 1 - 4k = 0, k² - 6k + 1 = 0. Using quadratic formula: k = (6 ± √32)/2 = 3 ± 2√2. Also consider k = 0 (linear case).',
        difficulty: 'hard'
      },
      {
        id: 'math_func_hard_4',
        question: 'Find the range of f(x) = (x² + 1)/(x² + 2)',
        options: ['(1/2, 1]', '[1/2, 1)', '(0, 1]', '[1/2, 1]'],
        correct: '[1/2, 1)',
        explanation: 'Let y = (x² + 1)/(x² + 2). Solving for x²: y(x² + 2) = x² + 1, yx² + 2y = x² + 1, x²(y - 1) = 1 - 2y. For real x², we need (1 - 2y)/(y - 1) ≥ 0. Analysis shows 1/2 ≤ y < 1.',
        difficulty: 'hard'
      },
      {
        id: 'math_func_hard_5',
        question: 'If f(f(x)) = 4x + 3 and f(x) = ax + b, find the values of a and b',
        options: ['a = 2, b = 1', 'a = -2, b = -1', 'a = 2, b = 1 or a = -2, b = -1', 'a = 1, b = 3'],
        correct: 'a = 2, b = 1 or a = -2, b = -1',
        explanation: 'f(f(x)) = f(ax + b) = a(ax + b) + b = a²x + ab + b = a²x + b(a + 1). Comparing with 4x + 3: a² = 4 and b(a + 1) = 3. So a = ±2. If a = 2, b = 1. If a = -2, b = -1.',
        difficulty: 'hard'
      },
      {
        id: 'math_func_hard_6',
        question: 'Determine the number of solutions to the equation |x - 2| = |x + 1| - 3',
        options: ['0', '1', '2', 'Infinitely many'],
        correct: '1',
        explanation: 'Analyze by cases: Case 1: x ≥ 2: x - 2 = x + 1 - 3 → -2 = -2 (true for all x ≥ 2). Case 2: -1 ≤ x < 2: -(x - 2) = x + 1 - 3 → -x + 2 = x - 2 → x = 2 (boundary). Case 3: x < -1: -(x - 2) = -(x + 1) - 3 → -x + 2 = -x - 4 → 2 = -4 (impossible). So solution is x ≥ 2, but checking boundary gives exactly one solution.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: "calculus",
    name: "Calculus",
    description: "Limits, Derivatives and Integration",
    questions: [
      {
        id: "calc1",
        question: "What is the derivative of x³ + 2x² - 5x + 3?",
        options: ["3x² + 4x - 5", "3x² + 4x + 5", "x² + 4x - 5", "3x² - 4x - 5"],
        correct: "3x² + 4x - 5",
        explanation: "Using power rule: d/dx(x³) = 3x², d/dx(2x²) = 4x, d/dx(-5x) = -5, d/dx(3) = 0"
      },
      {
        id: "calc2",
        question: "What is the integral of 2x dx?",
        options: ["x² + C", "2x² + C", "x²/2 + C", "2x + C"],
        correct: "x² + C",
        explanation: "∫2x dx = 2∫x dx = 2(x²/2) + C = x² + C"
      },
      {
        id: "calc3",
        question: "What is the derivative of sin(x)?",
        options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
        correct: "cos(x)",
        explanation: "The derivative of sin(x) is cos(x)"
      },
      {
        id: "calc4",
        question: "What is lim(x→0) (sin(x)/x)?",
        options: ["1", "0", "∞", "Does not exist"],
        correct: "1",
        explanation: "This is a standard limit: lim(x→0) (sin(x)/x) = 1"
      },
      {
        id: "calc5",
        question: "What is the derivative of e^x?",
        options: ["e^x", "xe^(x-1)", "e^x ln(e)", "1/e^x"],
        correct: "e^x",
        explanation: "The derivative of e^x is e^x"
      },
      {
        id: "calc6",
        question: "What is ∫cos(x) dx?",
        options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
        correct: "sin(x) + C",
        explanation: "The integral of cos(x) is sin(x) + C"
      },
      {
        id: "calc7",
        question: "What is the derivative of ln(x)?",
        options: ["1/x", "1/ln(x)", "x", "ln(x)"],
        correct: "1/x",
        explanation: "The derivative of ln(x) is 1/x"
      },
      {
        id: "calc8",
        question: "Using the chain rule, what is the derivative of (2x + 1)³?",
        options: ["6(2x + 1)²", "3(2x + 1)²", "6(2x + 1)", "3(2x + 1)"],
        correct: "6(2x + 1)²",
        explanation: "Using chain rule: d/dx[(2x + 1)³] = 3(2x + 1)² · 2 = 6(2x + 1)²"
      },
      {
        id: "calc9",
        question: "What is the second derivative of x⁴?",
        options: ["12x²", "4x³", "12x", "24x"],
        correct: "12x²",
        explanation: "First derivative: 4x³, second derivative: 12x²"
      },
      {
        id: "calc10",
        question: "What is ∫x² dx?",
        options: ["x³/3 + C", "2x + C", "x³ + C", "3x² + C"],
        correct: "x³/3 + C",
        explanation: "Using power rule for integration: ∫x² dx = x³/3 + C"
      },
      {
        id: "calc11",
        question: "What is the derivative of x·e^x using product rule?",
        options: ["e^x + xe^x", "e^x", "xe^x", "x·e^x"],
        correct: "e^x + xe^x",
        explanation: "Product rule: (uv)' = u'v + uv', so (x·e^x)' = 1·e^x + x·e^x = e^x + xe^x"
      },
      {
        id: "calc12",
        question: "What is lim(x→∞) (1/x)?",
        options: ["0", "1", "∞", "Does not exist"],
        correct: "0",
        explanation: "As x approaches infinity, 1/x approaches 0"
      },
      {
        id: "calc13",
        question: "What is the derivative of tan(x)?",
        options: ["sec²(x)", "cot(x)", "sec(x)", "csc²(x)"],
        correct: "sec²(x)",
        explanation: "The derivative of tan(x) is sec²(x)"
      },
      {
        id: "calc14",
        question: "What is ∫(1/x) dx?",
        options: ["ln|x| + C", "x + C", "1/x² + C", "-1/x + C"],
        correct: "ln|x| + C",
        explanation: "The integral of 1/x is ln|x| + C"
      },
      {
        id: "calc15",
        question: "What is the critical point of f(x) = x² - 4x + 3?",
        options: ["x = 2", "x = -2", "x = 1", "x = 3"],
        correct: "x = 2",
        explanation: "f'(x) = 2x - 4 = 0, so x = 2"
      },
      {
        id: "calc16",
        question: "What is the area under y = x from x = 0 to x = 2?",
        options: ["2", "4", "1", "8"],
        correct: "2",
        explanation: "∫₀² x dx = [x²/2]₀² = 4/2 - 0 = 2"
      },
      {
        id: "calc17",
        question: "What is the derivative of cos(x)?",
        options: ["-sin(x)", "sin(x)", "cos(x)", "-cos(x)"],
        correct: "-sin(x)",
        explanation: "The derivative of cos(x) is -sin(x)"
      },
      {
        id: "calc18",
        question: "Using quotient rule, what is the derivative of x/sin(x)?",
        options: ["(sin(x) - x·cos(x))/sin²(x)", "(sin(x) + x·cos(x))/sin²(x)", "cos(x)/sin²(x)", "1/cos(x)"],
        correct: "(sin(x) - x·cos(x))/sin²(x)",
        explanation: "Quotient rule: (u/v)' = (u'v - uv')/v², so (x/sin(x))' = (1·sin(x) - x·cos(x))/sin²(x)"
      },
      {
        id: "calc19",
        question: "What is lim(x→1) (x² - 1)/(x - 1)?",
        options: ["2", "1", "0", "Does not exist"],
        correct: "2",
        explanation: "Factor: (x² - 1)/(x - 1) = (x + 1)(x - 1)/(x - 1) = x + 1, so lim = 1 + 1 = 2"
      },
      {
        id: "calc20",
        question: "What is the maximum value of f(x) = -x² + 4x on [0, 5]?",
        options: ["4", "5", "0", "9"],
        correct: "4",
        explanation: "f'(x) = -2x + 4 = 0 at x = 2. f(2) = -4 + 8 = 4, f(0) = 0, f(5) = -25 + 20 = -5. Maximum is 4."
      }
    ]
  },
  {
    id: "geometry",
    name: "Analytic Geometry",
    description: "Coordinate Geometry and Conic Sections",
    questions: [
      {
        id: "geom1",
        question: "What is the area of a circle with radius 5 units?",
        options: ["25π", "10π", "50π", "15π"],
        correct: "25π",
        explanation: "Area of circle = πr² = π(5)² = 25π square units"
      },
      {
        id: "geom2",
        question: "What is the distance between points (1, 2) and (4, 6)?",
        options: ["5", "3", "7", "4"],
        correct: "5",
        explanation: "Distance = √[(4-1)² + (6-2)²] = √[9 + 16] = √25 = 5"
      },
      {
        id: "geom3",
        question: "What is the slope of the line passing through (2, 3) and (5, 9)?",
        options: ["2", "3", "1", "6"],
        correct: "2",
        explanation: "Slope = (9-3)/(5-2) = 6/3 = 2"
      },
      {
        id: "geom4",
        question: "What is the equation of a circle with center (3, 4) and radius 2?",
        options: ["(x-3)² + (y-4)² = 4", "(x+3)² + (y+4)² = 4", "(x-3)² + (y-4)² = 2", "(x+3)² + (y+4)² = 2"],
        correct: "(x-3)² + (y-4)² = 4",
        explanation: "Circle equation: (x-h)² + (y-k)² = r², so (x-3)² + (y-4)² = 2² = 4"
      },
      {
        id: "geom5",
        question: "What is the midpoint of the line segment from (1, 3) to (7, 11)?",
        options: ["(4, 7)", "(3, 4)", "(6, 8)", "(5, 9)"],
        correct: "(4, 7)",
        explanation: "Midpoint = ((1+7)/2, (3+11)/2) = (4, 7)"
      },
      {
        id: "geom6",
        question: "What is the y-intercept of the line 2x + 3y = 12?",
        options: ["4", "6", "2", "3"],
        correct: "4",
        explanation: "When x = 0: 3y = 12, so y = 4"
      },
      {
        id: "geom7",
        question: "What is the focus of the parabola y² = 4x?",
        options: ["(1, 0)", "(0, 1)", "(2, 0)", "(0, 2)"],
        correct: "(1, 0)",
        explanation: "For y² = 4px, focus is at (p, 0). Here 4p = 4, so p = 1, focus at (1, 0)"
      },
      {
        id: "geom8",
        question: "What is the length of the major axis of the ellipse x²/16 + y²/9 = 1?",
        options: ["8", "6", "4", "3"],
        correct: "8",
        explanation: "a² = 16, so a = 4. Major axis length = 2a = 8"
      },
      {
        id: "geom9",
        question: "What is the equation of the line perpendicular to y = 2x + 1 passing through (0, 0)?",
        options: ["y = -½x", "y = ½x", "y = -2x", "y = 2x"],
        correct: "y = -½x",
        explanation: "Perpendicular slope = -1/2. Through origin: y = -½x"
      },
      {
        id: "geom10",
        question: "What is the center of the circle x² + y² - 4x + 6y - 3 = 0?",
        options: ["(2, -3)", "(-2, 3)", "(4, -6)", "(-4, 6)"],
        correct: "(2, -3)",
        explanation: "Complete the square: (x-2)² + (y+3)² = 16, center at (2, -3)"
      },
      {
        id: "geom11",
        question: "What is the area of triangle with vertices at (0,0), (3,0), and (0,4)?",
        options: ["6", "12", "24", "3"],
        correct: "6",
        explanation: "Area = ½ × base × height = ½ × 3 × 4 = 6"
      },
      {
        id: "geom12",
        question: "What is the directrix of the parabola x² = 8y?",
        options: ["y = -2", "y = 2", "x = -2", "x = 2"],
        correct: "y = -2",
        explanation: "For x² = 4py, directrix is y = -p. Here 4p = 8, so p = 2, directrix y = -2"
      },
      {
        id: "geom13",
        question: "What is the eccentricity of the ellipse x²/25 + y²/16 = 1?",
        options: ["3/5", "4/5", "3/4", "4/3"],
        correct: "3/5",
        explanation: "a² = 25, b² = 16, c² = a² - b² = 9, c = 3. e = c/a = 3/5"
      },
      {
        id: "geom14",
        question: "What is the angle between the lines y = x and y = √3x?",
        options: ["30°", "45°", "60°", "90°"],
        correct: "30°",
        explanation: "tan(θ) = |(m₂ - m₁)/(1 + m₁m₂)| = |√3 - 1|/|1 + √3| = (√3 - 1)/(1 + √3) = tan(30°)"
      },
      {
        id: "geom15",
        question: "What is the equation of the hyperbola with vertices at (±3, 0) and foci at (±5, 0)?",
        options: ["x²/9 - y²/16 = 1", "x²/16 - y²/9 = 1", "x²/25 - y²/9 = 1", "x²/9 - y²/25 = 1"],
        correct: "x²/9 - y²/16 = 1",
        explanation: "a = 3, c = 5, b² = c² - a² = 25 - 9 = 16. Equation: x²/9 - y²/16 = 1"
      },
      {
        id: "geom16",
        question: "What is the circumference of a circle with diameter 10?",
        options: ["10π", "5π", "20π", "25π"],
        correct: "10π",
        explanation: "Circumference = πd = π(10) = 10π"
      },
      {
        id: "geom17",
        question: "What is the slope of the line 3x + 4y = 12?",
        options: ["-3/4", "3/4", "-4/3", "4/3"],
        correct: "-3/4",
        explanation: "Rearrange to y = mx + b: 4y = -3x + 12, y = -3x/4 + 3, slope = -3/4"
      },
      {
        id: "geom18",
        question: "What is the length of the diagonal of a rectangle with sides 3 and 4?",
        options: ["5", "7", "12", "25"],
        correct: "5",
        explanation: "Diagonal = √(3² + 4²) = √(9 + 16) = √25 = 5"
      },
      {
        id: "geom19",
        question: "What is the area of a sector with central angle 60° in a circle of radius 6?",
        options: ["6π", "3π", "12π", "18π"],
        correct: "6π",
        explanation: "Area = (θ/360°) × πr² = (60°/360°) × π(6)² = (1/6) × 36π = 6π"
      },
      {
        id: "geom20",
        question: "What is the equation of the line passing through (1, 2) with slope 3?",
        options: ["y = 3x - 1", "y = 3x + 1", "y = 3x - 2", "y = 3x + 2"],
        correct: "y = 3x - 1",
        explanation: "Using point-slope form: y - 2 = 3(x - 1), y = 3x - 3 + 2, y = 3x - 1"
      }
    ]
  }
];
