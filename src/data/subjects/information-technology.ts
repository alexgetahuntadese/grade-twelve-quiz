
import { Chapter } from '../types';

export const informationTechnologyChapters: Chapter[] = [
  {
    id: 'computer_basics',
    name: 'Computer Basics',
    description: 'Introduction to computers and information technology',
    questions: [
      // Easy Questions
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
  }
];
