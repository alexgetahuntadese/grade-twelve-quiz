import { Chapter } from '../types';

export const civicsChapters: Chapter[] = [
  {
    id: 'government_basics',
    name: 'Government and Democracy',
    description: 'Basic concepts of government, democracy, and citizenship',
    questions: [
      // Easy Questions
      {
        id: 'gov_1',
        question: 'What is government?',
        options: ['Group of friends', 'System that rules a community or country', 'Business organization', 'School administration'],
        correct: 'System that rules a community or country',
        explanation: 'Government is the system by which a community or country is ruled and regulated.',
        difficulty: 'easy'
      },
      {
        id: 'gov_2',
        question: 'What is democracy?',
        options: ['Rule by one person', 'Rule by the people', 'Rule by military', 'Rule by wealthy'],
        correct: 'Rule by the people',
        explanation: 'Democracy is a system of government where power is held by the people, either directly or through representatives.',
        difficulty: 'easy'
      },
      {
        id: 'gov_3',
        question: 'What is a constitution?',
        options: ['Government building', 'Set of fundamental laws', 'Political party', 'Election process'],
        correct: 'Set of fundamental laws',
        explanation: 'A constitution is a set of fundamental principles and laws that govern a country.',
        difficulty: 'easy'
      },
      {
        id: 'gov_4',
        question: 'What are the three branches of government?',
        options: ['Federal, state, local', 'Executive, legislative, judicial', 'Democratic, republican, independent', 'National, regional, municipal'],
        correct: 'Executive, legislative, judicial',
        explanation: 'The three branches are executive (enforces laws), legislative (makes laws), and judicial (interprets laws).',
        difficulty: 'easy'
      },
      {
        id: 'gov_5',
        question: 'What is citizenship?',
        options: ['Living in a city', 'Membership in a political community', 'Having a job', 'Owning property'],
        correct: 'Membership in a political community',
        explanation: 'Citizenship is membership in a political community with rights and responsibilities.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'gov_med_1',
        question: 'What is the separation of powers?',
        options: ['Dividing the country', 'Dividing government into branches', 'Separating parties', 'Dividing citizens'],
        correct: 'Dividing government into branches',
        explanation: 'Separation of powers divides government authority among different branches to prevent abuse of power.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_2',
        question: 'What is federalism?',
        options: ['One level of government', 'Division of power between national and state governments', 'International cooperation', 'Local governance only'],
        correct: 'Division of power between national and state governments',
        explanation: 'Federalism is a system where power is divided between national and regional (state) governments.',
        difficulty: 'medium'
      },
      {
        id: 'gov_med_3',
        question: 'What is the rule of law?',
        options: ['Laws for rulers only', 'Everyone, including leaders, subject to law', 'Military law', 'Religious law'],
        correct: 'Everyone, including leaders, subject to law',
        explanation: 'Rule of law means that all people, including government officials, are subject to and accountable under the law.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'gov_hard_1',
        question: 'What is judicial review?',
        options: ['Executive power', 'Courts\' power to review laws for constitutionality', 'Legislative process', 'Election oversight'],
        correct: 'Courts\' power to review laws for constitutionality',
        explanation: 'Judicial review is the power of courts to examine laws and government actions for constitutional compliance.',
        difficulty: 'hard'
      },
      {
        id: 'gov_hard_2',
        question: 'What is the difference between direct and representative democracy?',
        options: ['No difference', 'Direct: citizens vote directly, Representative: elect officials to vote', 'Only size differs', 'Only location differs'],
        correct: 'Direct: citizens vote directly, Representative: elect officials to vote',
        explanation: 'In direct democracy, citizens vote directly on issues; in representative democracy, they elect officials to vote for them.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_rights_responsibilities',
    name: 'Grade 11: Rights and Responsibilities',
    description: 'Constitutional rights, civil liberties, and civic duties',
    questions: [
      // Easy Questions
      {
        id: 'g11_rights_easy_1',
        question: 'What are civil rights?',
        options: ['Military rights', 'Rights to participate in civil society', 'Property rights only', 'Voting rights only'],
        correct: 'Rights to participate in civil society',
        explanation: 'Civil rights are the rights of citizens to participate in civil and political life.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_2',
        question: 'What is freedom of speech?',
        options: ['Unlimited speech', 'Right to express opinions', 'Only written expression', 'Government speech only'],
        correct: 'Right to express opinions',
        explanation: 'Freedom of speech is the right to express opinions and ideas without government restriction.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_3',
        question: 'What is due process?',
        options: ['Quick trials', 'Fair legal procedures', 'Government immunity', 'Automatic conviction'],
        correct: 'Fair legal procedures',
        explanation: 'Due process ensures fair treatment through the normal judicial system.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_4',
        question: 'What is a civic duty?',
        options: ['Optional activity', 'Required responsibility of citizens', 'Government job', 'Political party membership'],
        correct: 'Required responsibility of citizens',
        explanation: 'Civic duties are responsibilities required of citizens, like paying taxes and jury service.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_5',
        question: 'What is equal protection?',
        options: ['Police protection', 'Same treatment under law', 'Military defense', 'Property security'],
        correct: 'Same treatment under law',
        explanation: 'Equal protection means all people receive the same treatment under the law.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_rights_med_1',
        question: 'What is the difference between civil rights and civil liberties?',
        options: ['No difference', 'Rights: participation, Liberties: freedom from government', 'Only legal terminology', 'Only historical context'],
        correct: 'Rights: participation, Liberties: freedom from government',
        explanation: 'Civil rights ensure participation in society; civil liberties protect from government interference.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_2',
        question: 'What are checks and balances?',
        options: ['Bank procedures', 'System preventing abuse of power', 'Accounting methods', 'Election processes'],
        correct: 'System preventing abuse of power',
        explanation: 'Checks and balances prevent any branch of government from becoming too powerful.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_3',
        question: 'What is the purpose of the Bill of Rights?',
        options: ['List government powers', 'Protect individual freedoms', 'Establish taxes', 'Create courts'],
        correct: 'Protect individual freedoms',
        explanation: 'The Bill of Rights protects individual freedoms from government interference.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_rights_hard_1',
        question: 'What is the incorporation doctrine?',
        options: ['Business law', 'Applying Bill of Rights to state governments', 'Federal supremacy', 'International law'],
        correct: 'Applying Bill of Rights to state governments',
        explanation: 'The incorporation doctrine applies Bill of Rights protections to state and local governments.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_2',
        question: 'What is the clear and present danger test?',
        options: ['Emergency procedures', 'Standard for limiting free speech', 'Military protocol', 'Safety regulation'],
        correct: 'Standard for limiting free speech',
        explanation: 'The clear and present danger test determines when speech can be limited by government.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_global_citizenship',
    name: 'Grade 12: Global Citizenship and International Relations',
    description: 'International law, global governance, and global citizenship responsibilities',
    questions: [
      // Easy Questions
      {
        id: 'g12_global_easy_1',
        question: 'What is global citizenship?',
        options: ['World passport', 'Awareness of global interconnectedness and responsibilities', 'International travel', 'Foreign residence'],
        correct: 'Awareness of global interconnectedness and responsibilities',
        explanation: 'Global citizenship involves understanding global interconnectedness and taking responsibility for global issues.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_2',
        question: 'What is the United Nations?',
        options: ['Regional organization', 'International organization for peace and cooperation', 'Military alliance', 'Trade organization'],
        correct: 'International organization for peace and cooperation',
        explanation: 'The UN is an international organization working for global peace, security, and cooperation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_3',
        question: 'What are human rights?',
        options: ['National rights only', 'Universal rights of all people', 'Government privileges', 'Economic benefits'],
        correct: 'Universal rights of all people',
        explanation: 'Human rights are fundamental rights that belong to all people regardless of nationality.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_4',
        question: 'What is diplomacy?',
        options: ['Military action', 'Peaceful negotiation between nations', 'Trade competition', 'Cultural exchange only'],
        correct: 'Peaceful negotiation between nations',
        explanation: 'Diplomacy is the practice of conducting negotiations and maintaining relations between nations.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_5',
        question: 'What is sovereignty?',
        options: ['Royal power', 'Supreme authority within territory', 'International cooperation', 'Economic independence'],
        correct: 'Supreme authority within territory',
        explanation: 'Sovereignty is the supreme authority of a state within its territory.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_global_med_1',
        question: 'What is international law?',
        options: ['National law only', 'Rules governing relations between states', 'Local regulations', 'Corporate law'],
        correct: 'Rules governing relations between states',
        explanation: 'International law consists of rules and principles governing relations between sovereign states.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_2',
        question: 'What is the difference between unilateral and multilateral action?',
        options: ['No difference', 'Unilateral: one nation, Multilateral: multiple nations', 'Only timing differs', 'Only scope differs'],
        correct: 'Unilateral: one nation, Multilateral: multiple nations',
        explanation: 'Unilateral action involves one nation; multilateral involves multiple nations working together.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_3',
        question: 'What is globalization?',
        options: ['Local development', 'Increasing interconnectedness worldwide', 'National isolation', 'Regional cooperation only'],
        correct: 'Increasing interconnectedness worldwide',
        explanation: 'Globalization is the increasing interconnectedness of economies, cultures, and societies worldwide.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_global_hard_1',
        question: 'What is the principle of non-interference?',
        options: ['Active intervention', 'Respecting state sovereignty in domestic affairs', 'Military cooperation', 'Economic sanctions'],
        correct: 'Respecting state sovereignty in domestic affairs',
        explanation: 'Non-interference means respecting other states\' sovereignty and not intervening in their domestic affairs.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_2',
        question: 'What is the responsibility to protect (R2P)?',
        options: ['National defense only', 'International duty to prevent mass atrocities', 'Trade protection', 'Environmental protection'],
        correct: 'International duty to prevent mass atrocities',
        explanation: 'R2P is the international community\'s responsibility to protect populations from genocide and mass atrocities.',
        difficulty: 'hard'
      }
    ]
  }
];
