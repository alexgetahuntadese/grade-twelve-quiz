
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
        id: 'atom_hard_1',
        question: 'What is the ground state electron configuration of chromium (Z=24)?',
        options: ['[Ar] 4s² 3d⁴', '[Ar] 4s¹ 3d⁵', '[Ar] 4s⁰ 3d⁶', '[Ar] 3d⁶'],
        correct: '[Ar] 4s¹ 3d⁵',
        explanation: 'Chromium is an exception - it has one electron in 4s and five in 3d for stability.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_organic_chemistry',
    name: 'Grade 11: Organic Chemistry',
    description: 'Carbon compounds, hydrocarbons, and functional groups',
    questions: [
      // Easy Questions
      {
        id: 'g11_org_easy_1',
        question: 'What is organic chemistry?',
        options: ['Study of carbon compounds', 'Study of metals', 'Study of gases', 'Study of crystals'],
        correct: 'Study of carbon compounds',
        explanation: 'Organic chemistry is the study of carbon-containing compounds.',
        difficulty: 'easy'
      },
      {
        id: 'g11_org_easy_2',
        question: 'What is the simplest hydrocarbon?',
        options: ['Ethane', 'Methane', 'Propane', 'Butane'],
        correct: 'Methane',
        explanation: 'Methane (CH₄) is the simplest hydrocarbon with one carbon atom.',
        difficulty: 'easy'
      },
      {
        id: 'g11_org_easy_3',
        question: 'What is the molecular formula of ethane?',
        options: ['CH₄', 'C₂H₆', 'C₃H₈', 'C₂H₄'],
        correct: 'C₂H₆',
        explanation: 'Ethane has 2 carbon atoms and 6 hydrogen atoms: C₂H₆',
        difficulty: 'easy'
      },
      {
        id: 'g11_org_easy_4',
        question: 'What type of bond is present in alkanes?',
        options: ['Single bonds only', 'Double bonds only', 'Triple bonds only', 'Mixed bonds'],
        correct: 'Single bonds only',
        explanation: 'Alkanes contain only single C-C bonds.',
        difficulty: 'easy'
      },
      {
        id: 'g11_org_easy_5',
        question: 'What is the general formula for alkanes?',
        options: ['CₙH₂ₙ', 'CₙH₂ₙ₊₂', 'CₙH₂ₙ₋₂', 'CₙHₙ'],
        correct: 'CₙH₂ₙ₊₂',
        explanation: 'The general formula for alkanes is CₙH₂ₙ₊₂',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_org_med_1',
        question: 'What is an isomer?',
        options: ['Same formula, different structure', 'Different formula, same structure', 'Same everything', 'Different everything'],
        correct: 'Same formula, different structure',
        explanation: 'Isomers have the same molecular formula but different structural arrangements.',
        difficulty: 'medium'
      },
      {
        id: 'g11_org_med_2',
        question: 'What functional group is present in alcohols?',
        options: ['-OH', '-COOH', '-CHO', '-NH₂'],
        correct: '-OH',
        explanation: 'Alcohols contain the hydroxyl (-OH) functional group.',
        difficulty: 'medium'
      },
      {
        id: 'g11_org_med_3',
        question: 'What is the IUPAC name of CH₃CH₂CH₃?',
        options: ['Methane', 'Ethane', 'Propane', 'Butane'],
        correct: 'Propane',
        explanation: 'CH₃CH₂CH₃ has 3 carbon atoms, so it is propane.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_org_hard_1',
        question: 'How many structural isomers does butane (C₄H₁₀) have?',
        options: ['1', '2', '3', '4'],
        correct: '2',
        explanation: 'Butane has 2 structural isomers: n-butane and isobutane (methylpropane).',
        difficulty: 'hard'
      },
      {
        id: 'g11_org_hard_2',
        question: 'What is the product when ethene reacts with hydrogen?',
        options: ['Methane', 'Ethane', 'Propane', 'Butane'],
        correct: 'Ethane',
        explanation: 'C₂H₄ + H₂ → C₂H₆ (addition reaction)',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_physical_chemistry',
    name: 'Grade 12: Physical Chemistry',
    description: 'Thermodynamics, kinetics, and equilibrium',
    questions: [
      // Easy Questions
      {
        id: 'g12_phys_easy_1',
        question: 'What is enthalpy?',
        options: ['Heat content', 'Temperature', 'Pressure', 'Volume'],
        correct: 'Heat content',
        explanation: 'Enthalpy is the heat content of a system.',
        difficulty: 'easy'
      },
      {
        id: 'g12_phys_easy_2',
        question: 'What is an exothermic reaction?',
        options: ['Releases heat', 'Absorbs heat', 'No heat change', 'Increases temperature'],
        correct: 'Releases heat',
        explanation: 'Exothermic reactions release heat to the surroundings.',
        difficulty: 'easy'
      },
      {
        id: 'g12_phys_easy_3',
        question: 'What is the unit of energy?',
        options: ['Joule', 'Watt', 'Newton', 'Pascal'],
        correct: 'Joule',
        explanation: 'The SI unit of energy is the Joule (J).',
        difficulty: 'easy'
      },
      {
        id: 'g12_phys_easy_4',
        question: 'What does a catalyst do?',
        options: ['Increases reaction rate', 'Decreases reaction rate', 'Changes products', 'Provides energy'],
        correct: 'Increases reaction rate',
        explanation: 'A catalyst increases the rate of reaction without being consumed.',
        difficulty: 'easy'
      },
      {
        id: 'g12_phys_easy_5',
        question: 'What is chemical equilibrium?',
        options: ['Forward rate equals reverse rate', 'No reaction occurs', 'Complete reaction', 'One-way reaction'],
        correct: 'Forward rate equals reverse rate',
        explanation: 'At equilibrium, the rates of forward and reverse reactions are equal.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_phys_med_1',
        question: 'What is the first law of thermodynamics?',
        options: ['Energy cannot be created or destroyed', 'Entropy increases', 'Heat flows from hot to cold', 'PV = nRT'],
        correct: 'Energy cannot be created or destroyed',
        explanation: 'The first law states that energy is conserved.',
        difficulty: 'medium'
      },
      {
        id: 'g12_phys_med_2',
        question: 'What is activation energy?',
        options: ['Energy needed to start reaction', 'Energy released', 'Final energy', 'Total energy'],
        correct: 'Energy needed to start reaction',
        explanation: 'Activation energy is the minimum energy required to initiate a reaction.',
        difficulty: 'medium'
      },
      {
        id: 'g12_phys_med_3',
        question: 'What is Le Chatelier\'s principle?',
        options: ['System responds to oppose changes', 'Energy is conserved', 'Matter is conserved', 'Temperature is constant'],
        correct: 'System responds to oppose changes',
        explanation: 'Le Chatelier\'s principle states that systems respond to oppose applied changes.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_phys_hard_1',
        question: 'If Kc = 4 for A + B ⇌ C + D, what is Kc for C + D ⇌ A + B?',
        options: ['4', '1/4', '16', '1/16'],
        correct: '1/4',
        explanation: 'For the reverse reaction, Kc(reverse) = 1/Kc(forward) = 1/4',
        difficulty: 'hard'
      },
      {
        id: 'g12_phys_hard_2',
        question: 'Calculate ΔG° if ΔH° = -100 kJ/mol and ΔS° = -50 J/mol⋅K at 298 K',
        options: ['-85.1 kJ/mol', '-114.9 kJ/mol', '-100 kJ/mol', '-150 kJ/mol'],
        correct: '-85.1 kJ/mol',
        explanation: 'ΔG° = ΔH° - TΔS° = -100 - 298(-0.05) = -100 + 14.9 = -85.1 kJ/mol',
        difficulty: 'hard'
      }
    ]
  }
];
