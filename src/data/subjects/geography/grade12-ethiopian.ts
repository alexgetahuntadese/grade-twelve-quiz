import { Chapter } from '../../types';

export const grade12EthiopianGeographyChapters: Chapter[] = [
  {
    id: 'grade12_plate_tectonics',
    name: 'Grade 12: Major Geological Processes Associated with Plate Tectonics',
    description: 'Ethiopian curriculum - Plate tectonics and geological processes',
    questions: [
      // Easy Questions (10 total)
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
      {
        id: 'g12_plate_easy_4',
        question: 'What is the lithosphere?',
        options: ['Earth\'s core', 'Earth\'s outer rigid layer', 'Earth\'s atmosphere', 'Earth\'s magnetic field'],
        correct: 'Earth\'s outer rigid layer',
        explanation: 'The lithosphere is Earth\'s rigid outer layer consisting of the crust and upper mantle.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_5',
        question: 'Where do most earthquakes occur?',
        options: ['Plate boundaries', 'Ocean centers', 'Desert regions', 'Forest areas'],
        correct: 'Plate boundaries',
        explanation: 'Most earthquakes occur along plate boundaries where tectonic plates interact.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_6',
        question: 'What is a volcano?',
        options: ['Underground cave', 'Opening where magma reaches surface', 'Mountain peak', 'Ocean trench'],
        correct: 'Opening where magma reaches surface',
        explanation: 'A volcano is an opening in Earth\'s crust where magma, gases, and ash can escape.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_7',
        question: 'What causes tectonic plates to move?',
        options: ['Wind', 'Heat from Earth\'s interior', 'Ocean currents', 'Gravity only'],
        correct: 'Heat from Earth\'s interior',
        explanation: 'Heat from Earth\'s interior drives convection currents that move tectonic plates.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_8',
        question: 'What is magma?',
        options: ['Solid rock', 'Molten rock beneath Earth\'s surface', 'Water vapor', 'Atmospheric gas'],
        correct: 'Molten rock beneath Earth\'s surface',
        explanation: 'Magma is molten rock material beneath Earth\'s surface.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_9',
        question: 'Where are mid-ocean ridges found?',
        options: ['On continents', 'Ocean floors', 'Mountain tops', 'Desert valleys'],
        correct: 'Ocean floors',
        explanation: 'Mid-ocean ridges are underwater mountain ranges on ocean floors where new crust forms.',
        difficulty: 'easy'
      },
      {
        id: 'g12_plate_easy_10',
        question: 'What is continental drift?',
        options: ['Ocean movement', 'Movement of continents over time', 'Wind patterns', 'Climate change'],
        correct: 'Movement of continents over time',
        explanation: 'Continental drift is the theory that continents have moved over geological time.',
        difficulty: 'easy'
      },

      // Medium Questions (10 total)
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
      {
        id: 'g12_plate_med_3',
        question: 'What is subduction?',
        options: ['Plate separation', 'One plate sliding under another', 'Mountain formation', 'Ocean creation'],
        correct: 'One plate sliding under another',
        explanation: 'Subduction occurs when a denser oceanic plate slides beneath a lighter continental plate.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_4',
        question: 'What type of boundary creates transform faults?',
        options: ['Convergent', 'Divergent', 'Transform', 'Passive'],
        correct: 'Transform',
        explanation: 'Transform boundaries create transform faults where plates slide past each other.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_5',
        question: 'What geological feature forms at divergent boundaries?',
        options: ['Mountain ranges', 'Rift valleys and mid-ocean ridges', 'Deep trenches', 'Volcanic islands'],
        correct: 'Rift valleys and mid-ocean ridges',
        explanation: 'Divergent boundaries create rift valleys on land and mid-ocean ridges in oceans.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_6',
        question: 'What is the asthenosphere?',
        options: ['Earth\'s crust', 'Partially molten layer below lithosphere', 'Earth\'s core', 'Atmosphere layer'],
        correct: 'Partially molten layer below lithosphere',
        explanation: 'The asthenosphere is a partially molten layer beneath the lithosphere that allows plate movement.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_7',
        question: 'Which type of volcano is most explosive?',
        options: ['Shield volcano', 'Stratovolcano', 'Cinder cone', 'Fissure volcano'],
        correct: 'Stratovolcano',
        explanation: 'Stratovolcanoes are composite volcanoes that tend to be the most explosive.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_8',
        question: 'What causes ocean trenches to form?',
        options: ['Erosion', 'Subduction of oceanic plates', 'Volcanic activity', 'Sedimentation'],
        correct: 'Subduction of oceanic plates',
        explanation: 'Ocean trenches form where oceanic plates subduct beneath other plates.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_9',
        question: 'What is seafloor spreading evidence for?',
        options: ['Ocean currents', 'Plate tectonics theory', 'Climate change', 'Ocean pollution'],
        correct: 'Plate tectonics theory',
        explanation: 'Seafloor spreading provides strong evidence supporting the plate tectonics theory.',
        difficulty: 'medium'
      },
      {
        id: 'g12_plate_med_10',
        question: 'What type of stress creates normal faults?',
        options: ['Compression', 'Tension', 'Shearing', 'Rotation'],
        correct: 'Tension',
        explanation: 'Normal faults form when tensional stress pulls the crust apart.',
        difficulty: 'medium'
      },

      // Hard Questions (10 total)
      {
        id: 'g12_plate_hard_1',
        question: 'What drives plate tectonic movement?',
        options: ['Wind patterns', 'Convection currents in the mantle', 'Ocean currents', 'Gravitational pull only'],
        correct: 'Convection currents in the mantle',
        explanation: 'Convection currents in the mantle, driven by heat from Earth\'s core, drive plate movement.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_2',
        question: 'What is the Wilson Cycle?',
        options: ['Weather pattern', 'Complete cycle of ocean basin formation and closure', 'Volcanic eruption cycle', 'Earthquake frequency'],
        correct: 'Complete cycle of ocean basin formation and closure',
        explanation: 'The Wilson Cycle describes the complete process of ocean basin opening and closing.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_3',
        question: 'What evidence supports continental drift theory?',
        options: ['Ocean depth only', 'Fossil distribution, rock types, glacial evidence', 'Weather patterns', 'Modern GPS data only'],
        correct: 'Fossil distribution, rock types, glacial evidence',
        explanation: 'Multiple lines of evidence including fossils, rocks, and glacial deposits support continental drift.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_4',
        question: 'What is the significance of magnetic striping on ocean floors?',
        options: ['Shows ocean temperature', 'Records Earth\'s magnetic field reversals', 'Indicates water depth', 'Shows current patterns'],
        correct: 'Records Earth\'s magnetic field reversals',
        explanation: 'Magnetic striping records Earth\'s magnetic field reversals and supports seafloor spreading.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_5',
        question: 'What is a hotspot?',
        options: ['Warm ocean current', 'Stationary mantle plume creating volcanoes', 'Desert region', 'Earthquake zone'],
        correct: 'Stationary mantle plume creating volcanoes',
        explanation: 'Hotspots are stationary mantle plumes that create volcanic activity as plates move over them.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_6',
        question: 'What is isostasy?',
        options: ['Equal temperature', 'Gravitational equilibrium of Earth\'s crust', 'Wind balance', 'Ocean circulation'],
        correct: 'Gravitational equilibrium of Earth\'s crust',
        explanation: 'Isostasy is the gravitational equilibrium between Earth\'s crust and mantle.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_7',
        question: 'What causes metamorphic core complexes to form?',
        options: ['Erosion only', 'Extensional tectonics and exhumation', 'Volcanic activity', 'Sedimentation'],
        correct: 'Extensional tectonics and exhumation',
        explanation: 'Metamorphic core complexes form through extensional tectonics and deep rock exhumation.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_8',
        question: 'What is the difference between P-waves and S-waves?',
        options: ['Speed only', 'P-waves are compressional, S-waves are shear waves', 'Direction only', 'No difference'],
        correct: 'P-waves are compressional, S-waves are shear waves',
        explanation: 'P-waves are primary compressional waves, while S-waves are secondary shear waves.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_9',
        question: 'What is the Mohorovičić discontinuity?',
        options: ['Ocean current', 'Boundary between crust and mantle', 'Atmospheric layer', 'Magnetic field line'],
        correct: 'Boundary between crust and mantle',
        explanation: 'The Moho is the discontinuity marking the boundary between Earth\'s crust and mantle.',
        difficulty: 'hard'
      },
      {
        id: 'g12_plate_hard_10',
        question: 'What is back-arc spreading?',
        options: ['Ocean retreat', 'Seafloor spreading behind volcanic arc', 'Mountain erosion', 'Continental drift'],
        correct: 'Seafloor spreading behind volcanic arc',
        explanation: 'Back-arc spreading occurs behind volcanic arcs in subduction zones.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_climate_change',
    name: 'Grade 12: Climate Change',
    description: 'Ethiopian curriculum - Global climate change and impacts',
    questions: [
      // Easy Questions (10 total)
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
      {
        id: 'g12_climate_easy_4',
        question: 'What is the greenhouse effect?',
        options: ['Growing plants in greenhouses', 'Trapping of heat in Earth\'s atmosphere', 'Solar energy production', 'Ocean warming'],
        correct: 'Trapping of heat in Earth\'s atmosphere',
        explanation: 'The greenhouse effect is the trapping of heat in Earth\'s atmosphere by greenhouse gases.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_5',
        question: 'Which human activity produces the most CO2?',
        options: ['Breathing', 'Burning fossil fuels', 'Agriculture only', 'Deforestation only'],
        correct: 'Burning fossil fuels',
        explanation: 'Burning fossil fuels for energy is the largest source of human CO2 emissions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_6',
        question: 'What happens to sea levels due to global warming?',
        options: ['They decrease', 'They rise', 'No change', 'They fluctuate randomly'],
        correct: 'They rise',
        explanation: 'Global warming causes sea levels to rise due to thermal expansion and ice melt.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_7',
        question: 'What is renewable energy?',
        options: ['Energy that runs out quickly', 'Energy that can be replenished naturally', 'Only solar energy', 'Fossil fuels'],
        correct: 'Energy that can be replenished naturally',
        explanation: 'Renewable energy comes from sources that can be naturally replenished.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_8',
        question: 'Which of these is a greenhouse gas?',
        options: ['Oxygen', 'Methane', 'Nitrogen', 'Argon'],
        correct: 'Methane',
        explanation: 'Methane is a potent greenhouse gas that traps heat in the atmosphere.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_9',
        question: 'What causes ice caps to melt?',
        options: ['Cold temperatures', 'Rising global temperatures', 'Ocean currents only', 'Wind patterns'],
        correct: 'Rising global temperatures',
        explanation: 'Rising global temperatures cause ice caps and glaciers to melt.',
        difficulty: 'easy'
      },
      {
        id: 'g12_climate_easy_10',
        question: 'What is weather vs climate?',
        options: ['Same thing', 'Weather is short-term, climate is long-term patterns', 'Weather is global, climate is local', 'No difference'],
        correct: 'Weather is short-term, climate is long-term patterns',
        explanation: 'Weather refers to short-term conditions, while climate refers to long-term patterns.',
        difficulty: 'easy'
      },

      // Medium Questions (10 total)
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
      {
        id: 'g12_climate_med_3',
        question: 'What is carbon sequestration?',
        options: ['Releasing carbon', 'Capturing and storing carbon dioxide', 'Burning carbon', 'Trading carbon'],
        correct: 'Capturing and storing carbon dioxide',
        explanation: 'Carbon sequestration involves capturing and storing CO2 to reduce atmospheric concentrations.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_4',
        question: 'What is the Paris Agreement?',
        options: ['Trade agreement', 'International climate change agreement', 'Peace treaty', 'Cultural agreement'],
        correct: 'International climate change agreement',
        explanation: 'The Paris Agreement is an international treaty on climate change mitigation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_5',
        question: 'What causes the albedo effect?',
        options: ['Ocean currents', 'Reflection of solar radiation by surfaces', 'Volcanic activity', 'Wind patterns'],
        correct: 'Reflection of solar radiation by surfaces',
        explanation: 'The albedo effect refers to the reflection of solar radiation by Earth\'s surfaces.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_6',
        question: 'What is climate mitigation?',
        options: ['Adapting to climate change', 'Reducing greenhouse gas emissions', 'Studying climate', 'Monitoring weather'],
        correct: 'Reducing greenhouse gas emissions',
        explanation: 'Climate mitigation involves reducing greenhouse gas emissions to limit climate change.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_7',
        question: 'How do forests help with climate change?',
        options: ['They produce CO2', 'They absorb CO2 and produce oxygen', 'They reflect sunlight only', 'They have no effect'],
        correct: 'They absorb CO2 and produce oxygen',
        explanation: 'Forests act as carbon sinks by absorbing CO2 and releasing oxygen.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_8',
        question: 'What is ocean acidification?',
        options: ['Ocean becoming more basic', 'Ocean becoming more acidic due to CO2 absorption', 'Ocean temperature rise', 'Ocean level rise'],
        correct: 'Ocean becoming more acidic due to CO2 absorption',
        explanation: 'Ocean acidification occurs when oceans absorb CO2, forming carbonic acid.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_9',
        question: 'What are extreme weather events?',
        options: ['Normal weather patterns', 'Severe weather conditions outside normal ranges', 'Daily weather changes', 'Seasonal variations'],
        correct: 'Severe weather conditions outside normal ranges',
        explanation: 'Extreme weather events are severe conditions that deviate significantly from normal patterns.',
        difficulty: 'medium'
      },
      {
        id: 'g12_climate_med_10',
        question: 'What is the carbon cycle?',
        options: ['Movement of carbon through Earth systems', 'Production of carbon', 'Destruction of carbon', 'Storage of carbon only'],
        correct: 'Movement of carbon through Earth systems',
        explanation: 'The carbon cycle describes how carbon moves through atmosphere, oceans, land, and living organisms.',
        difficulty: 'medium'
      },

      // Hard Questions (10 total)
      {
        id: 'g12_climate_hard_1',
        question: 'What is climate feedback?',
        options: ['Weather prediction', 'Process that amplifies or reduces climate change', 'Climate measurement', 'Seasonal variation'],
        correct: 'Process that amplifies or reduces climate change',
        explanation: 'Climate feedback is a process that either amplifies (positive) or reduces (negative) climate change.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_2',
        question: 'What is the ice-albedo feedback loop?',
        options: ['Ice formation process', 'Melting ice reduces reflection, causing more warming', 'Ice preservation method', 'Albedo measurement'],
        correct: 'Melting ice reduces reflection, causing more warming',
        explanation: 'As ice melts, less sunlight is reflected, leading to more absorption and further warming.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_3',
        question: 'What is radiative forcing?',
        options: ['Solar energy production', 'Change in energy balance due to factors affecting climate', 'Radiation therapy', 'Force of gravity'],
        correct: 'Change in energy balance due to factors affecting climate',
        explanation: 'Radiative forcing measures how factors influence Earth\'s energy balance.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_4',
        question: 'What is the thermohaline circulation?',
        options: ['Atmospheric circulation', 'Ocean circulation driven by temperature and salinity', 'Wind patterns', 'Solar radiation'],
        correct: 'Ocean circulation driven by temperature and salinity',
        explanation: 'Thermohaline circulation is global ocean circulation driven by density differences.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_5',
        question: 'What is climate sensitivity?',
        options: ['Weather prediction accuracy', 'Temperature response to CO2 doubling', 'Climate measurement precision', 'Seasonal variation'],
        correct: 'Temperature response to CO2 doubling',
        explanation: 'Climate sensitivity measures how much temperature increases with doubled CO2 concentrations.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_6',
        question: 'What is the Enhanced Greenhouse Effect?',
        options: ['Natural greenhouse effect', 'Intensified greenhouse effect due to human activities', 'Reduced greenhouse effect', 'Greenhouse gas removal'],
        correct: 'Intensified greenhouse effect due to human activities',
        explanation: 'The enhanced greenhouse effect is the intensification caused by increased greenhouse gases.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_7',
        question: 'What is permafrost thawing\'s climate impact?',
        options: ['Cooling effect', 'Releases stored carbon and methane', 'No impact', 'Absorbs more carbon'],
        correct: 'Releases stored carbon and methane',
        explanation: 'Thawing permafrost releases stored carbon and methane, accelerating climate change.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_8',
        question: 'What is geoengineering?',
        options: ['Natural climate processes', 'Deliberate intervention in climate system', 'Weather forecasting', 'Climate monitoring'],
        correct: 'Deliberate intervention in climate system',
        explanation: 'Geoengineering involves deliberate large-scale interventions in Earth\'s climate system.',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_9',
        question: 'What is the role of clouds in climate change?',
        options: ['Only cooling effect', 'Complex feedback with both warming and cooling effects', 'Only warming effect', 'No effect'],
        correct: 'Complex feedback with both warming and cooling effects',
        explanation: 'Clouds have complex effects, both reflecting sunlight (cooling) and trapping heat (warming).',
        difficulty: 'hard'
      },
      {
        id: 'g12_climate_hard_10',
        question: 'What is the Medieval Warm Period?',
        options: ['Recent warming', 'Historical warm period around 950-1250 CE', 'Future projection', 'Ice age period'],
        correct: 'Historical warm period around 950-1250 CE',
        explanation: 'The Medieval Warm Period was a time of warm climate in North Atlantic region.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_population_policies',
    name: 'Grade 12: Population Policies, Programs and the Environment',
    description: 'Ethiopian curriculum - Population policies and environmental relationships',
    questions: [
      // Easy Questions (10 total)
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
      {
        id: 'g12_pop_easy_3',
        question: 'What is birth rate?',
        options: ['Death rate', 'Number of births per 1000 people per year', 'Population size', 'Migration rate'],
        correct: 'Number of births per 1000 people per year',
        explanation: 'Birth rate is the number of live births per 1000 people in a population per year.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_4',
        question: 'What is population growth?',
        options: ['Population decrease', 'Increase in population size over time', 'Population stability', 'Population distribution'],
        correct: 'Increase in population size over time',
        explanation: 'Population growth refers to the increase in the number of people in a population over time.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_5',
        question: 'What is contraception?',
        options: ['Disease prevention', 'Methods to prevent pregnancy', 'Population counting', 'Economic planning'],
        correct: 'Methods to prevent pregnancy',
        explanation: 'Contraception refers to methods used to prevent pregnancy.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_6',
        question: 'What is infant mortality rate?',
        options: ['Adult death rate', 'Number of infant deaths per 1000 live births', 'Birth rate', 'Population growth rate'],
        correct: 'Number of infant deaths per 1000 live births',
        explanation: 'Infant mortality rate measures the number of deaths of infants under one year per 1000 live births.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_7',
        question: 'What is life expectancy?',
        options: ['Birth rate', 'Average number of years a person is expected to live', 'Death rate', 'Population size'],
        correct: 'Average number of years a person is expected to live',
        explanation: 'Life expectancy is the average number of years a person is expected to live at birth.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_8',
        question: 'What is population density?',
        options: ['Population growth', 'Number of people per unit area', 'Birth rate', 'Death rate'],
        correct: 'Number of people per unit area',
        explanation: 'Population density is the number of people living per unit area of land.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_9',
        question: 'What is maternal mortality?',
        options: ['Infant deaths', 'Deaths of women during pregnancy or childbirth', 'Male deaths', 'Elderly deaths'],
        correct: 'Deaths of women during pregnancy or childbirth',
        explanation: 'Maternal mortality refers to deaths of women during pregnancy, childbirth, or postpartum period.',
        difficulty: 'easy'
      },
      {
        id: 'g12_pop_easy_10',
        question: 'What is urbanization?',
        options: ['Rural development', 'Movement of people from rural to urban areas', 'Population decrease', 'Agricultural expansion'],
        correct: 'Movement of people from rural to urban areas',
        explanation: 'Urbanization is the process of population shift from rural to urban areas.',
        difficulty: 'easy'
      },

      // Medium Questions (10 total)
      {
        id: 'g12_pop_med_1',
        question: 'How does population growth affect the environment?',
        options: ['No effect', 'Increases resource consumption and waste', 'Only positive effects', 'Only affects urban areas'],
        correct: 'Increases resource consumption and waste',
        explanation: 'Population growth typically increases resource consumption and waste production, affecting the environment.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_2',
        question: 'What is the demographic transition model?',
        options: ['Population movement', 'Model showing population change stages', 'Economic model', 'Environmental model'],
        correct: 'Model showing population change stages',
        explanation: 'The demographic transition model shows how population changes as countries develop economically.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_3',
        question: 'What is replacement level fertility?',
        options: ['Zero fertility', 'About 2.1 children per woman', 'Maximum fertility', 'Minimum fertility'],
        correct: 'About 2.1 children per woman',
        explanation: 'Replacement level fertility is about 2.1 children per woman needed to maintain population size.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_4',
        question: 'What is population momentum?',
        options: ['Population speed', 'Continued growth due to age structure', 'Population decline', 'Migration patterns'],
        correct: 'Continued growth due to age structure',
        explanation: 'Population momentum is continued growth even after fertility rates decline due to age structure.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_5',
        question: 'What is carrying capacity?',
        options: ['Population size', 'Maximum population an environment can sustain', 'Birth rate', 'Death rate'],
        correct: 'Maximum population an environment can sustain',
        explanation: 'Carrying capacity is the maximum population size an environment can sustain indefinitely.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_6',
        question: 'What is natural increase rate?',
        options: ['Birth rate only', 'Birth rate minus death rate', 'Death rate only', 'Migration rate'],
        correct: 'Birth rate minus death rate',
        explanation: 'Natural increase rate is the difference between birth rate and death rate.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_7',
        question: 'What is age structure?',
        options: ['Average age', 'Distribution of population by age groups', 'Life expectancy', 'Birth rate'],
        correct: 'Distribution of population by age groups',
        explanation: 'Age structure shows how a population is distributed across different age groups.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_8',
        question: 'What is population pyramid?',
        options: ['Building shape', 'Graph showing age and sex distribution', 'Population count', 'Economic indicator'],
        correct: 'Graph showing age and sex distribution',
        explanation: 'A population pyramid is a graph showing the age and sex distribution of a population.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_9',
        question: 'What is dependency ratio?',
        options: ['Economic dependency', 'Ratio of dependents to working-age population', 'Birth dependency', 'Geographic dependency'],
        correct: 'Ratio of dependents to working-age population',
        explanation: 'Dependency ratio is the ratio of dependents (young and elderly) to working-age population.',
        difficulty: 'medium'
      },
      {
        id: 'g12_pop_med_10',
        question: 'What is total fertility rate?',
        options: ['Birth rate', 'Average children per woman in lifetime', 'Death rate', 'Population growth rate'],
        correct: 'Average children per woman in lifetime',
        explanation: 'Total fertility rate is the average number of children a woman would have in her lifetime.',
        difficulty: 'medium'
      },

      // Hard Questions (10 total)
      {
        id: 'g12_pop_hard_1',
        question: 'What is demographic dividend?',
        options: ['Population decline', 'Economic benefit from favorable age structure', 'Migration benefit', 'Educational benefit'],
        correct: 'Economic benefit from favorable age structure',
        explanation: 'Demographic dividend is the economic benefit that results from a favorable age structure of population.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_2',
        question: 'What is the Malthusian theory?',
        options: ['Economic theory', 'Population grows faster than food supply', 'Migration theory', 'Environmental theory'],
        correct: 'Population grows faster than food supply',
        explanation: 'Malthusian theory suggests population grows exponentially while food supply grows arithmetically.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_3',
        question: 'What is the epidemiological transition?',
        options: ['Population movement', 'Shift from infectious to chronic diseases', 'Economic transition', 'Environmental change'],
        correct: 'Shift from infectious to chronic diseases',
        explanation: 'Epidemiological transition is the shift from infectious diseases to chronic diseases as main causes of death.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_4',
        question: 'What is population aging?',
        options: ['Population growth', 'Increasing proportion of elderly in population', 'Population decline', 'Youth increase'],
        correct: 'Increasing proportion of elderly in population',
        explanation: 'Population aging refers to the increasing proportion of elderly people in the population.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_5',
        question: 'What is the second demographic transition?',
        options: ['First transition repeat', 'Below-replacement fertility and changing family structures', 'Economic transition', 'Migration transition'],
        correct: 'Below-replacement fertility and changing family structures',
        explanation: 'Second demographic transition involves below-replacement fertility and changing family structures.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_6',
        question: 'What is the concept of population implosion?',
        options: ['Population explosion', 'Rapid population decline', 'Population stability', 'Population growth'],
        correct: 'Rapid population decline',
        explanation: 'Population implosion refers to rapid population decline due to very low fertility rates.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_7',
        question: 'What is the Preston curve?',
        options: ['Population curve', 'Relationship between income and life expectancy', 'Birth rate curve', 'Migration curve'],
        correct: 'Relationship between income and life expectancy',
        explanation: 'The Preston curve shows the relationship between income per capita and life expectancy.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_8',
        question: 'What is pronatalist policy?',
        options: ['Population reduction', 'Policy encouraging higher birth rates', 'Migration policy', 'Education policy'],
        correct: 'Policy encouraging higher birth rates',
        explanation: 'Pronatalist policy encourages higher birth rates through incentives and support.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_9',
        question: 'What is antinatalist policy?',
        options: ['Population increase', 'Policy discouraging births', 'Migration encouragement', 'Economic growth'],
        correct: 'Policy discouraging births',
        explanation: 'Antinatalist policy aims to reduce birth rates through various measures.',
        difficulty: 'hard'
      },
      {
        id: 'g12_pop_hard_10',
        question: 'What is the youth bulge phenomenon?',
        options: ['Elderly increase', 'Large proportion of young people in population', 'Population decline', 'Adult increase'],
        correct: 'Large proportion of young people in population',
        explanation: 'Youth bulge occurs when a large proportion of the population consists of children and young adults.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_environmental_solutions',
    name: 'Grade 12: Solutions to Environmental and Sustainability Problems',
    description: 'Ethiopian curriculum - Environmental solutions and sustainable development',
    questions: [
      // Easy Questions (10 total)
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
      {
        id: 'g12_env_easy_3',
        question: 'What is recycling?',
        options: ['Throwing away waste', 'Converting waste into reusable materials', 'Burning waste', 'Burying waste'],
        correct: 'Converting waste into reusable materials',
        explanation: 'Recycling is the process of converting waste materials into new usable products.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_4',
        question: 'What is conservation?',
        options: ['Using more resources', 'Protecting and preserving natural resources', 'Destroying habitats', 'Ignoring environment'],
        correct: 'Protecting and preserving natural resources',
        explanation: 'Conservation involves protecting and preserving natural resources and environments.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_5',
        question: 'What is solar energy?',
        options: ['Energy from wind', 'Energy from the sun', 'Energy from water', 'Energy from oil'],
        correct: 'Energy from the sun',
        explanation: 'Solar energy is energy derived from the sun\'s radiation.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_6',
        question: 'What is biodiversity?',
        options: ['Single species', 'Variety of life on Earth', 'Human population', 'Urban development'],
        correct: 'Variety of life on Earth',
        explanation: 'Biodiversity refers to the variety of life on Earth at all levels.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_7',
        question: 'What is pollution?',
        options: ['Clean environment', 'Harmful substances in environment', 'Natural processes', 'Conservation efforts'],
        correct: 'Harmful substances in environment',
        explanation: 'Pollution is the presence of harmful substances in the environment.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_8',
        question: 'What is deforestation?',
        options: ['Planting trees', 'Cutting down forests', 'Forest protection', 'Tree growth'],
        correct: 'Cutting down forests',
        explanation: 'Deforestation is the clearing or cutting down of forests.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_9',
        question: 'What is reforestation?',
        options: ['Cutting trees', 'Replanting forests', 'Burning forests', 'Ignoring forests'],
        correct: 'Replanting forests',
        explanation: 'Reforestation is the process of replanting forests in areas where they were previously cleared.',
        difficulty: 'easy'
      },
      {
        id: 'g12_env_easy_10',
        question: 'What is wind energy?',
        options: ['Energy from sun', 'Energy from moving air', 'Energy from water', 'Energy from coal'],
        correct: 'Energy from moving air',
        explanation: 'Wind energy is energy generated from the movement of air.',
        difficulty: 'easy'
      },

      // Medium Questions (10 total)
      {
        id: 'g12_env_med_1',
        question: 'What are the three pillars of sustainability?',
        options: ['Land, water, air', 'Economic, environmental, social', 'Past, present, future', 'Local, national, global'],
        correct: 'Economic, environmental, social',
        explanation: 'The three pillars of sustainability are economic, environmental, and social sustainability.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_2',
        question: 'What is carbon footprint?',
        options: ['Foot size', 'Total greenhouse gas emissions from activities', 'Walking distance', 'Carbon trading'],
        correct: 'Total greenhouse gas emissions from activities',
        explanation: 'Carbon footprint is the total amount of greenhouse gases produced by human activities.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_3',
        question: 'What is green technology?',
        options: ['Green colored technology', 'Environmentally friendly technology', 'Plant technology', 'Agricultural technology'],
        correct: 'Environmentally friendly technology',
        explanation: 'Green technology refers to environmentally friendly and sustainable technology.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_4',
        question: 'What is ecosystem restoration?',
        options: ['Destroying ecosystems', 'Returning ecosystems to natural state', 'Building on ecosystems', 'Ignoring ecosystems'],
        correct: 'Returning ecosystems to natural state',
        explanation: 'Ecosystem restoration involves returning degraded ecosystems to their natural state.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_5',
        question: 'What is water conservation?',
        options: ['Using more water', 'Reducing water waste and preserving water', 'Polluting water', 'Ignoring water issues'],
        correct: 'Reducing water waste and preserving water',
        explanation: 'Water conservation involves reducing water waste and preserving water resources.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_6',
        question: 'What is sustainable agriculture?',
        options: ['Farming that destroys soil', 'Farming that maintains productivity and environmental health', 'No farming', 'Urban farming only'],
        correct: 'Farming that maintains productivity and environmental health',
        explanation: 'Sustainable agriculture maintains productivity while protecting environmental health.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_7',
        question: 'What is environmental impact assessment?',
        options: ['Ignoring environmental effects', 'Evaluating environmental effects of projects', 'Building without planning', 'Destroying environment'],
        correct: 'Evaluating environmental effects of projects',
        explanation: 'Environmental impact assessment evaluates the potential environmental effects of proposed projects.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_8',
        question: 'What is the precautionary principle?',
        options: ['Ignoring risks', 'Taking preventive action despite scientific uncertainty', 'Taking maximum risks', 'Avoiding all action'],
        correct: 'Taking preventive action despite scientific uncertainty',
        explanation: 'The precautionary principle advocates taking preventive action when facing potential environmental harm.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_9',
        question: 'What is environmental education?',
        options: ['Ignoring environment', 'Teaching about environmental issues and solutions', 'Destroying education', 'Only academic learning'],
        correct: 'Teaching about environmental issues and solutions',
        explanation: 'Environmental education teaches people about environmental issues and sustainable solutions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_env_med_10',
        question: 'What is green building?',
        options: ['Green colored building', 'Environmentally responsible construction', 'Building in forests', 'Destroying buildings'],
        correct: 'Environmentally responsible construction',
        explanation: 'Green building involves environmentally responsible and resource-efficient construction practices.',
        difficulty: 'medium'
      },

      // Hard Questions (10 total)
      {
        id: 'g12_env_hard_1',
        question: 'What is circular economy?',
        options: ['Round trading system', 'Economic model that eliminates waste through reuse', 'Circular trade routes', 'Economic cycles'],
        correct: 'Economic model that eliminates waste through reuse',
        explanation: 'Circular economy is an economic model that aims to eliminate waste through reuse, recycling, and regeneration.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_2',
        question: 'What is life cycle assessment?',
        options: ['Human life stages', 'Environmental impact analysis of product lifecycle', 'Economic analysis', 'Time management'],
        correct: 'Environmental impact analysis of product lifecycle',
        explanation: 'Life cycle assessment analyzes environmental impacts of a product throughout its entire lifecycle.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_3',
        question: 'What is ecological footprint?',
        options: ['Foot size', 'Amount of biologically productive land needed to support lifestyle', 'Walking distance', 'Animal tracks'],
        correct: 'Amount of biologically productive land needed to support lifestyle',
        explanation: 'Ecological footprint measures the biologically productive land needed to support a person\'s lifestyle.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_4',
        question: 'What is industrial ecology?',
        options: ['Factory biology', 'Study of industrial systems as ecosystems', 'Industrial pollution', 'Manufacturing only'],
        correct: 'Study of industrial systems as ecosystems',
        explanation: 'Industrial ecology studies industrial systems as ecosystems to minimize environmental impact.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_5',
        question: 'What is biomimicry?',
        options: ['Copying biology', 'Innovation inspired by nature', 'Animal behavior', 'Plant growing'],
        correct: 'Innovation inspired by nature',
        explanation: 'Biomimicry is innovation inspired by studying nature\'s best ideas and emulating these designs.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_6',
        question: 'What is adaptive management?',
        options: ['Fixed management', 'Learning-by-doing approach to management', 'No management', 'Random management'],
        correct: 'Learning-by-doing approach to management',
        explanation: 'Adaptive management is a learning-by-doing approach that adjusts practices based on outcomes.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_7',
        question: 'What is the tragedy of the commons?',
        options: ['Common benefits', 'Overuse of shared resources', 'Public property success', 'Community cooperation'],
        correct: 'Overuse of shared resources',
        explanation: 'The tragedy of the commons occurs when shared resources are overused because individuals act in self-interest.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_8',
        question: 'What is natural capital?',
        options: ['Money in nature', 'Natural resources providing economic value', 'Capital cities', 'Financial capital'],
        correct: 'Natural resources providing economic value',
        explanation: 'Natural capital refers to natural resources and ecosystem services that provide economic value.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_9',
        question: 'What is environmental justice?',
        options: ['Justice system', 'Fair treatment regardless of environmental conditions', 'Environmental law only', 'Court system'],
        correct: 'Fair treatment regardless of environmental conditions',
        explanation: 'Environmental justice ensures fair treatment of all people regardless of race, color, or income regarding environmental issues.',
        difficulty: 'hard'
      },
      {
        id: 'g12_env_hard_10',
        question: 'What is resilience thinking?',
        options: ['Rigid thinking', 'Ability of systems to maintain function despite change', 'Resistance to change', 'Fixed mindset'],
        correct: 'Ability of systems to maintain function despite change',
        explanation: 'Resilience thinking focuses on the ability of systems to maintain their essential function despite disturbance.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_economic_development',
    name: 'Grade 12: Challenges of Economic Development',
    description: 'Ethiopian curriculum - Economic development challenges and geography',
    questions: [
      // Easy Questions (10 total)
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
      {
        id: 'g12_econ_easy_3',
        question: 'What is GDP?',
        options: ['Government Development Program', 'Gross Domestic Product', 'Global Development Plan', 'General Development Policy'],
        correct: 'Gross Domestic Product',
        explanation: 'GDP stands for Gross Domestic Product, measuring the total value of goods and services produced.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_4',
        question: 'What is infrastructure?',
        options: ['Government structure', 'Basic physical systems of a country', 'Population structure', 'Economic theory'],
        correct: 'Basic physical systems of a country',
        explanation: 'Infrastructure refers to basic physical systems like roads, bridges, and utilities.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_5',
        question: 'What is unemployment?',
        options: ['Everyone working', 'People without jobs who are seeking work', 'Economic growth', 'Population increase'],
        correct: 'People without jobs who are seeking work',
        explanation: 'Unemployment refers to people who are without jobs but actively seeking employment.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_6',
        question: 'What is foreign aid?',
        options: ['Domestic help', 'Assistance from other countries', 'Local support', 'Self-help'],
        correct: 'Assistance from other countries',
        explanation: 'Foreign aid is assistance provided by one country to another for development purposes.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_7',
        question: 'What is trade?',
        options: ['Local production', 'Exchange of goods and services', 'Self-sufficiency', 'Isolation'],
        correct: 'Exchange of goods and services',
        explanation: 'Trade is the exchange of goods and services between countries or regions.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_8',
        question: 'What is education\'s role in development?',
        options: ['No role', 'Improves skills and productivity', 'Decreases productivity', 'Only cultural value'],
        correct: 'Improves skills and productivity',
        explanation: 'Education improves skills, knowledge, and productivity, contributing to economic development.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_9',
        question: 'What is healthcare\'s importance?',
        options: ['Not important', 'Keeps workforce healthy and productive', 'Only for rich people', 'Luxury service'],
        correct: 'Keeps workforce healthy and productive',
        explanation: 'Healthcare keeps the workforce healthy and productive, supporting economic development.',
        difficulty: 'easy'
      },
      {
        id: 'g12_econ_easy_10',
        question: 'What is technology\'s role in development?',
        options: ['Hinders development', 'Improves efficiency and productivity', 'No impact', 'Only for entertainment'],
        correct: 'Improves efficiency and productivity',
        explanation: 'Technology improves efficiency and productivity, driving economic development.',
        difficulty: 'easy'
      },

      // Medium Questions (10 total)
      {
        id: 'g12_econ_med_1',
        question: 'What factors influence economic development?',
        options: ['Geography only', 'Natural resources, human capital, technology, institutions', 'Population only', 'Climate only'],
        correct: 'Natural resources, human capital, technology, institutions',
        explanation: 'Economic development is influenced by natural resources, human capital, technology, and institutions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_2',
        question: 'What is human capital?',
        options: ['Money', 'Skills, knowledge, and experience of people', 'Physical capital', 'Natural resources'],
        correct: 'Skills, knowledge, and experience of people',
        explanation: 'Human capital refers to the skills, knowledge, and experience possessed by individuals.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_3',
        question: 'What is income inequality?',
        options: ['Equal income', 'Unequal distribution of income', 'High income', 'Low income'],
        correct: 'Unequal distribution of income',
        explanation: 'Income inequality refers to the unequal distribution of income among people in a society.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_4',
        question: 'What is the informal economy?',
        options: ['Formal businesses', 'Economic activities outside official regulation', 'Government sector', 'International trade'],
        correct: 'Economic activities outside official regulation',
        explanation: 'The informal economy includes economic activities that operate outside official regulation and taxation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_5',
        question: 'What is brain drain?',
        options: ['Mental illness', 'Migration of skilled workers to other countries', 'Education decline', 'Population growth'],
        correct: 'Migration of skilled workers to other countries',
        explanation: 'Brain drain is the emigration of highly skilled workers from their home countries.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_6',
        question: 'What is debt burden?',
        options: ['Having no debt', 'Heavy debt that hinders development', 'Small debt', 'Good debt'],
        correct: 'Heavy debt that hinders development',
        explanation: 'Debt burden refers to heavy debt obligations that can hinder a country\'s development.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_7',
        question: 'What is economic diversification?',
        options: ['Single industry focus', 'Expanding into various economic sectors', 'Reducing economy', 'Isolating economy'],
        correct: 'Expanding into various economic sectors',
        explanation: 'Economic diversification involves expanding the economy into various sectors to reduce risk.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_8',
        question: 'What is good governance?',
        options: ['No government', 'Effective, transparent, and accountable government', 'Corrupt government', 'Weak government'],
        correct: 'Effective, transparent, and accountable government',
        explanation: 'Good governance involves effective, transparent, and accountable government institutions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_9',
        question: 'What is microfinance?',
        options: ['Large loans', 'Small financial services for poor people', 'No financial services', 'Only savings'],
        correct: 'Small financial services for poor people',
        explanation: 'Microfinance provides small financial services to people without access to traditional banking.',
        difficulty: 'medium'
      },
      {
        id: 'g12_econ_med_10',
        question: 'What is the developmental state model?',
        options: ['No state role', 'State actively guides economic development', 'Market-only approach', 'Foreign-led development'],
        correct: 'State actively guides economic development',
        explanation: 'The developmental state model involves the state actively guiding and directing economic development.',
        difficulty: 'medium'
      },

      // Hard Questions (10 total)
      {
        id: 'g12_econ_hard_1',
        question: 'What is the resource curse?',
        options: ['Lack of resources', 'Negative economic effects of abundant natural resources', 'Resource depletion', 'Resource conservation'],
        correct: 'Negative economic effects of abundant natural resources',
        explanation: 'The resource curse refers to negative economic effects that can result from abundant natural resources.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_2',
        question: 'What is the poverty trap?',
        options: ['Escape from poverty', 'Self-reinforcing cycle that keeps people poor', 'Wealth accumulation', 'Economic growth'],
        correct: 'Self-reinforcing cycle that keeps people poor',
        explanation: 'A poverty trap is a self-reinforcing mechanism that causes poverty to persist.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_3',
        question: 'What is the middle-income trap?',
        options: ['High income achievement', 'Countries unable to transition to high-income status', 'Low income status', 'Income equality'],
        correct: 'Countries unable to transition to high-income status',
        explanation: 'The middle-income trap occurs when countries struggle to transition from middle to high-income status.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_4',
        question: 'What is institutional capacity?',
        options: ['Building capacity', 'Ability of institutions to perform effectively', 'Physical capacity', 'Individual capacity'],
        correct: 'Ability of institutions to perform effectively',
        explanation: 'Institutional capacity refers to the ability of institutions to effectively perform their functions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_5',
        question: 'What is structural transformation?',
        options: ['No change', 'Shift from agriculture to industry and services', 'Only agricultural development', 'Population change'],
        correct: 'Shift from agriculture to industry and services',
        explanation: 'Structural transformation involves the shift of economic activity from agriculture to industry and services.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_6',
        question: 'What is total factor productivity?',
        options: ['Single factor productivity', 'Efficiency in using all production factors', 'Labor productivity only', 'Capital productivity only'],
        correct: 'Efficiency in using all production factors',
        explanation: 'Total factor productivity measures the efficiency in using all factors of production together.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_7',
        question: 'What is the Dutch disease?',
        options: ['Medical condition', 'Economic decline due to resource boom', 'Agricultural disease', 'Population decline'],
        correct: 'Economic decline due to resource boom',
        explanation: 'Dutch disease is economic decline in other sectors due to a resource boom.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_8',
        question: 'What is endogenous growth theory?',
        options: ['External growth', 'Growth driven by internal factors like innovation', 'No growth theory', 'Natural growth'],
        correct: 'Growth driven by internal factors like innovation',
        explanation: 'Endogenous growth theory explains growth as driven by internal factors like innovation and human capital.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_9',
        question: 'What is the demographic dividend?',
        options: ['Population decline benefit', 'Economic benefit from favorable age structure', 'Migration benefit', 'Education benefit'],
        correct: 'Economic benefit from favorable age structure',
        explanation: 'Demographic dividend is the economic benefit resulting from changes in a population\'s age structure.',
        difficulty: 'hard'
      },
      {
        id: 'g12_econ_hard_10',
        question: 'What is the poverty trap?',
        options: ['Escape from poverty', 'Self-reinforcing cycle that keeps people poor', 'Wealth accumulation', 'Economic growth'],
        correct: 'Self-reinforcing cycle that keeps people poor',
        explanation: 'A poverty trap is a self-reinforcing mechanism that causes poverty to persist.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_global_issues',
    name: 'Grade 12: Contemporary Global Geographic Issues and Public Concerns',
    description: 'Ethiopian curriculum - Global geographic issues and contemporary concerns',
    questions: [
      // Easy Questions (10 total)
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
      {
        id: 'g12_global_easy_3',
        question: 'What is migration?',
        options: ['Staying in one place', 'Movement of people from one place to another', 'Population growth', 'Economic development'],
        correct: 'Movement of people from one place to another',
        explanation: 'Migration is the movement of people from one place to another for various reasons.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_4',
        question: 'What is urbanization?',
        options: ['Rural development', 'Growth of cities and urban areas', 'Agricultural expansion', 'Population decline'],
        correct: 'Growth of cities and urban areas',
        explanation: 'Urbanization is the process of population shift from rural to urban areas.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_5',
        question: 'What is international trade?',
        options: ['Local trade', 'Exchange of goods between countries', 'Domestic production', 'Self-sufficiency'],
        correct: 'Exchange of goods between countries',
        explanation: 'International trade is the exchange of goods and services between different countries.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_6',
        question: 'What is a refugee?',
        options: ['Tourist', 'Person fleeing persecution or war', 'Economic migrant', 'Local resident'],
        correct: 'Person fleeing persecution or war',
        explanation: 'A refugee is a person who flees their country due to persecution, war, or violence.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_7',
        question: 'What is water scarcity?',
        options: ['Abundant water', 'Lack of sufficient clean water', 'Water pollution only', 'Flood conditions'],
        correct: 'Lack of sufficient clean water',
        explanation: 'Water scarcity is the lack of sufficient available clean water resources.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_8',
        question: 'What is cultural diversity?',
        options: ['Single culture', 'Variety of cultures in society', 'No culture', 'Western culture only'],
        correct: 'Variety of cultures in society',
        explanation: 'Cultural diversity refers to the variety of cultures and ethnic groups in a society.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_9',
        question: 'What is digital divide?',
        options: ['Mathematical division', 'Gap in access to digital technology', 'Computer programming', 'Internet speed'],
        correct: 'Gap in access to digital technology',
        explanation: 'Digital divide is the gap between those who have access to digital technology and those who don\'t.',
        difficulty: 'easy'
      },
      {
        id: 'g12_global_easy_10',
        question: 'What is terrorism?',
        options: ['Peaceful protest', 'Use of violence for political aims', 'Economic policy', 'Cultural exchange'],
        correct: 'Use of violence for political aims',
        explanation: 'Terrorism is the use of violence and intimidation for political aims.',
        difficulty: 'easy'
      },

      // Medium Questions (10 total)
      {
        id: 'g12_global_med_1',
        question: 'What are global challenges?',
        options: ['Local problems only', 'Issues affecting multiple countries requiring cooperation', 'National issues only', 'Regional concerns only'],
        correct: 'Issues affecting multiple countries requiring cooperation',
        explanation: 'Global challenges are issues that affect multiple countries and require international cooperation to address.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_2',
        question: 'What is brain drain in global context?',
        options: ['Local education', 'Migration of skilled workers globally', 'Population growth', 'Economic development'],
        correct: 'Migration of skilled workers globally',
        explanation: 'Brain drain in global context refers to the migration of skilled workers from developing to developed countries.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_3',
        question: 'What is fair trade?',
        options: ['Free trade', 'Trade ensuring better conditions for producers', 'No trade barriers', 'Local trade only'],
        correct: 'Trade ensuring better conditions for producers',
        explanation: 'Fair trade is a trading partnership that seeks better trading conditions for producers in developing countries.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_4',
        question: 'What is global governance?',
        options: ['Single world government', 'Collective management of global issues', 'No governance', 'National governance only'],
        correct: 'Collective management of global issues',
        explanation: 'Global governance refers to collective management of global issues by international organizations and agreements.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_5',
        question: 'What is the North-South divide?',
        options: ['Geographic division', 'Development gap between rich and poor countries', 'Climate difference', 'Cultural difference'],
        correct: 'Development gap between rich and poor countries',
        explanation: 'The North-South divide refers to the development gap between wealthy and poor countries.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_6',
        question: 'What is multinational corporation (MNC)?',
        options: ['Local company', 'Company operating in multiple countries', 'Government organization', 'Small business'],
        correct: 'Company operating in multiple countries',
        explanation: 'A multinational corporation operates in multiple countries beyond its home country.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_7',
        question: 'What is sustainable tourism?',
        options: ['Mass tourism', 'Tourism that minimizes environmental impact', 'No tourism', 'Local tourism only'],
        correct: 'Tourism that minimizes environmental impact',
        explanation: 'Sustainable tourism seeks to minimize environmental and cultural impacts while providing economic benefits.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_8',
        question: 'What is human trafficking?',
        options: ['Legal migration', 'Illegal trade in humans for exploitation', 'Tourism', 'Cultural exchange'],
        correct: 'Illegal trade in humans for exploitation',
        explanation: 'Human trafficking is the illegal trade in humans for the purposes of forced labor or commercial sexual exploitation.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_9',
        question: 'What is cyber security?',
        options: ['Internet speed', 'Protection of digital information and systems', 'Computer games', 'Social media'],
        correct: 'Protection of digital information and systems',
        explanation: 'Cyber security involves protecting digital information, systems, and networks from attacks.',
        difficulty: 'medium'
      },
      {
        id: 'g12_global_med_10',
        question: 'What is energy security?',
        options: ['Energy abundance', 'Reliable access to energy sources', 'Energy shortage', 'Energy waste'],
        correct: 'Reliable access to energy sources',
        explanation: 'Energy security refers to reliable access to affordable energy sources for economic and social development.',
        difficulty: 'medium'
      },

      // Hard Questions (10 total)
      {
        id: 'g12_global_hard_1',
        question: 'What is glocalization?',
        options: ['Global isolation', 'Adaptation of global products to local conditions', 'Local production only', 'Global standardization'],
        correct: 'Adaptation of global products to local conditions',
        explanation: 'Glocalization refers to the adaptation of global products, services, or ideas to local conditions.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_2',
        question: 'What is the concept of global commons?',
        options: ['Private property', 'Shared global resources requiring collective management', 'National resources', 'Individual ownership'],
        correct: 'Shared global resources requiring collective management',
        explanation: 'Global commons are shared global resources like oceans and atmosphere that require collective management.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_3',
        question: 'What is geopolitics?',
        options: ['Geographic locations', 'Influence of geography on politics and international relations', 'Political theory only', 'Economic policy'],
        correct: 'Influence of geography on politics and international relations',
        explanation: 'Geopolitics studies the influence of geography on politics and international relations.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_4',
        question: 'What is the concept of soft power?',
        options: ['Military force', 'Ability to influence through attraction rather than coercion', 'Economic sanctions', 'Physical strength'],
        correct: 'Ability to influence through attraction rather than coercion',
        explanation: 'Soft power is the ability to influence others through attraction and persuasion rather than coercion.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_5',
        question: 'What is global value chain?',
        options: ['Local production', 'International production network across countries', 'Single country production', 'No production'],
        correct: 'International production network across countries',
        explanation: 'Global value chain refers to the international production network where different stages occur in different countries.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_6',
        question: 'What is the tragedy of the global commons?',
        options: ['Global cooperation', 'Overexploitation of shared global resources', 'Resource abundance', 'Resource conservation'],
        correct: 'Overexploitation of shared global resources',
        explanation: 'The tragedy of the global commons occurs when shared global resources are overexploited.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_7',
        question: 'What is global citizenship?',
        options: ['National citizenship', 'Awareness of global interconnectedness and responsibility', 'Local identity only', 'No citizenship'],
        correct: 'Awareness of global interconnectedness and responsibility',
        explanation: 'Global citizenship involves awareness of global interconnectedness and responsibility for global issues.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_8',
        question: 'What is the concept of failed states?',
        options: ['Successful states', 'States unable to perform basic functions', 'Strong states', 'No states'],
        correct: 'States unable to perform basic functions',
        explanation: 'Failed states are those unable to perform basic functions like providing security and services.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_9',
        question: 'What is cultural imperialism?',
        options: ['Cultural diversity', 'Domination of one culture over others', 'Cultural exchange', 'Local culture'],
        correct: 'Domination of one culture over others',
        explanation: 'Cultural imperialism is the practice of promoting and imposing one culture over others.',
        difficulty: 'hard'
      },
      {
        id: 'g12_global_hard_10',
        question: 'What is the concept of resilient cities?',
        options: ['Weak cities', 'Cities able to adapt and recover from challenges', 'Small cities', 'Rural areas'],
        correct: 'Cities able to adapt and recover from challenges',
        explanation: 'Resilient cities are those able to adapt, learn, and bounce back from various challenges and shocks.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_geographical_enquiry',
    name: 'Grade 12: Geographical Enquiry and Map Making',
    description: 'Ethiopian curriculum - Geographic research methods and cartography',
    questions: [
      // Easy Questions (10 total)
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
      {
        id: 'g12_enquiry_easy_3',
        question: 'What is a contour line?',
        options: ['Straight line', 'Line connecting points of equal elevation', 'Border line', 'Distance line'],
        correct: 'Line connecting points of equal elevation',
        explanation: 'A contour line connects points of equal elevation on a topographic map.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_4',
        question: 'What is a legend on a map?',
        options: ['Story about map', 'Explanation of map symbols', 'Map title', 'Map border'],
        correct: 'Explanation of map symbols',
        explanation: 'A legend explains the symbols, colors, and patterns used on a map.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_5',
        question: 'What is latitude?',
        options: ['Distance east-west', 'Distance north-south from equator', 'Map projection', 'Compass direction'],
        correct: 'Distance north-south from equator',
        explanation: 'Latitude measures distance north or south from the equator in degrees.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_6',
        question: 'What is longitude?',
        options: ['Distance north-south', 'Distance east-west from prime meridian', 'Elevation', 'Time zone'],
        correct: 'Distance east-west from prime meridian',
        explanation: 'Longitude measures distance east or west from the prime meridian in degrees.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_7',
        question: 'What is a compass?',
        options: ['Distance tool', 'Direction-finding instrument', 'Measuring device', 'Drawing tool'],
        correct: 'Direction-finding instrument',
        explanation: 'A compass is an instrument used for navigation and orientation showing direction.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_8',
        question: 'What is GPS?',
        options: ['Geographic Planning System', 'Global Positioning System', 'General Photography System', 'Geographic Projection Scale'],
        correct: 'Global Positioning System',
        explanation: 'GPS stands for Global Positioning System, used for navigation and location finding.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_9',
        question: 'What is a topographic map?',
        options: ['Political map', 'Map showing elevation and landforms', 'Climate map', 'Population map'],
        correct: 'Map showing elevation and landforms',
        explanation: 'A topographic map shows elevation, landforms, and physical features of the terrain.',
        difficulty: 'easy'
      },
      {
        id: 'g12_enquiry_easy_10',
        question: 'What is field work?',
        options: ['Desk research', 'Research conducted outside in real environments', 'Library study', 'Computer work'],
        correct: 'Research conducted outside in real environments',
        explanation: 'Field work is research conducted outside the classroom in real environmental settings.',
        difficulty: 'easy'
      },

      // Medium Questions (10 total)
      {
        id: 'g12_enquiry_med_1',
        question: 'What are the steps in geographical enquiry?',
        options: ['Only observation', 'Question, collect data, analyze, conclude', 'Only mapping', 'Only measurement'],
        correct: 'Question, collect data, analyze, conclude',
        explanation: 'Geographical enquiry involves formulating questions, collecting data, analyzing, and drawing conclusions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_2',
        question: 'What is primary data?',
        options: ['Most important data', 'Data collected directly by researcher', 'Old data', 'Secondary information'],
        correct: 'Data collected directly by researcher',
        explanation: 'Primary data is information collected directly by the researcher through observation, surveys, or experiments.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_3',
        question: 'What is secondary data?',
        options: ['Less important data', 'Data collected by others', 'New data', 'Primary information'],
        correct: 'Data collected by others',
        explanation: 'Secondary data is information that has been collected by someone else for another purpose.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_4',
        question: 'What is a hypothesis?',
        options: ['Final answer', 'Testable prediction or explanation', 'Random guess', 'Proven fact'],
        correct: 'Testable prediction or explanation',
        explanation: 'A hypothesis is a testable prediction or explanation that can be investigated through research.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_5',
        question: 'What is sampling in geographic research?',
        options: ['Taking everything', 'Selecting representative portion for study', 'Random selection', 'No selection'],
        correct: 'Selecting representative portion for study',
        explanation: 'Sampling involves selecting a representative portion of a population or area for detailed study.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_6',
        question: 'What is triangulation in research?',
        options: ['Drawing triangles', 'Using multiple methods to verify findings', 'Map projection', 'Single method use'],
        correct: 'Using multiple methods to verify findings',
        explanation: 'Triangulation involves using multiple research methods or data sources to verify findings.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_7',
        question: 'What is systematic sampling?',
        options: ['Random selection', 'Regular interval selection', 'Convenience selection', 'No pattern selection'],
        correct: 'Regular interval selection',
        explanation: 'Systematic sampling involves selecting items at regular intervals from an ordered list.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_8',
        question: 'What is stratified sampling?',
        options: ['Random sampling', 'Sampling from different subgroups', 'Single group sampling', 'No sampling'],
        correct: 'Sampling from different subgroups',
        explanation: 'Stratified sampling involves dividing the population into subgroups and sampling from each.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_9',
        question: 'What is quantitative data?',
        options: ['Quality data', 'Numerical data that can be measured', 'Opinion data', 'Descriptive data'],
        correct: 'Numerical data that can be measured',
        explanation: 'Quantitative data is numerical information that can be measured and analyzed statistically.',
        difficulty: 'medium'
      },
      {
        id: 'g12_enquiry_med_10',
        question: 'What is qualitative data?',
        options: ['Numerical data', 'Descriptive data about qualities', 'Measured data', 'Statistical data'],
        correct: 'Descriptive data about qualities',
        explanation: 'Qualitative data is descriptive information about qualities, characteristics, or opinions.',
        difficulty: 'medium'
      },

      // Hard Questions (10 total)
      {
        id: 'g12_enquiry_hard_1',
        question: 'What is GIS?',
        options: ['Government Information System', 'Geographic Information System for spatial analysis', 'Global Internet System', 'Geological Investigation Service'],
        correct: 'Geographic Information System for spatial analysis',
        explanation: 'GIS (Geographic Information System) is a system for capturing, storing, analyzing, and displaying spatial data.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_2',
        question: 'What is remote sensing?',
        options: ['Close observation', 'Collecting data from distance using satellites/aircraft', 'Manual measurement', 'Local sensing'],
        correct: 'Collecting data from distance using satellites/aircraft',
        explanation: 'Remote sensing involves collecting information about Earth\'s surface from satellites or aircraft.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_3',
        question: 'What is spatial analysis?',
        options: ['Time analysis', 'Analysis of geographic patterns and relationships', 'Social analysis', 'Economic analysis'],
        correct: 'Analysis of geographic patterns and relationships',
        explanation: 'Spatial analysis involves examining geographic patterns, relationships, and processes in space.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_4',
        question: 'What is map projection?',
        options: ['Map enlargement', 'Method of representing Earth\'s surface on flat map', 'Map coloring', 'Map storage'],
        correct: 'Method of representing Earth\'s surface on flat map',
        explanation: 'Map projection is a method of representing Earth\'s curved surface on a flat map.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_5',
        question: 'What is the Mercator projection?',
        options: ['Equal area projection', 'Cylindrical projection with distorted poles', 'Conic projection', 'No distortion projection'],
        correct: 'Cylindrical projection with distorted poles',
        explanation: 'The Mercator projection is a cylindrical projection that increasingly distorts areas toward the poles.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_6',
        question: 'What is georeferencing?',
        options: ['Map coloring', 'Assigning coordinates to map features', 'Map printing', 'Map naming'],
        correct: 'Assigning coordinates to map features',
        explanation: 'Georeferencing involves assigning real-world coordinates to map or image features.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_7',
        question: 'What is raster data in GIS?',
        options: ['Vector data', 'Grid-based data with cells', 'Point data', 'Line data'],
        correct: 'Grid-based data with cells',
        explanation: 'Raster data represents geographic features as a grid of cells or pixels.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_8',
        question: 'What is vector data in GIS?',
        options: ['Grid data', 'Point, line, and polygon data', 'Raster data', 'Cell data'],
        correct: 'Point, line, and polygon data',
        explanation: 'Vector data represents geographic features as points, lines, and polygons.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_9',
        question: 'What is spatial autocorrelation?',
        options: ['No correlation', 'Similarity of nearby geographic features', 'Time correlation', 'Random correlation'],
        correct: 'Similarity of nearby geographic features',
        explanation: 'Spatial autocorrelation measures the degree to which nearby geographic features are similar.',
        difficulty: 'hard'
      },
      {
        id: 'g12_enquiry_hard_10',
        question: 'What is the modifiable areal unit problem?',
        options: ['Fixed units', 'Results varying with different spatial units', 'No problem', 'Time problem'],
        correct: 'Results varying with different spatial units',
        explanation: 'The modifiable areal unit problem occurs when results change depending on how spatial units are defined.',
        difficulty: 'hard'
      }
    ]
  }
];
