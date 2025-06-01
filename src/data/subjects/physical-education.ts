
import { Chapter } from '../types';

export const physicalEducationChapters: Chapter[] = [
  {
    id: 'fitness_health',
    name: 'Fitness and Health',
    description: 'Physical fitness, health, and wellness concepts',
    questions: [
      // Easy Questions
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
  }
];
