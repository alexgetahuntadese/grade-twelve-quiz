
import { Chapter } from '../types';

export const physicsChapters: Chapter[] = [
  {
    id: 'mechanics',
    name: 'Mechanics',
    description: 'Motion, forces, and energy',
    questions: [
      // Easy Questions
      {
        id: 'mech_1',
        question: 'What is the unit of force?',
        options: ['Joule', 'Newton', 'Watt', 'Pascal'],
        correct: 'Newton',
        explanation: 'The SI unit of force is the Newton (N).',
        difficulty: 'easy'
      },
      {
        id: 'mech_2',
        question: 'What is velocity?',
        options: ['Distance per time', 'Displacement per time', 'Force per mass', 'Energy per time'],
        correct: 'Displacement per time',
        explanation: 'Velocity is displacement divided by time, and it has direction.',
        difficulty: 'easy'
      },
      {
        id: 'mech_3',
        question: 'What is Newton\'s first law?',
        options: ['F = ma', 'Law of inertia', 'Action-reaction law', 'Law of gravitation'],
        correct: 'Law of inertia',
        explanation: 'Newton\'s first law states that objects at rest stay at rest unless acted upon by a force.',
        difficulty: 'easy'
      },
      {
        id: 'mech_4',
        question: 'What is acceleration due to gravity on Earth?',
        options: ['9.8 m/s', '9.8 m/s²', '9.8 N', '9.8 kg'],
        correct: '9.8 m/s²',
        explanation: 'Acceleration due to gravity is approximately 9.8 m/s².',
        difficulty: 'easy'
      },
      {
        id: 'mech_5',
        question: 'What is kinetic energy?',
        options: ['Energy of position', 'Energy of motion', 'Energy of rotation', 'Energy of vibration'],
        correct: 'Energy of motion',
        explanation: 'Kinetic energy is the energy an object has due to its motion.',
        difficulty: 'easy'
      },
      {
        id: 'mech_6',
        question: 'What is the formula for kinetic energy?',
        options: ['KE = mv', 'KE = ½mv²', 'KE = mgh', 'KE = Fd'],
        correct: 'KE = ½mv²',
        explanation: 'Kinetic energy equals half the mass times velocity squared.',
        difficulty: 'easy'
      },
      {
        id: 'mech_7',
        question: 'What is potential energy?',
        options: ['Energy of motion', 'Stored energy', 'Heat energy', 'Light energy'],
        correct: 'Stored energy',
        explanation: 'Potential energy is stored energy due to position or configuration.',
        difficulty: 'easy'
      },
      {
        id: 'mech_8',
        question: 'What is work?',
        options: ['Force times distance', 'Mass times acceleration', 'Energy times time', 'Power times time'],
        correct: 'Force times distance',
        explanation: 'Work is force applied over a distance: W = Fd.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'mech_med_1',
        question: 'A car accelerates from 0 to 30 m/s in 10 seconds. What is its acceleration?',
        options: ['3 m/s²', '30 m/s²', '10 m/s²', '300 m/s²'],
        correct: '3 m/s²',
        explanation: 'a = (v - u)/t = (30 - 0)/10 = 3 m/s²',
        difficulty: 'medium'
      },
      {
        id: 'mech_med_2',
        question: 'What is the momentum of a 5 kg object moving at 10 m/s?',
        options: ['50 kg⋅m/s', '15 kg⋅m/s', '2 kg⋅m/s', '0.5 kg⋅m/s'],
        correct: '50 kg⋅m/s',
        explanation: 'Momentum p = mv = 5 kg × 10 m/s = 50 kg⋅m/s',
        difficulty: 'medium'
      },
      {
        id: 'mech_med_3',
        question: 'If a 10 N force is applied over 5 meters, how much work is done?',
        options: ['2 J', '15 J', '50 J', '500 J'],
        correct: '50 J',
        explanation: 'Work = Force × distance = 10 N × 5 m = 50 J',
        difficulty: 'medium'
      },
      {
        id: 'mech_med_4',
        question: 'What is the centripetal force formula?',
        options: ['F = mv²/r', 'F = ma', 'F = mg', 'F = kx'],
        correct: 'F = mv²/r',
        explanation: 'Centripetal force equals mass times velocity squared divided by radius.',
        difficulty: 'medium'
      },
      {
        id: 'mech_med_5',
        question: 'A projectile is launched horizontally. What is its initial vertical velocity?',
        options: ['0 m/s', '9.8 m/s', 'Same as horizontal', 'Cannot determine'],
        correct: '0 m/s',
        explanation: 'For horizontal launch, initial vertical velocity is zero.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'mech_hard_1',
        question: 'A 2 kg ball is dropped from 20 m height. What is its velocity just before hitting the ground?',
        options: ['14 m/s', '20 m/s', '28 m/s', '40 m/s'],
        correct: '20 m/s',
        explanation: 'Using v² = u² + 2gh: v² = 0 + 2(9.8)(20) = 392, so v ≈ 20 m/s',
        difficulty: 'hard'
      },
      {
        id: 'mech_hard_2',
        question: 'Two objects collide elastically. What is conserved?',
        options: ['Only momentum', 'Only kinetic energy', 'Both momentum and kinetic energy', 'Neither'],
        correct: 'Both momentum and kinetic energy',
        explanation: 'In elastic collisions, both momentum and kinetic energy are conserved.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_waves_optics',
    name: 'Grade 11: Waves and Optics',
    description: 'Wave properties, sound, light, and optical phenomena',
    questions: [
      // Easy Questions
      {
        id: 'g11_waves_easy_1',
        question: 'What is the speed of light in vacuum?',
        options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁹ m/s'],
        correct: '3 × 10⁸ m/s',
        explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ m/s.',
        difficulty: 'easy'
      },
      {
        id: 'g11_waves_easy_2',
        question: 'What is the relationship between wave speed, frequency, and wavelength?',
        options: ['v = f/λ', 'v = fλ', 'v = f + λ', 'v = f - λ'],
        correct: 'v = fλ',
        explanation: 'Wave speed equals frequency times wavelength: v = fλ',
        difficulty: 'easy'
      },
      {
        id: 'g11_waves_easy_3',
        question: 'What type of wave is sound?',
        options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Standing'],
        correct: 'Longitudinal',
        explanation: 'Sound waves are longitudinal waves with compressions and rarefactions.',
        difficulty: 'easy'
      },
      {
        id: 'g11_waves_easy_4',
        question: 'What happens when light passes from air to water?',
        options: ['It speeds up', 'It slows down', 'Speed remains same', 'It stops'],
        correct: 'It slows down',
        explanation: 'Light slows down when entering a denser medium like water.',
        difficulty: 'easy'
      },
      {
        id: 'g11_waves_easy_5',
        question: 'What is refraction?',
        options: ['Bending of waves', 'Reflection of waves', 'Absorption of waves', 'Creation of waves'],
        correct: 'Bending of waves',
        explanation: 'Refraction is the bending of waves when they pass from one medium to another.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_waves_med_1',
        question: 'If a wave has frequency 50 Hz and wavelength 4 m, what is its speed?',
        options: ['200 m/s', '12.5 m/s', '54 m/s', '46 m/s'],
        correct: '200 m/s',
        explanation: 'v = fλ = 50 Hz × 4 m = 200 m/s',
        difficulty: 'medium'
      },
      {
        id: 'g11_waves_med_2',
        question: 'What is the refractive index of a medium if light speed in it is 2 × 10⁸ m/s?',
        options: ['1.5', '2.0', '0.67', '1.33'],
        correct: '1.5',
        explanation: 'n = c/v = (3 × 10⁸)/(2 × 10⁸) = 1.5',
        difficulty: 'medium'
      },
      {
        id: 'g11_waves_med_3',
        question: 'What is Snell\'s law?',
        options: ['n₁sin θ₁ = n₂sin θ₂', 'n₁cos θ₁ = n₂cos θ₂', 'n₁θ₁ = n₂θ₂', 'n₁/θ₁ = n₂/θ₂'],
        correct: 'n₁sin θ₁ = n₂sin θ₂',
        explanation: 'Snell\'s law relates the angles of incidence and refraction to refractive indices.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_waves_hard_1',
        question: 'Light travels from air (n=1) to glass (n=1.5) at 30° incidence. What is the refraction angle?',
        options: ['19.5°', '20°', '22.5°', '25°'],
        correct: '19.5°',
        explanation: 'Using Snell\'s law: sin θ₂ = (1 × sin 30°)/1.5 = 0.5/1.5 = 1/3, so θ₂ ≈ 19.5°',
        difficulty: 'hard'
      },
      {
        id: 'g11_waves_hard_2',
        question: 'What is the critical angle for total internal reflection from glass (n=1.5) to air?',
        options: ['41.8°', '45°', '48.6°', '60°'],
        correct: '41.8°',
        explanation: 'sin θc = n₂/n₁ = 1/1.5 = 2/3, so θc = arcsin(2/3) ≈ 41.8°',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_modern_physics',
    name: 'Grade 12: Modern Physics',
    description: 'Quantum mechanics, relativity, and atomic physics',
    questions: [
      // Easy Questions
      {
        id: 'g12_modern_easy_1',
        question: 'What is the photoelectric effect?',
        options: ['Emission of electrons by light', 'Emission of light by electrons', 'Bending of light', 'Reflection of light'],
        correct: 'Emission of electrons by light',
        explanation: 'The photoelectric effect is the emission of electrons when light hits a material.',
        difficulty: 'easy'
      },
      {
        id: 'g12_modern_easy_2',
        question: 'Who proposed the theory of relativity?',
        options: ['Newton', 'Einstein', 'Planck', 'Bohr'],
        correct: 'Einstein',
        explanation: 'Albert Einstein proposed both special and general theories of relativity.',
        difficulty: 'easy'
      },
      {
        id: 'g12_modern_easy_3',
        question: 'What is a photon?',
        options: ['A particle of light', 'A particle of sound', 'A type of electron', 'A type of proton'],
        correct: 'A particle of light',
        explanation: 'A photon is a quantum of electromagnetic radiation or a particle of light.',
        difficulty: 'easy'
      },
      {
        id: 'g12_modern_easy_4',
        question: 'What is Planck\'s constant approximately?',
        options: ['6.63 × 10⁻³⁴ J⋅s', '6.63 × 10⁻²⁷ J⋅s', '3 × 10⁸ m/s', '9.8 m/s²'],
        correct: '6.63 × 10⁻³⁴ J⋅s',
        explanation: 'Planck\'s constant h ≈ 6.63 × 10⁻³⁴ J⋅s',
        difficulty: 'easy'
      },
      {
        id: 'g12_modern_easy_5',
        question: 'What does E = mc² represent?',
        options: ['Mass-energy equivalence', 'Kinetic energy', 'Potential energy', 'Wave energy'],
        correct: 'Mass-energy equivalence',
        explanation: 'Einstein\'s equation shows the equivalence between mass and energy.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_modern_med_1',
        question: 'What is the energy of a photon with frequency 5 × 10¹⁴ Hz?',
        options: ['3.3 × 10⁻¹⁹ J', '6.6 × 10⁻¹⁹ J', '1.0 × 10⁻¹⁸ J', '3.3 × 10⁻²⁰ J'],
        correct: '3.3 × 10⁻¹⁹ J',
        explanation: 'E = hf = (6.63 × 10⁻³⁴)(5 × 10¹⁴) = 3.3 × 10⁻¹⁹ J',
        difficulty: 'medium'
      },
      {
        id: 'g12_modern_med_2',
        question: 'What is the de Broglie wavelength formula?',
        options: ['λ = h/p', 'λ = h/mv', 'λ = hf', 'λ = c/f'],
        correct: 'λ = h/p',
        explanation: 'de Broglie wavelength is λ = h/p where p is momentum',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_modern_hard_1',
        question: 'If an electron moves at 10⁶ m/s, what is its de Broglie wavelength?',
        options: ['7.3 × 10⁻¹⁰ m', '7.3 × 10⁻¹¹ m', '6.6 × 10⁻¹⁰ m', '6.6 × 10⁻¹¹ m'],
        correct: '7.3 × 10⁻¹⁰ m',
        explanation: 'λ = h/(mv) = (6.63×10⁻³⁴)/((9.1×10⁻³¹)(10⁶)) ≈ 7.3×10⁻¹⁰ m',
        difficulty: 'hard'
      },
      {
        id: 'g12_modern_hard_2',
        question: 'What is the binding energy if mass defect is 0.03 u?',
        options: ['27.9 MeV', '28.5 MeV', '30.0 MeV', '31.5 MeV'],
        correct: '27.9 MeV',
        explanation: 'BE = Δm × c² = 0.03 × 931.5 MeV/u = 27.9 MeV',
        difficulty: 'hard'
      }
    ]
  }
];
