
import { Chapter } from '../types';

export const generalBusinessChapters: Chapter[] = [
  {
    id: 'business_fundamentals',
    name: 'Business Fundamentals',
    description: 'Basic concepts of business and entrepreneurship',
    questions: [
      // Easy Questions
      {
        id: 'bus_fund_easy_1',
        question: 'What is a business?',
        options: ['A hobby', 'An organization that provides goods or services', 'A government agency', 'A social club'],
        correct: 'An organization that provides goods or services',
        explanation: 'A business is an organization that provides goods or services to customers.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_2',
        question: 'What is profit?',
        options: ['Total sales', 'Revenue minus expenses', 'Number of customers', 'Business size'],
        correct: 'Revenue minus expenses',
        explanation: 'Profit is what remains after subtracting expenses from revenue.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_3',
        question: 'What is marketing?',
        options: ['Selling products', 'Promoting and selling products or services', 'Making products', 'Buying products'],
        correct: 'Promoting and selling products or services',
        explanation: 'Marketing involves promoting and selling products or services to customers.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_4',
        question: 'What is an entrepreneur?',
        options: ['An employee', 'Someone who starts a business', 'A customer', 'A supplier'],
        correct: 'Someone who starts a business',
        explanation: 'An entrepreneur is someone who starts and operates a business.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_5',
        question: 'What is customer service?',
        options: ['Making products', 'Helping customers', 'Counting money', 'Managing inventory'],
        correct: 'Helping customers',
        explanation: 'Customer service involves helping customers with their needs and questions.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'bus_fund_med_1',
        question: 'What is a business plan?',
        options: ['Daily schedule', 'Document outlining business strategy', 'Employee handbook', 'Product catalog'],
        correct: 'Document outlining business strategy',
        explanation: 'A business plan is a document that outlines a business strategy and goals.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_2',
        question: 'What is market research?',
        options: ['Selling products', 'Gathering information about customers and markets', 'Hiring employees', 'Building stores'],
        correct: 'Gathering information about customers and markets',
        explanation: 'Market research involves collecting data about target markets and customers.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_3',
        question: 'What is cash flow?',
        options: ['Total profit', 'Movement of money in and out of business', 'Number of sales', 'Employee salaries'],
        correct: 'Movement of money in and out of business',
        explanation: 'Cash flow is the movement of money into and out of a business over time.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'bus_fund_hard_1',
        question: 'What is return on investment (ROI)?',
        options: ['Total investment', 'Profit divided by investment cost', 'Number of customers', 'Business age'],
        correct: 'Profit divided by investment cost',
        explanation: 'ROI measures the efficiency of an investment by comparing profit to investment cost.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_2',
        question: 'What is the concept of economies of scale?',
        options: ['Small production benefits', 'Cost advantages from large-scale production', 'Equal costs always', 'Increasing costs with size'],
        correct: 'Cost advantages from large-scale production',
        explanation: 'Economies of scale refer to cost advantages achieved through large-scale production.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_management',
    name: 'Grade 11: Business Management',
    description: 'Management principles, leadership, and organizational behavior',
    questions: [
      // Easy Questions
      {
        id: 'g11_mgmt_easy_1',
        question: 'What is management?',
        options: ['Following orders', 'Controlling resources', 'Working alone', 'Only finance'],
        correct: 'Controlling resources',
        explanation: 'Management involves controlling resources to achieve organizational goals.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_2',
        question: 'What are the four main functions of management?',
        options: ['Hiring, firing, training, paying', 'Planning, organizing, leading, controlling', 'Selling, buying, making, delivering', 'Marketing, finance, operations, HR'],
        correct: 'Planning, organizing, leading, controlling',
        explanation: 'The four main functions of management are planning, organizing, leading, and controlling.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_3',
        question: 'What is leadership?',
        options: ['Bossing people around', 'Following rules', 'Influencing and guiding others', 'Working alone'],
        correct: 'Influencing and guiding others',
        explanation: 'Leadership involves influencing and guiding others toward achieving goals.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_4',
        question: 'What is delegation?',
        options: ['Avoiding work', 'Assigning tasks to others', 'Doing everything yourself', 'Firing employees'],
        correct: 'Assigning tasks to others',
        explanation: 'Delegation is assigning tasks and authority to others while maintaining responsibility.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_5',
        question: 'What is organizational structure?',
        options: ['Office layout', 'Company building', 'How organization is arranged', 'Employee benefits'],
        correct: 'How organization is arranged',
        explanation: 'Organizational structure defines how activities and reporting relationships are arranged.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_mgmt_med_1',
        question: 'What is the difference between leadership and management?',
        options: ['No difference', 'Leadership inspires and guides; management controls and plans', 'Leaders make less money', 'Managers have more education'],
        correct: 'Leadership inspires and guides; management controls and plans',
        explanation: 'Leadership focuses on inspiring and guiding people, while management focuses on planning, organizing, and controlling resources.',
        difficulty: 'medium'
      },
      {
        id: 'g11_mgmt_med_2',
        question: 'What is organizational behavior?',
        options: ['Company rules', 'Study of how people interact in organizations', 'Marketing strategy', 'Production method'],
        correct: 'Study of how people interact in organizations',
        explanation: 'Organizational behavior studies how individuals and groups interact within organizations.',
        difficulty: 'medium'
      },
      {
        id: 'g11_mgmt_med_3',
        question: 'What is a matrix organizational structure?',
        options: ['Single chain of command', 'Employees report to multiple supervisors', 'Only used in manufacturing', 'Flat hierarchy'],
        correct: 'Employees report to multiple supervisors',
        explanation: 'In a matrix structure, employees report to both functional and project managers.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_mgmt_hard_1',
        question: 'How does Herzberg\'s Two-Factor Theory relate to employee motivation?',
        options: ['Not related', 'Distinguishes between hygiene factors and motivators', 'Only applies to executives', 'Based on financial rewards only'],
        correct: 'Distinguishes between hygiene factors and motivators',
        explanation: 'Herzberg\'s theory separates hygiene factors (preventing dissatisfaction) from motivators (creating satisfaction).',
        difficulty: 'hard'
      },
      {
        id: 'g11_mgmt_hard_2',
        question: 'What is the difference between transformational and transactional leadership?',
        options: ['No difference', 'Transformational inspires change; transactional focuses on rewards', 'Only applies to certain industries', 'Based on company size'],
        correct: 'Transformational inspires change; transactional focuses on rewards',
        explanation: 'Transformational leadership inspires change through vision, while transactional leadership uses rewards and punishments to motivate.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_international_business',
    name: 'Grade 12: International Business',
    description: 'Global trade, international markets, and multinational operations',
    questions: [
      // Easy Questions
      {
        id: 'g12_intl_easy_1',
        question: 'What is international business?',
        options: ['Local business', 'Business across national borders', 'Only large corporations', 'Government control'],
        correct: 'Business across national borders',
        explanation: 'International business involves commercial transactions across national borders.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intl_easy_2',
        question: 'What is globalization?',
        options: ['Local focus', 'Increasing interconnection of world economies', 'Isolation of markets', 'Small business growth'],
        correct: 'Increasing interconnection of world economies',
        explanation: 'Globalization is the increasing interdependence and integration of world economies.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intl_easy_3',
        question: 'What is an import?',
        options: ['Selling abroad', 'Buying from abroad', 'Local sales', 'Manufacturing'],
        correct: 'Buying from abroad',
        explanation: 'Imports are goods or services bought from other countries.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intl_easy_4',
        question: 'What is an export?',
        options: ['Buying from abroad', 'Selling to other countries', 'Local trade', 'Manufacturing process'],
        correct: 'Selling to other countries',
        explanation: 'Exports are goods or services sold to other countries.',
        difficulty: 'easy'
      },
      {
        id: 'g12_intl_easy_5',
        question: 'What is a multinational corporation?',
        options: ['Small business', 'Local company', 'Company operating in multiple countries', 'Government agency'],
        correct: 'Company operating in multiple countries',
        explanation: 'A multinational corporation operates in multiple countries beyond its home country.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_intl_med_1',
        question: 'What is a trade barrier?',
        options: ['Road block', 'Restriction on international trade', 'Trading strategy', 'Marketing technique'],
        correct: 'Restriction on international trade',
        explanation: 'Trade barriers are restrictions that limit free trade between countries, such as tariffs or quotas.',
        difficulty: 'medium'
      },
      {
        id: 'g12_intl_med_2',
        question: 'What is exchange rate risk?',
        options: ['Stock market risk', 'Potential loss from currency fluctuations', 'Interest rate change', 'Marketing failure'],
        correct: 'Potential loss from currency fluctuations',
        explanation: 'Exchange rate risk is the potential for loss due to changes in currency exchange rates.',
        difficulty: 'medium'
      },
      {
        id: 'g12_intl_med_3',
        question: 'What is a trade deficit?',
        options: ['Trade advantage', 'When imports exceed exports', 'When exports exceed imports', 'Balanced trade'],
        correct: 'When imports exceed exports',
        explanation: 'A trade deficit occurs when a country imports more than it exports.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_intl_hard_1',
        question: 'How does the theory of comparative advantage explain international trade?',
        options: ['Countries should not trade', 'Countries benefit from trade by specializing in products with lowest opportunity cost', 'Only applies to developed nations', 'Based on military power'],
        correct: 'Countries benefit from trade by specializing in products with lowest opportunity cost',
        explanation: 'Comparative advantage theory states countries benefit by specializing in production with lower opportunity cost.',
        difficulty: 'hard'
      },
      {
        id: 'g12_intl_hard_2',
        question: 'What is the difference between standardization and adaptation in international marketing?',
        options: ['No difference', 'Standardization uses same approach; adaptation customizes for local markets', 'Only applies to certain products', 'Based on company size'],
        correct: 'Standardization uses same approach; adaptation customizes for local markets',
        explanation: 'Standardization uses the same marketing approach globally; adaptation customizes marketing for local markets.',
        difficulty: 'hard'
      }
    ]
  }
];
