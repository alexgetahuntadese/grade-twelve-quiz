
import { Chapter } from '../types';

export const informationTechnologyChapters: Chapter[] = [
  {
    id: 'computer_basics',
    name: 'Computer Fundamentals',
    description: 'Basic computer concepts and operation',
    questions: [
      // Easy Questions
      {
        id: 'comp_basic_1',
        question: 'What is hardware?',
        options: ['Computer programs', 'Physical components of a computer', 'Internet', 'Files'],
        correct: 'Physical components of a computer',
        explanation: 'Hardware refers to the physical components that make up a computer system.',
        difficulty: 'easy'
      },
      {
        id: 'comp_basic_2',
        question: 'What is software?',
        options: ['Computer programs', 'Physical components', 'Internet', 'Keyboard and mouse'],
        correct: 'Computer programs',
        explanation: 'Software refers to programs and other operating information used by a computer.',
        difficulty: 'easy'
      },
      {
        id: 'comp_basic_3',
        question: 'What is the CPU?',
        options: ['Central Processing Unit', 'Computer Personal Unit', 'Central Program Utility', 'Computer Processor Upgrade'],
        correct: 'Central Processing Unit',
        explanation: 'The CPU (Central Processing Unit) is the main processor of a computer.',
        difficulty: 'easy'
      },
      {
        id: 'comp_basic_4',
        question: 'What is RAM?',
        options: ['Random Access Memory', 'Read Always Memory', 'Remote Access Module', 'Running Application Memory'],
        correct: 'Random Access Memory',
        explanation: 'RAM (Random Access Memory) is temporary memory used by the computer while it\'s running.',
        difficulty: 'easy'
      },
      {
        id: 'comp_basic_5',
        question: 'What is an operating system?',
        options: ['Word processor', 'System that manages computer hardware and software', 'Anti-virus program', 'Web browser'],
        correct: 'System that manages computer hardware and software',
        explanation: 'An operating system manages computer hardware and software resources.',
        difficulty: 'easy'
      },
      {
        id: 'comp_basic_6',
        question: 'What is a file?',
        options: ['Physical folder', 'Collection of data stored as a unit', 'Program', 'Website'],
        correct: 'Collection of data stored as a unit',
        explanation: 'A file is a collection of data stored as a single unit with a name.',
        difficulty: 'easy'
      },
      {
        id: 'comp_basic_7',
        question: 'What is a folder or directory?',
        options: ['Type of file', 'Location for organizing files', 'Program', 'Hardware'],
        correct: 'Location for organizing files',
        explanation: 'A folder or directory is a location that organizes and stores files.',
        difficulty: 'easy'
      },
      {
        id: 'comp_basic_8',
        question: 'What is the Internet?',
        options: ['Web browser', 'Global network of computers', 'Operating system', 'Software package'],
        correct: 'Global network of computers',
        explanation: 'The Internet is a global network of interconnected computers.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'comp_basic_med_1',
        question: 'What is the difference between RAM and ROM?',
        options: ['No difference', 'RAM is temporary; ROM is permanent', 'RAM is larger', 'ROM is faster'],
        correct: 'RAM is temporary; ROM is permanent',
        explanation: 'RAM is volatile memory that loses data when powered off; ROM retains data permanently.',
        difficulty: 'medium'
      },
      {
        id: 'comp_basic_med_2',
        question: 'What is a network?',
        options: ['Single computer', 'Connected computers sharing resources', 'Software program', 'Internet only'],
        correct: 'Connected computers sharing resources',
        explanation: 'A network is a group of connected computers and devices that can share resources.',
        difficulty: 'medium'
      },
      {
        id: 'comp_basic_med_3',
        question: 'What is cloud computing?',
        options: ['Weather forecasting', 'Using services over the internet', 'Local storage', 'Software installation'],
        correct: 'Using services over the internet',
        explanation: 'Cloud computing delivers computing services over the internet rather than local resources.',
        difficulty: 'medium'
      },
      {
        id: 'comp_basic_med_4',
        question: 'What is a firewall?',
        options: ['Antivirus software', 'Security system controlling network traffic', 'Hardware only', 'Internet browser'],
        correct: 'Security system controlling network traffic',
        explanation: 'A firewall is a security system that monitors and controls incoming and outgoing network traffic.',
        difficulty: 'medium'
      },
      {
        id: 'comp_basic_med_5',
        question: 'What is an IP address?',
        options: ['Email address', 'Unique identifier for network devices', 'Software license', 'Internet provider'],
        correct: 'Unique identifier for network devices',
        explanation: 'An IP address is a unique numerical label assigned to devices on a network.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'comp_basic_hard_1',
        question: 'What is virtualization in computing?',
        options: ['Virtual reality', 'Creating virtual versions of resources', '3D graphics', 'Video streaming'],
        correct: 'Creating virtual versions of resources',
        explanation: 'Virtualization creates virtual versions of physical resources like servers, storage, and networks.',
        difficulty: 'hard'
      },
      {
        id: 'comp_basic_hard_2',
        question: 'How does public key cryptography work?',
        options: ['Single key for all', 'Uses key pairs for encryption/decryption', 'No encryption', 'Only for government'],
        correct: 'Uses key pairs for encryption/decryption',
        explanation: 'Public key cryptography uses a pair of keys (public and private) for secure communication.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade11_programming',
    name: 'Grade 11: Programming Fundamentals',
    description: 'Introduction to coding and software development',
    questions: [
      // Easy Questions
      {
        id: 'g11_prog_easy_1',
        question: 'What is programming?',
        options: ['Using a computer', 'Writing instructions for computers', 'Installing software', 'Creating hardware'],
        correct: 'Writing instructions for computers',
        explanation: 'Programming is the process of creating a set of instructions for computers to follow.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_2',
        question: 'What is a variable in programming?',
        options: ['Mathematical equation', 'Storage location with a name', 'Computer brand', 'Program name'],
        correct: 'Storage location with a name',
        explanation: 'A variable is a named storage location for data in a program.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_3',
        question: 'What is an algorithm?',
        options: ['Computer part', 'Step-by-step procedure', 'Programming language', 'Software package'],
        correct: 'Step-by-step procedure',
        explanation: 'An algorithm is a step-by-step procedure for solving a problem or accomplishing a task.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_4',
        question: 'What is a loop in programming?',
        options: ['Error message', 'Code that repeats', 'Variable type', 'Programming language'],
        correct: 'Code that repeats',
        explanation: 'A loop is a structure that repeats a sequence of instructions until a condition is met.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_5',
        question: 'What is a conditional statement?',
        options: ['Variable declaration', 'Code that runs based on a condition', 'Loop type', 'Function name'],
        correct: 'Code that runs based on a condition',
        explanation: 'A conditional statement executes different code based on whether a condition is true or false.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_prog_med_1',
        question: 'What is the difference between a compiler and an interpreter?',
        options: ['No difference', 'Compiler translates before execution; interpreter during execution', 'Only naming difference', 'Different languages'],
        correct: 'Compiler translates before execution; interpreter during execution',
        explanation: 'A compiler translates code to machine language before execution; an interpreter translates line by line during execution.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_2',
        question: 'What is object-oriented programming?',
        options: ['Any programming', 'Programming with objects that contain data and methods', 'Web design', 'Database only'],
        correct: 'Programming with objects that contain data and methods',
        explanation: 'Object-oriented programming organizes code into objects containing data and methods that act on that data.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_3',
        question: 'What is a function in programming?',
        options: ['Mathematical equation', 'Reusable block of code', 'Variable type', 'File type'],
        correct: 'Reusable block of code',
        explanation: 'A function is a reusable block of code that performs a specific task.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_prog_hard_1',
        question: 'What is recursion in programming?',
        options: ['Loop type', 'Function calling itself', 'Error handling', 'Data structure'],
        correct: 'Function calling itself',
        explanation: 'Recursion occurs when a function calls itself as part of its execution.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_2',
        question: 'What is the difference between stack and heap memory?',
        options: ['No difference', 'Stack is structured and temporary; heap is dynamic', 'Only naming difference', 'Only in certain languages'],
        correct: 'Stack is structured and temporary; heap is dynamic',
        explanation: 'Stack memory is used for static memory allocation; heap is used for dynamic memory allocation.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade12_cybersecurity',
    name: 'Grade 12: Cybersecurity',
    description: 'Principles of digital safety and information security',
    questions: [
      // Easy Questions
      {
        id: 'g12_cyber_easy_1',
        question: 'What is cybersecurity?',
        options: ['Internet usage', 'Protecting systems from digital attacks', 'Computer brand', 'Software type'],
        correct: 'Protecting systems from digital attacks',
        explanation: 'Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cyber_easy_2',
        question: 'What is malware?',
        options: ['Computer hardware', 'Software designed to harm', 'Internet browser', 'Operating system'],
        correct: 'Software designed to harm',
        explanation: 'Malware is software specifically designed to damage, disrupt, or gain unauthorized access.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cyber_easy_3',
        question: 'What is a strong password?',
        options: ['Any password', 'Complex combination of characters', 'Simple and memorable', 'Your name'],
        correct: 'Complex combination of characters',
        explanation: 'A strong password uses a complex combination of letters, numbers, and symbols.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cyber_easy_4',
        question: 'What is phishing?',
        options: ['Computer game', 'Fraudulent attempt to obtain sensitive information', 'Software type', 'Hardware component'],
        correct: 'Fraudulent attempt to obtain sensitive information',
        explanation: 'Phishing is a fraudulent attempt to obtain sensitive information by disguising as a trustworthy entity.',
        difficulty: 'easy'
      },
      {
        id: 'g12_cyber_easy_5',
        question: 'What is encryption?',
        options: ['Computer language', 'Converting information into a code', 'Hardware protection', 'Internet connection'],
        correct: 'Converting information into a code',
        explanation: 'Encryption is the process of converting information into a code to prevent unauthorized access.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_cyber_med_1',
        question: 'What is multi-factor authentication?',
        options: ['Multiple passwords', 'Security requiring multiple verification methods', 'Login technique', 'Password manager'],
        correct: 'Security requiring multiple verification methods',
        explanation: 'Multi-factor authentication requires two or more verification methods to grant access.',
        difficulty: 'medium'
      },
      {
        id: 'g12_cyber_med_2',
        question: 'What is a DDoS attack?',
        options: ['Computer virus', 'Attempt to make a service unavailable by overwhelming it', 'Password theft', 'Software bug'],
        correct: 'Attempt to make a service unavailable by overwhelming it',
        explanation: 'A DDoS (Distributed Denial of Service) attack attempts to disrupt normal traffic by overwhelming the target.',
        difficulty: 'medium'
      },
      {
        id: 'g12_cyber_med_3',
        question: 'What is a VPN?',
        options: ['Video player', 'Virtual Private Network', 'Visual Processing Node', 'Virus Protection Nexus'],
        correct: 'Virtual Private Network',
        explanation: 'A VPN (Virtual Private Network) extends a private network across a public network, enabling secure connections.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_cyber_hard_1',
        question: 'What is the difference between symmetric and asymmetric encryption?',
        options: ['No difference', 'Symmetric uses one key; asymmetric uses key pairs', 'Only in application', 'Only in strength'],
        correct: 'Symmetric uses one key; asymmetric uses key pairs',
        explanation: 'Symmetric encryption uses one key for encryption and decryption; asymmetric uses different keys for each.',
        difficulty: 'hard'
      },
      {
        id: 'g12_cyber_hard_2',
        question: 'What is a zero-day vulnerability?',
        options: ['Known issue', 'Software flaw unknown to those who should fix it', 'Hardware problem', 'Internet outage'],
        correct: 'Software flaw unknown to those who should fix it',
        explanation: 'A zero-day vulnerability is a software flaw unknown to the vendor that hackers can exploit before it\'s fixed.',
        difficulty: 'hard'
      }
    ]
  }
];
