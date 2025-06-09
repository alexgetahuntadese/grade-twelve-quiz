
import { Chapter } from '../types';

export const agricultureChapters: Chapter[] = [
  {
    id: 'grade12-vegetable-crops',
    name: 'Unit 1: Vegetable Crops Production and Management',
    description: 'Learn about planning, planting, and managing vegetable crop production systems.',
    questions: [
      {
        id: 'veg-1',
        question: 'What is the optimal soil pH range for most vegetable crops?',
        options: ['4.0-5.5', '6.0-7.0', '7.5-8.5', '8.0-9.0'],
        correct: '6.0-7.0',
        explanation: 'Most vegetable crops grow best in slightly acidic to neutral soil with pH 6.0-7.0.',
        difficulty: 'easy'
      },
      {
        id: 'veg-2',
        question: 'Which irrigation method is most water-efficient for vegetable production?',
        options: ['Flood irrigation', 'Sprinkler irrigation', 'Drip irrigation', 'Furrow irrigation'],
        correct: 'Drip irrigation',
        explanation: 'Drip irrigation delivers water directly to plant roots, minimizing water loss.',
        difficulty: 'medium'
      },
      {
        id: 'veg-3',
        question: 'What is integrated pest management (IPM) in vegetable production?',
        options: ['Using only chemical pesticides', 'Combining biological, cultural, and chemical control methods', 'Organic farming only', 'No pest control'],
        correct: 'Combining biological, cultural, and chemical control methods',
        explanation: 'IPM uses multiple approaches to manage pests sustainably and effectively.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-fruit-crops',
    name: 'Unit 2: Fruit Crops Production and Management',
    description: 'Study fruit tree cultivation, orchard management, and harvest techniques.',
    questions: [
      {
        id: 'fruit-1',
        question: 'What is the primary purpose of pruning fruit trees?',
        options: ['Decoration', 'Shape control, light penetration, and disease prevention', 'Reduce fruit size', 'Increase tree height'],
        correct: 'Shape control, light penetration, and disease prevention',
        explanation: 'Pruning improves tree structure, allows sunlight penetration, and reduces disease risk.',
        difficulty: 'easy'
      },
      {
        id: 'fruit-2',
        question: 'Which factor is most critical for successful fruit tree grafting?',
        options: ['Soil type', 'Cambium layer contact', 'Tree age', 'Fruit size'],
        correct: 'Cambium layer contact',
        explanation: 'Proper alignment of cambium layers ensures successful graft union formation.',
        difficulty: 'medium'
      },
      {
        id: 'fruit-3',
        question: 'What is the vernalization requirement in fruit production?',
        options: ['Summer heat exposure', 'Cold treatment for flowering', 'Water stress', 'Fertilizer application'],
        correct: 'Cold treatment for flowering',
        explanation: 'Many fruit trees require a period of cold temperatures to initiate flowering.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-root-tuber-crops',
    name: 'Unit 3: Root and Tuber Crops Production and Management',
    description: 'Understand cultivation techniques for root and tuber crops like potatoes and sweet potatoes.',
    questions: [
      {
        id: 'root-1',
        question: 'Which part of the potato plant is consumed as food?',
        options: ['Root', 'Stem tuber', 'Leaf', 'Flower'],
        correct: 'Stem tuber',
        explanation: 'Potatoes are actually modified underground stems called tubers, not roots.',
        difficulty: 'easy'
      },
      {
        id: 'root-2',
        question: 'What is the recommended planting depth for potato seed tubers?',
        options: ['2-3 cm', '5-8 cm', '10-15 cm', '20-25 cm'],
        correct: '10-15 cm',
        explanation: 'Potato seed tubers should be planted 10-15 cm deep for proper development.',
        difficulty: 'medium'
      },
      {
        id: 'root-3',
        question: 'Which disease is a major concern in sweet potato production in humid conditions?',
        options: ['Rust', 'Sweet potato weevil', 'Alternaria leaf spot', 'Root rot'],
        correct: 'Root rot',
        explanation: 'Root rot caused by various fungi is common in humid, poorly drained conditions.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-coffee-tea-spices',
    name: 'Unit 4: Coffee, Tea, and Spices Production and Management',
    description: 'Learn about cultivation and processing of coffee, tea, and various spice crops.',
    questions: [
      {
        id: 'coffee-1',
        question: 'What is the optimal altitude range for Arabica coffee cultivation?',
        options: ['0-500m', '500-1000m', '1200-2000m', '2500-3000m'],
        correct: '1200-2000m',
        explanation: 'Arabica coffee grows best at higher altitudes between 1200-2000m above sea level.',
        difficulty: 'easy'
      },
      {
        id: 'coffee-2',
        question: 'What is the wet processing method in coffee production?',
        options: ['Drying beans in sun', 'Removing pulp before drying', 'Roasting green beans', 'Grinding coffee beans'],
        correct: 'Removing pulp before drying',
        explanation: 'Wet processing removes the fruit pulp from coffee beans before drying.',
        difficulty: 'medium'
      },
      {
        id: 'coffee-3',
        question: 'Which compound gives black tea its characteristic color and astringency?',
        options: ['Caffeine', 'Tannins', 'Chlorophyll', 'Carotenoids'],
        correct: 'Tannins',
        explanation: 'Tannins are responsible for the dark color and astringent taste of black tea.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-plant-biotechnology',
    name: 'Unit 5: Introduction to Plant Biotechnology',
    description: 'Explore modern biotechnology applications in plant breeding and production.',
    questions: [
      {
        id: 'biotech-1',
        question: 'What is tissue culture in plant biotechnology?',
        options: ['Growing plants in soil', 'Growing plant cells in controlled laboratory conditions', 'Crossbreeding plants', 'Grafting techniques'],
        correct: 'Growing plant cells in controlled laboratory conditions',
        explanation: 'Tissue culture involves growing plant cells, tissues, or organs in sterile lab conditions.',
        difficulty: 'easy'
      },
      {
        id: 'biotech-2',
        question: 'What does GMO stand for in agriculture?',
        options: ['General Management Operation', 'Genetically Modified Organism', 'Growth Monitoring Objective', 'Green Management Option'],
        correct: 'Genetically Modified Organism',
        explanation: 'GMO refers to organisms whose genetic material has been artificially modified.',
        difficulty: 'medium'
      },
      {
        id: 'biotech-3',
        question: 'What is the primary advantage of marker-assisted selection in plant breeding?',
        options: ['Cheaper than traditional breeding', 'Faster and more precise selection', 'No special equipment needed', 'Works only with cereals'],
        correct: 'Faster and more precise selection',
        explanation: 'Molecular markers allow breeders to select desired traits more quickly and accurately.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-beef-cattle',
    name: 'Unit 6: Beef Cattle Production and Management',
    description: 'Study beef cattle breeding, feeding, and management practices.',
    questions: [
      {
        id: 'beef-1',
        question: 'What is the gestation period for cattle?',
        options: ['6 months', '9 months', '12 months', '15 months'],
        correct: '9 months',
        explanation: 'Cattle have a gestation period of approximately 9 months (280-285 days).',
        difficulty: 'easy'
      },
      {
        id: 'beef-2',
        question: 'What is the primary component of cattle feed in intensive systems?',
        options: ['Grass only', 'Concentrates and roughage', 'Water only', 'Minerals only'],
        correct: 'Concentrates and roughage',
        explanation: 'Intensive cattle feeding combines energy-rich concentrates with fiber-rich roughage.',
        difficulty: 'medium'
      },
      {
        id: 'beef-3',
        question: 'What is crossbreeding in cattle production?',
        options: ['Feeding different feeds', 'Mating animals of different breeds', 'Changing pasture rotation', 'Vaccinating cattle'],
        correct: 'Mating animals of different breeds',
        explanation: 'Crossbreeding involves mating cattle of different breeds to combine desirable traits.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-camel-production',
    name: 'Unit 7: Camel Production and Management',
    description: 'Learn about camel husbandry, feeding, and management in arid regions.',
    questions: [
      {
        id: 'camel-1',
        question: 'What is the main advantage of camels in arid environments?',
        options: ['Fast running speed', 'Water and heat tolerance', 'Large milk production', 'Small body size'],
        correct: 'Water and heat tolerance',
        explanation: 'Camels are adapted to survive with limited water and high temperatures.',
        difficulty: 'easy'
      },
      {
        id: 'camel-2',
        question: 'How long can a camel survive without water?',
        options: ['1-2 days', '3-5 days', '7-10 days', '15-20 days'],
        correct: '7-10 days',
        explanation: 'Camels can survive 7-10 days without water under normal conditions.',
        difficulty: 'medium'
      },
      {
        id: 'camel-3',
        question: 'What is the primary use of camel fiber?',
        options: ['Food production', 'Textile manufacturing', 'Construction material', 'Fuel'],
        correct: 'Textile manufacturing',
        explanation: 'Camel hair is valuable for producing high-quality textiles and fabrics.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-poultry-production',
    name: 'Unit 8: Poultry Production and Management',
    description: 'Study chicken, duck, and other poultry production systems.',
    questions: [
      {
        id: 'poultry-1',
        question: 'What is the incubation period for chicken eggs?',
        options: ['18 days', '21 days', '24 days', '28 days'],
        correct: '21 days',
        explanation: 'Chicken eggs typically hatch after 21 days of incubation.',
        difficulty: 'easy'
      },
      {
        id: 'poultry-2',
        question: 'What is brooding in poultry production?',
        options: ['Egg collection', 'Caring for young chicks', 'Adult bird feeding', 'Egg incubation'],
        correct: 'Caring for young chicks',
        explanation: 'Brooding involves providing warmth, food, and care to newly hatched chicks.',
        difficulty: 'medium'
      },
      {
        id: 'poultry-3',
        question: 'What is the optimal protein content in layer feed for maximum egg production?',
        options: ['12-14%', '16-18%', '20-22%', '24-26%'],
        correct: '16-18%',
        explanation: 'Layer hens require 16-18% protein in their diet for optimal egg production.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-fishery-production',
    name: 'Unit 9: Fishery Production and Management',
    description: 'Understand fish farming, pond management, and aquaculture systems.',
    questions: [
      {
        id: 'fish-1',
        question: 'What is aquaculture?',
        options: ['Wild fish catching', 'Fish farming in controlled environments', 'Ocean pollution', 'Fish processing'],
        correct: 'Fish farming in controlled environments',
        explanation: 'Aquaculture is the controlled cultivation of fish and other aquatic organisms.',
        difficulty: 'easy'
      },
      {
        id: 'fish-2',
        question: 'What is the optimal dissolved oxygen level for most fish species?',
        options: ['1-2 ppm', '3-4 ppm', '5-7 ppm', '8-10 ppm'],
        correct: '5-7 ppm',
        explanation: 'Most fish species require 5-7 ppm dissolved oxygen for healthy growth.',
        difficulty: 'medium'
      },
      {
        id: 'fish-3',
        question: 'What is polyculture in fish farming?',
        options: ['Single species farming', 'Multiple fish species in same pond', 'Fish breeding only', 'Pond construction'],
        correct: 'Multiple fish species in same pond',
        explanation: 'Polyculture involves raising different fish species together to optimize pond productivity.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-apiculture',
    name: 'Unit 10: Apiculture',
    description: 'Learn about beekeeping, honey production, and bee colony management.',
    questions: [
      {
        id: 'bee-1',
        question: 'What is the primary role of worker bees in a hive?',
        options: ['Laying eggs', 'Collecting nectar and pollen', 'Mating', 'Leading the colony'],
        correct: 'Collecting nectar and pollen',
        explanation: 'Worker bees are responsible for foraging, collecting nectar and pollen for the colony.',
        difficulty: 'easy'
      },
      {
        id: 'bee-2',
        question: 'What is the optimal temperature range for bee colony activity?',
        options: ['10-15°C', '18-25°C', '30-35°C', '40-45°C'],
        correct: '18-25°C',
        explanation: 'Bees are most active and productive in temperatures between 18-25°C.',
        difficulty: 'medium'
      },
      {
        id: 'bee-3',
        question: 'What is propolis in beekeeping?',
        options: ['Bee food', 'Resinous substance used to seal hive gaps', 'Bee larvae', 'Queen bee pheromone'],
        correct: 'Resinous substance used to seal hive gaps',
        explanation: 'Propolis is a sticky substance bees collect to seal cracks and strengthen the hive.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-nursery-plantation',
    name: 'Unit 11: Nursery and Plantation Technology',
    description: 'Study seedling production, nursery management, and plantation establishment.',
    questions: [
      {
        id: 'nursery-1',
        question: 'What is the primary purpose of a plant nursery?',
        options: ['Seed storage', 'Producing healthy seedlings for transplanting', 'Harvesting fruits', 'Processing plants'],
        correct: 'Producing healthy seedlings for transplanting',
        explanation: 'Nurseries provide controlled environments for raising healthy seedlings.',
        difficulty: 'easy'
      },
      {
        id: 'nursery-2',
        question: 'What is hardening off in nursery management?',
        options: ['Making soil hard', 'Gradually exposing seedlings to outdoor conditions', 'Pruning roots', 'Applying fertilizer'],
        correct: 'Gradually exposing seedlings to outdoor conditions',
        explanation: 'Hardening off acclimates seedlings to outdoor conditions before transplanting.',
        difficulty: 'medium'
      },
      {
        id: 'nursery-3',
        question: 'What is the ideal spacing for forest plantation establishment?',
        options: ['Depends on species and purpose', '1m x 1m always', '5m x 5m always', 'Random spacing'],
        correct: 'Depends on species and purpose',
        explanation: 'Spacing varies based on tree species, growth characteristics, and plantation objectives.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-agroforestry',
    name: 'Unit 12: Basics of Agro-Forestry Systems and Practices',
    description: 'Understand integration of trees with agricultural crops and livestock.',
    questions: [
      {
        id: 'agroforestry-1',
        question: 'What is agroforestry?',
        options: ['Only growing trees', 'Only growing crops', 'Integrating trees with crops and/or livestock', 'Forest conservation only'],
        correct: 'Integrating trees with crops and/or livestock',
        explanation: 'Agroforestry combines trees with agricultural crops and/or livestock systems.',
        difficulty: 'easy'
      },
      {
        id: 'agroforestry-2',
        question: 'What is alley cropping in agroforestry?',
        options: ['Planting crops between tree rows', 'Growing only trees', 'Random tree planting', 'Monoculture farming'],
        correct: 'Planting crops between tree rows',
        explanation: 'Alley cropping involves growing crops in alleys between rows of trees.',
        difficulty: 'medium'
      },
      {
        id: 'agroforestry-3',
        question: 'What is the nitrogen fixation benefit in agroforestry systems?',
        options: ['Trees consume nitrogen', 'Leguminous trees add nitrogen to soil', 'No nitrogen effect', 'Trees prevent nitrogen loss only'],
        correct: 'Leguminous trees add nitrogen to soil',
        explanation: 'Nitrogen-fixing trees improve soil fertility by converting atmospheric nitrogen.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-soil-water-conservation',
    name: 'Unit 13: Soil and Water Conservation',
    description: 'Learn techniques for preventing soil erosion and conserving water resources.',
    questions: [
      {
        id: 'conservation-1',
        question: 'What is soil erosion?',
        options: ['Soil formation', 'Soil movement by wind and water', 'Soil cultivation', 'Soil fertilization'],
        correct: 'Soil movement by wind and water',
        explanation: 'Soil erosion is the displacement of topsoil by natural forces like wind and water.',
        difficulty: 'easy'
      },
      {
        id: 'conservation-2',
        question: 'What is contour plowing?',
        options: ['Plowing up and down slopes', 'Plowing across slopes following contour lines', 'Deep plowing only', 'No-till farming'],
        correct: 'Plowing across slopes following contour lines',
        explanation: 'Contour plowing follows the natural contours of land to reduce water runoff.',
        difficulty: 'medium'
      },
      {
        id: 'conservation-3',
        question: 'What is the C-factor in the Universal Soil Loss Equation (USLE)?',
        options: ['Climate factor', 'Cover and management factor', 'Crop factor only', 'Conservation factor'],
        correct: 'Cover and management factor',
        explanation: 'The C-factor represents the effect of vegetation cover and management practices.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-gender-nutrition',
    name: 'Unit 14: Gender and Human Nutrition',
    description: 'Study the relationship between gender roles and nutritional security in agriculture.',
    questions: [
      {
        id: 'nutrition-1',
        question: 'What is malnutrition?',
        options: ['Eating too much food', 'Inadequate or improper nutrition', 'Only vitamin deficiency', 'Only protein deficiency'],
        correct: 'Inadequate or improper nutrition',
        explanation: 'Malnutrition includes both undernutrition and overnutrition conditions.',
        difficulty: 'easy'
      },
      {
        id: 'nutrition-2',
        question: 'Which vitamin deficiency causes night blindness?',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correct: 'Vitamin A',
        explanation: 'Vitamin A deficiency is the leading cause of preventable night blindness.',
        difficulty: 'medium'
      },
      {
        id: 'nutrition-3',
        question: 'What is nutrition-sensitive agriculture?',
        options: ['Only growing nutritious crops', 'Agricultural practices that improve nutritional outcomes', 'Organic farming only', 'Reduced farming'],
        correct: 'Agricultural practices that improve nutritional outcomes',
        explanation: 'Nutrition-sensitive agriculture maximizes agriculture\'s contribution to nutrition.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-food-postharvest',
    name: 'Unit 15: Safe Food Production and Postharvest Handling',
    description: 'Learn about food safety, storage, and postharvest management techniques.',
    questions: [
      {
        id: 'postharvest-1',
        question: 'What is postharvest loss?',
        options: ['Loss before planting', 'Loss of food after harvest', 'Loss during planting', 'Market price loss'],
        correct: 'Loss of food after harvest',
        explanation: 'Postharvest loss refers to food lost after harvest during handling, storage, and processing.',
        difficulty: 'easy'
      },
      {
        id: 'postharvest-2',
        question: 'What is the optimal storage temperature for most vegetables?',
        options: ['-5°C to 0°C', '0°C to 4°C', '10°C to 15°C', '20°C to 25°C'],
        correct: '0°C to 4°C',
        explanation: 'Most vegetables maintain quality best when stored at temperatures between 0°C to 4°C.',
        difficulty: 'medium'
      },
      {
        id: 'postharvest-3',
        question: 'What is HACCP in food safety?',
        options: ['Harvesting technique', 'Hazard Analysis and Critical Control Points', 'Storage method', 'Processing equipment'],
        correct: 'Hazard Analysis and Critical Control Points',
        explanation: 'HACCP is a systematic approach to identify and control food safety hazards.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12-ict-agriculture',
    name: 'Unit 16: Application of Information and Communication Technologies (ICT) in Agriculture',
    description: 'Explore how technology and digital tools are transforming modern agriculture.',
    questions: [
      {
        id: 'ict-1',
        question: 'What is precision agriculture?',
        options: ['Accurate seed planting', 'Using technology to optimize field management', 'Manual farming only', 'Traditional farming methods'],
        correct: 'Using technology to optimize field management',
        explanation: 'Precision agriculture uses technology like GPS and sensors to optimize crop management.',
        difficulty: 'easy'
      },
      {
        id: 'ict-2',
        question: 'What does GPS stand for in agricultural applications?',
        options: ['General Positioning System', 'Global Positioning System', 'Ground Production System', 'Growth Prediction System'],
        correct: 'Global Positioning System',
        explanation: 'GPS provides precise location data for field mapping and guided machinery.',
        difficulty: 'medium'
      },
      {
        id: 'ict-3',
        question: 'What is the Internet of Things (IoT) application in agriculture?',
        options: ['Only internet access', 'Connected sensors monitoring crops and livestock', 'Social media for farmers', 'Online shopping only'],
        correct: 'Connected sensors monitoring crops and livestock',
        explanation: 'IoT involves interconnected devices that collect and share agricultural data.',
        difficulty: 'hard'
      }
    ]
  }
];
