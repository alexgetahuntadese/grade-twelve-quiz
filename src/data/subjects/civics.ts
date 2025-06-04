
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
      {
        id: 'civics_gov_med_2',
        question: 'What is federalism?',
        options: ['One level of government', 'Division of power between national and state governments', 'International cooperation', 'Military organization'],
        correct: 'Division of power between national and state governments',
        explanation: 'Federalism divides governmental power between national and state/regional levels.',
        difficulty: 'medium'
      },
      {
        id: 'civics_gov_med_3',
        question: 'What is the purpose of checks and balances?',
        options: ['Financial management', 'Prevent abuse of power', 'Count votes', 'Balance budgets'],
        correct: 'Prevent abuse of power',
        explanation: 'Checks and balances prevent any one branch of government from becoming too powerful.',
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
      },
      {
        id: 'civics_gov_hard_2',
        question: 'What is constitutional supremacy?',
        options: ['President\'s power', 'Constitution is the highest law', 'Court authority', 'Legislative control'],
        correct: 'Constitution is the highest law',
        explanation: 'Constitutional supremacy means the constitution is the supreme law that overrides all other laws.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_civil_rights',
    name: 'Grade 11: Civil Rights and Liberties',
    description: 'Rights, freedoms, and legal protections in society',
    questions: [
      // Easy Questions
      {
        id: 'g11_rights_easy_1',
        question: 'What are civil rights?',
        options: ['Military rights', 'Legal protections against discrimination', 'Only voting rights', 'Government benefits'],
        correct: 'Legal protections against discrimination',
        explanation: 'Civil rights are legal protections that ensure equal treatment for all citizens.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_2',
        question: 'What is freedom of speech?',
        options: ['Saying anything without consequences', 'Right to express opinions without government censorship', 'Only for certain groups', 'Only in private'],
        correct: 'Right to express opinions without government censorship',
        explanation: 'Freedom of speech protects the right to express opinions without government censorship.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_3',
        question: 'What is discrimination?',
        options: ['Fair treatment', 'Unfair treatment based on characteristics', 'Legal protection', 'Government policy'],
        correct: 'Unfair treatment based on characteristics',
        explanation: 'Discrimination is unfair treatment based on characteristics like race, gender, or religion.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_4',
        question: 'What is the purpose of the Bill of Rights?',
        options: ['List government powers', 'Protect individual liberties', 'Establish taxes', 'Create courts'],
        correct: 'Protect individual liberties',
        explanation: 'The Bill of Rights protects individual liberties from government infringement.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_5',
        question: 'What is due process?',
        options: ['Court delay', 'Fair legal procedures', 'Jury selection', 'Legal fees'],
        correct: 'Fair legal procedures',
        explanation: 'Due process ensures fair legal procedures when the government acts against individuals.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_rights_med_1',
        question: 'What is the difference between civil liberties and civil rights?',
        options: ['No difference', 'Liberties limit government; rights ensure equal treatment', 'Only apply to certain groups', 'Based on age'],
        correct: 'Liberties limit government; rights ensure equal treatment',
        explanation: 'Civil liberties limit government action; civil rights ensure equal treatment under law.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_2',
        question: 'What is judicial review?',
        options: ['Judge evaluation', 'Court power to declare laws unconstitutional', 'Lawyer inspection', 'Jury selection'],
        correct: 'Court power to declare laws unconstitutional',
        explanation: 'Judicial review is the court\'s power to declare laws unconstitutional.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_3',
        question: 'What is the equal protection clause?',
        options: ['Military protection', 'Law enforcement', 'Constitutional guarantee of equal treatment', 'Executive order'],
        correct: 'Constitutional guarantee of equal treatment',
        explanation: 'The equal protection clause guarantees equal application of laws to all people.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_rights_hard_1',
        question: 'How does the "strict scrutiny" standard apply to certain discrimination cases?',
        options: ['Never applies', 'Highest standard of judicial review', 'Only for certain courts', 'Only for administrative cases'],
        correct: 'Highest standard of judicial review',
        explanation: 'Strict scrutiny is the highest standard of review used when fundamental rights or suspect classifications are involved.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_2',
        question: 'What is the concept of "incorporation" regarding the Bill of Rights?',
        options: ['Business formation', 'Making the Bill of Rights apply to states', 'International law', 'Tax classification'],
        correct: 'Making the Bill of Rights apply to states',
        explanation: 'Incorporation is the process of making the Bill of Rights apply to state governments through the 14th Amendment.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_international_relations',
    name: 'Grade 12: International Relations',
    description: 'Global governance, diplomacy, and international cooperation',
    questions: [
      // Easy Questions
      {
        id: 'g12_intrel_easy_1',
        question: 'What is diplomacy?',
        options: ['Military action', 'Managing international relations', 'Economic policy', 'Local government'],
        correct: 'Managing international relations',
        explanation: 'Diplomacy is the art and practice of conducting negotiations between nations.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intrel_easy_2',
        question: 'What is the United Nations?',
        options: ['Military alliance', 'International organization for peace and cooperation', 'Trade agreement', 'National government'],
        correct: 'International organization for peace and cooperation',
        explanation: 'The UN is an international organization promoting peace, security, and cooperation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intrel_easy_3',
        question: 'What is a treaty?',
        options: ['War declaration', 'Formal agreement between countries', 'Economic sanction', 'Military base'],
        correct: 'Formal agreement between countries',
        explanation: 'A treaty is a formal agreement between sovereign states.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intrel_easy_4',
        question: 'What is an embassy?',
        options: ['International court', 'Diplomatic mission in another country', 'Military base', 'Trading post'],
        correct: 'Diplomatic mission in another country',
        explanation: 'An embassy is a diplomatic mission representing a country in another nation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intrel_easy_5',
        question: 'What is foreign policy?',
        options: ['Domestic laws', 'Strategy for dealing with other countries', 'Trade only', 'Military control'],
        correct: 'Strategy for dealing with other countries',
        explanation: 'Foreign policy is a government\'s strategy for dealing with other nations.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_intrel_med_1',
        question: 'What is the difference between multilateralism and bilateralism?',
        options: ['No difference', 'Multilateral involves many countries; bilateral involves two', 'Only applies to trade', 'Based on continent'],
        correct: 'Multilateral involves many countries; bilateral involves two',
        explanation: 'Multilateralism involves many countries; bilateralism involves just two countries.',
        difficulty: 'medium'
      },
      {
        id: 'g12_intrel_med_2',
        question: 'What is sovereignty?',
        options: ['Royal rule', 'Supreme authority within borders', 'International control', 'Religious authority'],
        correct: 'Supreme authority within borders',
        explanation: 'Sovereignty is a state\'s supreme authority within its territory.',
        difficulty: 'medium'
      },
      {
        id: 'g12_intrel_med_3',
        question: 'What is a non-governmental organization (NGO)?',
        options: ['Government department', 'Private organization addressing social issues', 'Military alliance', 'Political party'],
        correct: 'Private organization addressing social issues',
        explanation: 'NGOs are independent organizations addressing social or political issues.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_intrel_hard_1',
        question: 'How does the concept of "soft power" differ from "hard power"?',
        options: ['No difference', 'Soft uses attraction; hard uses coercion', 'Applies to different regions', 'Based on country size'],
        correct: 'Soft uses attraction; hard uses coercion',
        explanation: 'Soft power attracts and persuades; hard power coerces through military or economic means.',
        difficulty: 'hard'
      },
      {
        id: 'g12_intrel_hard_2',
        question: 'What does the "responsibility to protect" (R2P) doctrine address?',
        options: ['Environmental protection', 'Military defense', 'International intervention to prevent atrocities', 'Economic assistance'],
        correct: 'International intervention to prevent atrocities',
        explanation: 'R2P asserts that states have a responsibility to protect populations from genocide and crimes against humanity.',
        difficulty: 'hard'
      }
    ]
  }
];
