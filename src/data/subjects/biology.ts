
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

export const biologyChapters: Chapter[] = [
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
];
