
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

export const englishChapters: Chapter[] = [
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
];
