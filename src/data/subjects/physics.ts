
interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const physicsChapters: Chapter[] = [
  {
    id: "mechanics",
    name: "Mechanics",
    description: "Motion, Forces and Energy",
    questions: [
      {
        id: "phys1",
        question: "According to Newton's second law, F = ma. If mass doubles and acceleration remains constant, what happens to force?",
        options: ["Doubles", "Halves", "Remains same", "Quadruples"],
        correct: "Doubles",
        explanation: "If F = ma and m doubles while a is constant, then F must double to maintain the equation"
      },
      {
        id: "phys2",
        question: "What is the SI unit of momentum?",
        options: ["kg⋅m/s", "N⋅s", "Both A and B", "kg⋅m/s²"],
        correct: "Both A and B",
        explanation: "Momentum = mass × velocity = kg⋅m/s. Also, impulse = change in momentum = N⋅s"
      },
      {
        id: "phys3",
        question: "What is the acceleration due to gravity on Earth?",
        options: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "11 m/s²"],
        correct: "9.8 m/s²",
        explanation: "The standard acceleration due to gravity is approximately 9.8 m/s²"
      },
      {
        id: "phys4",
        question: "A ball is thrown upward with initial velocity 20 m/s. What is its velocity at maximum height?",
        options: ["0 m/s", "10 m/s", "20 m/s", "-20 m/s"],
        correct: "0 m/s",
        explanation: "At maximum height, velocity becomes zero before the ball starts falling down"
      },
      {
        id: "phys5",
        question: "What is the kinetic energy of a 2 kg object moving at 5 m/s?",
        options: ["25 J", "50 J", "10 J", "5 J"],
        correct: "25 J",
        explanation: "KE = ½mv² = ½(2)(5)² = ½(2)(25) = 25 J"
      },
      {
        id: "phys6",
        question: "What is Newton's first law of motion also known as?",
        options: ["Law of inertia", "Law of acceleration", "Law of action-reaction", "Law of gravitation"],
        correct: "Law of inertia",
        explanation: "Newton's first law states that objects at rest stay at rest and objects in motion stay in motion unless acted upon by an external force"
      },
      {
        id: "phys7",
        question: "If a car accelerates from 0 to 30 m/s in 10 seconds, what is its acceleration?",
        options: ["3 m/s²", "300 m/s²", "30 m/s²", "0.3 m/s²"],
        correct: "3 m/s²",
        explanation: "a = (v - u)/t = (30 - 0)/10 = 3 m/s²"
      },
      {
        id: "phys8",
        question: "What is the work done when a 10 N force moves an object 5 m in the direction of force?",
        options: ["50 J", "15 J", "2 J", "500 J"],
        correct: "50 J",
        explanation: "Work = Force × Distance = 10 N × 5 m = 50 J"
      },
      {
        id: "phys9",
        question: "What is the power if 100 J of work is done in 5 seconds?",
        options: ["20 W", "500 W", "105 W", "95 W"],
        correct: "20 W",
        explanation: "Power = Work/Time = 100 J / 5 s = 20 W"
      },
      {
        id: "phys10",
        question: "What is the potential energy of a 1 kg object at height 10 m? (g = 10 m/s²)",
        options: ["100 J", "10 J", "1 J", "1000 J"],
        correct: "100 J",
        explanation: "PE = mgh = 1 kg × 10 m/s² × 10 m = 100 J"
      },
      {
        id: "phys11",
        question: "What is the centripetal acceleration of an object moving in a circle of radius 2 m with speed 4 m/s?",
        options: ["8 m/s²", "2 m/s²", "16 m/s²", "4 m/s²"],
        correct: "8 m/s²",
        explanation: "ac = v²/r = (4)²/2 = 16/2 = 8 m/s²"
      },
      {
        id: "phys12",
        question: "What is the momentum of a 5 kg object moving at 3 m/s?",
        options: ["15 kg⋅m/s", "8 kg⋅m/s", "2 kg⋅m/s", "1.67 kg⋅m/s"],
        correct: "15 kg⋅m/s",
        explanation: "Momentum = mass × velocity = 5 kg × 3 m/s = 15 kg⋅m/s"
      },
      {
        id: "phys13",
        question: "What is the frequency of a wave with period 0.5 seconds?",
        options: ["2 Hz", "0.5 Hz", "1 Hz", "4 Hz"],
        correct: "2 Hz",
        explanation: "Frequency = 1/Period = 1/0.5 = 2 Hz"
      },
      {
        id: "phys14",
        question: "What is the speed of sound in air at room temperature?",
        options: ["343 m/s", "300 m/s", "400 m/s", "500 m/s"],
        correct: "343 m/s",
        explanation: "The speed of sound in air at room temperature is approximately 343 m/s"
      },
      {
        id: "phys15",
        question: "What is the elastic potential energy of a spring compressed by 0.2 m with spring constant 100 N/m?",
        options: ["2 J", "20 J", "10 J", "4 J"],
        correct: "2 J",
        explanation: "PE = ½kx² = ½(100)(0.2)² = ½(100)(0.04) = 2 J"
      },
      {
        id: "phys16",
        question: "What is the impulse when a 10 N force acts for 3 seconds?",
        options: ["30 N⋅s", "13 N⋅s", "7 N⋅s", "3.33 N⋅s"],
        correct: "30 N⋅s",
        explanation: "Impulse = Force × Time = 10 N × 3 s = 30 N⋅s"
      },
      {
        id: "phys17",
        question: "What is the weight of a 5 kg object on Earth? (g = 10 m/s²)",
        options: ["50 N", "5 N", "0.5 N", "500 N"],
        correct: "50 N",
        explanation: "Weight = mg = 5 kg × 10 m/s² = 50 N"
      },
      {
        id: "phys18",
        question: "What is the efficiency of a machine that does 80 J of useful work with 100 J of input energy?",
        options: ["80%", "20%", "125%", "180%"],
        correct: "80%",
        explanation: "Efficiency = (Useful work/Input energy) × 100% = (80/100) × 100% = 80%"
      },
      {
        id: "phys19",
        question: "What is the angular velocity of a wheel that completes 2 revolutions in 4 seconds?",
        options: ["π rad/s", "2π rad/s", "4π rad/s", "0.5π rad/s"],
        correct: "π rad/s",
        explanation: "ω = 2πf = 2π(2 rev/4 s) = 2π(0.5) = π rad/s"
      },
      {
        id: "phys20",
        question: "What is the coefficient of friction if a 10 N normal force requires 3 N to overcome friction?",
        options: ["0.3", "0.03", "3", "30"],
        correct: "0.3",
        explanation: "μ = Friction force/Normal force = 3 N/10 N = 0.3"
      }
    ]
  },
  {
    id: "electricity",
    name: "Electricity & Magnetism",
    description: "Electric Fields, Circuits and Magnetic Fields",
    questions: [
      {
        id: "elec1",
        question: "What is the unit of electric current?",
        options: ["Volt", "Ampere", "Ohm", "Watt"],
        correct: "Ampere",
        explanation: "Electric current is measured in Amperes (A), named after André-Marie Ampère"
      },
      {
        id: "elec2",
        question: "In which direction does magnetic force act on a moving charge?",
        options: ["Parallel to velocity", "Parallel to magnetic field", "Perpendicular to both velocity and magnetic field", "Random direction"],
        correct: "Perpendicular to both velocity and magnetic field",
        explanation: "The magnetic force follows the right-hand rule and is perpendicular to both the velocity and magnetic field vectors"
      },
      {
        id: "elec3",
        question: "What is Ohm's law?",
        options: ["V = IR", "P = IV", "E = mc²", "F = ma"],
        correct: "V = IR",
        explanation: "Ohm's law states that voltage equals current times resistance: V = IR"
      },
      {
        id: "elec4",
        question: "What is the unit of electrical resistance?",
        options: ["Ampere", "Volt", "Ohm", "Watt"],
        correct: "Ohm",
        explanation: "Electrical resistance is measured in Ohms (Ω)"
      },
      {
        id: "elec5",
        question: "What is the power dissipated in a 5Ω resistor carrying 2A current?",
        options: ["20 W", "10 W", "2.5 W", "40 W"],
        correct: "20 W",
        explanation: "P = I²R = (2)² × 5 = 4 × 5 = 20 W"
      },
      {
        id: "elec6",
        question: "What is the total resistance of two 10Ω resistors in parallel?",
        options: ["5Ω", "20Ω", "10Ω", "15Ω"],
        correct: "5Ω",
        explanation: "For parallel resistors: 1/Rtotal = 1/R1 + 1/R2 = 1/10 + 1/10 = 2/10, so Rtotal = 5Ω"
      },
      {
        id: "elec7",
        question: "What is the charge of an electron?",
        options: ["-1.6 × 10⁻¹⁹ C", "1.6 × 10⁻¹⁹ C", "-1.6 × 10¹⁹ C", "1.6 × 10¹⁹ C"],
        correct: "-1.6 × 10⁻¹⁹ C",
        explanation: "An electron has a negative charge of magnitude 1.6 × 10⁻¹⁹ C"
      },
      {
        id: "elec8",
        question: "What is the unit of electric potential?",
        options: ["Ampere", "Volt", "Ohm", "Coulomb"],
        correct: "Volt",
        explanation: "Electric potential is measured in Volts (V)"
      },
      {
        id: "elec9",
        question: "What is the current through a 12V battery connected to a 4Ω resistor?",
        options: ["3 A", "48 A", "8 A", "16 A"],
        correct: "3 A",
        explanation: "Using Ohm's law: I = V/R = 12V/4Ω = 3 A"
      },
      {
        id: "elec10",
        question: "What is the capacitance if a capacitor stores 10C of charge at 5V?",
        options: ["2 F", "50 F", "0.5 F", "15 F"],
        correct: "2 F",
        explanation: "C = Q/V = 10C/5V = 2 F"
      },
      {
        id: "elec11",
        question: "What is the energy stored in a 2μF capacitor charged to 10V?",
        options: ["100 μJ", "20 μJ", "200 μJ", "10 μJ"],
        correct: "100 μJ",
        explanation: "E = ½CV² = ½(2 × 10⁻⁶)(10)² = ½(2 × 10⁻⁶)(100) = 100 × 10⁻⁶ J = 100 μJ"
      },
      {
        id: "elec12",
        question: "What is the direction of conventional current?",
        options: ["From positive to negative", "From negative to positive", "Random", "Depends on the circuit"],
        correct: "From positive to negative",
        explanation: "Conventional current flows from positive to negative terminal of a battery"
      },
      {
        id: "elec13",
        question: "What is the total resistance of three 6Ω resistors in series?",
        options: ["18Ω", "2Ω", "6Ω", "12Ω"],
        correct: "18Ω",
        explanation: "For series resistors: Rtotal = R1 + R2 + R3 = 6 + 6 + 6 = 18Ω"
      },
      {
        id: "elec14",
        question: "What is Faraday's law about?",
        options: ["Electromagnetic induction", "Electric circuits", "Magnetic materials", "Static electricity"],
        correct: "Electromagnetic induction",
        explanation: "Faraday's law describes how changing magnetic fields induce electric currents"
      },
      {
        id: "elec15",
        question: "What is the magnetic field at the center of a current-carrying loop proportional to?",
        options: ["Current", "Resistance", "Voltage", "Power"],
        correct: "Current",
        explanation: "The magnetic field at the center of a current loop is directly proportional to the current"
      },
      {
        id: "elec16",
        question: "What is the unit of magnetic flux?",
        options: ["Weber", "Tesla", "Gauss", "Henry"],
        correct: "Weber",
        explanation: "Magnetic flux is measured in Webers (Wb)"
      },
      {
        id: "elec17",
        question: "What happens to the current in a circuit when resistance increases and voltage remains constant?",
        options: ["Decreases", "Increases", "Remains same", "Becomes zero"],
        correct: "Decreases",
        explanation: "According to Ohm's law (I = V/R), current decreases when resistance increases"
      },
      {
        id: "elec18",
        question: "What is the frequency of AC current in most countries?",
        options: ["50 Hz", "60 Hz", "Both 50 Hz and 60 Hz", "100 Hz"],
        correct: "Both 50 Hz and 60 Hz",
        explanation: "Most countries use either 50 Hz or 60 Hz for AC power supply"
      },
      {
        id: "elec19",
        question: "What is the electric field between two parallel plates with voltage V and separation d?",
        options: ["V/d", "Vd", "V + d", "V - d"],
        correct: "V/d",
        explanation: "Electric field between parallel plates is E = V/d"
      },
      {
        id: "elec20",
        question: "What is the force between two point charges proportional to according to Coulomb's law?",
        options: ["Product of charges and inverse square of distance", "Sum of charges", "Distance between charges", "Square of distance"],
        correct: "Product of charges and inverse square of distance",
        explanation: "Coulomb's law: F = k(q₁q₂)/r², force is proportional to product of charges and inversely proportional to square of distance"
      }
    ]
  },
  {
    id: "modern",
    name: "Modern Physics",
    description: "Quantum Physics and Relativity",
    questions: [
      {
        id: "mod1",
        question: "What is the speed of light in vacuum?",
        options: ["3 × 10⁸ m/s", "3 × 10⁶ m/s", "3 × 10⁷ m/s", "3 × 10⁹ m/s"],
        correct: "3 × 10⁸ m/s",
        explanation: "The speed of light in vacuum is approximately 299,792,458 m/s ≈ 3 × 10⁸ m/s"
      },
      {
        id: "mod2",
        question: "What is Planck's constant approximately?",
        options: ["6.63 × 10⁻³⁴ J⋅s", "6.63 × 10³⁴ J⋅s", "6.63 × 10⁻²³ J⋅s", "6.63 × 10²³ J⋅s"],
        correct: "6.63 × 10⁻³⁴ J⋅s",
        explanation: "Planck's constant h ≈ 6.63 × 10⁻³⁴ J⋅s"
      },
      {
        id: "mod3",
        question: "What is the energy of a photon with frequency f?",
        options: ["hf", "h/f", "f/h", "hf²"],
        correct: "hf",
        explanation: "The energy of a photon is E = hf, where h is Planck's constant and f is frequency"
      },
      {
        id: "mod4",
        question: "What is the de Broglie wavelength of a particle?",
        options: ["h/p", "p/h", "hp", "h + p"],
        correct: "h/p",
        explanation: "de Broglie wavelength λ = h/p, where h is Planck's constant and p is momentum"
      },
      {
        id: "mod5",
        question: "What is Einstein's mass-energy equivalence formula?",
        options: ["E = mc²", "E = ½mv²", "E = mgh", "E = hf"],
        correct: "E = mc²",
        explanation: "Einstein's famous equation showing mass-energy equivalence is E = mc²"
      },
      {
        id: "mod6",
        question: "What is the uncertainty principle about?",
        options: ["Position and momentum cannot be known precisely simultaneously", "Energy and time are uncertain", "Speed of light varies", "Mass changes with velocity"],
        correct: "Position and momentum cannot be known precisely simultaneously",
        explanation: "Heisenberg's uncertainty principle states that position and momentum cannot both be known with perfect precision"
      },
      {
        id: "mod7",
        question: "What is the photoelectric effect?",
        options: ["Emission of electrons from metal surface by light", "Absorption of light by atoms", "Reflection of light", "Refraction of light"],
        correct: "Emission of electrons from metal surface by light",
        explanation: "Photoelectric effect is the emission of electrons from a metal surface when light shines on it"
      },
      {
        id: "mod8",
        question: "What is the work function in photoelectric effect?",
        options: ["Minimum energy needed to remove an electron", "Maximum energy of emitted electron", "Energy of incident photon", "Kinetic energy of electron"],
        correct: "Minimum energy needed to remove an electron",
        explanation: "Work function is the minimum energy required to remove an electron from the metal surface"
      },
      {
        id: "mod9",
        question: "What happens to mass at relativistic speeds?",
        options: ["Increases", "Decreases", "Remains constant", "Becomes zero"],
        correct: "Increases",
        explanation: "According to special relativity, mass increases with velocity at relativistic speeds"
      },
      {
        id: "mod10",
        question: "What is the Compton effect?",
        options: ["Scattering of X-rays by electrons", "Emission of electrons", "Absorption of photons", "Reflection of light"],
        correct: "Scattering of X-rays by electrons",
        explanation: "Compton effect is the scattering of X-rays or gamma rays by electrons"
      },
      {
        id: "mod11",
        question: "What is the rest energy of an electron?",
        options: ["0.511 MeV", "1.02 MeV", "1.67 MeV", "938 MeV"],
        correct: "0.511 MeV",
        explanation: "The rest mass energy of an electron is approximately 0.511 MeV"
      },
      {
        id: "mod12",
        question: "What is wave-particle duality?",
        options: ["Matter and light exhibit both wave and particle properties", "Waves and particles are the same", "Only electrons show wave properties", "Only photons show particle properties"],
        correct: "Matter and light exhibit both wave and particle properties",
        explanation: "Wave-particle duality means that both matter and electromagnetic radiation exhibit wave and particle characteristics"
      },
      {
        id: "mod13",
        question: "What is the Pauli exclusion principle?",
        options: ["No two electrons can have the same quantum state", "Electrons cannot exist in the nucleus", "Protons repel electrons", "Neutrons are unstable"],
        correct: "No two electrons can have the same quantum state",
        explanation: "Pauli exclusion principle states that no two fermions can occupy the same quantum state simultaneously"
      },
      {
        id: "mod14",
        question: "What is the principle quantum number?",
        options: ["Energy level of electron", "Orbital shape", "Spin direction", "Magnetic moment"],
        correct: "Energy level of electron",
        explanation: "The principal quantum number (n) determines the energy level or shell of an electron"
      },
      {
        id: "mod15",
        question: "What is the maximum number of electrons in the first shell?",
        options: ["2", "8", "18", "32"],
        correct: "2",
        explanation: "The first shell (n=1) can hold a maximum of 2 electrons"
      },
      {
        id: "mod16",
        question: "What is blackbody radiation?",
        options: ["Electromagnetic radiation emitted by a perfect absorber", "Radiation from black holes", "Absorption of all light", "Reflection from black surfaces"],
        correct: "Electromagnetic radiation emitted by a perfect absorber",
        explanation: "Blackbody radiation is the electromagnetic radiation emitted by a body that absorbs all incident radiation"
      },
      {
        id: "mod17",
        question: "What is the threshold frequency in photoelectric effect?",
        options: ["Minimum frequency to emit electrons", "Maximum frequency possible", "Frequency of emitted electrons", "Average frequency of light"],
        correct: "Minimum frequency to emit electrons",
        explanation: "Threshold frequency is the minimum frequency of incident light required to emit photoelectrons"
      },
      {
        id: "mod18",
        question: "What is time dilation?",
        options: ["Time passes slower at high speeds", "Time passes faster at high speeds", "Time is constant", "Time reverses"],
        correct: "Time passes slower at high speeds",
        explanation: "According to special relativity, time passes slower for objects moving at high speeds relative to an observer"
      },
      {
        id: "mod19",
        question: "What is the fine structure constant approximately?",
        options: ["1/137", "137", "1/127", "127"],
        correct: "1/137",
        explanation: "The fine structure constant α ≈ 1/137, a dimensionless fundamental constant"
      },
      {
        id: "mod20",
        question: "What is quantum tunneling?",
        options: ["Particles passing through potential barriers", "Electrons jumping between orbits", "Light bending around objects", "Atoms splitting spontaneously"],
        correct: "Particles passing through potential barriers",
        explanation: "Quantum tunneling is the quantum mechanical effect where particles can pass through potential barriers even when they don't have enough energy classically"
      }
    ]
  }
];
