import { Chapter } from '../../../types';
import { unit1CapitalismNationalism } from './unit1-capitalism-nationalism';
import { unit2AfricaColonial } from './unit2-africa-colonial';

// For now, we'll keep the remaining 7 units from the original grade12 file
// These will be refactored in future updates
const unit3EthiopiaPreWar: Chapter = {
  id: 'hist-12-3',
  name: 'Social, Economic, and Political Developments in Ethiopia, Mid-19th C. to 1941',
  description: 'Ethiopian history from the mid-19th century to 1941',
  questions: [
    {
      id: 'hist-12-3-1',
      question: 'Who was Tewodros II?',
      options: ['Ethiopian Emperor', 'European explorer', 'Colonial administrator', 'Religious leader'],
      correct: 'Ethiopian Emperor',
      explanation: 'Tewodros II was an Ethiopian Emperor who ruled from 1855 to 1868.',
      difficulty: 'easy'
    },
    {
      id: 'hist-12-3-2',
      question: 'What was the Battle of Adwa?',
      options: ['Colonial defeat', 'Ethiopian victory over Italy', 'Trade dispute', 'Religious conflict'],
      correct: 'Ethiopian victory over Italy',
      explanation: 'The Battle of Adwa (1896) was a decisive Ethiopian victory over Italian colonial forces.',
      difficulty: 'medium'
    },
    {
      id: 'hist-12-3-3',
      question: 'What characterized Menelik II\'s modernization efforts?',
      options: ['Military reform only', 'Comprehensive modernization program', 'Religious changes only', 'Educational focus only'],
      correct: 'Comprehensive modernization program',
      explanation: 'Menelik II implemented comprehensive reforms including military, infrastructure, and administrative modernization.',
      difficulty: 'hard'
    }
  ]
};

const unit4WorldWars: Chapter = {
  id: 'hist-12-4',
  name: 'Society and Politics in the Age of World Wars, 1914-1945',
  description: 'Global society and politics during the World War era',
  questions: [
    {
      id: 'hist-12-4-1',
      question: 'When did World War I begin?',
      options: ['1912', '1914', '1916', '1918'],
      correct: '1914',
      explanation: 'World War I began in 1914 following the assassination of Archduke Franz Ferdinand.',
      difficulty: 'easy'
    },
    {
      id: 'hist-12-4-2',
      question: 'What was the Russian Revolution?',
      options: ['Military coup', 'Overthrow of Tsarist regime', 'Religious uprising', 'Economic reform'],
      correct: 'Overthrow of Tsarist regime',
      explanation: 'The Russian Revolution (1917) led to the overthrow of the Tsarist regime and establishment of Soviet power.',
      difficulty: 'medium'
    },
    {
      id: 'hist-12-4-3',
      question: 'What characterized the interwar period?',
      options: ['Continuous peace', 'Economic instability and political tensions', 'Global prosperity', 'Colonial expansion'],
      correct: 'Economic instability and political tensions',
      explanation: 'The interwar period was marked by economic depression, political instability, and rising totalitarian movements.',
      difficulty: 'hard'
    }
  ]
};

const unit5GlobalDevelopments: Chapter = {
  id: 'hist-12-5',
  name: 'Global and Regional Developments Since 1945',
  description: 'Post-World War II global developments',
  questions: [
    {
      id: 'hist-12-5-1',
      question: 'What was the Cold War?',
      options: ['Hot conflict', 'Ideological confrontation between superpowers', 'Economic competition', 'Religious war'],
      correct: 'Ideological confrontation between superpowers',
      explanation: 'The Cold War was an ideological and geopolitical confrontation between the US and USSR.',
      difficulty: 'easy'
    },
    {
      id: 'hist-12-5-2',
      question: 'What was decolonization?',
      options: ['New colonization', 'Process of gaining independence from colonial rule', 'Economic development', 'Cultural exchange'],
      correct: 'Process of gaining independence from colonial rule',
      explanation: 'Decolonization was the process by which colonies gained independence from European powers after WWII.',
      difficulty: 'medium'
    },
    {
      id: 'hist-12-5-3',
      question: 'What characterized the Non-Aligned Movement?',
      options: ['Military alliance', 'Neutral stance in Cold War', 'Economic bloc', 'Religious organization'],
      correct: 'Neutral stance in Cold War',
      explanation: 'The Non-Aligned Movement represented countries that remained neutral during the Cold War.',
      difficulty: 'hard'
    }
  ]
};

const unit6EthiopiaModern: Chapter = {
  id: 'hist-12-6',
  name: 'Ethiopia: Internal Developments and External Influences from 1941 to 1991',
  description: 'Modern Ethiopian history from 1941 to 1991',
  questions: [
    {
      id: 'hist-12-6-1',
      question: 'Who was Haile Selassie?',
      options: ['Ethiopian Emperor', 'Colonial administrator', 'Religious leader', 'Military commander'],
      correct: 'Ethiopian Emperor',
      explanation: 'Haile Selassie was the Emperor of Ethiopia from 1930 to 1974.',
      difficulty: 'easy'
    },
    {
      id: 'hist-12-6-2',
      question: 'What was the Derg?',
      options: ['Political party', 'Military government', 'Religious organization', 'Trade union'],
      correct: 'Military government',
      explanation: 'The Derg was the military government that ruled Ethiopia from 1974 to 1987.',
      difficulty: 'medium'
    },
    {
      id: 'hist-12-6-3',
      question: 'What characterized Ethiopia during the Cold War?',
      options: ['Neutrality', 'Alignment shifts between superpowers', 'Isolation', 'Western alliance only'],
      correct: 'Alignment shifts between superpowers',
      explanation: 'Ethiopia shifted alignments from the West to the Soviet Union during the Cold War period.',
      difficulty: 'hard'
    }
  ]
};

