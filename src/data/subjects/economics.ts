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
  
  // Grade 12 New Curriculum Units
  {
    id: 'grade12_unit1_macroeconomics_concepts',
    name: 'Grade 12 Unit 1: The Fundamental Concepts of Macroeconomics',
    description: 'Basic macroeconomic concepts, national income accounting, and economic indicators',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit1_easy_1',
        question: 'What is macroeconomics?',
        options: ['Study of individual firms', 'Study of the economy as a whole', 'Study of consumer behavior', 'Study of market prices'],
        correct: 'Study of the economy as a whole',
        explanation: 'Macroeconomics is the branch of economics that studies the economy as a whole, including inflation, growth, and employment.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit1_easy_2',
        question: 'What does GDP measure?',
        options: ['Government debt', 'Total production in the economy', 'Population growth', 'Export levels'],
        correct: 'Total production in the economy',
        explanation: 'Gross Domestic Product (GDP) measures the total value of goods and services produced in an economy.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit1_easy_3',
        question: 'What is inflation?',
        options: ['Decrease in prices', 'Increase in general price level', 'Stable prices', 'Government spending'],
        correct: 'Increase in general price level',
        explanation: 'Inflation is a sustained increase in the general price level of goods and services.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit1_med_1',
        question: 'What is the difference between nominal and real GDP?',
        options: ['No difference', 'Real GDP adjusts for inflation', 'Nominal is always higher', 'Real includes imports'],
        correct: 'Real GDP adjusts for inflation',
        explanation: 'Real GDP adjusts for inflation to show the actual change in production, while nominal GDP uses current prices.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit1_med_2',
        question: 'What are the main components of GDP using the expenditure approach?',
        options: ['C + I + G + (X-M)', 'Only consumption', 'Only government spending', 'Only investment'],
        correct: 'C + I + G + (X-M)',
        explanation: 'GDP = Consumption + Investment + Government spending + Net exports (exports minus imports).',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit1_hard_1',
        question: 'What is the GDP deflator?',
        options: ['Price index measuring inflation', 'Government tax rate', 'Exchange rate', 'Interest rate'],
        correct: 'Price index measuring inflation',
        explanation: 'The GDP deflator is a price index that measures the level of prices of all domestically produced goods and services.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit2_aggregate_demand_supply',
    name: 'Grade 12 Unit 2: Aggregate Demand and Aggregate Supply Analysis',
    description: 'Analysis of aggregate demand, aggregate supply, and macroeconomic equilibrium',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit2_easy_1',
        question: 'What is aggregate demand?',
        options: ['Individual consumer demand', 'Total demand for goods and services', 'Government demand only', 'Foreign demand'],
        correct: 'Total demand for goods and services',
        explanation: 'Aggregate demand is the total demand for all goods and services in the economy at different price levels.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit2_easy_2',
        question: 'What happens to aggregate demand when the price level increases?',
        options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
        correct: 'Decreases',
        explanation: 'Higher price levels reduce purchasing power, leading to lower aggregate demand.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit2_med_1',
        question: 'What shifts the aggregate demand curve to the right?',
        options: ['Decrease in consumer confidence', 'Increase in government spending', 'Higher taxes', 'Reduced exports'],
        correct: 'Increase in government spending',
        explanation: 'Increased government spending raises total demand, shifting the AD curve rightward.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit2_med_2',
        question: 'What is the shape of the long-run aggregate supply curve?',
        options: ['Upward sloping', 'Downward sloping', 'Vertical', 'Horizontal'],
        correct: 'Vertical',
        explanation: 'The LRAS curve is vertical, indicating that in the long run, output is determined by factors of production, not price level.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit2_hard_1',
        question: 'What causes stagflation?',
        options: ['Demand-pull inflation', 'Cost-push inflation with recession', 'Deflation', 'Economic growth'],
        correct: 'Cost-push inflation with recession',
        explanation: 'Stagflation occurs when cost-push factors increase prices while reducing output, causing both inflation and recession.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit3_market_failure',
    name: 'Grade 12 Unit 3: Market Failure and Consumer Protection',
    description: 'Understanding market failures, externalities, public goods, and consumer protection mechanisms',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit3_easy_1',
        question: 'What is market failure?',
        options: ['Market closing down', 'Market not allocating resources efficiently', 'Government intervention', 'Price controls'],
        correct: 'Market not allocating resources efficiently',
        explanation: 'Market failure occurs when free markets fail to allocate resources efficiently.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit3_easy_2',
        question: 'What is a negative externality?',
        options: ['Benefit to third parties', 'Cost imposed on third parties', 'Government regulation', 'Market competition'],
        correct: 'Cost imposed on third parties',
        explanation: 'A negative externality is a cost imposed on third parties who are not involved in the transaction.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit3_med_1',
        question: 'What is a public good?',
        options: ['Good sold by government', 'Non-excludable and non-rival good', 'Expensive good', 'Imported good'],
        correct: 'Non-excludable and non-rival good',
        explanation: 'Public goods are non-excludable (cannot prevent usage) and non-rival (one person\'s use doesn\'t reduce availability).',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit3_med_2',
        question: 'How can government correct negative externalities?',
        options: ['Subsidies', 'Taxes or regulations', 'Price controls', 'Import restrictions'],
        correct: 'Taxes or regulations',
        explanation: 'Governments can use taxes (Pigouvian taxes) or regulations to internalize external costs.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit3_hard_1',
        question: 'What is the Coase theorem?',
        options: ['Government should always intervene', 'Private parties can solve externalities with clear property rights', 'Markets always fail', 'Taxes solve all problems'],
        correct: 'Private parties can solve externalities with clear property rights',
        explanation: 'The Coase theorem states that private parties can negotiate solutions to externality problems when property rights are well-defined and transaction costs are low.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit4_macroeconomic_policy',
    name: 'Grade 12 Unit 4: Macroeconomic Policy Instruments',
    description: 'Fiscal policy, monetary policy, and their effects on the economy',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit4_easy_1',
        question: 'What is fiscal policy?',
        options: ['Central bank policy', 'Government spending and taxation policy', 'Trade policy', 'Exchange rate policy'],
        correct: 'Government spending and taxation policy',
        explanation: 'Fiscal policy involves government decisions about spending and taxation to influence the economy.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit4_easy_2',
        question: 'What is monetary policy?',
        options: ['Government spending', 'Central bank control of money supply', 'Tax policy', 'Trade regulations'],
        correct: 'Central bank control of money supply',
        explanation: 'Monetary policy involves central bank control of money supply and interest rates.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit4_med_1',
        question: 'What is expansionary fiscal policy?',
        options: ['Cutting government spending', 'Increasing taxes', 'Increasing spending or cutting taxes', 'Reducing money supply'],
        correct: 'Increasing spending or cutting taxes',
        explanation: 'Expansionary fiscal policy involves increasing government spending or cutting taxes to stimulate economic growth.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit4_med_2',
        question: 'What tool does the central bank use to control money supply?',
        options: ['Government spending', 'Interest rates', 'Tax rates', 'Exchange rates'],
        correct: 'Interest rates',
        explanation: 'Central banks primarily use interest rates to control money supply and influence economic activity.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit4_hard_1',
        question: 'What is the liquidity trap?',
        options: ['High inflation', 'Interest rates near zero with ineffective monetary policy', 'Government default', 'Currency crisis'],
        correct: 'Interest rates near zero with ineffective monetary policy',
        explanation: 'A liquidity trap occurs when interest rates are near zero and monetary policy becomes ineffective in stimulating the economy.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit5_tax_theory',
    name: 'Grade 12 Unit 5: Tax Theory and Practice',
    description: 'Principles of taxation, tax systems, and fiscal policy implementation',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit5_easy_1',
        question: 'What is a tax?',
        options: ['Voluntary payment', 'Compulsory payment to government', 'Business expense', 'Investment return'],
        correct: 'Compulsory payment to government',
        explanation: 'A tax is a compulsory financial charge imposed by the government on individuals or businesses.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit5_easy_2',
        question: 'What is direct tax?',
        options: ['Tax on goods', 'Tax on income and wealth', 'Import tax', 'Sales tax'],
        correct: 'Tax on income and wealth',
        explanation: 'Direct taxes are levied directly on income and wealth of individuals and organizations.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit5_med_1',
        question: 'What is a progressive tax system?',
        options: ['Same rate for everyone', 'Higher rates for higher incomes', 'Lower rates for higher incomes', 'No taxes'],
        correct: 'Higher rates for higher incomes',
        explanation: 'A progressive tax system has higher tax rates for higher income levels.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit5_med_2',
        question: 'What is tax incidence?',
        options: ['Tax rate', 'Who ultimately bears the tax burden', 'Tax collection method', 'Tax evasion'],
        correct: 'Who ultimately bears the tax burden',
        explanation: 'Tax incidence refers to who ultimately bears the burden of a tax, which may differ from who legally pays it.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit5_hard_1',
        question: 'What is the Laffer curve?',
        options: ['Tax collection efficiency', 'Relationship between tax rates and tax revenue', 'Government spending curve', 'Inflation measurement'],
        correct: 'Relationship between tax rates and tax revenue',
        explanation: 'The Laffer curve illustrates the relationship between tax rates and tax revenue, showing that very high tax rates can reduce total revenue.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit6_poverty_inequality',
    name: 'Grade 12 Unit 6: Poverty and Inequality',
    description: 'Understanding poverty, income inequality, and policies to address them',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit6_easy_1',
        question: 'What is absolute poverty?',
        options: ['Relative to average income', 'Below minimum living standards', 'Urban poverty only', 'Temporary poverty'],
        correct: 'Below minimum living standards',
        explanation: 'Absolute poverty refers to a condition where people lack basic necessities for minimum living standards.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit6_easy_2',
        question: 'What is income inequality?',
        options: ['Everyone earns the same', 'Unequal distribution of income', 'Government control of wages', 'International trade'],
        correct: 'Unequal distribution of income',
        explanation: 'Income inequality refers to the unequal distribution of income among individuals or groups in society.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit6_med_1',
        question: 'What is the Gini coefficient?',
        options: ['Poverty rate', 'Measure of income inequality', 'Economic growth rate', 'Unemployment rate'],
        correct: 'Measure of income inequality',
        explanation: 'The Gini coefficient is a statistical measure of income inequality, ranging from 0 (perfect equality) to 1 (perfect inequality).',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit6_med_2',
        question: 'What is relative poverty?',
        options: ['Fixed income level', 'Income below average in society', 'Rural poverty only', 'Temporary situation'],
        correct: 'Income below average in society',
        explanation: 'Relative poverty is defined as having income below a certain percentage of the median income in society.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit6_hard_1',
        question: 'What is the poverty trap?',
        options: ['Government program', 'Cycle where poverty perpetuates itself', 'International aid', 'Economic policy'],
        correct: 'Cycle where poverty perpetuates itself',
        explanation: 'A poverty trap is a mechanism that makes it very difficult for people to escape poverty, creating a self-reinforcing cycle.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit7_ethiopia_reforms',
    name: 'Grade 12 Unit 7: Macroeconomic Reforms in Ethiopia',
    description: 'Economic reforms, structural adjustment, and development strategies in Ethiopia',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit7_easy_1',
        question: 'What is economic reform?',
        options: ['Keeping policies unchanged', 'Changing economic policies and institutions', 'Only increasing spending', 'Reducing all taxes'],
        correct: 'Changing economic policies and institutions',
        explanation: 'Economic reform involves changing economic policies and institutions to improve economic performance.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit7_easy_2',
        question: 'What is privatization?',
        options: ['Government taking control', 'Transferring ownership to private sector', 'Increasing regulations', 'Nationalizing industries'],
        correct: 'Transferring ownership to private sector',
        explanation: 'Privatization involves transferring ownership of state enterprises to the private sector.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit7_med_1',
        question: 'What is structural adjustment?',
        options: ['Building infrastructure', 'Economic reforms to improve efficiency', 'Population policy', 'Education reform'],
        correct: 'Economic reforms to improve efficiency',
        explanation: 'Structural adjustment refers to economic reforms designed to improve economic efficiency and competitiveness.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit7_med_2',
        question: 'What is liberalization?',
        options: ['Increasing government control', 'Reducing restrictions and regulations', 'Higher taxes', 'More bureaucracy'],
        correct: 'Reducing restrictions and regulations',
        explanation: 'Economic liberalization involves reducing government restrictions and regulations to allow more market freedom.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit7_hard_1',
        question: 'What is the Growth and Transformation Plan (GTP)?',
        options: ['Trade agreement', 'Ethiopia\'s development strategy', 'International loan', 'Currency reform'],
        correct: 'Ethiopia\'s development strategy',
        explanation: 'The Growth and Transformation Plan is Ethiopia\'s medium-term development strategy aimed at achieving economic transformation.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_unit8_environment_climate',
    name: 'Grade 12 Unit 8: Economy, Environment and Climate Change',
    description: 'Relationship between economic activities, environmental sustainability, and climate change',
    questions: [
      // Easy Questions
      {
        id: 'g12_unit8_easy_1',
        question: 'What is sustainable development?',
        options: ['Fast economic growth', 'Development meeting present needs without compromising future', 'Industrial development only', 'Urban development'],
        correct: 'Development meeting present needs without compromising future',
        explanation: 'Sustainable development meets present needs without compromising the ability of future generations to meet their needs.',
        difficulty: 'easy'
      },
      {
        id: 'g12_unit8_easy_2',
        question: 'What is an environmental externality?',
        options: ['Government policy', 'Environmental cost not reflected in market price', 'Natural disaster', 'Conservation program'],
        correct: 'Environmental cost not reflected in market price',
        explanation: 'Environmental externalities are environmental costs or benefits not reflected in market prices.',
        difficulty: 'easy'
      },
      // Medium Questions
      {
        id: 'g12_unit8_med_1',
        question: 'What is the Environmental Kuznets Curve?',
        options: ['Pollution increases with income', 'Pollution first increases then decreases with income', 'Pollution always decreases', 'No relationship'],
        correct: 'Pollution first increases then decreases with income',
        explanation: 'The Environmental Kuznets Curve suggests pollution increases with income initially, then decreases as countries become wealthier.',
        difficulty: 'medium'
      },
      {
        id: 'g12_unit8_med_2',
        question: 'What is carbon pricing?',
        options: ['Price of carbon products', 'Putting a price on carbon emissions', 'Cost of carbon removal', 'Carbon trading'],
        correct: 'Putting a price on carbon emissions',
        explanation: 'Carbon pricing involves putting a price on carbon emissions to internalize environmental costs.',
        difficulty: 'medium'
      },
      // Hard Questions
      {
        id: 'g12_unit8_hard_1',
        question: 'What is the tragedy of the commons?',
        options: ['Government failure', 'Overuse of shared resources leading to depletion', 'Market success', 'Private property'],
        correct: 'Overuse of shared resources leading to depletion',
        explanation: 'The tragedy of the commons occurs when shared resources are overused because individuals act in self-interest, leading to resource depletion.',
        difficulty: 'hard'
      }
    ]
  }
];
