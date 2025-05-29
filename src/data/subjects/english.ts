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

      // Medium Questions
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

      // Hard Questions
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
