import { Chapter } from '../types';

export const physicalEducationChapters: Chapter[] = [
  {
    id: 'fitness_health',
    name: 'Fitness and Health',
    description: 'Physical fitness, health, and wellness concepts',
    questions: [
      {
        id: 'pe_fitness_easy_1',
        question: 'What is physical fitness?',
        options: ['Being tall', 'Ability to perform physical activities', 'Having muscles', 'Being thin'],
        correct: 'Ability to perform physical activities',
        explanation: 'Physical fitness is the ability to perform physical activities effectively.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_2',
        question: 'How many minutes of exercise should you get daily?',
        options: ['10 minutes', '30 minutes', '60 minutes', '120 minutes'],
        correct: '60 minutes',
        explanation: 'Health experts recommend at least 60 minutes of physical activity daily for children.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_3',
        question: 'What is cardiovascular exercise?',
        options: ['Lifting weights', 'Exercise that strengthens the heart', 'Stretching', 'Balance training'],
        correct: 'Exercise that strengthens the heart',
        explanation: 'Cardiovascular exercise strengthens the heart and improves circulation.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_4',
        question: 'What should you do before exercising?',
        options: ['Eat a big meal', 'Warm up', 'Take a nap', 'Watch TV'],
        correct: 'Warm up',
        explanation: 'Warming up prepares your body for exercise and helps prevent injury.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_5',
        question: 'What is flexibility?',
        options: ['Muscle strength', 'Range of motion in joints', 'Running speed', 'Body weight'],
        correct: 'Range of motion in joints',
        explanation: 'Flexibility refers to the range of motion available in your joints.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_6',
        question: 'What should you do after exercising?',
        options: ['Sit immediately', 'Cool down and stretch', 'Eat immediately', 'Take a hot shower'],
        correct: 'Cool down and stretch',
        explanation: 'Cooling down helps your body return to normal and prevents muscle stiffness.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_7',
        question: 'What is the best way to build muscle strength?',
        options: ['Running only', 'Resistance training', 'Sleeping more', 'Eating only'],
        correct: 'Resistance training',
        explanation: 'Resistance training with weights or bodyweight exercises builds muscle strength.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_8',
        question: 'How much water should you drink during exercise?',
        options: ['None', 'Small sips regularly', 'Only at the end', 'Large amounts at once'],
        correct: 'Small sips regularly',
        explanation: 'Drinking small amounts of water regularly during exercise prevents dehydration.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_9',
        question: 'What is the main benefit of regular exercise?',
        options: ['Looking good only', 'Improved overall health', 'Making friends', 'Spending time'],
        correct: 'Improved overall health',
        explanation: 'Regular exercise improves physical health, mental health, and overall well-being.',
        difficulty: 'easy'
      },
      {
        id: 'pe_fitness_easy_10',
        question: 'What type of clothing is best for exercise?',
        options: ['Heavy clothing', 'Lightweight, breathable clothing', 'Formal wear', 'Winter coats'],
        correct: 'Lightweight, breathable clothing',
        explanation: 'Lightweight, breathable clothing allows proper air circulation and movement.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'pe_fitness_med_1',
        question: 'What are the components of physical fitness?',
        options: ['Strength only', 'Cardio, strength, flexibility, body composition', 'Running and jumping', 'Diet and sleep'],
        correct: 'Cardio, strength, flexibility, body composition',
        explanation: 'The main components are cardiovascular endurance, muscular strength, flexibility, and body composition.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_2',
        question: 'What is aerobic exercise?',
        options: ['Exercise without oxygen', 'Exercise that uses oxygen continuously', 'Only weight lifting', 'Only stretching'],
        correct: 'Exercise that uses oxygen continuously',
        explanation: 'Aerobic exercise requires continuous oxygen consumption and includes activities like running and swimming.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_3',
        question: 'What is anaerobic exercise?',
        options: ['Exercise with continuous oxygen', 'Short bursts of high-intensity exercise', 'Only running', 'Only walking'],
        correct: 'Short bursts of high-intensity exercise',
        explanation: 'Anaerobic exercise involves short bursts of high-intensity activity without continuous oxygen.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_4',
        question: 'What is target heart rate?',
        options: ['Fastest heart rate', 'Ideal heart rate range during exercise', 'Resting heart rate', 'Heart rate when sleeping'],
        correct: 'Ideal heart rate range during exercise',
        explanation: 'Target heart rate is the ideal range for effective cardiovascular exercise.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_5',
        question: 'What is body composition?',
        options: ['Only weight', 'Ratio of fat to muscle and bone', 'Height only', 'Age factor'],
        correct: 'Ratio of fat to muscle and bone',
        explanation: 'Body composition refers to the proportion of fat, muscle, bone, and other tissues in the body.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_6',
        question: 'What is the difference between muscular strength and endurance?',
        options: ['No difference', 'Strength is max force, endurance is sustained activity', 'Both are the same', 'Only strength matters'],
        correct: 'Strength is max force, endurance is sustained activity',
        explanation: 'Muscular strength is maximum force production; endurance is the ability to sustain muscle activity.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_7',
        question: 'What is progressive overload?',
        options: ['Doing less exercise', 'Gradually increasing exercise difficulty', 'Exercising randomly', 'Only easy exercises'],
        correct: 'Gradually increasing exercise difficulty',
        explanation: 'Progressive overload involves gradually increasing exercise intensity to improve fitness.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_8',
        question: 'What is the recovery principle?',
        options: ['Never rest', 'Rest is necessary for improvement', 'Exercise daily without break', 'Only rest matters'],
        correct: 'Rest is necessary for improvement',
        explanation: 'The body needs rest periods to recover and adapt to exercise stress.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_9',
        question: 'What is the specificity principle?',
        options: ['Any exercise works for any goal', 'Training should match specific goals', 'Only general fitness matters', 'All exercises are equal'],
        correct: 'Training should match specific goals',
        explanation: 'Training should be specific to the desired outcome or sport-specific skills.',
        difficulty: 'medium'
      },
      {
        id: 'pe_fitness_med_10',
        question: 'What is cross-training?',
        options: ['Only one type of exercise', 'Combining different types of exercise', 'Angry training', 'Competitive training only'],
        correct: 'Combining different types of exercise',
        explanation: 'Cross-training involves participating in various forms of exercise to improve overall fitness.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'pe_fitness_hard_1',
        question: 'What is the FITT principle?',
        options: ['Fitness goals', 'Frequency, Intensity, Time, Type', 'Exercise equipment', 'Nutrition plan'],
        correct: 'Frequency, Intensity, Time, Type',
        explanation: 'FITT stands for Frequency, Intensity, Time, and Type - key variables in exercise planning.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_2',
        question: 'What is VO2 max?',
        options: ['Maximum heart rate', 'Maximum oxygen uptake', 'Maximum weight lifted', 'Maximum distance run'],
        correct: 'Maximum oxygen uptake',
        explanation: 'VO2 max is the maximum rate at which the body can consume oxygen during exercise.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_3',
        question: 'What is lactate threshold?',
        options: ['Maximum heart rate', 'Point where lactate accumulates in blood', 'Maximum strength', 'Flexibility limit'],
        correct: 'Point where lactate accumulates in blood',
        explanation: 'Lactate threshold is the exercise intensity at which lactate begins to accumulate in the blood.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_4',
        question: 'What is periodization in training?',
        options: ['Random training', 'Systematic planning of training phases', 'Daily routine', 'One-time workout'],
        correct: 'Systematic planning of training phases',
        explanation: 'Periodization is the systematic planning of athletic training with specific phases and goals.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_5',
        question: 'What is the difference between concentric and eccentric muscle contractions?',
        options: ['No difference', 'Concentric shortens, eccentric lengthens', 'Both shorten', 'Both lengthen'],
        correct: 'Concentric shortens, eccentric lengthens',
        explanation: 'Concentric contractions shorten the muscle, eccentric contractions lengthen it under tension.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_6',
        question: 'What is metabolic equivalent (MET)?',
        options: ['Weight measurement', 'Energy expenditure measurement', 'Time measurement', 'Distance measurement'],
        correct: 'Energy expenditure measurement',
        explanation: 'MET is a unit that measures the energy cost of physical activities.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_7',
        question: 'What is the principle of reversibility in fitness?',
        options: ['Fitness always improves', 'Use it or lose it', 'Fitness never changes', 'Only gains matter'],
        correct: 'Use it or lose it',
        explanation: 'The principle of reversibility states that fitness gains are lost when training stops.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_8',
        question: 'What is plyometric training?',
        options: ['Slow movements only', 'Explosive power training', 'Flexibility training', 'Endurance training'],
        correct: 'Explosive power training',
        explanation: 'Plyometric training uses explosive movements to develop muscular power.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_9',
        question: 'What is the rate of perceived exertion (RPE)?',
        options: ['Heart rate measurement', 'Subjective intensity scale', 'Weight measurement', 'Time measurement'],
        correct: 'Subjective intensity scale',
        explanation: 'RPE is a subjective scale used to measure the intensity of exercise based on how hard it feels.',
        difficulty: 'hard'
      },
      {
        id: 'pe_fitness_hard_10',
        question: 'What is delayed onset muscle soreness (DOMS)?',
        options: ['Immediate pain', 'Muscle soreness 24-48 hours after exercise', 'Chronic pain', 'Injury pain'],
        correct: 'Muscle soreness 24-48 hours after exercise',
        explanation: 'DOMS is muscle soreness that occurs 24-48 hours after intense or unfamiliar exercise.',
        difficulty: 'hard'
      }
    ]
  },

  // Grade 11 Chapter
  {
    id: 'grade11_sport_science',
    name: 'Grade 11: Sports Science',
    description: 'Scientific principles behind athletic performance and sport techniques',
    questions: [
      // Easy Questions
      {
        id: 'g11_pe_easy_1',
        question: 'What is sport psychology?',
        options: ['Study of sports history', 'Study of mental factors affecting sports performance', 'Study of sports rules', 'Study of sports equipment'],
        correct: 'Study of mental factors affecting sports performance',
        explanation: 'Sport psychology examines the mental factors that affect performance in sports and exercise.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_2',
        question: 'What is biomechanics in sports?',
        options: ['Sports equipment', 'Study of mechanical principles in human movement', 'Sports medicine', 'Training program'],
        correct: 'Study of mechanical principles in human movement',
        explanation: 'Biomechanics applies mechanical principles to understand human movement in sports.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_3',
        question: 'What is an isotonic exercise?',
        options: ['Static exercise', 'Exercise with muscle length changing', 'Stretching only', 'Balance training'],
        correct: 'Exercise with muscle length changing',
        explanation: 'Isotonic exercises involve muscle length changing during contraction, like lifting weights.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_4',
        question: 'What is an isometric exercise?',
        options: ['Movement exercise', 'Muscle contraction without joint movement', 'Flexibility exercise', 'Endurance training'],
        correct: 'Muscle contraction without joint movement',
        explanation: 'Isometric exercises involve muscle contraction without joint movement, like wall sits.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_5',
        question: 'What is sports nutrition?',
        options: ['Any diet', 'Study of nutrients for optimal athletic performance', 'Weight loss program', 'Cooking for athletes'],
        correct: 'Study of nutrients for optimal athletic performance',
        explanation: 'Sports nutrition studies how nutrients affect athletic performance and recovery.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_6',
        question: 'What is motor learning?',
        options: ['Car driving', 'Process of acquiring movement skills', 'Muscle building', 'Equipment knowledge'],
        correct: 'Process of acquiring movement skills',
        explanation: 'Motor learning is the process of acquiring and refining movement skills through practice.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_7',
        question: 'What is the role of carbohydrates for athletes?',
        options: ['Not important', 'Primary energy source', 'Only for weight gain', 'Only for muscle building'],
        correct: 'Primary energy source',
        explanation: 'Carbohydrates are the primary energy source for athletic activities.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_8',
        question: 'What is sports physiology?',
        options: ['Sports history', 'Study of body\'s response to physical activity', 'Sports psychology', 'Sports management'],
        correct: 'Study of body\'s response to physical activity',
        explanation: 'Sports physiology examines how the body responds and adapts to physical activity.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_9',
        question: 'What is the importance of protein for athletes?',
        options: ['Not needed', 'Muscle repair and growth', 'Only for energy', 'No athletic benefits'],
        correct: 'Muscle repair and growth',
        explanation: 'Protein is essential for muscle repair and growth after exercise.',
        difficulty: 'easy'
      },
      {
        id: 'g11_pe_easy_10',
        question: 'What is the principle of overload?',
        options: ['Avoiding exercise', 'Increasing demands on the body for adaptation', 'Random training', 'Decreasing intensity'],
        correct: 'Increasing demands on the body for adaptation',
        explanation: 'The overload principle involves gradually increasing exercise demands to improve fitness.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_pe_med_1',
        question: 'What is the difference between fast-twitch and slow-twitch muscle fibers?',
        options: ['No difference', 'Fast-twitch for power, slow-twitch for endurance', 'Only size difference', 'Only in animals'],
        correct: 'Fast-twitch for power, slow-twitch for endurance',
        explanation: 'Fast-twitch fibers provide power for short bursts, slow-twitch fibers provide endurance.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_2',
        question: 'What is the role of proprioception in sports?',
        options: ['Not important', 'Awareness of body position and movement', 'Only for beginners', 'Only in team sports'],
        correct: 'Awareness of body position and movement',
        explanation: 'Proprioception provides awareness of body position and movement in space.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_3',
        question: 'What is periodization in sports training?',
        options: ['Random training', 'Systematic planning of training cycles', 'Training in specific periods only', 'Ancient training method'],
        correct: 'Systematic planning of training cycles',
        explanation: 'Periodization divides training into phases to optimize performance at specific times.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_4',
        question: 'What is the glycemic index and why is it important for athletes?',
        options: ['Not relevant to athletes', 'Measure of how foods affect blood sugar levels, important for energy management', 'Vitamin measurement', 'Protein quality scale'],
        correct: 'Measure of how foods affect blood sugar levels, important for energy management',
        explanation: 'Glycemic index measures how foods affect blood sugar, helping athletes manage energy levels.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_5',
        question: 'What is hypertrophy in muscle training?',
        options: ['Muscle weakness', 'Increase in muscle size', 'Decrease in muscle size', 'Muscle injury'],
        correct: 'Increase in muscle size',
        explanation: 'Hypertrophy refers to the increase in muscle size due to resistance training.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_6',
        question: 'What is the difference between dynamic and static stretching?',
        options: ['No difference', 'Dynamic involves movement, static involves holding positions', 'Only intensity difference', 'Only duration difference'],
        correct: 'Dynamic involves movement, static involves holding positions',
        explanation: 'Dynamic stretching involves movement, while static stretching involves holding positions.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_7',
        question: 'What is the role of mental imagery in sports?',
        options: ['No role', 'Enhance performance through visualization', 'Only for entertainment', 'Only for coaches'],
        correct: 'Enhance performance through visualization',
        explanation: 'Mental imagery helps athletes enhance performance through mental visualization of skills.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_8',
        question: 'What is the principle of specificity in training?',
        options: ['General training for all sports', 'Training must match specific sport requirements', 'Only for professional athletes', 'Only for team sports'],
        correct: 'Training must match specific sport requirements',
        explanation: 'The specificity principle states that training should match the specific demands of the sport.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_9',
        question: 'What is the importance of electrolytes for athletes?',
        options: ['Not important', 'Regulate fluid balance and muscle function', 'Only for appearance', 'Only for professional athletes'],
        correct: 'Regulate fluid balance and muscle function',
        explanation: 'Electrolytes regulate fluid balance and are essential for proper muscle function.',
        difficulty: 'medium'
      },
      {
        id: 'g11_pe_med_10',
        question: 'What is sports biomechanical analysis?',
        options: ['Financial analysis', 'Analysis of movement efficiency and technique', 'Team strategy', 'Equipment testing'],
        correct: 'Analysis of movement efficiency and technique',
        explanation: 'Biomechanical analysis examines movement efficiency and technique in sports.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_pe_hard_1',
        question: 'What is the relationship between heart rate variability and athletic performance?',
        options: ['Unrelated', 'Higher variability often indicates better recovery and readiness', 'Lower variability is always better', 'Only relevant for older athletes'],
        correct: 'Higher variability often indicates better recovery and readiness',
        explanation: 'Higher heart rate variability often indicates better autonomic function and recovery readiness.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_2',
        question: 'What is the role of the phosphocreatine energy system in exercise?',
        options: ['Long endurance activities', 'Immediate energy for short, intense bursts', 'Not used in exercise', 'Only for recovery'],
        correct: 'Immediate energy for short, intense bursts',
        explanation: 'The phosphocreatine system provides immediate energy for short, intense exercise bursts.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_3',
        question: 'How does periodization affect hormonal response to training?',
        options: ['No effect', 'Optimizes anabolic and catabolic hormone balance', 'Decreases all hormones', 'Only affects women'],
        correct: 'Optimizes anabolic and catabolic hormone balance',
        explanation: 'Proper periodization optimizes the balance between anabolic and catabolic hormonal responses.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_4',
        question: 'What is the relationship between motor unit recruitment and force production?',
        options: ['Unrelated', 'Greater recruitment leads to greater force', 'Less recruitment gives more force', 'Always constant'],
        correct: 'Greater recruitment leads to greater force',
        explanation: 'Greater motor unit recruitment leads to greater force production in muscles.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_5',
        question: 'What is the difference between open and closed kinetic chain exercises?',
        options: ['No difference', 'Distal segment free (open) vs fixed (closed)', 'Different equipment', 'Different muscles'],
        correct: 'Distal segment free (open) vs fixed (closed)',
        explanation: 'In open chain exercises, the distal segment is free; in closed chain, it\'s fixed.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_6',
        question: 'How does the vestibular system affect athletic performance?',
        options: ['No effect', 'Controls balance and spatial orientation', 'Only affects hearing', 'Only affects vision'],
        correct: 'Controls balance and spatial orientation',
        explanation: 'The vestibular system is crucial for balance and spatial orientation during movement.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_7',
        question: 'What is the role of branched-chain amino acids (BCAAs) in sports nutrition?',
        options: ['No role', 'Support muscle protein synthesis and reduce exercise fatigue', 'Only for weight gain', 'Only for weight loss'],
        correct: 'Support muscle protein synthesis and reduce exercise fatigue',
        explanation: 'BCAAs support muscle protein synthesis and may help reduce exercise-induced fatigue.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_8',
        question: 'What is neural adaptation in strength training?',
        options: ['Muscle size increase only', 'Improved neural efficiency without muscle growth', 'Weight gain', 'Only in beginners'],
        correct: 'Improved neural efficiency without muscle growth',
        explanation: 'Neural adaptation involves improved neural efficiency leading to strength gains without muscle growth.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_9',
        question: 'What is the concept of rate of force development (RFD)?',
        options: ['How fast you run', 'How quickly force can be produced', 'Only for power lifting', 'Only for endurance'],
        correct: 'How quickly force can be produced',
        explanation: 'RFD measures how quickly an athlete can develop force, critical for explosive movements.',
        difficulty: 'hard'
      },
      {
        id: 'g11_pe_hard_10',
        question: 'What is the relationship between training impulse (TRIMP) and training load?',
        options: ['Unrelated', 'TRIMP quantifies internal training load based on intensity and duration', 'Only for heart rate', 'Only for professional athletes'],
        correct: 'TRIMP quantifies internal training load based on intensity and duration',
        explanation: 'TRIMP is a method to quantify internal training load based on exercise intensity and duration.',
        difficulty: 'hard'
      }
    ]
  }
];
