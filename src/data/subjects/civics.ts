
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
    id: 'grade11_rights_freedoms',
    name: 'Grade 11: Rights and Freedoms',
    description: 'Civil rights, human rights, and constitutional protections',
    questions: [
      // Easy Questions
      {
        id: 'g11_rights_easy_1',
        question: 'What are human rights?',
        options: ['Rights only for citizens', 'Basic rights all humans have', 'Government privileges', 'Legal procedures'],
        correct: 'Basic rights all humans have',
        explanation: 'Human rights are fundamental rights and freedoms that belong to every person simply because they are human.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_2',
        question: 'What is freedom of speech?',
        options: ['Right to speak loudly', 'Right to express opinions', 'Right to interrupt others', 'Right to speak any language'],
        correct: 'Right to express opinions',
        explanation: 'Freedom of speech is the right to express opinions and ideas without government censorship.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_3',
        question: 'What is due process?',
        options: ['Fast legal procedure', 'Fair legal procedure', 'Government immunity', 'Police power'],
        correct: 'Fair legal procedure',
        explanation: 'Due process ensures fair treatment through the normal judicial system.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_4',
        question: 'What is equality before the law?',
        options: ['Only rich people get justice', 'All people treated equally by law', 'Lawyers are equal', 'Laws are the same everywhere'],
        correct: 'All people treated equally by law',
        explanation: 'Equality before the law means all people should be treated equally by the legal system regardless of status.',
        difficulty: 'easy'
      },
      {
        id: 'g11_rights_easy_5',
        question: 'What is religious freedom?',
        options: ['Right to build churches', 'Right to practice any religion or none', 'Right to convert others', 'Right to religious education only'],
        correct: 'Right to practice any religion or none',
        explanation: 'Religious freedom includes the right to practice any religion or no religion at all.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_rights_med_1',
        question: 'What is the difference between civil rights and civil liberties?',
        options: ['No difference', 'Civil rights: equal treatment, Civil liberties: freedoms from government', 'Only terminology differs', 'Only legal source differs'],
        correct: 'Civil rights: equal treatment, Civil liberties: freedoms from government',
        explanation: 'Civil rights ensure equal treatment; civil liberties protect freedoms from government interference.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_2',
        question: 'What are positive and negative rights?',
        options: ['Good and bad rights', 'Positive: government must provide, Negative: government must not interfere', 'Constitutional vs legal', 'Federal vs state'],
        correct: 'Positive: government must provide, Negative: government must not interfere',
        explanation: 'Positive rights require government action; negative rights require government restraint.',
        difficulty: 'medium'
      },
      {
        id: 'g11_rights_med_3',
        question: 'What is the purpose of a bill of rights?',
        options: ['List government powers', 'Protect individual freedoms', 'Establish procedures', 'Create institutions'],
        correct: 'Protect individual freedoms',
        explanation: 'A bill of rights formally protects individual freedoms and limits government power.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_rights_hard_1',
        question: 'What is the tension between security and liberty?',
        options: ['No relationship', 'Balance between protecting safety and preserving freedoms', 'Only affects government', 'Only in wartime'],
        correct: 'Balance between protecting safety and preserving freedoms',
        explanation: 'Democratic societies must balance protecting public safety with preserving individual freedoms.',
        difficulty: 'hard'
      },
      {
        id: 'g11_rights_hard_2',
        question: 'What is the doctrine of incorporation?',
        options: ['Business law', 'Applying Bill of Rights to state governments', 'International law', 'Constitutional amendment process'],
        correct: 'Applying Bill of Rights to state governments',
        explanation: 'The doctrine of incorporation applies Bill of Rights protections to state and local governments.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_political_participation',
    name: 'Grade 12: Political Participation and Global Citizenship',
    description: 'Elections, political parties, and international relations',
    questions: [
      // Easy Questions
      {
        id: 'g12_politics_easy_1',
        question: 'What is voting?',
        options: ['Expressing opinions', 'Formal process of choosing leaders', 'Attending meetings', 'Joining parties'],
        correct: 'Formal process of choosing leaders',
        explanation: 'Voting is the formal process by which citizens choose their representatives and leaders.',
        difficulty: 'easy'
      },
      {
        id: 'g12_politics_easy_2',
        question: 'What is a political party?',
        options: ['Social gathering', 'Group organized to win elections and govern', 'Government department', 'Voter registration group'],
        correct: 'Group organized to win elections and govern',
        explanation: 'A political party is an organized group that seeks to win elections and control government.',
        difficulty: 'easy'
      },
      {
        id: 'g12_politics_easy_3',
        question: 'What is an election?',
        options: ['Government meeting', 'Process of choosing representatives by voting', 'Legal procedure', 'Public debate'],
        correct: 'Process of choosing representatives by voting',
        explanation: 'An election is a formal process in which citizens vote to choose their representatives.',
        difficulty: 'easy'
      },
      {
        id: 'g12_politics_easy_4',
        question: 'What is citizenship participation?',
        options: ['Paying taxes only', 'Active involvement in civic life', 'Following laws only', 'Living in a country'],
        correct: 'Active involvement in civic life',
        explanation: 'Citizenship participation involves actively engaging in the civic and political life of one\'s community.',
        difficulty: 'easy'
      },
      {
        id: 'g12_politics_easy_5',
        question: 'What is the United Nations?',
        options: ['Trade organization', 'International organization for peace and cooperation', 'Military alliance', 'Economic union'],
        correct: 'International organization for peace and cooperation',
        explanation: 'The UN is an international organization founded to promote peace, security, and cooperation among nations.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_politics_med_1',
        question: 'What is the difference between majority and plurality?',
        options: ['No difference', 'Majority: over 50%, Plurality: most votes but not necessarily majority', 'Only in presidential elections', 'Only terminology'],
        correct: 'Majority: over 50%, Plurality: most votes but not necessarily majority',
        explanation: 'A majority is over 50% of votes; a plurality is the most votes even if under 50%.',
        difficulty: 'medium'
      },
      {
        id: 'g12_politics_med_2',
        question: 'What is proportional representation?',
        options: ['Winner-take-all system', 'Seats allocated based on vote percentage', 'Geographic representation', 'Population-based system'],
        correct: 'Seats allocated based on vote percentage',
        explanation: 'Proportional representation allocates legislative seats based on the percentage of votes each party receives.',
        difficulty: 'medium'
      },
      {
        id: 'g12_politics_med_3',
        question: 'What is globalization?',
        options: ['National isolation', 'Increasing interconnectedness of world', 'Local governance', 'Regional trade only'],
        correct: 'Increasing interconnectedness of world',
        explanation: 'Globalization is the increasing interconnectedness and interdependence of countries worldwide.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_politics_hard_1',
        question: 'What is the role of interest groups in democracy?',
        options: ['Replace political parties', 'Represent specific interests and influence policy', 'Control elections', 'Make laws directly'],
        correct: 'Represent specific interests and influence policy',
        explanation: 'Interest groups represent specific interests and attempt to influence government policy and decisions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_politics_hard_2',
        question: 'What is sovereignty in international relations?',
        options: ['Economic independence', 'Supreme authority within territory', 'Military power', 'Cultural identity'],
        correct: 'Supreme authority within territory',
        explanation: 'Sovereignty is the principle that states have supreme authority within their territory and independence in international affairs.',
        difficulty: 'hard'
      }
    ]
  }
];
