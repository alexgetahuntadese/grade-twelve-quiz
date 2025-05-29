import { Chapter } from '../types';

export const chemistryChapters: Chapter[] = [
  {
    id: 'atomic_structure',
    name: 'Atomic Structure',
    description: 'Atoms, electrons, and periodic trends',
    questions: [
      {
        id: 'atom_1',
        question: 'What is the charge of a proton?',
        options: ['+1', '-1', '0', '+2'],
        correct: '+1',
        explanation: 'Protons carry a positive charge of +1 elementary charge.',
        difficulty: 'easy'
      },
      {
        id: 'atom_2',
        question: 'Where are electrons located in an atom?',
        options: ['Nucleus', 'Electron shells', 'Proton shells', 'Neutron cloud'],
        correct: 'Electron shells',
        explanation: 'Electrons occupy electron shells or orbitals around the nucleus.',
        difficulty: 'easy'
      },
      {
        id: 'atom_3',
        question: 'What determines the atomic number of an element?',
        options: ['Number of neutrons', 'Number of protons', 'Number of electrons', 'Atomic mass'],
        correct: 'Number of protons',
        explanation: 'The atomic number is defined by the number of protons in the nucleus.',
        difficulty: 'easy'
      },
      {
        id: 'atom_4',
        question: 'How many electrons can the first electron shell hold?',
        options: ['2', '4', '8', '18'],
        correct: '2',
        explanation: 'The first electron shell (1s orbital) can hold a maximum of 2 electrons.',
        difficulty: 'easy'
      },
      {
        id: 'atom_5',
        question: 'What are isotopes?',
        options: ['Atoms with same number of protons but different neutrons', 'Atoms with same mass', 'Atoms with same electrons', 'Different elements'],
        correct: 'Atoms with same number of protons but different neutrons',
        explanation: 'Isotopes are atoms of the same element with different numbers of neutrons.',
        difficulty: 'easy'
      },
      {
        id: 'atom_6',
        question: 'Which subatomic particle has no charge?',
        options: ['Proton', 'Electron', 'Neutron', 'Ion'],
        correct: 'Neutron',
        explanation: 'Neutrons are electrically neutral particles.',
        difficulty: 'easy'
      },
      {
        id: 'atom_7',
        question: 'What is the maximum number of electrons in the second shell?',
        options: ['2', '6', '8', '10'],
        correct: '8',
        explanation: 'The second shell can hold up to 8 electrons (2 in 2s + 6 in 2p).',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'atom_8',
        question: 'What is the electron configuration of carbon (Z=6)?',
        options: ['1s² 2s² 2p²', '1s² 2s⁴', '1s² 2p⁴', '2s² 2p⁴'],
        correct: '1s² 2s² 2p²',
        explanation: 'Carbon has 6 electrons: 2 in 1s, 2 in 2s, and 2 in 2p orbitals.',
        difficulty: 'medium'
      },
      {
        id: 'atom_9',
        question: 'Which principle states that electrons fill orbitals of lowest energy first?',
        options: ['Pauli exclusion principle', 'Hund\'s rule', 'Aufbau principle', 'Heisenberg principle'],
        correct: 'Aufbau principle',
        explanation: 'The Aufbau principle states that electrons occupy the lowest energy orbitals first.',
        difficulty: 'medium'
      },
      {
        id: 'atom_10',
        question: 'How many orbitals are in the p subshell?',
        options: ['1', '3', '5', '7'],
        correct: '3',
        explanation: 'The p subshell contains 3 orbitals (px, py, pz), each holding up to 2 electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_11',
        question: 'What is the atomic mass of an atom with 6 protons and 8 neutrons?',
        options: ['6', '8', '14', '48'],
        correct: '14',
        explanation: 'Atomic mass = protons + neutrons = 6 + 8 = 14.',
        difficulty: 'medium'
      },
      {
        id: 'atom_12',
        question: 'Which quantum number describes the shape of an orbital?',
        options: ['n', 'l', 'ml', 'ms'],
        correct: 'l',
        explanation: 'The azimuthal quantum number (l) determines the shape of the orbital.',
        difficulty: 'medium'
      },
      {
        id: 'atom_13',
        question: 'What is the maximum number of electrons that can have the quantum numbers n=3, l=1?',
        options: ['2', '6', '10', '14'],
        correct: '6',
        explanation: 'For n=3, l=1 (3p subshell), there are 3 orbitals × 2 electrons = 6 electrons maximum.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'atom_14',
        question: 'What is the ground state electron configuration of chromium (Z=24)?',
        options: ['[Ar] 4s² 3d⁴', '[Ar] 4s¹ 3d⁵', '[Ar] 4s⁰ 3d⁶', '[Ar] 3d⁶'],
        correct: '[Ar] 4s¹ 3d⁵',
        explanation: 'Chromium is an exception - it has one electron in 4s and five in 3d for stability.',
        difficulty: 'hard'
      },
      {
        id: 'atom_15',
        question: 'Which has the largest first ionization energy?',
        options: ['Li', 'Be', 'B', 'C'],
        correct: 'Be',
        explanation: 'Beryllium has the highest first ionization energy due to its complete 2s subshell.',
        difficulty: 'hard'
      },
      {
        id: 'atom_16',
        question: 'What is the effective nuclear charge experienced by a 2p electron in nitrogen?',
        options: ['7', '5.85', '2.85', '4.15'],
        correct: '2.85',
        explanation: 'Using Slater\'s rules: Zeff = 7 - (2×0.85 + 4×0.35) = 7 - 4.15 = 2.85',
        difficulty: 'hard'
      },
      {
        id: 'atom_17',
        question: 'How many unpaired electrons does manganese (Z=25) have in its ground state?',
        options: ['3', '4', '5', '6'],
        correct: '5',
        explanation: 'Mn: [Ar] 4s² 3d⁵. The 3d⁵ configuration has 5 unpaired electrons (Hund\'s rule).',
        difficulty: 'hard'
      },
      {
        id: 'atom_18',
        question: 'What is the spin-orbit coupling constant for hydrogen\'s 2p state?',
        options: ['Positive', 'Negative', 'Zero', 'Infinite'],
        correct: 'Positive',
        explanation: 'For less than half-filled subshells, j = l - 1/2, giving positive coupling.',
        difficulty: 'hard'
      },
      {
        id: 'atom_19',
        question: 'Which element has the electron configuration [Xe] 6s¹ 4f¹⁴ 5d¹⁰?',
        options: ['Au', 'Hg', 'Tl', 'Pb'],
        correct: 'Au',
        explanation: 'Gold (Au, Z=79) has this electron configuration with filled f and d subshells.',
        difficulty: 'hard'
      },
      {
        id: 'atom_20',
        question: 'What is the magnetic quantum number range for d orbitals?',
        options: ['-1 to +1', '-2 to +2', '-3 to +3', '-4 to +4'],
        correct: '-2 to +2',
        explanation: 'For d orbitals (l=2), ml ranges from -2 to +2, giving 5 possible values.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'chemical_bonding',
    name: 'Chemical Bonding',
    description: 'How atoms combine to form compounds',
    questions: [
      {
        id: 'bond_1',
        question: 'What type of bond forms between metals and non-metals?',
        options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
        correct: 'Ionic',
        explanation: 'Ionic bonds form when electrons are transferred from metals to non-metals.',
        difficulty: 'easy'
      },
      {
        id: 'bond_2',
        question: 'What is a covalent bond?',
        options: ['Sharing of electrons', 'Transfer of electrons', 'Attraction between ions', 'Metallic bonding'],
        correct: 'Sharing of electrons',
        explanation: 'Covalent bonds involve the sharing of electron pairs between atoms.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'periodic_table',
    name: 'Periodic Table',
    description: 'Organization of elements and periodic trends',
    questions: [
      {
        id: 'per_1',
        question: 'How many elements are in the modern periodic table?',
        options: ['92', '103', '118', '120'],
        correct: '118',
        explanation: 'As of now, there are 118 confirmed elements in the periodic table.',
        difficulty: 'easy'
      },
      {
        id: 'per_2',
        question: 'What is the most abundant element in the universe?',
        options: ['Oxygen', 'Carbon', 'Hydrogen', 'Helium'],
        correct: 'Hydrogen',
        explanation: 'Hydrogen makes up about 75% of the universe\'s mass.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'stoichiometry',
    name: 'Stoichiometry',
    description: 'Quantitative relationships in chemical reactions',
    questions: [
      {
        id: 'stoi_1',
        question: 'What is Avogadro\'s number?',
        options: ['6.02 × 10²³', '6.02 × 10²²', '6.02 × 10²⁴', '6.02 × 10²¹'],
        correct: '6.02 × 10²³',
        explanation: 'Avogadro\'s number is approximately 6.02 × 10²³ particles per mole.',
        difficulty: 'easy'
      },
      {
        id: 'stoi_2',
        question: 'What is a mole?',
        options: ['A small animal', 'A unit of amount', 'A type of reaction', 'A measuring tool'],
        correct: 'A unit of amount',
        explanation: 'A mole is the SI unit for amount of substance.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'acids_bases',
    name: 'Acids and Bases',
    description: 'Properties and reactions of acids and bases',
    questions: [
      {
        id: 'acid_1',
        question: 'What is the pH of pure water?',
        options: ['0', '7', '14', '1'],
        correct: '7',
        explanation: 'Pure water has a neutral pH of 7.',
        difficulty: 'easy'
      },
      {
        id: 'acid_2',
        question: 'What does pH measure?',
        options: ['Temperature', 'Pressure', 'Acidity/basicity', 'Density'],
        correct: 'Acidity/basicity',
        explanation: 'pH measures the concentration of hydrogen ions, indicating acidity or basicity.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'organic_chemistry',
    name: 'Organic Chemistry',
    description: 'Chemistry of carbon compounds',
    questions: [
      {
        id: 'org_1',
        question: 'What is the simplest hydrocarbon?',
        options: ['Ethane', 'Methane', 'Propane', 'Butane'],
        correct: 'Methane',
        explanation: 'Methane (CH₄) is the simplest hydrocarbon with one carbon atom.',
        difficulty: 'easy'
      },
      {
        id: 'org_2',
        question: 'What functional group characterizes alcohols?',
        options: ['-OH', '-COOH', '-NH₂', '-CHO'],
        correct: '-OH',
        explanation: 'Alcohols contain the hydroxyl functional group (-OH).',
        difficulty: 'easy'
      }
    ]
  }
];
