
import { Chapter } from '../types';

export const generalBusinessChapters: Chapter[] = [
  {
    id: 'business_fundamentals',
    name: 'Business Fundamentals',
    description: 'Basic business concepts and principles',
    questions: [
      // Easy Questions
      {
        id: 'business_1',
        question: 'What is a business?',
        options: ['Only profit-making organization', 'Organization providing goods or services', 'Government agency', 'Social club'],
        correct: 'Organization providing goods or services',
        explanation: 'A business is an organization that provides goods or services to meet customer needs.',
        difficulty: 'easy'
      },
      {
        id: 'business_2',
        question: 'What is profit?',
        options: ['Total sales', 'Revenue minus expenses', 'Number of customers', 'Business size'],
        correct: 'Revenue minus expenses',
        explanation: 'Profit is the amount left after subtracting expenses from revenue.',
        difficulty: 'easy'
      },
      {
        id: 'business_3',
        question: 'What is a customer?',
        options: ['Employee', 'Person who buys goods or services', 'Manager', 'Supplier'],
        correct: 'Person who buys goods or services',
        explanation: 'A customer is someone who purchases goods or services from a business.',
        difficulty: 'easy'
      },
      {
        id: 'business_4',
        question: 'What is marketing?',
        options: ['Only advertising', 'Activities to promote and sell products', 'Manufacturing process', 'Financial planning'],
        correct: 'Activities to promote and sell products',
        explanation: 'Marketing includes all activities involved in promoting and selling products or services.',
        difficulty: 'easy'
      },
      {
        id: 'business_5',
        question: 'What is an entrepreneur?',
        options: ['Employee', 'Person who starts and runs a business', 'Customer', 'Government official'],
        correct: 'Person who starts and runs a business',
        explanation: 'An entrepreneur is someone who starts and operates a new business venture.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'business_med_1',
        question: 'What are the four Ps of marketing?',
        options: ['People, Process, Physical, Performance', 'Product, Price, Place, Promotion', 'Profit, Purpose, Plan, Performance', 'Production, Planning, Pricing, Purchasing'],
        correct: 'Product, Price, Place, Promotion',
        explanation: 'The marketing mix consists of Product, Price, Place (distribution), and Promotion.',
        difficulty: 'medium'
      },
      {
        id: 'business_med_2',
        question: 'What is market research?',
        options: ['Selling products', 'Gathering information about customers and markets', 'Manufacturing goods', 'Hiring employees'],
        correct: 'Gathering information about customers and markets',
        explanation: 'Market research involves collecting and analyzing information about customers, competitors, and market conditions.',
        difficulty: 'medium'
      },
      {
        id: 'business_med_3',
        question: 'What is a business plan?',
        options: ['Daily schedule', 'Document outlining business goals and strategies', 'Employee handbook', 'Financial statement'],
        correct: 'Document outlining business goals and strategies',
        explanation: 'A business plan is a written document that describes business objectives and how to achieve them.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'business_hard_1',
        question: 'What is a SWOT analysis?',
        options: ['Financial analysis', 'Strengths, Weaknesses, Opportunities, Threats analysis', 'Employee evaluation', 'Production analysis'],
        correct: 'Strengths, Weaknesses, Opportunities, Threats analysis',
        explanation: 'SWOT analysis examines internal Strengths and Weaknesses, and external Opportunities and Threats.',
        difficulty: 'hard'
      },
      {
        id: 'business_hard_2',
        question: 'What is the difference between B2B and B2C?',
        options: ['No difference', 'B2B: business to business, B2C: business to consumer', 'Different industries only', 'Different sizes only'],
        correct: 'B2B: business to business, B2C: business to consumer',
        explanation: 'B2B involves selling to other businesses; B2C involves selling directly to individual consumers.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_business_management',
    name: 'Grade 11: Business Management and Organization',
    description: 'Management principles, organizational structure, and leadership',
    questions: [
      // Easy Questions
      {
        id: 'g11_mgmt_easy_1',
        question: 'What is management?',
        options: ['Owning a business', 'Process of coordinating resources to achieve goals', 'Making products', 'Selling services'],
        correct: 'Process of coordinating resources to achieve goals',
        explanation: 'Management is the process of planning, organizing, leading, and controlling resources to achieve organizational goals.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_2',
        question: 'What are the four functions of management?',
        options: ['Buy, sell, make, deliver', 'Planning, organizing, leading, controlling', 'Hire, train, pay, fire', 'Research, develop, produce, market'],
        correct: 'Planning, organizing, leading, controlling',
        explanation: 'The four basic management functions are planning, organizing, leading, and controlling.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_3',
        question: 'What is leadership?',
        options: ['Being the boss', 'Influencing others to achieve goals', 'Making all decisions', 'Having authority'],
        correct: 'Influencing others to achieve goals',
        explanation: 'Leadership is the ability to influence others to work toward achieving common goals.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_4',
        question: 'What is delegation?',
        options: ['Doing everything yourself', 'Assigning tasks to others', 'Avoiding responsibility', 'Making decisions'],
        correct: 'Assigning tasks to others',
        explanation: 'Delegation is the process of assigning tasks and authority to subordinates.',
        difficulty: 'easy'
      },
      {
        id: 'g11_mgmt_easy_5',
        question: 'What is teamwork?',
        options: ['Individual effort', 'People working together toward common goal', 'Competition between workers', 'Management control'],
        correct: 'People working together toward common goal',
        explanation: 'Teamwork involves people collaborating effectively to achieve shared objectives.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_mgmt_med_1',
        question: 'What is organizational structure?',
        options: ['Building design', 'How authority and tasks are arranged', 'Company size', 'Number of employees'],
        correct: 'How authority and tasks are arranged',
        explanation: 'Organizational structure defines how authority, roles, and responsibilities are arranged within a company.',
        difficulty: 'medium'
      },
      {
        id: 'g11_mgmt_med_2',
        question: 'What is the difference between autocratic and democratic leadership?',
        options: ['No difference', 'Autocratic: leader decides alone, Democratic: involves others in decisions', 'Only in government', 'Only in elections'],
        correct: 'Autocratic: leader decides alone, Democratic: involves others in decisions',
        explanation: 'Autocratic leaders make decisions independently; democratic leaders involve others in decision-making.',
        difficulty: 'medium'
      },
      {
        id: 'g11_mgmt_med_3',
        question: 'What is motivation in management?',
        options: ['Paying employees', 'Inspiring people to perform their best', 'Setting rules', 'Monitoring work'],
        correct: 'Inspiring people to perform their best',
        explanation: 'Motivation involves inspiring and encouraging employees to perform at their highest level.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_mgmt_hard_1',
        question: 'What is Maslow\'s hierarchy of needs?',
        options: ['Management theory', 'Theory about human motivation and needs', 'Organizational structure', 'Leadership style'],
        correct: 'Theory about human motivation and needs',
        explanation: 'Maslow\'s hierarchy suggests people are motivated by five levels of needs, from basic survival to self-actualization.',
        difficulty: 'hard'
      },
      {
        id: 'g11_mgmt_hard_2',
        question: 'What is span of control?',
        options: ['Management authority', 'Number of subordinates a manager supervises', 'Company ownership', 'Decision-making power'],
        correct: 'Number of subordinates a manager supervises',
        explanation: 'Span of control refers to the number of subordinates that a manager directly supervises.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_business_finance',
    name: 'Grade 12: Business Finance and Accounting',
    description: 'Financial statements, budgeting, and business financing',
    questions: [
      // Easy Questions
      {
        id: 'g12_finance_easy_1',
        question: 'What is accounting?',
        options: ['Counting money', 'Recording and summarizing financial information', 'Banking services', 'Investment advice'],
        correct: 'Recording and summarizing financial information',
        explanation: 'Accounting is the systematic recording, measuring, and communication of financial information.',
        difficulty: 'easy'
      },
      {
        id: 'g12_finance_easy_2',
        question: 'What is revenue?',
        options: ['Money spent', 'Money earned from sales', 'Profit', 'Expenses'],
        correct: 'Money earned from sales',
        explanation: 'Revenue is the total amount of money earned from selling goods or services.',
        difficulty: 'easy'
      },
      {
        id: 'g12_finance_easy_3',
        question: 'What are expenses?',
        options: ['Money earned', 'Costs of running business', 'Assets owned', 'Loans received'],
        correct: 'Costs of running business',
        explanation: 'Expenses are the costs incurred in the normal operation of a business.',
        difficulty: 'easy'
      },
      {
        id: 'g12_finance_easy_4',
        question: 'What is a budget?',
        options: ['Bank account', 'Plan for spending and earning money', 'Financial statement', 'Loan application'],
        correct: 'Plan for spending and earning money',
        explanation: 'A budget is a plan that estimates future income and expenses over a specific period.',
        difficulty: 'easy'
      },
      {
        id: 'g12_finance_easy_5',
        question: 'What is cash flow?',
        options: ['Total sales', 'Movement of money in and out of business', 'Profit margin', 'Asset value'],
        correct: 'Movement of money in and out of business',
        explanation: 'Cash flow refers to the movement of money into and out of a business over time.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_finance_med_1',
        question: 'What are the three main financial statements?',
        options: ['Budget, forecast, plan', 'Income statement, balance sheet, cash flow statement', 'Assets, liabilities, equity', 'Revenue, expenses, profit'],
        correct: 'Income statement, balance sheet, cash flow statement',
        explanation: 'The three main financial statements are the income statement, balance sheet, and cash flow statement.',
        difficulty: 'medium'
      },
      {
        id: 'g12_finance_med_2',
        question: 'What is the difference between assets and liabilities?',
        options: ['No difference', 'Assets: what you own, Liabilities: what you owe', 'Only accounting terms', 'Only for large businesses'],
        correct: 'Assets: what you own, Liabilities: what you owe',
        explanation: 'Assets are resources owned by the business; liabilities are debts or obligations owed by the business.',
        difficulty: 'medium'
      },
      {
        id: 'g12_finance_med_3',
        question: 'What is return on investment (ROI)?',
        options: ['Investment amount', 'Measure of investment efficiency', 'Type of investment', 'Investment risk'],
        correct: 'Measure of investment efficiency',
        explanation: 'ROI measures the efficiency of an investment by comparing gain or loss relative to investment cost.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_finance_hard_1',
        question: 'What is the accounting equation?',
        options: ['Revenue - Expenses = Profit', 'Assets = Liabilities + Equity', 'Income = Expenses + Savings', 'Sales = Costs + Margin'],
        correct: 'Assets = Liabilities + Equity',
        explanation: 'The fundamental accounting equation states that Assets = Liabilities + Owner\'s Equity.',
        difficulty: 'hard'
      },
      {
        id: 'g12_finance_hard_2',
        question: 'What is working capital?',
        options: ['Total capital', 'Current assets minus current liabilities', 'Fixed assets', 'Long-term debt'],
        correct: 'Current assets minus current liabilities',
        explanation: 'Working capital is the difference between current assets and current liabilities, indicating short-term financial health.',
        difficulty: 'hard'
      }
    ]
  }
];
