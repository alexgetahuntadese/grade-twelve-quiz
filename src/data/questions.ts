
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

const subjectChapters: { [subject: string]: Chapter[] } = {
  mathematics: [
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
  ],

  physics: [
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
  ],

  chemistry: [
    {
      id: "atomic",
      name: "Atomic Structure",
      description: "Atoms, Electrons and Periodic Table",
      questions: [
        {
          id: "chem1",
          question: "What is the atomic number of Carbon?",
          options: ["6", "12", "14", "8"],
          correct: "6",
          explanation: "Carbon has 6 protons in its nucleus, making its atomic number 6"
        },
        {
          id: "chem2",
          question: "How many electrons can the second shell hold?",
          options: ["2", "8", "18", "32"],
          correct: "8",
          explanation: "The second electron shell can hold a maximum of 8 electrons (2n² where n=2)"
        }
      ]
    },
    {
      id: "bonding",
      name: "Chemical Bonding",
      description: "Ionic, Covalent and Metallic Bonds",
      questions: [
        {
          id: "chem3",
          question: "What type of bond exists between Na⁺ and Cl⁻ in salt?",
          options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
          correct: "Ionic",
          explanation: "Sodium chloride (NaCl) has ionic bonds due to electron transfer from Na to Cl"
        },
        {
          id: "chem4",
          question: "What is the molecular formula of methane?",
          options: ["CH₄", "C₂H₆", "C₃H₈", "CH₂"],
          correct: "CH₄",
          explanation: "Methane is the simplest hydrocarbon with one carbon atom bonded to four hydrogen atoms"
        }
      ]
    },
    {
      id: "reactions",
      name: "Chemical Reactions",
      description: "Types of Reactions and Stoichiometry",
      questions: [
        {
          id: "chem5",
          question: "Which gas is produced when zinc reacts with hydrochloric acid?",
          options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
          correct: "Hydrogen",
          explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is evolved in this reaction"
        }
      ]
    }
  ],

  biology: [
    {
      id: "cell",
      name: "Cell Biology",
      description: "Cell Structure and Function",
      questions: [
        {
          id: "bio1",
          question: "What is the powerhouse of the cell?",
          options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"],
          correct: "Mitochondria",
          explanation: "Mitochondria produce ATP through cellular respiration, earning the nickname 'powerhouse of the cell'"
        },
        {
          id: "bio2",
          question: "Which organelle controls the cell's activities?",
          options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
          correct: "Nucleus",
          explanation: "The nucleus contains DNA and controls all cellular activities"
        }
      ]
    },
    {
      id: "genetics",
      name: "Genetics",
      description: "Heredity and DNA",
      questions: [
        {
          id: "bio3",
          question: "What is the basic unit of heredity?",
          options: ["Chromosome", "Gene", "DNA", "RNA"],
          correct: "Gene",
          explanation: "A gene is the basic unit of heredity that carries genetic information from parents to offspring"
        },
        {
          id: "bio4",
          question: "How many chromosomes does a normal human have?",
          options: ["23", "46", "48", "44"],
          correct: "46",
          explanation: "Humans have 46 chromosomes arranged in 23 pairs"
        }
      ]
    },
    {
      id: "physiology",
      name: "Human Physiology",
      description: "Body Systems and Functions",
      questions: [
        {
          id: "bio5",
          question: "Which blood cells are responsible for carrying oxygen?",
          options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
          correct: "Red blood cells",
          explanation: "Red blood cells contain hemoglobin which binds to oxygen and transports it throughout the body"
        }
      ]
    },
    {
      id: "ecology",
      name: "Ecology",
      description: "Ecosystems and Environment",
      questions: [
        {
          id: "bio6",
          question: "Which process converts light energy into chemical energy?",
          options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"],
          correct: "Photosynthesis",
          explanation: "Photosynthesis in plants converts light energy into chemical energy stored in glucose"
        }
      ]
    }
  ],

  english: [
    {
      id: "grammar",
      name: "Grammar",
      description: "Parts of Speech and Sentence Structure",
      questions: [
        {
          id: "eng1",
          question: "What is the past tense of 'write'?",
          options: ["wrote", "written", "writed", "writing"],
          correct: "wrote",
          explanation: "'Write' is an irregular verb. Its past tense is 'wrote' and past participle is 'written'"
        },
        {
          id: "eng2",
          question: "What type of sentence is: 'Stop!'?",
          options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
          correct: "Imperative",
          explanation: "An imperative sentence gives a command or makes a request. 'Stop!' is commanding someone to stop"
        }
      ]
    },
    {
      id: "literature",
      name: "Literature",
      description: "Poetry, Drama and Prose",
      questions: [
        {
          id: "eng3",
          question: "Which of the following is a metaphor?",
          options: ["The cat sat on the mat", "Time is money", "She runs like the wind", "The door creaked loudly"],
          correct: "Time is money",
          explanation: "A metaphor directly compares two things without using 'like' or 'as'. 'Time is money' compares time to money"
        },
        {
          id: "eng4",
          question: "What literary device uses exaggeration for effect?",
          options: ["Metaphor", "Simile", "Hyperbole", "Alliteration"],
          correct: "Hyperbole",
          explanation: "Hyperbole is deliberate exaggeration used for dramatic or humorous effect"
        }
      ]
    },
    {
      id: "vocabulary",
      name: "Vocabulary",
      description: "Word Meanings and Usage",
      questions: [
        {
          id: "eng5",
          question: "Which word is a synonym for 'beautiful'?",
          options: ["ugly", "gorgeous", "small", "loud"],
          correct: "gorgeous",
          explanation: "A synonym is a word with the same or similar meaning. 'Gorgeous' means beautiful"
        }
      ]
    }
  ],

  history: [
    {
      id: "ancient",
      name: "Ancient Ethiopia",
      description: "Early Civilizations and Kingdoms",
      questions: [
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
        }
      ]
    },
    {
      id: "medieval",
      name: "Medieval Period",
      description: "Zagwe Dynasty and Rise of Solomonic Dynasty",
      questions: [
        {
          id: "hist3",
          question: "Which dynasty built the rock churches of Lalibela?",
          options: ["Solomonic", "Zagwe", "Aksumite", "Gondarine"],
          correct: "Zagwe",
          explanation: "The Zagwe dynasty, particularly King Lalibela, built the famous rock-hewn churches in the 12th century"
        }
      ]
    },
    {
      id: "modern",
      name: "Modern Ethiopia",
      description: "19th and 20th Century History",
      questions: [
        {
          id: "hist4",
          question: "In which year did Ethiopia defeat Italy at the Battle of Adwa?",
          options: ["1895", "1896", "1897", "1898"],
          correct: "1896",
          explanation: "The Battle of Adwa took place on March 1, 1896, where Ethiopian forces defeated Italian colonial forces"
        },
        {
          id: "hist5",
          question: "Which Ethiopian emperor is known for modernizing the country?",
          options: ["Menelik II", "Haile Selassie", "Yohannes IV", "Tewodros II"],
          correct: "Menelik II",
          explanation: "Emperor Menelik II (1889-1913) is credited with modernizing Ethiopia, expanding its territory, and maintaining independence"
        }
      ]
    }
  ]
};

export const getChaptersBySubject = (subject: string): Chapter[] => {
  return subjectChapters[subject] || [];
};

export const getQuestionsByChapter = (subject: string, chapterId: string): Question[] => {
  const chapters = subjectChapters[subject] || [];
  const chapter = chapters.find(ch => ch.id === chapterId);
  return chapter?.questions || [];
};

export const getAllSubjects = (): string[] => {
  return Object.keys(subjectChapters);
};

export const getTotalQuestionsBySubject = (subject: string): number => {
  const chapters = subjectChapters[subject] || [];
  return chapters.reduce((total, chapter) => total + chapter.questions.length, 0);
};
