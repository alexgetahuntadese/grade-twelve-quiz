
interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const mathematicsChapters: Chapter[] = [
  {
    id: "functions",
    name: "Functions",
    description: "Polynomial, Rational and Exponential Functions",
    questions: [
      {
        id: "math1",
        question: "If f(x) = 2x² + 3x - 1, what is f(2)?",
        options: ["13", "11", "9", "15"],
        correct: "13",
        explanation: "f(2) = 2(2)² + 3(2) - 1 = 2(4) + 6 - 1 = 8 + 6 - 1 = 13"
      },
      {
        id: "math2",
        question: "What is the domain of f(x) = 1/(x-3)?",
        options: ["All real numbers", "x ≠ 3", "x > 3", "x < 3"],
        correct: "x ≠ 3",
        explanation: "The function is undefined when the denominator equals zero, so x ≠ 3"
      },
      {
        id: "math3",
        question: "If f(x) = x² - 4x + 3, what are the zeros of f(x)?",
        options: ["x = 1, 3", "x = -1, -3", "x = 2, 2", "x = 0, 4"],
        correct: "x = 1, 3",
        explanation: "Setting f(x) = 0: x² - 4x + 3 = 0, factoring: (x-1)(x-3) = 0, so x = 1 or x = 3"
      },
      {
        id: "math4",
        question: "What is the vertex of the parabola y = x² - 6x + 8?",
        options: ["(3, -1)", "(3, 1)", "(-3, -1)", "(-3, 1)"],
        correct: "(3, -1)",
        explanation: "Using x = -b/2a = 6/2 = 3, then y = 9 - 18 + 8 = -1"
      },
      {
        id: "math5",
        question: "If f(x) = 2^x, what is f(3)?",
        options: ["6", "8", "9", "12"],
        correct: "8",
        explanation: "f(3) = 2³ = 8"
      },
      {
        id: "math6",
        question: "What is the range of f(x) = x² + 1?",
        options: ["All real numbers", "y ≥ 1", "y ≤ 1", "y > 0"],
        correct: "y ≥ 1",
        explanation: "Since x² ≥ 0 for all real x, x² + 1 ≥ 1"
      },
      {
        id: "math7",
        question: "If f(x) = |x - 2|, what is f(-1)?",
        options: ["3", "-3", "1", "-1"],
        correct: "3",
        explanation: "f(-1) = |-1 - 2| = |-3| = 3"
      },
      {
        id: "math8",
        question: "What is the inverse of f(x) = 2x + 3?",
        options: ["f⁻¹(x) = (x-3)/2", "f⁻¹(x) = (x+3)/2", "f⁻¹(x) = 2x-3", "f⁻¹(x) = x/2+3"],
        correct: "f⁻¹(x) = (x-3)/2",
        explanation: "Let y = 2x + 3, solve for x: x = (y-3)/2, so f⁻¹(x) = (x-3)/2"
      },
      {
        id: "math9",
        question: "If f(x) = x³, what is f(-2)?",
        options: ["-8", "8", "-6", "6"],
        correct: "-8",
        explanation: "f(-2) = (-2)³ = -8"
      },
      {
        id: "math10",
        question: "What is the y-intercept of f(x) = 3x² - 2x + 5?",
        options: ["5", "-2", "3", "0"],
        correct: "5",
        explanation: "The y-intercept occurs when x = 0: f(0) = 3(0)² - 2(0) + 5 = 5"
      },
      {
        id: "math11",
        question: "If f(x) = √(x - 1), what is the domain?",
        options: ["x ≥ 1", "x > 1", "x ≤ 1", "All real numbers"],
        correct: "x ≥ 1",
        explanation: "For the square root to be defined, x - 1 ≥ 0, so x ≥ 1"
      },
      {
        id: "math12",
        question: "What is the maximum value of f(x) = -x² + 4x - 3?",
        options: ["1", "-1", "4", "-3"],
        correct: "1",
        explanation: "Complete the square: f(x) = -(x-2)² + 1, maximum value is 1"
      },
      {
        id: "math13",
        question: "If f(x) = log₂(x), what is f(8)?",
        options: ["3", "2", "4", "1"],
        correct: "3",
        explanation: "f(8) = log₂(8) = log₂(2³) = 3"
      },
      {
        id: "math14",
        question: "What is the horizontal asymptote of f(x) = (2x + 1)/(x - 3)?",
        options: ["y = 2", "y = 1", "y = 0", "No horizontal asymptote"],
        correct: "y = 2",
        explanation: "For rational functions, the horizontal asymptote is the ratio of leading coefficients: 2/1 = 2"
      },
      {
        id: "math15",
        question: "If f(x) = e^x, what is f(0)?",
        options: ["1", "0", "e", "∞"],
        correct: "1",
        explanation: "f(0) = e⁰ = 1"
      },
      {
        id: "math16",
        question: "What is the period of f(x) = sin(2x)?",
        options: ["π", "2π", "π/2", "4π"],
        correct: "π",
        explanation: "Period of sin(kx) is 2π/k, so period of sin(2x) is 2π/2 = π"
      },
      {
        id: "math17",
        question: "If f(x) = 3x - 2 and g(x) = x + 1, what is (f ∘ g)(x)?",
        options: ["3x + 1", "3x - 1", "3x + 2", "x + 2"],
        correct: "3x + 1",
        explanation: "(f ∘ g)(x) = f(g(x)) = f(x + 1) = 3(x + 1) - 2 = 3x + 3 - 2 = 3x + 1"
      },
      {
        id: "math18",
        question: "What is the amplitude of f(x) = 4sin(x)?",
        options: ["4", "1", "2", "π"],
        correct: "4",
        explanation: "The amplitude of a sine function f(x) = A sin(x) is |A| = |4| = 4"
      },
      {
        id: "math19",
        question: "If f(x) = x² + 2x - 3, what is f(-1)?",
        options: ["-4", "-2", "0", "2"],
        correct: "-4",
        explanation: "f(-1) = (-1)² + 2(-1) - 3 = 1 - 2 - 3 = -4"
      },
      {
        id: "math20",
        question: "What is the vertical asymptote of f(x) = 1/(x + 2)?",
        options: ["x = -2", "x = 2", "y = -2", "y = 2"],
        correct: "x = -2",
        explanation: "Vertical asymptote occurs where denominator = 0: x + 2 = 0, so x = -2"
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
