
import { Chapter } from '../types';

export const technicalDrawingChapters: Chapter[] = [
  {
    id: 'basic_drawing',
    name: 'Basic Drawing Techniques',
    description: 'Fundamental drawing concepts and tools',
    questions: [
      // Easy Questions
      {
        id: 'draw_basic_1',
        question: 'What tool is used for drawing straight lines?',
        options: ['Compass', 'Ruler', 'Protractor', 'Divider'],
        correct: 'Ruler',
        explanation: 'A ruler or straightedge is the basic tool for drawing straight lines.',
        difficulty: 'easy'
      },
      {
        id: 'draw_basic_2',
        question: 'What is a scale in technical drawing?',
        options: ['Weight of drawing', 'Ratio of drawing size to real size', 'Drawing texture', 'Paper type'],
        correct: 'Ratio of drawing size to real size',
        explanation: 'A scale represents the ratio between a measurement on a drawing and the real object.',
        difficulty: 'easy'
      },
      {
        id: 'draw_basic_3',
        question: 'What is the purpose of a compass in technical drawing?',
        options: ['Finding direction', 'Drawing circles and arcs', 'Measuring angles', 'Drawing straight lines'],
        correct: 'Drawing circles and arcs',
        explanation: 'A compass is used to draw circles and arcs in technical drawing.',
        difficulty: 'easy'
      },
      {
        id: 'draw_basic_4',
        question: 'What is a blueprint?',
        options: ['Any drawing', 'Blue-colored paper', 'Technical drawing reproduction', 'Artistic sketch'],
        correct: 'Technical drawing reproduction',
        explanation: 'A blueprint is a reproduction of a technical drawing, traditionally with white lines on blue background.',
        difficulty: 'easy'
      },
      {
        id: 'draw_basic_5',
        question: 'What is the purpose of drawing borders on technical drawings?',
        options: ['Decoration', 'Define drawing area', 'Required by law', 'To use more ink'],
        correct: 'Define drawing area',
        explanation: 'Borders define the drawing area and provide space for information and titles.',
        difficulty: 'easy'
      },
      {
        id: 'draw_basic_6',
        question: 'What does CAD stand for?',
        options: ['Computer Aided Design', 'Creative Art Drawing', 'Calculated Angular Dimension', 'Complex Art Diagram'],
        correct: 'Computer Aided Design',
        explanation: 'CAD stands for Computer Aided Design, using computers to create technical drawings.',
        difficulty: 'easy'
      },
      {
        id: 'draw_basic_7',
        question: 'What are dimensions in technical drawing?',
        options: ['Paper size', 'Measurements of the object', 'Drawing complexity', 'Line types'],
        correct: 'Measurements of the object',
        explanation: 'Dimensions show the sizes and measurements of the object being drawn.',
        difficulty: 'easy'
      },
      {
        id: 'draw_basic_8',
        question: 'What is a title block in technical drawing?',
        options: ['Drawing title only', 'Area with project information', 'Block diagram', 'Decorative element'],
        correct: 'Area with project information',
        explanation: 'Title block contains information about the drawing including title, date, scale, and author.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'draw_basic_med_1',
        question: 'What is isometric drawing?',
        options: ['2D drawing', 'Pictorial drawing with equal angles', 'Drawing to scale', 'Section view'],
        correct: 'Pictorial drawing with equal angles',
        explanation: 'Isometric drawing is a method of pictorial representation with equal angles between the axes.',
        difficulty: 'medium'
      },
      {
        id: 'draw_basic_med_2',
        question: 'What is the purpose of section lines in technical drawing?',
        options: ['Decorative pattern', 'Show cut surfaces', 'Indicate scale', 'Mark borders'],
        correct: 'Show cut surfaces',
        explanation: 'Section lines (hatching) indicate where an object has been theoretically cut to show interior details.',
        difficulty: 'medium'
      },
      {
        id: 'draw_basic_med_3',
        question: 'What is orthographic projection?',
        options: ['3D view', 'Method showing multiple 2D views', 'Single view drawing', 'Artistic representation'],
        correct: 'Method showing multiple 2D views',
        explanation: 'Orthographic projection uses multiple 2D views (typically front, top, and side) to represent a 3D object.',
        difficulty: 'medium'
      },
      {
        id: 'draw_basic_med_4',
        question: 'What is a hidden line in technical drawing?',
        options: ['Erased line', 'Line not visible in current view', 'Decorative element', 'Guide line'],
        correct: 'Line not visible in current view',
        explanation: 'Hidden lines (typically dashed) represent edges that exist but are not visible from the current viewpoint.',
        difficulty: 'medium'
      },
      {
        id: 'draw_basic_med_5',
        question: 'What is the difference between first angle and third angle projection?',
        options: ['No difference', 'View placement differs', 'Only used in different countries', 'One is obsolete'],
        correct: 'View placement differs',
        explanation: 'In first angle, views appear opposite to the surface they represent; in third angle, views are placed in line with surfaces.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'draw_basic_hard_1',
        question: 'What is the purpose of auxiliary views in technical drawing?',
        options: ['Decorative elements', 'Show true shapes of inclined surfaces', 'Reduce drawing size', 'Add color'],
        correct: 'Show true shapes of inclined surfaces',
        explanation: 'Auxiliary views show the true shape and size of surfaces that are inclined to the principal projection planes.',
        difficulty: 'hard'
      },
      {
        id: 'draw_basic_hard_2',
        question: 'What is the relationship between a developed surface and its 3D form?',
        options: ['No relationship', '2D pattern that folds to create 3D form', 'Only for cylinders', 'Only theoretical'],
        correct: '2D pattern that folds to create 3D form',
        explanation: 'A developed surface is a 2D pattern that, when folded, forms the represented 3D object.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade11_engineering_drawing',
    name: 'Grade 11: Engineering Drawing',
    description: 'Advanced technical drawing for engineering applications',
    questions: [
      // Easy Questions
      {
        id: 'g11_eng_easy_1',
        question: 'What is an engineering drawing?',
        options: ['Artistic sketch', 'Technical representation of components', 'Only architectural drawings', 'Only hand-drawn work'],
        correct: 'Technical representation of components',
        explanation: 'Engineering drawings are precise technical representations of components or assemblies.',
        difficulty: 'easy'
      },
      {
        id: 'g11_eng_easy_2',
        question: 'What are drawing standards?',
        options: ['Personal preferences', 'Rules for consistent drawings', 'Optional guidelines', 'Art techniques'],
        correct: 'Rules for consistent drawings',
        explanation: 'Drawing standards are established rules for creating consistent, universally understood drawings.',
        difficulty: 'easy'
      },
      {
        id: 'g11_eng_easy_3',
        question: 'What is a cross-section view?',
        options: ['Top view', 'Side view', 'View showing internal features', 'External view'],
        correct: 'View showing internal features',
        explanation: 'Cross-section views show what the object would look like if cut along a plane.',
        difficulty: 'easy'
      },
      {
        id: 'g11_eng_easy_4',
        question: 'What is the purpose of dimensioning in engineering drawings?',
        options: ['Decoration', 'Specify exact measurements', 'Fill empty space', 'Only for scale'],
        correct: 'Specify exact measurements',
        explanation: 'Dimensioning specifies the exact measurements and tolerances required for manufacturing.',
        difficulty: 'easy'
      },
      {
        id: 'g11_eng_easy_5',
        question: 'What is a tolerance in engineering drawings?',
        options: ['Drawing error', 'Allowable variation in dimension', 'Measurement unit', 'Paper quality'],
        correct: 'Allowable variation in dimension',
        explanation: 'Tolerance is the acceptable amount of variation from a specified dimension.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_eng_med_1',
        question: 'What is GD&T in engineering drawing?',
        options: ['General Drawing Techniques', 'Geometric Dimensioning and Tolerancing', 'Global Design Tools', 'Grand Design Theory'],
        correct: 'Geometric Dimensioning and Tolerancing',
        explanation: 'GD&T is a system for defining and communicating engineering tolerances on drawings.',
        difficulty: 'medium'
      },
      {
        id: 'g11_eng_med_2',
        question: 'What is the difference between a detail drawing and an assembly drawing?',
        options: ['No difference', 'Detail shows individual parts, assembly shows how parts fit together', 'Only scale differs', 'Only used in different industries'],
        correct: 'Detail shows individual parts, assembly shows how parts fit together',
        explanation: 'Detail drawings show individual parts, while assembly drawings show how multiple parts fit together.',
        difficulty: 'medium'
      },
      {
        id: 'g11_eng_med_3',
        question: 'What is the purpose of an exploded view?',
        options: ['Show broken parts', 'Demonstrate assembly relationships', 'Represent explosions', 'Only decorative'],
        correct: 'Demonstrate assembly relationships',
        explanation: 'Exploded views show separated but aligned components to clarify assembly relationships.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_eng_hard_1',
        question: 'How does a true position GD&T symbol differ from coordinate dimensioning?',
        options: ['No difference', 'Defines position with respect to datum reference frame', 'Less precise', 'Only for certain industries'],
        correct: 'Defines position with respect to datum reference frame',
        explanation: 'True position GD&T defines location relative to a datum reference frame rather than using coordinates alone.',
        difficulty: 'hard'
      },
      {
        id: 'g11_eng_hard_2',
        question: 'What is the relationship between surface finish and manufacturing methods?',
        options: ['No relationship', 'Manufacturing methods determine achievable surface finish', 'Only relevant for certain materials', 'Only aesthetic consideration'],
        correct: 'Manufacturing methods determine achievable surface finish',
        explanation: 'Different manufacturing methods are capable of achieving different levels of surface finish quality.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade12_architectural_drawing',
    name: 'Grade 12: Architectural Drawing',
    description: 'Specialized drawing techniques for architectural design',
    questions: [
      // Easy Questions
      {
        id: 'g12_arch_easy_1',
        question: 'What is a floor plan?',
        options: ['Decoration pattern', 'View from above showing layout', 'Material specification', 'Cost estimate'],
        correct: 'View from above showing layout',
        explanation: 'A floor plan is a drawing showing the layout of a building as viewed from above.',
        difficulty: 'easy'
      },
      {
        id: 'g12_arch_easy_2',
        question: 'What is the purpose of an elevation drawing?',
        options: ['Show height only', 'Show the exterior view of a building', 'Interior layout', 'Foundation details'],
        correct: 'Show the exterior view of a building',
        explanation: 'Elevation drawings show the exterior view of a building from different sides.',
        difficulty: 'easy'
      },
      {
        id: 'g12_arch_easy_3',
        question: 'What is a section drawing in architecture?',
        options: ['Small part of building', 'Cut-through view', 'Exterior view', 'Landscape design'],
        correct: 'Cut-through view',
        explanation: 'Section drawings show what the building would look like if cut vertically or horizontally.',
        difficulty: 'easy'
      },
      {
        id: 'g12_arch_easy_4',
        question: 'What scale is commonly used for residential floor plans?',
        options: ['1:1', '1:10', '1:50 or 1:100', '1:1000'],
        correct: '1:50 or 1:100',
        explanation: 'Residential floor plans typically use scales of 1:50 or 1:100.',
        difficulty: 'easy'
      },
      {
        id: 'g12_arch_easy_5',
        question: 'What are architectural symbols?',
        options: ['Decorative elements', 'Standard representations of components', 'Only for commercial buildings', 'Artist signatures'],
        correct: 'Standard representations of components',
        explanation: 'Architectural symbols are standardized representations of components like doors, windows, and fixtures.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_arch_med_1',
        question: 'What is the relationship between a site plan and a floor plan?',
        options: ['They are the same', 'Site plan shows building in relation to property', 'Floor plan is more detailed', 'Site plan is only for large projects'],
        correct: 'Site plan shows building in relation to property',
        explanation: 'A site plan shows the building\'s location on the property, while a floor plan shows the internal layout.',
        difficulty: 'medium'
      },
      {
        id: 'g12_arch_med_2',
        question: 'What is the purpose of a reflected ceiling plan?',
        options: ['Shows floor reflections', 'Shows ceiling-mounted elements', 'Mirror image of floor plan', 'Only decorative'],
        correct: 'Shows ceiling-mounted elements',
        explanation: 'A reflected ceiling plan shows the view of the ceiling as if looking up, indicating lighting and other ceiling elements.',
        difficulty: 'medium'
      },
      {
        id: 'g12_arch_med_3',
        question: 'How do architectural drawings differ from engineering drawings?',
        options: ['No difference', 'Focus on different aspects and scales', 'Only in paper size', 'Engineering is more precise'],
        correct: 'Focus on different aspects and scales',
        explanation: 'Architectural drawings focus on spatial relationships and aesthetics, while engineering drawings focus on technical details and specifications.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_arch_hard_1',
        question: 'What role does Building Information Modeling (BIM) play in modern architectural drawing?',
        options: ['Simple 3D modeling only', '3D database integrating all building information', 'Only for very large projects', 'Automated drawing tool only'],
        correct: '3D database integrating all building information',
        explanation: 'BIM combines 3D models with comprehensive information about all building elements, specifications, and systems.',
        difficulty: 'hard'
      },
      {
        id: 'g12_arch_hard_2',
        question: 'How do passive solar design principles influence architectural drawings?',
        options: ['No influence', 'Affect orientation, window placement, and material specifications', 'Only decoration', 'Only relevant in certain climates'],
        correct: 'Affect orientation, window placement, and material specifications',
        explanation: 'Passive solar design principles impact building orientation, window placement, thermal mass, and other elements represented in architectural drawings.',
        difficulty: 'hard'
      }
    ]
  }
];
