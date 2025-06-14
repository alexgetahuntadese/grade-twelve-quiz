
import { Chapter } from '../types';

export const informationTechnologyChapters: Chapter[] = [
  {
    id: 'computer_basics',
    name: 'Computer Fundamentals',
    description: 'Basic computer concepts, hardware, and software',
    questions: [
      // Easy Questions (10)
      {
        id: 'comp_easy_1',
        question: 'What is a computer?',
        options: ['Only a calculator', 'Electronic device that processes data', 'Only for games', 'Only for internet'],
        correct: 'Electronic device that processes data',
        explanation: 'A computer is an electronic device that can store, retrieve, and process data according to programmed instructions.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_2',
        question: 'What are the main components of a computer system?',
        options: ['Only hardware', 'Hardware, software, and users', 'Only software', 'Only users'],
        correct: 'Hardware, software, and users',
        explanation: 'A computer system consists of hardware (physical components), software (programs), and users (people who operate it).',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_3',
        question: 'What is hardware?',
        options: ['Software programs', 'Physical components of computer', 'Internet connection', 'User interface'],
        correct: 'Physical components of computer',
        explanation: 'Hardware refers to the physical, tangible components of a computer system.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_4',
        question: 'What is software?',
        options: ['Physical components', 'Programs and instructions for computer', 'Internet connection', 'Computer screen'],
        correct: 'Programs and instructions for computer',
        explanation: 'Software consists of programs and instructions that tell the computer what to do.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_5',
        question: 'What is the CPU?',
        options: ['Computer screen', 'Central Processing Unit - brain of computer', 'Keyboard', 'Mouse'],
        correct: 'Central Processing Unit - brain of computer',
        explanation: 'The CPU (Central Processing Unit) is the brain of the computer that executes instructions.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_6',
        question: 'What is RAM?',
        options: ['Hard disk', 'Random Access Memory - temporary storage', 'Monitor', 'Keyboard'],
        correct: 'Random Access Memory - temporary storage',
        explanation: 'RAM (Random Access Memory) is temporary storage that holds data and programs currently being used.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_7',
        question: 'What is input?',
        options: ['Information coming out of computer', 'Information going into computer', 'Processing data', 'Storing data'],
        correct: 'Information going into computer',
        explanation: 'Input is data or information that is entered into the computer for processing.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_8',
        question: 'What is output?',
        options: ['Information going into computer', 'Information coming out of computer', 'Processing data', 'Storing data'],
        correct: 'Information coming out of computer',
        explanation: 'Output is processed data or information that comes out of the computer.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_9',
        question: 'What is storage?',
        options: ['Temporary memory only', 'Permanent keeping of data', 'Processing data', 'Input device'],
        correct: 'Permanent keeping of data',
        explanation: 'Storage refers to permanent keeping of data and programs for future use.',
        difficulty: 'easy'
      },
      {
        id: 'comp_easy_10',
        question: 'What is an operating system?',
        options: ['Hardware component', 'Software that manages computer resources', 'Input device', 'Storage device'],
        correct: 'Software that manages computer resources',
        explanation: 'An operating system is software that manages computer hardware and software resources.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'comp_med_1',
        question: 'What is the difference between RAM and ROM?',
        options: ['No difference', 'RAM: temporary, ROM: permanent', 'Only size differs', 'Only speed differs'],
        correct: 'RAM: temporary, ROM: permanent',
        explanation: 'RAM is volatile (temporary) memory that loses data when power is off; ROM is non-volatile (permanent) memory.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_2',
        question: 'What is the difference between hardware and software?',
        options: ['No difference', 'Hardware: physical, Software: programs', 'Only cost differs', 'Only size differs'],
        correct: 'Hardware: physical, Software: programs',
        explanation: 'Hardware consists of physical components you can touch; software consists of programs and instructions.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_3',
        question: 'What is a motherboard?',
        options: ['External device', 'Main circuit board connecting all components', 'Power supply', 'Storage device'],
        correct: 'Main circuit board connecting all components',
        explanation: 'The motherboard is the main circuit board that connects and allows communication between all computer components.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_4',
        question: 'What is cache memory?',
        options: ['Main storage', 'High-speed memory between CPU and RAM', 'Input device', 'Output device'],
        correct: 'High-speed memory between CPU and RAM',
        explanation: 'Cache memory is high-speed memory that stores frequently used data for quick access by the CPU.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_5',
        question: 'What is a graphics card?',
        options: ['Storage device', 'Component that handles visual output', 'Input device', 'Power supply'],
        correct: 'Component that handles visual output',
        explanation: 'A graphics card processes and outputs visual information to displays.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_6',
        question: 'What is the difference between HDD and SSD?',
        options: ['No difference', 'HDD: mechanical, SSD: electronic', 'Only size differs', 'Only color differs'],
        correct: 'HDD: mechanical, SSD: electronic',
        explanation: 'HDD (Hard Disk Drive) uses mechanical parts; SSD (Solid State Drive) uses electronic memory chips.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_7',
        question: 'What is binary code?',
        options: ['Decimal system', 'Number system using only 0s and 1s', 'Text format', 'Image format'],
        correct: 'Number system using only 0s and 1s',
        explanation: 'Binary code is a number system that uses only two digits (0 and 1) to represent all data in computers.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_8',
        question: 'What is a bit?',
        options: ['Large data unit', 'Smallest unit of data (0 or 1)', 'Hardware component', 'Software program'],
        correct: 'Smallest unit of data (0 or 1)',
        explanation: 'A bit is the smallest unit of data in computing, representing either 0 or 1.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_9',
        question: 'What is a byte?',
        options: ['1 bit', '8 bits', '16 bits', '32 bits'],
        correct: '8 bits',
        explanation: 'A byte consists of 8 bits and is the basic unit for measuring computer memory and storage.',
        difficulty: 'medium'
      },
      {
        id: 'comp_med_10',
        question: 'What is multitasking?',
        options: ['Single task execution', 'Running multiple programs simultaneously', 'Hardware installation', 'Software installation'],
        correct: 'Running multiple programs simultaneously',
        explanation: 'Multitasking is the ability of an operating system to run multiple programs at the same time.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'comp_hard_1',
        question: 'What is virtual memory?',
        options: ['Physical RAM only', 'Using hard disk space as extended RAM', 'Graphics memory', 'Cache memory'],
        correct: 'Using hard disk space as extended RAM',
        explanation: 'Virtual memory uses hard disk space to extend available RAM when physical memory is insufficient.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_2',
        question: 'What is pipelining in CPU?',
        options: ['Single instruction execution', 'Overlapping execution of multiple instructions', 'Memory management', 'Storage technique'],
        correct: 'Overlapping execution of multiple instructions',
        explanation: 'Pipelining allows the CPU to work on multiple instructions simultaneously by overlapping their execution stages.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_3',
        question: 'What is interrupt handling?',
        options: ['Continuous processing', 'CPU responding to urgent requests', 'Memory allocation', 'File management'],
        correct: 'CPU responding to urgent requests',
        explanation: 'Interrupt handling allows the CPU to temporarily stop current tasks to respond to urgent requests from hardware or software.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_4',
        question: 'What is DMA (Direct Memory Access)?',
        options: ['CPU-controlled data transfer', 'Hardware accessing memory without CPU', 'Software installation', 'User interface'],
        correct: 'Hardware accessing memory without CPU',
        explanation: 'DMA allows hardware devices to access memory directly without involving the CPU, improving system efficiency.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_5',
        question: 'What is instruction set architecture (ISA)?',
        options: ['Physical design', 'Interface between hardware and software', 'Memory layout', 'Storage format'],
        correct: 'Interface between hardware and software',
        explanation: 'ISA defines the interface between computer hardware and software, specifying supported instructions.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_6',
        question: 'What is parallel processing?',
        options: ['Sequential execution', 'Simultaneous execution using multiple processors', 'Single processor use', 'Memory management'],
        correct: 'Simultaneous execution using multiple processors',
        explanation: 'Parallel processing uses multiple processors to execute tasks simultaneously, improving performance.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_7',
        question: 'What is RISC vs CISC?',
        options: ['Memory types', 'CPU design philosophies', 'Storage formats', 'Network protocols'],
        correct: 'CPU design philosophies',
        explanation: 'RISC (Reduced Instruction Set Computer) and CISC (Complex Instruction Set Computer) are different CPU design approaches.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_8',
        question: 'What is memory hierarchy?',
        options: ['Single memory type', 'Organized levels of memory with different speeds and costs', 'Memory installation', 'Memory testing'],
        correct: 'Organized levels of memory with different speeds and costs',
        explanation: 'Memory hierarchy organizes different types of memory (cache, RAM, storage) by speed, size, and cost.',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_9',
        question: 'What is clock frequency?',
        options: ['Time display', 'Rate at which CPU executes instructions', 'Memory speed', 'Storage speed'],
        correct: 'Rate at which CPU executes instructions',
        explanation: 'Clock frequency determines how fast the CPU can execute instructions, measured in hertz (Hz).',
        difficulty: 'hard'
      },
      {
        id: 'comp_hard_10',
        question: 'What is von Neumann architecture?',
        options: ['Modern design only', 'Computer design with shared memory for data and instructions', 'Graphics design', 'Network design'],
        correct: 'Computer design with shared memory for data and instructions',
        explanation: 'Von Neumann architecture is a computer design where data and program instructions share the same memory space.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_programming',
    name: 'Grade 11: Programming Fundamentals',
    description: 'Basic programming concepts, algorithms, and problem-solving',
    questions: [
      // Easy Questions (10)
      {
        id: 'g11_prog_easy_1',
        question: 'What is programming?',
        options: ['Using computer programs', 'Creating instructions for computers', 'Playing computer games', 'Browsing internet'],
        correct: 'Creating instructions for computers',
        explanation: 'Programming is the process of creating instructions (code) that tell a computer what to do.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_2',
        question: 'What is an algorithm?',
        options: ['Computer program', 'Step-by-step solution to a problem', 'Hardware component', 'Software application'],
        correct: 'Step-by-step solution to a problem',
        explanation: 'An algorithm is a step-by-step procedure for solving a problem or completing a task.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_3',
        question: 'What is a variable?',
        options: ['Fixed value', 'Storage location with a name that holds data', 'Hardware component', 'Software program'],
        correct: 'Storage location with a name that holds data',
        explanation: 'A variable is a named storage location that can hold different values during program execution.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_4',
        question: 'What is a constant?',
        options: ['Changing value', 'Fixed value that cannot change', 'Variable type', 'Function'],
        correct: 'Fixed value that cannot change',
        explanation: 'A constant is a value that remains the same throughout program execution.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_5',
        question: 'What is input in programming?',
        options: ['Program output', 'Data provided to program', 'Processing step', 'Storage operation'],
        correct: 'Data provided to program',
        explanation: 'Input is data that is provided to a program from external sources like user, files, or sensors.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_6',
        question: 'What is output in programming?',
        options: ['Data input to program', 'Results produced by program', 'Processing step', 'Storage operation'],
        correct: 'Results produced by program',
        explanation: 'Output is the result or information produced by a program and displayed to users or sent to other systems.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_7',
        question: 'What is a loop?',
        options: ['Single execution', 'Repeated execution of code', 'Decision making', 'Data storage'],
        correct: 'Repeated execution of code',
        explanation: 'A loop is a programming construct that repeats a block of code multiple times.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_8',
        question: 'What is a condition?',
        options: ['Hardware state', 'Expression that evaluates to true or false', 'Variable type', 'Function'],
        correct: 'Expression that evaluates to true or false',
        explanation: 'A condition is an expression that can be evaluated as either true or false, used in decision-making.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_9',
        question: 'What is debugging?',
        options: ['Writing new code', 'Finding and fixing errors in code', 'Running programs', 'Designing interfaces'],
        correct: 'Finding and fixing errors in code',
        explanation: 'Debugging is the process of finding and fixing errors (bugs) in computer programs.',
        difficulty: 'easy'
      },
      {
        id: 'g11_prog_easy_10',
        question: 'What is pseudocode?',
        options: ['Real programming language', 'Plain language description of algorithms', 'Machine code', 'Assembly language'],
        correct: 'Plain language description of algorithms',
        explanation: 'Pseudocode is a plain language description of programming logic that is independent of specific programming languages.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g11_prog_med_1',
        question: 'What is the difference between a for loop and while loop?',
        options: ['No difference', 'For: known iterations, While: condition-based', 'Only syntax differs', 'Only speed differs'],
        correct: 'For: known iterations, While: condition-based',
        explanation: 'For loops are typically used when the number of iterations is known; while loops when iterations depend on a condition.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_2',
        question: 'What is a function?',
        options: ['Variable type', 'Reusable block of code that performs specific task', 'Data structure', 'Hardware component'],
        correct: 'Reusable block of code that performs specific task',
        explanation: 'A function is a reusable block of code designed to perform a specific task.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_3',
        question: 'What are parameters in functions?',
        options: ['Return values', 'Input values passed to functions', 'Local variables only', 'Global variables'],
        correct: 'Input values passed to functions',
        explanation: 'Parameters are input values that are passed to functions when they are called.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_4',
        question: 'What is an array?',
        options: ['Single value', 'Collection of elements of same type', 'Function type', 'Loop type'],
        correct: 'Collection of elements of same type',
        explanation: 'An array is a data structure that stores multiple elements of the same type in a sequential manner.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_5',
        question: 'What is the difference between local and global variables?',
        options: ['No difference', 'Local: limited scope, Global: accessible everywhere', 'Only naming differs', 'Only type differs'],
        correct: 'Local: limited scope, Global: accessible everywhere',
        explanation: 'Local variables are accessible only within their defined scope; global variables are accessible throughout the program.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_6',
        question: 'What is conditional statement?',
        options: ['Loop structure', 'Code that executes based on conditions', 'Variable declaration', 'Function definition'],
        correct: 'Code that executes based on conditions',
        explanation: 'Conditional statements execute different code blocks based on whether specified conditions are true or false.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_7',
        question: 'What is flowchart?',
        options: ['Text description', 'Visual representation of algorithm', 'Programming language', 'Data structure'],
        correct: 'Visual representation of algorithm',
        explanation: 'A flowchart is a visual representation of an algorithm using symbols and arrows to show the flow of execution.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_8',
        question: 'What is syntax error?',
        options: ['Logic error', 'Violation of programming language rules', 'Runtime error', 'Performance issue'],
        correct: 'Violation of programming language rules',
        explanation: 'A syntax error occurs when code violates the grammatical rules of the programming language.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_9',
        question: 'What is logical error?',
        options: ['Syntax mistake', 'Error in program logic producing wrong results', 'Compilation error', 'Hardware error'],
        correct: 'Error in program logic producing wrong results',
        explanation: 'A logical error occurs when the program runs without crashing but produces incorrect results due to flawed logic.',
        difficulty: 'medium'
      },
      {
        id: 'g11_prog_med_10',
        question: 'What is modular programming?',
        options: ['Single large program', 'Breaking program into smaller modules', 'Hardware design', 'Database design'],
        correct: 'Breaking program into smaller modules',
        explanation: 'Modular programming divides a program into separate modules or functions, each handling specific tasks.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g11_prog_hard_1',
        question: 'What is recursion?',
        options: ['Linear execution', 'Function calling itself', 'Loop structure', 'Error handling'],
        correct: 'Function calling itself',
        explanation: 'Recursion is a programming technique where a function calls itself to solve smaller instances of the same problem.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_2',
        question: 'What is time complexity?',
        options: ['Execution time only', 'How algorithm performance scales with input size', 'Programming time', 'Development time'],
        correct: 'How algorithm performance scales with input size',
        explanation: 'Time complexity describes how the running time of an algorithm increases as the input size grows.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_3',
        question: 'What is space complexity?',
        options: ['Storage space only', 'Memory usage relative to input size', 'Physical space', 'File size'],
        correct: 'Memory usage relative to input size',
        explanation: 'Space complexity describes how much memory an algorithm uses as the input size increases.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_4',
        question: 'What is Big O notation?',
        options: ['Programming language', 'Mathematical notation for algorithm efficiency', 'Variable naming', 'Function syntax'],
        correct: 'Mathematical notation for algorithm efficiency',
        explanation: 'Big O notation is used to describe the efficiency of algorithms in terms of time and space complexity.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_5',
        question: 'What is a stack data structure?',
        options: ['Random access structure', 'Last In First Out (LIFO) structure', 'First In First Out structure', 'Sorted structure'],
        correct: 'Last In First Out (LIFO) structure',
        explanation: 'A stack is a LIFO data structure where elements are added and removed from the same end (top).',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_6',
        question: 'What is a queue data structure?',
        options: ['Last In First Out structure', 'First In First Out (FIFO) structure', 'Random access structure', 'Sorted structure'],
        correct: 'First In First Out (FIFO) structure',
        explanation: 'A queue is a FIFO data structure where elements are added at one end and removed from the other end.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_7',
        question: 'What is object-oriented programming?',
        options: ['Procedure-based programming', 'Programming using objects and classes', 'Functional programming', 'Assembly programming'],
        correct: 'Programming using objects and classes',
        explanation: 'Object-oriented programming organizes code using objects and classes, emphasizing encapsulation, inheritance, and polymorphism.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_8',
        question: 'What is encapsulation?',
        options: ['Exposing all data', 'Hiding internal implementation details', 'Multiple inheritance', 'Function overloading'],
        correct: 'Hiding internal implementation details',
        explanation: 'Encapsulation is the practice of hiding internal implementation details and exposing only necessary interfaces.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_9',
        question: 'What is polymorphism?',
        options: ['Single form', 'Same interface for different underlying forms', 'Data hiding', 'Code reusability'],
        correct: 'Same interface for different underlying forms',
        explanation: 'Polymorphism allows objects of different types to be treated as instances of the same type through a common interface.',
        difficulty: 'hard'
      },
      {
        id: 'g11_prog_hard_10',
        question: 'What is inheritance?',
        options: ['Creating new classes', 'Deriving new classes from existing ones', 'Hiding data', 'Function overloading'],
        correct: 'Deriving new classes from existing ones',
        explanation: 'Inheritance allows new classes to be based on existing classes, inheriting their properties and methods.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_web_development',
    name: 'Grade 12: Web Development and Database Systems',
    description: 'Web technologies, databases, and system development',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_web_easy_1',
        question: 'What is HTML?',
        options: ['Programming language', 'Markup language for web pages', 'Database system', 'Operating system'],
        correct: 'Markup language for web pages',
        explanation: 'HTML (HyperText Markup Language) is a markup language used to create and structure web pages.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_2',
        question: 'What is CSS?',
        options: ['Programming language', 'Style sheet language for web design', 'Database language', 'Network protocol'],
        correct: 'Style sheet language for web design',
        explanation: 'CSS (Cascading Style Sheets) is used to style and layout web pages.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_3',
        question: 'What is JavaScript?',
        options: ['Markup language', 'Programming language for web interactivity', 'Style sheet language', 'Database language'],
        correct: 'Programming language for web interactivity',
        explanation: 'JavaScript is a programming language that adds interactivity and dynamic behavior to web pages.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_4',
        question: 'What is a web browser?',
        options: ['Web server', 'Software for accessing web pages', 'Database system', 'Programming tool'],
        correct: 'Software for accessing web pages',
        explanation: 'A web browser is software that allows users to access and view web pages on the internet.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_5',
        question: 'What is a web server?',
        options: ['Web browser', 'Computer that serves web pages to clients', 'Database', 'Programming language'],
        correct: 'Computer that serves web pages to clients',
        explanation: 'A web server is a computer system that stores and delivers web pages to clients over the internet.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_6',
        question: 'What is a database?',
        options: ['Web page', 'Organized collection of data', 'Programming language', 'Network protocol'],
        correct: 'Organized collection of data',
        explanation: 'A database is an organized collection of data that can be easily accessed, managed, and updated.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_7',
        question: 'What is SQL?',
        options: ['Markup language', 'Language for managing databases', 'Style sheet language', 'Programming language'],
        correct: 'Language for managing databases',
        explanation: 'SQL (Structured Query Language) is used to communicate with and manage databases.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_8',
        question: 'What is HTTP?',
        options: ['Programming language', 'Protocol for transferring web pages', 'Database system', 'Markup language'],
        correct: 'Protocol for transferring web pages',
        explanation: 'HTTP (HyperText Transfer Protocol) is the protocol used for transferring web pages over the internet.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_9',
        question: 'What is a URL?',
        options: ['Programming command', 'Web address', 'Database query', 'File format'],
        correct: 'Web address',
        explanation: 'URL (Uniform Resource Locator) is the address of a web page or resource on the internet.',
        difficulty: 'easy'
      },
      {
        id: 'g12_web_easy_10',
        question: 'What is a hyperlink?',
        options: ['Database connection', 'Clickable link to another page or resource', 'Programming function', 'Style element'],
        correct: 'Clickable link to another page or resource',
        explanation: 'A hyperlink is a clickable element that connects to another web page or resource.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_web_med_1',
        question: 'What is the difference between HTML and XHTML?',
        options: ['No difference', 'XHTML follows stricter XML rules', 'Only syntax highlighting differs', 'Only file extension differs'],
        correct: 'XHTML follows stricter XML rules',
        explanation: 'XHTML is HTML written according to stricter XML syntax rules, requiring proper nesting and closing tags.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_2',
        question: 'What is responsive web design?',
        options: ['Fast loading pages', 'Design that adapts to different screen sizes', 'Interactive design', 'Colorful design'],
        correct: 'Design that adapts to different screen sizes',
        explanation: 'Responsive web design creates websites that adapt and look good on various devices and screen sizes.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_3',
        question: 'What is DOM?',
        options: ['Programming language', 'Document Object Model - tree structure of web page', 'Database system', 'Web server'],
        correct: 'Document Object Model - tree structure of web page',
        explanation: 'DOM (Document Object Model) represents the structure of a web page as a tree of objects that can be manipulated.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_4',
        question: 'What is AJAX?',
        options: ['Programming language', 'Technique for updating web pages without reloading', 'Database system', 'Web server'],
        correct: 'Technique for updating web pages without reloading',
        explanation: 'AJAX (Asynchronous JavaScript and XML) allows web pages to update content dynamically without full page reloads.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_5',
        question: 'What is a primary key in databases?',
        options: ['Any column', 'Unique identifier for each record', 'Foreign key', 'Index column'],
        correct: 'Unique identifier for each record',
        explanation: 'A primary key uniquely identifies each record in a database table.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_6',
        question: 'What is a foreign key?',
        options: ['Primary key', 'Column that links to primary key in another table', 'Index column', 'Any column'],
        correct: 'Column that links to primary key in another table',
        explanation: 'A foreign key is a column that creates a link between two tables by referencing the primary key of another table.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_7',
        question: 'What is normalization in databases?',
        options: ['Data backup', 'Organizing data to reduce redundancy', 'Data encryption', 'Data compression'],
        correct: 'Organizing data to reduce redundancy',
        explanation: 'Normalization is the process of organizing database tables to reduce data redundancy and improve data integrity.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_8',
        question: 'What is client-server architecture?',
        options: ['Single computer system', 'Model where clients request services from servers', 'Database design', 'Programming pattern'],
        correct: 'Model where clients request services from servers',
        explanation: 'Client-server architecture is a computing model where clients request services from servers over a network.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_9',
        question: 'What is JSON?',
        options: ['Programming language', 'Lightweight data exchange format', 'Database system', 'Web server'],
        correct: 'Lightweight data exchange format',
        explanation: 'JSON (JavaScript Object Notation) is a lightweight format for storing and exchanging data.',
        difficulty: 'medium'
      },
      {
        id: 'g12_web_med_10',
        question: 'What is API?',
        options: ['Programming language', 'Set of protocols for building software', 'Database system', 'Web browser'],
        correct: 'Set of protocols for building software',
        explanation: 'API (Application Programming Interface) is a set of protocols and tools for building software applications.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_web_hard_1',
        question: 'What is MVC architecture?',
        options: ['Database design', 'Model-View-Controller design pattern', 'Network protocol', 'Programming language'],
        correct: 'Model-View-Controller design pattern',
        explanation: 'MVC is a software design pattern that separates application logic into Model (data), View (interface), and Controller (logic).',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_2',
        question: 'What is RESTful API?',
        options: ['Database type', 'Architectural style for web services', 'Programming language', 'Security protocol'],
        correct: 'Architectural style for web services',
        explanation: 'REST (Representational State Transfer) is an architectural style for designing networked applications.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_3',
        question: 'What is SQL injection?',
        options: ['Database feature', 'Security vulnerability in web applications', 'Programming technique', 'Data backup method'],
        correct: 'Security vulnerability in web applications',
        explanation: 'SQL injection is a security vulnerability where malicious SQL code is inserted into application queries.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_4',
        question: 'What is cross-site scripting (XSS)?',
        options: ['Programming technique', 'Security vulnerability allowing script injection', 'Database feature', 'Network protocol'],
        correct: 'Security vulnerability allowing script injection',
        explanation: 'XSS is a security vulnerability that allows attackers to inject malicious scripts into web pages.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_5',
        question: 'What is database indexing?',
        options: ['Data storage', 'Data structure improving query performance', 'Data backup', 'Data encryption'],
        correct: 'Data structure improving query performance',
        explanation: 'Database indexing creates data structures that improve the speed of data retrieval operations.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_6',
        question: 'What is ACID in databases?',
        options: ['Chemical property', 'Properties ensuring reliable transactions', 'Programming language', 'Network protocol'],
        correct: 'Properties ensuring reliable transactions',
        explanation: 'ACID (Atomicity, Consistency, Isolation, Durability) properties ensure reliable database transactions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_7',
        question: 'What is object-relational mapping (ORM)?',
        options: ['Database type', 'Technique for converting data between systems', 'Programming language', 'Web framework'],
        correct: 'Technique for converting data between systems',
        explanation: 'ORM is a programming technique for converting data between incompatible type systems in object-oriented languages.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_8',
        question: 'What is microservices architecture?',
        options: ['Single application', 'Architectural style using small, independent services', 'Database design', 'Programming pattern'],
        correct: 'Architectural style using small, independent services',
        explanation: 'Microservices architecture structures applications as collections of small, loosely coupled services.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_9',
        question: 'What is NoSQL database?',
        options: ['SQL extension', 'Non-relational database system', 'Programming language', 'Web framework'],
        correct: 'Non-relational database system',
        explanation: 'NoSQL databases are non-relational databases designed for specific data models and flexible schemas.',
        difficulty: 'hard'
      },
      {
        id: 'g12_web_hard_10',
        question: 'What is containerization in software deployment?',
        options: ['Data storage method', 'Packaging applications with dependencies', 'Programming technique', 'Database design'],
        correct: 'Packaging applications with dependencies',
        explanation: 'Containerization packages applications and their dependencies into containers for consistent deployment across environments.',
        difficulty: 'hard'
      }
    ]
  }
];
