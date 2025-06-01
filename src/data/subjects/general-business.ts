
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
      {
        id: 'bus_fund_easy_6',
        question: 'What is revenue?',
        options: ['Money spent', 'Money earned from sales', 'Number of employees', 'Business location'],
        correct: 'Money earned from sales',
        explanation: 'Revenue is the total money earned from selling goods or services.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_7',
        question: 'What is a target market?',
        options: ['Any customer', 'Specific group of potential customers', 'Employees', 'Competitors'],
        correct: 'Specific group of potential customers',
        explanation: 'A target market is a specific group of consumers a business aims to reach.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_8',
        question: 'What is a brand?',
        options: ['A product', 'A company\'s identity and reputation', 'A price', 'A location'],
        correct: 'A company\'s identity and reputation',
        explanation: 'A brand represents a company\'s identity, values, and reputation in the market.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_9',
        question: 'What is inventory?',
        options: ['Employees', 'Goods held for sale', 'Building space', 'Equipment'],
        correct: 'Goods held for sale',
        explanation: 'Inventory refers to goods and materials held by a business for sale.',
        difficulty: 'easy'
      },
      {
        id: 'bus_fund_easy_10',
        question: 'What is competition?',
        options: ['Cooperation', 'Other businesses offering similar products', 'Government regulation', 'Customer complaints'],
        correct: 'Other businesses offering similar products',
        explanation: 'Competition consists of other businesses that offer similar products or services.',
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
      {
        id: 'bus_fund_med_4',
        question: 'What is a SWOT analysis?',
        options: ['Sales report', 'Strengths, Weaknesses, Opportunities, Threats analysis', 'Employee evaluation', 'Product testing'],
        correct: 'Strengths, Weaknesses, Opportunities, Threats analysis',
        explanation: 'SWOT analysis evaluates internal strengths/weaknesses and external opportunities/threats.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_5',
        question: 'What is the marketing mix?',
        options: ['Different marketing teams', 'Product, Price, Place, Promotion', 'Various advertisements', 'Customer types'],
        correct: 'Product, Price, Place, Promotion',
        explanation: 'The marketing mix consists of the 4 Ps: Product, Price, Place, and Promotion.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_6',
        question: 'What is break-even point?',
        options: ['Maximum profit', 'Point where revenue equals costs', 'Best selling product', 'Highest price'],
        correct: 'Point where revenue equals costs',
        explanation: 'Break-even point is where total revenue equals total costs, resulting in no profit or loss.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_7',
        question: 'What is organizational structure?',
        options: ['Building design', 'How a company arranges its employees and departments', 'Product layout', 'Computer system'],
        correct: 'How a company arranges its employees and departments',
        explanation: 'Organizational structure defines how activities are coordinated to achieve company goals.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_8',
        question: 'What is supply chain management?',
        options: ['Employee training', 'Managing flow of goods from suppliers to customers', 'Marketing strategy', 'Financial planning'],
        correct: 'Managing flow of goods from suppliers to customers',
        explanation: 'Supply chain management oversees the flow of goods and services from suppliers to end customers.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_9',
        question: 'What is quality control?',
        options: ['Price setting', 'Ensuring products meet standards', 'Employee hiring', 'Market expansion'],
        correct: 'Ensuring products meet standards',
        explanation: 'Quality control ensures products or services meet established quality standards.',
        difficulty: 'medium'
      },
      {
        id: 'bus_fund_med_10',
        question: 'What is market segmentation?',
        options: ['Dividing market into distinct groups', 'Combining all customers', 'Setting prices', 'Opening new stores'],
        correct: 'Dividing market into distinct groups',
        explanation: 'Market segmentation divides a market into distinct groups with similar characteristics.',
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
        question: 'What is vertical integration?',
        options: ['Expanding horizontally', 'Controlling supply chain stages', 'Hiring more employees', 'Increasing prices'],
        correct: 'Controlling supply chain stages',
        explanation: 'Vertical integration involves controlling multiple stages of the supply chain.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_3',
        question: 'What is the concept of economies of scale?',
        options: ['Small production benefits', 'Cost advantages from large-scale production', 'Equal costs always', 'Increasing costs with size'],
        correct: 'Cost advantages from large-scale production',
        explanation: 'Economies of scale refer to cost advantages achieved through large-scale production.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_4',
        question: 'What is Porter\'s Five Forces model?',
        options: ['Marketing strategy', 'Framework for analyzing competitive environment', 'Financial planning tool', 'Employee management system'],
        correct: 'Framework for analyzing competitive environment',
        explanation: 'Porter\'s Five Forces analyzes competitive forces that shape industry profitability.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_5',
        question: 'What is lean management?',
        options: ['Reducing employees', 'Eliminating waste and improving efficiency', 'Decreasing quality', 'Lowering prices'],
        correct: 'Eliminating waste and improving efficiency',
        explanation: 'Lean management focuses on eliminating waste and continuously improving processes.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_6',
        question: 'What is the balanced scorecard approach?',
        options: ['Financial reporting only', 'Multi-perspective performance measurement', 'Single metric focus', 'Employee evaluation only'],
        correct: 'Multi-perspective performance measurement',
        explanation: 'Balanced scorecard measures performance from financial, customer, internal, and learning perspectives.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_7',
        question: 'What is strategic planning?',
        options: ['Daily operations', 'Long-term goal setting and resource allocation', 'Short-term planning only', 'Emergency response'],
        correct: 'Long-term goal setting and resource allocation',
        explanation: 'Strategic planning involves setting long-term goals and determining how to achieve them.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_8',
        question: 'What is the concept of first-mover advantage?',
        options: ['Being last to market', 'Benefits of entering market first', 'Following competitors', 'Waiting for others'],
        correct: 'Benefits of entering market first',
        explanation: 'First-mover advantage refers to benefits gained by being the first to enter a market.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_9',
        question: 'What is corporate social responsibility (CSR)?',
        options: ['Profit maximization only', 'Business commitment to ethical and social issues', 'Government requirement', 'Employee benefits'],
        correct: 'Business commitment to ethical and social issues',
        explanation: 'CSR is a business approach that contributes to sustainable development and social welfare.',
        difficulty: 'hard'
      },
      {
        id: 'bus_fund_hard_10',
        question: 'What is disruptive innovation?',
        options: ['Small improvements', 'Innovation that displaces established technologies', 'Expensive upgrades', 'Marketing campaigns'],
        correct: 'Innovation that displaces established technologies',
        explanation: 'Disruptive innovation creates new markets and displaces existing technologies or business models.',
        difficulty: 'hard'
      }
    ]
  }
];
