
interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

const questions: { [subject: string]: Question[] } = {
  mathematics: [
    {
      id: "math1",
      question: "If f(x) = 2x² + 3x - 1, what is f(2)?",
      options: ["13", "11", "9", "15"],
      correct: "13",
      explanation: "f(2) = 2(2)² + 3(2) - 1 = 2(4) + 6 - 1 = 8 + 6 - 1 = 13"
    },
    {
      id: "math2",
      question: "What is the derivative of x³ + 2x² - 5x + 3?",
      options: ["3x² + 4x - 5", "3x² + 4x + 5", "x² + 4x - 5", "3x² - 4x - 5"],
      correct: "3x² + 4x - 5",
      explanation: "Using power rule: d/dx(x³) = 3x², d/dx(2x²) = 4x, d/dx(-5x) = -5, d/dx(3) = 0"
    },
    {
      id: "math3",
      question: "Solve for x: 2x + 5 = 13",
      options: ["4", "3", "5", "6"],
      correct: "4",
      explanation: "2x + 5 = 13 → 2x = 13 - 5 → 2x = 8 → x = 4"
    },
    {
      id: "math4",
      question: "What is the area of a circle with radius 5 units?",
      options: ["25π", "10π", "50π", "15π"],
      correct: "25π",
      explanation: "Area of circle = πr² = π(5)² = 25π square units"
    },
    {
      id: "math5",
      question: "If log₂(8) = x, what is the value of x?",
      options: ["2", "3", "4", "8"],
      correct: "3",
      explanation: "log₂(8) = x means 2ˣ = 8. Since 2³ = 8, x = 3"
    }
  ],

  physics: [
    {
      id: "phys1",
      question: "What is the unit of electric current?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      correct: "Ampere",
      explanation: "Electric current is measured in Amperes (A), named after André-Marie Ampère"
    },
    {
      id: "phys2",
      question: "According to Newton's second law, F = ma. If mass doubles and acceleration remains constant, what happens to force?",
      options: ["Doubles", "Halves", "Remains same", "Quadruples"],
      correct: "Doubles",
      explanation: "If F = ma and m doubles while a is constant, then F must double to maintain the equation"
    },
    {
      id: "phys3",
      question: "What is the speed of light in vacuum?",
      options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
      correct: "3 × 10⁸ m/s",
      explanation: "The speed of light in vacuum is approximately 299,792,458 m/s ≈ 3 × 10⁸ m/s"
    },
    {
      id: "phys4",
      question: "In which direction does magnetic force act on a moving charge?",
      options: ["Parallel to velocity", "Parallel to magnetic field", "Perpendicular to both velocity and magnetic field", "Random direction"],
      correct: "Perpendicular to both velocity and magnetic field",
      explanation: "The magnetic force follows the right-hand rule and is perpendicular to both the velocity and magnetic field vectors"
    }
  ],

  chemistry: [
    {
      id: "chem1",
      question: "What is the atomic number of Carbon?",
      options: ["6", "12", "14", "8"],
      correct: "6",
      explanation: "Carbon has 6 protons in its nucleus, making its atomic number 6"
    },
    {
      id: "chem2",
      question: "Which gas is produced when zinc reacts with hydrochloric acid?",
      options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
      correct: "Hydrogen",
      explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is evolved in this reaction"
    },
    {
      id: "chem3",
      question: "What is the molecular formula of methane?",
      options: ["CH₄", "C₂H₆", "C₃H₈", "CH₂"],
      correct: "CH₄",
      explanation: "Methane is the simplest hydrocarbon with one carbon atom bonded to four hydrogen atoms"
    },
    {
      id: "chem4",
      question: "What type of bond exists between Na⁺ and Cl⁻ in salt?",
      options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
      correct: "Ionic",
      explanation: "Sodium chloride (NaCl) has ionic bonds due to electron transfer from Na to Cl"
    }
  ],

  biology: [
    {
      id: "bio1",
      question: "What is the powerhouse of the cell?",
      options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"],
      correct: "Mitochondria",
      explanation: "Mitochondria produce ATP through cellular respiration, earning the nickname 'powerhouse of the cell'"
    },
    {
      id: "bio2",
      question: "Which process converts light energy into chemical energy?",
      options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"],
      correct: "Photosynthesis",
      explanation: "Photosynthesis in plants converts light energy into chemical energy stored in glucose"
    },
    {
      id: "bio3",
      question: "What is the basic unit of heredity?",
      options: ["Chromosome", "Gene", "DNA", "RNA"],
      correct: "Gene",
      explanation: "A gene is the basic unit of heredity that carries genetic information from parents to offspring"
    },
    {
      id: "bio4",
      question: "Which blood cells are responsible for carrying oxygen?",
      options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
      correct: "Red blood cells",
      explanation: "Red blood cells contain hemoglobin which binds to oxygen and transports it throughout the body"
    }
  ],

  english: [
    {
      id: "eng1",
      question: "What is the past tense of 'write'?",
      options: ["wrote", "written", "writed", "writing"],
      correct: "wrote",
      explanation: "'Write' is an irregular verb. Its past tense is 'wrote' and past participle is 'written'"
    },
    {
      id: "eng2",
      question: "Which of the following is a metaphor?",
      options: ["The cat sat on the mat", "Time is money", "She runs like the wind", "The door creaked loudly"],
      correct: "Time is money",
      explanation: "A metaphor directly compares two things without using 'like' or 'as'. 'Time is money' compares time to money"
    },
    {
      id: "eng3",
      question: "What type of sentence is: 'Stop!'?",
      options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
      correct: "Imperative",
      explanation: "An imperative sentence gives a command or makes a request. 'Stop!' is commanding someone to stop"
    },
    {
      id: "eng4",
      question: "Which word is a synonym for 'beautiful'?",
      options: ["ugly", "gorgeous", "small", "loud"],
      correct: "gorgeous",
      explanation: "A synonym is a word with the same or similar meaning. 'Gorgeous' means beautiful"
    }
  ],

  history: [
    {
      id: "hist1",
      question: "Which ancient Ethiopian kingdom was known for its rock-hewn churches?",
      options: ["Aksum", "Lalibela", "Gondar", "Harar"],
      correct: "Lalibela",
      explanation: "Lalibela is famous for its 11 medieval rock-hewn churches, carved in the 12th and 13th centuries"
    },
    {
      id: "hist2",
      question: "Who was the founder of the Aksumite Kingdom?",
      options: ["King Ezana", "Queen Sheba", "Menelik I", "Emperor Haile Selassie"],
      correct: "Menelik I",
      explanation: "According to Ethiopian tradition, Menelik I was the legendary founder of the Ethiopian empire and the Aksumite dynasty"
    },
    {
      id: "hist3",
      question: "In which year did Ethiopia defeat Italy at the Battle of Adwa?",
      options: ["1895", "1896", "1897", "1898"],
      correct: "1896",
      explanation: "The Battle of Adwa took place on March 1, 1896, where Ethiopian forces defeated Italian colonial forces"
    },
    {
      id: "hist4",
      question: "Which Ethiopian emperor is known for modernizing the country?",
      options: ["Menelik II", "Haile Selassie", "Yohannes IV", "Tewodros II"],
      correct: "Menelik II",
      explanation: "Emperor Menelik II (1889-1913) is credited with modernizing Ethiopia, expanding its territory, and maintaining independence"
    }
  ]
};

export const getQuestionsBySubject = (subject: string): Question[] => {
  return questions[subject] || [];
};

export const getAllSubjects = (): string[] => {
  return Object.keys(questions);
};
