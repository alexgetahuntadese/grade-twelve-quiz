import { Chapter } from '../types';

export const englishChapters: Chapter[] = [
  {
    id: 'grammar',
    name: 'Grammar',
    description: 'Parts of speech, sentence structure, and grammar rules',
    questions: [
      {
        id: 'gram_1',
        question: 'What is a noun?',
        options: ['An action word', 'A describing word', 'A person, place, or thing', 'A connecting word'],
        correct: 'A person, place, or thing',
        explanation: 'A noun is a word that names a person, place, thing, or idea.',
        difficulty: 'easy'
      },
      {
        id: 'gram_2',
        question: 'Which word is a verb in this sentence: "The dog runs quickly"?',
        options: ['dog', 'runs', 'quickly', 'the'],
        correct: 'runs',
        explanation: 'A verb expresses action or state of being. "Runs" shows action.',
        difficulty: 'easy'
      },
      {
        id: 'gram_3',
        question: 'What is an adjective?',
        options: ['A word that describes a noun', 'A word that shows action', 'A word that connects ideas', 'A word that replaces a noun'],
        correct: 'A word that describes a noun',
        explanation: 'An adjective modifies or describes a noun or pronoun.',
        difficulty: 'easy'
      },
      {
        id: 'gram_4',
        question: 'Which sentence is grammatically correct?',
        options: ['She don\'t like apples', 'She doesn\'t like apples', 'She not like apples', 'She no like apples'],
        correct: 'She doesn\'t like apples',
        explanation: 'In third person singular, we use "doesn\'t" not "don\'t".',
        difficulty: 'easy'
      },
      {
        id: 'gram_5',
        question: 'What is the plural of "child"?',
        options: ['childs', 'childes', 'children', 'childern'],
        correct: 'children',
        explanation: 'Child has an irregular plural form: children.',
        difficulty: 'easy'
      },
      {
        id: 'gram_6',
        question: 'Which is a proper noun?',
        options: ['city', 'dog', 'London', 'book'],
        correct: 'London',
        explanation: 'Proper nouns name specific people, places, or things and are capitalized.',
        difficulty: 'easy'
      },
      {
        id: 'gram_7',
        question: 'What type of word is "quickly" in "She runs quickly"?',
        options: ['Noun', 'Verb', 'Adjective', 'Adverb'],
        correct: 'Adverb',
        explanation: 'Adverbs modify verbs, adjectives, or other adverbs. "Quickly" modifies "runs".',
        difficulty: 'easy'
      },
      {
        id: 'gram_8',
        question: 'Which sentence uses the correct past tense?',
        options: ['I goed to the store', 'I went to the store', 'I go to the store', 'I going to the store'],
        correct: 'I went to the store',
        explanation: 'The past tense of "go" is "went", not "goed".',
        difficulty: 'medium'
      },
      {
        id: 'gram_9',
        question: 'What is the subject in this sentence: "The tall building downtown collapsed"?',
        options: ['tall', 'building', 'downtown', 'collapsed'],
        correct: 'building',
        explanation: 'The subject is what the sentence is about. "Building" is the main noun performing the action.',
        difficulty: 'medium'
      },
      {
        id: 'gram_10',
        question: 'Which sentence shows correct subject-verb agreement?',
        options: ['The students is ready', 'The student are ready', 'The students are ready', 'The student were ready'],
        correct: 'The students are ready',
        explanation: 'Plural subjects require plural verbs. "Students" (plural) takes "are".',
        difficulty: 'medium'
      },
      {
        id: 'gram_11',
        question: 'What is a compound sentence?',
        options: ['A sentence with one subject', 'A sentence with two independent clauses', 'A sentence with one verb', 'A sentence with adjectives'],
        correct: 'A sentence with two independent clauses',
        explanation: 'A compound sentence contains two or more independent clauses joined by a conjunction.',
        difficulty: 'medium'
      },
      {
        id: 'gram_12',
        question: 'Which word is a preposition?',
        options: ['run', 'beautiful', 'under', 'happy'],
        correct: 'under',
        explanation: 'Prepositions show relationships between nouns/pronouns and other words.',
        difficulty: 'medium'
      },
      {
        id: 'gram_13',
        question: 'What is the correct possessive form of "James"?',
        options: ['James\'', 'James\'s', 'Jame\'s', 'James\'es'],
        correct: 'James\'s',
        explanation: 'For singular nouns ending in s, add \'s to form the possessive.',
        difficulty: 'medium'
      },
      {
        id: 'gram_14',
        question: 'Which sentence contains a dangling modifier?',
        options: ['Running quickly, John caught the bus', 'Running quickly, the bus was caught by John', 'John, running quickly, caught the bus', 'John caught the bus while running quickly'],
        correct: 'Running quickly, the bus was caught by John',
        explanation: 'A dangling modifier occurs when the modifying phrase doesn\'t clearly relate to the subject.',
        difficulty: 'hard'
      },
      {
        id: 'gram_15',
        question: 'What is the mood of this sentence: "If I were rich, I would travel"?',
        options: ['Indicative', 'Imperative', 'Subjunctive', 'Interrogative'],
        correct: 'Subjunctive',
        explanation: 'The subjunctive mood expresses hypothetical or contrary-to-fact situations.',
        difficulty: 'hard'
      },
      {
        id: 'gram_16',
        question: 'Which sentence uses correct parallel structure?',
        options: ['I like swimming, running, and to bike', 'I like swimming, running, and biking', 'I like to swim, running, and biking', 'I like swim, run, and bike'],
        correct: 'I like swimming, running, and biking',
        explanation: 'Parallel structure requires similar grammatical forms in a series.',
        difficulty: 'hard'
      },
      {
        id: 'gram_17',
        question: 'What type of clause is "that she forgot" in "The fact that she forgot surprised me"?',
        options: ['Independent clause', 'Adjective clause', 'Adverb clause', 'Noun clause'],
        correct: 'Noun clause',
        explanation: 'The clause functions as a noun, serving as an appositive to "fact".',
        difficulty: 'hard'
      },
      {
        id: 'gram_18',
        question: 'Which sentence correctly uses the semicolon?',
        options: ['I went to the store; and bought milk', 'I went to the store; I bought milk', 'I went; to the store and bought milk', 'I went to the store and; bought milk'],
        correct: 'I went to the store; I bought milk',
        explanation: 'Semicolons connect two independent clauses that are closely related.',
        difficulty: 'hard'
      },
      {
        id: 'gram_19',
        question: 'What is the function of "whom" in "The person whom I met was kind"?',
        options: ['Subject', 'Direct object', 'Indirect object', 'Predicate nominative'],
        correct: 'Direct object',
        explanation: '"Whom" is the object of the verb "met" in the relative clause.',
        difficulty: 'hard'
      },
      {
        id: 'gram_20',
        question: 'Which sentence demonstrates correct use of the conditional perfect?',
        options: ['If I would have known, I would come', 'If I had known, I would have come', 'If I would know, I would have come', 'If I have known, I would come'],
        correct: 'If I had known, I would have come',
        explanation: 'Conditional perfect uses "had + past participle" in the if-clause and "would have + past participle" in the main clause.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade11_literature',
    name: 'Grade 11: Advanced Literature',
    description: 'Literary analysis, themes, and critical thinking',
    questions: [
      {
        id: 'g11_lit_easy_1',
        question: 'What is a theme in literature?',
        options: ['The setting', 'The main message or idea', 'The characters', 'The plot'],
        correct: 'The main message or idea',
        explanation: 'A theme is the central message or underlying meaning in a literary work.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_2',
        question: 'What is symbolism?',
        options: ['Direct description', 'Using objects to represent ideas', 'Character dialogue', 'Plot summary'],
        correct: 'Using objects to represent ideas',
        explanation: 'Symbolism uses objects, colors, or actions to represent deeper meanings.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_3',
        question: 'What is irony?',
        options: ['Saying exactly what you mean', 'The opposite of what is expected', 'A type of poem', 'Character development'],
        correct: 'The opposite of what is expected',
        explanation: 'Irony occurs when the actual outcome differs from what is expected.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_4',
        question: 'What is foreshadowing?',
        options: ['Looking back at events', 'Hints about future events', 'Character descriptions', 'Setting details'],
        correct: 'Hints about future events',
        explanation: 'Foreshadowing gives clues about what will happen later in the story.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_5',
        question: 'What is alliteration?',
        options: ['Repetition of vowel sounds', 'Repetition of consonant sounds', 'Rhyming words', 'Similar meanings'],
        correct: 'Repetition of consonant sounds',
        explanation: 'Alliteration is the repetition of initial consonant sounds in successive words.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_med_1',
        question: 'What is dramatic irony?',
        options: ['When characters know more than readers', 'When readers know more than characters', 'When nothing happens', 'When everything is predictable'],
        correct: 'When readers know more than characters',
        explanation: 'Dramatic irony occurs when the audience knows something characters don\'t.',
        difficulty: 'medium'
      },
      {
        id: 'g11_lit_med_2',
        question: 'What is a dynamic character?',
        options: ['A character who changes', 'A character who stays the same', 'A minor character', 'A narrator'],
        correct: 'A character who changes',
        explanation: 'Dynamic characters undergo significant change throughout the story.',
        difficulty: 'medium'
      },
      {
        id: 'g11_lit_med_3',
        question: 'What is the climax of a story?',
        options: ['The beginning', 'The turning point', 'The ending', 'The setting'],
        correct: 'The turning point',
        explanation: 'The climax is the turning point or moment of highest tension in a story.',
        difficulty: 'medium'
      },
      {
        id: 'g11_lit_hard_1',
        question: 'What is an unreliable narrator?',
        options: ['A narrator who tells the truth', 'A narrator whose credibility is compromised', 'A third-person narrator', 'An omniscient narrator'],
        correct: 'A narrator whose credibility is compromised',
        explanation: 'An unreliable narrator\'s account cannot be fully trusted due to bias or limitations.',
        difficulty: 'hard'
      },
      {
        id: 'g11_lit_hard_2',
        question: 'What is stream of consciousness?',
        options: ['Logical thought patterns', 'Unfiltered flow of thoughts', 'Dialogue between characters', 'Narrative structure'],
        correct: 'Unfiltered flow of thoughts',
        explanation: 'Stream of consciousness presents a character\'s unfiltered thoughts and feelings.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_composition',
    name: 'Grade 12: Advanced Composition',
    description: 'Advanced writing techniques, research, and critical analysis',
    questions: [
      {
        id: 'g12_comp_easy_1',
        question: 'What is a thesis statement?',
        options: ['A question', 'The main argument', 'A summary', 'An introduction'],
        correct: 'The main argument',
        explanation: 'A thesis statement presents the main argument or claim of an essay.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_2',
        question: 'What is MLA format?',
        options: ['A type of essay', 'A citation style', 'A writing technique', 'A literary device'],
        correct: 'A citation style',
        explanation: 'MLA is a standardized format for citing sources in academic writing.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_3',
        question: 'What is plagiarism?',
        options: ['Original writing', 'Using others\' work without credit', 'Proper citation', 'Research method'],
        correct: 'Using others\' work without credit',
        explanation: 'Plagiarism is using someone else\'s work or ideas without proper attribution.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_4',
        question: 'What is a primary source?',
        options: ['A textbook', 'Original document or firsthand evidence', 'A summary', 'A review'],
        correct: 'Original document or firsthand evidence',
        explanation: 'Primary sources provide direct, firsthand evidence about a topic.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_5',
        question: 'What is peer review?',
        options: ['Self-editing', 'Having others review your work', 'Final draft', 'Publishing'],
        correct: 'Having others review your work',
        explanation: 'Peer review involves having others evaluate and provide feedback on your writing.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_med_1',
        question: 'What is the difference between summary and analysis?',
        options: ['No difference', 'Summary retells, analysis interprets', 'Summary is longer', 'Analysis is easier'],
        correct: 'Summary retells, analysis interprets',
        explanation: 'Summary retells what happened; analysis examines meaning and significance.',
        difficulty: 'medium'
      },
      {
        id: 'g12_comp_med_2',
        question: 'What is a counterargument?',
        options: ['Supporting evidence', 'Opposing viewpoint', 'Conclusion', 'Introduction'],
        correct: 'Opposing viewpoint',
        explanation: 'A counterargument presents an opposing viewpoint to your thesis.',
        difficulty: 'medium'
      },
      {
        id: 'g12_comp_med_3',
        question: 'What is rhetorical analysis?',
        options: ['Grammar checking', 'Examining persuasive techniques', 'Plot summary', 'Character study'],
        correct: 'Examining persuasive techniques',
        explanation: 'Rhetorical analysis examines how authors use language to persuade audiences.',
        difficulty: 'medium'
      },
      {
        id: 'g12_comp_hard_1',
        question: 'What is the difference between ethos, pathos, and logos?',
        options: ['All are the same', 'Credibility, emotion, logic', 'Types of essays', 'Citation styles'],
        correct: 'Credibility, emotion, logic',
        explanation: 'Ethos appeals to credibility, pathos to emotion, and logos to logic.',
        difficulty: 'hard'
      },
      {
        id: 'g12_comp_hard_2',
        question: 'What is synthesis writing?',
        options: ['Copying sources', 'Combining multiple sources to create new insights', 'Summarizing one source', 'Personal reflection'],
        correct: 'Combining multiple sources to create new insights',
        explanation: 'Synthesis writing combines information from multiple sources to develop new insights.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'literature',
    name: 'Literature',
    description: 'Reading comprehension and literary analysis',
    questions: [
      {
        id: 'lit_1',
        question: 'What is a metaphor?',
        options: ['A direct comparison using like or as', 'A comparison without using like or as', 'An exaggeration', 'A repetition of sounds'],
        correct: 'A comparison without using like or as',
        explanation: 'A metaphor is a figure of speech that makes an implicit comparison without using "like" or "as".',
        difficulty: 'easy'
      },
      {
        id: 'lit_2',
        question: 'What is the main character in a story called?',
        options: ['Antagonist', 'Protagonist', 'Narrator', 'Author'],
        correct: 'Protagonist',
        explanation: 'The protagonist is the main character around whom the story revolves.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'writing',
    name: 'Writing Skills',
    description: 'Essay writing, composition, and creative writing',
    questions: [
      {
        id: 'writ_1',
        question: 'What is the first paragraph of an essay called?',
        options: ['Conclusion', 'Introduction', 'Body', 'Summary'],
        correct: 'Introduction',
        explanation: 'The introduction is the opening paragraph that introduces the topic.',
        difficulty: 'easy'
      },
      {
        id: 'writ_2',
        question: 'What should a thesis statement do?',
        options: ['Summarize the essay', 'State the main argument', 'List sources', 'Ask questions'],
        correct: 'State the main argument',
        explanation: 'A thesis statement presents the main argument or claim of the essay.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'reading_comprehension',
    name: 'Reading Comprehension',
    description: 'Understanding and analyzing written texts',
    questions: [
      {
        id: 'read_1',
        question: 'What is the main idea of a passage?',
        options: ['The first sentence', 'The most important point', 'The longest paragraph', 'The conclusion'],
        correct: 'The most important point',
        explanation: 'The main idea is the central or most important point the author is making.',
        difficulty: 'easy'
      },
      {
        id: 'read_2',
        question: 'What are supporting details?',
        options: ['Random facts', 'Information that supports the main idea', 'The title', 'The author\'s name'],
        correct: 'Information that supports the main idea',
        explanation: 'Supporting details provide evidence or examples that support the main idea.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'vocabulary',
    name: 'Vocabulary',
    description: 'Word meanings, synonyms, and antonyms',
    questions: [
      {
        id: 'vocab_1',
        question: 'What is a synonym for "happy"?',
        options: ['Sad', 'Joyful', 'Angry', 'Tired'],
        correct: 'Joyful',
        explanation: 'A synonym is a word with the same or similar meaning. "Joyful" means the same as "happy".',
        difficulty: 'easy'
      },
      {
        id: 'vocab_2',
        question: 'What is an antonym for "hot"?',
        options: ['Warm', 'Cold', 'Cool', 'Freezing'],
        correct: 'Cold',
        explanation: 'An antonym is a word with the opposite meaning. "Cold" is the opposite of "hot".',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'poetry',
    name: 'Poetry',
    description: 'Poetic devices, forms, and analysis',
    questions: [
      {
        id: 'poet_1',
        question: 'What is rhyme?',
        options: ['Words that sound the same', 'Long sentences', 'Short lines', 'Difficult words'],
        correct: 'Words that sound the same',
        explanation: 'Rhyme occurs when words have similar ending sounds.',
        difficulty: 'easy'
      },
      {
        id: 'poet_2',
        question: 'What is a stanza?',
        options: ['A single word', 'A group of lines', 'A punctuation mark', 'A type of poem'],
        correct: 'A group of lines',
        explanation: 'A stanza is a group of lines in a poem, similar to a paragraph in prose.',
        difficulty: 'easy'
      }
    ]
  }
];
