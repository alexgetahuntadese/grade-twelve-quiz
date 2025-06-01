
import { Chapter } from '../types';

export const civicsChapters: Chapter[] = [
  {
    id: 'government_basics',
    name: 'Government and Citizenship',
    description: 'Basic concepts of government, citizenship and civic responsibility',
    questions: [
      // Easy Questions
      {
        id: 'civics_gov_easy_1',
        question: 'What is government?',
        options: ['A business', 'System that rules a country or community', 'A school', 'A family'],
        correct: 'System that rules a country or community',
        explanation: 'Government is the system by which a country or community is ruled.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_2',
        question: 'What is democracy?',
        options: ['Rule by one person', 'Rule by the people', 'Rule by the wealthy', 'Rule by the military'],
        correct: 'Rule by the people',
        explanation: 'Democracy is a system of government where power lies with the people.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_3',
        question: 'What is a constitution?',
        options: ['A law book', 'Supreme law of a country', 'A government building', 'A political party'],
        correct: 'Supreme law of a country',
        explanation: 'A constitution is the supreme law that establishes the framework of government.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_4',
        question: 'What is citizenship?',
        options: ['Living in a city', 'Membership in a political community', 'Having a job', 'Owning property'],
        correct: 'Membership in a political community',
        explanation: 'Citizenship is membership in a political community with rights and responsibilities.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_5',
        question: 'What is voting?',
        options: ['A sport', 'Way to choose leaders', 'A job', 'A hobby'],
        correct: 'Way to choose leaders',
        explanation: 'Voting is the process by which citizens choose their representatives.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'civics_gov_med_1',
        question: 'What are the three branches of government?',
        options: ['Federal, State, Local', 'Executive, Legislative, Judicial', 'Army, Navy, Air Force', 'President, Congress, Court'],
        correct: 'Executive, Legislative, Judicial',
        explanation: 'The three branches are Executive (enforces laws), Legislative (makes laws), and Judicial (interprets laws).',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'civics_gov_hard_1',
        question: 'What is the separation of powers?',
        options: ['Different political parties', 'Division of government into branches', 'Federal vs state power', 'Urban vs rural power'],
        correct: 'Division of government into branches',
        explanation: 'Separation of powers divides government into branches to prevent concentration of power.',
        difficulty: 'hard'
      }
    ]
  }
];
