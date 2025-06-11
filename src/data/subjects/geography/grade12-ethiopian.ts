
import { Chapter } from '../types';

export const grade12EthiopianGeographyChapters: Chapter[] = [
  {
    id: 'grade12_plate_tectonics',
    name: 'Grade 12: Major Geological Processes Associated with Plate Tectonics',
    description: 'Ethiopian curriculum - Plate tectonics and geological processes',
    questions: [
      // Easy Questions
      {
        id: 'g12_plate_easy_1',
        question: 'What is plate tectonics?',
        options: ['Ocean movements', 'Theory of moving lithospheric plates', 'Mountain formation only', 'Volcanic activity only'],
        correct: 'Theory of moving lithospheric plates',
        explanation: 'Plate tectonics is the theory that Earth\'s lithosphere consists of moving plates.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_2',
        question: 'What are the three types of plate boundaries?',
        options: ['Hot, cold, warm', 'Divergent, convergent, transform', 'Land, sea, air', 'Fast, slow, static'],
        correct: 'Divergent, convergent, transform',
        explanation: 'The three main types of plate boundaries are divergent, convergent, and transform.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_3',
        question: 'Which geological process creates new oceanic crust?',
        options: ['Subduction', 'Seafloor spreading', 'Mountain building', 'Erosion'],
        correct: 'Seafloor spreading',
        explanation: 'Seafloor spreading at mid-ocean ridges creates new oceanic crust.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_plate_med_1',
        question: 'What happens at a convergent plate boundary?',
        options: ['Plates move apart', 'Plates collide and one may subduct', 'Plates slide past each other', 'No movement occurs'],
        correct: 'Plates collide and one may subduct',
        explanation: 'At convergent boundaries, plates collide and denser plates may subduct beneath lighter ones.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_2',
        question: 'What is the Ring of Fire?',
        options: ['Desert region', 'Area around Pacific Ocean with high volcanic activity', 'Forest fire zone', 'Hot climate region'],
        correct: 'Area around Pacific Ocean with high volcanic activity',
        explanation: 'The Ring of Fire is a region around the Pacific Ocean with high volcanic and seismic activity.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_plate_hard_1',
        question: 'What drives plate tectonic movement?',
        options: ['Wind patterns', 'Convection currents in the mantle', 'Ocean currents', 'Gravitational pull only'],
        correct: 'Convection currents in the mantle',
        explanation: 'Convection currents in the mantle, driven by heat from Earth\'s core, drive plate movement.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_climate_change',
    name: 'Grade 12: Climate Change',
    description: 'Ethiopian curriculum - Global climate change and impacts',
    questions: [
      // Easy Questions
      {
        id: 'g12_climate_easy_1',
        question: 'What is the main cause of current climate change?',
        options: ['Natural cycles only', 'Human activities increasing greenhouse gases', 'Solar radiation changes', 'Volcanic eruptions'],
        correct: 'Human activities increasing greenhouse gases',
        explanation: 'Current climate change is primarily caused by human activities that increase greenhouse gas concentrations.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_2',
        question: 'Which gas contributes most to the enhanced greenhouse effect?',
        options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Hydrogen'],
        correct: 'Carbon dioxide',
        explanation: 'Carbon dioxide is the most significant greenhouse gas contributing to enhanced greenhouse effect.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_3',
        question: 'What is global warming?',
        options: ['Cooling of Earth', 'Increase in Earth\'s average temperature', 'Seasonal temperature changes', 'Local weather changes'],
        correct: 'Increase in Earth\'s average temperature',
        explanation: 'Global warming refers to the long-term increase in Earth\'s average surface temperature.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_climate_med_1',
        question: 'What are the main impacts of climate change?',
        options: ['Only temperature rise', 'Sea level rise, extreme weather, ecosystem disruption', 'Only rainfall changes', 'Only seasonal shifts'],
        correct: 'Sea level rise, extreme weather, ecosystem disruption',
        explanation: 'Climate change impacts include sea level rise, extreme weather events, and ecosystem disruption.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_2',
        question: 'What is climate adaptation?',
        options: ['Preventing climate change', 'Adjusting to climate change impacts', 'Ignoring climate change', 'Moving to different climates'],
        correct: 'Adjusting to climate change impacts',
        explanation: 'Climate adaptation involves adjusting systems and societies to cope with climate change impacts.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_climate_hard_1',
        question: 'What is climate feedback?',
        options: ['Weather prediction', 'Process that amplifies or reduces climate change', 'Climate measurement', 'Seasonal variation'],
        correct: 'Process that amplifies or reduces climate change',
        explanation: 'Climate feedback is a process that either amplifies (positive) or reduces (negative) climate change.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_population_policies',
    name: 'Grade 12: Population Policies, Programs and the Environment',
    description: 'Ethiopian curriculum - Population policies and environmental relationships',
    questions: [
      // Easy Questions
      {
        id: 'g12_pop_easy_1',
        question: 'What is population policy?',
        options: ['Economic plan', 'Government measures to influence population growth', 'Education program', 'Health care system'],
        correct: 'Government measures to influence population growth',
        explanation: 'Population policy refers to government measures designed to influence population size, growth, and distribution.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_2',
        question: 'What is family planning?',
        options: ['Housing arrangements', 'Controlling number and spacing of children', 'Educational planning', 'Career planning'],
        correct: 'Controlling number and spacing of children',
        explanation: 'Family planning involves controlling the number and spacing of children through contraception and education.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_pop_med_1',
        question: 'How does population growth affect the environment?',
        options: ['No effect', 'Increases resource consumption and waste', 'Only positive effects', 'Only affects urban areas'],
        correct: 'Increases resource consumption and waste',
        explanation: 'Population growth typically increases resource consumption and waste production, affecting the environment.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_pop_hard_1',
        question: 'What is demographic dividend?',
        options: ['Population decline', 'Economic benefit from favorable age structure', 'Migration benefit', 'Educational benefit'],
        correct: 'Economic benefit from favorable age structure',
        explanation: 'Demographic dividend is the economic benefit that results from a favorable age structure of population.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_environmental_solutions',
    name: 'Grade 12: Solutions to Environmental and Sustainability Problems',
    description: 'Ethiopian curriculum - Environmental solutions and sustainable development',
    questions: [
      // Easy Questions
      {
        id: 'g12_env_easy_1',
        question: 'What is sustainable development?',
        options: ['Fast economic growth', 'Development meeting present needs without compromising future', 'Industrial development only', 'Urban development only'],
        correct: 'Development meeting present needs without compromising future',
        explanation: 'Sustainable development meets present needs without compromising the ability of future generations to meet theirs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_2',
        question: 'What is renewable energy?',
        options: ['Energy that can be replenished naturally', 'Fossil fuels', 'Nuclear energy only', 'Non-renewable resources'],
        correct: 'Energy that can be replenished naturally',
        explanation: 'Renewable energy comes from sources that can be replenished naturally over time.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_env_med_1',
        question: 'What are the three pillars of sustainability?',
        options: ['Land, water, air', 'Economic, environmental, social', 'Past, present, future', 'Local, national, global'],
        correct: 'Economic, environmental, social',
        explanation: 'The three pillars of sustainability are economic, environmental, and social sustainability.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_env_hard_1',
        question: 'What is circular economy?',
        options: ['Round trading system', 'Economic model that eliminates waste through reuse', 'Circular trade routes', 'Economic cycles'],
        correct: 'Economic model that eliminates waste through reuse',
        explanation: 'Circular economy is an economic model that aims to eliminate waste through reuse, recycling, and regeneration.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_economic_development',
    name: 'Grade 12: Challenges of Economic Development',
    description: 'Ethiopian curriculum - Economic development challenges and geography',
    questions: [
      // Easy Questions
      {
        id: 'g12_econ_easy_1',
        question: 'What is economic development?',
        options: ['Only GDP growth', 'Improvement in living standards and economic growth', 'Population growth', 'Urban expansion'],
        correct: 'Improvement in living standards and economic growth',
        explanation: 'Economic development involves sustained improvement in living standards and economic growth.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_2',
        question: 'What is poverty?',
        options: ['Temporary financial difficulty', 'Lack of basic necessities for adequate living', 'Low education only', 'Rural living'],
        correct: 'Lack of basic necessities for adequate living',
        explanation: 'Poverty is the lack of basic necessities and resources needed for an adequate standard of living.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_econ_med_1',
        question: 'What factors influence economic development?',
        options: ['Geography only', 'Natural resources, human capital, technology, institutions', 'Population only', 'Climate only'],
        correct: 'Natural resources, human capital, technology, institutions',
        explanation: 'Economic development is influenced by natural resources, human capital, technology, and institutions.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_econ_hard_1',
        question: 'What is the resource curse?',
        options: ['Lack of resources', 'Negative economic effects of abundant natural resources', 'Resource depletion', 'Resource conservation'],
        correct: 'Negative economic effects of abundant natural resources',
        explanation: 'The resource curse refers to negative economic effects that can result from abundant natural resources.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_global_issues',
    name: 'Grade 12: Contemporary Global Geographic Issues and Public Concerns',
    description: 'Ethiopian curriculum - Global geographic issues and contemporary concerns',
    questions: [
      // Easy Questions
      {
        id: 'g12_global_easy_1',
        question: 'What is globalization?',
        options: ['Local development', 'Increasing global interconnectedness', 'National isolation', 'Regional cooperation only'],
        correct: 'Increasing global interconnectedness',
        explanation: 'Globalization is the increasing interconnectedness and interdependence of countries worldwide.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_2',
        question: 'What is food security?',
        options: ['Food storage', 'Access to sufficient, safe, nutritious food', 'Food production only', 'Agricultural development'],
        correct: 'Access to sufficient, safe, nutritious food',
        explanation: 'Food security means having access to sufficient, safe, and nutritious food to meet dietary needs.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_global_med_1',
        question: 'What are global challenges?',
        options: ['Local problems only', 'Issues affecting multiple countries requiring cooperation', 'National issues only', 'Regional concerns only'],
        correct: 'Issues affecting multiple countries requiring cooperation',
        explanation: 'Global challenges are issues that affect multiple countries and require international cooperation to address.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_global_hard_1',
        question: 'What is glocalization?',
        options: ['Global isolation', 'Adaptation of global products to local conditions', 'Local production only', 'Global standardization'],
        correct: 'Adaptation of global products to local conditions',
        explanation: 'Glocalization refers to the adaptation of global products, services, or ideas to local conditions.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_geographical_enquiry',
    name: 'Grade 12: Geographical Enquiry and Map Making',
    description: 'Ethiopian curriculum - Geographic research methods and cartography',
    questions: [
      // Easy Questions
      {
        id: 'g12_enquiry_easy_1',
        question: 'What is geographical enquiry?',
        options: ['Reading maps only', 'Systematic investigation of geographic questions', 'Memorizing places', 'Drawing pictures'],
        correct: 'Systematic investigation of geographic questions',
        explanation: 'Geographical enquiry is the systematic investigation and research of geographic questions and issues.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_2',
        question: 'What is a map scale?',
        options: ['Map size', 'Relationship between map distance and real distance', 'Map colors', 'Map symbols'],
        correct: 'Relationship between map distance and real distance',
        explanation: 'Map scale shows the relationship between distances on a map and corresponding distances in reality.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_enquiry_med_1',
        question: 'What are the steps in geographical enquiry?',
        options: ['Only observation', 'Question, collect data, analyze, conclude', 'Only mapping', 'Only measurement'],
        correct: 'Question, collect data, analyze, conclude',
        explanation: 'Geographical enquiry involves formulating questions, collecting data, analyzing, and drawing conclusions.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_enquiry_hard_1',
        question: 'What is GIS?',
        options: ['Government Information System', 'Geographic Information System for spatial analysis', 'Global Internet System', 'Geological Investigation Service'],
        correct: 'Geographic Information System for spatial analysis',
        explanation: 'GIS (Geographic Information System) is a system for capturing, storing, analyzing, and displaying spatial data.',
        difficulty: 'hard'
      }
    ]
  }
];
