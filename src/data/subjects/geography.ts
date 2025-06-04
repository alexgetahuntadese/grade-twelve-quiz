
import { Chapter } from '../types';

export const geographyChapters: Chapter[] = [
  {
    id: 'physical_geography',
    name: 'Physical Geography',
    description: 'Landforms, climate, and natural processes',
    questions: [
      // Easy Questions
      {
        id: 'phys_geo_1',
        question: 'What is the longest river in the world?',
        options: ['Amazon', 'Nile', 'Mississippi', 'Yangtze'],
        correct: 'Nile',
        explanation: 'The Nile River, at approximately 6,650 km long, is considered the longest river.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_2',
        question: 'What is the tallest mountain in the world?',
        options: ['K2', 'Mount Everest', 'Kilimanjaro', 'Mont Blanc'],
        correct: 'Mount Everest',
        explanation: 'Mount Everest stands at 8,848 meters (29,029 feet) above sea level.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_3',
        question: 'What is an ocean?',
        options: ['Small body of water', 'Large body of salt water', 'Large lake', 'River system'],
        correct: 'Large body of salt water',
        explanation: 'An ocean is a large body of salt water that covers about 71% of Earth\'s surface.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_4',
        question: 'What causes the seasons?',
        options: ['Distance from sun', 'Earth\'s tilt on its axis', 'Ocean currents', 'Wind patterns'],
        correct: 'Earth\'s tilt on its axis',
        explanation: 'Seasons change because Earth\'s axis is tilted as it orbits the sun.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_5',
        question: 'What is a continent?',
        options: ['Large island', 'Large landmass', 'Country', 'Ocean floor'],
        correct: 'Large landmass',
        explanation: 'A continent is one of the major landmasses on Earth.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_6',
        question: 'What is the largest desert in the world?',
        options: ['Gobi', 'Sahara', 'Antarctic', 'Kalahari'],
        correct: 'Antarctic',
        explanation: 'The Antarctic Desert is the largest desert in the world (deserts are defined by precipitation).',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_7',
        question: 'What is a peninsula?',
        options: ['Island', 'Lake', 'Land surrounded by water on three sides', 'Mountain range'],
        correct: 'Land surrounded by water on three sides',
        explanation: 'A peninsula is a piece of land bordered by water on three sides.',
        difficulty: 'easy'
      },
      {
        id: 'phys_geo_8',
        question: 'What are the five oceans of the world?',
        options: ['Atlantic, Pacific, Indian, Arctic, Southern', 'Atlantic, Pacific, Indian, Caribbean, Mediterranean', 'Atlantic, Pacific, Indian, Arctic, Baltic', 'Atlantic, Pacific, Indian, Southern, Caspian'],
        correct: 'Atlantic, Pacific, Indian, Arctic, Southern',
        explanation: 'The five oceans are Atlantic, Pacific, Indian, Arctic, and Southern (or Antarctic).',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'phys_geo_med_1',
        question: 'What causes earthquakes?',
        options: ['Weather', 'Movement of tectonic plates', 'Ocean currents', 'Volcanic ash'],
        correct: 'Movement of tectonic plates',
        explanation: 'Earthquakes occur when tectonic plates suddenly move against each other.',
        difficulty: 'medium'
      },
      {
        id: 'phys_geo_med_2',
        question: 'What is an isthmus?',
        options: ['Island chain', 'Narrow land bridge', 'Mountain pass', 'River delta'],
        correct: 'Narrow land bridge',
        explanation: 'An isthmus is a narrow strip of land connecting two larger landmasses.',
        difficulty: 'medium'
      },
      {
        id: 'phys_geo_med_3',
        question: 'What causes monsoon seasons?',
        options: ['Ocean tides', 'Seasonal wind shifts', 'Volcanic activity', 'Earthquake patterns'],
        correct: 'Seasonal wind shifts',
        explanation: 'Monsoons result from seasonal changes in wind direction due to temperature differences between land and sea.',
        difficulty: 'medium'
      },
      {
        id: 'phys_geo_med_4',
        question: 'What is the Ring of Fire?',
        options: ['Desert region', 'Arctic circle', 'Volcanic belt around Pacific', 'Forest zone'],
        correct: 'Volcanic belt around Pacific',
        explanation: 'The Ring of Fire is a zone of frequent earthquakes and volcanic eruptions around the Pacific Ocean.',
        difficulty: 'medium'
      },
      {
        id: 'phys_geo_med_5',
        question: 'What is a watershed?',
        options: ['Small lake', 'Land that drains into a specific water body', 'Artificial dam', 'Water filtering system'],
        correct: 'Land that drains into a specific water body',
        explanation: 'A watershed is an area of land where all water drains into a common body of water.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'phys_geo_hard_1',
        question: 'What is the difference between weather and climate?',
        options: ['No difference', 'Weather is short-term, climate is long-term', 'Weather affects larger areas', 'Climate changes daily'],
        correct: 'Weather is short-term, climate is long-term',
        explanation: 'Weather describes short-term atmospheric conditions; climate refers to long-term patterns.',
        difficulty: 'hard'
      },
      {
        id: 'phys_geo_hard_2',
        question: 'How does the Coriolis effect impact global wind patterns?',
        options: ['It has no impact', 'Creates straight wind patterns', 'Deflects moving air right in Northern Hemisphere', 'Speeds up winds at the equator'],
        correct: 'Deflects moving air right in Northern Hemisphere',
        explanation: 'The Coriolis effect deflects moving air clockwise in the Northern Hemisphere and counterclockwise in the Southern.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade11_human_geography',
    name: 'Grade 11: Human Geography',
    description: 'Population patterns, cultural geography, and urbanization',
    questions: [
      // Easy Questions
      {
        id: 'g11_hgeo_easy_1',
        question: 'What is urbanization?',
        options: ['Rural development', 'Growth of urban areas', 'Population decrease', 'Farming technique'],
        correct: 'Growth of urban areas',
        explanation: 'Urbanization is the process of population shift from rural to urban areas.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hgeo_easy_2',
        question: 'What is population density?',
        options: ['Total population', 'Age distribution', 'People per unit area', 'Birth rate'],
        correct: 'People per unit area',
        explanation: 'Population density measures the number of people per unit of area.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hgeo_easy_3',
        question: 'What is a megacity?',
        options: ['Small town', 'City with over 10 million people', 'Ancient city', 'Planned city'],
        correct: 'City with over 10 million people',
        explanation: 'A megacity is a metropolitan area with more than 10 million inhabitants.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hgeo_easy_4',
        question: 'What is migration?',
        options: ['Birth rate increase', 'Movement of people', 'Cultural festival', 'Urban development'],
        correct: 'Movement of people',
        explanation: 'Migration is the movement of people from one place to another.',
        difficulty: 'easy'
      },
      {
        id: 'g11_hgeo_easy_5',
        question: 'What is a push factor in migration?',
        options: ['Attracts people to new location', 'Force that drives people away', 'Government policy', 'Economic opportunity'],
        correct: 'Force that drives people away',
        explanation: 'Push factors are conditions that drive people to leave their homes, like conflict or poverty.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_hgeo_med_1',
        question: 'What is the demographic transition model?',
        options: ['Migration pattern', 'Population change over time', 'Urban planning', 'Cultural diffusion'],
        correct: 'Population change over time',
        explanation: 'This model describes how population changes as countries develop economically.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hgeo_med_2',
        question: 'What is gentrification?',
        options: ['Urban decay', 'Rural development', 'Urban renewal affecting demographics', 'Suburban growth'],
        correct: 'Urban renewal affecting demographics',
        explanation: 'Gentrification is the process of changing an area through influx of wealthier residents and businesses.',
        difficulty: 'medium'
      },
      {
        id: 'g11_hgeo_med_3',
        question: 'What is a cultural landscape?',
        options: ['Natural scenery', 'Land modified by human activity', 'Art gallery', 'Garden design'],
        correct: 'Land modified by human activity',
        explanation: 'Cultural landscape refers to land modified by human activity reflecting cultural values.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_hgeo_hard_1',
        question: 'How does distance decay affect spatial interactions?',
        options: ['Has no effect', 'Interaction decreases with distance', 'Interaction increases with distance', 'Only affects certain cultures'],
        correct: 'Interaction decreases with distance',
        explanation: 'Distance decay is the principle that interaction between places decreases as distance increases.',
        difficulty: 'hard'
      },
      {
        id: 'g11_hgeo_hard_2',
        question: 'How do central place theory and rank-size rule relate to urban patterns?',
        options: ['They contradict each other', 'Both explain urban settlement hierarchies', 'They apply to different continents', 'Neither is used today'],
        correct: 'Both explain urban settlement hierarchies',
        explanation: 'Both theories help explain the hierarchical organization and distribution of human settlements.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade12_environmental_geography',
    name: 'Grade 12: Environmental Geography',
    description: 'Resource management, environmental challenges, and sustainability',
    questions: [
      // Easy Questions
      {
        id: 'g12_egeo_easy_1',
        question: 'What is sustainability?',
        options: ['Economic growth', 'Meeting needs without compromising future', 'Industrial development', 'Resource depletion'],
        correct: 'Meeting needs without compromising future',
        explanation: 'Sustainability involves meeting present needs without compromising future generations.',
        difficulty: 'easy'
      },
      {
        id: 'g12_egeo_easy_2',
        question: 'What is deforestation?',
        options: ['Planting trees', 'Clearing forests', 'Urban growth', 'Soil formation'],
        correct: 'Clearing forests',
        explanation: 'Deforestation is the removal of forest or tree cover for various purposes.',
        difficulty: 'easy'
      },
      {
        id: 'g12_egeo_easy_3',
        question: 'What is climate change?',
        options: ['Daily weather', 'Long-term weather patterns change', 'Seasonal variation', 'Local temperature'],
        correct: 'Long-term weather patterns change',
        explanation: 'Climate change refers to significant long-term changes in temperature and weather patterns.',
        difficulty: 'easy'
      },
      {
        id: 'g12_egeo_easy_4',
        question: 'What is desertification?',
        options: ['Creating new deserts', 'Land degradation in dry areas', 'Urban development', 'Natural process'],
        correct: 'Land degradation in dry areas',
        explanation: 'Desertification is land degradation in arid, semi-arid, and dry sub-humid areas.',
        difficulty: 'easy'
      },
      {
        id: 'g12_egeo_easy_5',
        question: 'What are renewable resources?',
        options: ['Resources that cannot be replaced', 'Resources naturally replenished', 'Artificial resources', 'Expensive resources'],
        correct: 'Resources naturally replenished',
        explanation: 'Renewable resources can be naturally replenished in a human timeframe.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_egeo_med_1',
        question: 'What is an ecological footprint?',
        options: ['Animal tracks', 'Impact of human activities', 'Forest boundary', 'Plant species'],
        correct: 'Impact of human activities',
        explanation: 'Ecological footprint measures human demand on nature and ecological systems.',
        difficulty: 'medium'
      },
      {
        id: 'g12_egeo_med_2',
        question: 'What is biodiversity?',
        options: ['Single species study', 'Variety of life forms', 'Plant cultivation', 'Wildlife management'],
        correct: 'Variety of life forms',
        explanation: 'Biodiversity refers to the variety of plant and animal life in a particular habitat.',
        difficulty: 'medium'
      },
      {
        id: 'g12_egeo_med_3',
        question: 'What is the greenhouse effect?',
        options: ['Growing plants indoors', 'Warming effect of atmospheric gases', 'House painting technique', 'Agricultural method'],
        correct: 'Warming effect of atmospheric gases',
        explanation: 'The greenhouse effect is the warming of Earth due to certain gases trapping heat.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_egeo_hard_1',
        question: 'How does the IPAT equation relate to environmental impact?',
        options: ['Not related', 'Impact = Population × Affluence × Technology', 'Measures biodiversity only', 'Predicts weather'],
        correct: 'Impact = Population × Affluence × Technology',
        explanation: 'The IPAT equation expresses that environmental impact is the product of population, affluence, and technology.',
        difficulty: 'hard'
      },
      {
        id: 'g12_egeo_hard_2',
        question: 'What is the relationship between environmental Kuznets curve and economic development?',
        options: ['No relationship', 'Environmental degradation first increases then decreases with economic growth', 'Only applies to certain regions', 'Only measures water pollution'],
        correct: 'Environmental degradation first increases then decreases with economic growth',
        explanation: 'The curve suggests environmental degradation increases in early stages of development but may decrease as economies mature.',
        difficulty: 'hard'
      }
    ]
  }
];
