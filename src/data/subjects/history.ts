import { Chapter } from '../types';

export const historyChapters: Chapter[] = [
  {
    id: 'ancient_ethiopia',
    name: 'Ancient Ethiopia',
    description: 'Early Ethiopian civilizations and kingdoms',
    questions: [
      {
        id: 'anc_1',
        question: 'What was the ancient name for Ethiopia?',
        options: ['Nubia', 'Abyssinia', 'Kush', 'Axum'],
        correct: 'Abyssinia',
        explanation: 'Ethiopia was historically known as Abyssinia, derived from the Arabic term.',
        difficulty: 'easy'
      },
      {
        id: 'anc_2',
        question: 'Which ancient Ethiopian kingdom was famous for its obelisks?',
        options: ['Zagwe', 'Solomonic', 'Axum', 'Gondar'],
        correct: 'Axum',
        explanation: 'The Kingdom of Axum is renowned for its giant obelisks, some still standing today.',
        difficulty: 'easy'
      },
      {
        id: 'anc_3',
        question: 'What religion was introduced to Ethiopia in the 4th century?',
        options: ['Islam', 'Judaism', 'Christianity', 'Buddhism'],
        correct: 'Christianity',
        explanation: 'Christianity was introduced to Ethiopia in the 4th century CE during King Ezana\'s reign.',
        difficulty: 'easy'
      },
      {
        id: 'anc_4',
        question: 'Which city is considered the spiritual center of Ethiopian Orthodox Christianity?',
        options: ['Axum', 'Lalibela', 'Gondar', 'Addis Ababa'],
        correct: 'Lalibela',
        explanation: 'Lalibela is famous for its rock-hewn churches and is a major pilgrimage site.',
        difficulty: 'easy'
      },
      {
        id: 'anc_5',
        question: 'What script is used to write Amharic and other Ethiopian languages?',
        options: ['Latin', 'Arabic', 'Ge\'ez', 'Cyrillic'],
        correct: 'Ge\'ez',
        explanation: 'The Ge\'ez script, also called Fidel, is used for several Ethiopian languages.',
        difficulty: 'easy'
      },
      {
        id: 'anc_6',
        question: 'Which Queen is associated with the legend of the Queen of Sheba?',
        options: ['Queen Yodit', 'Queen Makeda', 'Queen Zara Yaqob', 'Queen Eleni'],
        correct: 'Queen Makeda',
        explanation: 'Queen Makeda is traditionally identified with the biblical Queen of Sheba.',
        difficulty: 'easy'
      },
      {
        id: 'anc_7',
        question: 'What was the primary trade item that made Axum wealthy?',
        options: ['Gold', 'Salt', 'Ivory', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Axum\'s wealth came from trading gold, salt, ivory, and other goods.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'anc_8',
        question: 'Which ruler is credited with converting the Kingdom of Axum to Christianity?',
        options: ['King Kaleb', 'King Ezana', 'King Lalibela', 'King Zara Yaqob'],
        correct: 'King Ezana',
        explanation: 'King Ezana converted to Christianity around 330 CE and made it the official religion.',
        difficulty: 'medium'
      },
      {
        id: 'anc_9',
        question: 'What period followed the decline of the Axumite Kingdom?',
        options: ['Solomonic Period', 'Zagwe Dynasty', 'Portuguese Period', 'Islamic Period'],
        correct: 'Zagwe Dynasty',
        explanation: 'The Zagwe Dynasty ruled from approximately 1137 to 1270 CE.',
        difficulty: 'medium'
      },
      {
        id: 'anc_10',
        question: 'Which ancient Ethiopian text is considered one of the world\'s oldest?',
        options: ['Kebra Nagast', 'Book of Enoch', 'Fetha Nagast', 'Ge\'ez Bible'],
        correct: 'Book of Enoch',
        explanation: 'The Ethiopian Book of Enoch is one of the oldest religious texts, preserved in Ge\'ez.',
        difficulty: 'medium'
      },
      {
        id: 'anc_11',
        question: 'What was the capital of the Zagwe Dynasty?',
        options: ['Axum', 'Roha (Lalibela)', 'Gondar', 'Ankober'],
        correct: 'Roha (Lalibela)',
        explanation: 'The Zagwe capital was Roha, later renamed Lalibela after King Lalibela.',
        difficulty: 'medium'
      },
      {
        id: 'anc_12',
        question: 'Which ancient Ethiopian kingdom controlled trade routes to the Red Sea?',
        options: ['D\'mt', 'Axum', 'Zagwe', 'Both A and B'],
        correct: 'Both A and B',
        explanation: 'Both D\'mt and Axum controlled important Red Sea trade routes.',
        difficulty: 'medium'
      },
      {
        id: 'anc_13',
        question: 'What architectural feature distinguishes Lalibela\'s churches?',
        options: ['They are built on hills', 'They are carved from rock', 'They have golden domes', 'They are made of wood'],
        correct: 'They are carved from rock',
        explanation: 'Lalibela\'s churches are famous for being hewn directly from solid rock.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'anc_14',
        question: 'Which inscription is the most important source for early Axumite history?',
        options: ['RIE 185', 'RIE 270', 'The Ezana Stone', 'The Adulis Inscription'],
        correct: 'The Ezana Stone',
        explanation: 'The Ezana Stone inscription provides crucial information about King Ezana\'s reign and conversion.',
        difficulty: 'hard'
      },
      {
        id: 'anc_15',
        question: 'What was the relationship between the kingdoms of Axum and Himyar?',
        options: ['Allies', 'Enemies', 'Tributaries', 'Trading partners'],
        correct: 'Enemies',
        explanation: 'Axum and Himyar (in Yemen) were often in conflict over trade route control.',
        difficulty: 'hard'
      },
      {
        id: 'anc_16',
        question: 'Which foreign power first established diplomatic relations with Ethiopia?',
        options: ['Rome', 'Byzantium', 'Persia', 'Portugal'],
        correct: 'Byzantium',
        explanation: 'Byzantium established early diplomatic relations with the Axumite Kingdom.',
        difficulty: 'hard'
      },
      {
        id: 'anc_17',
        question: 'What caused the decline of the Axumite Kingdom?',
        options: ['Climate change', 'Islamic expansion', 'Economic factors', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Multiple factors including climate change, Islamic expansion, and economic decline led to Axum\'s fall.',
        difficulty: 'hard'
      },
      {
        id: 'anc_18',
        question: 'Which ancient Ethiopian city was known as the \'Athens of Africa\'?',
        options: ['Axum', 'Gondar', 'Harar', 'Lalibela'],
        correct: 'Gondar',
        explanation: 'Gondar was called the \'Athens of Africa\' for its learning centers and architecture.',
        difficulty: 'hard'
      },
      {
        id: 'anc_19',
        question: 'What was the significance of the Ark of the Covenant in Ethiopian tradition?',
        options: ['Symbol of power', 'Religious relic', 'Trade item', 'Legitimacy source'],
        correct: 'Legitimacy source',
        explanation: 'Ethiopian tradition claims the Ark of the Covenant legitimizes the Solomonic dynasty.',
        difficulty: 'hard'
      },
      {
        id: 'anc_20',
        question: 'Which ancient pre-Axumite kingdom is considered Ethiopia\'s first major civilization?',
        options: ['D\'mt', 'Punt', 'Kush', 'Sheba'],
        correct: 'D\'mt',
        explanation: 'The Kingdom of D\'mt (c. 980-400 BCE) is considered the first major Ethiopian civilization.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'medieval_ethiopia',
    name: 'Medieval Ethiopia',
    description: 'The Zagwe and Solomonic dynasties',
    questions: [
      {
        id: 'med_1',
        question: 'Which dynasty ruled Ethiopia from 1270 to 1974?',
        options: ['Zagwe', 'Solomonic', 'Axumite', 'Gondarine'],
        correct: 'Solomonic',
        explanation: 'The Solomonic dynasty ruled Ethiopia for over 700 years.',
        difficulty: 'easy'
      },
      {
        id: 'med_2',
        question: 'Who is credited with building the rock churches of Lalibela?',
        options: ['King Ezana', 'King Lalibela', 'Emperor Haile Selassie', 'Queen Makeda'],
        correct: 'King Lalibela',
        explanation: 'King Lalibela of the Zagwe dynasty commissioned these magnificent churches.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'modern_ethiopia',
    name: 'Modern Ethiopia',
    description: 'Ethiopia in the 19th and 20th centuries',
    questions: [
      {
        id: 'mod_1',
        question: 'Which Ethiopian emperor defeated the Italians at Adwa in 1896?',
        options: ['Menelik II', 'Haile Selassie', 'Tewodros II', 'Yohannes IV'],
        correct: 'Menelik II',
        explanation: 'Emperor Menelik II led Ethiopia to victory against Italy at the Battle of Adwa.',
        difficulty: 'easy'
      },
      {
        id: 'mod_2',
        question: 'What year did Ethiopia become a founding member of the United Nations?',
        options: ['1945', '1941', '1955', '1963'],
        correct: '1945',
        explanation: 'Ethiopia was one of the founding members of the UN in 1945.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'world_ancient',
    name: 'Ancient World Civilizations',
    description: 'Early civilizations around the world',
    questions: [
      {
        id: 'world_1',
        question: 'Which river is associated with ancient Egyptian civilization?',
        options: ['Euphrates', 'Nile', 'Indus', 'Yellow'],
        correct: 'Nile',
        explanation: 'Ancient Egyptian civilization developed along the Nile River.',
        difficulty: 'easy'
      },
      {
        id: 'world_2',
        question: 'What were the pyramids of Egypt built for?',
        options: ['Homes', 'Tombs', 'Temples', 'Markets'],
        correct: 'Tombs',
        explanation: 'The pyramids were built as tombs for pharaohs and their families.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'medieval_world',
    name: 'Medieval World',
    description: 'The Middle Ages around the world',
    questions: [
      {
        id: 'med_world_1',
        question: 'What system dominated medieval Europe?',
        options: ['Capitalism', 'Feudalism', 'Socialism', 'Democracy'],
        correct: 'Feudalism',
        explanation: 'Feudalism was the dominant social and economic system in medieval Europe.',
        difficulty: 'easy'
      },
      {
        id: 'med_world_2',
        question: 'What were the Crusades?',
        options: ['Trade expeditions', 'Religious wars', 'Scientific missions', 'Art movements'],
        correct: 'Religious wars',
        explanation: 'The Crusades were a series of religious wars between Christians and Muslims.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'renaissance',
    name: 'Renaissance and Exploration',
    description: 'Cultural rebirth and age of exploration',
    questions: [
      {
        id: 'ren_1',
        question: 'Where did the Renaissance begin?',
        options: ['France', 'England', 'Italy', 'Spain'],
        correct: 'Italy',
        explanation: 'The Renaissance began in Italy during the 14th century.',
        difficulty: 'easy'
      },
      {
        id: 'ren_2',
        question: 'Who painted the Mona Lisa?',
        options: ['Michelangelo', 'Leonardo da Vinci', 'Raphael', 'Donatello'],
        correct: 'Leonardo da Vinci',
        explanation: 'Leonardo da Vinci painted the famous Mona Lisa.',
        difficulty: 'easy'
      }
    ]
  },

  // Grade 11 Chapter
  {
    id: 'grade11_ethiopian_modernization',
    name: 'Grade 11: Ethiopian Modernization and Reform (1855-1974)',
    description: 'Ethiopia\'s modernization efforts from Emperor Tewodros II to the end of Imperial rule',
    questions: [
      // Easy Questions
      {
        id: 'g11_hist_easy_1',
        question: 'Who is considered the founder of modern Ethiopia?',
        options: ['Menelik II', 'Haile Selassie', 'Tewodros II', 'Yohannes IV'],
        correct: 'Tewodros II',
        explanation: 'Emperor Tewodros II is considered the founder of modern Ethiopia due to his unification and modernization efforts.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_2',
        question: 'What was the significance of the Battle of Adwa (1896)?',
        options: ['Ethiopian defeat', 'Ethiopian victory over Italy', 'Civil war battle', 'Religious conflict'],
        correct: 'Ethiopian victory over Italy',
        explanation: 'The Battle of Adwa was a decisive Ethiopian victory that maintained independence from European colonization.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_3',
        question: 'Which emperor expanded Ethiopia to its largest territorial extent?',
        options: ['Tewodros II', 'Yohannes IV', 'Menelik II', 'Haile Selassie'],
        correct: 'Menelik II',
        explanation: 'Emperor Menelik II expanded Ethiopia to roughly its current boundaries.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_4',
        question: 'When was the first Italian invasion of Ethiopia?',
        options: ['1889-1896', '1935-1941', '1920-1925', '1900-1905'],
        correct: '1889-1896',
        explanation: 'The first Italian invasion occurred from 1889-1896, ending with the Battle of Adwa.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_5',
        question: 'What was the Wuchale Treaty?',
        options: ['Peace treaty', 'Trade agreement', 'Disputed treaty with Italy', 'Religious agreement'],
        correct: 'Disputed treaty with Italy',
        explanation: 'The Treaty of Wuchale (1889) was disputed due to different interpretations in Amharic and Italian versions.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_6',
        question: 'Who founded Addis Ababa?',
        options: ['Tewodros II', 'Yohannes IV', 'Menelik II', 'Haile Selassie'],
        correct: 'Menelik II',
        explanation: 'Emperor Menelik II founded Addis Ababa in 1886.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_7',
        question: 'What does "Addis Ababa" mean?',
        options: ['Old flower', 'New flower', 'Great city', 'Royal palace'],
        correct: 'New flower',
        explanation: 'Addis Ababa means "new flower" in Amharic.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_8',
        question: 'When did the Italian occupation of Ethiopia begin?',
        options: ['1935', '1936', '1940', '1941'],
        correct: '1935',
        explanation: 'The second Italian invasion began in 1935.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_9',
        question: 'When was Ethiopia liberated from Italian occupation?',
        options: ['1940', '1941', '1942', '1943'],
        correct: '1941',
        explanation: 'Ethiopia was liberated from Italian occupation in 1941.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hist_easy_10',
        question: 'What was the Derg?',
        options: ['Religious council', 'Military committee', 'Trade organization', 'Educational institution'],
        correct: 'Military committee',
        explanation: 'The Derg was the military committee that took power in 1974.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_hist_med_1',
        question: 'What were the main modernization efforts of Emperor Tewodros II?',
        options: ['Religious reforms only', 'Military modernization and centralization', 'Economic reforms only', 'Educational reforms only'],
        correct: 'Military modernization and centralization',
        explanation: 'Tewodros II focused on military modernization and political centralization.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_2',
        question: 'How did Emperor Yohannes IV die?',
        options: ['Natural causes', 'Battle with Mahdist forces', 'Italian invasion', 'Palace coup'],
        correct: 'Battle with Mahdist forces',
        explanation: 'Emperor Yohannes IV died fighting Mahdist forces at the Battle of Gallabat in 1889.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_3',
        question: 'What was the significance of the railway line to Djibouti?',
        options: ['Military transport', 'Economic modernization and trade access', 'Tourist attraction', 'Religious pilgrimage'],
        correct: 'Economic modernization and trade access',
        explanation: 'The railway to Djibouti was crucial for Ethiopia\'s economic modernization and access to international trade.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_4',
        question: 'What role did Empress Taitu play in Ethiopian history?',
        options: ['No significant role', 'Advisor to Menelik II and founder of Addis Ababa', 'Military commander only', 'Religious leader only'],
        correct: 'Advisor to Menelik II and founder of Addis Ababa',
        explanation: 'Empress Taitu was influential in politics and is credited with founding Addis Ababa.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_5',
        question: 'What was the significance of the 1931 Constitution?',
        options: ['Established republic', 'First written constitution of Ethiopia', 'Religious document', 'Military law'],
        correct: 'First written constitution of Ethiopia',
        explanation: 'The 1931 Constitution was Ethiopia\'s first written constitution.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_6',
        question: 'What was the Gojjam Rebellion?',
        options: ['Religious uprising', 'Regional resistance to central authority', 'Foreign invasion', 'Student protest'],
        correct: 'Regional resistance to central authority',
        explanation: 'The Gojjam Rebellion was regional resistance to imperial centralization efforts.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_7',
        question: 'How did World War I affect Ethiopia?',
        options: ['Direct involvement', 'Remained neutral but gained diplomatic recognition', 'Was invaded', 'Joined Central Powers'],
        correct: 'Remained neutral but gained diplomatic recognition',
        explanation: 'Ethiopia remained neutral in WWI but gained international diplomatic recognition.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_8',
        question: 'What was the role of Ras Tafari (later Haile Selassie) before becoming emperor?',
        options: ['Military commander', 'Regent and modernizing force', 'Religious leader', 'Foreign diplomat'],
        correct: 'Regent and modernizing force',
        explanation: 'Ras Tafari served as regent and was a major modernizing force before becoming emperor.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_9',
        question: 'What was the significance of Ethiopia\'s admission to the League of Nations?',
        options: ['Military alliance', 'International recognition and diplomatic status', 'Economic benefits only', 'Religious recognition'],
        correct: 'International recognition and diplomatic status',
        explanation: 'Ethiopia\'s admission to the League of Nations provided international recognition and diplomatic status.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hist_med_10',
        question: 'What caused the 1960 coup attempt?',
        options: ['Foreign invasion', 'Desire for rapid modernization and reform', 'Religious conflicts', 'Economic crisis only'],
        correct: 'Desire for rapid modernization and reform',
        explanation: 'The 1960 coup attempt was motivated by desire for faster modernization and political reform.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_hist_hard_1',
        question: 'What were the long-term consequences of the Treaty of Wuchale controversy?',
        options: ['Peaceful relations', 'Led to Battle of Adwa and Ethiopian resistance strategy', 'Economic cooperation', 'Religious harmony'],
        correct: 'Led to Battle of Adwa and Ethiopian resistance strategy',
        explanation: 'The Treaty controversy led to the Battle of Adwa and shaped Ethiopia\'s resistance to colonialism.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_2',
        question: 'How did the gabbar system function in Menelik\'s expanded empire?',
        options: ['Democratic representation', 'Land tenure system with tributary relationships', 'Military organization', 'Religious hierarchy'],
        correct: 'Land tenure system with tributary relationships',
        explanation: 'The gabbar system was a land tenure system where conquered peoples paid tribute to Amhara settlers.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_3',
        question: 'What was the impact of the rinderpest epidemic of the 1890s?',
        options: ['Minor agricultural impact', 'Massive cattle death leading to famine and social disruption', 'Affected only wild animals', 'Improved agriculture'],
        correct: 'Massive cattle death leading to famine and social disruption',
        explanation: 'The rinderpest epidemic caused massive cattle deaths, leading to severe famine and social disruption.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_4',
        question: 'How did Haile Selassie\'s speech to the League of Nations impact global opinion?',
        options: ['No impact', 'Exposed weakness of collective security and warned of WWII', 'Strengthened League', 'Ended conflicts'],
        correct: 'Exposed weakness of collective security and warned of WWII',
        explanation: 'Haile Selassie\'s speech exposed the League\'s weakness and prophetically warned of the coming world war.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_5',
        question: 'What was the significance of the Arbegnoch resistance movement?',
        options: ['Religious movement', 'Patriotic resistance against Italian occupation', 'Political party', 'Economic organization'],
        correct: 'Patriotic resistance against Italian occupation',
        explanation: 'The Arbegnoch (patriots) led sustained resistance against Italian occupation throughout the country.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_6',
        question: 'How did the Italian colonial administration attempt to divide Ethiopian society?',
        options: ['No division attempts', 'Ethnic and religious divide-and-rule policies', 'Economic integration', 'Cultural unification'],
        correct: 'Ethnic and religious divide-and-rule policies',
        explanation: 'Italians attempted to use ethnic and religious divisions to weaken Ethiopian resistance.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_7',
        question: 'What was the relationship between traditional Ethiopian education and modernization efforts?',
        options: ['Complete replacement', 'Tension between traditional church education and modern secular education', 'Perfect harmony', 'No interaction'],
        correct: 'Tension between traditional church education and modern secular education',
        explanation: 'There was significant tension between traditional church-based education and new secular educational initiatives.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_8',
        question: 'How did the land tenure systems vary across Ethiopia\'s expanded territories?',
        options: ['Uniform system', 'Complex mix of rist, gult, and conquered land systems', 'Simple ownership', 'No land systems'],
        correct: 'Complex mix of rist, gult, and conquered land systems',
        explanation: 'Ethiopia had complex land tenure systems including traditional rist, gult grants, and systems in conquered territories.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_9',
        question: 'What was the impact of the 1973-74 famine on imperial legitimacy?',
        options: ['Strengthened support', 'Severely undermined imperial authority and triggered revolution', 'No political impact', 'Increased foreign aid'],
        correct: 'Severely undermined imperial authority and triggered revolution',
        explanation: 'The 1973-74 famine and the government\'s weak response severely undermined imperial legitimacy.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hist_hard_10',
        question: 'How did Ethiopia\'s relationship with Britain change after WWII?',
        options: ['No relationship', 'From liberation alliance to tension over British control', 'Purely economic ties', 'Cultural exchange only'],
        correct: 'From liberation alliance to tension over British control',
        explanation: 'Ethiopia\'s relationship with Britain evolved from liberation alliance to tension over British influence post-WWII.',
        difficulty: 'hard'
      }
    ]
  }
];
