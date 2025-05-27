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

export const chemistryChapters: Chapter[] = [
  {
    id: "atomic",
    name: "Atomic Structure",
    description: "Atoms, Electrons and Periodic Table",
    questions: [
      {
        id: "chem1",
        question: "What is the atomic number of Carbon?",
        options: ["6", "12", "14", "8"],
        correct: "6",
        explanation: "Carbon has 6 protons in its nucleus, making its atomic number 6"
      },
      {
        id: "chem2",
        question: "How many electrons can the second shell hold?",
        options: ["2", "8", "18", "32"],
        correct: "8",
        explanation: "The second electron shell can hold a maximum of 8 electrons (2n² where n=2)"
      },
      {
        id: "chem3",
        question: "What is the mass number of an atom?",
        options: ["Protons + Neutrons", "Protons + Electrons", "Neutrons + Electrons", "Protons only"],
        correct: "Protons + Neutrons",
        explanation: "Mass number is the total number of protons and neutrons in the nucleus"
      },
      {
        id: "chem4",
        question: "What are isotopes?",
        options: ["Atoms with same protons but different neutrons", "Atoms with same electrons", "Atoms with same mass", "Different elements"],
        correct: "Atoms with same protons but different neutrons",
        explanation: "Isotopes are atoms of the same element with different numbers of neutrons"
      },
      {
        id: "chem5",
        question: "Which subatomic particle has no charge?",
        options: ["Neutron", "Proton", "Electron", "Positron"],
        correct: "Neutron",
        explanation: "Neutrons are electrically neutral particles found in the nucleus"
      },
      {
        id: "chem6",
        question: "What is the electronic configuration of Oxygen (Z=8)?",
        options: ["1s² 2s² 2p⁴", "1s² 2s² 2p⁶", "1s² 2s⁴ 2p²", "1s² 2p⁶"],
        correct: "1s² 2s² 2p⁴",
        explanation: "Oxygen has 8 electrons: 2 in 1s, 2 in 2s, and 4 in 2p orbitals"
      },
      {
        id: "chem7",
        question: "What is the maximum number of electrons in the third shell?",
        options: ["18", "8", "2", "32"],
        correct: "18",
        explanation: "The third shell (n=3) can hold a maximum of 2n² = 2(3)² = 18 electrons"
      },
      {
        id: "chem8",
        question: "Which element has the electronic configuration 1s² 2s² 2p⁶ 3s¹?",
        options: ["Sodium", "Magnesium", "Neon", "Aluminum"],
        correct: "Sodium",
        explanation: "This configuration has 11 electrons, corresponding to sodium (Na)"
      },
      {
        id: "chem9",
        question: "What is the charge of a proton?",
        options: ["+1", "-1", "0", "+2"],
        correct: "+1",
        explanation: "Protons carry a positive charge of +1 elementary charge unit"
      },
      {
        id: "chem10",
        question: "How many protons does Aluminum have?",
        options: ["13", "14", "27", "26"],
        correct: "13",
        explanation: "Aluminum has atomic number 13, meaning it has 13 protons"
      },
      {
        id: "chem11",
        question: "What determines the identity of an element?",
        options: ["Number of protons", "Number of neutrons", "Number of electrons", "Atomic mass"],
        correct: "Number of protons",
        explanation: "The number of protons (atomic number) determines the identity of an element"
      },
      {
        id: "chem12",
        question: "Which scientist proposed the planetary model of the atom?",
        options: ["Rutherford", "Bohr", "Thomson", "Dalton"],
        correct: "Rutherford",
        explanation: "Rutherford proposed the nuclear model with electrons orbiting a central nucleus"
      },
      {
        id: "chem13",
        question: "What is the atomic mass of Carbon-12?",
        options: ["12 amu", "6 amu", "18 amu", "14 amu"],
        correct: "12 amu",
        explanation: "Carbon-12 is defined as having exactly 12 atomic mass units"
      },
      {
        id: "chem14",
        question: "Which orbital shape is spherical?",
        options: ["s", "p", "d", "f"],
        correct: "s",
        explanation: "s orbitals have spherical shapes"
      },
      {
        id: "chem15",
        question: "How many orbitals are in the p subshell?",
        options: ["3", "1", "5", "7"],
        correct: "3",
        explanation: "The p subshell contains 3 orbitals (px, py, pz)"
      },
      {
        id: "chem16",
        question: "What is the ground state of Hydrogen?",
        options: ["1s¹", "2s¹", "1s²", "2p¹"],
        correct: "1s¹",
        explanation: "Hydrogen has one electron in the 1s orbital in its ground state"
      },
      {
        id: "chem17",
        question: "Which principle states that electrons fill lower energy orbitals first?",
        options: ["Aufbau principle", "Pauli exclusion principle", "Hund's rule", "Heisenberg principle"],
        correct: "Aufbau principle",
        explanation: "The Aufbau principle states that electrons occupy the lowest available energy levels"
      },
      {
        id: "chem18",
        question: "What is an ion?",
        options: ["Atom with unequal protons and electrons", "Atom with no neutrons", "Molecule with double bonds", "Neutral atom"],
        correct: "Atom with unequal protons and electrons",
        explanation: "An ion is an atom or molecule with a net electric charge due to unequal numbers of protons and electrons"
      },
      {
        id: "chem19",
        question: "What is the charge of an electron?",
        options: ["-1", "+1", "0", "-2"],
        correct: "-1",
        explanation: "Electrons carry a negative charge of -1 elementary charge unit"
      },
      {
        id: "chem20",
        question: "Which element is in Group 1 of the periodic table?",
        options: ["Lithium", "Carbon", "Oxygen", "Neon"],
        correct: "Lithium",
        explanation: "Lithium is an alkali metal in Group 1 of the periodic table"
      }
    ]
  },
  {
    id: "bonding",
    name: "Chemical Bonding",
    description: "Ionic, Covalent and Metallic Bonds",
    questions: [
      {
        id: "bond1",
        question: "What type of bond exists between Na⁺ and Cl⁻ in salt?",
        options: ["Covalent", "Ionic", "Metallic", "Hydrogen"],
        correct: "Ionic",
        explanation: "Sodium chloride (NaCl) has ionic bonds due to electron transfer from Na to Cl"
      },
      {
        id: "bond2",
        question: "What is the molecular formula of methane?",
        options: ["CH₄", "C₂H₆", "C₃H₈", "CH₂"],
        correct: "CH₄",
        explanation: "Methane is the simplest hydrocarbon with one carbon atom bonded to four hydrogen atoms"
      },
      {
        id: "bond3",
        question: "How many covalent bonds does carbon typically form?",
        options: ["4", "2", "6", "8"],
        correct: "4",
        explanation: "Carbon has 4 valence electrons and typically forms 4 covalent bonds"
      },
      {
        id: "bond4",
        question: "What is a polar covalent bond?",
        options: ["Unequal sharing of electrons", "Equal sharing of electrons", "Transfer of electrons", "No electron involvement"],
        correct: "Unequal sharing of electrons",
        explanation: "Polar covalent bonds involve unequal sharing of electrons between atoms of different electronegativity"
      },
      {
        id: "bond5",
        question: "What is electronegativity?",
        options: ["Ability to attract electrons", "Number of electrons", "Atomic radius", "Nuclear charge"],
        correct: "Ability to attract electrons",
        explanation: "Electronegativity is the tendency of an atom to attract electrons in a chemical bond"
      },
      {
        id: "bond6",
        question: "Which element has the highest electronegativity?",
        options: ["Fluorine", "Oxygen", "Nitrogen", "Chlorine"],
        correct: "Fluorine",
        explanation: "Fluorine has the highest electronegativity value of 4.0 on the Pauling scale"
      },
      {
        id: "bond7",
        question: "What is a double bond?",
        options: ["Two pairs of shared electrons", "Two ionic bonds", "Two hydrogen bonds", "Two metallic bonds"],
        correct: "Two pairs of shared electrons",
        explanation: "A double bond consists of two pairs of electrons shared between two atoms"
      },
      {
        id: "bond8",
        question: "What type of bond is present in diamond?",
        options: ["Covalent", "Ionic", "Metallic", "Van der Waals"],
        correct: "Covalent",
        explanation: "Diamond consists of carbon atoms connected by strong covalent bonds in a tetrahedral network"
      },
      {
        id: "bond9",
        question: "What is the octet rule?",
        options: ["Atoms tend to have 8 valence electrons", "Atoms have 8 protons", "8 neutrons in nucleus", "8 electron shells"],
        correct: "Atoms tend to have 8 valence electrons",
        explanation: "The octet rule states that atoms tend to gain, lose, or share electrons to achieve 8 valence electrons"
      },
      {
        id: "bond10",
        question: "What is a hydrogen bond?",
        options: ["Weak intermolecular force", "Strong covalent bond", "Ionic bond with hydrogen", "Metallic bond"],
        correct: "Weak intermolecular force",
        explanation: "Hydrogen bonds are weak intermolecular forces between hydrogen and electronegative atoms"
      },
      {
        id: "bond11",
        question: "Which molecule has a bent shape?",
        options: ["H₂O", "CO₂", "BF₃", "CH₄"],
        correct: "H₂O",
        explanation: "Water (H₂O) has a bent molecular geometry due to lone pairs on oxygen"
      },
      {
        id: "bond12",
        question: "What is the bond angle in methane (CH₄)?",
        options: ["109.5°", "120°", "180°", "90°"],
        correct: "109.5°",
        explanation: "Methane has tetrahedral geometry with bond angles of 109.5°"
      },
      {
        id: "bond13",
        question: "What is VSEPR theory used for?",
        options: ["Predicting molecular shapes", "Calculating bond energies", "Determining electronegativity", "Finding atomic masses"],
        correct: "Predicting molecular shapes",
        explanation: "VSEPR (Valence Shell Electron Pair Repulsion) theory predicts molecular geometries"
      },
      {
        id: "bond14",
        question: "What type of bond forms between metals?",
        options: ["Metallic", "Ionic", "Covalent", "Hydrogen"],
        correct: "Metallic",
        explanation: "Metallic bonds form between metal atoms through a 'sea' of delocalized electrons"
      },
      {
        id: "bond15",
        question: "What is a coordinate covalent bond?",
        options: ["One atom provides both electrons", "Equal electron sharing", "Electron transfer", "No electrons involved"],
        correct: "One atom provides both electrons",
        explanation: "In a coordinate covalent bond, one atom provides both electrons for the shared pair"
      },
      {
        id: "bond16",
        question: "Which has stronger intermolecular forces: H₂O or H₂S?",
        options: ["H₂O", "H₂S", "Equal", "Neither has intermolecular forces"],
        correct: "H₂O",
        explanation: "Water has stronger hydrogen bonds compared to the weaker van der Waals forces in H₂S"
      },
      {
        id: "bond17",
        question: "What is resonance in chemistry?",
        options: ["Multiple valid Lewis structures", "Molecular vibration", "Electron movement", "Bond breaking"],
        correct: "Multiple valid Lewis structures",
        explanation: "Resonance occurs when a molecule can be represented by multiple valid Lewis structures"
      },
      {
        id: "bond18",
        question: "What is the hybridization of carbon in methane?",
        options: ["sp³", "sp²", "sp", "sp³d"],
        correct: "sp³",
        explanation: "Carbon in methane undergoes sp³ hybridization to form four equivalent bonds"
      },
      {
        id: "bond19",
        question: "Which type of bond is strongest?",
        options: ["Covalent", "Ionic", "Hydrogen", "Van der Waals"],
        correct: "Covalent",
        explanation: "Covalent bonds are generally the strongest chemical bonds"
      },
      {
        id: "bond20",
        question: "What determines bond polarity?",
        options: ["Electronegativity difference", "Atomic size", "Number of electrons", "Nuclear charge"],
        correct: "Electronegativity difference",
        explanation: "Bond polarity is determined by the difference in electronegativity between bonded atoms"
      }
    ]
  },
  {
    id: "reactions",
    name: "Chemical Reactions",
    description: "Types of Reactions and Stoichiometry",
    questions: [
      {
        id: "react1",
        question: "Which gas is produced when zinc reacts with hydrochloric acid?",
        options: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon dioxide"],
        correct: "Hydrogen",
        explanation: "Zn + 2HCl → ZnCl₂ + H₂. Hydrogen gas is evolved in this reaction"
      },
      {
        id: "react2",
        question: "What type of reaction is: 2H₂ + O₂ → 2H₂O?",
        options: ["Synthesis", "Decomposition", "Single replacement", "Double replacement"],
        correct: "Synthesis",
        explanation: "This is a synthesis reaction where two or more reactants combine to form one product"
      },
      {
        id: "react3",
        question: "What is the balanced equation for the combustion of methane?",
        options: ["CH₄ + 2O₂ → CO₂ + 2H₂O", "CH₄ + O₂ → CO₂ + H₂O", "CH₄ + 3O₂ → CO₂ + 2H₂O", "2CH₄ + O₂ → 2CO₂ + H₂O"],
        correct: "CH₄ + 2O₂ → CO₂ + 2H₂O",
        explanation: "Balanced combustion of methane: CH₄ + 2O₂ → CO₂ + 2H₂O"
      },
      {
        id: "react4",
        question: "What is an oxidizing agent?",
        options: ["Substance that gets reduced", "Substance that gets oxidized", "Substance that loses electrons", "Neutral substance"],
        correct: "Substance that gets reduced",
        explanation: "An oxidizing agent causes oxidation in other substances and gets reduced itself"
      },
      {
        id: "react5",
        question: "What is the molar mass of water (H₂O)?",
        options: ["18 g/mol", "16 g/mol", "20 g/mol", "14 g/mol"],
        correct: "18 g/mol",
        explanation: "Molar mass of H₂O = 2(1) + 16 = 18 g/mol"
      },
      {
        id: "react6",
        question: "How many moles are in 22.4 L of gas at STP?",
        options: ["1 mole", "2 moles", "0.5 moles", "22.4 moles"],
        correct: "1 mole",
        explanation: "At STP, 1 mole of any gas occupies 22.4 L"
      },
      {
        id: "react7",
        question: "What is Avogadro's number?",
        options: ["6.02 × 10²³", "6.02 × 10²²", "6.02 × 10²⁴", "6.02 × 10²¹"],
        correct: "6.02 × 10²³",
        explanation: "Avogadro's number is approximately 6.02 × 10²³ particles per mole"
      },
      {
        id: "react8",
        question: "What is a catalyst?",
        options: ["Speeds up reaction without being consumed", "Slows down reaction", "Gets consumed in reaction", "Changes products formed"],
        correct: "Speeds up reaction without being consumed",
        explanation: "A catalyst increases reaction rate without being permanently altered"
      },
      {
        id: "react9",
        question: "What type of reaction is: CaCO₃ → CaO + CO₂?",
        options: ["Decomposition", "Synthesis", "Combustion", "Neutralization"],
        correct: "Decomposition",
        explanation: "This is a decomposition reaction where one compound breaks down into two or more products"
      },
      {
        id: "react10",
        question: "What is the limiting reactant?",
        options: ["Reactant that is completely consumed first", "Reactant in excess", "Product formed", "Catalyst used"],
        correct: "Reactant that is completely consumed first",
        explanation: "The limiting reactant is completely consumed and determines the amount of product formed"
      },
      {
        id: "react11",
        question: "What is the percent yield if actual yield is 8g and theoretical yield is 10g?",
        options: ["80%", "125%", "18%", "2%"],
        correct: "80%",
        explanation: "Percent yield = (actual yield/theoretical yield) × 100% = (8/10) × 100% = 80%"
      },
      {
        id: "react12",
        question: "What happens to the rate of reaction when temperature increases?",
        options: ["Increases", "Decreases", "Remains same", "Becomes zero"],
        correct: "Increases",
        explanation: "Higher temperature generally increases reaction rate due to increased kinetic energy"
      },
      {
        id: "react13",
        question: "What is a precipitation reaction?",
        options: ["Formation of insoluble solid from solution", "Gas evolution", "Color change", "Temperature change"],
        correct: "Formation of insoluble solid from solution",
        explanation: "Precipitation reactions form an insoluble solid (precipitate) from ionic solutions"
      },
      {
        id: "react14",
        question: "What is oxidation?",
        options: ["Loss of electrons", "Gain of electrons", "Gain of protons", "Loss of neutrons"],
        correct: "Loss of electrons",
        explanation: "Oxidation is the loss of electrons or increase in oxidation state"
      },
      {
        id: "react15",
        question: "What is reduction?",
        options: ["Gain of electrons", "Loss of electrons", "Loss of protons", "Gain of neutrons"],
        correct: "Gain of electrons",
        explanation: "Reduction is the gain of electrons or decrease in oxidation state"
      },
      {
        id: "react16",
        question: "What is the empirical formula?",
        options: ["Simplest whole number ratio", "Actual molecular formula", "Structural formula", "Ionic formula"],
        correct: "Simplest whole number ratio",
        explanation: "Empirical formula shows the simplest whole number ratio of atoms in a compound"
      },
      {
        id: "react17",
        question: "What is molarity?",
        options: ["Moles of solute per liter of solution", "Grams per liter", "Moles per kilogram", "Percent concentration"],
        correct: "Moles of solute per liter of solution",
        explanation: "Molarity (M) = moles of solute / liters of solution"
      },
      {
        id: "react18",
        question: "What is an acid according to Arrhenius theory?",
        options: ["Produces H⁺ ions in water", "Produces OH⁻ ions", "Accepts protons", "Donates electrons"],
        correct: "Produces H⁺ ions in water",
        explanation: "Arrhenius acids produce hydrogen ions (H⁺) when dissolved in water"
      },
      {
        id: "react19",
        question: "What is the pH of a neutral solution at 25°C?",
        options: ["7", "0", "14", "1"],
        correct: "7",
        explanation: "Pure water at 25°C has a pH of 7, which is neutral"
      },
      {
        id: "react20",
        question: "What is Le Chatelier's principle?",
        options: ["System shifts to counteract stress", "Energy is conserved", "Mass is conserved", "Charge is conserved"],
        correct: "System shifts to counteract stress",
        explanation: "Le Chatelier's principle states that a system at equilibrium will shift to counteract any applied stress"
      }
    ]
  }
];
