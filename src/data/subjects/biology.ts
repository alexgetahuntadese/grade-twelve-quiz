
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

export const biologyChapters: Chapter[] = [
  {
    id: "cell",
    name: "Cell Biology",
    description: "Cell Structure and Function",
    questions: [
      {
        id: "bio1",
        question: "What is the powerhouse of the cell?",
        options: ["Nucleus", "Mitochondria", "Ribosome", "Vacuole"],
        correct: "Mitochondria",
        explanation: "Mitochondria produce ATP through cellular respiration, earning the nickname 'powerhouse of the cell'"
      },
      {
        id: "bio2",
        question: "Which organelle controls the cell's activities?",
        options: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        correct: "Nucleus",
        explanation: "The nucleus contains DNA and controls all cellular activities"
      },
      {
        id: "bio3",
        question: "What is the function of ribosomes?",
        options: ["Protein synthesis", "Energy production", "Waste removal", "DNA replication"],
        correct: "Protein synthesis",
        explanation: "Ribosomes are the sites of protein synthesis in cells"
      },
      {
        id: "bio4",
        question: "Which organelle is found only in plant cells?",
        options: ["Chloroplast", "Mitochondria", "Nucleus", "Ribosome"],
        correct: "Chloroplast",
        explanation: "Chloroplasts contain chlorophyll and are responsible for photosynthesis in plants"
      },
      {
        id: "bio5",
        question: "What is the cell membrane primarily composed of?",
        options: ["Phospholipids", "Proteins", "Carbohydrates", "Nucleic acids"],
        correct: "Phospholipids",
        explanation: "The cell membrane consists primarily of a phospholipid bilayer"
      },
      {
        id: "bio6",
        question: "What is the function of the endoplasmic reticulum?",
        options: ["Transport materials", "Store water", "Produce energy", "Control cell division"],
        correct: "Transport materials",
        explanation: "The ER transports materials throughout the cell and synthesizes proteins and lipids"
      },
      {
        id: "bio7",
        question: "Which structure gives plant cells their rigid shape?",
        options: ["Cell wall", "Cell membrane", "Cytoplasm", "Nucleus"],
        correct: "Cell wall",
        explanation: "The cell wall provides structural support and protection to plant cells"
      },
      {
        id: "bio8",
        question: "What is the function of lysosomes?",
        options: ["Digest waste", "Synthesize proteins", "Store water", "Produce energy"],
        correct: "Digest waste",
        explanation: "Lysosomes contain digestive enzymes that break down waste materials"
      },
      {
        id: "bio9",
        question: "What is cytoplasm?",
        options: ["Gel-like substance filling the cell", "Outer cell boundary", "Genetic material", "Energy-producing organelle"],
        correct: "Gel-like substance filling the cell",
        explanation: "Cytoplasm is the gel-like substance that fills the cell and contains organelles"
      },
      {
        id: "bio10",
        question: "Which type of microscope can view living cells?",
        options: ["Light microscope", "Electron microscope", "X-ray microscope", "Laser microscope"],
        correct: "Light microscope",
        explanation: "Light microscopes can observe living cells, unlike electron microscopes which require dead specimens"
      },
      {
        id: "bio11",
        question: "What is the function of the Golgi apparatus?",
        options: ["Modify and package proteins", "Synthesize DNA", "Produce energy", "Store water"],
        correct: "Modify and package proteins",
        explanation: "The Golgi apparatus modifies, packages, and ships proteins from the ER"
      },
      {
        id: "bio12",
        question: "Which organelle stores water in plant cells?",
        options: ["Central vacuole", "Chloroplast", "Nucleus", "Ribosome"],
        correct: "Central vacuole",
        explanation: "The large central vacuole stores water and maintains turgor pressure in plant cells"
      },
      {
        id: "bio13",
        question: "What is the smallest unit of life?",
        options: ["Cell", "Atom", "Molecule", "Tissue"],
        correct: "Cell",
        explanation: "The cell is considered the basic unit of life"
      },
      {
        id: "bio14",
        question: "Which organelle contains its own DNA?",
        options: ["Mitochondria", "Ribosome", "Lysosome", "Golgi apparatus"],
        correct: "Mitochondria",
        explanation: "Mitochondria and chloroplasts contain their own circular DNA"
      },
      {
        id: "bio15",
        question: "What is the process by which cells divide?",
        options: ["Mitosis", "Meiosis", "Osmosis", "Diffusion"],
        correct: "Mitosis",
        explanation: "Mitosis is the process of cell division that produces two identical diploid cells"
      },
      {
        id: "bio16",
        question: "What is the function of centrioles?",
        options: ["Help organize cell division", "Synthesize proteins", "Store genetic material", "Produce energy"],
        correct: "Help organize cell division",
        explanation: "Centrioles help organize the spindle fibers during cell division"
      },
      {
        id: "bio17",
        question: "Which process moves water across cell membranes?",
        options: ["Osmosis", "Active transport", "Endocytosis", "Exocytosis"],
        correct: "Osmosis",
        explanation: "Osmosis is the movement of water across a semipermeable membrane"
      },
      {
        id: "bio18",
        question: "What is a prokaryotic cell?",
        options: ["Cell without a nucleus", "Cell with a nucleus", "Plant cell only", "Animal cell only"],
        correct: "Cell without a nucleus",
        explanation: "Prokaryotic cells lack a membrane-bound nucleus; bacteria are examples"
      },
      {
        id: "bio19",
        question: "What is the function of the nuclear membrane?",
        options: ["Control what enters and exits nucleus", "Store genetic material", "Produce proteins", "Generate energy"],
        correct: "Control what enters and exits nucleus",
        explanation: "The nuclear membrane regulates the passage of materials in and out of the nucleus"
      },
      {
        id: "bio20",
        question: "Which structure connects plant cells?",
        options: ["Plasmodesmata", "Gap junctions", "Tight junctions", "Desmosomes"],
        correct: "Plasmodesmata",
        explanation: "Plasmodesmata are channels that connect plant cells and allow communication"
      }
    ]
  },
  {
    id: "genetics",
    name: "Genetics",
    description: "Heredity and DNA",
    questions: [
      {
        id: "gen1",
        question: "What is the basic unit of heredity?",
        options: ["Chromosome", "Gene", "DNA", "RNA"],
        correct: "Gene",
        explanation: "A gene is the basic unit of heredity that carries genetic information from parents to offspring"
      },
      {
        id: "gen2",
        question: "How many chromosomes does a normal human have?",
        options: ["23", "46", "48", "44"],
        correct: "46",
        explanation: "Humans have 46 chromosomes arranged in 23 pairs"
      },
      {
        id: "gen3",
        question: "What does DNA stand for?",
        options: ["Deoxyribonucleic acid", "Diribonucleic acid", "Deoxyribose acid", "Diribose nucleic acid"],
        correct: "Deoxyribonucleic acid",
        explanation: "DNA stands for deoxyribonucleic acid"
      },
      {
        id: "gen4",
        question: "Which bases pair together in DNA?",
        options: ["A-T and G-C", "A-G and T-C", "A-C and T-G", "A-U and G-C"],
        correct: "A-T and G-C",
        explanation: "In DNA, adenine pairs with thymine and guanine pairs with cytosine"
      },
      {
        id: "gen5",
        question: "What is the structure of DNA?",
        options: ["Double helix", "Single strand", "Triple helix", "Circular"],
        correct: "Double helix",
        explanation: "DNA has a double helix structure discovered by Watson and Crick"
      },
      {
        id: "gen6",
        question: "What is a dominant allele?",
        options: ["Expressed when present", "Only expressed in homozygotes", "Never expressed", "Always recessive"],
        correct: "Expressed when present",
        explanation: "A dominant allele is expressed in the phenotype when at least one copy is present"
      },
      {
        id: "gen7",
        question: "What is the process of making RNA from DNA called?",
        options: ["Transcription", "Translation", "Replication", "Mutation"],
        correct: "Transcription",
        explanation: "Transcription is the process of synthesizing RNA from a DNA template"
      },
      {
        id: "gen8",
        question: "What is the process of making proteins from RNA called?",
        options: ["Translation", "Transcription", "Replication", "Mutation"],
        correct: "Translation",
        explanation: "Translation is the process of synthesizing proteins using mRNA as a template"
      },
      {
        id: "gen9",
        question: "How many chromosomes do human gametes have?",
        options: ["23", "46", "22", "48"],
        correct: "23",
        explanation: "Human gametes (sperm and egg) are haploid and contain 23 chromosomes"
      },
      {
        id: "gen10",
        question: "What is meiosis?",
        options: ["Cell division producing gametes", "Cell division producing identical cells", "DNA replication", "Protein synthesis"],
        correct: "Cell division producing gametes",
        explanation: "Meiosis is the process that produces gametes with half the chromosome number"
      },
      {
        id: "gen11",
        question: "What is a mutation?",
        options: ["Change in DNA sequence", "Normal gene expression", "Cell division", "Protein function"],
        correct: "Change in DNA sequence",
        explanation: "A mutation is a change in the DNA sequence that can affect gene function"
      },
      {
        id: "gen12",
        question: "What determines the sex of humans?",
        options: ["X and Y chromosomes", "Autosomes", "Mitochondrial DNA", "RNA"],
        correct: "X and Y chromosomes",
        explanation: "Human sex is determined by X and Y chromosomes (XX = female, XY = male)"
      },
      {
        id: "gen13",
        question: "What is a genotype?",
        options: ["Genetic makeup", "Physical appearance", "Chromosome number", "Gene location"],
        correct: "Genetic makeup",
        explanation: "Genotype refers to the genetic constitution of an organism"
      },
      {
        id: "gen14",
        question: "What is a phenotype?",
        options: ["Observable characteristics", "Genetic makeup", "DNA sequence", "Chromosome structure"],
        correct: "Observable characteristics",
        explanation: "Phenotype refers to the observable physical and biochemical characteristics"
      },
      {
        id: "gen15",
        question: "What is crossing over?",
        options: ["Exchange of genetic material between chromosomes", "Cell division", "DNA replication", "Protein synthesis"],
        correct: "Exchange of genetic material between chromosomes",
        explanation: "Crossing over occurs during meiosis when homologous chromosomes exchange genetic material"
      },
      {
        id: "gen16",
        question: "What is a codon?",
        options: ["Three-base sequence coding for amino acid", "Single base", "Gene", "Chromosome"],
        correct: "Three-base sequence coding for amino acid",
        explanation: "A codon is a sequence of three nucleotides that specifies an amino acid"
      },
      {
        id: "gen17",
        question: "What is genetic recombination?",
        options: ["Formation of new gene combinations", "DNA damage", "Cell death", "Protein folding"],
        correct: "Formation of new gene combinations",
        explanation: "Genetic recombination creates new combinations of genes through crossing over"
      },
      {
        id: "gen18",
        question: "What is an allele?",
        options: ["Different version of a gene", "Type of chromosome", "RNA molecule", "Protein"],
        correct: "Different version of a gene",
        explanation: "An allele is an alternative form or variant of a gene"
      },
      {
        id: "gen19",
        question: "What is the Human Genome Project?",
        options: ["Mapping all human genes", "Cloning humans", "Creating artificial life", "Studying evolution"],
        correct: "Mapping all human genes",
        explanation: "The Human Genome Project was an international effort to map and sequence all human genes"
      },
      {
        id: "gen20",
        question: "What is PCR used for?",
        options: ["Amplifying DNA", "Sequencing proteins", "Cell culture", "Microscopy"],
        correct: "Amplifying DNA",
        explanation: "PCR (Polymerase Chain Reaction) is used to amplify specific DNA sequences"
      }
    ]
  },
  {
    id: "physiology",
    name: "Human Physiology",
    description: "Body Systems and Functions",
    questions: [
      {
        id: "phys1",
        question: "Which blood cells are responsible for carrying oxygen?",
        options: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
        correct: "Red blood cells",
        explanation: "Red blood cells contain hemoglobin which binds to oxygen and transports it throughout the body"
      },
      {
        id: "phys2",
        question: "What is the main function of the heart?",
        options: ["Pump blood", "Filter waste", "Digest food", "Produce hormones"],
        correct: "Pump blood",
        explanation: "The heart's primary function is to pump blood throughout the circulatory system"
      },
      {
        id: "phys3",
        question: "Which organ filters waste from the blood?",
        options: ["Kidneys", "Liver", "Lungs", "Heart"],
        correct: "Kidneys",
        explanation: "The kidneys filter waste products and excess water from the blood to form urine"
      },
      {
        id: "phys4",
        question: "What is the largest organ in the human body?",
        options: ["Skin", "Liver", "Brain", "Heart"],
        correct: "Skin",
        explanation: "The skin is the largest organ, protecting the body and regulating temperature"
      },
      {
        id: "phys5",
        question: "Which system controls body functions through hormones?",
        options: ["Endocrine system", "Nervous system", "Digestive system", "Respiratory system"],
        correct: "Endocrine system",
        explanation: "The endocrine system produces and secretes hormones that regulate body functions"
      },
      {
        id: "phys6",
        question: "What is the main function of the lungs?",
        options: ["Gas exchange", "Blood production", "Waste filtration", "Hormone production"],
        correct: "Gas exchange",
        explanation: "The lungs facilitate gas exchange, taking in oxygen and removing carbon dioxide"
      },
      {
        id: "phys7",
        question: "Which part of the brain controls balance and coordination?",
        options: ["Cerebellum", "Cerebrum", "Brain stem", "Hypothalamus"],
        correct: "Cerebellum",
        explanation: "The cerebellum is responsible for balance, coordination, and fine motor control"
      },
      {
        id: "phys8",
        question: "What is the normal human body temperature?",
        options: ["37°C", "35°C", "39°C", "40°C"],
        correct: "37°C",
        explanation: "Normal human body temperature is approximately 37°C (98.6°F)"
      },
      {
        id: "phys9",
        question: "Which hormone regulates blood sugar levels?",
        options: ["Insulin", "Adrenaline", "Thyroxine", "Growth hormone"],
        correct: "Insulin",
        explanation: "Insulin, produced by the pancreas, regulates blood glucose levels"
      },
      {
        id: "phys10",
        question: "What is the function of platelets?",
        options: ["Blood clotting", "Oxygen transport", "Fighting infection", "Nutrient transport"],
        correct: "Blood clotting",
        explanation: "Platelets are essential for blood clotting and wound healing"
      },
      {
        id: "phys11",
        question: "Which system breaks down food?",
        options: ["Digestive system", "Respiratory system", "Circulatory system", "Nervous system"],
        correct: "Digestive system",
        explanation: "The digestive system breaks down food into nutrients that can be absorbed"
      },
      {
        id: "phys12",
        question: "What is the largest muscle in the human body?",
        options: ["Gluteus maximus", "Quadriceps", "Heart", "Diaphragm"],
        correct: "Gluteus maximus",
        explanation: "The gluteus maximus (buttock muscle) is the largest muscle in the human body"
      },
      {
        id: "phys13",
        question: "Which gland produces growth hormone?",
        options: ["Pituitary gland", "Thyroid gland", "Adrenal gland", "Pancreas"],
        correct: "Pituitary gland",
        explanation: "The pituitary gland, often called the 'master gland,' produces growth hormone"
      },
      {
        id: "phys14",
        question: "What is the normal resting heart rate?",
        options: ["60-100 beats per minute", "40-60 beats per minute", "100-120 beats per minute", "120-140 beats per minute"],
        correct: "60-100 beats per minute",
        explanation: "Normal resting heart rate for adults is 60-100 beats per minute"
      },
      {
        id: "phys15",
        question: "Which vitamin is produced by the skin?",
        options: ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin B12"],
        correct: "Vitamin D",
        explanation: "The skin produces vitamin D when exposed to sunlight"
      },
      {
        id: "phys16",
        question: "What is the function of white blood cells?",
        options: ["Fight infection", "Carry oxygen", "Clot blood", "Transport nutrients"],
        correct: "Fight infection",
        explanation: "White blood cells are part of the immune system and fight infections"
      },
      {
        id: "phys17",
        question: "Which organ produces bile?",
        options: ["Liver", "Gallbladder", "Pancreas", "Stomach"],
        correct: "Liver",
        explanation: "The liver produces bile, which helps digest fats"
      },
      {
        id: "phys18",
        question: "What is the main function of the skeletal system?",
        options: ["Support and protection", "Gas exchange", "Hormone production", "Waste removal"],
        correct: "Support and protection",
        explanation: "The skeletal system provides structural support and protects internal organs"
      },
      {
        id: "phys19",
        question: "Which part of the eye controls the amount of light entering?",
        options: ["Iris", "Cornea", "Lens", "Retina"],
        correct: "Iris",
        explanation: "The iris controls the size of the pupil, regulating light entry"
      },
      {
        id: "phys20",
        question: "What is homeostasis?",
        options: ["Maintaining internal balance", "Cell division", "Energy production", "Waste removal"],
        correct: "Maintaining internal balance",
        explanation: "Homeostasis is the body's ability to maintain stable internal conditions"
      }
    ]
  },
  {
    id: "ecology",
    name: "Ecology",
    description: "Ecosystems and Environment",
    questions: [
      {
        id: "eco1",
        question: "Which process converts light energy into chemical energy?",
        options: ["Respiration", "Photosynthesis", "Digestion", "Excretion"],
        correct: "Photosynthesis",
        explanation: "Photosynthesis in plants converts light energy into chemical energy stored in glucose"
      },
      {
        id: "eco2",
        question: "What is an ecosystem?",
        options: ["Community and its environment", "Group of same species", "Physical environment only", "Producers only"],
        correct: "Community and its environment",
        explanation: "An ecosystem includes all living organisms and their physical environment"
      },
      {
        id: "eco3",
        question: "What are producers in an ecosystem?",
        options: ["Organisms that make their own food", "Organisms that eat plants", "Organisms that eat meat", "Decomposers"],
        correct: "Organisms that make their own food",
        explanation: "Producers (autotrophs) make their own food through photosynthesis or chemosynthesis"
      },
      {
        id: "eco4",
        question: "What is a food chain?",
        options: ["Linear sequence of energy transfer", "All organisms in ecosystem", "Physical factors only", "Decomposition process"],
        correct: "Linear sequence of energy transfer",
        explanation: "A food chain shows the linear transfer of energy from one organism to another"
      },
      {
        id: "eco5",
        question: "What are decomposers?",
        options: ["Organisms that break down dead matter", "Primary producers", "Top predators", "Herbivores"],
        correct: "Organisms that break down dead matter",
        explanation: "Decomposers break down dead organic matter and recycle nutrients"
      },
      {
        id: "eco6",
        question: "What is the greenhouse effect?",
        options: ["Trapping of heat by atmospheric gases", "Plant growth in greenhouses", "Ocean warming", "Solar radiation"],
        correct: "Trapping of heat by atmospheric gases",
        explanation: "The greenhouse effect occurs when certain gases trap heat in Earth's atmosphere"
      },
      {
        id: "eco7",
        question: "What is biodiversity?",
        options: ["Variety of life forms", "Number of ecosystems", "Population size", "Genetic similarity"],
        correct: "Variety of life forms",
        explanation: "Biodiversity refers to the variety of life at all levels from genes to ecosystems"
      },
      {
        id: "eco8",
        question: "What is the carbon cycle?",
        options: ["Movement of carbon through ecosystems", "Plant growth only", "Animal respiration only", "Rock formation"],
        correct: "Movement of carbon through ecosystems",
        explanation: "The carbon cycle describes how carbon moves between the atmosphere, biosphere, and geosphere"
      },
      {
        id: "eco9",
        question: "What is an endangered species?",
        options: ["Species at risk of extinction", "New species", "Common species", "Extinct species"],
        correct: "Species at risk of extinction",
        explanation: "An endangered species has a very small population and is at risk of becoming extinct"
      },
      {
        id: "eco10",
        question: "What is succession in ecology?",
        options: ["Gradual change in ecosystem composition", "Animal migration", "Seasonal changes", "Daily cycles"],
        correct: "Gradual change in ecosystem composition",
        explanation: "Ecological succession is the gradual change in species composition over time"
      },
      {
        id: "eco11",
        question: "What is a habitat?",
        options: ["Where an organism lives", "What an organism eats", "How organism reproduces", "When organism is active"],
        correct: "Where an organism lives",
        explanation: "A habitat is the natural environment where an organism lives and meets its needs"
      },
      {
        id: "eco12",
        question: "What is a niche?",
        options: ["Role of organism in ecosystem", "Physical location", "Population size", "Genetic makeup"],
        correct: "Role of organism in ecosystem",
        explanation: "An ecological niche is the role and position an organism has in its environment"
      },
      {
        id: "eco13",
        question: "What is symbiosis?",
        options: ["Close relationship between species", "Competition between species", "Predation", "Migration"],
        correct: "Close relationship between species",
        explanation: "Symbiosis is a close, long-term relationship between different species"
      },
      {
        id: "eco14",
        question: "What is mutualism?",
        options: ["Both species benefit", "One benefits, other harmed", "One benefits, other unaffected", "Both species harmed"],
        correct: "Both species benefit",
        explanation: "Mutualism is a symbiotic relationship where both species benefit"
      },
      {
        id: "eco15",
        question: "What is parasitism?",
        options: ["One benefits, other harmed", "Both species benefit", "One benefits, other unaffected", "Both species harmed"],
        correct: "One benefits, other harmed",
        explanation: "Parasitism is a relationship where one organism benefits and the other is harmed"
      },
      {
        id: "eco16",
        question: "What is the water cycle?",
        options: ["Movement of water through environment", "Plant water uptake only", "Animal drinking only", "Ocean currents only"],
        correct: "Movement of water through environment",
        explanation: "The water cycle describes the continuous movement of water through the environment"
      },
      {
        id: "eco17",
        question: "What is pollution?",
        options: ["Harmful substances in environment", "Natural processes", "Beneficial changes", "Ecosystem development"],
        correct: "Harmful substances in environment",
        explanation: "Pollution is the introduction of harmful substances into the environment"
      },
      {
        id: "eco18",
        question: "What is conservation?",
        options: ["Protection of natural resources", "Resource exploitation", "Industrial development", "Urban expansion"],
        correct: "Protection of natural resources",
        explanation: "Conservation involves protecting and preserving natural resources and ecosystems"
      },
      {
        id: "eco19",
        question: "What causes acid rain?",
        options: ["Air pollution from sulfur and nitrogen compounds", "Natural rainfall", "Ocean evaporation", "Volcanic activity only"],
        correct: "Air pollution from sulfur and nitrogen compounds",
        explanation: "Acid rain forms when sulfur dioxide and nitrogen oxides react with water in the atmosphere"
      },
      {
        id: "eco20",
        question: "What is renewable energy?",
        options: ["Energy from sources that replenish naturally", "Energy from fossil fuels", "Nuclear energy only", "Energy that cannot be reused"],
        correct: "Energy from sources that replenish naturally",
        explanation: "Renewable energy comes from naturally replenishing sources like solar, wind, and water"
      }
    ]
  }
];
