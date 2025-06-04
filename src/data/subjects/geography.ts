
import { Chapter } from '../types';

export const geographyChapters: Chapter[] = [
  {
    id: 'physical_geography',
    name: 'Physical Geography',
    description: 'Earth\'s physical features and processes',
    questions: [
      // Easy Questions
      {
        id: 'phys_geo_1',
        question: 'What are the four major layers of Earth?',
        options: ['Core, mantle, crust, atmosphere', 'Land, water, air, fire', 'North, south, east, west', 'Hot, cold, wet, dry'],
        correct: 'Core, mantle, crust, atmosphere',
        explanation: 'Earth has four main layers: inner/outer core, mantle, crust, and atmosphere.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_2',
        question: 'What causes seasons?',
        options: ['Distance from sun', 'Earth\'s tilt', 'Moon phases', 'Ocean currents'],
        correct: 'Earth\'s tilt',
        explanation: 'Seasons are caused by Earth\'s 23.5-degree axial tilt as it orbits the sun.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_3',
        question: 'What is the water cycle?',
        options: ['Ocean movements', 'Continuous movement of water', 'Rain patterns', 'River flows'],
        correct: 'Continuous movement of water',
        explanation: 'The water cycle is the continuous movement of water through evaporation, condensation, and precipitation.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_4',
        question: 'What is erosion?',
        options: ['Mountain building', 'Wearing away of rock and soil', 'Volcanic activity', 'Earthquake damage'],
        correct: 'Wearing away of rock and soil',
        explanation: 'Erosion is the process of wearing away and transporting rock and soil by natural forces.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_5',
        question: 'What are tectonic plates?',
        options: ['Ocean floors', 'Large pieces of Earth\'s crust', 'Mountain ranges', 'River systems'],
        correct: 'Large pieces of Earth\'s crust',
        explanation: 'Tectonic plates are large pieces of Earth\'s lithosphere that move slowly over the mantle.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'phys_geo_med_1',
        question: 'What type of boundary creates mountains?',
        options: ['Divergent', 'Convergent', 'Transform', 'Passive'],
        correct: 'Convergent',
        explanation: 'Convergent plate boundaries create mountains when plates collide and push upward.',
        difficulty: 'medium'
      },
      {
        id: 'phys_geo_med_2',
        question: 'What is the difference between weather and climate?',
        options: ['No difference', 'Weather: short-term, Climate: long-term patterns', 'Only location differs', 'Only measurement differs'],
        correct: 'Weather: short-term, Climate: long-term patterns',
        explanation: 'Weather refers to daily conditions; climate refers to long-term weather patterns.',
        difficulty: 'medium'
      },
      {
        id: 'phys_geo_med_3',
        question: 'What causes ocean currents?',
        options: ['Wind and temperature differences', 'Moon only', 'Earthquakes', 'Fish migration'],
        correct: 'Wind and temperature differences',
        explanation: 'Ocean currents are driven by wind patterns, temperature differences, and Earth\'s rotation.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'phys_geo_hard_1',
        question: 'What is the Coriolis effect?',
        options: ['Ocean warming', 'Earth\'s rotation affecting moving objects', 'Mountain formation', 'Volcanic activity'],
        correct: 'Earth\'s rotation affecting moving objects',
        explanation: 'The Coriolis effect is the deflection of moving objects caused by Earth\'s rotation.',
        difficulty: 'hard'
      },
      {
        id: 'phys_geo_hard_2',
        question: 'What is isostatic rebound?',
        options: ['Plate collision', 'Land rising after ice sheet melting', 'Earthquake aftershock', 'Volcanic eruption'],
        correct: 'Land rising after ice sheet melting',
        explanation: 'Isostatic rebound is the gradual rise of land after the weight of ice sheets is removed.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_human_geography',
    name: 'Grade 11: Human Geography and Urbanization',
    description: 'Population patterns, migration, and urban development',
    questions: [
      // Easy Questions
      {
        id: 'g11_human_easy_1',
        question: 'What is population density?',
        options: ['Total population', 'Number of people per unit area', 'Birth rate', 'Migration rate'],
        correct: 'Number of people per unit area',
        explanation: 'Population density measures how many people live in a given area, usually per square kilometer.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_2',
        question: 'What is urbanization?',
        options: ['Rural development', 'Growth of cities and urban areas', 'Population decline', 'Agricultural expansion'],
        correct: 'Growth of cities and urban areas',
        explanation: 'Urbanization is the process of population shift from rural to urban areas and city growth.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_3',
        question: 'What is migration?',
        options: ['Population growth', 'Movement of people from one place to another', 'City planning', 'Economic development'],
        correct: 'Movement of people from one place to another',
        explanation: 'Migration is the movement of people from one geographic area to another.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_4',
        question: 'What is a megacity?',
        options: ['Small town', 'City with over 10 million people', 'Rural area', 'Industrial zone'],
        correct: 'City with over 10 million people',
        explanation: 'A megacity is defined as an urban area with a population exceeding 10 million people.',
        difficulty: 'easy'
      },
      {
        id: 'g11_human_easy_5',
        question: 'What causes rural-to-urban migration?',
        options: ['Better climate', 'Economic opportunities in cities', 'More land', 'Better farming'],
        correct: 'Economic opportunities in cities',
        explanation: 'People migrate from rural to urban areas seeking better economic opportunities and services.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_human_med_1',
        question: 'What is the demographic transition model?',
        options: ['Migration pattern', 'Model showing population change over time', 'Urban planning tool', 'Economic theory'],
        correct: 'Model showing population change over time',
        explanation: 'The demographic transition model shows how birth and death rates change as countries develop.',
        difficulty: 'medium'
      },
      {
        id: 'g11_human_med_2',
        question: 'What are push and pull factors in migration?',
        options: ['Physical forces', 'Factors that drive people away and attract them', 'Economic indicators', 'Urban features'],
        correct: 'Factors that drive people away and attract them',
        explanation: 'Push factors drive people away from an area; pull factors attract them to a new area.',
        difficulty: 'medium'
      },
      {
        id: 'g11_human_med_3',
        question: 'What is urban sprawl?',
        options: ['City center development', 'Uncontrolled expansion of urban areas', 'Population decline', 'Industrial growth'],
        correct: 'Uncontrolled expansion of urban areas',
        explanation: 'Urban sprawl is the uncontrolled expansion of urban areas into surrounding regions.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_human_hard_1',
        question: 'What is the concentric zone model?',
        options: ['Migration theory', 'Urban structure model with zones radiating from center', 'Population theory', 'Economic model'],
        correct: 'Urban structure model with zones radiating from center',
        explanation: 'The concentric zone model describes urban structure as zones radiating outward from the city center.',
        difficulty: 'hard'
      },
      {
        id: 'g11_human_hard_2',
        question: 'What is carrying capacity in human geography?',
        options: ['Transportation ability', 'Maximum population an area can sustain', 'Economic output', 'Urban density limit'],
        correct: 'Maximum population an area can sustain',
        explanation: 'Carrying capacity is the maximum number of people an environment can sustain indefinitely.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_global_issues',
    name: 'Grade 12: Global Environmental Issues',
    description: 'Climate change, sustainability, and environmental challenges',
    questions: [
      // Easy Questions
      {
        id: 'g12_global_easy_1',
        question: 'What is climate change?',
        options: ['Daily weather', 'Long-term changes in Earth\'s climate', 'Seasonal variations', 'Local temperature changes'],
        correct: 'Long-term changes in Earth\'s climate',
        explanation: 'Climate change refers to long-term shifts in global or regional climate patterns.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_2',
        question: 'What is the greenhouse effect?',
        options: ['Plant growth', 'Trapping of heat by atmospheric gases', 'Building design', 'Agricultural method'],
        correct: 'Trapping of heat by atmospheric gases',
        explanation: 'The greenhouse effect is the trapping of heat in the atmosphere by greenhouse gases.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_3',
        question: 'What is deforestation?',
        options: ['Planting trees', 'Removal of forests', 'Forest management', 'Tree growth'],
        correct: 'Removal of forests',
        explanation: 'Deforestation is the permanent removal of trees and forests for other land uses.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_4',
        question: 'What is sustainability?',
        options: ['Economic growth', 'Meeting needs without compromising future generations', 'Population control', 'Technology development'],
        correct: 'Meeting needs without compromising future generations',
        explanation: 'Sustainability means meeting present needs without compromising the ability of future generations to meet their needs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_5',
        question: 'What is biodiversity?',
        options: ['Number of people', 'Variety of life forms', 'Economic diversity', 'Cultural diversity'],
        correct: 'Variety of life forms',
        explanation: 'Biodiversity refers to the variety of life forms and ecosystems on Earth.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_global_med_1',
        question: 'What are the main greenhouse gases?',
        options: ['Oxygen and nitrogen', 'CO₂, methane, nitrous oxide', 'Hydrogen and helium', 'Ozone only'],
        correct: 'CO₂, methane, nitrous oxide',
        explanation: 'The main greenhouse gases include carbon dioxide, methane, and nitrous oxide.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_2',
        question: 'What is desertification?',
        options: ['Desert formation', 'Land degradation in arid areas', 'Sand movement', 'Climate cooling'],
        correct: 'Land degradation in arid areas',
        explanation: 'Desertification is the degradation of land in arid, semi-arid, and dry areas.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_3',
        question: 'What is the ozone layer?',
        options: ['Ground-level gas', 'Protective layer in upper atmosphere', 'Ocean layer', 'Soil component'],
        correct: 'Protective layer in upper atmosphere',
        explanation: 'The ozone layer in the stratosphere protects Earth from harmful UV radiation.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_global_hard_1',
        question: 'What is the Enhanced Greenhouse Effect?',
        options: ['Natural process only', 'Human activities intensifying greenhouse effect', 'Cooling effect', 'Ocean warming only'],
        correct: 'Human activities intensifying greenhouse effect',
        explanation: 'The Enhanced Greenhouse Effect refers to the strengthening of the greenhouse effect due to human activities.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_2',
        question: 'What is environmental justice?',
        options: ['Legal system', 'Fair treatment in environmental matters regardless of background', 'Conservation only', 'Economic policy'],
        correct: 'Fair treatment in environmental matters regardless of background',
        explanation: 'Environmental justice ensures fair treatment and meaningful involvement of all people in environmental decisions.',
        difficulty: 'hard'
      }
    ]
  }
];
