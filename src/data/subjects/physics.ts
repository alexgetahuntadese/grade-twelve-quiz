
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

  // Grade 12 New Curriculum Units
  {
    id: 'grade12_application_physics',
    name: 'Grade 12: Application of Physics in Other Fields',
    description: 'Physics applications in engineering, medicine, technology, and daily life',
    questions: [
      // Easy Questions
      {
        id: 'g12_app_easy_1',
        question: 'What is medical physics?',
        options: ['Physics in hospitals', 'Application of physics principles in medicine', 'Study of doctors', 'Medical equipment'],
        correct: 'Application of physics principles in medicine',
        explanation: 'Medical physics applies physics principles and methods to medicine and healthcare.',
        difficulty: 'easy'
      },
      {
        id: 'g12_app_easy_2',
        question: 'Which imaging technique uses X-rays?',
        options: ['MRI', 'Ultrasound', 'CT scan', 'PET scan'],
        correct: 'CT scan',
        explanation: 'CT (Computed Tomography) scans use X-rays to create detailed images.',
        difficulty: 'easy'
      },
      {
        id: 'g12_app_easy_3',
        question: 'What principle do solar panels use?',
        options: ['Thermoelectric effect', 'Photoelectric effect', 'Magnetic induction', 'Nuclear fusion'],
        correct: 'Photoelectric effect',
        explanation: 'Solar panels convert light into electricity using the photoelectric effect.',
        difficulty: 'easy'
      },
      {
        id: 'g12_app_easy_4',
        question: 'Which technology uses laser physics?',
        options: ['Radio waves', 'Fiber optic communication', 'Sound waves', 'Magnetic fields'],
        correct: 'Fiber optic communication',
        explanation: 'Fiber optic communication uses laser light to transmit data.',
        difficulty: 'easy'
      },
      {
        id: 'g12_app_easy_5',
        question: 'What is biophysics?',
        options: ['Study of life', 'Physics of living systems', 'Medical treatment', 'Biology only'],
        correct: 'Physics of living systems',
        explanation: 'Biophysics applies physics principles to understand biological systems.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_app_med_1',
        question: 'How does MRI work?',
        options: ['X-rays', 'Sound waves', 'Magnetic fields and radio waves', 'Light rays'],
        correct: 'Magnetic fields and radio waves',
        explanation: 'MRI uses strong magnetic fields and radio waves to create detailed body images.',
        difficulty: 'medium'
      },
      {
        id: 'g12_app_med_2',
        question: 'What is the Doppler effect used for in medicine?',
        options: ['Blood flow measurement', 'Bone density', 'Temperature', 'Blood pressure'],
        correct: 'Blood flow measurement',
        explanation: 'Doppler ultrasound uses the Doppler effect to measure blood flow velocity.',
        difficulty: 'medium'
      },
      {
        id: 'g12_app_med_3',
        question: 'What physics principle explains GPS functionality?',
        options: ['Quantum mechanics', 'Relativity', 'Classical mechanics only', 'Thermodynamics'],
        correct: 'Relativity',
        explanation: 'GPS requires relativistic corrections for accurate positioning.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_app_hard_1',
        question: 'Why do GPS satellites need relativistic corrections?',
        options: ['Time dilation effects', 'Distance errors', 'Signal interference', 'Weather effects'],
        correct: 'Time dilation effects',
        explanation: 'GPS satellites experience time dilation due to their speed and gravitational field differences.',
        difficulty: 'hard'
      },
      {
        id: 'g12_app_hard_2',
        question: 'What is the half-life concept used for in medical imaging?',
        options: ['Radiation safety and tracer decay', 'Image quality', 'Patient comfort', 'Cost reduction'],
        correct: 'Radiation safety and tracer decay',
        explanation: 'Half-life determines how long radioactive tracers remain active in the body.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_two_dimensional_motion',
    name: 'Grade 12: Two-Dimensional Motion',
    description: 'Projectile motion, circular motion, and motion in two dimensions',
    questions: [
      // Easy Questions
      {
        id: 'g12_2d_easy_1',
        question: 'What is projectile motion?',
        options: ['Motion in a straight line', 'Motion under gravity influence', 'Circular motion', 'Random motion'],
        correct: 'Motion under gravity influence',
        explanation: 'Projectile motion is the motion of objects under the influence of gravity alone.',
        difficulty: 'easy'
      },
      {
        id: 'g12_2d_easy_2',
        question: 'What are the two components of projectile motion?',
        options: ['Up and down', 'Left and right', 'Horizontal and vertical', 'Fast and slow'],
        correct: 'Horizontal and vertical',
        explanation: 'Projectile motion can be analyzed in horizontal and vertical components.',
        difficulty: 'easy'
      },
      {
        id: 'g12_2d_easy_3',
        question: 'What is the horizontal acceleration of a projectile?',
        options: ['9.8 m/s²', '0 m/s²', 'Variable', 'Negative'],
        correct: '0 m/s²',
        explanation: 'Horizontal acceleration is zero (no horizontal forces acting).',
        difficulty: 'easy'
      },
      {
        id: 'g12_2d_easy_4',
        question: 'What is circular motion?',
        options: ['Motion in a circle', 'Motion in a line', 'Random motion', 'Oscillatory motion'],
        correct: 'Motion in a circle',
        explanation: 'Circular motion is movement along a circular path.',
        difficulty: 'easy'
      },
      {
        id: 'g12_2d_easy_5',
        question: 'What force keeps objects in circular motion?',
        options: ['Gravitational force', 'Centripetal force', 'Magnetic force', 'Electric force'],
        correct: 'Centripetal force',
        explanation: 'Centripetal force is required to keep objects moving in a circular path.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_2d_med_1',
        question: 'A projectile is launched at 45°. What is special about this angle?',
        options: ['Minimum range', 'Maximum range', 'Maximum height', 'Minimum time'],
        correct: 'Maximum range',
        explanation: 'A 45° launch angle gives maximum range for projectile motion.',
        difficulty: 'medium'
      },
      {
        id: 'g12_2d_med_2',
        question: 'What is the centripetal acceleration formula?',
        options: ['a = v²/r', 'a = vr', 'a = v/r', 'a = r/v'],
        correct: 'a = v²/r',
        explanation: 'Centripetal acceleration equals velocity squared divided by radius.',
        difficulty: 'medium'
      },
      {
        id: 'g12_2d_med_3',
        question: 'In uniform circular motion, what changes?',
        options: ['Speed', 'Direction of velocity', 'Both speed and direction', 'Neither'],
        correct: 'Direction of velocity',
        explanation: 'In uniform circular motion, speed is constant but direction changes continuously.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_2d_hard_1',
        question: 'A ball is thrown horizontally from 20m height with 15 m/s speed. What is the range?',
        options: ['30.3 m', '28.5 m', '32.1 m', '25.7 m'],
        correct: '30.3 m',
        explanation: 'Time = √(2h/g) = √(40/9.8) ≈ 2.02s, Range = vt = 15 × 2.02 ≈ 30.3m',
        difficulty: 'hard'
      },
      {
        id: 'g12_2d_hard_2',
        question: 'A car turns a 50m radius curve at 20 m/s. What is the centripetal acceleration?',
        options: ['8 m/s²', '6 m/s²', '10 m/s²', '12 m/s²'],
        correct: '8 m/s²',
        explanation: 'a = v²/r = (20)²/50 = 400/50 = 8 m/s²',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_fluid_mechanics',
    name: 'Grade 12: Fluid Mechanics',
    description: 'Properties of fluids, pressure, buoyancy, and fluid flow',
    questions: [
      // Easy Questions
      {
        id: 'g12_fluid_easy_1',
        question: 'What is a fluid?',
        options: ['Only liquids', 'Only gases', 'Liquids and gases', 'Only water'],
        correct: 'Liquids and gases',
        explanation: 'Fluids include both liquids and gases as they can flow.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fluid_easy_2',
        question: 'What is pressure?',
        options: ['Force per unit area', 'Force times area', 'Area per force', 'Force plus area'],
        correct: 'Force per unit area',
        explanation: 'Pressure is defined as force per unit area: P = F/A.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fluid_easy_3',
        question: 'What is the SI unit of pressure?',
        options: ['Newton', 'Pascal', 'Joule', 'Watt'],
        correct: 'Pascal',
        explanation: 'The SI unit of pressure is Pascal (Pa), which equals N/m².',
        difficulty: 'easy'
      },
      {
        id: 'g12_fluid_easy_4',
        question: 'What is buoyancy?',
        options: ['Sinking force', 'Upward force on submerged objects', 'Sideways force', 'Rotational force'],
        correct: 'Upward force on submerged objects',
        explanation: 'Buoyancy is the upward force exerted by fluids on submerged objects.',
        difficulty: 'easy'
      },
      {
        id: 'g12_fluid_easy_5',
        question: 'Who discovered the principle of buoyancy?',
        options: ['Newton', 'Archimedes', 'Pascal', 'Bernoulli'],
        correct: 'Archimedes',
        explanation: 'Archimedes discovered the principle of buoyancy, known as Archimedes\' principle.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_fluid_med_1',
        question: 'What is Archimedes\' principle?',
        options: ['Buoyant force equals weight of displaced fluid', 'Pressure increases with depth', 'Fluids flow faster in narrow tubes', 'All of the above'],
        correct: 'Buoyant force equals weight of displaced fluid',
        explanation: 'Archimedes\' principle states that buoyant force equals the weight of displaced fluid.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fluid_med_2',
        question: 'What is Pascal\'s law?',
        options: ['Pressure transmitted equally in all directions', 'Pressure varies with height', 'Pressure depends on velocity', 'Pressure is constant'],
        correct: 'Pressure transmitted equally in all directions',
        explanation: 'Pascal\'s law states that pressure applied to confined fluid is transmitted equally in all directions.',
        difficulty: 'medium'
      },
      {
        id: 'g12_fluid_med_3',
        question: 'What is Bernoulli\'s principle?',
        options: ['Pressure decreases as velocity increases', 'Pressure increases with depth', 'Pressure is constant in moving fluids', 'Pressure equals density'],
        correct: 'Pressure decreases as velocity increases',
        explanation: 'Bernoulli\'s principle states that as fluid velocity increases, pressure decreases.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_fluid_hard_1',
        question: 'A 2 kg object displaces 0.5 L of water. What is the buoyant force?',
        options: ['4.9 N', '9.8 N', '19.6 N', '2.45 N'],
        correct: '4.9 N',
        explanation: 'Buoyant force = ρ_water × V_displaced × g = 1000 × 0.0005 × 9.8 = 4.9 N',
        difficulty: 'hard'
      },
      {
        id: 'g12_fluid_hard_2',
        question: 'What is the pressure at 10m depth in water?',
        options: ['98 kPa', '198 kPa', '98 Pa', '1960 Pa'],
        correct: '198 kPa',
        explanation: 'P = P_atm + ρgh = 101.3 + (1000)(9.8)(10) = 101.3 + 98 = 199.3 ≈ 198 kPa',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_electromagnetism',
    name: 'Grade 12: Electromagnetism',
    description: 'Electric and magnetic fields, electromagnetic induction, and Maxwell\'s equations',
    questions: [
      // Easy Questions
      {
        id: 'g12_em_easy_1',
        question: 'What is electric current?',
        options: ['Stationary charges', 'Flow of electric charge', 'Electric potential', 'Magnetic field'],
        correct: 'Flow of electric charge',
        explanation: 'Electric current is the flow of electric charge through a conductor.',
        difficulty: 'easy'
      },
      {
        id: 'g12_em_easy_2',
        question: 'What is the unit of electric current?',
        options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
        correct: 'Ampere',
        explanation: 'The SI unit of electric current is the Ampere (A).',
        difficulty: 'easy'
      },
      {
        id: 'g12_em_easy_3',
        question: 'What is Ohm\'s law?',
        options: ['V = I/R', 'V = IR', 'V = I + R', 'V = I - R'],
        correct: 'V = IR',
        explanation: 'Ohm\'s law states that voltage equals current times resistance: V = IR.',
        difficulty: 'easy'
      },
      {
        id: 'g12_em_easy_4',
        question: 'What creates a magnetic field?',
        options: ['Stationary charges', 'Moving charges', 'Neutral particles', 'Photons'],
        correct: 'Moving charges',
        explanation: 'Moving electric charges (current) create magnetic fields.',
        difficulty: 'easy'
      },
      {
        id: 'g12_em_easy_5',
        question: 'What is electromagnetic induction?',
        options: ['Static electricity', 'Generating voltage from changing magnetic field', 'Constant current', 'Fixed magnetic field'],
        correct: 'Generating voltage from changing magnetic field',
        explanation: 'Electromagnetic induction generates voltage when magnetic field through a conductor changes.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_em_med_1',
        question: 'What is the power dissipated in a 10Ω resistor with 2A current?',
        options: ['20W', '40W', '5W', '10W'],
        correct: '40W',
        explanation: 'P = I²R = (2)²(10) = 40W',
        difficulty: 'medium'
      },
      {
        id: 'g12_em_med_2',
        question: 'What is Faraday\'s law?',
        options: ['F = ma', 'Induced EMF = -rate of change of magnetic flux', 'V = IR', 'E = mc²'],
        correct: 'Induced EMF = -rate of change of magnetic flux',
        explanation: 'Faraday\'s law states that induced EMF equals the negative rate of change of magnetic flux.',
        difficulty: 'medium'
      },
      {
        id: 'g12_em_med_3',
        question: 'What is Maxwell\'s contribution to electromagnetism?',
        options: ['Discovered electricity', 'Unified electricity and magnetism', 'Invented the motor', 'Found Ohm\'s law'],
        correct: 'Unified electricity and magnetism',
        explanation: 'Maxwell unified electricity and magnetism into electromagnetic theory.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_em_hard_1',
        question: 'What is the equivalent resistance of 6Ω and 3Ω resistors in parallel?',
        options: ['9Ω', '2Ω', '4.5Ω', '1.5Ω'],
        correct: '2Ω',
        explanation: '1/R_eq = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so R_eq = 2Ω',
        difficulty: 'hard'
      },
      {
        id: 'g12_em_hard_2',
        question: 'What is the direction of induced current according to Lenz\'s law?',
        options: ['Same as applied field', 'Opposes the change causing it', 'Random direction', 'Always clockwise'],
        correct: 'Opposes the change causing it',
        explanation: 'Lenz\'s law states that induced current flows in a direction to oppose the change that produced it.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_basics_electronics',
    name: 'Grade 12: Basics of Electronics',
    description: 'Electronic components, circuits, semiconductors, and digital electronics',
    questions: [
      // Easy Questions
      {
        id: 'g12_elec_easy_1',
        question: 'What is electronics?',
        options: ['Study of electricity only', 'Control of electric current flow', 'Building generators', 'Magnetic fields'],
        correct: 'Control of electric current flow',
        explanation: 'Electronics deals with the control and flow of electric current through devices.',
        difficulty: 'easy'
      },
      {
        id: 'g12_elec_easy_2',
        question: 'What is a semiconductor?',
        options: ['Perfect conductor', 'Perfect insulator', 'Material between conductor and insulator', 'Magnetic material'],
        correct: 'Material between conductor and insulator',
        explanation: 'Semiconductors have electrical conductivity between conductors and insulators.',
        difficulty: 'easy'
      },
      {
        id: 'g12_elec_easy_3',
        question: 'What is a diode?',
        options: ['Two terminal device allowing current in one direction', 'Three terminal device', 'Resistor', 'Capacitor'],
        correct: 'Two terminal device allowing current in one direction',
        explanation: 'A diode allows current to flow in only one direction.',
        difficulty: 'easy'
      },
      {
        id: 'g12_elec_easy_4',
        question: 'What is a transistor?',
        options: ['Two terminal device', 'Three terminal amplifying device', 'One terminal device', 'Four terminal device'],
        correct: 'Three terminal amplifying device',
        explanation: 'A transistor is a three-terminal device used for amplification and switching.',
        difficulty: 'easy'
      },
      {
        id: 'g12_elec_easy_5',
        question: 'What are the two main types of semiconductors?',
        options: ['P-type and N-type', 'Positive and negative', 'Big and small', 'Hot and cold'],
        correct: 'P-type and N-type',
        explanation: 'Semiconductors are doped to create P-type (positive) and N-type (negative) materials.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_elec_med_1',
        question: 'What is the function of a capacitor?',
        options: ['Stores electric charge', 'Amplifies signals', 'Converts AC to DC', 'Creates magnetic fields'],
        correct: 'Stores electric charge',
        explanation: 'Capacitors store electric charge and energy in an electric field.',
        difficulty: 'medium'
      },
      {
        id: 'g12_elec_med_2',
        question: 'What is digital electronics?',
        options: ['Analog signals only', 'Discrete signal levels (0 and 1)', 'Continuous signals', 'AC circuits only'],
        correct: 'Discrete signal levels (0 and 1)',
        explanation: 'Digital electronics uses discrete signal levels, typically 0 and 1 (binary).',
        difficulty: 'medium'
      },
      {
        id: 'g12_elec_med_3',
        question: 'What is the purpose of doping in semiconductors?',
        options: ['Change color', 'Alter electrical properties', 'Increase size', 'Reduce weight'],
        correct: 'Alter electrical properties',
        explanation: 'Doping adds impurities to pure semiconductors to change their electrical properties.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_elec_hard_1',
        question: 'In a P-N junction, what creates the depletion zone?',
        options: ['External voltage', 'Diffusion of charge carriers', 'Temperature', 'Light'],
        correct: 'Diffusion of charge carriers',
        explanation: 'The depletion zone forms due to diffusion of electrons and holes across the P-N junction.',
        difficulty: 'hard'
      },
      {
        id: 'g12_elec_hard_2',
        question: 'What is the main advantage of digital over analog systems?',
        options: ['Lower cost', 'Noise immunity and precise processing', 'Smaller size', 'Faster speed'],
        correct: 'Noise immunity and precise processing',
        explanation: 'Digital systems have better noise immunity and can process signals with high precision.',
        difficulty: 'hard'
      }
    ]
  }
];
