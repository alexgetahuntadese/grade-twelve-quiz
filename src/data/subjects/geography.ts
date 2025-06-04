import { Chapter } from '../types';

export const geographyChapters: Chapter[] = [
  {
    id: 'physical_geography',
    name: 'Physical Geography',
    description: 'Study of Earth\'s physical features and processes',
    questions: [
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
  },

  // Grade 11 Chapter
  {
    id: 'grade11_human_geography',
    name: 'Grade 11: Human Geography',
    description: 'Study of human settlements, populations, and interactions with the environment',
    questions: [
      // Easy Questions
      {
        id: 'g11_geo_easy_1',
        question: 'What is human geography?',
        options: ['Study of landforms', 'Study of human societies and their relationship with the environment', 'Study of weather', 'Study of rocks'],
        correct: 'Study of human societies and their relationship with the environment',
        explanation: 'Human geography examines human societies and how they interact with the environment.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_2',
        question: 'What is population density?',
        options: ['Total population size', 'Number of people per unit area', 'Birth rate of a country', 'Number of cities in a country'],
        correct: 'Number of people per unit area',
        explanation: 'Population density measures the number of people per unit area, usually per square kilometer.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_3',
        question: 'What is urbanization?',
        options: ['Rural development', 'Increasing percentage of people living in cities', 'Growing food in cities', 'Urban planning'],
        correct: 'Increasing percentage of people living in cities',
        explanation: 'Urbanization is the process of increasing population concentration in cities.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_4',
        question: 'What is a megacity?',
        options: ['Any capital city', 'Urban area with more than 10 million inhabitants', 'Industrial city', 'Historical city'],
        correct: 'Urban area with more than 10 million inhabitants',
        explanation: 'A megacity is defined as an urban area with more than 10 million inhabitants.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_5',
        question: 'What is migration?',
        options: ['Daily commute', 'Movement of people from one place to another', 'Population growth', 'Urban planning'],
        correct: 'Movement of people from one place to another',
        explanation: 'Migration is the movement of people from one place to another to settle.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_6',
        question: 'What is the demographic transition model?',
        options: ['Population control policy', 'Model showing population changes as societies develop', 'Migration pattern', 'Birth control method'],
        correct: 'Model showing population changes as societies develop',
        explanation: 'The demographic transition model shows how population changes as societies develop economically.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_7',
        question: 'What is a settlement?',
        options: ['Legal agreement', 'Place where people establish a community', 'Type of landform', 'Economic system'],
        correct: 'Place where people establish a community',
        explanation: 'A settlement is a place where people establish a community.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_8',
        question: 'What is the difference between rural and urban areas?',
        options: ['No difference', 'Rural areas are less densely populated than urban areas', 'Only economic differences', 'Only size differences'],
        correct: 'Rural areas are less densely populated than urban areas',
        explanation: 'Rural areas have lower population density compared to urban areas.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_9',
        question: 'What is cultural geography?',
        options: ['Art history', 'Study of cultural aspects of human societies in relation to space', 'Music study', 'Literature analysis'],
        correct: 'Study of cultural aspects of human societies in relation to space',
        explanation: 'Cultural geography studies how cultural aspects relate to geographic space.',
        difficulty: 'easy'
      },
      {
        id: 'g11_geo_easy_10',
        question: 'What is a population pyramid?',
        options: ['Ancient structure', 'Graphical representation of age and sex distribution', 'Economic model', 'Political system'],
        correct: 'Graphical representation of age and sex distribution',
        explanation: 'A population pyramid graphically shows age and sex distribution of a population.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_geo_med_1',
        question: 'What is the difference between push and pull factors in migration?',
        options: ['No difference', 'Push factors drive people away, pull factors attract people', 'Different government policies', 'Different economic systems'],
        correct: 'Push factors drive people away, pull factors attract people',
        explanation: 'Push factors drive people from their origin, while pull factors attract them to destinations.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_2',
        question: 'What is counterurbanization?',
        options: ['Urban growth', 'Migration from urban to rural areas', 'Industrial development', 'Agricultural decline'],
        correct: 'Migration from urban to rural areas',
        explanation: 'Counterurbanization is migration from urban areas to rural areas.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_3',
        question: 'What is a central place theory?',
        options: ['Political system', 'Model explaining the distribution and hierarchy of settlements', 'Religious concept', 'Economic policy'],
        correct: 'Model explaining the distribution and hierarchy of settlements',
        explanation: 'Central place theory explains the size, distribution, and hierarchy of settlements.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_4',
        question: 'What is gentrification?',
        options: ['Urban decay', 'Process of changing urban neighborhoods through affluent influx', 'Slum development', 'Rural development'],
        correct: 'Process of changing urban neighborhoods through affluent influx',
        explanation: 'Gentrification is the transformation of urban neighborhoods through an influx of more affluent residents.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_5',
        question: 'What is a functional region?',
        options: ['Political boundary', 'Area organized around a central node', 'Natural region', 'Historical territory'],
        correct: 'Area organized around a central node',
        explanation: 'A functional region is an area organized around a central node or focal point.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_6',
        question: 'What is urban sprawl?',
        options: ['City center development', 'Uncontrolled expansion of urban areas', 'Population decline', 'Public transportation system'],
        correct: 'Uncontrolled expansion of urban areas',
        explanation: 'Urban sprawl is the uncontrolled expansion of urban areas into surrounding regions.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_7',
        question: 'What is a primate city?',
        options: ['Small town', 'City that dominates a country economically and culturally', 'Rural area', 'Ancient settlement'],
        correct: 'City that dominates a country economically and culturally',
        explanation: 'A primate city is disproportionately larger and more significant than other cities in a country.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_8',
        question: 'What is the difference between formal and functional regions?',
        options: ['No difference', 'Formal regions have defined boundaries, functional regions are based on connections', 'Only size difference', 'Only location difference'],
        correct: 'Formal regions have defined boundaries, functional regions are based on connections',
        explanation: 'Formal regions have defined boundaries, while functional regions are defined by connections and interactions.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_9',
        question: 'What is the dependency ratio?',
        options: ['Economic measure', 'Ratio of dependent population to working population', 'Immigration rate', 'Poverty measure'],
        correct: 'Ratio of dependent population to working population',
        explanation: 'The dependency ratio measures the number of dependents to working-age population.',
        difficulty: 'medium'
      },
      {
        id: 'g11_geo_med_10',
        question: 'What is the difference between overpopulation and population density?',
        options: ['Same concept', 'Overpopulation relates resources to population, density is people per area', 'Only statistical difference', 'Only political difference'],
        correct: 'Overpopulation relates resources to population, density is people per area',
        explanation: 'Overpopulation refers to exceeding resource capacity, while density is simply the number of people per area.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_geo_hard_1',
        question: 'How does Ravenstein\'s "Laws of Migration" explain migration patterns?',
        options: ['Legal regulations', 'Set of empirical observations about distance, gender, and economic motives', 'Religious guidelines', 'Random movement'],
        correct: 'Set of empirical observations about distance, gender, and economic motives',
        explanation: 'Ravenstein\'s laws are empirical observations about migration patterns including distance decay and economic motives.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_2',
        question: 'What is Christaller\'s Central Place Theory based on?',
        options: ['Random distribution', 'Hexagonal market areas and hierarchical organization', 'Political boundaries', 'Physical geography'],
        correct: 'Hexagonal market areas and hierarchical organization',
        explanation: 'Christaller\'s theory proposes settlements are distributed in hexagonal patterns with hierarchical service provision.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_3',
        question: 'What is the Burgess concentric zone model?',
        options: ['Economic policy', 'Theory of urban land use in concentric rings', 'Political system', 'Agricultural pattern'],
        correct: 'Theory of urban land use in concentric rings',
        explanation: 'The Burgess model describes urban areas as organized in concentric zones radiating from the center.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_4',
        question: 'What is the neo-Malthusian perspective on population?',
        options: ['Population growth is always positive', 'Population growth exceeds resource capacity leading to catastrophe', 'Population has no effect on resources', 'Only focused on economics'],
        correct: 'Population growth exceeds resource capacity leading to catastrophe',
        explanation: 'Neo-Malthusians believe population growth will outpace resources leading to catastrophic consequences.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_5',
        question: 'What is time-space compression in human geography?',
        options: ['Physical phenomenon', 'Reduction in time and cost to connect distant locations', 'Ancient concept', 'Art movement'],
        correct: 'Reduction in time and cost to connect distant locations',
        explanation: 'Time-space compression refers to how technological changes reduce the constraints of time and space in human interaction.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_6',
        question: 'What is the difference between perceptual regions and vernacular regions?',
        options: ['Same concept', 'Perceptual is individual, vernacular is shared cultural understanding', 'Only academic difference', 'Only scale difference'],
        correct: 'Perceptual is individual, vernacular is shared cultural understanding',
        explanation: 'Perceptual regions are individual mental maps, while vernacular regions are culturally shared spatial conceptions.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_7',
        question: 'What is the role of bid-rent theory in urban geography?',
        options: ['Housing policy', 'Explains land use patterns based on land price and willingness to pay', 'Political concept', 'Social program'],
        correct: 'Explains land use patterns based on land price and willingness to pay',
        explanation: 'Bid-rent theory explains how different land users compete for locations based on their ability to pay rent.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_8',
        question: 'How does the gravity model apply to human geography?',
        options: ['Physical force only', 'Predicts interaction between places based on population and distance', 'Astronomical concept', 'Engineering principle'],
        correct: 'Predicts interaction between places based on population and distance',
        explanation: 'The gravity model predicts spatial interaction between places based on their populations and the distance between them.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_9',
        question: 'What is environmental determinism?',
        options: ['Conservation policy', 'Theory that physical environment determines culture and society', 'Economic model', 'Political system'],
        correct: 'Theory that physical environment determines culture and society',
        explanation: 'Environmental determinism is the theory that the physical environment determines human culture and social development.',
        difficulty: 'hard'
      },
      {
        id: 'g11_geo_hard_10',
        question: 'What is the difference between connectivity and accessibility in transport geography?',
        options: ['Same concept', 'Connectivity is network linkage, accessibility is ease of reaching destinations', 'Only technical difference', 'Only scale difference'],
        correct: 'Connectivity is network linkage, accessibility is ease of reaching destinations',
        explanation: 'Connectivity refers to how places are linked in a network, while accessibility refers to the ease of reaching destinations.',
        difficulty: 'hard'
      }
    ]
  }
];
