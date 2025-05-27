
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
      }
    ]
  },
  {
    id: "calculus",
    name: "Calculus",
    description: "Limits, Derivatives and Integration",
    questions: [
      {
        id: "math3",
        question: "What is the derivative of x³ + 2x² - 5x + 3?",
        options: ["3x² + 4x - 5", "3x² + 4x + 5", "x² + 4x - 5", "3x² - 4x - 5"],
        correct: "3x² + 4x - 5",
        explanation: "Using power rule: d/dx(x³) = 3x², d/dx(2x²) = 4x, d/dx(-5x) = -5, d/dx(3) = 0"
      },
      {
        id: "math4",
        question: "What is the integral of 2x dx?",
        options: ["x² + C", "2x² + C", "x²/2 + C", "2x + C"],
        correct: "x² + C",
        explanation: "∫2x dx = 2∫x dx = 2(x²/2) + C = x² + C"
      }
    ]
  },
  {
    id: "geometry",
    name: "Analytic Geometry",
    description: "Coordinate Geometry and Conic Sections",
    questions: [
      {
        id: "math5",
        question: "What is the area of a circle with radius 5 units?",
        options: ["25π", "10π", "50π", "15π"],
        correct: "25π",
        explanation: "Area of circle = πr² = π(5)² = 25π square units"
      }
    ]
  }
];
