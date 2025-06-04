
import { Chapter } from '../types';

export const historyChapters: Chapter[] = [
  {
    id: 'ancient_civilizations',
    name: 'Ancient Civilizations',
    description: 'Early human societies and their development',
    questions: [
      // Easy Questions
      {
        id: 'anc_1',
        question: 'Which civilization built the pyramids?',
        options: ['Greeks', 'Romans', 'Egyptians', 'Babylonians'],
        correct: 'Egyptians',
        explanation: 'The ancient Egyptians built the famous pyramids as tombs for their pharaohs.',
        difficulty: 'easy'
      },
      {
        id: 'anc_2',
        question: 'What river was important to ancient Egypt?',
        options: ['Amazon', 'Nile', 'Mississippi', 'Ganges'],
        correct: 'Nile',
        explanation: 'The Nile River was crucial to ancient Egyptian civilization for agriculture and transportation.',
        difficulty: 'easy'
      },
      {
        id: 'anc_3',
        question: 'Who was the first emperor of Rome?',
        options: ['Julius Caesar', 'Augustus', 'Nero', 'Constantine'],
        correct: 'Augustus',
        explanation: 'Augustus (originally Octavian) became the first Roman emperor in 27 BCE.',
        difficulty: 'easy'
      },
      {
        id: 'anc_4',
        question: 'Which ancient wonder was located in Alexandria?',
        options: ['Pyramids', 'Hanging Gardens', 'Lighthouse', 'Colossus'],
        correct: 'Lighthouse',
        explanation: 'The Lighthouse of Alexandria was one of the Seven Wonders of the Ancient World.',
        difficulty: 'easy'
      },
      {
        id: 'anc_5',
        question: 'What was the main occupation in ancient civilizations?',
        options: ['Trading', 'Farming', 'Crafting', 'Hunting'],
        correct: 'Farming',
        explanation: 'Agriculture was the foundation of most ancient civilizations.',
        difficulty: 'easy'
      },
      {
        id: 'anc_6',
        question: 'Which civilization invented writing?',
        options: ['Egyptians', 'Greeks', 'Sumerians', 'Chinese'],
        correct: 'Sumerians',
        explanation: 'The Sumerians developed the first known writing system called cuneiform.',
        difficulty: 'easy'
      },
      {
        id: 'anc_7',
        question: 'What was the Code of Hammurabi?',
        options: ['Religious text', 'Set of laws', 'Epic poem', 'Mathematical formula'],
        correct: 'Set of laws',
        explanation: 'The Code of Hammurabi was one of the earliest written legal codes.',
        difficulty: 'easy'
      },
      {
        id: 'anc_8',
        question: 'Which civilization is known for democracy?',
        options: ['Egypt', 'Mesopotamia', 'Greece', 'Rome'],
        correct: 'Greece',
        explanation: 'Ancient Greece, particularly Athens, developed the concept of democracy.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'anc_med_1',
        question: 'What was the Silk Road?',
        options: ['A river', 'Trade routes', 'A wall', 'A palace'],
        correct: 'Trade routes',
        explanation: 'The Silk Road was a network of trade routes connecting East and West.',
        difficulty: 'medium'
      },
      {
        id: 'anc_med_2',
        question: 'Who was Cleopatra?',
        options: ['Greek goddess', 'Roman empress', 'Egyptian pharaoh', 'Persian queen'],
        correct: 'Egyptian pharaoh',
        explanation: 'Cleopatra VII was the last active pharaoh of Ancient Egypt.',
        difficulty: 'medium'
      },
      {
        id: 'anc_med_3',
        question: 'What caused the fall of the Western Roman Empire?',
        options: ['Single battle', 'Multiple factors', 'Natural disaster', 'Economic boom'],
        correct: 'Multiple factors',
        explanation: 'The fall was due to various factors including invasions, economic problems, and political instability.',
        difficulty: 'medium'
      },
      {
        id: 'anc_med_4',
        question: 'What was the Pax Romana?',
        options: ['Roman war', 'Period of peace', 'Type of government', 'Religious festival'],
        correct: 'Period of peace',
        explanation: 'Pax Romana was a long period of relative peace and stability in the Roman Empire.',
        difficulty: 'medium'
      },
      {
        id: 'anc_med_5',
        question: 'Which philosopher taught Alexander the Great?',
        options: ['Socrates', 'Plato', 'Aristotle', 'Epicurus'],
        correct: 'Aristotle',
        explanation: 'Aristotle was hired by Philip II to tutor his son Alexander.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'anc_hard_1',
        question: 'What was the significance of the Battle of Actium (31 BCE)?',
        options: ['End of Roman Republic', 'Fall of Greece', 'Beginning of Christianity', 'End of Egypt'],
        correct: 'End of Roman Republic',
        explanation: 'This naval battle effectively ended the Roman Republic and led to imperial rule.',
        difficulty: 'hard'
      },
      {
        id: 'anc_hard_2',
        question: 'What was the relationship between the Minoans and Mycenaeans?',
        options: ['No relationship', 'Mycenaeans conquered Minoans', 'Minoans conquered Mycenaeans', 'Peaceful coexistence'],
        correct: 'Mycenaeans conquered Minoans',
        explanation: 'Evidence suggests Mycenaeans eventually dominated and absorbed Minoan civilization.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade11_world_wars',
    name: 'Grade 11: World Wars Era',
    description: 'First and Second World Wars and their global impact',
    questions: [
      // Easy Questions
      {
        id: 'g11_ww_easy_1',
        question: 'When did World War I begin?',
        options: ['1905', '1914', '1919', '1939'],
        correct: '1914',
        explanation: 'World War I began in 1914 with the assassination of Archduke Franz Ferdinand.',
        difficulty: 'easy'
      },
      {
        id: 'g11_ww_easy_2',
        question: 'Who was the leader of Nazi Germany during World War II?',
        options: ['Mussolini', 'Stalin', 'Churchill', 'Hitler'],
        correct: 'Hitler',
        explanation: 'Adolf Hitler was the leader of Nazi Germany from 1933 to 1945.',
        difficulty: 'easy'
      },
      {
        id: 'g11_ww_easy_3',
        question: 'What event directly triggered World War I?',
        options: ['Stock market crash', 'Assassination of Franz Ferdinand', 'Treaty of Versailles', 'Russian Revolution'],
        correct: 'Assassination of Franz Ferdinand',
        explanation: 'The assassination of Archduke Franz Ferdinand in Sarajevo triggered a chain of events leading to war.',
        difficulty: 'easy'
      },
      {
        id: 'g11_ww_easy_4',
        question: 'When did World War II end in Europe?',
        options: ['1943', '1945', '1947', '1950'],
        correct: '1945',
        explanation: 'World War II ended in Europe on May 8, 1945, known as V-E Day.',
        difficulty: 'easy'
      },
      {
        id: 'g11_ww_easy_5',
        question: 'What was the Holocaust?',
        options: ['Military operation', 'Genocide of Jews', 'Peace treaty', 'Economic plan'],
        correct: 'Genocide of Jews',
        explanation: 'The Holocaust was the systematic persecution and genocide of six million Jews by Nazi Germany.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_ww_med_1',
        question: 'What was the significance of the Battle of the Somme?',
        options: ['Quick victory', 'Naval battle', 'One of the bloodiest battles', 'Air combat'],
        correct: 'One of the bloodiest battles',
        explanation: 'The Battle of the Somme was one of the bloodiest battles in history with over one million casualties.',
        difficulty: 'medium'
      },
      {
        id: 'g11_ww_med_2',
        question: 'What was the Manhattan Project?',
        options: ['Rebuilding Europe', 'Developing atomic bomb', 'Intelligence operation', 'Defensive alliance'],
        correct: 'Developing atomic bomb',
        explanation: 'The Manhattan Project was a research program that developed the first nuclear weapons.',
        difficulty: 'medium'
      },
      {
        id: 'g11_ww_med_3',
        question: 'What was the significance of the Treaty of Versailles?',
        options: ['Started WWI', 'Ended WWI', 'Started WWII', 'Ended WWII'],
        correct: 'Ended WWI',
        explanation: 'The Treaty of Versailles formally ended World War I but also set conditions that contributed to WWII.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_ww_hard_1',
        question: 'How did the Schlieffen Plan contribute to WWI?',
        options: ['It succeeded completely', 'It failed completely', 'Partial success widened the conflict', 'It was never implemented'],
        correct: 'Partial success widened the conflict',
        explanation: 'The plan\'s partial success but ultimate failure led to a wider European conflict.',
        difficulty: 'hard'
      },
      {
        id: 'g11_ww_hard_2',
        question: 'What was the significance of the Battle of Midway?',
        options: ['Minor skirmish', 'Turning point in Pacific War', 'European battle', 'Start of US involvement'],
        correct: 'Turning point in Pacific War',
        explanation: 'The Battle of Midway was a decisive naval battle that marked a turning point in the Pacific War.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade12_contemporary_history',
    name: 'Grade 12: Contemporary World History',
    description: 'Post-WWII era, Cold War, and globalization',
    questions: [
      // Easy Questions
      {
        id: 'g12_cont_easy_1',
        question: 'What was the Cold War?',
        options: ['Armed conflict', 'Tension between superpowers', 'Trade agreement', 'Winter campaign'],
        correct: 'Tension between superpowers',
        explanation: 'The Cold War was a period of geopolitical tension between the US and Soviet Union.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cont_easy_2',
        question: 'What event symbolized the end of the Cold War?',
        options: ['Moon landing', 'Vietnam War', 'Fall of Berlin Wall', 'Cuban Missile Crisis'],
        correct: 'Fall of Berlin Wall',
        explanation: 'The fall of the Berlin Wall in 1989 symbolized the end of the Cold War.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cont_easy_3',
        question: 'When did the Soviet Union dissolve?',
        options: ['1985', '1989', '1991', '1995'],
        correct: '1991',
        explanation: 'The Soviet Union officially dissolved in December 1991.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cont_easy_4',
        question: 'What was apartheid?',
        options: ['Economic system', 'Cultural movement', 'Racial segregation', 'Religious practice'],
        correct: 'Racial segregation',
        explanation: 'Apartheid was a system of institutionalized racial segregation in South Africa.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cont_easy_5',
        question: 'What major event happened on September 11, 2001?',
        options: ['Economic crash', 'Terrorist attacks', 'Peace treaty', 'Olympic Games'],
        correct: 'Terrorist attacks',
        explanation: 'Terrorist attacks against the United States killed nearly 3,000 people.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_cont_med_1',
        question: 'What was the purpose of the Marshall Plan?',
        options: ['Military strategy', 'Rebuild Western Europe', 'Space program', 'Contain communism'],
        correct: 'Rebuild Western Europe',
        explanation: 'The Marshall Plan provided economic assistance to help rebuild Western Europe after WWII.',
        difficulty: 'medium'
      },
      {
        id: 'g12_cont_med_2',
        question: 'What was the significance of the Cuban Missile Crisis?',
        options: ['Trade dispute', 'Closest approach to nuclear war', 'Communist revolution', 'Naval battle'],
        correct: 'Closest approach to nuclear war',
        explanation: 'The Cuban Missile Crisis brought the world to the brink of nuclear war.',
        difficulty: 'medium'
      },
      {
        id: 'g12_cont_med_3',
        question: 'What was the purpose of the European Union?',
        options: ['Military alliance', 'Economic and political integration', 'Cultural exchange', 'Currency only'],
        correct: 'Economic and political integration',
        explanation: 'The EU was formed to promote economic and political integration in Europe.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_cont_hard_1',
        question: 'How did the policy of détente affect the Cold War?',
        options: ['Intensified conflict', 'Eased tensions temporarily', 'Ended Cold War', 'No effect'],
        correct: 'Eased tensions temporarily',
        explanation: 'Détente was a period of reduced tension between the superpowers in the 1970s.',
        difficulty: 'hard'
      },
      {
        id: 'g12_cont_hard_2',
        question: 'What factors contributed to the Arab Spring?',
        options: ['Foreign invasion', 'Multiple socioeconomic and political factors', 'Single leader', 'Religious conflict only'],
        correct: 'Multiple socioeconomic and political factors',
        explanation: 'The Arab Spring was driven by various factors including authoritarianism, corruption, economic stagnation, and social media.',
        difficulty: 'hard'
      }
    ]
  }
];
