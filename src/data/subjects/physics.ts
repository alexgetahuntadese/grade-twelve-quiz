import { Chapter } from '../types';

export const physicsChapters: Chapter[] = [
  {
    id: 'mechanics',
    name: 'Mechanics',
    description: 'Motion, forces, and energy',
    questions: [
      {
        id: 'mech_1',
        question: 'What is the SI unit of force?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correct: 'Newton',
        explanation: 'The Newton (N) is the SI unit of force, defined as kg⋅m/s².',
        difficulty: 'easy'
      },
      {
        id: 'mech_2',
        question: 'What is the formula for acceleration?',
        options: ['a = v/t', 'a = Δv/Δt', 'a = d/t', 'a = F/v'],
        correct: 'a = Δv/Δt',
        explanation: 'Acceleration is the change in velocity over time.',
        difficulty: 'easy'
      },
      {
        id: 'mech_3',
        question: 'What is Newton\'s first law also known as?',
        options: ['Law of inertia', 'Law of acceleration', 'Law of action-reaction', 'Law of gravity'],
        correct: 'Law of inertia',
        explanation: 'Newton\'s first law states that an object at rest stays at rest, and an object in motion stays in motion.',
        difficulty: 'easy'
      },
      {
        id: 'mech_4',
        question: 'What is the acceleration due to gravity on Earth?',
        options: ['9.8 m/s²', '10 m/s²', '8.9 m/s²', '9.6 m/s²'],
        correct: '9.8 m/s²',
        explanation: 'The standard acceleration due to gravity on Earth is approximately 9.8 m/s².',
        difficulty: 'easy'
      },
      {
        id: 'mech_5',
        question: 'What type of quantity is velocity?',
        options: ['Scalar', 'Vector', 'Neither', 'Both'],
        correct: 'Vector',
        explanation: 'Velocity has both magnitude and direction, making it a vector quantity.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'thermodynamics',
    name: 'Thermodynamics',
    description: 'Heat, temperature, and energy transfer',
    questions: [
      {
        id: 'thermo_1',
        question: 'What is the SI unit of temperature?',
        options: ['Celsius', 'Fahrenheit', 'Kelvin', 'Rankine'],
        correct: 'Kelvin',
        explanation: 'Kelvin is the SI base unit of thermodynamic temperature.',
        difficulty: 'easy'
      },
      {
        id: 'thermo_2',
        question: 'What is absolute zero in Kelvin?',
        options: ['0 K', '-273 K', '273 K', '100 K'],
        correct: '0 K',
        explanation: 'Absolute zero is 0 K, the lowest possible temperature.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'waves',
    name: 'Waves and Sound',
    description: 'Wave properties, sound, and vibrations',
    questions: [
      {
        id: 'wave_1',
        question: 'What is the speed of sound in air at room temperature?',
        options: ['300 m/s', '343 m/s', '400 m/s', '500 m/s'],
        correct: '343 m/s',
        explanation: 'Sound travels at approximately 343 m/s in air at 20°C.',
        difficulty: 'easy'
      },
      {
        id: 'wave_2',
        question: 'What is the relationship between frequency and wavelength?',
        options: ['Directly proportional', 'Inversely proportional', 'No relationship', 'Exponential'],
        correct: 'Inversely proportional',
        explanation: 'As frequency increases, wavelength decreases: v = fλ.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'electricity',
    name: 'Electricity and Magnetism',
    description: 'Electric charges, circuits, and magnetic fields',
    questions: [
      {
        id: 'elec_1',
        question: 'What is the unit of electric current?',
        options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correct: 'Ampere',
        explanation: 'The ampere (A) is the SI unit of electric current.',
        difficulty: 'easy'
      },
      {
        id: 'elec_2',
        question: 'What is Ohm\'s law?',
        options: ['V = IR', 'V = I/R', 'I = VR', 'R = VI'],
        correct: 'V = IR',
        explanation: 'Ohm\'s law states that voltage equals current times resistance.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'optics',
    name: 'Optics',
    description: 'Light, reflection, refraction, and lenses',
    questions: [
      {
        id: 'opt_1',
        question: 'What is the speed of light in vacuum?',
        options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁹ m/s'],
        correct: '3 × 10⁸ m/s',
        explanation: 'Light travels at approximately 3 × 10⁸ meters per second in vacuum.',
        difficulty: 'easy'
      },
      {
        id: 'opt_2',
        question: 'What happens when light passes from air to water?',
        options: ['It speeds up', 'It slows down', 'Speed remains same', 'It stops'],
        correct: 'It slows down',
        explanation: 'Light slows down when entering a denser medium like water.',
        difficulty: 'easy'
      }
    ]
  },
  {
    id: 'modern_physics',
    name: 'Modern Physics',
    description: 'Quantum mechanics, relativity, and atomic physics',
    questions: [
      {
        id: 'mod_1',
        question: 'Who proposed the theory of relativity?',
        options: ['Newton', 'Einstein', 'Bohr', 'Planck'],
        correct: 'Einstein',
        explanation: 'Albert Einstein developed both special and general theories of relativity.',
        difficulty: 'easy'
      },
      {
        id: 'mod_2',
        question: 'What is a photon?',
        options: ['A particle of light', 'A type of atom', 'A wave', 'An electron'],
        correct: 'A particle of light',
        explanation: 'A photon is a quantum of electromagnetic radiation, or a particle of light.',
        difficulty: 'easy'
      }
    ]
  }
];
