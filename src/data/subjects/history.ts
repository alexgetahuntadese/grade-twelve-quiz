
import { Chapter } from '../types';

export const historyChapters: Chapter[] = [
  {
    id: 'ancient_civilizations',
    name: 'Ancient Civilizations',
    description: 'Early human societies and their development',
    questions: [
      // Easy Questions
      {
        id: 'ancient_1',
        question: 'Which river was central to ancient Egyptian civilization?',
        options: ['Tigris', 'Euphrates', 'Nile', 'Indus'],
        correct: 'Nile',
        explanation: 'The Nile River was the lifeline of ancient Egyptian civilization.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_2',
        question: 'What is a pyramid?',
        options: ['Temple', 'Palace', 'Tomb for pharaohs', 'Market'],
        correct: 'Tomb for pharaohs',
        explanation: 'Pyramids were built as tombs for Egyptian pharaohs.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_3',
        question: 'Which ancient civilization invented writing?',
        options: ['Egyptians', 'Sumerians', 'Greeks', 'Romans'],
        correct: 'Sumerians',
        explanation: 'The Sumerians developed the first writing system, cuneiform.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_4',
        question: 'What was the agora in ancient Greece?',
        options: ['Temple', 'Marketplace and gathering place', 'Palace', 'Theater'],
        correct: 'Marketplace and gathering place',
        explanation: 'The agora was the central public space for commerce and assembly.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'ancient_med_1',
        question: 'What was the Code of Hammurabi?',
        options: ['Religious text', 'One of the first written law codes', 'Epic poem', 'Trade agreement'],
        correct: 'One of the first written law codes',
        explanation: 'Hammurabi\'s Code was one of the earliest and most complete legal codes.',
        difficulty: 'medium'
      },
      {
        id: 'ancient_med_2',
        question: 'What type of government did ancient Athens develop?',
        options: ['Monarchy', 'Oligarchy', 'Democracy', 'Theocracy'],
        correct: 'Democracy',
        explanation: 'Athens is credited with developing the first form of democracy.',
        difficulty: 'medium'
      },
      {
        id: 'ancient_med_3',
        question: 'What connected ancient Mesopotamian city-states?',
        options: ['Common language only', 'Trade networks and shared culture', 'One ruler', 'Same religion only'],
        correct: 'Trade networks and shared culture',
        explanation: 'City-states were connected through trade, culture, and sometimes religion.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'ancient_hard_1',
        question: 'What was the Rosetta Stone\'s significance?',
        options: ['Religious artifact', 'Key to deciphering Egyptian hieroglyphs', 'Ancient map', 'Trade document'],
        correct: 'Key to deciphering Egyptian hieroglyphs',
        explanation: 'The Rosetta Stone provided the key to understanding hieroglyphic writing.',
        difficulty: 'hard'
      },
      {
        id: 'ancient_hard_2',
        question: 'What was the Fertile Crescent?',
        options: ['Mountain range', 'Desert region', 'Arc of fertile land in Middle East', 'Island chain'],
        correct: 'Arc of fertile land in Middle East',
        explanation: 'The Fertile Crescent was a region where agriculture first developed.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'medieval_period',
    name: 'Medieval Period',
    description: 'Middle Ages in Europe and other regions',
    questions: [
      // Easy Questions
      {
        id: 'medieval_1',
        question: 'What was feudalism?',
        options: ['Trade system', 'Social and political system based on land ownership', 'Religious practice', 'Military strategy'],
        correct: 'Social and political system based on land ownership',
        explanation: 'Feudalism was a system where land was exchanged for service and loyalty.',
        difficulty: 'easy'
      },
      {
        id: 'medieval_2',
        question: 'Who were knights?',
        options: ['Farmers', 'Warriors on horseback', 'Merchants', 'Priests'],
        correct: 'Warriors on horseback',
        explanation: 'Knights were mounted warriors who served feudal lords.',
        difficulty: 'easy'
      },
      {
        id: 'medieval_3',
        question: 'What was a manor?',
        options: ['Castle', 'Self-sufficient estate', 'City', 'Church'],
        correct: 'Self-sufficient estate',
        explanation: 'A manor was a large estate that could support itself economically.',
        difficulty: 'easy'
      },
      {
        id: 'medieval_4',
        question: 'What were the Crusades?',
        options: ['Trade expeditions', 'Religious wars', 'Exploration voyages', 'Scientific studies'],
        correct: 'Religious wars',
        explanation: 'The Crusades were religious wars fought primarily over control of holy lands.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'medieval_med_1',
        question: 'What caused the decline of feudalism?',
        options: ['Growth of trade and cities', 'Religious reformation', 'Barbarian invasions', 'Natural disasters'],
        correct: 'Growth of trade and cities',
        explanation: 'The rise of commerce and urban centers weakened the feudal system.',
        difficulty: 'medium'
      },
      {
        id: 'medieval_med_2',
        question: 'What was the Black Death?',
        options: ['War', 'Plague that killed millions', 'Famine', 'Political revolution'],
        correct: 'Plague that killed millions',
        explanation: 'The Black Death was a devastating plague that swept through Europe.',
        difficulty: 'medium'
      },
      {
        id: 'medieval_med_3',
        question: 'What role did the Catholic Church play in medieval Europe?',
        options: ['Minor role', 'Dominant religious and political influence', 'Economic only', 'Military only'],
        correct: 'Dominant religious and political influence',
        explanation: 'The Church was the most powerful institution in medieval Europe.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'medieval_hard_1',
        question: 'What was the Great Schism?',
        options: ['Political division', 'Split in the Catholic Church', 'Economic crisis', 'Military conflict'],
        correct: 'Split in the Catholic Church',
        explanation: 'The Great Schism was a period when there were competing claims to the papacy.',
        difficulty: 'hard'
      },
      {
        id: 'medieval_hard_2',
        question: 'What was the Magna Carta\'s significance?',
        options: ['Religious document', 'Limited the power of the English king', 'Trade agreement', 'Military treaty'],
        correct: 'Limited the power of the English king',
        explanation: 'The Magna Carta established that even kings were subject to law.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_world_wars',
    name: 'Grade 12: World Wars and Modern History',
    description: 'Twentieth century conflicts and their global impact',
    questions: [
      // Easy Questions
      {
        id: 'g12_wars_easy_1',
        question: 'When did World War I begin?',
        options: ['1912', '1914', '1916', '1918'],
        correct: '1914',
        explanation: 'World War I began in 1914 following the assassination of Archduke Franz Ferdinand.',
        difficulty: 'easy'
      },
      {
        id: 'g12_wars_easy_2',
        question: 'What event triggered the United States entry into World War II?',
        options: ['Pearl Harbor attack', 'D-Day invasion', 'Battle of Britain', 'Invasion of Poland'],
        correct: 'Pearl Harbor attack',
        explanation: 'The Japanese attack on Pearl Harbor brought the US into WWII.',
        difficulty: 'easy'
      },
      {
        id: 'g12_wars_easy_3',
        question: 'What was the Holocaust?',
        options: ['Battle', 'Systematic persecution and murder of Jews and others', 'Peace treaty', 'Economic plan'],
        correct: 'Systematic persecution and murder of Jews and others',
        explanation: 'The Holocaust was Nazi Germany\'s systematic genocide.',
        difficulty: 'easy'
      },
      {
        id: 'g12_wars_easy_4',
        question: 'What was the Cold War?',
        options: ['Hot conflict', 'Period of tension between US and USSR', 'Economic depression', 'Natural disaster'],
        correct: 'Period of tension between US and USSR',
        explanation: 'The Cold War was a period of political and military tension after WWII.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_wars_med_1',
        question: 'What were the main causes of World War I?',
        options: ['Economic only', 'Militarism, alliances, imperialism, nationalism', 'Religious differences', 'Natural disasters'],
        correct: 'Militarism, alliances, imperialism, nationalism',
        explanation: 'WWI resulted from complex factors including MAIN: Militarism, Alliances, Imperialism, Nationalism.',
        difficulty: 'medium'
      },
      {
        id: 'g12_wars_med_2',
        question: 'What was the Marshall Plan?',
        options: ['Military strategy', 'US economic aid to rebuild Europe', 'Peace treaty', 'Alliance system'],
        correct: 'US economic aid to rebuild Europe',
        explanation: 'The Marshall Plan provided US economic assistance to rebuild post-war Europe.',
        difficulty: 'medium'
      },
      {
        id: 'g12_wars_med_3',
        question: 'What was the significance of D-Day?',
        options: ['End of war', 'Allied invasion of Nazi-occupied France', 'Peace negotiations', 'Nuclear attack'],
        correct: 'Allied invasion of Nazi-occupied France',
        explanation: 'D-Day was the massive Allied invasion that opened a second front in Europe.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_wars_hard_1',
        question: 'What was the Schlieffen Plan?',
        options: ['Peace proposal', 'German strategy for two-front war', 'Economic recovery plan', 'Alliance treaty'],
        correct: 'German strategy for two-front war',
        explanation: 'The Schlieffen Plan was Germany\'s strategy to quickly defeat France then fight Russia.',
        difficulty: 'hard'
      },
      {
        id: 'g12_wars_hard_2',
        question: 'What was the significance of the Yalta Conference?',
        options: ['Started WWI', 'Allied leaders planned post-war world', 'Ended Cold War', 'Created United Nations'],
        correct: 'Allied leaders planned post-war world',
        explanation: 'At Yalta, Roosevelt, Churchill, and Stalin discussed post-war arrangements.',
        difficulty: 'hard'
      }
    ]
  }
];