const unit7AfricaSince1960s: Chapter = {
  id: 'hist-12-7',
  name: 'Africa since the 1960s',
  description: 'African developments since independence',
  questions: [
    {
      id: 'hist-12-7-1',
      question: 'What was the main focus of the OAU?',
      options: ['Economic development', 'African unity and decolonization', 'Military cooperation', 'Cultural exchange'],
      correct: 'African unity and decolonization',
      explanation: 'The Organization of African Unity focused on promoting African unity and completing decolonization.',
      difficulty: 'easy'
    },
    {
      id: 'hist-12-7-2',
      question: 'What challenged African development after independence?',
      options: ['Too much prosperity', 'Political instability and economic challenges', 'Overpopulation only', 'Climate only'],
      correct: 'Political instability and economic challenges',
      explanation: 'Many African countries faced political instability, economic difficulties, and governance challenges.',
      difficulty: 'medium'
    },
    {
      id: 'hist-12-7-3',
      question: 'What was apartheid?',
      options: ['Economic system', 'Racial segregation system in South Africa', 'Political party', 'Educational policy'],
      correct: 'Racial segregation system in South Africa',
      explanation: 'Apartheid was a system of institutionalized racial segregation in South Africa.',
      difficulty: 'hard'
    }
  ]
};

const unit8EthiopiaPost1991: Chapter = {
  id: 'hist-12-8',
  name: 'Post-1991 Developments in Ethiopia',
  description: 'Contemporary Ethiopian history since 1991',
  questions: [
    {
      id: 'hist-12-8-1',
      question: 'What happened in Ethiopia in 1991?',
      options: ['Colonial rule ended', 'Derg government fell', 'New emperor crowned', 'War began'],
      correct: 'Derg government fell',
      explanation: 'In 1991, the Derg military government was overthrown by the Ethiopian People\'s Revolutionary Democratic Front.',
      difficulty: 'easy'
    },
    {
      id: 'hist-12-8-2',
      question: 'What characterized the new Ethiopian constitution?',
      options: ['Centralized system', 'Federal system with ethnic-based regions', 'Military rule', 'Monarchy restoration'],
      correct: 'Federal system with ethnic-based regions',
      explanation: 'The 1995 Ethiopian constitution established a federal system based on ethnic-linguistic regions.',
      difficulty: 'medium'
    },
    {
      id: 'hist-12-8-3',
      question: 'What has been a major focus of post-1991 Ethiopia?',
      options: ['Isolation', 'Economic development and democratization', 'Military expansion', 'Colonial restoration'],
      correct: 'Economic development and democratization',
      explanation: 'Post-1991 Ethiopia has focused on economic development, infrastructure, and democratic institution building.',
      difficulty: 'hard'
    }
  ]
};

const unit9IndigenousKnowledge: Chapter = {
  id: 'hist-12-9',
  name: 'Indigenous Knowledge Systems and Heritages of Ethiopia',
  description: 'Traditional knowledge and cultural heritage of Ethiopia',
  questions: [
    {
      id: 'hist-12-9-1',
      question: 'What is indigenous knowledge?',
      options: ['Foreign knowledge', 'Traditional knowledge of local communities', 'Modern science only', 'Written knowledge only'],
      correct: 'Traditional knowledge of local communities',
      explanation: 'Indigenous knowledge refers to traditional knowledge systems developed by local communities over time.',
      difficulty: 'easy'
    },
    {
      id: 'hist-12-9-2',
      question: 'What characterizes Ethiopian cultural heritage?',
      options: ['Single tradition', 'Diverse ethnic and cultural traditions', 'Only religious traditions', 'Only modern culture'],
      correct: 'Diverse ethnic and cultural traditions',
      explanation: 'Ethiopia has diverse cultural heritage reflecting its many ethnic groups and long history.',
      difficulty: 'medium'
    },
    {
      id: 'hist-12-9-3',
      question: 'Why is preserving indigenous knowledge important?',
      options: ['No importance', 'Cultural identity and sustainable development', 'Only for tourism', 'Only for research'],
      correct: 'Cultural identity and sustainable development',
      explanation: 'Indigenous knowledge is important for maintaining cultural identity and can contribute to sustainable development.',
      difficulty: 'hard'
    }
  ]
};

export const grade12HistoryChaptersNew: Chapter[] = [
  unit1CapitalismNationalism,
  unit2AfricaColonial,
  unit3EthiopiaPreWar,
  unit4WorldWars,
  unit5GlobalDevelopments,
  unit6EthiopiaModern,
  unit7AfricaSince1960s,
  unit8EthiopiaPost1991,
  unit9IndigenousKnowledge
];
