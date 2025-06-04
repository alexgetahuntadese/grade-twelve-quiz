
import { Chapter } from '../types';

export const physicalEducationChapters: Chapter[] = [
  {
    id: 'fitness_basics',
    name: 'Fitness Fundamentals',
    description: 'Basic principles of physical fitness and exercise',
    questions: [
      // Easy Questions
      {
        id: 'fit_basic_1',
        question: 'What is physical fitness?',
        options: ['Being muscular', 'Being thin', 'Being healthy and capable of physical activity', 'Being an athlete'],
        correct: 'Being healthy and capable of physical activity',
        explanation: 'Physical fitness is the ability to perform daily tasks without undue fatigue.',
        difficulty: 'easy'
      },
      {
        id: 'fit_basic_2',
        question: 'What is cardiovascular exercise?',
        options: ['Weight lifting', 'Exercise for the heart and lungs', 'Flexibility training', 'Balance practice'],
        correct: 'Exercise for the heart and lungs',
        explanation: 'Cardiovascular exercise strengthens the heart and lungs through sustained activity.',
        difficulty: 'easy'
      },
      {
        id: 'fit_basic_3',
        question: 'What is strength training?',
        options: ['Running', 'Swimming', 'Using resistance to build muscle', 'Stretching'],
        correct: 'Using resistance to build muscle',
        explanation: 'Strength training uses resistance to build muscle strength and endurance.',
        difficulty: 'easy'
      },
      {
        id: 'fit_basic_4',
        question: 'What is flexibility?',
        options: ['Muscle strength', 'Range of motion in joints', 'Heart rate', 'Running speed'],
        correct: 'Range of motion in joints',
        explanation: 'Flexibility refers to the range of motion in your joints and muscles.',
        difficulty: 'easy'
      },
      {
        id: 'fit_basic_5',
        question: 'What is the purpose of a warm-up?',
        options: ['Cool down body', 'Prepare body for exercise', 'Build muscle', 'Lose weight'],
        correct: 'Prepare body for exercise',
        explanation: 'Warm-ups prepare the body for exercise by increasing blood flow and muscle temperature.',
        difficulty: 'easy'
      },
      {
        id: 'fit_basic_6',
        question: 'What should you drink during exercise?',
        options: ['Coffee', 'Soda', 'Water', 'Juice'],
        correct: 'Water',
        explanation: 'Water is essential during exercise to replace fluids lost through sweat.',
        difficulty: 'easy'
      },
      {
        id: 'fit_basic_7',
        question: 'What is a cool-down?',
        options: ['Cold shower', 'Gradual reduction in activity', 'Drinking cold water', 'Air conditioning'],
        correct: 'Gradual reduction in activity',
        explanation: 'A cool-down gradually reduces exercise intensity to help the body recover.',
        difficulty: 'easy'
      },
      {
        id: 'fit_basic_8',
        question: 'What is a repetition in strength training?',
        options: ['One complete movement', 'Type of equipment', 'Rest period', 'Exercise duration'],
        correct: 'One complete movement',
        explanation: 'A repetition is one complete movement of a specific exercise.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'fit_basic_med_1',
        question: 'What is the FITT principle?',
        options: ['Exercise equipment', 'Frequency, Intensity, Time, Type', 'Fitness test', 'Training program'],
        correct: 'Frequency, Intensity, Time, Type',
        explanation: 'FITT stands for Frequency, Intensity, Time, and Type - the key components of an exercise program.',
        difficulty: 'medium'
      },
      {
        id: 'fit_basic_med_2',
        question: 'What is VO2 max?',
        options: ['Maximum speed', 'Maximum oxygen consumption', 'Maximum heart rate', 'Maximum power'],
        correct: 'Maximum oxygen consumption',
        explanation: 'VO2 max is the maximum amount of oxygen your body can use during intense exercise.',
        difficulty: 'medium'
      },
      {
        id: 'fit_basic_med_3',
        question: 'What is the difference between aerobic and anaerobic exercise?',
        options: ['No difference', 'Aerobic uses oxygen; anaerobic doesn\'t', 'Only intensity differs', 'Only duration differs'],
        correct: 'Aerobic uses oxygen; anaerobic doesn\'t',
        explanation: 'Aerobic exercise uses oxygen for energy; anaerobic exercise occurs without sufficient oxygen.',
        difficulty: 'medium'
      },
      {
        id: 'fit_basic_med_4',
        question: 'What is target heart rate?',
        options: ['Maximum heart rate', 'Resting heart rate', 'Optimal heart rate during exercise', 'Heart rate during sleep'],
        correct: 'Optimal heart rate during exercise',
        explanation: 'Target heart rate is the optimal range for your heart to beat during exercise for cardiovascular benefits.',
        difficulty: 'medium'
      },
      {
        id: 'fit_basic_med_5',
        question: 'What is cross-training?',
        options: ['Training others', 'Training for a marathon', 'Participating in various activities', 'Weight training only'],
        correct: 'Participating in various activities',
        explanation: 'Cross-training involves participating in different activities to work various muscle groups and prevent overuse injuries.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'fit_basic_hard_1',
        question: 'How does periodization benefit a training program?',
        options: ['Makes it shorter', 'Structures cycles of training intensity', 'Eliminates need for rest', 'Only for athletes'],
        correct: 'Structures cycles of training intensity',
        explanation: 'Periodization divides training into phases with varying intensity to optimize performance and recovery.',
        difficulty: 'hard'
      },
      {
        id: 'fit_basic_hard_2',
        question: 'What is the principle of specificity in training?',
        options: ['General fitness applies to all activities', 'Training should match your goals', 'Only training one muscle group', 'Always doing the same exercise'],
        correct: 'Training should match your goals',
        explanation: 'Specificity means training should be relevant to your specific goals and activities.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade11_sports_science',
    name: 'Grade 11: Sports Science',
    description: 'Scientific principles applied to athletic performance',
    questions: [
      // Easy Questions
      {
        id: 'g11_sport_easy_1',
        question: 'What is sports science?',
        options: ['Playing sports', 'Science applied to sports and exercise', 'Sports statistics', 'Sports equipment'],
        correct: 'Science applied to sports and exercise',
        explanation: 'Sports science applies scientific principles to improve athletic performance and health.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sport_easy_2',
        question: 'What is biomechanics?',
        options: ['Exercise equipment', 'Study of body movement', 'Sports medicine', 'Weight training'],
        correct: 'Study of body movement',
        explanation: 'Biomechanics is the study of mechanical principles in relation to human movement.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sport_easy_3',
        question: 'What are fast-twitch muscle fibers?',
        options: ['Slow muscles', 'Muscles for endurance', 'Muscles for speed and power', 'Core muscles'],
        correct: 'Muscles for speed and power',
        explanation: 'Fast-twitch muscle fibers contract quickly and powerfully but fatigue faster.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sport_easy_4',
        question: 'What is sports nutrition?',
        options: ['Fast food', 'Study of diet for athletic performance', 'Only vitamins', 'Only proteins'],
        correct: 'Study of diet for athletic performance',
        explanation: 'Sports nutrition is the study of nutrients and supplements that improve athletic performance.',
        difficulty: 'easy'
      },
      {
        id: 'g11_sport_easy_5',
        question: 'What is motor learning?',
        options: ['Driving cars', 'Process of acquiring movement skills', 'Engine study', 'Memory test'],
        correct: 'Process of acquiring movement skills',
        explanation: 'Motor learning is the process of acquiring and refining movement skills through practice.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_sport_med_1',
        question: 'What is the difference between concentric and eccentric muscle contractions?',
        options: ['No difference', 'Concentric shortens muscle; eccentric lengthens while contracting', 'Only intensity differs', 'Only applies to certain muscles'],
        correct: 'Concentric shortens muscle; eccentric lengthens while contracting',
        explanation: 'Concentric contractions shorten the muscle; eccentric contractions lengthen the muscle while it\'s contracting.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sport_med_2',
        question: 'What is the glycemic index?',
        options: ['Protein measurement', 'Fat content', 'How quickly carbohydrates raise blood sugar', 'Vitamin content'],
        correct: 'How quickly carbohydrates raise blood sugar',
        explanation: 'The glycemic index measures how quickly carbohydrates raise blood sugar levels.',
        difficulty: 'medium'
      },
      {
        id: 'g11_sport_med_3',
        question: 'What is plyometric training?',
        options: ['Weight training', 'Exercises using rapid stretching and contracting', 'Endurance training', 'Flexibility training'],
        correct: 'Exercises using rapid stretching and contracting',
        explanation: 'Plyometric training involves exercises that use rapid stretching and contracting of muscles to increase power.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_sport_hard_1',
        question: 'How does the stretch-shortening cycle affect muscle performance?',
        options: ['No effect', 'Enhances power output through elastic energy', 'Reduces power', 'Only affects flexibility'],
        correct: 'Enhances power output through elastic energy',
        explanation: 'The stretch-shortening cycle uses stored elastic energy from muscle stretching to enhance power in the subsequent contraction.',
        difficulty: 'hard'
      },
      {
        id: 'g11_sport_hard_2',
        question: 'What is the relationship between lactate threshold and endurance performance?',
        options: ['No relationship', 'Higher threshold allows longer high-intensity exercise', 'Lower threshold is better', 'Only relevant for sprinters'],
        correct: 'Higher threshold allows longer high-intensity exercise',
        explanation: 'A higher lactate threshold allows athletes to perform at higher intensities before lactic acid accumulates.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade12_health_wellness',
    name: 'Grade 12: Health and Wellness',
    description: 'Comprehensive approach to physical and mental well-being',
    questions: [
      // Easy Questions
      {
        id: 'g12_health_easy_1',
        question: 'What is health?',
        options: ['Absence of illness', 'Physical, mental, and social well-being', 'Physical fitness only', 'Medical care'],
        correct: 'Physical, mental, and social well-being',
        explanation: 'Health is a state of complete physical, mental, and social well-being.',
        difficulty: 'easy'
      },
      {
        id: 'g12_health_easy_2',
        question: 'What is wellness?',
        options: ['Medical treatment', 'Active process of becoming aware and making choices', 'Absence of disease', 'Physical fitness'],
        correct: 'Active process of becoming aware and making choices',
        explanation: 'Wellness is an active process of becoming aware and making healthy choices.',
        difficulty: 'easy'
      },
      {
        id: 'g12_health_easy_3',
        question: 'What is stress?',
        options: ['Always harmful', 'Body\'s response to demands', 'Only mental', 'Only physical'],
        correct: 'Body\'s response to demands',
        explanation: 'Stress is the body\'s response to demands or pressures.',
        difficulty: 'easy'
      },
      {
        id: 'g12_health_easy_4',
        question: 'What is a balanced diet?',
        options: ['Eating only vegetables', 'Eating various nutrients in correct proportions', 'Skipping meals', 'No carbohydrates'],
        correct: 'Eating various nutrients in correct proportions',
        explanation: 'A balanced diet contains various nutrients in the correct proportions to maintain health.',
        difficulty: 'easy'
      },
      {
        id: 'g12_health_easy_5',
        question: 'What is BMI?',
        options: ['Blood measurement', 'Blood pressure', 'Body Mass Index', 'Body movement indicator'],
        correct: 'Body Mass Index',
        explanation: 'BMI is a measure that uses height and weight to estimate body fat.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_health_med_1',
        question: 'What are the dimensions of wellness?',
        options: ['Only physical', 'Physical, mental, emotional, social, spiritual, environmental', 'Only diet and exercise', 'Only mental and physical'],
        correct: 'Physical, mental, emotional, social, spiritual, environmental',
        explanation: 'Wellness has multiple dimensions including physical, mental, emotional, social, spiritual, and environmental aspects.',
        difficulty: 'medium'
      },
      {
        id: 'g12_health_med_2',
        question: 'What is the difference between macronutrients and micronutrients?',
        options: ['No difference', 'Macro needed in large amounts; micro needed in small amounts', 'Only source differs', 'Only importance differs'],
        correct: 'Macro needed in large amounts; micro needed in small amounts',
        explanation: 'Macronutrients (carbs, proteins, fats) are needed in large amounts; micronutrients (vitamins, minerals) in small amounts.',
        difficulty: 'medium'
      },
      {
        id: 'g12_health_med_3',
        question: 'What is mindfulness?',
        options: ['Forgetfulness', 'Being aware of the present moment', 'Multiple thoughts', 'Avoiding stress'],
        correct: 'Being aware of the present moment',
        explanation: 'Mindfulness is being fully aware and present in the moment without judgment.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_health_hard_1',
        question: 'How does the biopsychosocial model relate to health?',
        options: ['Only biological factors matter', 'Biological, psychological, social factors interact', 'Only applies to mental health', 'Only applies to physical health'],
        correct: 'Biological, psychological, social factors interact',
        explanation: 'The biopsychosocial model recognizes that biological, psychological, and social factors all interact to affect health.',
        difficulty: 'hard'
      },
      {
        id: 'g12_health_hard_2',
        question: 'What is the relationship between sleep quality and cognitive function?',
        options: ['No relationship', 'Poor sleep impairs cognitive function', 'Only affects children', 'Only affects elderly'],
        correct: 'Poor sleep impairs cognitive function',
        explanation: 'Poor sleep quality negatively impacts various cognitive functions including memory, attention, and decision-making.',
        difficulty: 'hard'
      }
    ]
  }
];
