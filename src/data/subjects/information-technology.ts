import { Chapter } from '../types';

export const informationTechnologyChapters: Chapter[] = [
  {
    id: 'computer_basics',
    name: 'Computer Basics',
    description: 'Introduction to computers and information technology',
    questions: [
      {
        id: 'it_basics_easy_1',
        question: 'What does CPU stand for?',
        options: ['Computer Personal Unit', 'Central Processing Unit', 'Computer Program Unit', 'Central Program Unit'],
        correct: 'Central Processing Unit',
        explanation: 'CPU stands for Central Processing Unit, the brain of the computer.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_2',
        question: 'What is software?',
        options: ['Physical parts of computer', 'Programs and applications', 'Computer screen', 'Keyboard and mouse'],
        correct: 'Programs and applications',
        explanation: 'Software refers to programs and applications that run on a computer.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_3',
        question: 'What is the internet?',
        options: ['A computer game', 'Global network of computers', 'A software program', 'A type of computer'],
        correct: 'Global network of computers',
        explanation: 'The internet is a global network connecting millions of computers worldwide.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_4',
        question: 'What is an operating system?',
        options: ['A game', 'Software that manages computer resources', 'A website', 'A computer part'],
        correct: 'Software that manages computer resources',
        explanation: 'An operating system manages computer hardware and software resources.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_5',
        question: 'What is RAM?',
        options: ['Random Access Memory', 'Really Awesome Memory', 'Rapid Action Memory', 'Read And Modify'],
        correct: 'Random Access Memory',
        explanation: 'RAM stands for Random Access Memory, temporary storage for running programs.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_6',
        question: 'What is a file?',
        options: ['Computer hardware', 'Collection of data stored on computer', 'Internet connection', 'Computer virus'],
        correct: 'Collection of data stored on computer',
        explanation: 'A file is a collection of data stored on a computer with a specific name.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_7',
        question: 'What is a folder?',
        options: ['Type of file', 'Container for organizing files', 'Computer program', 'Internet browser'],
        correct: 'Container for organizing files',
        explanation: 'A folder is a container used to organize and store files.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_8',
        question: 'What is a keyboard used for?',
        options: ['Displaying images', 'Inputting text and commands', 'Playing music', 'Storing data'],
        correct: 'Inputting text and commands',
        explanation: 'A keyboard is an input device used to enter text and commands.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_9',
        question: 'What is a mouse used for?',
        options: ['Typing text', 'Pointing and clicking', 'Playing sounds', 'Storing files'],
        correct: 'Pointing and clicking',
        explanation: 'A mouse is used to point, click, and navigate on the computer screen.',
        difficulty: 'easy'
      },
      {
        id: 'it_basics_easy_10',
        question: 'What is a monitor?',
        options: ['Input device', 'Output device that displays information', 'Storage device', 'Processing unit'],
        correct: 'Output device that displays information',
        explanation: 'A monitor is an output device that displays visual information from the computer.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'it_basics_med_1',
        question: 'What is the difference between hardware and software?',
        options: ['No difference', 'Hardware is physical, software is programs', 'Hardware is new, software is old', 'Hardware is expensive, software is free'],
        correct: 'Hardware is physical, software is programs',
        explanation: 'Hardware refers to physical components, software refers to programs and applications.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_2',
        question: 'What is a browser?',
        options: ['Computer virus', 'Software to access websites', 'Hardware component', 'File type'],
        correct: 'Software to access websites',
        explanation: 'A browser is software used to access and view websites on the internet.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_3',
        question: 'What is cloud computing?',
        options: ['Weather prediction', 'Storing and accessing data over internet', 'Computer cooling', 'Sky observation'],
        correct: 'Storing and accessing data over internet',
        explanation: 'Cloud computing allows storing and accessing data and programs over the internet.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_4',
        question: 'What is a database?',
        options: ['Single file', 'Organized collection of data', 'Computer program only', 'Hardware device'],
        correct: 'Organized collection of data',
        explanation: 'A database is an organized collection of structured information or data.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_5',
        question: 'What is malware?',
        options: ['Good software', 'Malicious software', 'Hardware problem', 'Internet service'],
        correct: 'Malicious software',
        explanation: 'Malware is malicious software designed to damage or gain unauthorized access to computers.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_6',
        question: 'What is a network?',
        options: ['Single computer', 'Connected computers sharing resources', 'Internet only', 'Software program'],
        correct: 'Connected computers sharing resources',
        explanation: 'A network is a group of connected computers that can share resources and communicate.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_7',
        question: 'What is backup?',
        options: ['Deleting files', 'Copy of data for protection', 'Computer restart', 'Software update'],
        correct: 'Copy of data for protection',
        explanation: 'Backup is a copy of data stored separately to protect against loss.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_8',
        question: 'What is encryption?',
        options: ['Deleting data', 'Converting data to secure format', 'Copying files', 'Installing software'],
        correct: 'Converting data to secure format',
        explanation: 'Encryption converts data into a secure format that can only be read with the correct key.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_9',
        question: 'What is a firewall?',
        options: ['Physical barrier', 'Security system controlling network access', 'Computer screen', 'Storage device'],
        correct: 'Security system controlling network access',
        explanation: 'A firewall is a security system that controls incoming and outgoing network traffic.',
        difficulty: 'medium'
      },
      {
        id: 'it_basics_med_10',
        question: 'What is an IP address?',
        options: ['Internet Protocol address', 'Important Program address', 'Internal Process address', 'Information Package address'],
        correct: 'Internet Protocol address',
        explanation: 'IP address is a unique numerical identifier for devices on a network.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'it_basics_hard_1',
        question: 'What is binary code?',
        options: ['Programming language', 'Number system using 0s and 1s', 'Computer virus', 'Internet protocol'],
        correct: 'Number system using 0s and 1s',
        explanation: 'Binary code is a number system using only 0s and 1s that computers use to process information.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_2',
        question: 'What is machine learning?',
        options: ['Computer repair', 'AI that learns from data', 'Hardware assembly', 'Software installation'],
        correct: 'AI that learns from data',
        explanation: 'Machine learning is artificial intelligence that allows computers to learn and improve from data.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_3',
        question: 'What is virtualization?',
        options: ['Virtual reality', 'Creating virtual versions of physical resources', 'Online gaming', 'Internet browsing'],
        correct: 'Creating virtual versions of physical resources',
        explanation: 'Virtualization creates virtual versions of physical computing resources like servers or storage.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_4',
        question: 'What is big data?',
        options: ['Large files only', 'Extremely large datasets requiring special tools', 'Internet storage', 'Computer memory'],
        correct: 'Extremely large datasets requiring special tools',
        explanation: 'Big data refers to extremely large datasets that require specialized tools to process and analyze.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_5',
        question: 'What is quantum computing?',
        options: ['Fast regular computing', 'Computing using quantum mechanical principles', 'Internet computing', 'Mobile computing'],
        correct: 'Computing using quantum mechanical principles',
        explanation: 'Quantum computing uses quantum mechanical principles to process information in fundamentally different ways.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_6',
        question: 'What is blockchain?',
        options: ['Chain of computers', 'Distributed ledger technology', 'Internet connection', 'Software program'],
        correct: 'Distributed ledger technology',
        explanation: 'Blockchain is a distributed ledger technology that maintains a secure, decentralized record of transactions.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_7',
        question: 'What is artificial intelligence?',
        options: ['Smart humans', 'Computer systems performing tasks requiring human intelligence', 'Fast computers', 'Advanced software'],
        correct: 'Computer systems performing tasks requiring human intelligence',
        explanation: 'AI refers to computer systems that can perform tasks typically requiring human intelligence.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_8',
        question: 'What is cybersecurity?',
        options: ['Internet rules', 'Protection of digital systems from threats', 'Computer games', 'Online shopping'],
        correct: 'Protection of digital systems from threats',
        explanation: 'Cybersecurity involves protecting digital systems, networks, and data from cyber threats.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_9',
        question: 'What is the Internet of Things (IoT)?',
        options: ['Internet storage', 'Network of connected everyday objects', 'Computer parts', 'Software applications'],
        correct: 'Network of connected everyday objects',
        explanation: 'IoT refers to the network of physical objects embedded with sensors and connectivity.',
        difficulty: 'hard'
      },
      {
        id: 'it_basics_hard_10',
        question: 'What is API?',
        options: ['Application Programming Interface', 'Automatic Program Installation', 'Advanced Processing Intelligence', 'Applied Programming Integration'],
        correct: 'Application Programming Interface',
        explanation: 'API is a set of protocols and tools for building software applications and enabling communication between them.',
        difficulty: 'hard'
      }
    ]
  },

  // Grade 11 Chapter
  {
    id: 'grade11_programming',
    name: 'Grade 11: Programming and Software Development',
    description: 'Introduction to programming concepts and software development',
    questions: [
      // Easy Questions
      {
        id: 'g11_it_easy_1',
        question: 'What is programming?',
        options: ['Writing instructions for computers', 'Using computer programs', 'Fixing computers', 'Buying software'],
        correct: 'Writing instructions for computers',
        explanation: 'Programming involves writing step-by-step instructions for computers to follow.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_2',
        question: 'What is a variable in programming?',
        options: ['A number', 'Storage location with a name', 'A program', 'An error'],
        correct: 'Storage location with a name',
        explanation: 'Variables are named storage locations that hold data values.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_3',
        question: 'What is an algorithm?',
        options: ['A computer', 'Step-by-step problem-solving procedure', 'A programming language', 'Software'],
        correct: 'Step-by-step problem-solving procedure',
        explanation: 'An algorithm is a step-by-step procedure for solving a problem.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_4',
        question: 'What is debugging?',
        options: ['Writing code', 'Finding and fixing errors', 'Running programs', 'Saving files'],
        correct: 'Finding and fixing errors',
        explanation: 'Debugging is the process of finding and fixing errors in code.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_5',
        question: 'What is a loop in programming?',
        options: ['An error', 'Repeated execution of code', 'A variable', 'A function'],
        correct: 'Repeated execution of code',
        explanation: 'Loops allow code to be executed repeatedly based on conditions.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_6',
        question: 'What is source code?',
        options: ['Compiled program', 'Human-readable program instructions', 'Computer memory', 'Operating system'],
        correct: 'Human-readable program instructions',
        explanation: 'Source code is the human-readable version of program instructions.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_7',
        question: 'What is a programming language?',
        options: ['Computer hardware', 'Formal language for writing programs', 'Internet protocol', 'Database system'],
        correct: 'Formal language for writing programs',
        explanation: 'Programming languages provide syntax for writing computer programs.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_8',
        question: 'What is a function in programming?',
        options: ['A variable', 'Reusable block of code', 'An error', 'A loop'],
        correct: 'Reusable block of code',
        explanation: 'Functions are reusable blocks of code that perform specific tasks.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_9',
        question: 'What is input in programming?',
        options: ['Output display', 'Data given to program', 'Program error', 'Computer memory'],
        correct: 'Data given to program',
        explanation: 'Input is data provided to a program for processing.',
        difficulty: 'easy'
      },
      {
        id: 'g11_it_easy_10',
        question: 'What is output in programming?',
        options: ['Program input', 'Results produced by program', 'Source code', 'Programming error'],
        correct: 'Results produced by program',
        explanation: 'Output is the results or information produced by a program.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_it_med_1',
        question: 'What is the difference between compiled and interpreted languages?',
        options: ['No difference', 'Compiled translates before execution, interpreted during execution', 'Only speed difference', 'Only syntax difference'],
        correct: 'Compiled translates before execution, interpreted during execution',
        explanation: 'Compiled languages are translated to machine code before execution, interpreted languages during execution.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_2',
        question: 'What is object-oriented programming?',
        options: ['Programming with objects and classes', 'Programming with functions only', 'Programming with variables', 'Programming with loops'],
        correct: 'Programming with objects and classes',
        explanation: 'Object-oriented programming organizes code using objects and classes.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_3',
        question: 'What is a data structure?',
        options: ['Building structure', 'Way to organize and store data', 'Programming language', 'Computer hardware'],
        correct: 'Way to organize and store data',
        explanation: 'Data structures are methods for organizing and storing data efficiently.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_4',
        question: 'What is recursion in programming?',
        options: ['Loop structure', 'Function calling itself', 'Variable declaration', 'Error handling'],
        correct: 'Function calling itself',
        explanation: 'Recursion is when a function calls itself to solve smaller instances of the same problem.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_5',
        question: 'What is an array?',
        options: ['Single variable', 'Collection of similar data elements', 'Function type', 'Loop structure'],
        correct: 'Collection of similar data elements',
        explanation: 'Arrays are collections of elements of the same data type stored in memory.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_6',
        question: 'What is version control?',
        options: ['Program execution', 'Tracking changes in code over time', 'Data validation', 'Error checking'],
        correct: 'Tracking changes in code over time',
        explanation: 'Version control systems track changes to code and allow collaboration.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_7',
        question: 'What is software testing?',
        options: ['Writing code', 'Verifying program correctness', 'Installing software', 'Buying programs'],
        correct: 'Verifying program correctness',
        explanation: 'Software testing verifies that programs work correctly and meet requirements.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_8',
        question: 'What is a conditional statement?',
        options: ['Loop structure', 'Code that executes based on conditions', 'Variable declaration', 'Function definition'],
        correct: 'Code that executes based on conditions',
        explanation: 'Conditional statements execute different code paths based on specific conditions.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_9',
        question: 'What is pseudocode?',
        options: ['Real programming language', 'Informal description of algorithm logic', 'Computer virus', 'Software bug'],
        correct: 'Informal description of algorithm logic',
        explanation: 'Pseudocode is an informal way to describe algorithm logic using natural language.',
        difficulty: 'medium'
      },
      {
        id: 'g11_it_med_10',
        question: 'What is software development lifecycle?',
        options: ['Program execution time', 'Process of creating software from conception to deployment', 'Computer lifespan', 'Programming language evolution'],
        correct: 'Process of creating software from conception to deployment',
        explanation: 'SDLC is the process of planning, creating, testing, and deploying software.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_it_hard_1',
        question: 'What is Big O notation?',
        options: ['Programming syntax', 'Way to describe algorithm efficiency', 'Variable naming convention', 'Error type'],
        correct: 'Way to describe algorithm efficiency',
        explanation: 'Big O notation describes the computational complexity and efficiency of algorithms.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_2',
        question: 'What is polymorphism in object-oriented programming?',
        options: ['Multiple inheritance', 'Objects taking multiple forms', 'Variable types', 'Function overloading only'],
        correct: 'Objects taking multiple forms',
        explanation: 'Polymorphism allows objects of different types to be treated as the same type.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_3',
        question: 'What is a hash table?',
        options: ['Simple array', 'Data structure using hash function for key-value mapping', 'Loop structure', 'Variable type'],
        correct: 'Data structure using hash function for key-value mapping',
        explanation: 'Hash tables use hash functions to map keys to values for efficient data retrieval.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_4',
        question: 'What is the difference between stack and heap memory?',
        options: ['No difference', 'Stack is for local variables, heap is for dynamic allocation', 'Only size difference', 'Only speed difference'],
        correct: 'Stack is for local variables, heap is for dynamic allocation',
        explanation: 'Stack stores local variables and function calls, heap stores dynamically allocated memory.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_5',
        question: 'What is design pattern in software development?',
        options: ['UI design', 'Reusable solution to common programming problems', 'Code formatting', 'Variable naming'],
        correct: 'Reusable solution to common programming problems',
        explanation: 'Design patterns are proven solutions to recurring design problems in software.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_6',
        question: 'What is multithreading?',
        options: ['Single execution path', 'Concurrent execution of multiple threads', 'Sequential processing', 'Single-core processing'],
        correct: 'Concurrent execution of multiple threads',
        explanation: 'Multithreading allows multiple threads to execute concurrently within a program.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_7',
        question: 'What is API design?',
        options: ['User interface design', 'Defining how software components interact', 'Database design', 'Network topology'],
        correct: 'Defining how software components interact',
        explanation: 'API design defines interfaces and protocols for software component interaction.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_8',
        question: 'What is garbage collection?',
        options: ['Deleting files', 'Automatic memory management', 'Code cleanup', 'Error removal'],
        correct: 'Automatic memory management',
        explanation: 'Garbage collection automatically reclaims memory that is no longer being used.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_9',
        question: 'What is the Model-View-Controller (MVC) pattern?',
        options: ['Database design', 'Architectural pattern separating concerns', 'Testing methodology', 'Deployment strategy'],
        correct: 'Architectural pattern separating concerns',
        explanation: 'MVC separates application logic into Model, View, and Controller components.',
        difficulty: 'hard'
      },
      {
        id: 'g11_it_hard_10',
        question: 'What is algorithmic complexity analysis?',
        options: ['Code readability', 'Studying algorithm efficiency and resource usage', 'Syntax checking', 'Error analysis'],
        correct: 'Studying algorithm efficiency and resource usage',
        explanation: 'Complexity analysis studies how algorithm performance scales with input size.',
        difficulty: 'hard'
      }
    ]
  }
];
