
import { Chapter } from '../types';

export const chemistryChapters: Chapter[] = [
  {
    id: 'atomic_structure',
    name: 'Atomic Structure',
    description: 'Atoms, electrons, protons, neutrons, and periodic table',
    questions: [
      // Easy Questions (10)
      {
        id: 'atom_easy_1',
        question: 'What is an atom?',
        options: ['Smallest unit of matter', 'A molecule', 'A compound', 'An element'],
        correct: 'Smallest unit of matter',
        explanation: 'An atom is the smallest unit of matter that retains the properties of an element.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_2',
        question: 'What is the charge of a proton?',
        options: ['Positive', 'Negative', 'Neutral', 'Variable'],
        correct: 'Positive',
        explanation: 'Protons carry a positive electrical charge.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_3',
        question: 'What is the charge of an electron?',
        options: ['Positive', 'Negative', 'Neutral', 'Variable'],
        correct: 'Negative',
        explanation: 'Electrons carry a negative electrical charge.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_4',
        question: 'What is the charge of a neutron?',
        options: ['Positive', 'Negative', 'Neutral', 'Variable'],
        correct: 'Neutral',
        explanation: 'Neutrons have no electrical charge; they are neutral.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_5',
        question: 'Where are protons located in an atom?',
        options: ['Nucleus', 'Electron shell', 'Outside atom', 'Moving freely'],
        correct: 'Nucleus',
        explanation: 'Protons are located in the nucleus at the center of the atom.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_6',
        question: 'Where are electrons located in an atom?',
        options: ['Nucleus', 'Electron shells around nucleus', 'Center', 'Outside atom'],
        correct: 'Electron shells around nucleus',
        explanation: 'Electrons orbit the nucleus in electron shells or energy levels.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_7',
        question: 'What determines the atomic number?',
        options: ['Number of neutrons', 'Number of protons', 'Number of electrons', 'Atomic mass'],
        correct: 'Number of protons',
        explanation: 'The atomic number is equal to the number of protons in the nucleus.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_8',
        question: 'What is the periodic table?',
        options: ['List of compounds', 'Arrangement of elements by atomic number', 'Chemical reactions', 'Molecular structures'],
        correct: 'Arrangement of elements by atomic number',
        explanation: 'The periodic table organizes elements by increasing atomic number.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_9',
        question: 'What is an element?',
        options: ['Mixture of atoms', 'Pure substance with same atomic number', 'Chemical compound', 'Molecular formula'],
        correct: 'Pure substance with same atomic number',
        explanation: 'An element is a pure substance consisting of atoms with the same atomic number.',
        difficulty: 'easy'
      },
      {
        id: 'atom_easy_10',
        question: 'What is atomic mass?',
        options: ['Number of protons', 'Number of electrons', 'Mass of protons and neutrons', 'Number of neutrons'],
        correct: 'Mass of protons and neutrons',
        explanation: 'Atomic mass is primarily the combined mass of protons and neutrons in the nucleus.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'atom_med_1',
        question: 'What are isotopes?',
        options: ['Different elements', 'Atoms with same protons, different neutrons', 'Charged atoms', 'Molecular compounds'],
        correct: 'Atoms with same protons, different neutrons',
        explanation: 'Isotopes are atoms of the same element with different numbers of neutrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_2',
        question: 'What is an ion?',
        options: ['Neutral atom', 'Atom with unequal protons and electrons', 'Type of molecule', 'Chemical bond'],
        correct: 'Atom with unequal protons and electrons',
        explanation: 'An ion is an atom that has gained or lost electrons, giving it a net charge.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_3',
        question: 'What is electron configuration?',
        options: ['Number of electrons', 'Arrangement of electrons in shells', 'Electron charge', 'Electron mass'],
        correct: 'Arrangement of electrons in shells',
        explanation: 'Electron configuration describes how electrons are distributed in atomic orbitals.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_4',
        question: 'What is the maximum number of electrons in the first shell?',
        options: ['2', '8', '18', '32'],
        correct: '2',
        explanation: 'The first electron shell (K shell) can hold a maximum of 2 electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_5',
        question: 'What is the maximum number of electrons in the second shell?',
        options: ['2', '8', '18', '32'],
        correct: '8',
        explanation: 'The second electron shell (L shell) can hold a maximum of 8 electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_6',
        question: 'What is a cation?',
        options: ['Negative ion', 'Positive ion', 'Neutral atom', 'Electron'],
        correct: 'Positive ion',
        explanation: 'A cation is a positively charged ion, formed when an atom loses electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_7',
        question: 'What is an anion?',
        options: ['Positive ion', 'Negative ion', 'Neutral atom', 'Proton'],
        correct: 'Negative ion',
        explanation: 'An anion is a negatively charged ion, formed when an atom gains electrons.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_8',
        question: 'What are valence electrons?',
        options: ['All electrons', 'Electrons in nucleus', 'Electrons in outermost shell', 'Core electrons'],
        correct: 'Electrons in outermost shell',
        explanation: 'Valence electrons are the electrons in the outermost shell of an atom.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_9',
        question: 'What determines chemical properties of an element?',
        options: ['Atomic mass', 'Number of neutrons', 'Number of valence electrons', 'Nuclear charge'],
        correct: 'Number of valence electrons',
        explanation: 'The number of valence electrons primarily determines an element\'s chemical properties.',
        difficulty: 'medium'
      },
      {
        id: 'atom_med_10',
        question: 'What is atomic radius?',
        options: ['Size of nucleus', 'Distance from nucleus to outermost electrons', 'Number of shells', 'Atomic mass'],
        correct: 'Distance from nucleus to outermost electrons',
        explanation: 'Atomic radius is the distance from the nucleus to the outermost electrons.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'atom_hard_1',
        question: 'What is the Aufbau principle?',
        options: ['Electrons fill orbitals randomly', 'Electrons fill lowest energy orbitals first', 'All orbitals fill equally', 'Electrons avoid pairing'],
        correct: 'Electrons fill lowest energy orbitals first',
        explanation: 'The Aufbau principle states that electrons fill atomic orbitals starting with the lowest energy levels.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_2',
        question: 'What is Hund\'s rule?',
        options: ['Fill orbitals completely first', 'Put one electron in each orbital before pairing', 'Electrons have opposite spins', 'Energy levels are equal'],
        correct: 'Put one electron in each orbital before pairing',
        explanation: 'Hund\'s rule states that electrons occupy orbitals singly before pairing up.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_3',
        question: 'What is the Pauli exclusion principle?',
        options: ['Electrons have same spin', 'No two electrons can have identical quantum numbers', 'Electrons fill randomly', 'All orbitals are equivalent'],
        correct: 'No two electrons can have identical quantum numbers',
        explanation: 'The Pauli exclusion principle states that no two electrons in an atom can have the same set of quantum numbers.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_4',
        question: 'What is ionization energy?',
        options: ['Energy to add electron', 'Energy to remove electron', 'Energy to move electron', 'Energy in nucleus'],
        correct: 'Energy to remove electron',
        explanation: 'Ionization energy is the energy required to remove an electron from an atom.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_5',
        question: 'What is electron affinity?',
        options: ['Energy to remove electron', 'Energy released when adding electron', 'Binding energy', 'Orbital energy'],
        correct: 'Energy released when adding electron',
        explanation: 'Electron affinity is the energy change when an electron is added to a neutral atom.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_6',
        question: 'What is electronegativity?',
        options: ['Atomic size', 'Ability to attract electrons in bonds', 'Number of electrons', 'Charge of atom'],
        correct: 'Ability to attract electrons in bonds',
        explanation: 'Electronegativity is the ability of an atom to attract electrons in a chemical bond.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_7',
        question: 'What is the effective nuclear charge?',
        options: ['Total nuclear charge', 'Net charge felt by valence electrons', 'Charge of ion', 'Electron charge'],
        correct: 'Net charge felt by valence electrons',
        explanation: 'Effective nuclear charge is the net charge experienced by an electron in an atom.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_8',
        question: 'What are quantum numbers?',
        options: ['Atomic masses', 'Mathematical descriptions of electron properties', 'Periodic table positions', 'Chemical formulas'],
        correct: 'Mathematical descriptions of electron properties',
        explanation: 'Quantum numbers describe the quantum state and properties of electrons in atoms.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_9',
        question: 'What is orbital hybridization?',
        options: ['Mixing of atomic orbitals', 'Electron pairing', 'Nuclear fusion', 'Ionization process'],
        correct: 'Mixing of atomic orbitals',
        explanation: 'Hybridization is the mixing of atomic orbitals to form new hybrid orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'atom_hard_10',
        question: 'What is the Heisenberg uncertainty principle?',
        options: ['Electrons have fixed positions', 'Cannot know exact position and momentum simultaneously', 'All particles are uncertain', 'Energy is quantized'],
        correct: 'Cannot know exact position and momentum simultaneously',
        explanation: 'The uncertainty principle states that position and momentum of a particle cannot both be precisely determined.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'chemical_bonding',
    name: 'Chemical Bonding',
    description: 'Ionic, covalent, and metallic bonds',
    questions: [
      // Easy Questions (10)
      {
        id: 'bond_easy_1',
        question: 'What is a chemical bond?',
        options: ['Physical attraction', 'Force holding atoms together', 'Electron movement', 'Nuclear reaction'],
        correct: 'Force holding atoms together',
        explanation: 'A chemical bond is the force that holds atoms together in molecules and compounds.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_2',
        question: 'What is an ionic bond?',
        options: ['Sharing electrons', 'Transfer of electrons', 'Nuclear attraction', 'Metallic bonding'],
        correct: 'Transfer of electrons',
        explanation: 'An ionic bond forms when electrons are transferred from one atom to another.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_3',
        question: 'What is a covalent bond?',
        options: ['Transfer of electrons', 'Sharing of electrons', 'Nuclear fusion', 'Metallic bonding'],
        correct: 'Sharing of electrons',
        explanation: 'A covalent bond forms when atoms share electrons.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_4',
        question: 'Which type of bond forms between metals and nonmetals?',
        options: ['Covalent', 'Ionic', 'Metallic', 'Hydrogen'],
        correct: 'Ionic',
        explanation: 'Ionic bonds typically form between metals (which lose electrons) and nonmetals (which gain electrons).',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_5',
        question: 'Which type of bond forms between nonmetals?',
        options: ['Ionic', 'Covalent', 'Metallic', 'Nuclear'],
        correct: 'Covalent',
        explanation: 'Covalent bonds typically form between nonmetals that share electrons.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_6',
        question: 'What is a molecule?',
        options: ['Single atom', 'Group of atoms bonded together', 'Ion', 'Element'],
        correct: 'Group of atoms bonded together',
        explanation: 'A molecule is a group of atoms bonded together by chemical bonds.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_7',
        question: 'What is a compound?',
        options: ['Single element', 'Substance with two or more different elements', 'Mixture', 'Solution'],
        correct: 'Substance with two or more different elements',
        explanation: 'A compound is a substance composed of two or more different elements chemically bonded.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_8',
        question: 'What is the formula for water?',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correct: 'H2O',
        explanation: 'Water has the chemical formula H2O, with two hydrogen atoms and one oxygen atom.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_9',
        question: 'What is the formula for carbon dioxide?',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correct: 'CO2',
        explanation: 'Carbon dioxide has the formula CO2, with one carbon and two oxygen atoms.',
        difficulty: 'easy'
      },
      {
        id: 'bond_easy_10',
        question: 'What is the formula for table salt?',
        options: ['H2O', 'CO2', 'NaCl', 'CH4'],
        correct: 'NaCl',
        explanation: 'Table salt (sodium chloride) has the formula NaCl.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'bond_med_1',
        question: 'What is a polar covalent bond?',
        options: ['Equal sharing of electrons', 'Unequal sharing of electrons', 'Complete transfer', 'No bonding'],
        correct: 'Unequal sharing of electrons',
        explanation: 'A polar covalent bond involves unequal sharing of electrons due to different electronegativities.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_2',
        question: 'What is a nonpolar covalent bond?',
        options: ['Unequal sharing', 'Equal sharing of electrons', 'Electron transfer', 'No electrons'],
        correct: 'Equal sharing of electrons',
        explanation: 'A nonpolar covalent bond involves equal sharing of electrons between atoms.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_3',
        question: 'What determines bond polarity?',
        options: ['Atomic size', 'Electronegativity difference', 'Number of electrons', 'Atomic mass'],
        correct: 'Electronegativity difference',
        explanation: 'Bond polarity is determined by the difference in electronegativity between bonded atoms.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_4',
        question: 'What is a double bond?',
        options: ['One pair of shared electrons', 'Two pairs of shared electrons', 'Three pairs shared', 'No sharing'],
        correct: 'Two pairs of shared electrons',
        explanation: 'A double bond consists of two pairs (four electrons) of shared electrons.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_5',
        question: 'What is a triple bond?',
        options: ['One pair shared', 'Two pairs shared', 'Three pairs of shared electrons', 'No sharing'],
        correct: 'Three pairs of shared electrons',
        explanation: 'A triple bond consists of three pairs (six electrons) of shared electrons.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_6',
        question: 'What is metallic bonding?',
        options: ['Electron sharing', 'Electron transfer', 'Sea of delocalized electrons', 'Nuclear bonding'],
        correct: 'Sea of delocalized electrons',
        explanation: 'Metallic bonding involves a sea of delocalized electrons surrounding metal cations.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_7',
        question: 'What is bond length?',
        options: ['Bond strength', 'Distance between bonded nuclei', 'Number of bonds', 'Bond energy'],
        correct: 'Distance between bonded nuclei',
        explanation: 'Bond length is the average distance between the nuclei of two bonded atoms.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_8',
        question: 'What is bond energy?',
        options: ['Bond length', 'Energy to break bond', 'Number of electrons', 'Atomic energy'],
        correct: 'Energy to break bond',
        explanation: 'Bond energy is the energy required to break a chemical bond.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_9',
        question: 'How does bond length relate to bond strength?',
        options: ['Longer bonds are stronger', 'Shorter bonds are stronger', 'No relationship', 'Same strength always'],
        correct: 'Shorter bonds are stronger',
        explanation: 'Generally, shorter bonds are stronger because atoms are held more tightly together.',
        difficulty: 'medium'
      },
      {
        id: 'bond_med_10',
        question: 'What is resonance in bonding?',
        options: ['Single structure', 'Multiple possible structures', 'No bonding', 'Ionic only'],
        correct: 'Multiple possible structures',
        explanation: 'Resonance occurs when a molecule can be represented by multiple valid Lewis structures.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'bond_hard_1',
        question: 'What is VSEPR theory?',
        options: ['Bonding theory', 'Theory predicting molecular geometry', 'Energy theory', 'Atomic theory'],
        correct: 'Theory predicting molecular geometry',
        explanation: 'VSEPR (Valence Shell Electron Pair Repulsion) theory predicts molecular geometry based on electron pair repulsion.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_2',
        question: 'What is the molecular geometry of methane (CH4)?',
        options: ['Linear', 'Trigonal planar', 'Tetrahedral', 'Octahedral'],
        correct: 'Tetrahedral',
        explanation: 'Methane has a tetrahedral geometry with bond angles of approximately 109.5°.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_3',
        question: 'What is the molecular geometry of water (H2O)?',
        options: ['Linear', 'Bent', 'Trigonal planar', 'Tetrahedral'],
        correct: 'Bent',
        explanation: 'Water has a bent molecular geometry due to two lone pairs on the oxygen atom.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_4',
        question: 'What is hybridization?',
        options: ['Bond breaking', 'Mixing of atomic orbitals', 'Electron transfer', 'Nuclear reaction'],
        correct: 'Mixing of atomic orbitals',
        explanation: 'Hybridization is the mixing of atomic orbitals to form new hybrid orbitals for bonding.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_5',
        question: 'What is sp3 hybridization?',
        options: ['One s and two p orbitals', 'One s and three p orbitals', 'Two s and one p orbital', 'Three s orbitals'],
        correct: 'One s and three p orbitals',
        explanation: 'sp3 hybridization involves mixing one s orbital with three p orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_6',
        question: 'What is a sigma bond?',
        options: ['Side-to-side overlap', 'End-to-end overlap of orbitals', 'No overlap', 'Ionic attraction'],
        correct: 'End-to-end overlap of orbitals',
        explanation: 'A sigma bond forms from the end-to-end overlap of atomic orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_7',
        question: 'What is a pi bond?',
        options: ['End-to-end overlap', 'Side-to-side overlap of orbitals', 'No overlap', 'Ionic attraction'],
        correct: 'Side-to-side overlap of orbitals',
        explanation: 'A pi bond forms from the side-to-side overlap of p orbitals.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_8',
        question: 'What is the bond order in nitrogen gas (N2)?',
        options: ['1', '2', '3', '4'],
        correct: '3',
        explanation: 'Nitrogen gas has a triple bond, so the bond order is 3.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_9',
        question: 'What is lattice energy?',
        options: ['Bond energy', 'Energy to form ionic solid from gaseous ions', 'Electron energy', 'Nuclear energy'],
        correct: 'Energy to form ionic solid from gaseous ions',
        explanation: 'Lattice energy is the energy required to form an ionic solid from gaseous ions.',
        difficulty: 'hard'
      },
      {
        id: 'bond_hard_10',
        question: 'What is the coordinate covalent bond?',
        options: ['Normal covalent bond', 'Bond where one atom provides both electrons', 'Ionic bond', 'Metallic bond'],
        correct: 'Bond where one atom provides both electrons',
        explanation: 'A coordinate covalent bond forms when one atom provides both electrons for the shared pair.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_acid_base',
    name: 'Grade 12: Acid-Base Equilibrium',
    description: 'Acids, bases, pH, and equilibrium concepts',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_acid_easy_1',
        question: 'What is an acid according to Arrhenius theory?',
        options: ['Proton acceptor', 'Substance that releases H+ ions', 'Electron donor', 'Base neutralizer'],
        correct: 'Substance that releases H+ ions',
        explanation: 'According to Arrhenius, an acid is a substance that releases hydrogen ions (H+) in aqueous solution.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_2',
        question: 'What is a base according to Arrhenius theory?',
        options: ['Proton donor', 'Substance that releases OH- ions', 'Electron acceptor', 'Acid neutralizer'],
        correct: 'Substance that releases OH- ions',
        explanation: 'According to Arrhenius, a base is a substance that releases hydroxide ions (OH-) in aqueous solution.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_3',
        question: 'What is the pH of pure water at 25°C?',
        options: ['0', '7', '14', '1'],
        correct: '7',
        explanation: 'Pure water has a pH of 7 at 25°C, which is considered neutral.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_4',
        question: 'What pH range indicates an acidic solution?',
        options: ['0-7', '7-14', 'Below 0', 'Above 14'],
        correct: '0-7',
        explanation: 'Solutions with pH less than 7 are acidic.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_5',
        question: 'What pH range indicates a basic solution?',
        options: ['0-7', '7-14', 'Below 0', 'Above 14'],
        correct: '7-14',
        explanation: 'Solutions with pH greater than 7 are basic (alkaline).',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_6',
        question: 'What happens when an acid reacts with a base?',
        options: ['Explosion', 'Neutralization', 'No reaction', 'Decomposition'],
        correct: 'Neutralization',
        explanation: 'When an acid reacts with a base, neutralization occurs, forming salt and water.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_7',
        question: 'What is the formula for hydrochloric acid?',
        options: ['H2SO4', 'HCl', 'HNO3', 'CH3COOH'],
        correct: 'HCl',
        explanation: 'Hydrochloric acid has the chemical formula HCl.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_8',
        question: 'What is the formula for sulfuric acid?',
        options: ['H2SO4', 'HCl', 'HNO3', 'CH3COOH'],
        correct: 'H2SO4',
        explanation: 'Sulfuric acid has the chemical formula H2SO4.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_9',
        question: 'What is the formula for sodium hydroxide?',
        options: ['NaCl', 'NaOH', 'Na2CO3', 'NaHCO3'],
        correct: 'NaOH',
        explanation: 'Sodium hydroxide has the chemical formula NaOH.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_10',
        question: 'What color does litmus paper turn in acidic solution?',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
        correct: 'Red',
        explanation: 'Litmus paper turns red in acidic solutions.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_acid_med_1',
        question: 'What is a Brønsted-Lowry acid?',
        options: ['Electron donor', 'Proton donor', 'OH- donor', 'Electron acceptor'],
        correct: 'Proton donor',
        explanation: 'According to Brønsted-Lowry theory, an acid is a proton (H+) donor.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_2',
        question: 'What is a Brønsted-Lowry base?',
        options: ['Electron donor', 'Proton acceptor', 'OH- donor', 'Electron acceptor'],
        correct: 'Proton acceptor',
        explanation: 'According to Brønsted-Lowry theory, a base is a proton (H+) acceptor.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_3',
        question: 'What is the relationship between pH and pOH?',
        options: ['pH + pOH = 7', 'pH + pOH = 14', 'pH - pOH = 14', 'pH × pOH = 14'],
        correct: 'pH + pOH = 14',
        explanation: 'At 25°C, pH + pOH = 14 for any aqueous solution.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_4',
        question: 'What is a strong acid?',
        options: ['Partially ionizes', 'Completely ionizes in solution', 'Never ionizes', 'Weak ionization'],
        correct: 'Completely ionizes in solution',
        explanation: 'A strong acid completely ionizes in aqueous solution.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_5',
        question: 'What is a weak acid?',
        options: ['Completely ionizes', 'Partially ionizes in solution', 'Never ionizes', 'No H+ ions'],
        correct: 'Partially ionizes in solution',
        explanation: 'A weak acid only partially ionizes in aqueous solution.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_6',
        question: 'What is the conjugate base of HCl?',
        options: ['H+', 'Cl-', 'OH-', 'H2O'],
        correct: 'Cl-',
        explanation: 'When HCl donates a proton, it forms its conjugate base Cl-.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_7',
        question: 'What is the conjugate acid of NH3?',
        options: ['NH2-', 'NH4+', 'N3-', 'NH4OH'],
        correct: 'NH4+',
        explanation: 'When NH3 accepts a proton, it forms its conjugate acid NH4+.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_8',
        question: 'What is Ka?',
        options: ['Base constant', 'Acid dissociation constant', 'Equilibrium constant', 'Rate constant'],
        correct: 'Acid dissociation constant',
        explanation: 'Ka is the acid dissociation constant, measuring the strength of an acid.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_9',
        question: 'What does a larger Ka value indicate?',
        options: ['Weaker acid', 'Stronger acid', 'Neutral solution', 'Basic solution'],
        correct: 'Stronger acid',
        explanation: 'A larger Ka value indicates a stronger acid (greater ionization).',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_10',
        question: 'What is a buffer solution?',
        options: ['Pure water', 'Solution resisting pH change', 'Strong acid', 'Strong base'],
        correct: 'Solution resisting pH change',
        explanation: 'A buffer solution resists changes in pH when small amounts of acid or base are added.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_acid_hard_1',
        question: 'What is the Henderson-Hasselbalch equation?',
        options: ['pH = pKa + log([A-]/[HA])', 'pH = -log[H+]', 'pH + pOH = 14', 'Ka × Kb = Kw'],
        correct: 'pH = pKa + log([A-]/[HA])',
        explanation: 'The Henderson-Hasselbalch equation relates pH to the ratio of conjugate base to acid.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_2',
        question: 'What is the autoionization of water?',
        options: ['H2O → H+ + OH-', '2H2O ⇌ H3O+ + OH-', 'H2O → 2H+ + O2-', 'H2O + H2O → H4O2'],
        correct: '2H2O ⇌ H3O+ + OH-',
        explanation: 'Water autoionizes: 2H2O ⇌ H3O+ + OH-, with Kw = [H3O+][OH-] = 1.0 × 10^-14.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_3',
        question: 'What is the value of Kw at 25°C?',
        options: ['1.0 × 10^-7', '1.0 × 10^-14', '1.0 × 10^7', '1.0 × 10^14'],
        correct: '1.0 × 10^-14',
        explanation: 'The ion product of water (Kw) is 1.0 × 10^-14 at 25°C.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_4',
        question: 'What is the pH of a 0.01 M HCl solution?',
        options: ['1', '2', '12', '13'],
        correct: '2',
        explanation: 'pH = -log[H+] = -log(0.01) = -log(10^-2) = 2.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_5',
        question: 'What is a polyprotic acid?',
        options: ['Acid with one H+', 'Acid with multiple ionizable H+', 'Very strong acid', 'Organic acid'],
        correct: 'Acid with multiple ionizable H+',
        explanation: 'A polyprotic acid can donate more than one proton (H+) per molecule.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_6',
        question: 'What is the common ion effect?',
        options: ['No effect on equilibrium', 'Shifts equilibrium due to common ion', 'Increases ionization', 'Creates new compounds'],
        correct: 'Shifts equilibrium due to common ion',
        explanation: 'The common ion effect shifts equilibrium away from the side with the common ion.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_7',
        question: 'What is an amphoteric substance?',
        options: ['Only acidic', 'Only basic', 'Can act as acid or base', 'Neutral only'],
        correct: 'Can act as acid or base',
        explanation: 'An amphoteric substance can act as either an acid or a base depending on conditions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_8',
        question: 'What is the equivalence point in titration?',
        options: ['Starting point', 'Point where acid equals base moles', 'End point', 'Buffer point'],
        correct: 'Point where acid equals base moles',
        explanation: 'The equivalence point is where moles of acid equal moles of base in a titration.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_9',
        question: 'What is the relationship between Ka and Kb for conjugate pairs?',
        options: ['Ka + Kb = Kw', 'Ka × Kb = Kw', 'Ka - Kb = Kw', 'Ka / Kb = Kw'],
        correct: 'Ka × Kb = Kw',
        explanation: 'For conjugate acid-base pairs, Ka × Kb = Kw at a given temperature.',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_10',
        question: 'What is the Lewis definition of acids and bases?',
        options: ['Proton transfer', 'Electron pair transfer', 'Ion transfer', 'Neutron transfer'],
        correct: 'Electron pair transfer',
        explanation: 'Lewis acids accept electron pairs; Lewis bases donate electron pairs.',
        difficulty: 'hard'
      }
    ]
  }
];
