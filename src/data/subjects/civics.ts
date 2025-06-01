
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
      {
        id: 'civics_gov_easy_6',
        question: 'What are human rights?',
        options: ['Special privileges', 'Basic rights all people have', 'Government benefits', 'Legal documents'],
        correct: 'Basic rights all people have',
        explanation: 'Human rights are fundamental rights that belong to every person.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_7',
        question: 'What is a law?',
        options: ['A suggestion', 'A rule that must be followed', 'A recommendation', 'A guideline'],
        correct: 'A rule that must be followed',
        explanation: 'A law is a rule established by authority that must be obeyed.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_8',
        question: 'What is a political party?',
        options: ['A celebration', 'Group with similar political views', 'Government department', 'Legal organization'],
        correct: 'Group with similar political views',
        explanation: 'A political party is an organized group of people with similar political beliefs.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_9',
        question: 'What is civil service?',
        options: ['Military service', 'Government employment', 'Community volunteering', 'Religious service'],
        correct: 'Government employment',
        explanation: 'Civil service refers to government employment and public administration.',
        difficulty: 'easy'
      },
      {
        id: 'civics_gov_easy_10',
        question: 'What is the rule of law?',
        options: ['Government rules all', 'Law applies equally to everyone', 'Only some follow laws', 'Laws change daily'],
        correct: 'Law applies equally to everyone',
        explanation: 'Rule of law means that laws apply equally to all people, including leaders.',
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
      {
        id: 'civics_gov_med_4',
        question: 'What is civic responsibility?',
        options: ['Government duties only', 'Citizens\' duties to their community', 'Military service', 'Paying taxes only'],
        correct: 'Citizens\' duties to their community',
        explanation: 'Civic responsibility refers to the duties and obligations of citizens to their community.',
        difficulty: 'medium'
      },
      {
        id: 'civics_gov_med_5',
        question: 'What is due process?',
        options: ['Quick legal action', 'Fair legal procedures', 'Government efficiency', 'Court scheduling'],
        correct: 'Fair legal procedures',
        explanation: 'Due process ensures fair legal procedures and protection of individual rights.',
        difficulty: 'medium'
      },
      {
        id: 'civics_gov_med_6',
        question: 'What is the difference between civil rights and civil liberties?',
        options: ['No difference', 'Rights are protections from discrimination, liberties are freedoms from government', 'Rights are for citizens only', 'Liberties are for government'],
        correct: 'Rights are protections from discrimination, liberties are freedoms from government',
        explanation: 'Civil rights protect from discrimination; civil liberties are freedoms from government interference.',
        difficulty: 'medium'
      },
      {
        id: 'civics_gov_med_7',
        question: 'What is representative democracy?',
        options: ['Direct voting on all issues', 'Citizens elect representatives', 'Government chooses leaders', 'No voting system'],
        correct: 'Citizens elect representatives',
        explanation: 'Representative democracy is where citizens elect officials to represent them in government.',
        difficulty: 'medium'
      },
      {
        id: 'civics_gov_med_8',
        question: 'What is the social contract?',
        options: ['Employment agreement', 'Agreement between citizens and government', 'Business contract', 'International treaty'],
        correct: 'Agreement between citizens and government',
        explanation: 'Social contract is the implicit agreement between citizens and government about rights and duties.',
        difficulty: 'medium'
      },
      {
        id: 'civics_gov_med_9',
        question: 'What is judicial review?',
        options: ['Court efficiency review', 'Power to declare laws unconstitutional', 'Judge performance evaluation', 'Legal case review'],
        correct: 'Power to declare laws unconstitutional',
        explanation: 'Judicial review is the court\'s power to review and potentially overturn government actions.',
        difficulty: 'medium'
      },
      {
        id: 'civics_gov_med_10',
        question: 'What is popular sovereignty?',
        options: ['King\'s power', 'Power comes from the people', 'Government control', 'Military authority'],
        correct: 'Power comes from the people',
        explanation: 'Popular sovereignty means that government authority comes from the consent of the people.',
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
      },
      {
        id: 'civics_gov_hard_3',
        question: 'What is the concept of limited government?',
        options: ['Small government', 'Government power is restricted by law', 'Weak government', 'Local government only'],
        correct: 'Government power is restricted by law',
        explanation: 'Limited government means governmental power is restricted by law and constitution.',
        difficulty: 'hard'
      },
      {
        id: 'civics_gov_hard_4',
        question: 'What is pluralism in democracy?',
        options: ['Multiple political parties', 'Competition among interest groups', 'Many elections', 'Various laws'],
        correct: 'Competition among interest groups',
        explanation: 'Pluralism is the idea that democracy benefits from competition among diverse interest groups.',
        difficulty: 'hard'
      },
      {
        id: 'civics_gov_hard_5',
        question: 'What is the difference between substantive and procedural due process?',
        options: ['No difference', 'Substantive protects rights content, procedural protects fair process', 'Both are the same', 'Only procedural matters'],
        correct: 'Substantive protects rights content, procedural protects fair process',
        explanation: 'Substantive due process protects fundamental rights; procedural ensures fair legal processes.',
        difficulty: 'hard'
      },
      {
        id: 'civics_gov_hard_6',
        question: 'What is administrative law?',
        options: ['Criminal law', 'Rules governing government agencies', 'Civil law', 'Constitutional law'],
        correct: 'Rules governing government agencies',
        explanation: 'Administrative law governs the activities and decision-making of government agencies.',
        difficulty: 'hard'
      },
      {
        id: 'civics_gov_hard_7',
        question: 'What is the concept of political legitimacy?',
        options: ['Legal authority', 'Rightful authority to govern', 'Military power', 'Economic control'],
        correct: 'Rightful authority to govern',
        explanation: 'Political legitimacy refers to the rightful authority of government to exercise power.',
        difficulty: 'hard'
      },
      {
        id: 'civics_gov_hard_8',
        question: 'What is the iron triangle in government?',
        options: ['Three laws', 'Relationship between agencies, legislators, and interest groups', 'Government building', 'Three branches'],
        correct: 'Relationship between agencies, legislators, and interest groups',
        explanation: 'The iron triangle describes the close relationship between government agencies, legislative committees, and interest groups.',
        difficulty: 'hard'
      },
      {
        id: 'civics_gov_hard_9',
        question: 'What is the concept of civil disobedience?',
        options: ['Following all laws', 'Deliberately breaking unjust laws nonviolently', 'Violent protest', 'Ignoring government'],
        correct: 'Deliberately breaking unjust laws nonviolently',
        explanation: 'Civil disobedience is the deliberate, nonviolent breaking of unjust laws to promote change.',
        difficulty: 'hard'
      },
      {
        id: 'civics_gov_hard_10',
        question: 'What is the concept of federalism in constitutional design?',
        options: ['Central control only', 'Shared sovereignty between levels of government', 'Local control only', 'International governance'],
        correct: 'Shared sovereignty between levels of government',
        explanation: 'Federalism involves shared sovereignty and division of powers between national and subnational governments.',
        difficulty: 'hard'
      }
    ]
  }
];
