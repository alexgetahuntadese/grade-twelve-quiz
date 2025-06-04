import { Chapter } from '../types';

export const technicalDrawingChapters: Chapter[] = [
  {
    id: 'basic_drawing',
    name: 'Basic Technical Drawing',
    description: 'Fundamentals of technical drawing and drafting',
    questions: [
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
  },

  // Grade 11 Chapter
  {
    id: 'grade11_advanced_drawing',
    name: 'Grade 11: Advanced Technical Drawing',
    description: 'Advanced technical drawing techniques and engineering drawing standards',
    questions: [
      // Easy Questions
      {
        id: 'g11_td_easy_1',
        question: 'What is the purpose of assembly drawings?',
        options: ['Show individual parts', 'Show how parts fit together', 'Show materials only', 'Show dimensions only'],
        correct: 'Show how parts fit together',
        explanation: 'Assembly drawings show how multiple parts are assembled together.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_2',
        question: 'What is a working drawing?',
        options: ['Sketch only', 'Detailed drawing for manufacturing', 'Assembly view', 'Perspective drawing'],
        correct: 'Detailed drawing for manufacturing',
        explanation: 'Working drawings provide all information needed for manufacturing.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_3',
        question: 'What does GD&T stand for?',
        options: ['General Design & Technology', 'Geometric Dimensioning & Tolerancing', 'Graphics Design & Tools', 'Global Drawing & Templates'],
        correct: 'Geometric Dimensioning & Tolerancing',
        explanation: 'GD&T is a system for defining and communicating engineering tolerances.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_4',
        question: 'What is a detail drawing?',
        options: ['Small sketch', 'Enlarged view of specific feature', 'Assembly view', 'Exploded view'],
        correct: 'Enlarged view of specific feature',
        explanation: 'Detail drawings show enlarged views of specific features for clarity.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_5',
        question: 'What is the purpose of revision control in drawings?',
        options: ['Decoration', 'Track changes and updates', 'Show colors', 'Add complexity'],
        correct: 'Track changes and updates',
        explanation: 'Revision control tracks changes and updates to technical drawings.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_6',
        question: 'What is a parts list?',
        options: ['Drawing scale', 'List of components in assembly', 'Tool list', 'Color scheme'],
        correct: 'List of components in assembly',
        explanation: 'Parts lists identify all components used in an assembly.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_7',
        question: 'What is thread representation in technical drawing?',
        options: ['Color coding', 'Symbolic way to show threads', 'Material indication', 'Size reference'],
        correct: 'Symbolic way to show threads',
        explanation: 'Thread representation uses symbols to indicate threaded features.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_8',
        question: 'What is a schematic drawing?',
        options: ['Detailed view', 'Simplified diagram showing function', 'Perspective view', 'Assembly drawing'],
        correct: 'Simplified diagram showing function',
        explanation: 'Schematic drawings show the functional relationships between components.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_9',
        question: 'What is the purpose of drawing standards?',
        options: ['Make drawings look nice', 'Ensure consistency and communication', 'Save time', 'Reduce costs'],
        correct: 'Ensure consistency and communication',
        explanation: 'Drawing standards ensure consistent communication across organizations.',
        difficulty: 'easy'
      },
      {
        id: 'g11_td_easy_10',
        question: 'What is a blueprint?',
        options: ['Blue colored drawing', 'Copy of technical drawing', 'Original drawing', 'Sketch'],
        correct: 'Copy of technical drawing',
        explanation: 'Blueprint traditionally refers to a reproduction of a technical drawing.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_td_med_1',
        question: 'What is the difference between bilateral and unilateral tolerances?',
        options: ['No difference', 'Bilateral allows variation both ways, unilateral one way', 'Different units', 'Different scales'],
        correct: 'Bilateral allows variation both ways, unilateral one way',
        explanation: 'Bilateral tolerances vary in both directions, unilateral in one direction only.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_2',
        question: 'What is surface finish specification?',
        options: ['Color specification', 'Roughness and texture requirements', 'Material type', 'Drawing scale'],
        correct: 'Roughness and texture requirements',
        explanation: 'Surface finish specifies the required roughness and texture of surfaces.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_3',
        question: 'What is a section line in sectional views?',
        options: ['Cutting plane indicator', 'Dimension line', 'Center line', 'Border line'],
        correct: 'Cutting plane indicator',
        explanation: 'Section lines indicate where the imaginary cutting plane passes through the object.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_4',
        question: 'What is the purpose of phantom lines?',
        options: ['Show hidden edges', 'Show alternate positions', 'Show dimensions', 'Show materials'],
        correct: 'Show alternate positions',
        explanation: 'Phantom lines show alternate positions or adjacent parts.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_5',
        question: 'What is a weld symbol?',
        options: ['Material indicator', 'Graphic representation of weld specifications', 'Size indicator', 'Color code'],
        correct: 'Graphic representation of weld specifications',
        explanation: 'Weld symbols graphically represent welding specifications and requirements.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_6',
        question: 'What is the difference between a plan and elevation view?',
        options: ['No difference', 'Plan is top view, elevation is side view', 'Different scales', 'Different materials'],
        correct: 'Plan is top view, elevation is side view',
        explanation: 'Plan views show the top, elevation views show the front or side.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_7',
        question: 'What is a bill of materials (BOM)?',
        options: ['Cost estimate', 'Detailed list of all parts and materials', 'Drawing schedule', 'Tool list'],
        correct: 'Detailed list of all parts and materials',
        explanation: 'BOM lists all parts, materials, and quantities needed for production.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_8',
        question: 'What is the purpose of drawing layers in CAD?',
        options: ['Add colors', 'Organize different elements', 'Save memory', 'Print faster'],
        correct: 'Organize different elements',
        explanation: 'Layers help organize different types of drawing elements for better management.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_9',
        question: 'What is a coordinate dimensioning system?',
        options: ['Random dimensions', 'Dimensions from common reference points', 'Circular dimensions', 'Angular dimensions'],
        correct: 'Dimensions from common reference points',
        explanation: 'Coordinate dimensioning uses common reference points for all dimensions.',
        difficulty: 'medium'
      },
      {
        id: 'g11_td_med_10',
        question: 'What is the purpose of drawing templates?',
        options: ['Decoration', 'Standardize drawing format and layout', 'Save paper', 'Add complexity'],
        correct: 'Standardize drawing format and layout',
        explanation: 'Templates ensure consistent format and layout across all drawings.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_td_hard_1',
        question: 'What is the difference between limit dimensioning and plus-minus tolerancing?',
        options: ['No difference', 'Limit shows max/min values, plus-minus shows deviation', 'Different units', 'Different applications'],
        correct: 'Limit shows max/min values, plus-minus shows deviation',
        explanation: 'Limit dimensioning shows maximum and minimum values, plus-minus shows nominal with deviation.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_2',
        question: 'What is positional tolerance in GD&T?',
        options: ['Size tolerance', 'Location tolerance for features', 'Surface finish', 'Material property'],
        correct: 'Location tolerance for features',
        explanation: 'Positional tolerance controls the location of features relative to datums.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_3',
        question: 'What is the maximum material condition (MMC)?',
        options: ['Heaviest material', 'Condition when feature contains maximum material', 'Strongest material', 'Most expensive material'],
        correct: 'Condition when feature contains maximum material',
        explanation: 'MMC is when a feature contains the maximum amount of material within tolerance.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_4',
        question: 'What is datum shift in geometric tolerancing?',
        options: ['Moving the drawing', 'Allowable movement of datum features', 'Changing scale', 'Rotating view'],
        correct: 'Allowable movement of datum features',
        explanation: 'Datum shift allows for movement of datum features within their tolerance zones.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_5',
        question: 'What is the purpose of form tolerances?',
        options: ['Control shape only', 'Control individual feature geometry', 'Control assembly', 'Control material'],
        correct: 'Control individual feature geometry',
        explanation: 'Form tolerances control the geometry of individual features like flatness and roundness.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_6',
        question: 'What is virtual condition in GD&T?',
        options: ['Imaginary state', 'Worst-case boundary of feature', 'Computer simulation', 'Theoretical dimension'],
        correct: 'Worst-case boundary of feature',
        explanation: 'Virtual condition is the worst-case boundary generated by a feature.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_7',
        question: 'What is the difference between runout and total runout?',
        options: ['No difference', 'Runout is circular, total runout is entire surface', 'Different units', 'Different applications'],
        correct: 'Runout is circular, total runout is entire surface',
        explanation: 'Runout controls circular elements, total runout controls entire surfaces.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_8',
        question: 'What is feature control frame?',
        options: ['Drawing border', 'Box containing geometric tolerance information', 'Title block', 'Dimension box'],
        correct: 'Box containing geometric tolerance information',
        explanation: 'Feature control frames contain geometric tolerance symbols and values.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_9',
        question: 'What is the principle of independence in GD&T?',
        options: ['Features are independent', 'Size and geometric tolerances are separate', 'Drawings are independent', 'Views are independent'],
        correct: 'Size and geometric tolerances are separate',
        explanation: 'Size tolerances and geometric tolerances are controlled independently.',
        difficulty: 'hard'
      },
      {
        id: 'g11_td_hard_10',
        question: 'What is composite tolerancing?',
        options: ['Multiple materials', 'Combined pattern and individual feature control', 'Computer analysis', 'Statistical method'],
        correct: 'Combined pattern and individual feature control',
        explanation: 'Composite tolerancing combines pattern location control with individual feature control.',
        difficulty: 'hard'
      }
    ]
  }
];
