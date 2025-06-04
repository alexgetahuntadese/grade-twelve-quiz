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
        options: ['Degrade proteins', 'Synthesize proteins', 'Fold proteins', 'Transport proteins'],
        correct: 'Degrade proteins',
        explanation: 'The proteasome degrades unwanted or damaged proteins.',
        difficulty: 'hard'
      },
      {
        id: 'cell_30',
        question: 'What is the role of histones in DNA packaging?',
        options: ['Replicate DNA', 'Package DNA into nucleosomes', 'Transcribe DNA', 'Repair DNA'],
        correct: 'Package DNA into nucleosomes',
        explanation: 'Histones help package DNA into nucleosomes as part of chromatin.',
        difficulty: 'hard'
      }
    ]
  },

  // Grade 11 Chapter
  {
    id: 'grade11_genetics',
    name: 'Grade 11: Genetics and Inheritance',
    description: 'Study of genes, heredity, and genetic variation',
    questions: [
      // Easy Questions
      {
        id: 'g11_bio_easy_1',
        question: 'What is genetics?',
        options: ['Study of muscles', 'Study of inheritance', 'Study of diseases', 'Study of cells'],
        correct: 'Study of inheritance',
        explanation: 'Genetics is the study of genes and inheritance patterns.',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_2',
        question: 'What are genes?',
        options: ['Proteins', 'Units of heredity made of DNA', 'Cells', 'Hormones'],
        correct: 'Units of heredity made of DNA',
        explanation: 'Genes are units of heredity made of DNA that determine traits.',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_3',
        question: 'What is a chromosome?',
        options: ['Type of cell', 'Structure containing DNA and proteins', 'Type of protein', 'Energy molecule'],
        correct: 'Structure containing DNA and proteins',
        explanation: 'Chromosomes are structures containing DNA and associated proteins.',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_4',
        question: 'What is DNA?',
        options: ['Protein', 'Molecule carrying genetic instructions', 'Energy molecule', 'Hormone'],
        correct: 'Molecule carrying genetic instructions',
        explanation: 'DNA (deoxyribonucleic acid) carries the genetic instructions for development and functioning.',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_5',
        question: 'What is an allele?',
        options: ['Type of cell', 'Alternative form of a gene', 'Chromosome part', 'Type of protein'],
        correct: 'Alternative form of a gene',
        explanation: 'Alleles are alternative forms of a gene that govern the same trait.',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_6',
        question: 'What is a genotype?',
        options: ['Physical appearance', 'Genetic makeup', 'Blood type only', 'Cell type'],
        correct: 'Genetic makeup',
        explanation: 'Genotype refers to the genetic makeup of an organism.',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_7',
        question: 'What is a phenotype?',
        options: ['Genetic makeup', 'Observable characteristics', 'Chromosome type', 'DNA sequence'],
        correct: 'Observable characteristics',
        explanation: 'Phenotype refers to the observable characteristics resulting from genes and environment.',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_8',
        question: 'What is a dominant allele?',
        options: ['Recessive allele', 'Allele expressed when heterozygous', 'Mutation', 'Sex-linked gene'],
        correct: 'Allele expressed when heterozygous',
        explanation: 'A dominant allele is expressed even when only one copy is present (heterozygous).',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_9',
        question: 'What is a recessive allele?',
        options: ['Dominant allele', 'Allele only expressed when homozygous', 'Mutation', 'Sex-linked gene'],
        correct: 'Allele only expressed when homozygous',
        explanation: 'A recessive allele is only expressed when two copies are present (homozygous).',
        difficulty: 'easy'
      },
      {
        id: 'g11_bio_easy_10',
        question: 'What is a mutation?',
        options: ['Normal gene', 'Change in DNA sequence', 'Protein synthesis', 'Cell division'],
        correct: 'Change in DNA sequence',
        explanation: 'A mutation is a change in the DNA sequence that can affect genes.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_bio_med_1',
        question: 'What is the principle of segregation in genetics?',
        options: ['Genes stay together', 'Gene pairs separate during gamete formation', 'Mutations occur', 'Traits blend together'],
        correct: 'Gene pairs separate during gamete formation',
        explanation: 'Mendel\'s principle of segregation states that gene pairs separate during gamete formation.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_2',
        question: 'What is the principle of independent assortment?',
        options: ['Genes stay together', 'Different genes segregate independently', 'Mutations occur randomly', 'Traits always blend'],
        correct: 'Different genes segregate independently',
        explanation: 'Different genes segregate independently during gamete formation.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_3',
        question: 'What is a Punnett square used for?',
        options: ['Drawing cells', 'Predicting offspring genotypes', 'Measuring DNA', 'Counting chromosomes'],
        correct: 'Predicting offspring genotypes',
        explanation: 'Punnett squares predict possible genotypes and their probabilities in offspring.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_4',
        question: 'What is incomplete dominance?',
        options: ['Complete expression of dominant allele', 'Blending of traits in heterozygotes', 'Recessive traits only', 'Multiple alleles'],
        correct: 'Blending of traits in heterozygotes',
        explanation: 'In incomplete dominance, heterozygotes show a blend of the homozygous phenotypes.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_5',
        question: 'What is codominance?',
        options: ['Only one allele expressed', 'Both alleles expressed separately', 'Blending of traits', 'No expression'],
        correct: 'Both alleles expressed separately',
        explanation: 'In codominance, both alleles are expressed separately in the heterozygote.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_6',
        question: 'What is a test cross?',
        options: ['Any breeding experiment', 'Cross to determine unknown genotype', 'Medical test', 'Chromosome test'],
        correct: 'Cross to determine unknown genotype',
        explanation: 'A test cross uses a homozygous recessive individual to determine an unknown genotype.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_7',
        question: 'What is genetic linkage?',
        options: ['Genes on different chromosomes', 'Genes located close together on same chromosome', 'Gene expression', 'Protein synthesis'],
        correct: 'Genes located close together on same chromosome',
        explanation: 'Genetic linkage occurs when genes are located close together on the same chromosome.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_8',
        question: 'What are multiple alleles?',
        options: ['Two alleles only', 'More than two alleles for a gene', 'Different genes', 'Mutations'],
        correct: 'More than two alleles for a gene',
        explanation: 'Multiple alleles means a gene has more than two possible allelic forms in a population.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_9',
        question: 'What is a carrier in genetics?',
        options: ['Affected individual', 'Heterozygous for recessive trait', 'Homozygous dominant', 'Chromosome'],
        correct: 'Heterozygous for recessive trait',
        explanation: 'A carrier is heterozygous for a recessive trait and shows the dominant phenotype.',
        difficulty: 'medium'
      },
      {
        id: 'g11_bio_med_10',
        question: 'What is genetic drift?',
        options: ['Natural selection', 'Random change in allele frequency', 'Directed mutation', 'Gene flow'],
        correct: 'Random change in allele frequency',
        explanation: 'Genetic drift is random change in allele frequencies due to chance.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_bio_hard_1',
        question: 'What is epistasis in genetics?',
        options: ['Gene mutation', 'One gene masking another gene\'s effect', 'Chromosome abnormality', 'Protein synthesis problem'],
        correct: 'One gene masking another gene\'s effect',
        explanation: 'Epistasis occurs when one gene masks or modifies the effect of another gene.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_2',
        question: 'What is pleiotropy?',
        options: ['Multiple genes affecting one trait', 'One gene affecting multiple traits', 'Gene mutation', 'Chromosome structure'],
        correct: 'One gene affecting multiple traits',
        explanation: 'Pleiotropy is when a single gene influences multiple seemingly unrelated traits.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_3',
        question: 'What is chromosome non-disjunction?',
        options: ['Normal chromosome division', 'Failure of chromosomes to separate', 'Chromosome duplication', 'Gene mutation'],
        correct: 'Failure of chromosomes to separate',
        explanation: 'Non-disjunction is the failure of chromosomes to separate properly during meiosis.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_4',
        question: 'What is a karyotype?',
        options: ['Type of cell', 'Organized visual of chromosomes', 'Gene sequence', 'Protein structure'],
        correct: 'Organized visual of chromosomes',
        explanation: 'A karyotype is a visual representation of an individual\'s chromosomes, arranged by size and structure.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_5',
        question: 'What is genomic imprinting?',
        options: ['Random gene expression', 'Expression depending on which parent allele is from', 'DNA duplication', 'Chromosome structure'],
        correct: 'Expression depending on which parent allele is from',
        explanation: 'Genomic imprinting is when gene expression depends on which parent the allele came from.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_6',
        question: 'What is Hardy-Weinberg equilibrium?',
        options: ['Population change', 'Stable allele frequencies in a population', 'Natural selection', 'Gene mutation'],
        correct: 'Stable allele frequencies in a population',
        explanation: 'Hardy-Weinberg equilibrium is when allele frequencies remain stable in a population.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_7',
        question: 'What is the difference between structural and numerical chromosomal abnormalities?',
        options: ['No difference', 'Structure changes vs number changes', 'Only affect different cells', 'Only different terms'],
        correct: 'Structure changes vs number changes',
        explanation: 'Structural abnormalities involve changes in chromosome structure, numerical involve changes in chromosome number.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_8',
        question: 'What is genetic anticipation?',
        options: ['Predicting genotypes', 'Earlier onset and increased severity in successive generations', 'Gene therapy', 'Chromosome mapping'],
        correct: 'Earlier onset and increased severity in successive generations',
        explanation: 'Genetic anticipation is when a disease shows earlier onset and increasing severity in successive generations.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_9',
        question: 'What is penetrance in genetics?',
        options: ['Gene expression level', 'Percentage of individuals with a genotype who show the phenotype', 'Chromosome structure', 'DNA replication'],
        correct: 'Percentage of individuals with a genotype who show the phenotype',
        explanation: 'Penetrance is the percentage of individuals with a specific genotype who exhibit the associated phenotype.',
        difficulty: 'hard'
      },
      {
        id: 'g11_bio_hard_10',
        question: 'What is quantitative genetics?',
        options: ['Gene counting', 'Study of traits influenced by multiple genes', 'Chromosome counting', 'Protein measurement'],
        correct: 'Study of traits influenced by multiple genes',
        explanation: 'Quantitative genetics studies traits influenced by multiple genes and environmental factors.',
        difficulty: 'hard'
      }
    ]
  }
];
