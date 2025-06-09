import { Chapter } from '../types';

export const englishChapters: Chapter[] = [
  {
    id: 'grammar_basics',
    name: 'Grammar Basics',
    description: 'Fundamental English grammar rules and usage',
    questions: [
      // Easy Questions
      {
        id: 'grammar_1',
        question: 'Which of these is a noun?',
        options: ['Run', 'Cat', 'Quickly', 'And'],
        correct: 'Cat',
        explanation: 'A noun is a word that represents a person, place, thing, or idea.',
        difficulty: 'easy'
      },
      {
        id: 'grammar_2',
        question: 'Which of these is a verb?',
        options: ['House', 'Jump', 'Blue', 'The'],
        correct: 'Jump',
        explanation: 'A verb is a word that represents an action or state of being.',
        difficulty: 'easy'
      },
      {
        id: 'grammar_3',
        question: 'Which of these is an adjective?',
        options: ['Slowly', 'Car', 'Happy', 'But'],
        correct: 'Happy',
        explanation: 'An adjective is a word that describes a noun.',
        difficulty: 'easy'
      },
      {
        id: 'grammar_4',
        question: 'Which sentence is grammatically correct?',
        options: ['I is going to the store.', 'Me going to the store.', 'I am going to the store.', 'Going to the store I am.'],
        correct: 'I am going to the store.',
        explanation: 'The correct sentence follows subject-verb agreement and proper word order.',
        difficulty: 'easy'
      },
      {
        id: 'grammar_5',
        question: 'What is the plural of "child"?',
        options: ['Childs', 'Childes', 'Children', 'Childre'],
        correct: 'Children',
        explanation: 'The plural of "child" is an irregular form, which is "children."',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'grammar_med_1',
        question: 'Identify the preposition in the sentence: "The book is on the table."',
        options: ['The', 'Book', 'Is', 'On'],
        correct: 'On',
        explanation: 'A preposition shows the relationship between a noun or pronoun and other words in the sentence.',
        difficulty: 'medium'
      },
      {
        id: 'grammar_med_2',
        question: 'Which sentence uses the correct form of "there," "their," or "they\'re"?',
        options: ['There going to the park.', 'Their going to the park.', 'They\'re going to the park.', 'Theyre going to the park.'],
        correct: 'They\'re going to the park.',
        explanation: '"They\'re" is a contraction of "they are."',
        difficulty: 'medium'
      },
      {
        id: 'grammar_med_3',
        question: 'Which sentence uses the correct tense?',
        options: ['I will went to the store.', 'I goed to the store.', 'I gone to the store.', 'I went to the store.'],
        correct: 'I went to the store.',
        explanation: '"Went" is the past tense form of "go."',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'grammar_hard_1',
        question: 'Identify the type of clause: "Because it was raining, we stayed inside."',
        options: ['Independent clause', 'Dependent clause', 'Noun clause', 'Adjective clause'],
        correct: 'Dependent clause',
        explanation: 'A dependent clause cannot stand alone as a sentence and begins with a subordinating conjunction.',
        difficulty: 'hard'
      },
      {
        id: 'grammar_hard_2',
        question: 'Which sentence uses the subjunctive mood correctly?',
        options: ['If I was you, I would go.', 'If I were you, I would go.', 'If I am you, I will go.', 'If I be you, I shall go.'],
        correct: 'If I were you, I would go.',
        explanation: 'The subjunctive mood is used to express hypothetical or unreal conditions.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_poetry_analysis',
    name: 'Grade 11: Poetry and Literary Devices',
    description: 'Understanding poetic forms, devices, and interpretation',
    questions: [
      // Easy Questions
      {
        id: 'poetry_1',
        question: 'What is a stanza in poetry?',
        options: ['A line', 'A group of lines', 'The title', 'The author'],
        correct: 'A group of lines',
        explanation: 'A stanza is a group of lines forming a unit in a poem, similar to a paragraph in prose.',
        difficulty: 'easy'
      },
      {
        id: 'poetry_2',
        question: 'What is rhyme?',
        options: ['Repetition of sounds', 'Similarity of word endings', 'Length of a line', 'Type of poem'],
        correct: 'Similarity of word endings',
        explanation: 'Rhyme is the similarity of sounds between words, especially at the end of lines in poetry.',
        difficulty: 'easy'
      },
      {
        id: 'poetry_3',
        question: 'What is a metaphor?',
        options: ['Direct comparison', 'Implied comparison', 'Exaggeration', 'Understatement'],
        correct: 'Implied comparison',
        explanation: 'A metaphor is an implied comparison between two unlike things without using "like" or "as."',
        difficulty: 'easy'
      },
      {
        id: 'poetry_4',
        question: 'What is a simile?',
        options: ['Direct comparison using like or as', 'Indirect comparison', 'Repetition of words', 'Sound device'],
        correct: 'Direct comparison using like or as',
        explanation: 'A simile is a direct comparison between two unlike things using "like" or "as."',
        difficulty: 'easy'
      },
      {
        id: 'poetry_5',
        question: 'What is alliteration?',
        options: ['Repetition of vowel sounds', 'Repetition of consonant sounds', 'Rhyme scheme', 'Poem structure'],
        correct: 'Repetition of consonant sounds',
        explanation: 'Alliteration is the repetition of consonant sounds at the beginning of words in a line.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'poetry_med_1',
        question: 'What is personification?',
        options: ['Giving human traits to animals', 'Giving human traits to inanimate objects', 'Describing a person', 'Comparing people'],
        correct: 'Giving human traits to inanimate objects',
        explanation: 'Personification is giving human qualities to non-human things.',
        difficulty: 'medium'
      },
      {
        id: 'poetry_med_2',
        question: 'What is imagery?',
        options: ['Visual description', 'Language appealing to senses', 'Rhyme pattern', 'Poem theme'],
        correct: 'Language appealing to senses',
        explanation: 'Imagery is language that appeals to the five senses to create a vivid picture.',
        difficulty: 'medium'
      },
      {
        id: 'poetry_med_3',
        question: 'What is the difference between a sonnet and a haiku?',
        options: ['No difference', 'Sonnet: 14 lines, Haiku: 3 lines', 'Only rhyme differs', 'Only topic differs'],
        correct: 'Sonnet: 14 lines, Haiku: 3 lines',
        explanation: 'A sonnet has 14 lines with a specific rhyme scheme; a haiku has 3 lines with a 5-7-5 syllable structure.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'poetry_hard_1',
        question: 'What is enjambment?',
        options: ['End of a line', 'Continuation of sentence without pause beyond line', 'Rhyme scheme type', 'Stanza length'],
        correct: 'Continuation of sentence without pause beyond line',
        explanation: 'Enjambment is the continuation of a sentence or phrase from one line of poetry to the next without a pause.',
        difficulty: 'hard'
      },
      {
        id: 'poetry_hard_2',
        question: 'What is the difference between denotation and connotation?',
        options: ['No difference', 'Denotation: literal meaning, Connotation: implied meaning', 'Only sound differs', 'Only length differs'],
        correct: 'Denotation: literal meaning, Connotation: implied meaning',
        explanation: 'Denotation is the literal or dictionary meaning; connotation is the emotional or cultural association.',
        difficulty: 'hard'
      }
    ]
  },

  // Grade 12 New Curriculum Units
  {
    id: 'grade12_sustainable_development',
    name: 'Grade 12: Sustainable Development',
    description: 'Understanding sustainable development concepts and environmental responsibility',
    questions: [
      // Easy Questions
      {
        id: 'sustainable_dev_1',
        question: 'What does "sustainable development" mean?',
        options: ['Fast economic growth', 'Development that meets present needs without compromising future generations', 'Only environmental protection', 'Unlimited resource use'],
        correct: 'Development that meets present needs without compromising future generations',
        explanation: 'Sustainable development balances economic, social, and environmental needs for current and future generations.',
        difficulty: 'easy'
      },
      {
        id: 'sustainable_dev_2',
        question: 'Which of these is a renewable resource?',
        options: ['Coal', 'Oil', 'Solar energy', 'Natural gas'],
        correct: 'Solar energy',
        explanation: 'Solar energy is renewable because it comes from the sun, which is a continuous source.',
        difficulty: 'easy'
      },
      {
        id: 'sustainable_dev_3',
        question: 'What are the three pillars of sustainability?',
        options: ['Past, present, future', 'Economic, social, environmental', 'Land, water, air', 'Local, national, global'],
        correct: 'Economic, social, environmental',
        explanation: 'The three pillars of sustainability are economic viability, social equity, and environmental protection.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'sustainable_dev_med_1',
        question: 'What is the main goal of the UN Sustainable Development Goals (SDGs)?',
        options: ['Economic growth only', 'End poverty and protect the planet by 2030', 'Increase population', 'Expand cities'],
        correct: 'End poverty and protect the planet by 2030',
        explanation: 'The SDGs aim to end poverty, protect the planet, and ensure prosperity for all by 2030.',
        difficulty: 'medium'
      },
      {
        id: 'sustainable_dev_med_2',
        question: 'What is "greenwashing"?',
        options: ['Cleaning with green products', 'Misleading claims about environmental benefits', 'Planting trees', 'Using renewable energy'],
        correct: 'Misleading claims about environmental benefits',
        explanation: 'Greenwashing is when companies make false or misleading claims about their environmental practices.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'sustainable_dev_hard_1',
        question: 'How does climate change impact sustainable development?',
        options: ['No impact', 'Threatens achievement of development goals', 'Only affects weather', 'Helps development'],
        correct: 'Threatens achievement of development goals',
        explanation: 'Climate change poses significant challenges to achieving sustainable development by affecting resources, health, and economic stability.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_time_management',
    name: 'Grade 12: Time Management',
    description: 'Effective time management strategies and productivity techniques',
    questions: [
      // Easy Questions
      {
        id: 'time_mgmt_1',
        question: 'What is time management?',
        options: ['Watching the clock', 'Planning and controlling time spent on activities', 'Working longer hours', 'Avoiding deadlines'],
        correct: 'Planning and controlling time spent on activities',
        explanation: 'Time management involves organizing and planning how to divide time between specific activities.',
        difficulty: 'easy'
      },
      {
        id: 'time_mgmt_2',
        question: 'Which tool is commonly used for time management?',
        options: ['Calculator', 'Calendar or planner', 'Dictionary', 'Map'],
        correct: 'Calendar or planner',
        explanation: 'Calendars and planners help organize tasks and schedule activities effectively.',
        difficulty: 'easy'
      },
      {
        id: 'time_mgmt_3',
        question: 'What does "prioritizing" mean in time management?',
        options: ['Doing everything at once', 'Ranking tasks by importance', 'Avoiding difficult tasks', 'Working randomly'],
        correct: 'Ranking tasks by importance',
        explanation: 'Prioritizing involves determining which tasks are most important and should be done first.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'time_mgmt_med_1',
        question: 'What is the "Pomodoro Technique"?',
        options: ['Cooking method', 'Work in 25-minute focused intervals', 'Exercise routine', 'Study method using tomatoes'],
        correct: 'Work in 25-minute focused intervals',
        explanation: 'The Pomodoro Technique involves working for 25 minutes, then taking a short break.',
        difficulty: 'medium'
      },
      {
        id: 'time_mgmt_med_2',
        question: 'What is procrastination?',
        options: ['Working efficiently', 'Delaying or postponing tasks', 'Completing tasks early', 'Managing time well'],
        correct: 'Delaying or postponing tasks',
        explanation: 'Procrastination is the act of delaying or postponing tasks or actions.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'time_mgmt_hard_1',
        question: 'What is the difference between urgent and important tasks?',
        options: ['No difference', 'Urgent needs immediate attention; important contributes to long-term goals', 'Only deadline matters', 'Same priority level'],
        correct: 'Urgent needs immediate attention; important contributes to long-term goals',
        explanation: 'Urgent tasks require immediate attention, while important tasks contribute to long-term objectives and values.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_traffic_accident_evidence',
    name: 'Grade 12: Evidence on Traffic Accident',
    description: 'Understanding traffic safety, accident investigation, and evidence analysis',
    questions: [
      // Easy Questions
      {
        id: 'traffic_evidence_1',
        question: 'What is evidence in a traffic accident investigation?',
        options: ['Personal opinions', 'Facts that help determine what happened', 'Random guesses', 'Insurance claims'],
        correct: 'Facts that help determine what happened',
        explanation: 'Evidence consists of facts, information, and objects that help investigators understand how an accident occurred.',
        difficulty: 'easy'
      },
      {
        id: 'traffic_evidence_2',
        question: 'Which of these is physical evidence at an accident scene?',
        options: ['Witness testimony', 'Skid marks', 'Police report', 'Insurance policy'],
        correct: 'Skid marks',
        explanation: 'Skid marks are physical evidence that can show vehicle speed, direction, and braking patterns.',
        difficulty: 'easy'
      },
      {
        id: 'traffic_evidence_3',
        question: 'Why is it important to document accident scenes quickly?',
        options: ['To blame someone', 'Evidence can be lost or changed', 'For insurance money', 'To clear traffic'],
        correct: 'Evidence can be lost or changed',
        explanation: 'Quick documentation preserves evidence before it can be disturbed by weather, traffic, or other factors.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'traffic_evidence_med_1',
        question: 'What can tire marks tell investigators?',
        options: ['Vehicle color', 'Speed, direction, and braking', 'Driver age', 'Insurance status'],
        correct: 'Speed, direction, and braking',
        explanation: 'Tire marks provide valuable information about vehicle dynamics during the accident.',
        difficulty: 'medium'
      },
      {
        id: 'traffic_evidence_med_2',
        question: 'What is a witness statement?',
        options: ['Legal document', 'Account of what someone saw or heard', 'Police report', 'Insurance claim'],
        correct: 'Account of what someone saw or heard',
        explanation: 'A witness statement is a person\'s account of what they observed during or around the accident.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'traffic_evidence_hard_1',
        question: 'How can investigators determine vehicle speed from evidence?',
        options: ['Ask the driver', 'Analyze skid marks, damage patterns, and physics', 'Check speedometer', 'Estimate randomly'],
        correct: 'Analyze skid marks, damage patterns, and physics',
        explanation: 'Speed can be calculated using physics formulas applied to skid marks, damage severity, and other physical evidence.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_natural_resource_management',
    name: 'Grade 12: Natural Resource Management',
    description: 'Conservation and sustainable use of natural resources',
    questions: [
      // Easy Questions
      {
        id: 'natural_resource_1',
        question: 'What are natural resources?',
        options: ['Man-made materials', 'Materials from nature used by humans', 'Only minerals', 'Only water'],
        correct: 'Materials from nature used by humans',
        explanation: 'Natural resources are materials or substances occurring in nature that can be exploited for economic gain.',
        difficulty: 'easy'
      },
      {
        id: 'natural_resource_2',
        question: 'Which is an example of a non-renewable resource?',
        options: ['Wind', 'Coal', 'Solar energy', 'Trees'],
        correct: 'Coal',
        explanation: 'Coal is non-renewable because it takes millions of years to form and cannot be quickly replaced.',
        difficulty: 'easy'
      },
      {
        id: 'natural_resource_3',
        question: 'What is conservation?',
        options: ['Using all resources quickly', 'Protecting and preserving resources', 'Ignoring resources', 'Selling resources'],
        correct: 'Protecting and preserving resources',
        explanation: 'Conservation involves protecting and preserving natural resources for future use.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'natural_resource_med_1',
        question: 'What is sustainable harvesting?',
        options: ['Taking all available resources', 'Using resources at a rate that allows regeneration', 'Avoiding all resource use', 'Random extraction'],
        correct: 'Using resources at a rate that allows regeneration',
        explanation: 'Sustainable harvesting means using resources at a rate that allows them to naturally replenish.',
        difficulty: 'medium'
      },
      {
        id: 'natural_resource_med_2',
        question: 'What is biodiversity?',
        options: ['Single species', 'Variety of life forms in an ecosystem', 'Only plant life', 'Only animal life'],
        correct: 'Variety of life forms in an ecosystem',
        explanation: 'Biodiversity refers to the variety of plant and animal life in a particular habitat.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'natural_resource_hard_1',
        question: 'How does deforestation affect natural resource management?',
        options: ['No effect', 'Reduces biodiversity and affects water cycles', 'Only affects trees', 'Improves management'],
        correct: 'Reduces biodiversity and affects water cycles',
        explanation: 'Deforestation impacts multiple resources by reducing biodiversity, affecting water cycles, and contributing to climate change.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_mechanized_agriculture',
    name: 'Grade 12: Mechanized Agriculture',
    description: 'Modern farming techniques and agricultural technology',
    questions: [
      // Easy Questions
      {
        id: 'mech_agriculture_1',
        question: 'What is mechanized agriculture?',
        options: ['Manual farming', 'Using machines and technology in farming', 'Only growing vegetables', 'Traditional farming'],
        correct: 'Using machines and technology in farming',
        explanation: 'Mechanized agriculture involves using machinery and technology to improve farming efficiency.',
        difficulty: 'easy'
      },
      {
        id: 'mech_agriculture_2',
        question: 'Which machine is commonly used for harvesting crops?',
        options: ['Washing machine', 'Combine harvester', 'Sewing machine', 'Copy machine'],
        correct: 'Combine harvester',
        explanation: 'A combine harvester is a machine that efficiently harvests grain crops.',
        difficulty: 'easy'
      },
      {
        id: 'mech_agriculture_3',
        question: 'What is an advantage of mechanized farming?',
        options: ['More manual labor needed', 'Increased efficiency and productivity', 'Higher costs only', 'Slower production'],
        correct: 'Increased efficiency and productivity',
        explanation: 'Mechanized farming increases efficiency, productivity, and can reduce labor costs.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'mech_agriculture_med_1',
        question: 'What is precision agriculture?',
        options: ['Exact measurements only', 'Using technology to optimize crop production', 'Manual precision', 'Guessing techniques'],
        correct: 'Using technology to optimize crop production',
        explanation: 'Precision agriculture uses GPS, sensors, and data analysis to optimize farming practices.',
        difficulty: 'medium'
      },
      {
        id: 'mech_agriculture_med_2',
        question: 'What role do GPS systems play in modern farming?',
        options: ['Entertainment', 'Precise field mapping and navigation', 'Communication only', 'Weather prediction'],
        correct: 'Precise field mapping and navigation',
        explanation: 'GPS systems help farmers map fields precisely and guide machinery for efficient operations.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'mech_agriculture_hard_1',
        question: 'How can mechanized agriculture impact employment in rural areas?',
        options: ['No impact', 'May reduce manual labor jobs but create technical jobs', 'Only increases jobs', 'Only decreases jobs'],
        correct: 'May reduce manual labor jobs but create technical jobs',
        explanation: 'Mechanization can displace manual labor while creating opportunities for technical and maintenance jobs.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_green_economies',
    name: 'Grade 12: Green Economies',
    description: 'Understanding environmentally sustainable economic systems',
    questions: [
      // Easy Questions
      {
        id: 'green_economy_1',
        question: 'What is a green economy?',
        options: ['Economy focused only on money', 'Economic system that reduces environmental risks', 'Only agricultural economy', 'Traditional economy'],
        correct: 'Economic system that reduces environmental risks',
        explanation: 'A green economy aims for sustainable development while reducing environmental risks and resource scarcity.',
        difficulty: 'easy'
      },
      {
        id: 'green_economy_2',
        question: 'Which industry is part of the green economy?',
        options: ['Coal mining', 'Renewable energy', 'Oil drilling', 'Deforestation'],
        correct: 'Renewable energy',
        explanation: 'Renewable energy industries like solar and wind power are key components of green economies.',
        difficulty: 'easy'
      },
      {
        id: 'green_economy_3',
        question: 'What are green jobs?',
        options: ['Jobs in parks only', 'Employment that contributes to environmental sustainability', 'Jobs with green uniforms', 'Agricultural jobs only'],
        correct: 'Employment that contributes to environmental sustainability',
        explanation: 'Green jobs are positions that contribute to preserving or restoring environmental quality.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'green_economy_med_1',
        question: 'What is the circular economy model?',
        options: ['Round businesses', 'Economic system that eliminates waste through reuse and recycling', 'Circular money flow', 'Geographic arrangement'],
        correct: 'Economic system that eliminates waste through reuse and recycling',
        explanation: 'The circular economy aims to eliminate waste by keeping products and materials in use.',
        difficulty: 'medium'
      },
      {
        id: 'green_economy_med_2',
        question: 'How do carbon taxes work in a green economy?',
        options: ['Tax on all carbon products', 'Tax on carbon emissions to discourage pollution', 'Tax on carbon paper', 'No relation to economy'],
        correct: 'Tax on carbon emissions to discourage pollution',
        explanation: 'Carbon taxes put a price on greenhouse gas emissions to encourage cleaner alternatives.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'green_economy_hard_1',
        question: 'What challenges exist in transitioning to a green economy?',
        options: ['No challenges', 'High initial costs, job displacement, and technological barriers', 'Only benefits exist', 'Too expensive for doctors'],
        correct: 'High initial costs, job displacement, and technological barriers',
        explanation: 'Green economy transitions face challenges including investment costs, workforce transitions, and technological development needs.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_national_pride',
    name: 'Grade 12: National Pride',
    description: 'Understanding patriotism, national identity, and civic responsibility',
    questions: [
      // Easy Questions
      {
        id: 'national_pride_1',
        question: 'What is national pride?',
        options: ['Disliking other countries', 'Love and respect for one\'s country', 'Only celebrating holidays', 'Ignoring problems'],
        correct: 'Love and respect for one\'s country',
        explanation: 'National pride involves love, devotion, and respect for one\'s country and its values.',
        difficulty: 'easy'
      },
      {
        id: 'national_pride_2',
        question: 'How can citizens show national pride?',
        options: ['Criticizing everything', 'Participating in civic duties and respecting symbols', 'Avoiding responsibility', 'Only during holidays'],
        correct: 'Participating in civic duties and respecting symbols',
        explanation: 'Citizens show pride through civic participation, respecting national symbols, and contributing to society.',
        difficulty: 'easy'
      },
      {
        id: 'national_pride_3',
        question: 'What is a national symbol?',
        options: ['Mathematical symbol', 'Object representing national identity', 'Only the flag', 'Foreign symbol'],
        correct: 'Object representing national identity',
        explanation: 'National symbols like flags, anthems, and emblems represent a country\'s identity and values.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'national_pride_med_1',
        question: 'What is the difference between patriotism and nationalism?',
        options: ['No difference', 'Patriotism loves country; nationalism may exclude others', 'Only spelling differs', 'Same meaning'],
        correct: 'Patriotism loves country; nationalism may exclude others',
        explanation: 'Patriotism is love for one\'s country, while extreme nationalism can lead to exclusion or hostility toward others.',
        difficulty: 'medium'
      },
      {
        id: 'national_pride_med_2',
        question: 'How can education promote national pride?',
        options: ['Ignoring history', 'Teaching national history, values, and achievements', 'Only foreign subjects', 'Avoiding national topics'],
        correct: 'Teaching national history, values, and achievements',
        explanation: 'Education promotes pride by teaching students about their country\'s history, culture, and contributions.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'national_pride_hard_1',
        question: 'How can healthy national pride coexist with global citizenship?',
        options: ['Cannot coexist', 'Pride in one\'s country while respecting and cooperating with others', 'Only nationalism matters', 'Only globalism matters'],
        correct: 'Pride in one\'s country while respecting and cooperating with others',
        explanation: 'Healthy national pride can coexist with global citizenship through respect for diversity and international cooperation.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_telemedicine',
    name: 'Grade 12: Telemedicine',
    description: 'Remote healthcare delivery using technology',
    questions: [
      // Easy Questions
      {
        id: 'telemedicine_1',
        question: 'What is telemedicine?',
        options: ['Television medicine', 'Healthcare provided remotely using technology', 'Only telephone calls', 'Medicine for phones'],
        correct: 'Healthcare provided remotely using technology',
        explanation: 'Telemedicine uses technology to provide healthcare services from a distance.',
        difficulty: 'easy'
      },
      {
        id: 'telemedicine_2',
        question: 'Which technology is commonly used in telemedicine?',
        options: ['Video calling', 'Radio only', 'Telegraph', 'Smoke signals'],
        correct: 'Video calling',
        explanation: 'Video calling allows doctors and patients to see and talk to each other remotely.',
        difficulty: 'easy'
      },
      {
        id: 'telemedicine_3',
        question: 'What is an advantage of telemedicine?',
        options: ['More expensive', 'Access to healthcare in remote areas', 'Less convenient', 'Only for emergencies'],
        correct: 'Access to healthcare in remote areas',
        explanation: 'Telemedicine provides healthcare access to people in remote or underserved areas.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'telemedicine_med_1',
        question: 'What equipment might a patient need for a telemedicine consultation?',
        options: ['Surgical tools', 'Computer or smartphone with camera', 'X-ray machine', 'Hospital bed'],
        correct: 'Computer or smartphone with camera',
        explanation: 'Patients typically need a device with camera and internet connection for video consultations.',
        difficulty: 'medium'
      },
      {
        id: 'telemedicine_med_2',
        question: 'What is remote patient monitoring?',
        options: ['Watching patients sleep', 'Using devices to track patient health data from distance', 'Following patients around', 'Only hospital monitoring'],
        correct: 'Using devices to track patient health data from distance',
        explanation: 'Remote monitoring uses devices to collect and transmit patient health data to healthcare providers.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'telemedicine_hard_1',
        question: 'What are the challenges of implementing telemedicine in developing countries?',
        options: ['No challenges', 'Limited internet, technology access, and training', 'Only benefits exist', 'Too expensive for doctors'],
        correct: 'Limited internet, technology access, and training',
        explanation: 'Challenges include inadequate internet infrastructure, limited access to technology, and need for training.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_conflict_management',
    name: 'Grade 12: Conflict Management',
    description: 'Strategies for resolving and managing conflicts peacefully',
    questions: [
      // Easy Questions
      {
        id: 'conflict_mgmt_1',
        question: 'What is conflict?',
        options: ['Agreement between parties', 'Disagreement or clash between parties', 'Only physical fights', 'Peaceful discussion'],
        correct: 'Disagreement or clash between parties',
        explanation: 'Conflict occurs when there is a disagreement or clash of interests between individuals or groups.',
        difficulty: 'easy'
      },
      {
        id: 'conflict_mgmt_2',
        question: 'What is mediation?',
        options: ['Taking sides', 'Neutral third party helping resolve conflict', 'Avoiding conflict', 'Making decisions for others'],
        correct: 'Neutral third party helping resolve conflict',
        explanation: 'Mediation involves a neutral person helping conflicting parties reach a mutually acceptable solution.',
        difficulty: 'easy'
      },
      {
        id: 'conflict_mgmt_3',
        question: 'Which is a peaceful way to resolve conflict?',
        options: ['Violence', 'Negotiation and dialogue', 'Ignoring the problem', 'Escalating tensions'],
        correct: 'Negotiation and dialogue',
        explanation: 'Negotiation and dialogue allow parties to discuss issues and find mutually acceptable solutions.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'conflict_mgmt_med_1',
        question: 'What are the stages of conflict escalation?',
        options: ['Only one stage', 'Latent, emergence, escalation, de-escalation', 'Beginning and end only', 'No stages exist'],
        correct: 'Latent, emergence, escalation, de-escalation',
        explanation: 'Conflicts typically progress through identifiable stages from latent tensions to potential resolution.',
        difficulty: 'medium'
      },
      {
        id: 'conflict_mgmt_med_2',
        question: 'What is active listening in conflict resolution?',
        options: ['Interrupting frequently', 'Fully concentrating and understanding the speaker', 'Preparing counter-arguments', 'Ignoring emotions'],
        correct: 'Fully concentrating and understanding the speaker',
        explanation: 'Active listening involves giving full attention to understand the speaker\'s perspective and feelings.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'conflict_mgmt_hard_1',
        question: 'How can cultural differences impact conflict resolution?',
        options: ['No impact', 'Different communication styles and values affect resolution approaches', 'Only language matters', 'Culture is irrelevant'],
        correct: 'Different communication styles and values affect resolution approaches',
        explanation: 'Cultural backgrounds influence communication patterns, values, and preferred conflict resolution methods.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_robotics',
    name: 'Grade 12: Robotics',
    description: 'Introduction to robotics technology and applications',
    questions: [
      // Easy Questions
      {
        id: 'robotics_1',
        question: 'What is a robot?',
        options: ['Only humanoid machines', 'Programmable machine that can perform tasks', 'Any electronic device', 'Only toys'],
        correct: 'Programmable machine that can perform tasks',
        explanation: 'A robot is a programmable machine designed to automatically perform tasks or assist humans.',
        difficulty: 'easy'
      },
      {
        id: 'robotics_2',
        question: 'Which field commonly uses robots?',
        options: ['Manufacturing', 'Only space exploration', 'Only entertainment', 'Only research'],
        correct: 'Manufacturing',
        explanation: 'Manufacturing is one of the most common applications of robotics for assembly and production.',
        difficulty: 'easy'
      },
      {
        id: 'robotics_3',
        question: 'What makes a robot different from other machines?',
        options: ['Only size', 'Ability to be programmed and make decisions', 'Only appearance', 'Only cost'],
        correct: 'Ability to be programmed and make decisions',
        explanation: 'Robots can be programmed to perform various tasks and can make basic decisions based on sensors.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'robotics_med_1',
        question: 'What are the main components of a robot?',
        options: ['Only motors', 'Sensors, actuators, and control system', 'Only computers', 'Only wheels'],
        correct: 'Sensors, actuators, and control system',
        explanation: 'Robots typically consist of sensors (input), actuators (movement), and control systems (processing).',
        difficulty: 'medium'
      },
      {
        id: 'robotics_med_2',
        question: 'What is artificial intelligence in robotics?',
        options: ['Fake intelligence', 'Computer systems that can perform tasks requiring human-like intelligence', 'Only speech recognition', 'Only movement'],
        correct: 'Computer systems that can perform tasks requiring human-like intelligence',
        explanation: 'AI in robotics enables machines to perform tasks that typically require human intelligence.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'robotics_hard_1',
        question: 'What ethical considerations arise with advanced robotics?',
        options: ['No ethical issues', 'Job displacement, privacy, and decision-making responsibility', 'Only technical issues', 'Only cost concerns'],
        correct: 'Job displacement, privacy, and decision-making responsibility',
        explanation: 'Advanced robotics raises questions about employment, privacy, autonomous decision-making, and social impact.',
        difficulty: 'hard'
      }
    ]
  }
];
