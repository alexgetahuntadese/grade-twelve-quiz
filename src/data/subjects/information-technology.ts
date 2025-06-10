
import { Chapter } from '../types';

export const informationTechnologyChapters: Chapter[] = [
  {
    id: 'grade12_unit1_information_systems',
    name: 'Grade 12 Unit 1: Information Systems and Their Applications',
    description: 'Understanding information systems, their components, and real-world applications',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit1_easy_1',
        question: 'What is an information system?',
        options: ['Computer hardware only', 'Software only', 'Combination of hardware, software, data, networks, and people', 'Internet connection'],
        correct: 'Combination of hardware, software, data, networks, and people',
        explanation: 'An information system combines technology components with people and processes to collect, filter, process, create, and distribute data.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit1_easy_2',
        question: 'What are the main components of an information system?',
        options: ['Hardware and software only', 'Hardware, software, data, networks, and people', 'Computer and internet', 'Programs and files'],
        correct: 'Hardware, software, data, networks, and people',
        explanation: 'Information systems consist of five key components: hardware, software, data, networks, and people.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit1_easy_3',
        question: 'What is data in an information system?',
        options: ['Programs', 'Raw facts and figures', 'Computer hardware', 'Network connections'],
        correct: 'Raw facts and figures',
        explanation: 'Data consists of raw facts and figures that can be processed into meaningful information.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit1_med_1',
        question: 'What is the difference between data and information?',
        options: ['No difference', 'Data is processed, information is raw', 'Data is raw facts, information is processed data', 'They are the same thing'],
        correct: 'Data is raw facts, information is processed data',
        explanation: 'Data consists of raw facts, while information is data that has been processed and organized to be meaningful.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit1_med_2',
        question: 'What is a Management Information System (MIS)?',
        options: ['Hardware system', 'System providing information for management decisions', 'Software program', 'Database only'],
        correct: 'System providing information for management decisions',
        explanation: 'MIS provides managers with information needed for effective decision-making and organizational control.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit1_hard_1',
        question: 'What is Enterprise Resource Planning (ERP)?',
        options: ['Simple database', 'Integrated system managing all business processes', 'Word processor', 'Web browser'],
        correct: 'Integrated system managing all business processes',
        explanation: 'ERP integrates core business processes like finance, HR, manufacturing, and supply chain into a unified system.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit2_emerging_technologies',
    name: 'Grade 12 Unit 2: Emerging Technologies',
    description: 'Exploration of cutting-edge technologies and their impact on society',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit2_easy_1',
        question: 'What is artificial intelligence (AI)?',
        options: ['Computer graphics', 'Machines performing tasks requiring human intelligence', 'Internet technology', 'Database system'],
        correct: 'Machines performing tasks requiring human intelligence',
        explanation: 'AI refers to computer systems that can perform tasks typically requiring human intelligence.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit2_easy_2',
        question: 'What is the Internet of Things (IoT)?',
        options: ['Social media', 'Network of connected devices', 'Web browser', 'Computer virus'],
        correct: 'Network of connected devices',
        explanation: 'IoT refers to the network of physical devices connected to the internet, collecting and sharing data.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit2_easy_3',
        question: 'What is cloud computing?',
        options: ['Weather prediction', 'Delivering computing services over the internet', 'Local storage', 'Computer hardware'],
        correct: 'Delivering computing services over the internet',
        explanation: 'Cloud computing delivers computing services like storage, processing, and software over the internet.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit2_med_1',
        question: 'What is machine learning?',
        options: ['Manual programming', 'Systems that learn from data without explicit programming', 'Hardware repair', 'Internet browsing'],
        correct: 'Systems that learn from data without explicit programming',
        explanation: 'Machine learning enables computers to learn and improve from experience without being explicitly programmed.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit2_med_2',
        question: 'What is blockchain technology?',
        options: ['Social network', 'Distributed ledger technology', 'Video game', 'Email system'],
        correct: 'Distributed ledger technology',
        explanation: 'Blockchain is a distributed ledger technology that maintains a secure, transparent record of transactions.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit2_hard_1',
        question: 'What is quantum computing?',
        options: ['Regular computing', 'Computing using quantum mechanical phenomena', 'Internet technology', 'Mobile computing'],
        correct: 'Computing using quantum mechanical phenomena',
        explanation: 'Quantum computing uses quantum mechanical phenomena like superposition and entanglement to process information.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit3_database_management',
    name: 'Grade 12 Unit 3: Database Management System',
    description: 'Understanding database concepts, design, and management principles',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit3_easy_1',
        question: 'What is a database?',
        options: ['Single file', 'Organized collection of data', 'Computer program', 'Hardware device'],
        correct: 'Organized collection of data',
        explanation: 'A database is an organized collection of structured information stored electronically.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit3_easy_2',
        question: 'What is a table in a database?',
        options: ['Furniture', 'Collection of related records', 'Computer screen', 'Network connection'],
        correct: 'Collection of related records',
        explanation: 'A table is a collection of related data entries consisting of rows and columns.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit3_easy_3',
        question: 'What is a primary key?',
        options: ['Password', 'Unique identifier for records', 'Database name', 'Table color'],
        correct: 'Unique identifier for records',
        explanation: 'A primary key is a unique identifier that ensures each record in a table can be uniquely identified.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit3_med_1',
        question: 'What is SQL?',
        options: ['Programming language', 'Structured Query Language for databases', 'Hardware component', 'Operating system'],
        correct: 'Structured Query Language for databases',
        explanation: 'SQL (Structured Query Language) is used to communicate with and manipulate databases.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit3_med_2',
        question: 'What is normalization in databases?',
        options: ['Making databases normal', 'Organizing data to reduce redundancy', 'Copying data', 'Deleting data'],
        correct: 'Organizing data to reduce redundancy',
        explanation: 'Normalization is the process of organizing data to reduce redundancy and improve data integrity.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit3_hard_1',
        question: 'What is ACID in database transactions?',
        options: ['Chemical property', 'Atomicity, Consistency, Isolation, Durability', 'Database software', 'Network protocol'],
        correct: 'Atomicity, Consistency, Isolation, Durability',
        explanation: 'ACID properties ensure reliable database transactions: Atomicity, Consistency, Isolation, and Durability.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit4_web_authoring',
    name: 'Grade 12 Unit 4: Web Authoring',
    description: 'Creating and designing web pages using HTML, CSS, and JavaScript',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit4_easy_1',
        question: 'What is HTML?',
        options: ['Programming language', 'HyperText Markup Language', 'Database system', 'Operating system'],
        correct: 'HyperText Markup Language',
        explanation: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit4_easy_2',
        question: 'What is CSS?',
        options: ['Programming language', 'Cascading Style Sheets', 'Database query', 'Hardware component'],
        correct: 'Cascading Style Sheets',
        explanation: 'CSS (Cascading Style Sheets) is used to style and layout web pages.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit4_easy_3',
        question: 'What is the purpose of HTML tags?',
        options: ['Style web pages', 'Structure web content', 'Store data', 'Connect to internet'],
        correct: 'Structure web content',
        explanation: 'HTML tags are used to structure and organize content on web pages.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit4_med_1',
        question: 'What is JavaScript?',
        options: ['Markup language', 'Programming language for web interactivity', 'Style sheet language', 'Database language'],
        correct: 'Programming language for web interactivity',
        explanation: 'JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit4_med_2',
        question: 'What is responsive web design?',
        options: ['Fast websites', 'Design that adapts to different screen sizes', 'Colorful websites', 'Animated websites'],
        correct: 'Design that adapts to different screen sizes',
        explanation: 'Responsive web design ensures websites work well on various devices and screen sizes.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit4_hard_1',
        question: 'What is the DOM in web development?',
        options: ['Database', 'Document Object Model', 'Design software', 'Network protocol'],
        correct: 'Document Object Model',
        explanation: 'The DOM (Document Object Model) is a programming interface that represents HTML documents as objects.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit5_maintenance_troubleshooting',
    name: 'Grade 12 Unit 5: Maintenance and Troubleshooting',
    description: 'Computer system maintenance, problem diagnosis, and troubleshooting techniques',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit5_easy_1',
        question: 'What is computer maintenance?',
        options: ['Buying new computers', 'Regular care to keep systems running properly', 'Playing games', 'Using internet'],
        correct: 'Regular care to keep systems running properly',
        explanation: 'Computer maintenance involves regular activities to keep computer systems running efficiently and prevent problems.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit5_easy_2',
        question: 'What is troubleshooting?',
        options: ['Creating problems', 'Process of diagnosing and solving problems', 'Installing software', 'Connecting to internet'],
        correct: 'Process of diagnosing and solving problems',
        explanation: 'Troubleshooting is the systematic process of diagnosing and resolving problems in computer systems.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit5_easy_3',
        question: 'What is preventive maintenance?',
        options: ['Fixing broken computers', 'Regular maintenance to prevent problems', 'Buying insurance', 'Training users'],
        correct: 'Regular maintenance to prevent problems',
        explanation: 'Preventive maintenance involves regular activities performed to prevent system failures and extend equipment life.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit5_med_1',
        question: 'What is system backup?',
        options: ['Deleting files', 'Creating copies of data for recovery', 'Installing updates', 'Cleaning hardware'],
        correct: 'Creating copies of data for recovery',
        explanation: 'System backup involves creating copies of data and system configurations for recovery in case of failure.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit5_med_2',
        question: 'What is disk defragmentation?',
        options: ['Breaking the disk', 'Reorganizing data for better performance', 'Cleaning the disk', 'Formatting the disk'],
        correct: 'Reorganizing data for better performance',
        explanation: 'Disk defragmentation reorganizes scattered data on hard drives to improve system performance.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit5_hard_1',
        question: 'What is system imaging?',
        options: ['Taking photos', 'Creating exact copy of entire system', 'Image editing', 'Graphic design'],
        correct: 'Creating exact copy of entire system',
        explanation: 'System imaging creates an exact copy of an entire computer system, including OS, applications, and data.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit6_programming_fundamentals',
    name: 'Grade 12 Unit 6: Fundamentals of Programming',
    description: 'Basic programming concepts, algorithms, and programming language principles',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit6_easy_1',
        question: 'What is programming?',
        options: ['Using computer software', 'Creating instructions for computers', 'Browsing the internet', 'Playing computer games'],
        correct: 'Creating instructions for computers',
        explanation: 'Programming is the process of creating instructions that tell a computer how to perform specific tasks.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit6_easy_2',
        question: 'What is an algorithm?',
        options: ['Computer hardware', 'Step-by-step procedure for solving problems', 'Software application', 'Internet protocol'],
        correct: 'Step-by-step procedure for solving problems',
        explanation: 'An algorithm is a step-by-step procedure or formula for solving a problem or completing a task.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit6_easy_3',
        question: 'What is a variable in programming?',
        options: ['Constant value', 'Named storage location for data', 'Computer component', 'Network address'],
        correct: 'Named storage location for data',
        explanation: 'A variable is a named storage location that can hold different values during program execution.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit6_med_1',
        question: 'What is pseudocode?',
        options: ['Fake programming', 'Informal description of algorithm logic', 'Programming language', 'Error message'],
        correct: 'Informal description of algorithm logic',
        explanation: 'Pseudocode is an informal way to describe algorithm logic using natural language and programming structures.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit6_med_2',
        question: 'What is a flowchart?',
        options: ['Water diagram', 'Visual representation of algorithm steps', 'Organization chart', 'Network diagram'],
        correct: 'Visual representation of algorithm steps',
        explanation: 'A flowchart is a visual diagram that represents the steps and decision points in an algorithm or process.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit6_hard_1',
        question: 'What is computational thinking?',
        options: ['Using computers', 'Problem-solving process using computer science principles', 'Fast thinking', 'Mathematical calculation'],
        correct: 'Problem-solving process using computer science principles',
        explanation: 'Computational thinking is a problem-solving process that includes decomposition, pattern recognition, abstraction, and algorithms.',
        difficulty: 'hard'
      }
    ]
  }
];
