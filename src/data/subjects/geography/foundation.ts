import { Chapter } from '../../types';

export const foundationGeographyChapters: Chapter[] = [
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
  }
];
