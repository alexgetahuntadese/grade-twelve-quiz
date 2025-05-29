
import { Chapter } from '../types';

export const geographyChapters: Chapter[] = [
  {
    id: 'physical_geography',
    name: 'Physical Geography',
    description: 'Study of Earth\'s physical features and processes',
    questions: [
      // Easy Questions
      {
        id: 'geo_phys_easy_1',
        question: 'What is the outermost layer of the Earth called?',
        options: ['Crust', 'Mantle', 'Core', 'Lithosphere'],
        correct: 'Crust',
        explanation: 'The crust is the thin, outermost solid layer of the Earth.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_2',
        question: 'Which type of rock is formed by cooling and solidification of magma?',
        options: ['Igneous', 'Sedimentary', 'Metamorphic', 'Volcanic'],
        correct: 'Igneous',
        explanation: 'Igneous rocks form when magma or lava cools and solidifies.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_3',
        question: 'What is the process by which water changes from liquid to gas?',
        options: ['Evaporation', 'Condensation', 'Precipitation', 'Sublimation'],
        correct: 'Evaporation',
        explanation: 'Evaporation is the process where liquid water changes to water vapor.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_4',
        question: 'Which ocean is the largest?',
        options: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
        correct: 'Pacific Ocean',
        explanation: 'The Pacific Ocean covers about one-third of Earth\'s surface.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_5',
        question: 'What causes tides in the ocean?',
        options: ['Moon\'s gravity', 'Wind', 'Earth\'s rotation', 'Temperature changes'],
        correct: 'Moon\'s gravity',
        explanation: 'The gravitational pull of the Moon causes ocean tides.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_6',
        question: 'What is the highest mountain in the world?',
        options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
        correct: 'Mount Everest',
        explanation: 'Mount Everest stands at 8,848.86 meters above sea level.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_7',
        question: 'Which continent has the most countries?',
        options: ['Africa', 'Asia', 'Europe', 'South America'],
        correct: 'Africa',
        explanation: 'Africa has 54 recognized sovereign countries.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_8',
        question: 'What is the imaginary line that divides the Earth into Northern and Southern hemispheres?',
        options: ['Equator', 'Prime Meridian', 'Tropic of Cancer', 'Tropic of Capricorn'],
        correct: 'Equator',
        explanation: 'The Equator is located at 0° latitude and divides Earth into hemispheres.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_9',
        question: 'What type of climate is characterized by hot, dry summers and mild, wet winters?',
        options: ['Mediterranean', 'Tropical', 'Desert', 'Continental'],
        correct: 'Mediterranean',
        explanation: 'Mediterranean climate has dry summers and wet winters.',
        difficulty: 'easy'
      },
      {
        id: 'geo_phys_easy_10',
        question: 'Which gas makes up about 78% of Earth\'s atmosphere?',
        options: ['Nitrogen', 'Oxygen', 'Carbon dioxide', 'Argon'],
        correct: 'Nitrogen',
        explanation: 'Nitrogen comprises approximately 78% of Earth\'s atmosphere.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'geo_phys_med_1',
        question: 'What is the process called when one tectonic plate slides under another?',
        options: ['Subduction', 'Divergence', 'Transform', 'Convergence'],
        correct: 'Subduction',
        explanation: 'Subduction occurs when an oceanic plate slides beneath a continental plate.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_2',
        question: 'Which type of weathering involves the chemical breakdown of rocks?',
        options: ['Chemical weathering', 'Physical weathering', 'Biological weathering', 'Mechanical weathering'],
        correct: 'Chemical weathering',
        explanation: 'Chemical weathering involves the alteration of rock minerals through chemical reactions.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_3',
        question: 'What is the name of the supercontinent that existed 300 million years ago?',
        options: ['Gondwana', 'Laurasia', 'Pangaea', 'Rodinia'],
        correct: 'Pangaea',
        explanation: 'Pangaea was the supercontinent that existed during the late Paleozoic era.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_4',
        question: 'Which layer of the atmosphere contains the ozone layer?',
        options: ['Troposphere', 'Stratosphere', 'Mesosphere', 'Thermosphere'],
        correct: 'Stratosphere',
        explanation: 'The ozone layer is located in the stratosphere, about 10-30 km above Earth.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_5',
        question: 'What type of volcano is characterized by gentle slopes and fluid lava flows?',
        options: ['Shield volcano', 'Stratovolcano', 'Cinder cone', 'Caldera'],
        correct: 'Shield volcano',
        explanation: 'Shield volcanoes have broad, gentle slopes formed by fluid basaltic lava flows.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_6',
        question: 'Which ocean current brings warm water to Western Europe?',
        options: ['California Current', 'Gulf Stream', 'Kuroshio Current', 'Benguela Current'],
        correct: 'Gulf Stream',
        explanation: 'The Gulf Stream carries warm water from the Gulf of Mexico to Western Europe.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_7',
        question: 'What is the term for the boundary between two air masses?',
        options: ['Isobar', 'Front', 'Isotherm', 'Ridge'],
        correct: 'Front',
        explanation: 'A front is the boundary between two different air masses with different temperatures.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_8',
        question: 'Which type of erosion is caused by wind?',
        options: ['Hydraulic erosion', 'Aeolian erosion', 'Glacial erosion', 'Chemical erosion'],
        correct: 'Aeolian erosion',
        explanation: 'Aeolian erosion is the process of erosion caused by wind action.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_9',
        question: 'What is the deepest part of the ocean?',
        options: ['Mariana Trench', 'Puerto Rico Trench', 'Japan Trench', 'Peru-Chile Trench'],
        correct: 'Mariana Trench',
        explanation: 'The Mariana Trench in the Pacific Ocean is the deepest part of Earth\'s oceans.',
        difficulty: 'medium'
      },
      {
        id: 'geo_phys_med_10',
        question: 'Which type of precipitation forms when raindrops freeze before reaching the ground?',
        options: ['Snow', 'Sleet', 'Hail', 'Freezing rain'],
        correct: 'Sleet',
        explanation: 'Sleet forms when raindrops freeze into ice pellets before reaching the ground.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'geo_phys_hard_1',
        question: 'What is the approximate thickness of the continental crust?',
        options: ['5-10 km', '20-70 km', '100-200 km', '300-400 km'],
        correct: '20-70 km',
        explanation: 'Continental crust typically ranges from 20-70 km thick, averaging about 35 km.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_2',
        question: 'Which type of metamorphism occurs due to high pressure and temperature over large areas?',
        options: ['Contact metamorphism', 'Regional metamorphism', 'Dynamic metamorphism', 'Hydrothermal metamorphism'],
        correct: 'Regional metamorphism',
        explanation: 'Regional metamorphism affects large areas due to tectonic forces and deep burial.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_3',
        question: 'What is the Coriolis effect?',
        options: ['Ocean current deflection', 'Apparent deflection of moving objects due to Earth\'s rotation', 'Atmospheric pressure change', 'Magnetic field variation'],
        correct: 'Apparent deflection of moving objects due to Earth\'s rotation',
        explanation: 'The Coriolis effect causes moving objects to be deflected to the right in the Northern Hemisphere.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_4',
        question: 'Which mineral is the most abundant in the Earth\'s mantle?',
        options: ['Quartz', 'Feldspar', 'Olivine', 'Pyroxene'],
        correct: 'Olivine',
        explanation: 'Olivine is the most abundant mineral in the upper mantle, forming peridotite rocks.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_5',
        question: 'What is the term for the study of ancient climates?',
        options: ['Paleontology', 'Paleoclimatology', 'Paleogeography', 'Paleobotany'],
        correct: 'Paleoclimatology',
        explanation: 'Paleoclimatology is the study of past climates using geological and biological evidence.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_6',
        question: 'Which seismic wave travels fastest through the Earth?',
        options: ['P-waves', 'S-waves', 'Love waves', 'Rayleigh waves'],
        correct: 'P-waves',
        explanation: 'P-waves (primary waves) are the fastest seismic waves and arrive first at recording stations.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_7',
        question: 'What is the term for the zone where oceanic plates are created?',
        options: ['Transform boundary', 'Convergent boundary', 'Divergent boundary', 'Subduction zone'],
        correct: 'Divergent boundary',
        explanation: 'Divergent boundaries, like mid-ocean ridges, are where new oceanic crust is formed.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_8',
        question: 'Which atmospheric circulation pattern affects weather in the Pacific Ocean?',
        options: ['North Atlantic Oscillation', 'El Niño-Southern Oscillation', 'Arctic Oscillation', 'Indian Ocean Dipole'],
        correct: 'El Niño-Southern Oscillation',
        explanation: 'ENSO is a major climate pattern affecting weather patterns across the Pacific and globally.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_9',
        question: 'What is the angle of Earth\'s axial tilt?',
        options: ['21.5°', '23.5°', '25.5°', '27.5°'],
        correct: '23.5°',
        explanation: 'Earth\'s axis is tilted at approximately 23.5° from vertical, causing seasons.',
        difficulty: 'hard'
      },
      {
        id: 'geo_phys_hard_10',
        question: 'Which type of drainage pattern develops on uniformly resistant bedrock?',
        options: ['Dendritic', 'Radial', 'Rectangular', 'Centripetal'],
        correct: 'Dendritic',
        explanation: 'Dendritic drainage patterns resemble tree branches and form on uniform, horizontal rocks.',
        difficulty: 'hard'
      }
    ]
  }
];
