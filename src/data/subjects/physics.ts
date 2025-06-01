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
      },
      {
        id: 'mech_6',
        question: 'What is the unit of work?',
        options: ['Newton', 'Joule', 'Watt', 'Pascal'],
        correct: 'Joule',
        explanation: 'The Joule (J) is the SI unit of work and energy.',
        difficulty: 'easy'
      },
      {
        id: 'mech_7',
        question: 'What is Newton\'s second law?',
        options: ['F = ma', 'E = mc²', 'p = mv', 'v = at'],
        correct: 'F = ma',
        explanation: 'Newton\'s second law states that force equals mass times acceleration.',
        difficulty: 'easy'
      },
      {
        id: 'mech_8',
        question: 'What is the formula for kinetic energy?',
        options: ['KE = mgh', 'KE = ½mv²', 'KE = Fd', 'KE = pt'],
        correct: 'KE = ½mv²',
        explanation: 'Kinetic energy equals one-half mass times velocity squared.',
        difficulty: 'easy'
      },
      {
        id: 'mech_9',
        question: 'What is the formula for momentum?',
        options: ['p = mv', 'p = ma', 'p = Ft', 'p = ½mv²'],
        correct: 'p = mv',
        explanation: 'Momentum equals mass times velocity.',
        difficulty: 'easy'
      },
      {
        id: 'mech_10',
        question: 'What type of energy does a stretched spring have?',
        options: ['Kinetic', 'Potential', 'Thermal', 'Nuclear'],
        correct: 'Potential',
        explanation: 'A stretched spring stores elastic potential energy.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'mech_m1',
        question: 'A 5 kg object accelerates at 2 m/s². What is the net force?',
        options: ['7 N', '10 N', '2.5 N', '3 N'],
        correct: '10 N',
        explanation: 'Using F = ma: F = 5 kg × 2 m/s² = 10 N.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m2',
        question: 'What is the momentum of a 2 kg object moving at 5 m/s?',
        options: ['10 kg⋅m/s', '2.5 kg⋅m/s', '7 kg⋅m/s', '25 kg⋅m/s'],
        correct: '10 kg⋅m/s',
        explanation: 'Momentum p = mv = 2 kg × 5 m/s = 10 kg⋅m/s.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m3',
        question: 'An object falls freely for 3 seconds. How far does it fall?',
        options: ['29.4 m', '44.1 m', '14.7 m', '88.2 m'],
        correct: '44.1 m',
        explanation: 'Using d = ½gt²: d = ½ × 9.8 × 3² = 44.1 m.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m4',
        question: 'What is the kinetic energy of a 4 kg object moving at 3 m/s?',
        options: ['18 J', '36 J', '12 J', '6 J'],
        correct: '18 J',
        explanation: 'KE = ½mv² = ½ × 4 × 3² = 18 J.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m5',
        question: 'A force of 20 N acts on an object for 4 seconds. What is the impulse?',
        options: ['80 N⋅s', '5 N⋅s', '24 N⋅s', '16 N⋅s'],
        correct: '80 N⋅s',
        explanation: 'Impulse = Force × time = 20 N × 4 s = 80 N⋅s.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m6',
        question: 'What is the period of a pendulum with length 1 m?',
        options: ['2.0 s', '1.0 s', 'π s', '2π s'],
        correct: '2.0 s',
        explanation: 'T = 2π√(L/g) = 2π√(1/9.8) ≈ 2.0 s.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m7',
        question: 'A 1000 kg car traveling at 20 m/s brakes to a stop in 100 m. What is the braking force?',
        options: ['2000 N', '1000 N', '200 N', '20000 N'],
        correct: '2000 N',
        explanation: 'Using v² = u² + 2as to find a, then F = ma. F = 1000 × 2 = 2000 N.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m8',
        question: 'What is the escape velocity from Earth\'s surface?',
        options: ['11.2 km/s', '7.9 km/s', '3.1 km/s', '25 km/s'],
        correct: '11.2 km/s',
        explanation: 'Earth\'s escape velocity is approximately 11.2 km/s.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m9',
        question: 'A spring with k = 100 N/m is compressed 0.2 m. What is the stored energy?',
        options: ['2 J', '10 J', '20 J', '4 J'],
        correct: '2 J',
        explanation: 'Elastic PE = ½kx² = ½ × 100 × 0.2² = 2 J.',
        difficulty: 'medium'
      },
      {
        id: 'mech_m10',
        question: 'What is the coefficient of friction if μ = 0.3 and normal force = 50 N?',
        options: ['15 N', '0.6 N', '150 N', '0.006 N'],
        correct: '15 N',
        explanation: 'Friction force = μN = 0.3 × 50 N = 15 N.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'mech_h1',
        question: 'A projectile is fired at 45° with initial velocity 20 m/s. What is its range?',
        options: ['40.8 m', '20.4 m', '81.6 m', '10.2 m'],
        correct: '40.8 m',
        explanation: 'Range = v₀²sin(2θ)/g = 400 × sin(90°)/9.8 = 40.8 m.',
        difficulty: 'hard'
      },
      {
        id: 'mech_h2',
        question: 'What is the moment of inertia of a solid sphere about its center?',
        options: ['⅖mr²', '½mr²', '⅔mr²', 'mr²'],
        correct: '⅖mr²',
        explanation: 'For a solid sphere rotating about its center, I = ⅖mr².',
        difficulty: 'hard'
      },
      {
        id: 'mech_h3',
        question: 'A 2 kg block on a frictionless incline (30°) accelerates down. What is the acceleration?',
        options: ['4.9 m/s²', '9.8 m/s²', '8.5 m/s²', '2.45 m/s²'],
        correct: '4.9 m/s²',
        explanation: 'a = g sin(θ) = 9.8 × sin(30°) = 9.8 × 0.5 = 4.9 m/s².',
        difficulty: 'hard'
      },
      {
        id: 'mech_h4',
        question: 'What is the angular velocity of Earth\'s rotation?',
        options: ['7.3 × 10⁻⁵ rad/s', '1.2 × 10⁻⁵ rad/s', '2.4 × 10⁻⁴ rad/s', '3.6 × 10⁻³ rad/s'],
        correct: '7.3 × 10⁻⁵ rad/s',
        explanation: 'ω = 2π/(24 × 3600) = 7.3 × 10⁻⁵ rad/s.',
        difficulty: 'hard'
      },
      {
        id: 'mech_h5',
        question: 'Two objects collide elastically. m₁ = 2 kg (v₁ = 4 m/s), m₂ = 3 kg (v₂ = 0). What is v₁ after collision?',
        options: ['-0.4 m/s', '0.4 m/s', '1.6 m/s', '-1.6 m/s'],
        correct: '-0.4 m/s',
        explanation: 'Using conservation laws for elastic collision: v₁f = [(m₁-m₂)/(m₁+m₂)]v₁i = -0.4 m/s.',
        difficulty: 'hard'
      },
      {
        id: 'mech_h6',
        question: 'What is the gravitational potential energy at height h = 2R above Earth\'s surface?',
        options: ['-mg R/3', '-2mgR/3', '-mgR/2', '-3mgR/2'],
        correct: '-mgR/3',
        explanation: 'PE = -GMm/(R+h) = -GMm/3R. At surface: -GMm/R = -mgR, so PE = -mgR/3.',
        difficulty: 'hard'
      },
      {
        id: 'mech_h7',
        question: 'A disk rolls without slipping down an incline. What fraction of its energy is rotational?',
        options: ['1/3', '1/2', '2/3', '1/4'],
        correct: '1/3',
        explanation: 'For rolling motion: KE_rot/KE_total = 1/(1 + mr²/I) = 1/3 for a disk.',
        difficulty: 'hard'
      },
      {
        id: 'mech_h8',
        question: 'What is the period of a simple harmonic oscillator with m = 2 kg and k = 8 N/m?',
        options: ['π s', '2π s', 'π/2 s', '4π s'],
        correct: 'π s',
        explanation: 'T = 2π√(m/k) = 2π√(2/8) = 2π√(1/4) = π s.',
        difficulty: 'hard'
      },
      {
        id: 'mech_h9',
        question: 'What is the centripetal acceleration of a satellite in circular orbit at radius 2R?',
        options: ['g/4', 'g/2', 'g', '2g'],
        correct: 'g/4',
        explanation: 'a_c = GM/r² = g(R/r)² = g(R/2R)² = g/4.',
        difficulty: 'hard'
      },
      {
        id: 'mech_h10',
        question: 'A rod of length L rotates about one end. What is its moment of inertia?',
        options: ['⅓mL²', '½mL²', '¼mL²', 'mL²'],
        correct: '⅓mL²',
        explanation: 'For a rod rotating about one end: I = ⅓mL².',
        difficulty: 'hard'
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
      },
      {
        id: 'thermo_3',
        question: 'What is the first law of thermodynamics?',
        options: ['Energy cannot be created or destroyed', 'Entropy always increases', 'Heat flows from hot to cold', 'PV = nRT'],
        correct: 'Energy cannot be created or destroyed',
        explanation: 'The first law states that energy is conserved in thermodynamic processes.',
        difficulty: 'easy'
      },
      {
        id: 'thermo_4',
        question: 'What is the unit of heat?',
        options: ['Calorie', 'Joule', 'Both A and B', 'Watt'],
        correct: 'Both A and B',
        explanation: 'Heat can be measured in joules (SI) or calories.',
        difficulty: 'easy'
      },
      {
        id: 'thermo_5',
        question: 'What happens to gas volume when temperature increases at constant pressure?',
        options: ['Increases', 'Decreases', 'Stays same', 'Depends on gas'],
        correct: 'Increases',
        explanation: 'By Charles\'s law, volume is directly proportional to temperature.',
        difficulty: 'easy'
      },
      {
        id: 'thermo_6',
        question: 'What is 0°C in Kelvin?',
        options: ['273 K', '0 K', '100 K', '373 K'],
        correct: '273 K',
        explanation: 'K = °C + 273.15, so 0°C = 273.15 K ≈ 273 K.',
        difficulty: 'easy'
      },
      {
        id: 'thermo_7',
        question: 'What is an adiabatic process?',
        options: ['No heat transfer', 'No work done', 'Constant temperature', 'Constant pressure'],
        correct: 'No heat transfer',
        explanation: 'In an adiabatic process, no heat is transferred (Q = 0).',
        difficulty: 'easy'
      },
      {
        id: 'thermo_8',
        question: 'What is the second law of thermodynamics about?',
        options: ['Energy conservation', 'Entropy increase', 'Temperature equilibrium', 'Pressure relationships'],
        correct: 'Entropy increase',
        explanation: 'The second law states that entropy of an isolated system always increases.',
        difficulty: 'easy'
      },
      {
        id: 'thermo_9',
        question: 'What is thermal equilibrium?',
        options: ['Same temperature', 'Same pressure', 'Same volume', 'Same energy'],
        correct: 'Same temperature',
        explanation: 'Thermal equilibrium occurs when objects have the same temperature.',
        difficulty: 'easy'
      },
      {
        id: 'thermo_10',
        question: 'What is the ideal gas law?',
        options: ['PV = nRT', 'E = mc²', 'F = ma', 'Q = mcΔT'],
        correct: 'PV = nRT',
        explanation: 'The ideal gas law relates pressure, volume, temperature, and amount of gas.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'thermo_m1',
        question: 'What is the efficiency of a Carnot engine between 300 K and 600 K?',
        options: ['50%', '25%', '75%', '33%'],
        correct: '50%',
        explanation: 'η = 1 - T_cold/T_hot = 1 - 300/600 = 0.5 = 50%.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m2',
        question: 'How much heat is needed to raise 2 kg of water by 10°C? (c = 4186 J/kg⋅K)',
        options: ['83,720 J', '41,860 J', '20,930 J', '167,440 J'],
        correct: '83,720 J',
        explanation: 'Q = mcΔT = 2 × 4186 × 10 = 83,720 J.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m3',
        question: 'What is the work done by 1 mole of ideal gas in isothermal expansion from V to 2V?',
        options: ['RT ln(2)', 'RT', '2RT', 'RT/2'],
        correct: 'RT ln(2)',
        explanation: 'For isothermal process: W = nRT ln(V_f/V_i) = RT ln(2).',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m4',
        question: 'What is the heat capacity of 3 moles of monatomic ideal gas at constant volume?',
        options: ['(3/2)R', '(5/2)R', '(9/2)R', '3R'],
        correct: '(9/2)R',
        explanation: 'C_V = nC_V,molar = 3 × (3/2)R = (9/2)R for monatomic gas.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m5',
        question: 'What is the change in internal energy for 1 mole of ideal gas heated from 300 K to 400 K?',
        options: ['(3/2)R × 100', '(5/2)R × 100', 'R × 100', '2R × 100'],
        correct: '(3/2)R × 100',
        explanation: 'ΔU = nC_V ΔT = 1 × (3/2)R × 100 for monatomic gas.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m6',
        question: 'What is the coefficient of performance for a refrigerator with T_hot = 300 K, T_cold = 250 K?',
        options: ['5', '6', '4', '∞'],
        correct: '5',
        explanation: 'COP = T_cold/(T_hot - T_cold) = 250/(300-250) = 5.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m7',
        question: 'What is the root mean square speed of oxygen molecules at 300 K? (M = 32 g/mol)',
        options: ['483 m/s', '517 m/s', '450 m/s', '400 m/s'],
        correct: '483 m/s',
        explanation: 'v_rms = √(3RT/M) = √(3×8.314×300/0.032) ≈ 483 m/s.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m8',
        question: 'What is the entropy change when 1 kg of ice melts at 0°C? (L_f = 334,000 J/kg)',
        options: ['1223 J/K', '334 J/K', '612 J/K', '2446 J/K'],
        correct: '1223 J/K',
        explanation: 'ΔS = Q/T = mL_f/T = 1×334,000/273 ≈ 1223 J/K.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m9',
        question: 'What is the pressure of 2 moles of ideal gas in 0.1 m³ at 300 K?',
        options: ['49,884 Pa', '24,942 Pa', '99,768 Pa', '12,471 Pa'],
        correct: '49,884 Pa',
        explanation: 'P = nRT/V = 2×8.314×300/0.1 = 49,884 Pa.',
        difficulty: 'medium'
      },
      {
        id: 'thermo_m10',
        question: 'What is the mean free path if molecular diameter is 2×10⁻¹⁰ m and number density is 10²⁵ m⁻³?',
        options: ['7.95×10⁻⁸ m', '3.98×10⁻⁸ m', '1.59×10⁻⁷ m', '5.96×10⁻⁸ m'],
        correct: '7.95×10⁻⁸ m',
        explanation: 'λ = 1/(√2 × π × d² × n) ≈ 7.95×10⁻⁸ m.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'thermo_h1',
        question: 'What is the Gibbs free energy change for a process with ΔH = -100 kJ, ΔS = -200 J/K at 298 K?',
        options: ['-40.4 kJ', '-159.6 kJ', '-140.4 kJ', '-59.6 kJ'],
        correct: '-40.4 kJ',
        explanation: 'ΔG = ΔH - TΔS = -100 - 298×(-0.2) = -100 + 59.6 = -40.4 kJ.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h2',
        question: 'What is the fugacity coefficient for a van der Waals gas at high pressure?',
        options: ['< 1', '> 1', '= 1', 'Can be either'],
        correct: '> 1',
        explanation: 'At high pressure, repulsive forces dominate, making fugacity > pressure, so φ > 1.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h3',
        question: 'What is the Joule-Thomson coefficient for an ideal gas?',
        options: ['0', 'Positive', 'Negative', 'Infinite'],
        correct: '0',
        explanation: 'For ideal gas, μ_JT = 0 because internal energy depends only on temperature.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h4',
        question: 'What is the third law of thermodynamics?',
        options: ['S → 0 as T → 0', 'ΔG = 0 at equilibrium', 'Heat engines need reservoirs', 'PV^γ = constant'],
        correct: 'S → 0 as T → 0',
        explanation: 'The third law states that entropy approaches zero as temperature approaches absolute zero.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h5',
        question: 'What is the compressibility factor Z for a van der Waals gas?',
        options: ['PV/nRT', '1 + B/V', '1 - b/V', '(V-nb)/V'],
        correct: 'PV/nRT',
        explanation: 'Z = PV/nRT for any real gas, including van der Waals gas.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h6',
        question: 'What is the Maxwell relation from dU = TdS - PdV?',
        options: ['(∂T/∂V)_S = -(∂P/∂S)_V', '(∂S/∂V)_T = (∂P/∂T)_V', '(∂T/∂P)_S = (∂V/∂S)_P', '(∂U/∂S)_V = T'],
        correct: '(∂T/∂V)_S = -(∂P/∂S)_V',
        explanation: 'From mixed partial derivatives of U: (∂²U/∂S∂V) = (∂²U/∂V∂S).',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h7',
        question: 'What is the critical exponent β for the order parameter near a phase transition?',
        options: ['1/2', '1/3', '1/8', '1'],
        correct: '1/3',
        explanation: 'For 3D Ising model, β ≈ 0.326 ≈ 1/3.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h8',
        question: 'What is the enthalpy of formation of H₂O(g) at 298 K?',
        options: ['-241.8 kJ/mol', '-285.8 kJ/mol', '241.8 kJ/mol', '0 kJ/mol'],
        correct: '-241.8 kJ/mol',
        explanation: 'Standard enthalpy of formation of water vapor is -241.8 kJ/mol.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h9',
        question: 'What is the Debye temperature for copper (θ_D ≈ 343 K)?',
        options: ['343 K', '273 K', '373 K', '298 K'],
        correct: '343 K',
        explanation: 'The Debye temperature characterizes the phonon spectrum of the solid.',
        difficulty: 'hard'
      },
      {
        id: 'thermo_h10',
        question: 'What is the chemical potential of an ideal gas?',
        options: ['μ = μ⁰ + RT ln(P)', 'μ = μ⁰ + RT ln(n)', 'μ = μ⁰ + kT ln(N)', 'μ = RT ln(V)'],
        correct: 'μ = μ⁰ + RT ln(P)',
        explanation: 'Chemical potential of ideal gas: μ = μ⁰(T) + RT ln(P/P⁰).',
        difficulty: 'hard'
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
      },
      {
        id: 'wave_3',
        question: 'What is the formula for wave speed?',
        options: ['v = fλ', 'v = f/λ', 'v = λ/f', 'v = f²λ'],
        correct: 'v = fλ',
        explanation: 'Wave speed equals frequency times wavelength.',
        difficulty: 'easy'
      },
      {
        id: 'wave_4',
        question: 'What type of wave requires a medium?',
        options: ['Electromagnetic', 'Light', 'Sound', 'Radio'],
        correct: 'Sound',
        explanation: 'Sound waves are mechanical waves that require a medium.',
        difficulty: 'easy'
      },
      {
        id: 'wave_5',
        question: 'What is the frequency of a wave with period 0.02 s?',
        options: ['50 Hz', '20 Hz', '0.02 Hz', '500 Hz'],
        correct: '50 Hz',
        explanation: 'Frequency f = 1/T = 1/0.02 = 50 Hz.',
        difficulty: 'easy'
      },
      {
        id: 'wave_6',
        question: 'What is amplitude?',
        options: ['Maximum displacement', 'Frequency', 'Wavelength', 'Period'],
        correct: 'Maximum displacement',
        explanation: 'Amplitude is the maximum displacement from equilibrium.',
        difficulty: 'easy'
      },
      {
        id: 'wave_7',
        question: 'What happens when waves overlap?',
        options: ['Interference', 'Reflection', 'Refraction', 'Absorption'],
        correct: 'Interference',
        explanation: 'When waves overlap, they interfere constructively or destructively.',
        difficulty: 'easy'
      },
      {
        id: 'wave_8',
        question: 'What is a longitudinal wave?',
        options: ['Vibration parallel to direction', 'Vibration perpendicular to direction', 'Circular vibration', 'No vibration'],
        correct: 'Vibration parallel to direction',
        explanation: 'In longitudinal waves, particles vibrate parallel to wave direction.',
        difficulty: 'easy'
      },
      {
        id: 'wave_9',
        question: 'What is the unit of frequency?',
        options: ['Hertz', 'Meter', 'Second', 'Joule'],
        correct: 'Hertz',
        explanation: 'Frequency is measured in Hertz (Hz), which is cycles per second.',
        difficulty: 'easy'
      },
      {
        id: 'wave_10',
        question: 'What type of wave is light?',
        options: ['Mechanical', 'Electromagnetic', 'Sound', 'Pressure'],
        correct: 'Electromagnetic',
        explanation: 'Light is an electromagnetic wave that can travel through vacuum.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'wave_m1',
        question: 'What is the wavelength of a 440 Hz sound wave in air?',
        options: ['0.78 m', '1.28 m', '0.56 m', '2.56 m'],
        correct: '0.78 m',
        explanation: 'λ = v/f = 343/440 ≈ 0.78 m.',
        difficulty: 'medium'
      },
      {
        id: 'wave_m2',
        question: 'What is the beat frequency when two waves of 440 Hz and 444 Hz interfere?',
        options: ['4 Hz', '442 Hz', '884 Hz', '2 Hz'],
        correct: '4 Hz',
        explanation: 'Beat frequency = |f₁ - f₂| = |440 - 444| = 4 Hz.',
        difficulty: 'medium'
      },
      {
        id: 'wave_m3',
        question: 'What is the intensity of a sound wave with amplitude 10⁻⁶ m at 1000 Hz?',
        options: ['Proportional to A²', 'Proportional to A', 'Proportional to f²', 'Constant'],
        correct: 'Proportional to A²',
        explanation: 'Intensity is proportional to amplitude squared: I ∝ A².',
        difficulty: 'medium'
      },
      {
        id: 'wave_m4',
        question: 'What is the Doppler shift for a source moving at 30 m/s toward a stationary observer?',
        options: ['f\' = f(v+v_s)/v', 'f\' = fv/(v-v_s)', 'f\' = fv/(v+v_s)', 'f\' = f(v-v_s)/v'],
        correct: 'f\' = fv/(v-v_s)',
        explanation: 'For source moving toward observer: f\' = fv/(v-v_s).',
        difficulty: 'medium'
      },
      {
        id: 'wave_m5',
        question: 'What is the fundamental frequency of a string with length 0.5 m and wave speed 400 m/s?',
        options: ['400 Hz', '200 Hz', '800 Hz', '100 Hz'],
        correct: '400 Hz',
        explanation: 'f₁ = v/(2L) = 400/(2×0.5) = 400 Hz.',
        difficulty: 'medium'
      },
      {
        id: 'wave_m6',
        question: 'What is the path difference for destructive interference?',
        options: ['nλ', '(n+½)λ', '2nλ', 'λ/2'],
        correct: '(n+½)λ',
        explanation: 'Destructive interference occurs when path difference is odd multiples of λ/2.',
        difficulty: 'medium'
      },
      {
        id: 'wave_m7',
        question: 'What is the wavelength of red light (f = 4.3 × 10¹⁴ Hz)?',
        options: ['700 nm', '500 nm', '400 nm', '600 nm'],
        correct: '700 nm',
        explanation: 'λ = c/f = 3×10⁸/(4.3×10¹⁴) ≈ 700×10⁻⁹ m = 700 nm.',
        difficulty: 'medium'
      },
      {
        id: 'wave_m8',
        question: 'What is the decibel level of a sound with intensity 10⁻⁶ W/m²?',
        options: ['60 dB', '30 dB', '90 dB', '120 dB'],
        correct: '60 dB',
        explanation: 'dB = 10 log(I/I₀) = 10 log(10⁻⁶/10⁻¹²) = 60 dB.',
        difficulty: 'medium'
      },
      {
        id: 'wave_m9',
        question: 'What is the phase difference between two points separated by λ/4?',
        options: ['π/2', 'π', '2π', 'π/4'],
        correct: 'π/2',
        explanation: 'Phase difference = 2π(path difference)/λ = 2π(λ/4)/λ = π/2.',
        difficulty: 'medium'
      },
      {
        id: 'wave_m10',
        question: 'What is the speed of electromagnetic waves in a medium with n = 1.5?',
        options: ['2×10⁸ m/s', '3×10⁸ m/s', '4.5×10⁸ m/s', '1.5×10⁸ m/s'],
        correct: '2×10⁸ m/s',
        explanation: 'v = c/n = 3×10⁸/1.5 = 2×10⁸ m/s.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'wave_h1',
        question: 'What is the group velocity of a wave packet with ω = k² in a dispersive medium?',
        options: ['2k', 'k²', 'k', '2ω/k'],
        correct: '2k',
        explanation: 'v_g = dω/dk. If ω = k², then v_g = d(k²)/dk = 2k.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h2',
        question: 'What is the phase velocity of deep water waves?',
        options: ['√(gλ/2π)', '√(g/k)', '√(gk)', '√(2πg/λ)'],
        correct: '√(g/k)',
        explanation: 'For deep water waves: v_p = √(g/k) = √(gλ/2π).',
        difficulty: 'hard'
      },
      {
        id: 'wave_h3',
        question: 'What is the dispersion relation for electromagnetic waves in plasma?',
        options: ['ω² = c²k² + ω_p²', 'ω² = c²k²', 'ω = ck', 'ω² = ω_p² + c²k²'],
        correct: 'ω² = c²k² + ω_p²',
        explanation: 'In plasma: ω² = ω_p² + c²k², where ω_p is plasma frequency.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h4',
        question: 'What is the Rayleigh criterion for resolution?',
        options: ['θ = 1.22λ/D', 'θ = λ/D', 'θ = 2.44λ/D', 'θ = 0.61λ/D'],
        correct: 'θ = 1.22λ/D',
        explanation: 'Rayleigh criterion for circular aperture: θ = 1.22λ/D.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h5',
        question: 'What is the polarization of light reflected at Brewster\'s angle?',
        options: ['Linear perpendicular', 'Linear parallel', 'Circular', 'Elliptical'],
        correct: 'Linear perpendicular',
        explanation: 'At Brewster\'s angle, reflected light is linearly polarized perpendicular to incident plane.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h6',
        question: 'What is the wave impedance of free space?',
        options: ['377 Ω', '120π Ω', '√(μ₀/ε₀)', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Z₀ = √(μ₀/ε₀) = 120π ≈ 377 Ω.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h7',
        question: 'What is the Q factor of a damped harmonic oscillator?',
        options: ['ω₀/(2γ)', '2γ/ω₀', 'ω₀/γ', 'γ/ω₀'],
        correct: 'ω₀/(2γ)',
        explanation: 'Quality factor Q = ω₀/(2γ), where γ is damping coefficient.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h8',
        question: 'What is the cutoff frequency for TE₁₀ mode in rectangular waveguide?',
        options: ['c/(2a)', 'c/a', 'c/(2b)', 'πc/(2a)'],
        correct: 'c/(2a)',
        explanation: 'For TE₁₀ mode: f_c = c/(2a), where a is the larger dimension.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h9',
        question: 'What is the Fresnel number for a circular aperture?',
        options: ['a²/(λz)', 'a²/(2λz)', 'a/(λz)', '2a²/(λz)'],
        correct: 'a²/(λz)',
        explanation: 'Fresnel number F = a²/(λz) for circular aperture radius a.',
        difficulty: 'hard'
      },
      {
        id: 'wave_h10',
        question: 'What is the group velocity dispersion parameter β₂?',
        options: ['d²k/dω²', 'd²ω/dk²', '-λ³/(2πc²)d²n/dλ²', 'dv_g/dω'],
        correct: 'd²k/dω²',
        explanation: 'β₂ = d²k/dω² is the group velocity dispersion parameter.',
        difficulty: 'hard'
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
      },
      {
        id: 'elec_3',
        question: 'What is the unit of electric charge?',
        options: ['Coulomb', 'Ampere', 'Volt', 'Farad'],
        correct: 'Coulomb',
        explanation: 'The coulomb (C) is the SI unit of electric charge.',
        difficulty: 'easy'
      },
      {
        id: 'elec_4',
        question: 'What is the unit of resistance?',
        options: ['Ohm', 'Volt', 'Ampere', 'Watt'],
        correct: 'Ohm',
        explanation: 'The ohm (Ω) is the SI unit of electrical resistance.',
        difficulty: 'easy'
      },
      {
        id: 'elec_5',
        question: 'What is the unit of electric potential?',
        options: ['Volt', 'Ampere', 'Coulomb', 'Joule'],
        correct: 'Volt',
        explanation: 'The volt (V) is the SI unit of electric potential.',
        difficulty: 'easy'
      },
      {
        id: 'elec_6',
        question: 'What happens to current in a series circuit?',
        options: ['Same everywhere', 'Divides at branches', 'Increases', 'Decreases'],
        correct: 'Same everywhere',
        explanation: 'In a series circuit, current is the same through all components.',
        difficulty: 'easy'
      },
      {
        id: 'elec_7',
        question: 'What is Coulomb\'s law?',
        options: ['F = kq₁q₂/r²', 'F = ma', 'V = IR', 'E = mc²'],
        correct: 'F = kq₁q₂/r²',
        explanation: 'Coulomb\'s law describes the force between electric charges.',
        difficulty: 'easy'
      },
      {
        id: 'elec_8',
        question: 'What is the direction of conventional current?',
        options: ['Positive to negative', 'Negative to positive', 'Random', 'Circular'],
        correct: 'Positive to negative',
        explanation: 'Conventional current flows from positive to negative terminal.',
        difficulty: 'easy'
      },
      {
        id: 'elec_9',
        question: 'What is an electric field?',
        options: ['Force per unit charge', 'Charge per unit force', 'Energy per charge', 'Current per voltage'],
        correct: 'Force per unit charge',
        explanation: 'Electric field is defined as force per unit positive charge.',
        difficulty: 'easy'
      },
      {
        id: 'elec_10',
        question: 'What is the unit of power?',
        options: ['Watt', 'Joule', 'Volt', 'Ampere'],
        correct: 'Watt',
        explanation: 'The watt (W) is the SI unit of power.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'elec_m1',
        question: 'What is the equivalent resistance of 6Ω and 3Ω resistors in parallel?',
        options: ['2Ω', '9Ω', '4.5Ω', '1.5Ω'],
        correct: '2Ω',
        explanation: '1/R = 1/6 + 1/3 = 1/6 + 2/6 = 3/6 = 1/2, so R = 2Ω.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m2',
        question: 'What is the power dissipated by a 10Ω resistor with 2A current?',
        options: ['40W', '20W', '5W', '200W'],
        correct: '40W',
        explanation: 'P = I²R = 2² × 10 = 40W.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m3',
        question: 'What is the electric field at distance r from a point charge Q?',
        options: ['kQ/r²', 'kQ/r', 'Q/r²', 'kQ²/r'],
        correct: 'kQ/r²',
        explanation: 'Electric field E = kQ/r² from Coulomb\'s law.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m4',
        question: 'What is the capacitance of parallel plates with area A, separation d?',
        options: ['ε₀A/d', 'ε₀d/A', 'A/(ε₀d)', 'd/(ε₀A)'],
        correct: 'ε₀A/d',
        explanation: 'For parallel plate capacitor: C = ε₀A/d.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m5',
        question: 'What is the energy stored in a capacitor?',
        options: ['½CV²', 'CV²', '½QV', 'Both A and C'],
        correct: 'Both A and C',
        explanation: 'Energy U = ½CV² = ½QV = Q²/(2C).',
        difficulty: 'medium'
      },
      {
        id: 'elec_m6',
        question: 'What is the force on a current-carrying wire in a magnetic field?',
        options: ['F = BIL sin θ', 'F = BIL', 'F = BIL cos θ', 'F = BI/L'],
        correct: 'F = BIL sin θ',
        explanation: 'Force on current-carrying conductor: F = BIL sin θ.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m7',
        question: 'What is the magnetic field inside a solenoid?',
        options: ['μ₀nI', 'μ₀I/n', 'nI/μ₀', 'μ₀In'],
        correct: 'μ₀nI',
        explanation: 'Inside solenoid: B = μ₀nI, where n is turns per unit length.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m8',
        question: 'What is the induced EMF in a loop according to Faraday\'s law?',
        options: ['ε = -dΦ/dt', 'ε = dΦ/dt', 'ε = Φ/t', 'ε = BLv'],
        correct: 'ε = -dΦ/dt',
        explanation: 'Faraday\'s law: ε = -dΦ/dt, where Φ is magnetic flux.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m9',
        question: 'What is the time constant of an RC circuit?',
        options: ['RC', 'R/C', 'C/R', '1/(RC)'],
        correct: 'RC',
        explanation: 'Time constant τ = RC for RC circuits.',
        difficulty: 'medium'
      },
      {
        id: 'elec_m10',
        question: 'What is the reactance of a 10mH inductor at 60Hz?',
        options: ['3.77Ω', '37.7Ω', '0.377Ω', '377Ω'],
        correct: '3.77Ω',
        explanation: 'X_L = ωL = 2π × 60 × 0.01 = 3.77Ω.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'elec_h1',
        question: 'What is the displacement current density?',
        options: ['ε₀∂E/∂t', 'σE', 'J', 'ε₀E'],
        correct: 'ε₀∂E/∂t',
        explanation: 'Displacement current density J_D = ε₀∂E/∂t from Maxwell\'s equations.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h2',
        question: 'What is the Poynting vector?',
        options: ['E × H', 'E × B/μ₀', 'ExB/(μ₀c²)', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Poynting vector S = E × H = E × B/μ₀ represents energy flux.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h3',
        question: 'What is the skin depth in a conductor?',
        options: ['√(2/(ωμσ))', '√(ωμσ/2)', '1/√(ωμσ)', '√(2ωμσ)'],
        correct: '√(2/(ωμσ))',
        explanation: 'Skin depth δ = √(2/(ωμσ)) for electromagnetic waves in conductor.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h4',
        question: 'What is the Hall coefficient?',
        options: ['1/(ne)', 'ne', 'E_H/(jB)', 'R_H = 1/(ne)'],
        correct: '1/(ne)',
        explanation: 'Hall coefficient R_H = 1/(ne) for simple metals.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h5',
        question: 'What is the cyclotron frequency?',
        options: ['eB/m', 'eB/(2πm)', 'eBm', 'eB/mc'],
        correct: 'eB/m',
        explanation: 'Cyclotron frequency ω_c = eB/m for charged particle in magnetic field.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h6',
        question: 'What is the mutual inductance between two coils?',
        options: ['M₁₂ = Φ₁₂/I₂', 'M₁₂ = k√(L₁L₂)', 'M₁₂ = M₂₁', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Mutual inductance has all these equivalent definitions.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h7',
        question: 'What is the characteristic impedance of a transmission line?',
        options: ['√(L/C)', '√(R/G)', '√(LC)', '√(L/C) per unit length'],
        correct: '√(L/C)',
        explanation: 'Characteristic impedance Z₀ = √(L/C) for lossless transmission line.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h8',
        question: 'What is the plasma frequency?',
        options: ['√(ne²/(ε₀m))', '√(ne²/(μ₀m))', 'ne²/(ε₀m)', '√(nme²/ε₀)'],
        correct: '√(ne²/(ε₀m))',
        explanation: 'Plasma frequency ω_p = √(ne²/(ε₀m)) for electron plasma.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h9',
        question: 'What is the London penetration depth?',
        options: ['√(mc²/(4πnse²))', '√(m/(μ₀nse²))', 'Both A and B', 'c/ω_p'],
        correct: 'Both A and B',
        explanation: 'London penetration depth λ_L = √(m/(μ₀nse²)) in superconductors.',
        difficulty: 'hard'
      },
      {
        id: 'elec_h10',
        question: 'What is the Debye length in plasma?',
        options: ['√(ε₀kT/(ne²))', '√(kT/(4πne²))', 'c/ω_p', 'Both A and B'],
        correct: '√(ε₀kT/(ne²))',
        explanation: 'Debye length λ_D = √(ε₀kT/(ne²)) characterizes charge screening.',
        difficulty: 'hard'
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
      },
      {
        id: 'opt_3',
        question: 'What is the law of reflection?',
        options: ['Angle of incidence = angle of reflection', 'Angle of incidence = 2 × angle of reflection', 'Angles are unrelated', 'Angle of incidence = 90°'],
        correct: 'Angle of incidence = angle of reflection',
        explanation: 'The law of reflection states that the angle of incidence equals the angle of reflection.',
        difficulty: 'easy'
      },
      {
        id: 'opt_4',
        question: 'What is refraction?',
        options: ['Bending of light', 'Reflection of light', 'Absorption of light', 'Emission of light'],
        correct: 'Bending of light',
        explanation: 'Refraction is the bending of light when it passes from one medium to another.',
        difficulty: 'easy'
      },
      {
        id: 'opt_5',
        question: 'What type of lens converges light rays?',
        options: ['Concave', 'Convex', 'Plane', 'Cylindrical'],
        correct: 'Convex',
        explanation: 'A convex lens is thicker in the middle and converges light rays.',
        difficulty: 'easy'
      },
      {
        id: 'opt_6',
        question: 'What is the focal length?',
        options: ['Distance from lens to focal point', 'Diameter of lens', 'Thickness of lens', 'Curvature of lens'],
        correct: 'Distance from lens to focal point',
        explanation: 'Focal length is the distance from the lens center to the focal point.',
        difficulty: 'easy'
      },
      {
        id: 'opt_7',
        question: 'What causes dispersion?',
        options: ['Different speeds for different colors', 'Same speed for all colors', 'Absorption', 'Reflection'],
        correct: 'Different speeds for different colors',
        explanation: 'Dispersion occurs because different colors travel at different speeds in a medium.',
        difficulty: 'easy'
      },
      {
        id: 'opt_8',
        question: 'What is total internal reflection?',
        options: ['100% reflection at interface', 'Partial reflection', 'No reflection', 'Absorption'],
        correct: '100% reflection at interface',
        explanation: 'Total internal reflection occurs when all light is reflected at an interface.',
        difficulty: 'easy'
      },
      {
        id: 'opt_9',
        question: 'What type of image does a plane mirror form?',
        options: ['Virtual and upright', 'Real and inverted', 'Virtual and inverted', 'Real and upright'],
        correct: 'Virtual and upright',
        explanation: 'A plane mirror always forms a virtual, upright image.',
        difficulty: 'easy'
      },
      {
        id: 'opt_10',
        question: 'What is polarization?',
        options: ['Orientation of electric field', 'Color of light', 'Intensity of light', 'Speed of light'],
        correct: 'Orientation of electric field',
        explanation: 'Polarization refers to the orientation of the electric field vector.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'opt_m1',
        question: 'What is the refractive index of water if light speed in water is 2.25 × 10⁸ m/s?',
        options: ['1.33', '1.5', '1.0', '2.25'],
        correct: '1.33',
        explanation: 'n = c/v = 3×10⁸/(2.25×10⁸) = 1.33.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m2',
        question: 'What is Snell\'s law?',
        options: ['n₁sin θ₁ = n₂sin θ₂', 'n₁cos θ₁ = n₂cos θ₂', 'n₁ = n₂', 'θ₁ = θ₂'],
        correct: 'n₁sin θ₁ = n₂sin θ₂',
        explanation: 'Snell\'s law relates the angles and refractive indices at an interface.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m3',
        question: 'What is the critical angle for total internal reflection from water (n=1.33) to air?',
        options: ['48.6°', '30°', '45°', '60°'],
        correct: '48.6°',
        explanation: 'θc = arcsin(n₂/n₁) = arcsin(1/1.33) = 48.6°.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m4',
        question: 'What is the lens equation?',
        options: ['1/f = 1/do + 1/di', '1/f = 1/do - 1/di', 'f = do + di', 'f = do - di'],
        correct: '1/f = 1/do + 1/di',
        explanation: 'The lens equation relates focal length, object distance, and image distance.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m5',
        question: 'What is the magnification of a lens?',
        options: ['m = -di/do', 'm = do/di', 'm = f/do', 'm = di/f'],
        correct: 'm = -di/do',
        explanation: 'Magnification m = -di/do = hi/ho.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m6',
        question: 'What is Brewster\'s angle for glass (n=1.5) in air?',
        options: ['56.3°', '45°', '60°', '30°'],
        correct: '56.3°',
        explanation: 'θB = arctan(n₂/n₁) = arctan(1.5/1) = 56.3°.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m7',
        question: 'What is the power of a lens with focal length 0.25 m?',
        options: ['4 D', '0.25 D', '2 D', '8 D'],
        correct: '4 D',
        explanation: 'Power P = 1/f = 1/0.25 = 4 diopters.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m8',
        question: 'What is the path difference for constructive interference?',
        options: ['nλ', '(n+½)λ', 'λ/2', 'λ/4'],
        correct: 'nλ',
        explanation: 'Constructive interference occurs when path difference is integer multiples of λ.',
        difficulty: 'medium'
      },
      {
        id: 'opt_m9',
        question: 'What is the minimum thickness for destructive interference in thin films?',
        options: ['λ/(4n)', 'λ/(2n)', 'λ/n', '2λ/n'],
        correct: 'λ/(4n)',
        explanation: 'For destructive interference: 2nt = λ/2, so t_min = λ/(4n).',
        difficulty: 'medium'
      },
      {
        id: 'opt_m10',
        question: 'What is the numerical aperture of an optical fiber with core n₁=1.5, cladding n₂=1.45?',
        options: ['0.39', '0.5', '0.3', '1.0'],
        correct: '0.39',
        explanation: 'NA = √(n₁² - n₂²) = √(1.5² - 1.45²) = 0.39.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'opt_h1',
        question: 'What is the Fresnel coefficient for s-polarized reflection?',
        options: ['rs = (n₁cosθᵢ - n₂cosθₜ)/(n₁cosθᵢ + n₂cosθₜ)', 'rs = (n₂cosθᵢ - n₁cosθₜ)/(n₂cosθᵢ + n₁cosθₜ)', 'rs = sinθᵢ/sinθₜ', 'rs = 1'],
        correct: 'rs = (n₁cosθᵢ - n₂cosθₜ)/(n₁cosθᵢ + n₂cosθₜ)',
        explanation: 'Fresnel coefficient for s-polarized reflection at dielectric interface.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h2',
        question: 'What is the coherence length of light with bandwidth Δλ = 1 nm at λ = 500 nm?',
        options: ['0.25 mm', '0.5 mm', '1 mm', '2 mm'],
        correct: '0.25 mm',
        explanation: 'lc = λ²/Δλ = (500×10⁻⁹)²/(1×10⁻⁹) = 0.25 mm.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h3',
        question: 'What is the group velocity in a dispersive medium?',
        options: ['vg = c/(n + ω dn/dω)', 'vg = c/n', 'vg = c', 'vg = c(n + ω dn/dω)'],
        correct: 'vg = c/(n + ω dn/dω)',
        explanation: 'Group velocity accounts for dispersion: vg = c/(n + ω dn/dω).',
        difficulty: 'hard'
      },
      {
        id: 'opt_h4',
        question: 'What is the resolving power of a diffraction grating?',
        options: ['R = mN', 'R = N/m', 'R = λ/Δλ', 'Both A and C'],
        correct: 'Both A and C',
        explanation: 'Resolving power R = λ/Δλ = mN for grating with N lines in mth order.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h5',
        question: 'What is the Malus law for polarizers?',
        options: ['I = I₀cos²θ', 'I = I₀cosθ', 'I = I₀sin²θ', 'I = I₀sinθ'],
        correct: 'I = I₀cos²θ',
        explanation: 'Malus law: intensity through polarizer I = I₀cos²θ.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h6',
        question: 'What is the Sellmeier equation for dispersion?',
        options: ['n²(λ) = 1 + Σ Aᵢλ²/(λ² - λᵢ²)', 'n(λ) = A + B/λ²', 'n(λ) = constant', 'n²(λ) = 1 + A/λ²'],
        correct: 'n²(λ) = 1 + Σ Aᵢλ²/(λ² - λᵢ²)',
        explanation: 'Sellmeier equation describes wavelength dependence of refractive index.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h7',
        question: 'What is the Q factor of a Fabry-Perot cavity?',
        options: ['Q = 2πL/(λ(1-R))', 'Q = πL/(λ(1-R))', 'Q = L/λ', 'Q = R/(1-R)'],
        correct: 'Q = 2πL/(λ(1-R))',
        explanation: 'Quality factor of Fabry-Perot cavity with reflectivity R.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h8',
        question: 'What is the Jones vector for circularly polarized light?',
        options: ['(1/√2)[1, ±i]ᵀ', '(1/√2)[1, ±1]ᵀ', '[1, 0]ᵀ', '[0, 1]ᵀ'],
        correct: '(1/√2)[1, ±i]ᵀ',
        explanation: 'Circular polarization has Jones vector (1/√2)[1, ±i]ᵀ for right/left.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h9',
        question: 'What is the Verdet constant in Faraday rotation?',
        options: ['V = (μ₀λ/2πn)(dn/dB)', 'V = λdn/dB', 'V = dn/dB', 'V = n/B'],
        correct: 'V = (μ₀λ/2πn)(dn/dB)',
        explanation: 'Verdet constant relates rotation angle to magnetic field in Faraday effect.',
        difficulty: 'hard'
      },
      {
        id: 'opt_h10',
        question: 'What is the nonlinear refractive index coefficient γ in Kerr effect?',
        options: ['γ = n₂/I', 'γ = n₂I', 'γ = I/n₂', 'γ = n₂'],
        correct: 'γ = n₂/I',
        explanation: 'Kerr coefficient γ = n₂/I where n = n₀ + n₂I.',
        difficulty: 'hard'
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
      },
      {
        id: 'mod_3',
        question: 'What is Einstein\'s mass-energy equation?',
        options: ['E = mc²', 'E = ½mv²', 'E = hf', 'E = mgh'],
        correct: 'E = mc²',
        explanation: 'Einstein\'s famous equation relates mass and energy.',
        difficulty: 'easy'
      },
      {
        id: 'mod_4',
        question: 'What is Planck\'s constant approximately?',
        options: ['6.63 × 10⁻³⁴ J⋅s', '3 × 10⁸ m/s', '9.8 m/s²', '1.6 × 10⁻¹⁹ C'],
        correct: '6.63 × 10⁻³⁴ J⋅s',
        explanation: 'Planck\'s constant h ≈ 6.63 × 10⁻³⁴ J⋅s.',
        difficulty: 'easy'
      },
      {
        id: 'mod_5',
        question: 'What is the photoelectric effect?',
        options: ['Emission of electrons by light', 'Absorption of light', 'Reflection of light', 'Refraction of light'],
        correct: 'Emission of electrons by light',
        explanation: 'The photoelectric effect is the emission of electrons when light hits a material.',
        difficulty: 'easy'
      },
      {
        id: 'mod_6',
        question: 'What principle states that you cannot know both position and momentum precisely?',
        options: ['Uncertainty principle', 'Relativity principle', 'Conservation principle', 'Superposition principle'],
        correct: 'Uncertainty principle',
        explanation: 'Heisenberg\'s uncertainty principle limits simultaneous knowledge of position and momentum.',
        difficulty: 'easy'
      },
      {
        id: 'mod_7',
        question: 'What is the speed limit of the universe?',
        options: ['Speed of sound', 'Speed of light', 'Speed of electricity', 'No limit'],
        correct: 'Speed of light',
        explanation: 'The speed of light in vacuum is the ultimate speed limit.',
        difficulty: 'easy'
      },
      {
        id: 'mod_8',
        question: 'What is antimatter?',
        options: ['Matter with opposite charge', 'Dark matter', 'Heavy matter', 'Invisible matter'],
        correct: 'Matter with opposite charge',
        explanation: 'Antimatter particles have opposite charge to their matter counterparts.',
        difficulty: 'easy'
      },
      {
        id: 'mod_9',
        question: 'What is the energy of a photon?',
        options: ['E = hf', 'E = mc²', 'E = ½mv²', 'E = mgh'],
        correct: 'E = hf',
        explanation: 'Photon energy is given by Planck\'s equation E = hf.',
        difficulty: 'easy'
      },
      {
        id: 'mod_10',
        question: 'What does quantum mean?',
        options: ['Discrete packet', 'Continuous wave', 'Large amount', 'Small particle'],
        correct: 'Discrete packet',
        explanation: 'Quantum refers to discrete, indivisible packets of energy.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'mod_m1',
        question: 'What is the de Broglie wavelength of an electron with momentum p?',
        options: ['λ = h/p', 'λ = p/h', 'λ = hp', 'λ = h/mv'],
        correct: 'λ = h/p',
        explanation: 'de Broglie wavelength λ = h/p for any particle.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m2',
        question: 'What is the time dilation factor in special relativity?',
        options: ['γ = 1/√(1-v²/c²)', 'γ = √(1-v²/c²)', 'γ = v/c', 'γ = c/v'],
        correct: 'γ = 1/√(1-v²/c²)',
        explanation: 'Lorentz factor γ accounts for time dilation and length contraction.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m3',
        question: 'What is the work function in photoelectric effect?',
        options: ['Minimum energy to remove electron', 'Maximum kinetic energy', 'Photon energy', 'Total energy'],
        correct: 'Minimum energy to remove electron',
        explanation: 'Work function φ is the minimum energy needed to remove an electron.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m4',
        question: 'What is the energy levels of hydrogen atom?',
        options: ['En = -13.6/n² eV', 'En = 13.6n² eV', 'En = -13.6n eV', 'En = 13.6/n eV'],
        correct: 'En = -13.6/n² eV',
        explanation: 'Hydrogen energy levels: En = -13.6/n² eV for principal quantum number n.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m5',
        question: 'What is the Compton wavelength shift?',
        options: ['Δλ = (h/mec)(1-cosθ)', 'Δλ = (h/mec)cosθ', 'Δλ = h/mec', 'Δλ = (mec/h)(1-cosθ)'],
        correct: 'Δλ = (h/mec)(1-cosθ)',
        explanation: 'Compton scattering changes photon wavelength by Δλ = (h/mec)(1-cosθ).',
        difficulty: 'medium'
      },
      {
        id: 'mod_m6',
        question: 'What is the rest mass energy of an electron?',
        options: ['0.511 MeV', '1.02 MeV', '13.6 eV', '938 MeV'],
        correct: '0.511 MeV',
        explanation: 'Electron rest mass energy: E₀ = mec² = 0.511 MeV.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m7',
        question: 'What is the Schrödinger equation for a free particle?',
        options: ['iℏ∂ψ/∂t = -(ℏ²/2m)∇²ψ', 'iℏ∂ψ/∂t = Hψ', 'ψ = Ae^(ikx)', 'Both A and B'],
        correct: 'Both A and B',
        explanation: 'Time-dependent Schrödinger equation with Hamiltonian H = -ℏ²∇²/2m.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m8',
        question: 'What is the fine structure constant?',
        options: ['α = e²/(4πε₀ℏc) ≈ 1/137', 'α = ℏ/mc', 'α = v/c', 'α = E/mc²'],
        correct: 'α = e²/(4πε₀ℏc) ≈ 1/137',
        explanation: 'Fine structure constant α ≈ 1/137 characterizes electromagnetic interactions.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m9',
        question: 'What is the tunneling probability through a barrier?',
        options: ['T ∝ e^(-2κa)', 'T ∝ e^(2κa)', 'T ∝ κa', 'T = 1'],
        correct: 'T ∝ e^(-2κa)',
        explanation: 'Tunneling probability decreases exponentially with barrier width and height.',
        difficulty: 'medium'
      },
      {
        id: 'mod_m10',
        question: 'What is the blackbody radiation formula?',
        options: ['Planck distribution', 'Stefan-Boltzmann law', 'Wien displacement law', 'All of the above'],
        correct: 'All of the above',
        explanation: 'Blackbody radiation described by multiple related laws.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'mod_h1',
        question: 'What is the Klein-Gordon equation?',
        options: ['(□ + m²c²/ℏ²)ψ = 0', '(□ - m²c²/ℏ²)ψ = 0', 'iγμ∂μψ = mψ', '∇²ψ = 0'],
        correct: '(□ + m²c²/ℏ²)ψ = 0',
        explanation: 'Klein-Gordon equation for relativistic scalar particles.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h2',
        question: 'What is the Dirac equation?',
        options: ['(iγμ∂μ - m)ψ = 0', '(iγμ∂μ + m)ψ = 0', '∂μ∂μψ = m²ψ', 'iℏ∂ψ/∂t = Hψ'],
        correct: '(iγμ∂μ - m)ψ = 0',
        explanation: 'Dirac equation describes relativistic fermions like electrons.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h3',
        question: 'What is the vacuum expectation value in QFT?',
        options: ['⟨0|φ|0⟩', '⟨0|:φ²:|0⟩', '⟨0|T{φ(x)φ(y)}|0⟩', 'All possible'],
        correct: 'All possible',
        explanation: 'Various vacuum expectation values appear in quantum field theory.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h4',
        question: 'What is the Casimir effect?',
        options: ['Vacuum energy between plates', 'Spontaneous emission', 'Pair production', 'Virtual particles'],
        correct: 'Vacuum energy between plates',
        explanation: 'Casimir effect arises from vacuum fluctuations between conducting plates.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h5',
        question: 'What is the Berry phase?',
        options: ['Geometric phase in parameter space', 'Dynamic phase', 'Total phase', 'Initial phase'],
        correct: 'Geometric phase in parameter space',
        explanation: 'Berry phase is geometric phase acquired during adiabatic evolution.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h6',
        question: 'What is the path integral formulation?',
        options: ['∫Dφ e^(iS/ℏ)', '∫dx |ψ(x)|²', '∫dt L', '∫dp ψ*(p)ψ(p)'],
        correct: '∫Dφ e^(iS/ℏ)',
        explanation: 'Feynman path integral sums over all possible paths.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h7',
        question: 'What is the Standard Model gauge group?',
        options: ['SU(3)×SU(2)×U(1)', 'SU(5)', 'SO(10)', 'E₈×E₈'],
        correct: 'SU(3)×SU(2)×U(1)',
        explanation: 'Standard Model based on SU(3)×SU(2)×U(1) gauge symmetry.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h8',
        question: 'What is the Hawking temperature of a black hole?',
        options: ['T = ℏc³/(8πGMk)', 'T = GM/c²', 'T = c²/GM', 'T = ℏ/Gm'],
        correct: 'T = ℏc³/(8πGMk)',
        explanation: 'Hawking temperature inversely proportional to black hole mass.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h9',
        question: 'What is the cosmological constant problem?',
        options: ['Vacuum energy vs observed Λ', 'Dark matter density', 'Hubble constant', 'CMB temperature'],
        correct: 'Vacuum energy vs observed Λ',
        explanation: 'Huge discrepancy between predicted vacuum energy and observed cosmological constant.',
        difficulty: 'hard'
      },
      {
        id: 'mod_h10',
        question: 'What is the holographic principle?',
        options: ['3D info encoded on 2D surface', '2D info in 3D space', 'Information conservation', 'Entropy bounds'],
        correct: '3D info encoded on 2D surface',
        explanation: 'Holographic principle suggests 3D physics encoded on 2D boundary.',
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
        id: 'g11_wave_easy_1',
        question: 'What is the speed of light in vacuum?',
        options: ['3 × 10⁸ m/s', '3 × 10⁶ m/s', '3 × 10¹⁰ m/s', '3 × 10⁴ m/s'],
        correct: '3 × 10⁸ m/s',
        explanation: 'The speed of light in vacuum is approximately 3 × 10⁸ m/s',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_2',
        question: 'What is the relationship between frequency and wavelength?',
        options: ['Directly proportional', 'Inversely proportional', 'No relationship', 'Exponentially related'],
        correct: 'Inversely proportional',
        explanation: 'For waves, v = fλ, so f and λ are inversely proportional at constant speed',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_3',
        question: 'What type of wave is sound?',
        options: ['Transverse', 'Longitudinal', 'Electromagnetic', 'Surface'],
        correct: 'Longitudinal',
        explanation: 'Sound waves are longitudinal waves with compressions and rarefactions',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_4',
        question: 'What is the unit of frequency?',
        options: ['Meter', 'Second', 'Hertz', 'Joule'],
        correct: 'Hertz',
        explanation: 'Frequency is measured in Hertz (Hz), which is cycles per second',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_5',
        question: 'What happens when light passes from air to water?',
        options: ['It speeds up', 'It slows down', 'Speed remains constant', 'It stops'],
        correct: 'It slows down',
        explanation: 'Light slows down when entering a denser medium like water',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_6',
        question: 'What is reflection?',
        options: ['Bending of waves', 'Bouncing of waves', 'Absorption of waves', 'Creation of waves'],
        correct: 'Bouncing of waves',
        explanation: 'Reflection is the bouncing back of waves when they hit a surface',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_7',
        question: 'What is refraction?',
        options: ['Bouncing of waves', 'Bending of waves', 'Absorption of waves', 'Amplification of waves'],
        correct: 'Bending of waves',
        explanation: 'Refraction is the bending of waves when they pass from one medium to another',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_8',
        question: 'Which color has the longest wavelength in visible light?',
        options: ['Red', 'Blue', 'Green', 'Violet'],
        correct: 'Red',
        explanation: 'Red light has the longest wavelength in the visible spectrum',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_9',
        question: 'What is amplitude?',
        options: ['Wave speed', 'Maximum displacement', 'Wave frequency', 'Wave period'],
        correct: 'Maximum displacement',
        explanation: 'Amplitude is the maximum displacement from the equilibrium position',
        difficulty: 'easy'
      },
      {
        id: 'g11_wave_easy_10',
        question: 'What type of mirror produces virtual images?',
        options: ['Concave', 'Convex', 'Plane', 'All mirrors'],
        correct: 'Plane',
        explanation: 'Plane mirrors always produce virtual, upright images',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_wave_med_1',
        question: 'Calculate the wavelength of a wave with frequency 100 Hz and speed 340 m/s',
        options: ['3.4 m', '34 m', '0.34 m', '340 m'],
        correct: '3.4 m',
        explanation: 'λ = v/f = 340/100 = 3.4 m',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_2',
        question: 'What is the refractive index of a medium where light travels at 2 × 10⁸ m/s?',
        options: ['1.5', '2.0', '0.67', '1.0'],
        correct: '1.5',
        explanation: 'n = c/v = (3 × 10⁸)/(2 × 10⁸) = 1.5',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_3',
        question: 'What is the period of a wave with frequency 50 Hz?',
        options: ['0.02 s', '0.2 s', '2 s', '20 s'],
        correct: '0.02 s',
        explanation: 'T = 1/f = 1/50 = 0.02 s',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_4',
        question: 'Which phenomenon explains why we can hear around corners?',
        options: ['Reflection', 'Refraction', 'Diffraction', 'Interference'],
        correct: 'Diffraction',
        explanation: 'Diffraction allows sound waves to bend around obstacles and corners',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_5',
        question: 'What is the focal length of a concave mirror with radius of curvature 20 cm?',
        options: ['10 cm', '20 cm', '40 cm', '5 cm'],
        correct: '10 cm',
        explanation: 'Focal length f = R/2 = 20/2 = 10 cm for spherical mirrors',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_6',
        question: 'What happens at the critical angle?',
        options: ['Partial reflection', 'Total internal reflection', 'No reflection', 'Complete transmission'],
        correct: 'Total internal reflection',
        explanation: 'At the critical angle, total internal reflection begins to occur',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_7',
        question: 'Two waves interfere constructively. What is the resulting amplitude if each has amplitude 3 units?',
        options: ['0', '3', '6', '9'],
        correct: '6',
        explanation: 'Constructive interference: amplitudes add, so 3 + 3 = 6 units',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_8',
        question: 'What is the wavelength of red light with frequency 4.3 × 10¹⁴ Hz?',
        options: ['700 nm', '500 nm', '400 nm', '600 nm'],
        correct: '700 nm',
        explanation: 'λ = c/f = (3 × 10⁸)/(4.3 × 10¹⁴) ≈ 7 × 10⁻⁷ m = 700 nm',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_9',
        question: 'What is the magnification of a plane mirror?',
        options: ['-1', '1', '0', 'Infinite'],
        correct: '1',
        explanation: 'Plane mirrors produce images of the same size, so magnification = 1',
        difficulty: 'medium'
      },
      {
        id: 'g11_wave_med_10',
        question: 'What is the Doppler effect?',
        options: ['Change in amplitude', 'Change in frequency due to motion', 'Change in speed', 'Change in direction'],
        correct: 'Change in frequency due to motion',
        explanation: 'Doppler effect is the change in frequency due to relative motion between source and observer',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_wave_hard_1',
        question: 'Calculate the critical angle for light going from glass (n=1.5) to air (n=1.0)',
        options: ['41.8°', '30°', '45°', '60°'],
        correct: '41.8°',
        explanation: 'sin θc = n₂/n₁ = 1.0/1.5 = 0.667, so θc = arcsin(0.667) = 41.8°',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_2',
        question: 'A wave has frequency 200 Hz in air and 150 Hz in water. What is the refractive index of water?',
        options: ['1.33', '0.75', '1.5', '2.0'],
        explanation: 'n = f₁/f₂ = 200/150 = 1.33',
        correct: '1.33',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_3',
        question: 'What is the path difference for destructive interference?',
        options: ['nλ', '(n + 1/2)λ', 'λ/2', 'Both B and C'],
        correct: 'Both B and C',
        explanation: 'Destructive interference occurs when path difference = (n + 1/2)λ where n = 0,1,2...',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_4',
        question: 'An object is placed 15 cm from a concave mirror of focal length 10 cm. Where is the image?',
        options: ['30 cm', '6 cm', '15 cm', '20 cm'],
        correct: '30 cm',
        explanation: '1/f = 1/u + 1/v, so 1/10 = 1/15 + 1/v, solving gives v = 30 cm',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_5',
        question: 'What is the beat frequency when two waves of 440 Hz and 444 Hz interfere?',
        options: ['4 Hz', '440 Hz', '444 Hz', '884 Hz'],
        correct: '4 Hz',
        explanation: 'Beat frequency = |f₁ - f₂| = |440 - 444| = 4 Hz',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_6',
        question: 'A thin film of oil (n=1.4) on water (n=1.33) appears dark for 600 nm light. What is the minimum thickness?',
        options: ['107 nm', '214 nm', '300 nm', '428 nm'],
        correct: '107 nm',
        explanation: 'For destructive interference in thin films: 2nt = mλ, so t = λ/4n = 600/(4×1.4) = 107 nm',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_7',
        question: 'What is the resolving power of a grating with 1000 lines in the 2nd order?',
        options: ['1000', '2000', '500', '4000'],
        correct: '2000',
        explanation: 'Resolving power = mN = 2 × 1000 = 2000',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_8',
        question: 'A concave lens has focal length -20 cm. An object at 30 cm produces an image at what distance?',
        options: ['-12 cm', '12 cm', '-60 cm', '60 cm'],
        correct: '-12 cm',
        explanation: '1/f = 1/u + 1/v, so 1/(-20) = 1/30 + 1/v, solving gives v = -12 cm',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_9',
        question: 'What is the angular width of the central maximum for single-slit diffraction with slit width 0.1 mm and wavelength 500 nm?',
        options: ['0.01 rad', '0.005 rad', '0.02 rad', '0.1 rad'],
        correct: '0.01 rad',
        explanation: 'Angular width = 2λ/a = 2 × 500 × 10⁻⁹ / 0.1 × 10⁻³ = 0.01 rad',
        difficulty: 'hard'
      },
      {
        id: 'g11_wave_hard_10',
        question: 'Calculate the power of a lens that produces a virtual image at 25 cm for an object at 50 cm',
        options: ['6 D', '4 D', '2 D', '8 D'],
        correct: '2 D',
        explanation: '1/f = 1/u + 1/v = 1/50 + 1/(-25) = 1/50 - 1/25 = -1/50, so f = -50 cm, P = 100/50 = 2 D',
        difficulty: 'hard'
      }
    ]
  }
];
