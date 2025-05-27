
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

export const historyChapters: Chapter[] = [
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
];
