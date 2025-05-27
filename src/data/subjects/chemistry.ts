
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

export const chemistryChapters: Chapter[] = [
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
];
