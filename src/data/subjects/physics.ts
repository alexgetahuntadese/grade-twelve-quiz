
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

export const physicsChapters: Chapter[] = [
  {
    id: "mechanics",
    name: "Mechanics",
    description: "Motion, Forces and Energy",
    questions: [
      {
        id: "phys1",
        question: "According to Newton's second law, F = ma. If mass doubles and acceleration remains constant, what happens to force?",
        options: ["Doubles", "Halves", "Remains same", "Quadruples"],
        correct: "Doubles",
        explanation: "If F = ma and m doubles while a is constant, then F must double to maintain the equation"
      },
      {
        id: "phys2",
        question: "What is the SI unit of momentum?",
        options: ["kg⋅m/s", "N⋅s", "Both A and B", "kg⋅m/s²"],
        correct: "Both A and B",
        explanation: "Momentum = mass × velocity = kg⋅m/s. Also, impulse = change in momentum = N⋅s"
      }
    ]
  },
  {
    id: "electricity",
    name: "Electricity & Magnetism",
    description: "Electric Fields, Circuits and Magnetic Fields",
    questions: [
      {
        id: "phys3",
        question: "What is the unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: "Ampere",
        explanation: "Electric current is measured in Amperes (A), named after André-Marie Ampère"
      },
      {
        id: "phys4",
        question: "In which direction does magnetic force act on a moving charge?",
        options: ["Parallel to velocity", "Parallel to magnetic field", "Perpendicular to both velocity and magnetic field", "Random direction"],
        correct: "Perpendicular to both velocity and magnetic field",
        explanation: "The magnetic force follows the right-hand rule and is perpendicular to both the velocity and magnetic field vectors"
      }
    ]
  },
  {
    id: "modern",
    name: "Modern Physics",
    description: "Quantum Physics and Relativity",
    questions: [
      {
        id: "phys5",
        question: "What is the speed of light in vacuum?",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
        correct: "3 × 10⁸ m/s",
        explanation: "The speed of light in vacuum is approximately 299,792,458 m/s ≈ 3 × 10⁸ m/s"
      }
    ]
  }
];
