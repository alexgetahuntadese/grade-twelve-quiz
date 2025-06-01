
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

      // Hard Questions
      {
        id: 'td_basic_hard_1',
        question: 'What is the standard thickness for object lines in technical drawing?',
        options: ['0.3mm', '0.5mm', '0.7mm', '1.0mm'],
        correct: '0.7mm',
        explanation: 'Object lines are typically drawn with 0.7mm thickness according to ISO standards.',
        difficulty: 'hard'
      }
    ]
  }
];
