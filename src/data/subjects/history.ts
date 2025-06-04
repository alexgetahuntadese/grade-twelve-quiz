
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
        question: 'Where did the earliest civilizations develop?',
        options: ['Mountains', 'River valleys', 'Deserts', 'Islands'],
        correct: 'River valleys',
        explanation: 'Early civilizations developed in river valleys like the Nile, Mesopotamia, Indus, and Yellow River.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_2',
        question: 'What is Mesopotamia known as?',
        options: ['Land of pyramids', 'Cradle of civilization', 'Land of pharaohs', 'Island nation'],
        correct: 'Cradle of civilization',
        explanation: 'Mesopotamia is called the cradle of civilization as it was one of the first places where civilization developed.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_3',
        question: 'Which river was crucial to ancient Egyptian civilization?',
        options: ['Euphrates', 'Tigris', 'Nile', 'Indus'],
        correct: 'Nile',
        explanation: 'The Nile River was essential to ancient Egyptian civilization, providing water and fertile soil.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_4',
        question: 'What were ziggurats?',
        options: ['Egyptian tombs', 'Mesopotamian temples', 'Greek theaters', 'Roman roads'],
        correct: 'Mesopotamian temples',
        explanation: 'Ziggurats were large temple towers built by ancient Mesopotamian civilizations.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_5',
        question: 'What writing system did ancient Egyptians use?',
        options: ['Cuneiform', 'Hieroglyphics', 'Alphabet', 'Sanskrit'],
        correct: 'Hieroglyphics',
        explanation: 'Ancient Egyptians used hieroglyphics, a system of picture-based writing.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'ancient_med_1',
        question: 'What was the Code of Hammurabi?',
        options: ['Religious text', 'Set of laws', 'Epic poem', 'Trade agreement'],
        correct: 'Set of laws',
        explanation: 'The Code of Hammurabi was one of the earliest known sets of written laws.',
        difficulty: 'medium'
      },
      {
        id: 'ancient_med_2',
        question: 'What caused the decline of the Indus Valley Civilization?',
        options: ['War only', 'Climate change and other factors', 'Earthquake only', 'Disease only'],
        correct: 'Climate change and other factors',
        explanation: 'The Indus Valley Civilization declined due to multiple factors including climate change, floods, and possibly invasions.',
        difficulty: 'medium'
      },
      {
        id: 'ancient_med_3',
        question: 'What was unique about ancient Greek city-states?',
        options: ['All were identical', 'Each had independent government', 'All were democracies', 'All were monarchies'],
        correct: 'Each had independent government',
        explanation: 'Greek city-states (poleis) were independent political units with their own governments.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'ancient_hard_1',
        question: 'What was the significance of the Rosetta Stone?',
        options: ['Religious artifact', 'Key to deciphering hieroglyphics', 'Ancient weapon', 'Trade document'],
        correct: 'Key to deciphering hieroglyphics',
        explanation: 'The Rosetta Stone was crucial in deciphering Egyptian hieroglyphics as it contained the same text in three scripts.',
        difficulty: 'hard'
      },
      {
        id: 'ancient_hard_2',
        question: 'What was the Silk Road?',
        options: ['Single road', 'Network of trade routes', 'River system', 'Military route'],
        correct: 'Network of trade routes',
        explanation: 'The Silk Road was a network of trade routes connecting East and West, facilitating cultural and economic exchange.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_world_wars',
    name: 'Grade 11: World Wars and Modern History',
    description: 'Major conflicts and global changes in the 20th century',
    questions: [
      // Easy Questions
      {
        id: 'g11_wars_easy_1',
        question: 'When did World War I begin?',
        options: ['1912', '1914', '1916', '1918'],
        correct: '1914',
        explanation: 'World War I began in 1914 with the assassination of Archduke Franz Ferdinand.',
        difficulty: 'easy'
      },
      {
        id: 'g11_wars_easy_2',
        question: 'What event triggered World War I?',
        options: ['Sinking of Lusitania', 'Assassination of Archduke Franz Ferdinand', 'German invasion of Poland', 'Pearl Harbor attack'],
        correct: 'Assassination of Archduke Franz Ferdinand',
        explanation: 'The assassination of Archduke Franz Ferdinand of Austria-Hungary triggered World War I.',
        difficulty: 'easy'
      },
      {
        id: 'g11_wars_easy_3',
        question: 'When did World War II end?',
        options: ['1944', '1945', '1946', '1947'],
        correct: '1945',
        explanation: 'World War II ended in 1945 with the surrender of Japan in September.',
        difficulty: 'easy'
      },
      {
        id: 'g11_wars_easy_4',
        question: 'What was the Holocaust?',
        options: ['A battle', 'Systematic persecution and murder of Jews and others', 'A peace treaty', 'A revolution'],
        correct: 'Systematic persecution and murder of Jews and others',
        explanation: 'The Holocaust was the systematic persecution and murder of six million Jews and others by Nazi Germany.',
        difficulty: 'easy'
      },
      {
        id: 'g11_wars_easy_5',
        question: 'What was the Cold War?',
        options: ['Hot conflict', 'Tension between US and Soviet Union', 'Winter war', 'Civil war'],
        correct: 'Tension between US and Soviet Union',
        explanation: 'The Cold War was a period of geopolitical tension between the United States and Soviet Union.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_wars_med_1',
        question: 'What was trench warfare?',
        options: ['Naval combat', 'Fighting from underground trenches', 'Air combat', 'Guerrilla warfare'],
        correct: 'Fighting from underground trenches',
        explanation: 'Trench warfare involved soldiers fighting from systems of trenches, common in WWI.',
        difficulty: 'medium'
      },
      {
        id: 'g11_wars_med_2',
        question: 'What was the Marshall Plan?',
        options: ['Military strategy', 'US aid to rebuild Europe', 'Peace treaty', 'Trade agreement'],
        correct: 'US aid to rebuild Europe',
        explanation: 'The Marshall Plan was American aid to help rebuild Western Europe after WWII.',
        difficulty: 'medium'
      },
      {
        id: 'g11_wars_med_3',
        question: 'What caused the Russian Revolution of 1917?',
        options: ['Foreign invasion', 'Economic hardship and war losses', 'Religious conflict', 'Territorial dispute'],
        correct: 'Economic hardship and war losses',
        explanation: 'The Russian Revolution was caused by economic hardship, military defeats, and social unrest.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_wars_hard_1',
        question: 'What was the significance of the Battle of Stalingrad?',
        options: ['First battle of WWII', 'Turning point on Eastern Front', 'End of WWI', 'Beginning of Cold War'],
        correct: 'Turning point on Eastern Front',
        explanation: 'The Battle of Stalingrad marked the turning point of WWII on the Eastern Front, halting German advance.',
        difficulty: 'hard'
      },
      {
        id: 'g11_wars_hard_2',
        question: 'What was the Iron Curtain?',
        options: ['Physical barrier', 'Metaphor for division of Europe', 'Military alliance', 'Trade barrier'],
        correct: 'Metaphor for division of Europe',
        explanation: 'The Iron Curtain was Churchill\'s metaphor for the ideological and political division of Europe during the Cold War.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_decolonization',
    name: 'Grade 12: Decolonization and Global Changes',
    description: 'End of colonial empires and emergence of new nations',
    questions: [
      // Easy Questions
      {
        id: 'g12_decolonization_easy_1',
        question: 'What is decolonization?',
        options: ['Establishing colonies', 'End of colonial rule', 'Trade expansion', 'Cultural exchange'],
        correct: 'End of colonial rule',
        explanation: 'Decolonization is the process by which colonies gained independence from colonial powers.',
        difficulty: 'easy'
      },
      {
        id: 'g12_decolonization_easy_2',
        question: 'Who led India\'s independence movement?',
        options: ['Nehru only', 'Gandhi', 'Churchill', 'Roosevelt'],
        correct: 'Gandhi',
        explanation: 'Mahatma Gandhi led India\'s non-violent independence movement against British rule.',
        difficulty: 'easy'
      },
      {
        id: 'g12_decolonization_easy_3',
        question: 'When did India gain independence?',
        options: ['1945', '1947', '1949', '1950'],
        correct: '1947',
        explanation: 'India gained independence from Britain in 1947, partitioned into India and Pakistan.',
        difficulty: 'easy'
      },
      {
        id: 'g12_decolonization_easy_4',
        question: 'What was apartheid?',
        options: ['Economic system', 'Racial segregation system in South Africa', 'Political party', 'Trade policy'],
        correct: 'Racial segregation system in South Africa',
        explanation: 'Apartheid was South Africa\'s system of institutionalized racial segregation and discrimination.',
        difficulty: 'easy'
      },
      {
        id: 'g12_decolonization_easy_5',
        question: 'What was the United Nations formed to do?',
        options: ['Promote trade', 'Maintain international peace and security', 'Control colonies', 'Manage economies'],
        correct: 'Maintain international peace and security',
        explanation: 'The UN was established to maintain international peace and security and promote cooperation.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_decolonization_med_1',
        question: 'What was the Non-Aligned Movement?',
        options: ['Military alliance', 'Countries not aligned with major power blocs', 'Trade organization', 'Colonial system'],
        correct: 'Countries not aligned with major power blocs',
        explanation: 'The Non-Aligned Movement consisted of countries that didn\'t align with either the US or Soviet bloc during the Cold War.',
        difficulty: 'medium'
      },
      {
        id: 'g12_decolonization_med_2',
        question: 'What was the Suez Crisis?',
        options: ['Trade dispute', 'Conflict over control of Suez Canal', 'Independence movement', 'Religious conflict'],
        correct: 'Conflict over control of Suez Canal',
        explanation: 'The Suez Crisis was a conflict over Egypt\'s nationalization of the Suez Canal in 1956.',
        difficulty: 'medium'
      },
      {
        id: 'g12_decolonization_med_3',
        question: 'What was the Berlin Wall?',
        options: ['Trade barrier', 'Physical barrier dividing East and West Berlin', 'Military base', 'Cultural monument'],
        correct: 'Physical barrier dividing East and West Berlin',
        explanation: 'The Berlin Wall was built to separate communist East Berlin from democratic West Berlin.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_decolonization_hard_1',
        question: 'What was the significance of the Bandung Conference (1955)?',
        options: ['Peace treaty', 'First major gathering of Asian and African nations', 'Trade agreement', 'Military alliance'],
        correct: 'First major gathering of Asian and African nations',
        explanation: 'The Bandung Conference was the first large-scale Asian-African conference, promoting cooperation among newly independent nations.',
        difficulty: 'hard'
      },
      {
        id: 'g12_decolonization_hard_2',
        question: 'What was the impact of the Cuban Missile Crisis?',
        options: ['Started Cold War', 'Brought world close to nuclear war', 'Ended colonialism', 'Created UN'],
        correct: 'Brought world close to nuclear war',
        explanation: 'The Cuban Missile Crisis brought the world closer to nuclear war than any other Cold War event.',
        difficulty: 'hard'
      }
    ]
  }
];
