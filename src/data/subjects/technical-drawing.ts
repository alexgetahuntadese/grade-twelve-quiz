
import { Chapter } from '../types';

export const technicalDrawingChapters: Chapter[] = [
  {
    id: 'basic_drawing',
    name: 'Basic Technical Drawing',
    description: 'Fundamentals of technical drawing and drafting',
    questions: [
      // Easy Questions
      {
        id: 'td_basic_easy_1',
        question: 'What is the standard paper size for technical drawings?',
        options: ['A4', 'A3', 'A2', 'A1'],
        correct: 'A4',
        explanation: 'A4 is the most commonly used paper size for technical drawings.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_2',
        question: 'Which pencil grade is best for construction lines?',
        options: ['2H', 'HB', '2B', '4B'],
        correct: '2H',
        explanation: '2H pencils create light lines suitable for construction work.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_3',
        question: 'What does the acronym CAD stand for?',
        options: ['Computer Aided Design', 'Computer Automated Drawing', 'Creative Art Design', 'Computer Architecture Design'],
        correct: 'Computer Aided Design',
        explanation: 'CAD stands for Computer Aided Design.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_4',
        question: 'What is an orthographic projection?',
        options: ['3D view', 'Multiple 2D views', 'Perspective view', 'Isometric view'],
        correct: 'Multiple 2D views',
        explanation: 'Orthographic projection shows an object from multiple 2D viewpoints.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_5',
        question: 'Which line type is used for hidden edges?',
        options: ['Continuous line', 'Dashed line', 'Dotted line', 'Chain line'],
        correct: 'Dashed line',
        explanation: 'Dashed lines represent hidden or invisible edges in technical drawings.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_6',
        question: 'What is the purpose of a scale in technical drawing?',
        options: ['To measure weight', 'To show size proportion', 'To indicate color', 'To show material'],
        correct: 'To show size proportion',
        explanation: 'Scale indicates the proportion between the drawing and the actual object.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_7',
        question: 'Which tool is used to draw circles?',
        options: ['Ruler', 'Compass', 'Protractor', 'Set square'],
        correct: 'Compass',
        explanation: 'A compass is used to draw perfect circles and arcs.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_8',
        question: 'What does a dimension line show?',
        options: ['Color', 'Size', 'Material', 'Weight'],
        correct: 'Size',
        explanation: 'Dimension lines indicate the measurements and sizes of objects.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_9',
        question: 'Which view shows the front of an object?',
        options: ['Top view', 'Side view', 'Front view', 'Bottom view'],
        correct: 'Front view',
        explanation: 'The front view shows the object as seen from the front.',
        difficulty: 'easy'
      },
      {
        id: 'td_basic_easy_10',
        question: 'What is a construction line?',
        options: ['A thick outline', 'A light guideline', 'A colored line', 'A broken line'],
        correct: 'A light guideline',
        explanation: 'Construction lines are light guidelines used to help create the drawing.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'td_basic_med_1',
        question: 'What is the purpose of a title block in technical drawings?',
        options: ['Decoration', 'Drawing information', 'Scale reference', 'Border design'],
        correct: 'Drawing information',
        explanation: 'Title blocks contain essential information about the drawing including title, scale, date, and designer.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_2',
        question: 'What is the difference between first angle and third angle projection?',
        options: ['Paper orientation', 'View arrangement', 'Scale used', 'Line weights'],
        correct: 'View arrangement',
        explanation: 'First and third angle projections differ in how views are arranged relative to each other.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_3',
        question: 'What is an isometric projection?',
        options: ['2D front view', '3D representation', 'Side view only', 'Top view only'],
        correct: '3D representation',
        explanation: 'Isometric projection shows a 3D representation of an object.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_4',
        question: 'Which type of line indicates center lines?',
        options: ['Thick continuous', 'Thin chain line', 'Dashed line', 'Dotted line'],
        correct: 'Thin chain line',
        explanation: 'Center lines are represented by thin chain lines (long dash-short dash).',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_5',
        question: 'What is a section view?',
        options: ['External view', 'Internal view after cutting', 'Top view', 'Perspective view'],
        correct: 'Internal view after cutting',
        explanation: 'A section view shows the internal features of an object as if it were cut.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_6',
        question: 'What does hatching indicate in a drawing?',
        options: ['Color', 'Material or cut surface', 'Texture', 'Temperature'],
        correct: 'Material or cut surface',
        explanation: 'Hatching patterns indicate different materials or show cut surfaces.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_7',
        question: 'What is the standard angle for isometric projection?',
        options: ['30°', '45°', '60°', '90°'],
        correct: '30°',
        explanation: 'Isometric projection uses 30° angles from the horizontal.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_8',
        question: 'Which projection method shows true lengths?',
        options: ['Isometric', 'Perspective', 'Orthographic', 'Oblique'],
        correct: 'Orthographic',
        explanation: 'Orthographic projection shows true lengths and shapes.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_9',
        question: 'What is an auxiliary view?',
        options: ['Main view', 'Additional view for clarity', 'Decorative view', 'Simplified view'],
        correct: 'Additional view for clarity',
        explanation: 'Auxiliary views provide additional clarity for complex features.',
        difficulty: 'medium'
      },
      {
        id: 'td_basic_med_10',
        question: 'What does a break line indicate?',
        options: ['Error', 'Shortened view', 'Hidden edge', 'Center line'],
        correct: 'Shortened view',
        explanation: 'Break lines indicate that part of the object has been removed to save space.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'td_basic_hard_1',
        question: 'What is the standard thickness for object lines in technical drawing?',
        options: ['0.3mm', '0.5mm', '0.7mm', '1.0mm'],
        correct: '0.7mm',
        explanation: 'Object lines are typically drawn with 0.7mm thickness according to ISO standards.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_2',
        question: 'In third angle projection, where is the side view placed relative to the front view?',
        options: ['Left side', 'Right side', 'Above', 'Below'],
        correct: 'Right side',
        explanation: 'In third angle projection, the right side view is placed to the right of the front view.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_3',
        question: 'What is the purpose of geometric tolerancing?',
        options: ['Decoration', 'Control form and position', 'Show color', 'Indicate material'],
        correct: 'Control form and position',
        explanation: 'Geometric tolerancing controls the form, orientation, and position of features.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_4',
        question: 'Which line weight is used for cutting plane lines?',
        options: ['0.3mm', '0.5mm', '0.7mm', '1.4mm'],
        correct: '1.4mm',
        explanation: 'Cutting plane lines use the thickest line weight of 1.4mm.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_5',
        question: 'What is the difference between a detail and a section?',
        options: ['Scale only', 'Detail shows enlargement, section shows interior', 'Color coding', 'Paper size'],
        correct: 'Detail shows enlargement, section shows interior',
        explanation: 'Details show enlarged views while sections reveal interior features.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_6',
        question: 'In dimensioning, what does the symbol ⌀ represent?',
        options: ['Radius', 'Diameter', 'Square', 'Angle'],
        correct: 'Diameter',
        explanation: 'The symbol ⌀ indicates diameter in technical drawings.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_7',
        question: 'What is a development in technical drawing?',
        options: ['3D model', 'Unfolded surface', 'Cross-section', 'Perspective view'],
        correct: 'Unfolded surface',
        explanation: 'A development shows the unfolded or flattened surface of a 3D object.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_8',
        question: 'Which tolerance zone shape is indicated by ⊕?',
        options: ['Circular', 'Cylindrical', 'Spherical', 'Square'],
        correct: 'Cylindrical',
        explanation: 'The symbol ⊕ indicates a cylindrical tolerance zone.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_9',
        question: 'What is the purpose of a datum in geometric tolerancing?',
        options: ['Reference point', 'Measurement tool', 'Drawing scale', 'Line weight'],
        correct: 'Reference point',
        explanation: 'A datum provides a reference point or surface for geometric tolerancing.',
        difficulty: 'hard'
      },
      {
        id: 'td_basic_hard_10',
        question: 'In CAD, what does parametric modeling allow?',
        options: ['Color changes', 'Dimension-driven design', 'File compression', 'Print settings'],
        correct: 'Dimension-driven design',
        explanation: 'Parametric modeling allows designs to be driven and modified by dimensions and constraints.',
        difficulty: 'hard'
      }
    ]
  }
];
