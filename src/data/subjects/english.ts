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

  {
    id: 'grade12_advanced_writing',
    name: 'Grade 12: Advanced Writing and Rhetoric',
    description: 'Argumentative writing, research skills, and rhetorical analysis',
    questions: [
      // Easy Questions
      {
        id: 'g12_writing_easy_1',
        question: 'What is a thesis statement?',
        options: ['Topic sentence', 'Main argument of essay', 'Conclusion', 'Supporting detail'],
        correct: 'Main argument of essay',
        explanation: 'A thesis statement presents the main argument or claim of an essay.',
        difficulty: 'easy'
      },
      {
        id: 'g12_writing_easy_2',
        question: 'What is the purpose of a topic sentence?',
        options: ['End paragraph', 'Introduce paragraph\'s main idea', 'Provide evidence', 'Conclude essay'],
        correct: 'Introduce paragraph\'s main idea',
        explanation: 'A topic sentence introduces the main idea of a paragraph.',
        difficulty: 'easy'
      },
      {
        id: 'g12_writing_easy_3',
        question: 'What is a primary source?',
        options: ['Encyclopedia entry', 'Firsthand account', 'Summary article', 'Opinion piece'],
        correct: 'Firsthand account',
        explanation: 'A primary source provides direct, firsthand evidence about an event or topic.',
        difficulty: 'easy'
      },
      {
        id: 'g12_writing_easy_4',
        question: 'What is plagiarism?',
        options: ['Using your own ideas', 'Using others\' work without credit', 'Citing sources', 'Original writing'],
        correct: 'Using others\' work without credit',
        explanation: 'Plagiarism is using someone else\'s work or ideas without proper attribution.',
        difficulty: 'easy'
      },
      {
        id: 'g12_writing_easy_5',
        question: 'What is a counterargument?',
        options: ['Supporting evidence', 'Opposing viewpoint', 'Main thesis', 'Conclusion'],
        correct: 'Opposing viewpoint',
        explanation: 'A counterargument presents an opposing viewpoint to your main argument.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_writing_med_1',
        question: 'What is ethos in rhetoric?',
        options: ['Emotional appeal', 'Logical appeal', 'Credibility appeal', 'Time appeal'],
        correct: 'Credibility appeal',
        explanation: 'Ethos is a rhetorical appeal based on the credibility or character of the speaker.',
        difficulty: 'medium'
      },
      {
        id: 'g12_writing_med_2',
        question: 'What is the difference between deductive and inductive reasoning?',
        options: ['No difference', 'Deductive: general to specific; Inductive: specific to general', 'Only in science', 'Only in math'],
        correct: 'Deductive: general to specific; Inductive: specific to general',
        explanation: 'Deductive reasoning moves from general principles to specific conclusions; inductive moves from specific to general.',
        difficulty: 'medium'
      },
      {
        id: 'g12_writing_med_3',
        question: 'What is a synthesis essay?',
        options: ['Summary only', 'Combines multiple sources to support thesis', 'Personal narrative', 'Fiction writing'],
        correct: 'Combines multiple sources to support thesis',
        explanation: 'A synthesis essay combines information from multiple sources to support a thesis.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_writing_hard_1',
        question: 'What is a logical fallacy?',
        options: ['Strong argument', 'Error in reasoning', 'Supporting evidence', 'Clear thesis'],
        correct: 'Error in reasoning',
        explanation: 'A logical fallacy is an error in reasoning that undermines an argument\'s validity.',
        difficulty: 'hard'
      },
      {
        id: 'g12_writing_hard_2',
        question: 'What is the rhetorical triangle?',
        options: ['Three paragraphs', 'Ethos, pathos, logos', 'Introduction, body, conclusion', 'Thesis, evidence, analysis'],
        correct: 'Ethos, pathos, logos',
        explanation: 'The rhetorical triangle consists of ethos (credibility), pathos (emotion), and logos (logic).',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_world_literature',
    name: 'Grade 12: World Literature and Critical Theory',
    description: 'Global literary traditions, comparative analysis, and literary criticism',
    questions: [
      // Easy Questions
      {
        id: 'g12_lit_easy_1',
        question: 'What is world literature?',
        options: ['Only English literature', 'Literature from various cultures and countries', 'Only modern works', 'Only poetry'],
        correct: 'Literature from various cultures and countries',
        explanation: 'World literature encompasses literary works from diverse cultures and nations.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lit_easy_2',
        question: 'What is comparative literature?',
        options: ['Comparing lengths', 'Studying literature across cultures and languages', 'Only comparing themes', 'Ranking literature'],
        correct: 'Studying literature across cultures and languages',
        explanation: 'Comparative literature studies works from different cultures, languages, and traditions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lit_easy_3',
        question: 'What is literary criticism?',
        options: ['Finding faults only', 'Analysis and interpretation of literature', 'Rejecting literature', 'Writing summaries'],
        correct: 'Analysis and interpretation of literature',
        explanation: 'Literary criticism involves analyzing and interpreting literary works.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lit_easy_4',
        question: 'What is an archetype?',
        options: ['New invention', 'Universal pattern or character type', 'Specific author', 'Book format'],
        correct: 'Universal pattern or character type',
        explanation: 'An archetype is a universal pattern, character type, or situation that recurs across cultures.',
        difficulty: 'easy'
      },
      {
        id: 'g12_lit_easy_5',
        question: 'What is cultural context in literature?',
        options: ['Author\'s biography only', 'Social and cultural background of work', 'Publication date only', 'Book sales'],
        correct: 'Social and cultural background of work',
        explanation: 'Cultural context refers to the social, historical, and cultural circumstances surrounding a work.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_lit_med_1',
        question: 'What is postcolonial literature?',
        options: ['Literature after colonies', 'Literature responding to colonial experience', 'Only African literature', 'Historical fiction'],
        correct: 'Literature responding to colonial experience',
        explanation: 'Postcolonial literature examines the effects of colonialism and explores cultural identity.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lit_med_2',
        question: 'What is magical realism?',
        options: ['Fantasy only', 'Realistic narrative with magical elements', 'Historical fiction', 'Science fiction'],
        correct: 'Realistic narrative with magical elements',
        explanation: 'Magical realism blends realistic narrative with fantastical or magical elements.',
        difficulty: 'medium'
      },
      {
        id: 'g12_lit_med_3',
        question: 'What is feminist literary criticism?',
        options: ['Only female authors', 'Analysis of gender roles and women\'s experiences', 'Rejecting male authors', 'Romance novels only'],
        correct: 'Analysis of gender roles and women\'s experiences',
        explanation: 'Feminist criticism examines how literature portrays gender roles and women\'s experiences.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_lit_hard_1',
        question: 'What is deconstruction in literary theory?',
        options: ['Destroying books', 'Questioning fixed meanings and interpretations', 'Building plots', 'Writing summaries'],
        correct: 'Questioning fixed meanings and interpretations',
        explanation: 'Deconstruction challenges the idea of fixed, stable meanings in texts.',
        difficulty: 'hard'
      },
      {
        id: 'g12_lit_hard_2',
        question: 'What is the concept of "the Other" in literature?',
        options: ['Second character', 'Representation of outsiders or marginalized groups', 'Author\'s alter ego', 'Secondary plot'],
        correct: 'Representation of outsiders or marginalized groups',
        explanation: 'The Other refers to how literature represents those outside the dominant culture or norm.',
        difficulty: 'hard'
      }
    ]
  }
];
