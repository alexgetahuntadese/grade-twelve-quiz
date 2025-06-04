
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
      }
    ]
  },
  
  {
    id: 'grade11_microeconomics',
    name: 'Grade 11: Microeconomics',
    description: 'Study of individual economic units and market structures',
    questions: [
      // Easy Questions
      {
        id: 'g11_micro_easy_1',
        question: 'What is microeconomics?',
        options: ['Study of small countries', 'Study of individual economic units', 'Study of the entire economy', 'Study of economic history'],
        correct: 'Study of individual economic units',
        explanation: 'Microeconomics is the study of individuals, households, and firms in making decisions regarding resource allocation.',
        difficulty: 'easy'
      },
      {
        id: 'g11_micro_easy_2',
        question: 'What is a monopoly?',
        options: ['Many sellers', 'One seller', 'Government control', 'International trade'],
        correct: 'One seller',
        explanation: 'A monopoly is a market structure with a single seller of a unique product.',
        difficulty: 'easy'
      },
      {
        id: 'g11_micro_easy_3',
        question: 'What is perfect competition?',
        options: ['One dominant firm', 'No competition allowed', 'Many firms selling identical products', 'Government control'],
        correct: 'Many firms selling identical products',
        explanation: 'Perfect competition involves many firms selling identical products with no barriers to entry.',
        difficulty: 'easy'
      },
      {
        id: 'g11_micro_easy_4',
        question: 'What is consumer surplus?',
        options: ['Government budget excess', 'Profit', 'Difference between willingness to pay and price paid', 'Extra production'],
        correct: 'Difference between willingness to pay and price paid',
        explanation: 'Consumer surplus is the difference between what consumers are willing to pay and what they actually pay.',
        difficulty: 'easy'
      },
      {
        id: 'g11_micro_easy_5',
        question: 'What is a production possibility frontier?',
        options: ['Factory location', 'Maximum output combinations', 'Trade barrier', 'Budget limit'],
        correct: 'Maximum output combinations',
        explanation: 'A production possibility frontier shows the maximum possible combinations of two goods that can be produced.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g11_micro_med_1',
        question: 'What is price elasticity of demand?',
        options: ['Price flexibility', 'Measure of responsiveness to price changes', 'Government control of prices', 'Supply increase'],
        correct: 'Measure of responsiveness to price changes',
        explanation: 'Price elasticity of demand measures how quantity demanded responds to price changes.',
        difficulty: 'medium'
      },
      {
        id: 'g11_micro_med_2',
        question: 'What is oligopoly?',
        options: ['Single seller', 'Few large sellers', 'Many small sellers', 'Government monopoly'],
        correct: 'Few large sellers',
        explanation: 'Oligopoly is a market structure with a few large sellers who have significant market power.',
        difficulty: 'medium'
      },
      {
        id: 'g11_micro_med_3',
        question: 'What is marginal cost?',
        options: ['Average cost', 'Fixed cost', 'Cost of producing one more unit', 'Total cost'],
        correct: 'Cost of producing one more unit',
        explanation: 'Marginal cost is the additional cost of producing one more unit of output.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g11_micro_hard_1',
        question: 'What is the Nash equilibrium in game theory?',
        options: ['Always best strategy', 'Situation where no player can benefit by changing strategy', 'Government regulation', 'Maximum profit'],
        correct: 'Situation where no player can benefit by changing strategy',
        explanation: 'Nash equilibrium is when no player can benefit by changing only their own strategy while others keep theirs unchanged.',
        difficulty: 'hard'
      },
      {
        id: 'g11_micro_hard_2',
        question: 'How does a monopolistically competitive firm differ from a perfectly competitive firm in long-run equilibrium?',
        options: ['No difference', 'Monopolistic competition produces at excess capacity', 'Perfect competition has higher prices', 'Government regulates differently'],
        correct: 'Monopolistic competition produces at excess capacity',
        explanation: 'In monopolistic competition, firms produce at excess capacity and don\'t achieve minimum average cost, unlike perfect competition.',
        difficulty: 'hard'
      }
    ]
  },
  
  {
    id: 'grade12_macroeconomics',
    name: 'Grade 12: Macroeconomics',
    description: 'Study of economy-wide phenomena including inflation, growth, and employment',
    questions: [
      // Easy Questions
      {
        id: 'g12_macro_easy_1',
        question: 'What is macroeconomics?',
        options: ['Study of individual households', 'Study of economy as a whole', 'Study of business operations', 'Study of government only'],
        correct: 'Study of economy as a whole',
        explanation: 'Macroeconomics is the study of the economy as a whole, including inflation, growth, and employment.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_easy_2',
        question: 'What is economic growth?',
        options: ['Price increases', 'Increase in economic output', 'Population growth', 'More businesses'],
        correct: 'Increase in economic output',
        explanation: 'Economic growth is an increase in the production of goods and services over time.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_easy_3',
        question: 'What is recession?',
        options: ['Economic boom', 'Period of declining economic activity', 'Price stability', 'Government surplus'],
        correct: 'Period of declining economic activity',
        explanation: 'A recession is a period of declining economic activity, usually defined as two consecutive quarters of negative GDP growth.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_easy_4',
        question: 'What is aggregate demand?',
        options: ['Individual demand', 'Total demand for goods and services', 'Government spending', 'Business investment'],
        correct: 'Total demand for goods and services',
        explanation: 'Aggregate demand is the total demand for all goods and services in an economy.',
        difficulty: 'easy'
      },
      {
        id: 'g12_macro_easy_5',
        question: 'What is the central bank\'s main responsibility?',
        options: ['Government spending', 'Tax collection', 'Monetary policy', 'Foreign trade'],
        correct: 'Monetary policy',
        explanation: 'The central bank is responsible for monetary policy, managing money supply and interest rates.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_macro_med_1',
        question: 'What is the multiplier effect?',
        options: ['Population growth', 'Change in output greater than initial change in spending', 'Tax rate increase', 'International trade'],
        correct: 'Change in output greater than initial change in spending',
        explanation: 'The multiplier effect occurs when an initial change in spending leads to a larger change in output.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_med_2',
        question: 'What is the difference between real and nominal GDP?',
        options: ['No difference', 'Real GDP adjusts for inflation', 'Nominal is more accurate', 'Real only counts certain sectors'],
        correct: 'Real GDP adjusts for inflation',
        explanation: 'Real GDP adjusts for inflation, while nominal GDP does not.',
        difficulty: 'medium'
      },
      {
        id: 'g12_macro_med_3',
        question: 'What is the business cycle?',
        options: ['Daily business operations', 'Regular fluctuations in economic activity', 'Company lifecycle', 'Corporate strategy'],
        correct: 'Regular fluctuations in economic activity',
        explanation: 'The business cycle refers to the regular fluctuations in economic activity over time.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_macro_hard_1',
        question: 'How does the IS-LM model analyze macroeconomic equilibrium?',
        options: ['Supply and demand only', 'Interest rates and output in goods and money markets', 'International trade', 'Government spending only'],
        correct: 'Interest rates and output in goods and money markets',
        explanation: 'IS-LM model shows how interest rates and output are determined by equilibrium in goods and money markets.',
        difficulty: 'hard'
      },
      {
        id: 'g12_macro_hard_2',
        question: 'What is the difference between demand-pull and cost-push inflation?',
        options: ['No difference', 'Demand-pull from excess demand, cost-push from higher production costs', 'Apply to different countries', 'Government regulation'],
        correct: 'Demand-pull from excess demand, cost-push from higher production costs',
        explanation: 'Demand-pull inflation results from excess aggregate demand, while cost-push inflation results from higher production costs.',
        difficulty: 'hard'
      }
    ]
  }
];
