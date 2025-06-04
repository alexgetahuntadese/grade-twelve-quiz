
import { Chapter } from '../types';

export const nationalLanguageChapters: Chapter[] = [
  {
    id: 'language_basics',
    name: 'Language Fundamentals',
    description: 'Basic grammar, vocabulary, and communication skills',
    questions: [
      // Easy Questions
      {
        id: 'lang_basic_1',
        question: 'What is a noun?',
        options: ['Action word', 'Describing word', 'Person, place, or thing', 'Connecting word'],
        correct: 'Person, place, or thing',
        explanation: 'A noun is a word that names a person, place, thing, or idea.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_2',
        question: 'What is a verb?',
        options: ['Action or state word', 'Describing word', 'Naming word', 'Connecting word'],
        correct: 'Action or state word',
        explanation: 'A verb is a word that describes an action, state, or occurrence.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_3',
        question: 'What is an adjective?',
        options: ['Action word', 'Word that describes a noun', 'Naming word', 'Connecting word'],
        correct: 'Word that describes a noun',
        explanation: 'An adjective is a word that describes or modifies a noun.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_4',
        question: 'What is a sentence?',
        options: ['Any group of words', 'Group of words expressing a complete thought', 'Single word', 'Paragraph'],
        correct: 'Group of words expressing a complete thought',
        explanation: 'A sentence is a group of words that expresses a complete thought, typically with a subject and verb.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_5',
        question: 'What is vocabulary?',
        options: ['Grammar rules', 'Word meanings', 'Sentence structure', 'Reading skills'],
        correct: 'Word meanings',
        explanation: 'Vocabulary refers to the set of words and their meanings that a person knows.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_6',
        question: 'What is a pronoun?',
        options: ['Action word', 'Word used instead of a noun', 'Describing word', 'Connecting word'],
        correct: 'Word used instead of a noun',
        explanation: 'A pronoun is a word used in place of a noun, such as he, she, it, they.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_7',
        question: 'What is communication?',
        options: ['Speaking only', 'Writing only', 'Exchange of information', 'Reading comprehension'],
        correct: 'Exchange of information',
        explanation: 'Communication is the exchange of information between individuals through a common system.',
        difficulty: 'easy'
      },
      {
        id: 'lang_basic_8',
        question: 'What is a preposition?',
        options: ['Type of noun', 'Word showing relationship', 'Past tense verb', 'Type of sentence'],
        correct: 'Word showing relationship',
        explanation: 'A preposition shows the relationship between a noun and other words in a sentence.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'lang_basic_med_1',
        question: 'What is the difference between active and passive voice?',
        options: ['No difference', 'Active: subject does action; passive: subject receives action', 'Only tense difference', 'Only formal vs informal'],
        correct: 'Active: subject does action; passive: subject receives action',
        explanation: 'In active voice, the subject performs the action; in passive voice, the subject receives the action.',
        difficulty: 'medium'
      },
      {
        id: 'lang_basic_med_2',
        question: 'What is a complex sentence?',
        options: ['Long sentence', 'Sentence with independent and dependent clauses', 'Any difficult sentence', 'Sentence with many words'],
        correct: 'Sentence with independent and dependent clauses',
        explanation: 'A complex sentence contains an independent clause and at least one dependent clause.',
        difficulty: 'medium'
      },
      {
        id: 'lang_basic_med_3',
        question: 'What is context in language?',
        options: ['Text formatting', 'Surrounding information that gives meaning', 'Grammar rules', 'Pronunciation guide'],
        correct: 'Surrounding information that gives meaning',
        explanation: 'Context refers to the surrounding information that helps determine the meaning of language.',
        difficulty: 'medium'
      },
      {
        id: 'lang_basic_med_4',
        question: 'What is figurative language?',
        options: ['Plain language', 'Language using figures of speech', 'Technical language', 'Foreign language'],
        correct: 'Language using figures of speech',
        explanation: 'Figurative language uses figures of speech to be more effective, persuasive, or creative.',
        difficulty: 'medium'
      },
      {
        id: 'lang_basic_med_5',
        question: 'What is a conjunction?',
        options: ['Type of verb', 'Word that joins clauses or sentences', 'Type of noun', 'Question word'],
        correct: 'Word that joins clauses or sentences',
        explanation: 'A conjunction connects words, phrases, clauses, or sentences.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'lang_basic_hard_1',
        question: 'What is the subjunctive mood?',
        options: ['Past tense', 'Expression of facts', 'Verb form for hypothetical situations', 'Future tense'],
        correct: 'Verb form for hypothetical situations',
        explanation: 'The subjunctive mood expresses hypothetical, wishful, imaginary, or factually contradictory thoughts.',
        difficulty: 'hard'
      },
      {
        id: 'lang_basic_hard_2',
        question: 'What is a syntactic ambiguity?',
        options: ['Clear meaning', 'Multiple grammatical interpretations', 'Word spelling', 'Pronunciation issue'],
        correct: 'Multiple grammatical interpretations',
        explanation: 'Syntactic ambiguity occurs when a sentence can be interpreted in multiple ways due to its structure.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade11_literature_analysis',
    name: 'Grade 11: Literature Analysis',
    description: 'Critical analysis of literary works and authors',
    questions: [
      // Easy Questions
      {
        id: 'g11_lit_easy_1',
        question: 'What is a literary genre?',
        options: ['Book size', 'Category of literary composition', 'Writing instrument', 'Page number'],
        correct: 'Category of literary composition',
        explanation: 'A literary genre is a category of literary composition, such as novel, poetry, or drama.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_2',
        question: 'What is a character in literature?',
        options: ['Letter or symbol', 'Person in a story', 'Writing style', 'Book cover'],
        correct: 'Person in a story',
        explanation: 'A character is a person or other being in a narrative such as a novel, play, or film.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_3',
        question: 'What is a theme in literature?',
        options: ['Book cover design', 'Central idea of a work', 'Page layout', 'Font style'],
        correct: 'Central idea of a work',
        explanation: 'A theme is the central idea, concern, or purpose of a literary work.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_4',
        question: 'What is a plot?',
        options: ['Book location', 'Main events of a story', 'Character name', 'Book size'],
        correct: 'Main events of a story',
        explanation: 'Plot is the sequence of events that make up a story.',
        difficulty: 'easy'
      },
      {
        id: 'g11_lit_easy_5',
        question: 'What is a setting in literature?',
        options: ['Book price', 'Time and place of events', 'Author\'s name', 'Book length'],
        correct: 'Time and place of events',
        explanation: 'Setting is the time, place, and circumstances in which a story occurs.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_lit_med_1',
        question: 'What is symbolism in literature?',
        options: ['Direct statement', 'Use of symbols to represent ideas', 'Character description', 'Sentence structure'],
        correct: 'Use of symbols to represent ideas',
        explanation: 'Symbolism is the use of symbols to represent ideas or qualities in literature.',
        difficulty: 'medium'
      },
      {
        id: 'g11_lit_med_2',
        question: 'What is foreshadowing?',
        options: ['Background lighting', 'Hint of future events', 'Character introduction', 'Book conclusion'],
        correct: 'Hint of future events',
        explanation: 'Foreshadowing is a literary device where future events are hinted at or indicated in advance.',
        difficulty: 'medium'
      },
      {
        id: 'g11_lit_med_3',
        question: 'What is a metaphor?',
        options: ['Direct comparison using like or as', 'Figurative comparison not using like or as', 'Character description', 'Book chapter'],
        correct: 'Figurative comparison not using like or as',
        explanation: 'A metaphor is a figure of speech that makes an implied comparison between unrelated things.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_lit_hard_1',
        question: 'What is an unreliable narrator?',
        options: ['Storyteller who misses details', 'Narrator whose credibility is compromised', 'Character who lies', 'Author\'s pen name'],
        correct: 'Narrator whose credibility is compromised',
        explanation: 'An unreliable narrator is one whose credibility has been compromised, making their perspective questionable.',
        difficulty: 'hard'
      },
      {
        id: 'g11_lit_hard_2',
        question: 'What is intertextuality in literature?',
        options: ['Text formatting', 'Relationship between texts', 'Text translation', 'Text layout'],
        correct: 'Relationship between texts',
        explanation: 'Intertextuality refers to the relationship between texts, where one text references or shapes understanding of another.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade12_advanced_composition',
    name: 'Grade 12: Advanced Composition',
    description: 'Advanced writing skills and rhetorical strategies',
    questions: [
      // Easy Questions
      {
        id: 'g12_comp_easy_1',
        question: 'What is an essay?',
        options: ['Short poem', 'Short piece of writing on a subject', 'Novel chapter', 'Book title'],
        correct: 'Short piece of writing on a subject',
        explanation: 'An essay is a short piece of writing on a particular subject, typically expressing the author\'s views.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_2',
        question: 'What is a thesis statement?',
        options: ['Essay length', 'Main argument of an essay', 'Page number', 'Author\'s name'],
        correct: 'Main argument of an essay',
        explanation: 'A thesis statement expresses the main argument or claim of an essay.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_3',
        question: 'What is a paragraph?',
        options: ['Book chapter', 'Group of related sentences about one idea', 'Page number', 'Writing instrument'],
        correct: 'Group of related sentences about one idea',
        explanation: 'A paragraph is a distinct section of writing dealing with a single theme or idea.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_4',
        question: 'What is a draft?',
        options: ['Final paper', 'Preliminary version of writing', 'Published work', 'Book title'],
        correct: 'Preliminary version of writing',
        explanation: 'A draft is a preliminary version of a piece of writing that is not yet final.',
        difficulty: 'easy'
      },
      {
        id: 'g12_comp_easy_5',
        question: 'What is editing?',
        options: ['Writing quickly', 'Revising and correcting writing', 'Copying text', 'Publishing'],
        correct: 'Revising and correcting writing',
        explanation: 'Editing involves reviewing and making changes to text to improve clarity, accuracy, and quality.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_comp_med_1',
        question: 'What is rhetoric?',
        options: ['Fast writing', 'Art of effective communication', 'Text formatting', 'Typing skill'],
        correct: 'Art of effective communication',
        explanation: 'Rhetoric is the art of effective or persuasive speaking or writing.',
        difficulty: 'medium'
      },
      {
        id: 'g12_comp_med_2',
        question: 'What is a counterargument?',
        options: ['Supporting argument', 'Argument against your position', 'Conclusion', 'Introduction'],
        correct: 'Argument against your position',
        explanation: 'A counterargument is an argument opposed to your position but that you address in your writing.',
        difficulty: 'medium'
      },
      {
        id: 'g12_comp_med_3',
        question: 'What is the purpose of a conclusion in an essay?',
        options: ['Introduce topic', 'Summarize and provide closure', 'Present new ideas', 'List references'],
        correct: 'Summarize and provide closure',
        explanation: 'A conclusion summarizes the main points and provides closure to the writing.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_comp_hard_1',
        question: 'What is the difference between inductive and deductive reasoning?',
        options: ['No difference', 'Inductive: specific to general; deductive: general to specific', 'Only in application', 'Only in length'],
        correct: 'Inductive: specific to general; deductive: general to specific',
        explanation: 'Inductive reasoning moves from specific observations to broad generalizations; deductive reasoning moves from general principles to specific conclusions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_comp_hard_2',
        question: 'What is a syllogism?',
        options: ['Type of poem', 'Form of deductive reasoning with premises and conclusion', 'Essay format', 'Writing style'],
        correct: 'Form of deductive reasoning with premises and conclusion',
        explanation: 'A syllogism is a form of deductive reasoning where a conclusion is drawn from two premises.',
        difficulty: 'hard'
      }
    ]
  }
];
