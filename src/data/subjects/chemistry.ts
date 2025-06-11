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
    id: 'grade12_acid_base_equilibrium',
    name: 'Grade 12: Unit 1 - Acid-Base Equilibrium',
    description: 'Acids, bases, pH, buffers, and equilibrium calculations',
    questions: [
      {
        id: 'g12_acid_easy_1',
        question: 'What is an acid according to Arrhenius theory?',
        options: ['Proton donor', 'Substance that produces H⁺ ions in water', 'Electron acceptor', 'OH⁻ producer'],
        correct: 'Substance that produces H⁺ ions in water',
        explanation: 'Arrhenius acids are substances that produce hydrogen ions (H⁺) when dissolved in water.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_2',
        question: 'What is the pH of pure water at 25°C?',
        options: ['0', '7', '14', '1'],
        correct: '7',
        explanation: 'Pure water has a pH of 7, which is neutral.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_3',
        question: 'What is a buffer solution?',
        options: ['Strong acid solution', 'Solution that resists pH change', 'Very dilute solution', 'Concentrated base'],
        correct: 'Solution that resists pH change',
        explanation: 'Buffer solutions resist changes in pH when small amounts of acid or base are added.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_4',
        question: 'What is the conjugate base of HCl?',
        options: ['H⁺', 'Cl⁻', 'HCl⁻', 'OH⁻'],
        correct: 'Cl⁻',
        explanation: 'When HCl donates a proton, it becomes Cl⁻, which is its conjugate base.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_easy_5',
        question: 'A solution with pH 3 is:',
        options: ['Neutral', 'Basic', 'Acidic', 'Alkaline'],
        correct: 'Acidic',
        explanation: 'Solutions with pH less than 7 are acidic.',
        difficulty: 'easy'
      },
      {
        id: 'g12_acid_med_1',
        question: 'What is the relationship between Ka and Kb for a conjugate acid-base pair?',
        options: ['Ka × Kb = Kw', 'Ka + Kb = Kw', 'Ka - Kb = Kw', 'Ka / Kb = Kw'],
        correct: 'Ka × Kb = Kw',
        explanation: 'For any conjugate acid-base pair, Ka × Kb = Kw (the ion product of water).',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_2',
        question: 'What is the Henderson-Hasselbalch equation used for?',
        options: ['Calculating reaction rates', 'Calculating buffer pH', 'Calculating equilibrium constants', 'Calculating solubility'],
        correct: 'Calculating buffer pH',
        explanation: 'The Henderson-Hasselbalch equation: pH = pKa + log([A⁻]/[HA]) is used to calculate buffer pH.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_med_3',
        question: 'What happens at the equivalence point of a titration?',
        options: ['pH = 7 always', 'Moles of acid = moles of base', 'Reaction stops', 'Color change occurs'],
        correct: 'Moles of acid = moles of base',
        explanation: 'At the equivalence point, the moles of acid equal the moles of base added.',
        difficulty: 'medium'
      },
      {
        id: 'g12_acid_hard_1',
        question: 'Calculate the pH of 0.1 M acetic acid (Ka = 1.8 × 10⁻⁵)',
        options: ['1', '2.87', '4.76', '5.13'],
        correct: '2.87',
        explanation: 'For weak acid: [H⁺] = √(Ka × C) = √(1.8×10⁻⁵ × 0.1) = 1.34×10⁻³, pH = 2.87',
        difficulty: 'hard'
      },
      {
        id: 'g12_acid_hard_2',
        question: 'What is the pH of a buffer containing 0.1 M CH₃COOH and 0.1 M CH₃COONa? (Ka = 1.8 × 10⁻⁵)',
        options: ['4.76', '7.00', '9.24', '1.00'],
        correct: '4.76',
        explanation: 'pH = pKa + log([A⁻]/[HA]) = -log(1.8×10⁻⁵) + log(0.1/0.1) = 4.76 + 0 = 4.76',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_electrochemistry',
    name: 'Grade 12: Unit 2 - Electrochemistry',
    description: 'Galvanic cells, electrolysis, and electrochemical reactions',
    questions: [
      {
        id: 'g12_electro_easy_1',
        question: 'What is electrochemistry?',
        options: ['Study of chemical reactions involving electricity', 'Study of electrons only', 'Study of metals', 'Study of acids'],
        correct: 'Study of chemical reactions involving electricity',
        explanation: 'Electrochemistry studies chemical reactions that involve the transfer of electrons.',
        difficulty: 'easy'
      },
      {
        id: 'g12_electro_easy_2',
        question: 'In a galvanic cell, which electrode is positive?',
        options: ['Anode', 'Cathode', 'Both', 'Neither'],
        correct: 'Cathode',
        explanation: 'In a galvanic cell, the cathode is the positive electrode where reduction occurs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_electro_easy_3',
        question: 'What happens at the anode?',
        options: ['Reduction', 'Oxidation', 'No reaction', 'Precipitation'],
        correct: 'Oxidation',
        explanation: 'Oxidation (loss of electrons) always occurs at the anode.',
        difficulty: 'easy'
      },
      {
        id: 'g12_electro_easy_4',
        question: 'What is electrolysis?',
        options: ['Spontaneous reaction', 'Non-spontaneous reaction driven by electricity', 'Acid-base reaction', 'Combustion'],
        correct: 'Non-spontaneous reaction driven by electricity',
        explanation: 'Electrolysis uses electrical energy to drive non-spontaneous chemical reactions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_electro_easy_5',
        question: 'What connects the two half-cells in a galvanic cell?',
        options: ['Wire only', 'Salt bridge only', 'Wire and salt bridge', 'Nothing'],
        correct: 'Wire and salt bridge',
        explanation: 'A galvanic cell needs both a wire (for electron flow) and salt bridge (for ion flow).',
        difficulty: 'easy'
      },
      {
        id: 'g12_electro_med_1',
        question: 'What is the purpose of a salt bridge?',
        options: ['Conduct electrons', 'Maintain electrical neutrality', 'Store energy', 'Increase voltage'],
        correct: 'Maintain electrical neutrality',
        explanation: 'The salt bridge allows ion flow to maintain electrical neutrality in both half-cells.',
        difficulty: 'medium'
      },
      {
        id: 'g12_electro_med_2',
        question: 'What is the standard hydrogen electrode (SHE)?',
        options: ['Reference electrode with E° = 0V', 'Strongest reducing agent', 'Strongest oxidizing agent', 'Most stable electrode'],
        correct: 'Reference electrode with E° = 0V',
        explanation: 'SHE is the reference electrode assigned a standard potential of 0.00 V.',
        difficulty: 'medium'
      },
      {
        id: 'g12_electro_med_3',
        question: 'What does the Nernst equation calculate?',
        options: ['Standard potential', 'Cell potential under non-standard conditions', 'Current', 'Resistance'],
        correct: 'Cell potential under non-standard conditions',
        explanation: 'The Nernst equation: E = E° - (RT/nF)ln(Q) calculates potential at non-standard conditions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_electro_hard_1',
        question: 'Calculate E°cell for Zn|Zn²⁺||Cu²⁺|Cu if E°(Zn²⁺/Zn) = -0.76V and E°(Cu²⁺/Cu) = +0.34V',
        options: ['+1.10V', '-1.10V', '+0.42V', '-0.42V'],
        correct: '+1.10V',
        explanation: 'E°cell = E°cathode - E°anode = 0.34 - (-0.76) = +1.10V',
        difficulty: 'hard'
      },
      {
        id: 'g12_electro_hard_2',
        question: 'How many grams of copper are deposited when 2 A current passes through CuSO₄ solution for 1 hour?',
        options: ['1.18 g', '2.37 g', '4.74 g', '0.59 g'],
        correct: '2.37 g',
        explanation: 'Using Faraday\'s law: m = (I×t×M)/(n×F) = (2×3600×63.5)/(2×96500) = 2.37 g',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_industrial_chemistry',
    name: 'Grade 12: Unit 3 - Industrial Chemistry',
    description: 'Large-scale chemical processes and industrial applications',
    questions: [
      {
        id: 'g12_industrial_easy_1',
        question: 'What is industrial chemistry?',
        options: ['Small lab reactions', 'Large-scale chemical manufacturing', 'Academic research', 'Environmental cleanup'],
        correct: 'Large-scale chemical manufacturing',
        explanation: 'Industrial chemistry involves large-scale production of chemicals for commercial use.',
        difficulty: 'easy'
      },
      {
        id: 'g12_industrial_easy_2',
        question: 'What is the main product of the Haber process?',
        options: ['Hydrogen', 'Nitrogen', 'Ammonia', 'Water'],
        correct: 'Ammonia',
        explanation: 'The Haber process produces ammonia (NH₃) from nitrogen and hydrogen.',
        difficulty: 'easy'
      },
      {
        id: 'g12_industrial_easy_3',
        question: 'What is the Contact process used to manufacture?',
        options: ['Ammonia', 'Sulfuric acid', 'Nitric acid', 'Hydrochloric acid'],
        correct: 'Sulfuric acid',
        explanation: 'The Contact process is used to manufacture sulfuric acid (H₂SO₄).',
        difficulty: 'easy'
      },
      {
        id: 'g12_industrial_easy_4',
        question: 'What is a catalyst?',
        options: ['Reactant', 'Product', 'Substance that speeds up reactions', 'Solvent'],
        correct: 'Substance that speeds up reactions',
        explanation: 'Catalysts speed up chemical reactions without being consumed.',
        difficulty: 'easy'
      },
      {
        id: 'g12_industrial_easy_5',
        question: 'What is fractional distillation used for?',
        options: ['Mixing chemicals', 'Separating mixtures by boiling point', 'Crystallization', 'Precipitation'],
        correct: 'Separating mixtures by boiling point',
        explanation: 'Fractional distillation separates components based on different boiling points.',
        difficulty: 'easy'
      },
      {
        id: 'g12_industrial_med_1',
        question: 'What are the raw materials for the Haber process?',
        options: ['N₂ and H₂', 'NH₃ and H₂O', 'N₂ and O₂', 'NH₃ and O₂'],
        correct: 'N₂ and H₂',
        explanation: 'The Haber process uses nitrogen and hydrogen: N₂ + 3H₂ ⇌ 2NH₃',
        difficulty: 'medium'
      },
      {
        id: 'g12_industrial_med_2',
        question: 'Why is high pressure used in the Haber process?',
        options: ['Increases temperature', 'Favors forward reaction', 'Reduces cost', 'Improves catalyst'],
        correct: 'Favors forward reaction',
        explanation: 'High pressure favors the forward reaction as it reduces the number of gas molecules (4→2).',
        difficulty: 'medium'
      },
      {
        id: 'g12_industrial_med_3',
        question: 'What is cracking in petroleum refining?',
        options: ['Breaking large molecules into smaller ones', 'Mixing different oils', 'Removing impurities', 'Adding chemicals'],
        correct: 'Breaking large molecules into smaller ones',
        explanation: 'Cracking breaks large hydrocarbon molecules into smaller, more useful ones.',
        difficulty: 'medium'
      },
      {
        id: 'g12_industrial_hard_1',
        question: 'What are the optimal conditions for the Haber process?',
        options: ['High T, High P', 'Low T, High P', 'Moderate T, High P, catalyst', 'High T, Low P'],
        correct: 'Moderate T, High P, catalyst',
        explanation: 'Optimal conditions: ~450°C (compromise), 200-300 atm pressure, iron catalyst.',
        difficulty: 'hard'
      },
      {
        id: 'g12_industrial_hard_2',
        question: 'In the Contact process, what happens in the converter?',
        options: ['SO₂ → SO₃', 'S → SO₂', 'SO₃ → H₂SO₄', 'H₂SO₄ → SO₃'],
        correct: 'SO₂ → SO₃',
        explanation: 'In the converter: 2SO₂ + O₂ ⇌ 2SO₃ using V₂O₅ catalyst at ~450°C.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_polymers',
    name: 'Grade 12: Unit 4 - Polymers',
    description: 'Macromolecules, polymerization, and synthetic materials',
    questions: [
      {
        id: 'g12_polymer_easy_1',
        question: 'What is a polymer?',
        options: ['Small molecule', 'Large molecule made of repeating units', 'Metal compound', 'Gas molecule'],
        correct: 'Large molecule made of repeating units',
        explanation: 'Polymers are large molecules composed of many repeating monomer units.',
        difficulty: 'easy'
      },
      {
        id: 'g12_polymer_easy_2',
        question: 'What is a monomer?',
        options: ['Large molecule', 'Small repeating unit', 'Catalyst', 'Solvent'],
        correct: 'Small repeating unit',
        explanation: 'Monomers are small molecules that link together to form polymers.',
        difficulty: 'easy'
      },
      {
        id: 'g12_polymer_easy_3',
        question: 'What is polyethylene made from?',
        options: ['Ethane', 'Ethene', 'Ethanol', 'Ethanoic acid'],
        correct: 'Ethene',
        explanation: 'Polyethylene is made by polymerizing ethene (C₂H₄) monomers.',
        difficulty: 'easy'
      },
      {
        id: 'g12_polymer_easy_4',
        question: 'What type of polymerization produces water as a byproduct?',
        options: ['Addition', 'Condensation', 'Free radical', 'Ionic'],
        correct: 'Condensation',
        explanation: 'Condensation polymerization involves elimination of small molecules like water.',
        difficulty: 'easy'
      },
      {
        id: 'g12_polymer_easy_5',
        question: 'Which polymer is used to make plastic bags?',
        options: ['PVC', 'Polyethylene', 'Polystyrene', 'Nylon'],
        correct: 'Polyethylene',
        explanation: 'Polyethylene (PE) is commonly used to make plastic bags.',
        difficulty: 'easy'
      },
      {
        id: 'g12_polymer_med_1',
        question: 'What is the difference between thermoplastics and thermosetting plastics?',
        options: ['No difference', 'Thermoplastics can be remelted', 'Thermosetting can be remelted', 'Different colors'],
        correct: 'Thermoplastics can be remelted',
        explanation: 'Thermoplastics can be remelted and reshaped, while thermosetting plastics cannot.',
        difficulty: 'medium'
      },
      {
        id: 'g12_polymer_med_2',
        question: 'What is cross-linking in polymers?',
        options: ['Breaking chains', 'Connecting polymer chains', 'Monomer addition', 'Color change'],
        correct: 'Connecting polymer chains',
        explanation: 'Cross-linking creates bonds between polymer chains, affecting properties.',
        difficulty: 'medium'
      },
      {
        id: 'g12_polymer_med_3',
        question: 'What makes nylon a condensation polymer?',
        options: ['Uses addition reactions', 'Eliminates water during formation', 'Contains only C-C bonds', 'Is thermoplastic'],
        correct: 'Eliminates water during formation',
        explanation: 'Nylon forms through condensation reactions that eliminate water molecules.',
        difficulty: 'medium'
      },
      {
        id: 'g12_polymer_hard_1',
        question: 'What is the repeating unit in PET (polyethylene terephthalate)?',
        options: ['Ethene only', 'Terephthalic acid only', 'Ethylene glycol + terephthalic acid', 'Ethanol + acid'],
        correct: 'Ethylene glycol + terephthalic acid',
        explanation: 'PET is formed from ethylene glycol and terephthalic acid through condensation.',
        difficulty: 'hard'
      },
      {
        id: 'g12_polymer_hard_2',
        question: 'Why does vulcanized rubber have different properties than natural rubber?',
        options: ['Different monomers', 'Cross-linking with sulfur', 'Different temperature', 'Added colors'],
        correct: 'Cross-linking with sulfur',
        explanation: 'Vulcanization creates sulfur cross-links between rubber chains, improving properties.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_environmental_chemistry',
    name: 'Grade 12: Unit 5 - Introduction to Environmental Chemistry',
    description: 'Chemical processes in the environment and pollution',
    questions: [
      {
        id: 'g12_env_easy_1',
        question: 'What is environmental chemistry?',
        options: ['Chemistry in labs only', 'Chemical processes in air, water, and soil', 'Only organic chemistry', 'Only inorganic chemistry'],
        correct: 'Chemical processes in air, water, and soil',
        explanation: 'Environmental chemistry studies chemical processes in the natural environment.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_2',
        question: 'What is the main cause of acid rain?',
        options: ['CO₂', 'SO₂ and NOₓ', 'O₂', 'H₂O'],
        correct: 'SO₂ and NOₓ',
        explanation: 'Sulfur dioxide and nitrogen oxides in the atmosphere cause acid rain.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_3',
        question: 'What is the ozone layer?',
        options: ['Layer of oxygen', 'Protective layer of O₃', 'Layer of nitrogen', 'Layer of CO₂'],
        correct: 'Protective layer of O₃',
        explanation: 'The ozone layer is made of O₃ and protects Earth from UV radiation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_4',
        question: 'What is a greenhouse gas?',
        options: ['Gas that cools Earth', 'Gas that traps heat', 'Gas from plants only', 'Oxygen'],
        correct: 'Gas that traps heat',
        explanation: 'Greenhouse gases trap heat in the atmosphere, causing global warming.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_5',
        question: 'What is BOD?',
        options: ['Biological Oxygen Demand', 'Basic Organic Density', 'Bacterial Oil Decomposition', 'Biogas Output Data'],
        correct: 'Biological Oxygen Demand',
        explanation: 'BOD measures the amount of oxygen needed by bacteria to decompose organic matter.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_med_1',
        question: 'How do CFCs damage the ozone layer?',
        options: ['React directly with O₃', 'Release Cl atoms that catalyze O₃ destruction', 'Block sunlight', 'Absorb O₃'],
        correct: 'Release Cl atoms that catalyze O₃ destruction',
        explanation: 'CFCs release chlorine atoms that catalytically destroy ozone molecules.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_2',
        question: 'What is eutrophication?',
        options: ['Water purification', 'Excessive nutrient enrichment', 'Water cooling', 'pH increase'],
        correct: 'Excessive nutrient enrichment',
        explanation: 'Eutrophication is excessive nutrient enrichment leading to algal blooms and oxygen depletion.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_3',
        question: 'What is photochemical smog?',
        options: ['Fog with photos', 'Smog formed by light reactions', 'Industrial smoke', 'Natural mist'],
        correct: 'Smog formed by light reactions',
        explanation: 'Photochemical smog forms when sunlight reacts with NOₓ and hydrocarbons.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_hard_1',
        question: 'What is the role of hydroxyl radicals (OH•) in the atmosphere?',
        options: ['Cause pollution', 'Atmospheric detergent - remove pollutants', 'Form ozone', 'Block sunlight'],
        correct: 'Atmospheric detergent - remove pollutants',
        explanation: 'OH• radicals act as atmospheric detergents, removing many pollutants through oxidation.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_2',
        question: 'What is the carbon cycle\'s role in climate regulation?',
        options: ['No role', 'Regulates atmospheric CO₂ levels', 'Only affects plants', 'Controls oxygen levels'],
        correct: 'Regulates atmospheric CO₂ levels',
        explanation: 'The carbon cycle regulates atmospheric CO₂, affecting global climate through the greenhouse effect.',
        difficulty: 'hard'
      }
    ]
  }
];
