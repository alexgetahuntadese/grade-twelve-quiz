
import { Chapter } from '../types';

export const biologyChapters: Chapter[] = [
  {
    id: 'cell_biology',
    name: 'Cell Biology',
    description: 'Cell structure, function, and processes',
    questions: [
      // Easy Questions
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
        question: 'Which organelle controls the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Vacuole'],
        correct: 'Nucleus',
        explanation: 'The nucleus contains DNA and controls all cellular activities.',
        difficulty: 'easy'
      },
      {
        id: 'cell_3',
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
        correct: 'Mitochondria',
        explanation: 'Mitochondria produce ATP energy for cellular processes.',
        difficulty: 'easy'
      },
      {
        id: 'cell_4',
        question: 'What is photosynthesis?',
        options: ['Making food using sunlight', 'Breathing process', 'Cell division', 'Protein synthesis'],
        correct: 'Making food using sunlight',
        explanation: 'Photosynthesis is the process by which plants make glucose using sunlight.',
        difficulty: 'easy'
      },
      {
        id: 'cell_5',
        question: 'Which organelle is found only in plant cells?',
        options: ['Nucleus', 'Mitochondria', 'Chloroplast', 'Ribosome'],
        correct: 'Chloroplast',
        explanation: 'Chloroplasts contain chlorophyll and are responsible for photosynthesis.',
        difficulty: 'easy'
      },
      {
        id: 'cell_6',
        question: 'What is the cell membrane made of?',
        options: ['Proteins only', 'Lipids only', 'Phospholipids and proteins', 'Carbohydrates only'],
        correct: 'Phospholipids and proteins',
        explanation: 'The cell membrane is composed of a phospholipid bilayer with embedded proteins.',
        difficulty: 'easy'
      },
      {
        id: 'cell_7',
        question: 'What is DNA?',
        options: ['Genetic material', 'Energy molecule', 'Structural protein', 'Storage fat'],
        correct: 'Genetic material',
        explanation: 'DNA (deoxyribonucleic acid) carries genetic information.',
        difficulty: 'easy'
      },
      {
        id: 'cell_8',
        question: 'Where are ribosomes found?',
        options: ['Only in nucleus', 'Only in cytoplasm', 'In cytoplasm and on ER', 'Only in mitochondria'],
        correct: 'In cytoplasm and on ER',
        explanation: 'Ribosomes can be free in cytoplasm or attached to the endoplasmic reticulum.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'cell_med_1',
        question: 'What is the difference between prokaryotic and eukaryotic cells?',
        options: ['Size only', 'Nucleus presence', 'Shape only', 'Color only'],
        correct: 'Nucleus presence',
        explanation: 'Eukaryotic cells have a membrane-bound nucleus, prokaryotic cells do not.',
        difficulty: 'medium'
      },
      {
        id: 'cell_med_2',
        question: 'What is osmosis?',
        options: ['Movement of solutes', 'Movement of water across membrane', 'Active transport', 'Cell division'],
        correct: 'Movement of water across membrane',
        explanation: 'Osmosis is the passive movement of water across a selectively permeable membrane.',
        difficulty: 'medium'
      },
      {
        id: 'cell_med_3',
        question: 'What is the function of the Golgi apparatus?',
        options: ['Protein synthesis', 'Packaging and shipping', 'Energy production', 'DNA replication'],
        correct: 'Packaging and shipping',
        explanation: 'The Golgi apparatus modifies, packages, and ships proteins from the ER.',
        difficulty: 'medium'
      },
      {
        id: 'cell_med_4',
        question: 'What is cellular respiration?',
        options: ['Making oxygen', 'Breaking down glucose for energy', 'Making proteins', 'Cell division'],
        correct: 'Breaking down glucose for energy',
        explanation: 'Cellular respiration breaks down glucose to produce ATP energy.',
        difficulty: 'medium'
      },
      {
        id: 'cell_med_5',
        question: 'What is the equation for photosynthesis?',
        options: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O', 'CO₂ + H₂O → glucose', 'O₂ + glucose → CO₂'],
        correct: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂',
        explanation: 'Photosynthesis converts carbon dioxide and water into glucose and oxygen.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'cell_hard_1',
        question: 'In which phase of mitosis do chromosomes align at the cell center?',
        options: ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'],
        correct: 'Metaphase',
        explanation: 'During metaphase, chromosomes align at the metaphase plate in the cell center.',
        difficulty: 'hard'
      },
      {
        id: 'cell_hard_2',
        question: 'What is the net gain of ATP in glycolysis?',
        options: ['2 ATP', '4 ATP', '6 ATP', '8 ATP'],
        correct: '2 ATP',
        explanation: 'Glycolysis produces 4 ATP but uses 2 ATP, resulting in a net gain of 2 ATP.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_genetics',
    name: 'Grade 11: Genetics and Heredity',
    description: 'DNA, genes, inheritance patterns, and genetic variation',
    questions: [
      // Easy Questions
      {
        id: 'g11_gen_easy_1',
        question: 'What is a gene?',
        options: ['Unit of heredity', 'Type of cell', 'Organ system', 'Chemical reaction'],
        correct: 'Unit of heredity',
        explanation: 'A gene is a specific sequence of DNA that codes for a trait.',
        difficulty: 'easy'
      },
      {
        id: 'g11_gen_easy_2',
        question: 'How many chromosomes do humans have?',
        options: ['23', '44', '46', '48'],
        correct: '46',
        explanation: 'Humans have 46 chromosomes (23 pairs) in each somatic cell.',
        difficulty: 'easy'
      },
      {
        id: 'g11_gen_easy_3',
        question: 'What determines biological sex in humans?',
        options: ['X and Y chromosomes', 'Autosomes', 'Mitochondrial DNA', 'Environment'],
        correct: 'X and Y chromosomes',
        explanation: 'Sex is determined by X and Y chromosomes: XX = female, XY = male.',
        difficulty: 'easy'
      },
      {
        id: 'g11_gen_easy_4',
        question: 'What is an allele?',
        options: ['Different versions of a gene', 'Type of chromosome', 'Cell division', 'Protein structure'],
        correct: 'Different versions of a gene',
        explanation: 'Alleles are different versions or variants of the same gene.',
        difficulty: 'easy'
      },
      {
        id: 'g11_gen_easy_5',
        question: 'What is the genotype?',
        options: ['Physical appearance', 'Genetic makeup', 'Environment effect', 'Age factor'],
        correct: 'Genetic makeup',
        explanation: 'Genotype refers to the genetic constitution of an organism.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_gen_med_1',
        question: 'In a cross Aa × Aa, what ratio of phenotypes is expected?',
        options: ['1:1', '2:1', '3:1', '1:2:1'],
        correct: '3:1',
        explanation: 'Monohybrid cross gives 3 dominant : 1 recessive phenotype ratio.',
        difficulty: 'medium'
      },
      {
        id: 'g11_gen_med_2',
        question: 'What is incomplete dominance?',
        options: ['One allele masks another', 'Both alleles expressed', 'Blending of traits', 'No expression'],
        correct: 'Blending of traits',
        explanation: 'Incomplete dominance results in a blended phenotype between two alleles.',
        difficulty: 'medium'
      },
      {
        id: 'g11_gen_med_3',
        question: 'What is codominance?',
        options: ['One allele dominant', 'Both alleles expressed simultaneously', 'Blended traits', 'Hidden traits'],
        correct: 'Both alleles expressed simultaneously',
        explanation: 'In codominance, both alleles are expressed without blending.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_gen_hard_1',
        question: 'In a dihybrid cross AaBb × AaBb, what is the expected phenotypic ratio?',
        options: ['3:1', '1:2:1', '9:3:3:1', '1:1:1:1'],
        correct: '9:3:3:1',
        explanation: 'Dihybrid cross produces 9:3:3:1 phenotypic ratio with independent assortment.',
        difficulty: 'hard'
      },
      {
        id: 'g11_gen_hard_2',
        question: 'What is linkage in genetics?',
        options: ['Independent assortment', 'Genes on same chromosome', 'Chromosome pairing', 'Gene expression'],
        correct: 'Genes on same chromosome',
        explanation: 'Linkage occurs when genes are located close together on the same chromosome.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_evolution',
    name: 'Grade 12: Evolution and Biodiversity',
    description: 'Natural selection, speciation, and evolutionary biology',
    questions: [
      // Easy Questions
      {
        id: 'g12_evo_easy_1',
        question: 'Who proposed the theory of evolution by natural selection?',
        options: ['Mendel', 'Darwin', 'Lamarck', 'Watson'],
        correct: 'Darwin',
        explanation: 'Charles Darwin proposed the theory of evolution by natural selection.',
        difficulty: 'easy'
      },
      {
        id: 'g12_evo_easy_2',
        question: 'What is natural selection?',
        options: ['Random changes', 'Survival of the fittest', 'Artificial breeding', 'Genetic engineering'],
        correct: 'Survival of the fittest',
        explanation: 'Natural selection is the differential survival and reproduction of organisms.',
        difficulty: 'easy'
      },
      {
        id: 'g12_evo_easy_3',
        question: 'What is a species?',
        options: ['Group of similar organisms', 'Organisms that can interbreed', 'Same habitat organisms', 'Same size organisms'],
        correct: 'Organisms that can interbreed',
        explanation: 'A species is a group of organisms that can interbreed and produce fertile offspring.',
        difficulty: 'easy'
      },
      {
        id: 'g12_evo_easy_4',
        question: 'What is adaptation?',
        options: ['Learning behavior', 'Inherited trait that aids survival', 'Temporary change', 'Random mutation'],
        correct: 'Inherited trait that aids survival',
        explanation: 'Adaptation is an inherited characteristic that increases survival and reproduction.',
        difficulty: 'easy'
      },
      {
        id: 'g12_evo_easy_5',
        question: 'What is biodiversity?',
        options: ['Number of individuals', 'Variety of life forms', 'Population size', 'Genetic similarity'],
        correct: 'Variety of life forms',
        explanation: 'Biodiversity refers to the variety of life at all levels of organization.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_evo_med_1',
        question: 'What is speciation?',
        options: ['Death of species', 'Formation of new species', 'Migration of species', 'Hybridization'],
        correct: 'Formation of new species',
        explanation: 'Speciation is the evolutionary process by which new species arise.',
        difficulty: 'medium'
      },
      {
        id: 'g12_evo_med_2',
        question: 'What is genetic drift?',
        options: ['Gene flow between populations', 'Random changes in allele frequency', 'Natural selection', 'Mutation rate'],
        correct: 'Random changes in allele frequency',
        explanation: 'Genetic drift is random changes in allele frequencies in small populations.',
        difficulty: 'medium'
      },
      {
        id: 'g12_evo_med_3',
        question: 'What is the Hardy-Weinberg principle?',
        options: ['Evolution occurs', 'Allele frequencies remain constant', 'Mutations increase', 'Selection is strong'],
        correct: 'Allele frequencies remain constant',
        explanation: 'Hardy-Weinberg describes conditions where allele frequencies remain constant.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_evo_hard_1',
        question: 'In a population where p = 0.6 for allele A, what is the frequency of genotype aa?',
        options: ['0.16', '0.24', '0.36', '0.48'],
        correct: '0.16',
        explanation: 'q = 1 - p = 0.4, so frequency of aa = q² = 0.4² = 0.16',
        difficulty: 'hard'
      },
      {
        id: 'g12_evo_hard_2',
        question: 'What is allopatric speciation?',
        options: ['Same geographic area', 'Different geographic areas', 'Same habitat', 'Same time period'],
        correct: 'Different geographic areas',
        explanation: 'Allopatric speciation occurs when populations are geographically separated.',
        difficulty: 'hard'
      }
    ]
  }
];
