interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const englishChapters: Chapter[] = [
  {
    id: "grammar",
    name: "Grammar",
    description: "Parts of Speech and Sentence Structure",
    questions: [
      {
        id: "eng1",
        question: "What is the past tense of 'write'?",
        options: ["wrote", "written", "writed", "writing"],
        correct: "wrote",
        explanation: "'Write' is an irregular verb. Its past tense is 'wrote' and past participle is 'written'"
      },
      {
        id: "eng2",
        question: "What type of sentence is: 'Stop!'?",
        options: ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        correct: "Imperative",
        explanation: "An imperative sentence gives a command or makes a request. 'Stop!' is commanding someone to stop"
      },
      {
        id: "eng3",
        question: "Which is a proper noun?",
        options: ["London", "city", "beautiful", "quickly"],
        correct: "London",
        explanation: "A proper noun names a specific person, place, or thing and is capitalized"
      },
      {
        id: "eng4",
        question: "What is the plural of 'child'?",
        options: ["children", "childs", "childes", "child"],
        correct: "children",
        explanation: "'Child' has an irregular plural form: 'children'"
      },
      {
        id: "eng5",
        question: "Which word is an adverb?",
        options: ["quickly", "quick", "quickness", "quicker"],
        correct: "quickly",
        explanation: "Adverbs typically end in -ly and modify verbs, adjectives, or other adverbs"
      },
      {
        id: "eng6",
        question: "What is the comparative form of 'good'?",
        options: ["better", "gooder", "more good", "best"],
        correct: "better",
        explanation: "'Good' has irregular comparative and superlative forms: good, better, best"
      },
      {
        id: "eng7",
        question: "Which sentence is in passive voice?",
        options: ["The cake was eaten by John", "John ate the cake", "John is eating cake", "John will eat cake"],
        correct: "The cake was eaten by John",
        explanation: "Passive voice focuses on the action's recipient rather than the doer"
      },
      {
        id: "eng8",
        question: "What is a conjunction?",
        options: ["Word that connects words or phrases", "Describing word", "Action word", "Naming word"],
        correct: "Word that connects words or phrases",
        explanation: "Conjunctions connect words, phrases, or clauses (and, but, or, because, etc.)"
      },
      {
        id: "eng9",
        question: "Which is the correct possessive form?",
        options: ["The dog's bone", "The dogs' bone", "The dogs bone", "The dog bone"],
        correct: "The dog's bone",
        explanation: "For singular possession, add apostrophe + s ('s)"
      },
      {
        id: "eng10",
        question: "What is the superlative form of 'beautiful'?",
        options: ["most beautiful", "beautifuler", "beautifulest", "more beautiful"],
        correct: "most beautiful",
        explanation: "Long adjectives use 'most' for superlative form"
      },
      {
        id: "eng11",
        question: "Which sentence has correct subject-verb agreement?",
        options: ["The books are on the table", "The books is on the table", "The book are on the table", "Books is on table"],
        correct: "The books are on the table",
        explanation: "Plural subjects require plural verbs"
      },
      {
        id: "eng12",
        question: "What is an interjection?",
        options: ["Word expressing emotion", "Connecting word", "Describing word", "Action word"],
        correct: "Word expressing emotion",
        explanation: "Interjections express emotions or exclamations (oh, wow, ouch, etc.)"
      },
      {
        id: "eng13",
        question: "Which is a preposition?",
        options: ["under", "running", "happy", "slowly"],
        correct: "under",
        explanation: "Prepositions show relationships between nouns/pronouns and other words"
      },
      {
        id: "eng14",
        question: "What is the present participle of 'run'?",
        options: ["running", "ran", "run", "runs"],
        correct: "running",
        explanation: "Present participles are formed by adding -ing to the base verb"
      },
      {
        id: "eng15",
        question: "Which pronoun is reflexive?",
        options: ["myself", "I", "me", "my"],
        correct: "myself",
        explanation: "Reflexive pronouns end in -self or -selves (myself, yourself, himself, etc.)"
      },
      {
        id: "eng16",
        question: "What is the past participle of 'break'?",
        options: ["broken", "broke", "breaking", "breaks"],
        correct: "broken",
        explanation: "'Break' is irregular: break, broke, broken"
      },
      {
        id: "eng17",
        question: "Which sentence uses future tense?",
        options: ["I will go tomorrow", "I went yesterday", "I am going now", "I go every day"],
        correct: "I will go tomorrow",
        explanation: "Future tense uses 'will' + base verb or 'going to' + base verb"
      },
      {
        id: "eng18",
        question: "What is an article?",
        options: ["a, an, the", "he, she, it", "run, jump, walk", "big, small, tall"],
        correct: "a, an, the",
        explanation: "Articles are determiners: 'a' and 'an' are indefinite, 'the' is definite"
      },
      {
        id: "eng19",
        question: "Which is an interrogative sentence?",
        options: ["What is your name?", "My name is John.", "Close the door.", "What a beautiful day!"],
        correct: "What is your name?",
        explanation: "Interrogative sentences ask questions and typically end with question marks"
      },
      {
        id: "eng20",
        question: "What is the correct plural of 'mouse'?",
        options: ["mice", "mouses", "mouse", "mices"],
        correct: "mice",
        explanation: "'Mouse' has an irregular plural form: 'mice'"
      }
    ]
  },
  {
    id: "literature",
    name: "Literature",
    description: "Poetry, Drama and Prose",
    questions: [
      {
        id: "lit1",
        question: "Which of the following is a metaphor?",
        options: ["The cat sat on the mat", "Time is money", "She runs like the wind", "The door creaked loudly"],
        correct: "Time is money",
        explanation: "A metaphor directly compares two things without using 'like' or 'as'. 'Time is money' compares time to money"
      },
      {
        id: "lit2",
        question: "What literary device uses exaggeration for effect?",
        options: ["Metaphor", "Simile", "Hyperbole", "Alliteration"],
        correct: "Hyperbole",
        explanation: "Hyperbole is deliberate exaggeration used for dramatic or humorous effect"
      },
      {
        id: "lit3",
        question: "What is alliteration?",
        options: ["Repetition of initial consonant sounds", "Repetition of vowel sounds", "Rhyming words", "Opposite meanings"],
        correct: "Repetition of initial consonant sounds",
        explanation: "Alliteration is the repetition of initial consonant sounds in consecutive words"
      },
      {
        id: "lit4",
        question: "What is a simile?",
        options: ["Comparison using 'like' or 'as'", "Direct comparison", "Exaggeration", "Human qualities to non-human things"],
        correct: "Comparison using 'like' or 'as'",
        explanation: "A simile compares two things using 'like' or 'as'"
      },
      {
        id: "lit5",
        question: "What is personification?",
        options: ["Giving human qualities to non-human things", "Comparing with 'like'", "Exaggeration", "Repetition of sounds"],
        correct: "Giving human qualities to non-human things",
        explanation: "Personification gives human characteristics to animals, objects, or ideas"
      },
      {
        id: "lit6",
        question: "What is the rhyme scheme of a limerick?",
        options: ["AABBA", "ABAB", "AABB", "ABCD"],
        correct: "AABBA",
        explanation: "A limerick follows the AABBA rhyme scheme"
      },
      {
        id: "lit7",
        question: "What is irony?",
        options: ["Contrast between expectation and reality", "Repetition of words", "Comparing two things", "Exaggeration"],
        correct: "Contrast between expectation and reality",
        explanation: "Irony involves a contrast between what is expected and what actually happens"
      },
      {
        id: "lit8",
        question: "What is a sonnet?",
        options: ["14-line poem", "5-line poem", "Narrative poem", "Free verse poem"],
        correct: "14-line poem",
        explanation: "A sonnet is a 14-line poem, often with a specific rhyme scheme"
      },
      {
        id: "lit9",
        question: "What is the main character in a story called?",
        options: ["Protagonist", "Antagonist", "Narrator", "Author"],
        correct: "Protagonist",
        explanation: "The protagonist is the main character or hero of a story"
      },
      {
        id: "lit10",
        question: "What is symbolism?",
        options: ["Using objects to represent ideas", "Repetition of sounds", "Exaggeration", "Direct comparison"],
        correct: "Using objects to represent ideas",
        explanation: "Symbolism uses objects, colors, or actions to represent deeper meanings or ideas"
      },
      {
        id: "lit11",
        question: "What is the climax of a story?",
        options: ["Highest point of tension", "Beginning", "End", "Background information"],
        correct: "Highest point of tension",
        explanation: "The climax is the turning point or highest point of tension in a story"
      },
      {
        id: "lit12",
        question: "What is a haiku?",
        options: ["Japanese 3-line poem", "14-line poem", "5-line poem", "Epic poem"],
        correct: "Japanese 3-line poem",
        explanation: "A haiku is a traditional Japanese poem with 3 lines and 17 syllables (5-7-5)"
      },
      {
        id: "lit13",
        question: "What is foreshadowing?",
        options: ["Hints about future events", "Past events", "Character description", "Setting description"],
        correct: "Hints about future events",
        explanation: "Foreshadowing gives hints or clues about what will happen later in the story"
      },
      {
        id: "lit14",
        question: "What is an allegory?",
        options: ["Story with hidden meaning", "Humorous story", "True story", "Short story"],
        correct: "Story with hidden meaning",
        explanation: "An allegory is a story that has a deeper, symbolic meaning beyond the literal narrative"
      },
      {
        id: "lit15",
        question: "What is onomatopoeia?",
        options: ["Words that imitate sounds", "Repetition of words", "Comparison", "Exaggeration"],
        correct: "Words that imitate sounds",
        explanation: "Onomatopoeia uses words that imitate the sounds they represent (buzz, crash, whisper)"
      },
      {
        id: "lit16",
        question: "What is the setting of a story?",
        options: ["Time and place", "Main character", "Problem", "Solution"],
        correct: "Time and place",
        explanation: "Setting refers to when and where a story takes place"
      },
      {
        id: "lit17",
        question: "What is a soliloquy?",
        options: ["Character speaking alone", "Conversation between two characters", "Narrator's description", "Stage directions"],
        correct: "Character speaking alone",
        explanation: "A soliloquy is when a character speaks their thoughts aloud while alone on stage"
      },
      {
        id: "lit18",
        question: "What is the resolution of a story?",
        options: ["How conflicts are solved", "Beginning", "Highest tension", "Main problem"],
        correct: "How conflicts are solved",
        explanation: "The resolution is where conflicts are resolved and loose ends are tied up"
      },
      {
        id: "lit19",
        question: "What is an epic poem?",
        options: ["Long narrative poem about heroic deeds", "Short lyrical poem", "14-line poem", "Humorous poem"],
        correct: "Long narrative poem about heroic deeds",
        explanation: "An epic is a long narrative poem that tells the story of heroic deeds and adventures"
      },
      {
        id: "lit20",
        question: "What is dramatic irony?",
        options: ["Audience knows something characters don't", "Character says opposite of what they mean", "Unexpected outcome", "Character contradicts themselves"],
        correct: "Audience knows something characters don't",
        explanation: "Dramatic irony occurs when the audience knows information that the characters do not"
      }
    ]
  },
  {
    id: "vocabulary",
    name: "Vocabulary",
    description: "Word Meanings and Usage",
    questions: [
      {
        id: "vocab1",
        question: "Which word is a synonym for 'beautiful'?",
        options: ["ugly", "gorgeous", "small", "loud"],
        correct: "gorgeous",
        explanation: "A synonym is a word with the same or similar meaning. 'Gorgeous' means beautiful"
      },
      {
        id: "vocab2",
        question: "What is an antonym for 'happy'?",
        options: ["joyful", "sad", "excited", "pleased"],
        correct: "sad",
        explanation: "An antonym is a word with the opposite meaning. 'Sad' is the opposite of 'happy'"
      },
      {
        id: "vocab3",
        question: "What does 'magnificent' mean?",
        options: ["very impressive", "very small", "very loud", "very fast"],
        correct: "very impressive",
        explanation: "'Magnificent' means extremely beautiful, elaborate, or impressive"
      },
      {
        id: "vocab4",
        question: "Which word means 'to make something clear'?",
        options: ["confuse", "clarify", "complicate", "hide"],
        correct: "clarify",
        explanation: "'Clarify' means to make something easier to understand or clearer"
      },
      {
        id: "vocab5",
        question: "What is a synonym for 'enormous'?",
        options: ["tiny", "huge", "medium", "narrow"],
        correct: "huge",
        explanation: "'Enormous' and 'huge' both mean very large in size"
      },
      {
        id: "vocab6",
        question: "What does 'meticulous' mean?",
        options: ["careless", "very careful and precise", "quick", "loud"],
        correct: "very careful and precise",
        explanation: "'Meticulous' means showing great attention to detail; very careful and precise"
      },
      {
        id: "vocab7",
        question: "Which word means 'to make less severe'?",
        options: ["worsen", "alleviate", "increase", "strengthen"],
        correct: "alleviate",
        explanation: "'Alleviate' means to make suffering, deficiency, or a problem less severe"
      },
      {
        id: "vocab8",
        question: "What is an antonym for 'ancient'?",
        options: ["old", "historic", "modern", "traditional"],
        correct: "modern",
        explanation: "'Modern' is the opposite of 'ancient' in terms of time period"
      },
      {
        id: "vocab9",
        question: "What does 'versatile' mean?",
        options: ["limited", "able to adapt to many functions", "unchanging", "specific"],
        correct: "able to adapt to many functions",
        explanation: "'Versatile' means able to adapt or be adapted to many different functions or activities"
      },
      {
        id: "vocab10",
        question: "Which word means 'to give up or surrender'?",
        options: ["continue", "relinquish", "maintain", "acquire"],
        correct: "relinquish",
        explanation: "'Relinquish' means to voluntarily give up or surrender something"
      },
      {
        id: "vocab11",
        question: "What is a synonym for 'abundant'?",
        options: ["scarce", "plentiful", "limited", "few"],
        correct: "plentiful",
        explanation: "'Abundant' and 'plentiful' both mean existing in large quantities"
      },
      {
        id: "vocab12",
        question: "What does 'eloquent' mean?",
        options: ["unclear", "fluent and persuasive in speech", "quiet", "confused"],
        correct: "fluent and persuasive in speech",
        explanation: "'Eloquent' means fluent or persuasive in speaking or writing"
      },
      {
        id: "vocab13",
        question: "Which word means 'to prove wrong'?",
        options: ["confirm", "refute", "support", "agree"],
        correct: "refute",
        explanation: "'Refute' means to prove a statement or theory to be wrong or false"
      },
      {
        id: "vocab14",
        question: "What is an antonym for 'transparent'?",
        options: ["clear", "opaque", "visible", "obvious"],
        correct: "opaque",
        explanation: "'Opaque' means not transparent; not allowing light through"
      },
      {
        id: "vocab15",
        question: "What does 'hypothetical' mean?",
        options: ["real", "supposed but not necessarily real", "proven", "factual"],
        correct: "supposed but not necessarily real",
        explanation: "'Hypothetical' means based on a hypothesis; supposed but not necessarily real or true"
      },
      {
        id: "vocab16",
        question: "Which word means 'to encourage or support'?",
        options: ["discourage", "promote", "prevent", "stop"],
        correct: "promote",
        explanation: "'Promote' means to encourage or support the progress or existence of something"
      },
      {
        id: "vocab17",
        question: "What is a synonym for 'crucial'?",
        options: ["unimportant", "essential", "optional", "minor"],
        correct: "essential",
        explanation: "'Crucial' and 'essential' both mean extremely important or necessary"
      },
      {
        id: "vocab18",
        question: "What does 'ambiguous' mean?",
        options: ["clear", "having multiple meanings", "specific", "obvious"],
        correct: "having multiple meanings",
        explanation: "'Ambiguous' means open to more than one interpretation; unclear or inexact"
      },
      {
        id: "vocab19",
        question: "Which word means 'to make worse'?",
        options: ["improve", "aggravate", "help", "fix"],
        correct: "aggravate",
        explanation: "'Aggravate' means to make a problem, injury, or offense worse or more serious"
      },
      {
        id: "vocab20",
        question: "What is an antonym for 'optimistic'?",
        options: ["hopeful", "positive", "pessimistic", "cheerful"],
        correct: "pessimistic",
        explanation: "'Pessimistic' means expecting the worst; it's the opposite of 'optimistic'"
      }
    ]
  }
];
