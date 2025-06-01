import { Chapter } from '../types';

export const biologyChapters: Chapter[] = [
  {
    id: 'cell_biology',
    name: 'Cell Biology',
    description: 'Structure and function of cells',
    questions: [
      {
        id: 'cell_1',
        question: 'What is the basic unit of life?',
        options: ['Tissue', 'Organ', 'Cell', 'Organism'],
        correct: 'Cell',
        explanation: 'The cell is the basic structural and functional unit of all living things.',
        difficulty: 'easy'
      },
      {
        id: 'cell_2',
        question: 'Which organelle is responsible for energy production in the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria are the powerhouses of the cell, producing ATP.',
        difficulty: 'easy'
      },
      {
        id: 'cell_3',
        question: 'What is the function of ribosomes?',
        options: ['Protein synthesis', 'DNA replication', 'Energy production', 'Waste disposal'],
        correct: 'Protein synthesis',
        explanation: 'Ribosomes are responsible for synthesizing proteins.',
        difficulty: 'easy'
      },
      {
        id: 'cell_4',
        question: 'What is the role of the cell membrane?',
        options: ['Protect the cell', 'Control entry and exit of substances', 'Produce energy', 'Store genetic material'],
        correct: 'Control entry and exit of substances',
        explanation: 'The cell membrane regulates what enters and exits the cell.',
        difficulty: 'easy'
      },
      {
        id: 'cell_5',
        question: 'What is the main component of the cell wall in plants?',
        options: ['Chitin', 'Peptidoglycan', 'Cellulose', 'Lipids'],
        correct: 'Cellulose',
        explanation: 'Plant cell walls are primarily made of cellulose.',
        difficulty: 'easy'
      },
      {
        id: 'cell_6',
        question: 'Which type of cell lacks a nucleus?',
        options: ['Eukaryotic', 'Prokaryotic', 'Animal', 'Plant'],
        correct: 'Prokaryotic',
        explanation: 'Prokaryotic cells do not have a nucleus.',
        difficulty: 'easy'
      },
      {
        id: 'cell_7',
        question: 'What is the function of the Golgi apparatus?',
        options: ['Protein synthesis', 'Lipid production', 'Packaging and modification of proteins', 'Energy production'],
        correct: 'Packaging and modification of proteins',
        explanation: 'The Golgi apparatus modifies and packages proteins.',
        difficulty: 'easy'
      },
      {
        id: 'cell_8',
        question: 'What is the role of lysosomes?',
        options: ['Protein synthesis', 'Waste disposal', 'Energy production', 'DNA replication'],
        correct: 'Waste disposal',
        explanation: 'Lysosomes break down waste materials in the cell.',
        difficulty: 'easy'
      },
      {
        id: 'cell_9',
        question: 'What is the process by which cells divide?',
        options: ['Osmosis', 'Diffusion', 'Mitosis', 'Respiration'],
        correct: 'Mitosis',
        explanation: 'Mitosis is the process of cell division.',
        difficulty: 'easy'
      },
      {
        id: 'cell_10',
        question: 'Which organelle is responsible for photosynthesis in plant cells?',
        options: ['Mitochondria', 'Chloroplast', 'Ribosome', 'Nucleus'],
        correct: 'Chloroplast',
        explanation: 'Chloroplasts are the site of photosynthesis in plant cells.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'cell_11',
        question: 'What is the function of the smooth endoplasmic reticulum?',
        options: ['Protein synthesis', 'Lipid synthesis', 'Energy production', 'Waste disposal'],
        correct: 'Lipid synthesis',
        explanation: 'The smooth ER is involved in lipid synthesis and detoxification.',
        difficulty: 'medium'
      },
      {
        id: 'cell_12',
        question: 'What is the function of the rough endoplasmic reticulum?',
        options: ['Protein synthesis', 'Lipid synthesis', 'Energy production', 'Waste disposal'],
        correct: 'Protein synthesis',
        explanation: 'The rough ER is involved in protein synthesis and modification.',
        difficulty: 'medium'
      },
      {
        id: 'cell_13',
        question: 'What is the role of the nucleolus?',
        options: ['Protein synthesis', 'Ribosome synthesis', 'Energy production', 'Waste disposal'],
        correct: 'Ribosome synthesis',
        explanation: 'The nucleolus is the site of ribosome synthesis.',
        difficulty: 'medium'
      },
      {
        id: 'cell_14',
        question: 'What is the difference between mitosis and meiosis?',
        options: ['Mitosis produces identical cells, meiosis produces gametes', 'Mitosis produces gametes, meiosis produces identical cells', 'Mitosis occurs in prokaryotes, meiosis occurs in eukaryotes', 'Mitosis is sexual reproduction, meiosis is asexual reproduction'],
        correct: 'Mitosis produces identical cells, meiosis produces gametes',
        explanation: 'Mitosis produces identical daughter cells, while meiosis produces gametes with half the number of chromosomes.',
        difficulty: 'medium'
      },
      {
        id: 'cell_15',
        question: 'What is apoptosis?',
        options: ['Cell growth', 'Cell death', 'Cell division', 'Cell differentiation'],
        correct: 'Cell death',
        explanation: 'Apoptosis is programmed cell death.',
        difficulty: 'medium'
      },
      {
        id: 'cell_16',
        question: 'What is the function of vacuoles?',
        options: ['Protein synthesis', 'Storage of water and nutrients', 'Energy production', 'Waste disposal'],
        correct: 'Storage of water and nutrients',
        explanation: 'Vacuoles store water, nutrients, and waste products.',
        difficulty: 'medium'
      },
      {
        id: 'cell_17',
        question: 'What is the role of centrioles in cell division?',
        options: ['DNA replication', 'Chromosome separation', 'Protein synthesis', 'Energy production'],
        correct: 'Chromosome separation',
        explanation: 'Centrioles help in the separation of chromosomes during cell division.',
        difficulty: 'medium'
      },
      {
        id: 'cell_18',
        question: 'What is the function of the cytoskeleton?',
        options: ['Cell shape and support', 'Protein synthesis', 'Energy production', 'Waste disposal'],
        correct: 'Cell shape and support',
        explanation: 'The cytoskeleton provides cell shape and support.',
        difficulty: 'medium'
      },
      {
        id: 'cell_19',
        question: 'What is the difference between active and passive transport?',
        options: ['Active transport requires energy, passive transport does not', 'Passive transport requires energy, active transport does not', 'Active transport moves water, passive transport moves solutes', 'Passive transport moves water, active transport moves solutes'],
        correct: 'Active transport requires energy, passive transport does not',
        explanation: 'Active transport requires energy to move substances against their concentration gradient, while passive transport does not.',
        difficulty: 'medium'
      },
      {
        id: 'cell_20',
        question: 'What is the process of endocytosis?',
        options: ['Cell drinking', 'Cell eating', 'Cell waste disposal', 'Cell division'],
        correct: 'Cell eating',
        explanation: 'Endocytosis is the process by which cells engulf substances from their surroundings.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'cell_21',
        question: 'What is the role of telomeres in cell aging?',
        options: ['Protect DNA from damage', 'Shorten with each cell division', 'Lengthen with each cell division', 'Repair DNA'],
        correct: 'Shorten with each cell division',
        explanation: 'Telomeres shorten with each cell division, contributing to cell aging.',
        difficulty: 'hard'
      },
      {
        id: 'cell_22',
        question: 'What is the function of chaperones in protein folding?',
        options: ['Break down proteins', 'Assist in protein folding', 'Synthesize proteins', 'Transport proteins'],
        correct: 'Assist in protein folding',
        explanation: 'Chaperones assist in the proper folding of proteins.',
        difficulty: 'hard'
      },
      {
        id: 'cell_23',
        question: 'What is the role of microRNAs in gene regulation?',
        options: ['Promote gene expression', 'Inhibit gene expression', 'Repair DNA', 'Replicate DNA'],
        correct: 'Inhibit gene expression',
        explanation: 'MicroRNAs inhibit gene expression by binding to mRNA.',
        difficulty: 'hard'
      },
      {
        id: 'cell_24',
        question: 'What is the function of ubiquitin in protein degradation?',
        options: ['Tag proteins for degradation', 'Synthesize proteins', 'Fold proteins', 'Transport proteins'],
        correct: 'Tag proteins for degradation',
        explanation: 'Ubiquitin tags proteins for degradation by the proteasome.',
        difficulty: 'hard'
      },
      {
        id: 'cell_25',
        question: 'What is the role of the extracellular matrix?',
        options: ['Provide cell support and communication', 'Synthesize proteins', 'Produce energy', 'Store genetic material'],
        correct: 'Provide cell support and communication',
        explanation: 'The extracellular matrix provides support and communication between cells.',
        difficulty: 'hard'
      },
      {
        id: 'cell_26',
        question: 'What is the function of gap junctions?',
        options: ['Cell adhesion', 'Cell communication', 'Cell transport', 'Cell protection'],
        correct: 'Cell communication',
        explanation: 'Gap junctions allow direct communication between cells.',
        difficulty: 'hard'
      },
      {
        id: 'cell_27',
        question: 'What is the role of the nuclear lamina?',
        options: ['Provide nuclear shape and support', 'Synthesize proteins', 'Produce energy', 'Store genetic material'],
        correct: 'Provide nuclear shape and support',
        explanation: 'The nuclear lamina provides shape and support to the nucleus.',
        difficulty: 'hard'
      },
      {
        id: 'cell_28',
        question: 'What is the function of the signal recognition particle (SRP)?',
        options: ['Target proteins to the ER', 'Synthesize proteins', 'Fold proteins', 'Transport proteins'],
        correct: 'Target proteins to the ER',
        explanation: 'The SRP targets proteins to the endoplasmic reticulum.',
        difficulty: 'hard'
      },
      {
        id: 'cell_29',
        question: 'What is the role of the proteasome?',
        options: ['Degrade proteins', '
