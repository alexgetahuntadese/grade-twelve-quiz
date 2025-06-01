
import { Chapter } from '../types';

export const economicsChapters: Chapter[] = [
  {
    id: 'basic_economics',
    name: 'Basic Economic Principles',
    description: 'Introduction to economic concepts and principles',
    questions: [
      // Easy Questions
      {
        id: 'econ_basic_easy_1',
        question: 'What is economics?',
        options: ['Study of money', 'Study of scarcity and choice', 'Study of business', 'Study of government'],
        correct: 'Study of scarcity and choice',
        explanation: 'Economics is the study of how people make choices when resources are scarce.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_2',
        question: 'What are the two main branches of economics?',
        options: ['Micro and Macro', 'Local and Global', 'Public and Private', 'Theory and Practice'],
        correct: 'Micro and Macro',
        explanation: 'Economics is divided into microeconomics and macroeconomics.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_3',
        question: 'What is opportunity cost?',
        options: ['The price of goods', 'Cost of production', 'Value of next best alternative', 'Total expenses'],
        correct: 'Value of next best alternative',
        explanation: 'Opportunity cost is the value of the next best alternative that is given up.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_4',
        question: 'What determines the price in a free market?',
        options: ['Government', 'Supply and demand', 'Production cost', 'Consumer income'],
        correct: 'Supply and demand',
        explanation: 'In a free market, prices are determined by the interaction of supply and demand.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_5',
        question: 'What is inflation?',
        options: ['Rising prices', 'Falling prices', 'Stable prices', 'No prices'],
        correct: 'Rising prices',
        explanation: 'Inflation is a general increase in prices over time.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_6',
        question: 'What is a market?',
        options: ['A building', 'Any place where buyers and sellers meet', 'A government office', 'A bank'],
        correct: 'Any place where buyers and sellers meet',
        explanation: 'A market is any mechanism that brings buyers and sellers together.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_7',
        question: 'What is demand?',
        options: ['What sellers offer', 'What buyers want and can afford', 'Government requirement', 'Bank loan'],
        correct: 'What buyers want and can afford',
        explanation: 'Demand is the quantity of goods consumers are willing and able to buy.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_8',
        question: 'What is supply?',
        options: ['What buyers want', 'What sellers offer for sale', 'Government regulation', 'Import goods'],
        correct: 'What sellers offer for sale',
        explanation: 'Supply is the quantity of goods producers are willing to offer for sale.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_9',
        question: 'What happens when demand exceeds supply?',
        options: ['Prices fall', 'Prices rise', 'Nothing changes', 'Government intervenes'],
        correct: 'Prices rise',
        explanation: 'When demand exceeds supply, prices tend to rise due to scarcity.',
        difficulty: 'easy'
      },
      {
        id: 'econ_basic_easy_10',
        question: 'What is profit?',
        options: ['Total sales', 'Revenue minus costs', 'Government tax', 'Employee wages'],
        correct: 'Revenue minus costs',
        explanation: 'Profit is what remains after subtracting all costs from revenue.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'econ_basic_med_1',
        question: 'What is GDP?',
        options: ['Government Debt Program', 'Gross Domestic Product', 'Global Development Plan', 'General Distribution Policy'],
        correct: 'Gross Domestic Product',
        explanation: 'GDP measures the total value of goods and services produced in a country.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_2',
        question: 'What is unemployment rate?',
        options: ['People without jobs divided by labor force', 'Total population without jobs', 'Government employees only', 'Retired people percentage'],
        correct: 'People without jobs divided by labor force',
        explanation: 'Unemployment rate is the percentage of the labor force that is unemployed.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_3',
        question: 'What is fiscal policy?',
        options: ['Monetary policy', 'Government spending and taxation', 'Trade policy', 'Employment policy'],
        correct: 'Government spending and taxation',
        explanation: 'Fiscal policy involves government decisions about spending and taxation.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_4',
        question: 'What is monetary policy?',
        options: ['Government spending', 'Central bank control of money supply', 'Trade regulations', 'Tax policy'],
        correct: 'Central bank control of money supply',
        explanation: 'Monetary policy involves central bank control of money supply and interest rates.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_5',
        question: 'What is elasticity of demand?',
        options: ['Price flexibility', 'Responsiveness to price changes', 'Supply changes', 'Market size'],
        correct: 'Responsiveness to price changes',
        explanation: 'Elasticity measures how responsive demand is to changes in price.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_6',
        question: 'What is a recession?',
        options: ['Economic growth', 'Economic decline', 'Stable economy', 'High inflation'],
        correct: 'Economic decline',
        explanation: 'A recession is a period of economic decline typically lasting six months or more.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_7',
        question: 'What is comparative advantage?',
        options: ['Being best at everything', 'Lower opportunity cost in production', 'Highest profits', 'Largest market share'],
        correct: 'Lower opportunity cost in production',
        explanation: 'Comparative advantage exists when a country can produce at lower opportunity cost.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_8',
        question: 'What causes economic growth?',
        options: ['Higher prices only', 'Increased productivity and resources', 'More money printing', 'Higher taxes'],
        correct: 'Increased productivity and resources',
        explanation: 'Economic growth comes from increased productivity and availability of resources.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_9',
        question: 'What is market failure?',
        options: ['Business closure', 'Market not allocating resources efficiently', 'Low prices', 'High demand'],
        correct: 'Market not allocating resources efficiently',
        explanation: 'Market failure occurs when markets do not allocate resources efficiently.',
        difficulty: 'medium'
      },
      {
        id: 'econ_basic_med_10',
        question: 'What is the business cycle?',
        options: ['Daily operations', 'Fluctuations in economic activity', 'Company lifecycle', 'Production process'],
        correct: 'Fluctuations in economic activity',
        explanation: 'The business cycle refers to the ups and downs in economic activity over time.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'econ_basic_hard_1',
        question: 'What is the marginal utility theory?',
        options: ['Utility increases with consumption', 'Utility decreases with each additional unit', 'Utility remains constant', 'Utility is unpredictable'],
        correct: 'Utility decreases with each additional unit',
        explanation: 'Marginal utility theory states that additional satisfaction decreases with each additional unit consumed.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_2',
        question: 'What is the Phillips Curve?',
        options: ['Supply and demand relationship', 'Inflation and unemployment tradeoff', 'Growth and investment', 'Import and export balance'],
        correct: 'Inflation and unemployment tradeoff',
        explanation: 'The Phillips Curve shows the inverse relationship between inflation and unemployment.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_3',
        question: 'What is deadweight loss?',
        options: ['Company losses', 'Efficiency loss from market distortions', 'Transportation costs', 'Storage costs'],
        correct: 'Efficiency loss from market distortions',
        explanation: 'Deadweight loss is the efficiency loss when supply and demand are not in equilibrium.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_4',
        question: 'What is the Laffer Curve?',
        options: ['Supply curve', 'Tax rate and tax revenue relationship', 'Demand curve', 'Production curve'],
        correct: 'Tax rate and tax revenue relationship',
        explanation: 'The Laffer Curve shows the relationship between tax rates and tax revenue.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_5',
        question: 'What is game theory in economics?',
        options: ['Sports economics', 'Strategic decision making', 'Market games', 'Computer modeling'],
        correct: 'Strategic decision making',
        explanation: 'Game theory analyzes strategic decision making where outcomes depend on others\' actions.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_6',
        question: 'What is the multiplier effect?',
        options: ['Price increases', 'Amplified impact of spending changes', 'Population growth', 'Technology advancement'],
        correct: 'Amplified impact of spending changes',
        explanation: 'The multiplier effect shows how initial spending changes have amplified economic impacts.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_7',
        question: 'What is asymmetric information?',
        options: ['Equal information', 'Unequal information between parties', 'No information', 'Too much information'],
        correct: 'Unequal information between parties',
        explanation: 'Asymmetric information occurs when one party has more or better information than another.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_8',
        question: 'What is moral hazard?',
        options: ['Ethical behavior', 'Increased risk-taking due to protection', 'Religious economics', 'Social responsibility'],
        correct: 'Increased risk-taking due to protection',
        explanation: 'Moral hazard is when protection from risk consequences leads to increased risk-taking.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_9',
        question: 'What is the efficient market hypothesis?',
        options: ['Markets always grow', 'Prices reflect all available information', 'Markets never fail', 'Government controls markets'],
        correct: 'Prices reflect all available information',
        explanation: 'The efficient market hypothesis states that asset prices reflect all available information.',
        difficulty: 'hard'
      },
      {
        id: 'econ_basic_hard_10',
        question: 'What is creative destruction?',
        options: ['Art and economics', 'Innovation replacing old technologies', 'Environmental damage', 'War economics'],
        correct: 'Innovation replacing old technologies',
        explanation: 'Creative destruction is the process of innovation continuously destroying and replacing old technologies.',
        difficulty: 'hard'
      }
    ]
  }
];
