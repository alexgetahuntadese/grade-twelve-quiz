
import { Chapter } from '../types';

export const economicsChapters: Chapter[] = [
  {
    id: 'microeconomics',
    name: 'Microeconomics',
    description: 'Individual economic behavior, markets, and pricing',
    questions: [
      // Easy Questions (10)
      {
        id: 'micro_easy_1',
        question: 'What is economics?',
        options: ['Study of money only', 'Study of scarcity and choice', 'Study of business only', 'Study of government'],
        correct: 'Study of scarcity and choice',
        explanation: 'Economics is the study of how societies allocate scarce resources to satisfy unlimited wants.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_2',
        question: 'What is scarcity?',
        options: ['Having too much', 'Limited resources relative to wants', 'No resources available', 'Unlimited resources'],
        correct: 'Limited resources relative to wants',
        explanation: 'Scarcity means resources are limited compared to people\'s unlimited wants and needs.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_3',
        question: 'What is opportunity cost?',
        options: ['Money spent', 'Best alternative forgone', 'Total cost', 'No cost'],
        correct: 'Best alternative forgone',
        explanation: 'Opportunity cost is the value of the best alternative that must be given up when making a choice.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_4',
        question: 'What is demand?',
        options: ['Supply of goods', 'Willingness and ability to buy', 'Price of goods', 'Production capacity'],
        correct: 'Willingness and ability to buy',
        explanation: 'Demand is the willingness and ability of consumers to purchase goods and services at various prices.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_5',
        question: 'What is supply?',
        options: ['Consumer wants', 'Willingness and ability to sell', 'Market price', 'Consumer demand'],
        correct: 'Willingness and ability to sell',
        explanation: 'Supply is the willingness and ability of producers to offer goods and services at various prices.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_6',
        question: 'What happens to demand when price increases?',
        options: ['Demand increases', 'Demand decreases', 'No change', 'Supply changes'],
        correct: 'Demand decreases',
        explanation: 'According to the law of demand, as price increases, quantity demanded decreases, all else equal.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_7',
        question: 'What happens to supply when price increases?',
        options: ['Supply decreases', 'Supply increases', 'No change', 'Demand changes'],
        correct: 'Supply increases',
        explanation: 'According to the law of supply, as price increases, quantity supplied increases, all else equal.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_8',
        question: 'What is a market?',
        options: ['Physical building only', 'Place where buyers and sellers interact', 'Government institution', 'Bank'],
        correct: 'Place where buyers and sellers interact',
        explanation: 'A market is any place or mechanism where buyers and sellers come together to exchange goods and services.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_9',
        question: 'What is price?',
        options: ['Cost of production', 'Value of good or service in exchange', 'Government decision', 'Random number'],
        correct: 'Value of good or service in exchange',
        explanation: 'Price is the value of a good or service expressed in terms of money or other goods.',
        difficulty: 'easy'
      },
      {
        id: 'micro_easy_10',
        question: 'What are factors of production?',
        options: ['Only money', 'Land, labor, capital, entrepreneurship', 'Only machines', 'Only workers'],
        correct: 'Land, labor, capital, entrepreneurship',
        explanation: 'The four factors of production are land, labor, capital, and entrepreneurship.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'micro_med_1',
        question: 'What is market equilibrium?',
        options: ['High prices', 'Point where supply equals demand', 'Low prices', 'No trading'],
        correct: 'Point where supply equals demand',
        explanation: 'Market equilibrium occurs where the quantity supplied equals the quantity demanded.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_2',
        question: 'What is price elasticity of demand?',
        options: ['Fixed prices', 'Responsiveness of demand to price changes', 'Supply changes', 'Government control'],
        correct: 'Responsiveness of demand to price changes',
        explanation: 'Price elasticity of demand measures how responsive quantity demanded is to changes in price.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_3',
        question: 'What makes demand elastic?',
        options: ['No substitutes', 'Many substitutes available', 'Necessity good', 'Inelastic supply'],
        correct: 'Many substitutes available',
        explanation: 'Demand is more elastic when there are many substitute goods available.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_4',
        question: 'What is marginal utility?',
        options: ['Total satisfaction', 'Additional satisfaction from one more unit', 'Average satisfaction', 'No satisfaction'],
        correct: 'Additional satisfaction from one more unit',
        explanation: 'Marginal utility is the additional satisfaction gained from consuming one more unit of a good.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_5',
        question: 'What is the law of diminishing marginal utility?',
        options: ['Utility always increases', 'Additional utility decreases with more consumption', 'Utility stays constant', 'Utility becomes negative'],
        correct: 'Additional utility decreases with more consumption',
        explanation: 'The law states that marginal utility decreases as more units of a good are consumed.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_6',
        question: 'What are normal goods?',
        options: ['Goods with falling demand when income rises', 'Goods with rising demand when income rises', 'Goods with constant demand', 'Free goods'],
        correct: 'Goods with rising demand when income rises',
        explanation: 'Normal goods have a positive income elasticity - demand increases as income increases.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_7',
        question: 'What are inferior goods?',
        options: ['High-quality goods', 'Goods with falling demand when income rises', 'Expensive goods', 'Luxury goods'],
        correct: 'Goods with falling demand when income rises',
        explanation: 'Inferior goods have negative income elasticity - demand decreases as income increases.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_8',
        question: 'What is consumer surplus?',
        options: ['Producer profit', 'Difference between willingness to pay and actual price', 'Total spending', 'Market price'],
        correct: 'Difference between willingness to pay and actual price',
        explanation: 'Consumer surplus is the difference between what consumers are willing to pay and what they actually pay.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_9',
        question: 'What is producer surplus?',
        options: ['Consumer benefit', 'Difference between price received and minimum acceptable price', 'Total revenue', 'Fixed costs'],
        correct: 'Difference between price received and minimum acceptable price',
        explanation: 'Producer surplus is the difference between the price received and the minimum price acceptable to producers.',
        difficulty: 'medium'
      },
      {
        id: 'micro_med_10',
        question: 'What shifts the demand curve?',
        options: ['Price changes', 'Income, preferences, related goods prices', 'Supply changes', 'Production costs'],
        correct: 'Income, preferences, related goods prices',
        explanation: 'Demand curve shifts are caused by changes in income, preferences, prices of related goods, expectations, etc.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'micro_hard_1',
        question: 'What is perfect competition?',
        options: ['Few large firms', 'Many firms, identical products, perfect information', 'One dominant firm', 'Government control'],
        correct: 'Many firms, identical products, perfect information',
        explanation: 'Perfect competition features many firms, homogeneous products, perfect information, and free entry/exit.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_2',
        question: 'What is monopoly?',
        options: ['Many competing firms', 'Single seller with no close substitutes', 'Government ownership', 'Perfect competition'],
        correct: 'Single seller with no close substitutes',
        explanation: 'A monopoly is a market structure with a single seller that faces no close substitute products.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_3',
        question: 'What is price discrimination?',
        options: ['Same price for all', 'Charging different prices for same product', 'Cost-based pricing', 'Free goods'],
        correct: 'Charging different prices for same product',
        explanation: 'Price discrimination involves charging different prices to different customers for the same product.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_4',
        question: 'What is marginal cost?',
        options: ['Total cost', 'Additional cost of producing one more unit', 'Average cost', 'Fixed cost'],
        correct: 'Additional cost of producing one more unit',
        explanation: 'Marginal cost is the additional cost incurred from producing one more unit of output.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_5',
        question: 'What is the profit-maximizing condition for firms?',
        options: ['MC = 0', 'MR = MC', 'TR = TC', 'AR = AC'],
        correct: 'MR = MC',
        explanation: 'Firms maximize profit where marginal revenue equals marginal cost (MR = MC).',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_6',
        question: 'What is deadweight loss?',
        options: ['Producer gain', 'Loss of economic efficiency', 'Consumer gain', 'Government revenue'],
        correct: 'Loss of economic efficiency',
        explanation: 'Deadweight loss is the reduction in economic efficiency that can occur when equilibrium is not achieved.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_7',
        question: 'What is externality?',
        options: ['Internal cost', 'Cost or benefit affecting third parties', 'Market price', 'Producer cost'],
        correct: 'Cost or benefit affecting third parties',
        explanation: 'An externality is a cost or benefit that affects parties who did not choose to incur that cost or benefit.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_8',
        question: 'What is the Coase theorem?',
        options: ['Government must intervene', 'Private parties can solve externalities with clear property rights', 'Markets always fail', 'Regulation is always needed'],
        correct: 'Private parties can solve externalities with clear property rights',
        explanation: 'The Coase theorem states that private parties can negotiate solutions to externality problems if property rights are well-defined.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_9',
        question: 'What is game theory?',
        options: ['Entertainment economics', 'Study of strategic decision-making', 'Market analysis only', 'Price theory'],
        correct: 'Study of strategic decision-making',
        explanation: 'Game theory analyzes strategic decision-making when the outcome depends on the actions of multiple decision-makers.',
        difficulty: 'hard'
      },
      {
        id: 'micro_hard_10',
        question: 'What is the Nash equilibrium?',
        options: ['No strategy needed', 'Point where no player wants to change strategy', 'Always cooperative', 'Government intervention'],
        correct: 'Point where no player wants to change strategy',
        explanation: 'Nash equilibrium is a situation where no player can improve their payoff by unilaterally changing their strategy.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade11_macroeconomics',
    name: 'Grade 11: Macroeconomics',
    description: 'National economy, GDP, inflation, and economic policy',
    questions: [
      // Easy Questions (10)
      {
        id: 'g11_macro_easy_1',
        question: 'What is macroeconomics?',
        options: ['Study of individual firms', 'Study of the economy as a whole', 'Study of markets only', 'Study of prices only'],
        correct: 'Study of the economy as a whole',
        explanation: 'Macroeconomics studies the economy as a whole, including national income, employment, and overall economic performance.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_2',
        question: 'What is GDP?',
        options: ['Government debt', 'Gross Domestic Product', 'Growth development plan', 'General domestic policy'],
        correct: 'Gross Domestic Product',
        explanation: 'GDP (Gross Domestic Product) is the total value of all goods and services produced in a country during a specific period.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_3',
        question: 'What is inflation?',
        options: ['Falling prices', 'Rising general price level', 'Constant prices', 'Zero prices'],
        correct: 'Rising general price level',
        explanation: 'Inflation is a sustained increase in the general price level of goods and services in an economy.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_4',
        question: 'What is unemployment?',
        options: ['Everyone working', 'People willing and able to work but cannot find jobs', 'Retirement', 'Vacation time'],
        correct: 'People willing and able to work but cannot find jobs',
        explanation: 'Unemployment refers to people who are willing and able to work but cannot find employment.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_5',
        question: 'What is a recession?',
        options: ['Economic growth', 'Economic decline for two consecutive quarters', 'Stable economy', 'Government spending'],
        correct: 'Economic decline for two consecutive quarters',
        explanation: 'A recession is typically defined as two consecutive quarters of negative economic growth.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_6',
        question: 'What is fiscal policy?',
        options: ['Monetary policy', 'Government spending and taxation policy', 'Trade policy', 'Labor policy'],
        correct: 'Government spending and taxation policy',
        explanation: 'Fiscal policy involves government decisions about spending and taxation to influence the economy.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_7',
        question: 'What is monetary policy?',
        options: ['Government spending', 'Central bank control of money supply and interest rates', 'Tax policy', 'Trade policy'],
        correct: 'Central bank control of money supply and interest rates',
        explanation: 'Monetary policy involves central bank actions to control the money supply and interest rates.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_8',
        question: 'What is the business cycle?',
        options: ['Daily business operations', 'Fluctuations in economic activity over time', 'Company profits', 'Market hours'],
        correct: 'Fluctuations in economic activity over time',
        explanation: 'The business cycle refers to the fluctuations in economic activity, including periods of expansion and contraction.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_9',
        question: 'What is aggregate demand?',
        options: ['Individual demand', 'Total demand for goods and services in economy', 'Supply of goods', 'Market price'],
        correct: 'Total demand for goods and services in economy',
        explanation: 'Aggregate demand is the total demand for all goods and services in an economy at different price levels.',
        difficulty: 'easy'
      },
      {
        id: 'g11_macro_easy_10',
        question: 'What is economic growth?',
        options: ['Population growth', 'Increase in countrys production of goods and services', 'Price increases', 'Government expansion'],
        correct: 'Increase in countrys production of goods and services',
        explanation: 'Economic growth is the increase in a country\'s production of goods and services over time.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g11_macro_med_1',
        question: 'What are the components of GDP?',
        options: ['Only consumption', 'Consumption, investment, government spending, net exports', 'Only government spending', 'Only exports'],
        correct: 'Consumption, investment, government spending, net exports',
        explanation: 'GDP = C + I + G + (X - M), where C is consumption, I is investment, G is government spending, and (X-M) is net exports.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_2',
        question: 'What is the difference between nominal and real GDP?',
        options: ['No difference', 'Nominal uses current prices, real uses constant prices', 'Only calculation method differs', 'Only time period differs'],
        correct: 'Nominal uses current prices, real uses constant prices',
        explanation: 'Nominal GDP uses current prices; real GDP uses constant prices to account for inflation.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_3',
        question: 'What causes cost-push inflation?',
        options: ['Increased demand', 'Increased production costs', 'Decreased demand', 'Government policy'],
        correct: 'Increased production costs',
        explanation: 'Cost-push inflation occurs when rising production costs force businesses to increase prices.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_4',
        question: 'What causes demand-pull inflation?',
        options: ['Rising costs', 'Excessive aggregate demand', 'Falling supply', 'Government intervention'],
        correct: 'Excessive aggregate demand',
        explanation: 'Demand-pull inflation occurs when aggregate demand exceeds aggregate supply, pulling prices up.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_5',
        question: 'What is the multiplier effect?',
        options: ['No effect', 'Initial spending creates larger total increase in economic activity', 'Decreasing effect', 'One-to-one effect'],
        correct: 'Initial spending creates larger total increase in economic activity',
        explanation: 'The multiplier effect shows how initial spending can create a larger overall increase in economic activity.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_6',
        question: 'What is automatic stabilizer?',
        options: ['Manual intervention', 'Economic policy that automatically adjusts to economic conditions', 'Fixed policy', 'No policy'],
        correct: 'Economic policy that automatically adjusts to economic conditions',
        explanation: 'Automatic stabilizers like unemployment benefits automatically adjust to economic conditions without new legislation.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_7',
        question: 'What is the natural rate of unemployment?',
        options: ['Zero unemployment', 'Unemployment rate when economy is at full employment', 'Maximum unemployment', 'Minimum unemployment'],
        correct: 'Unemployment rate when economy is at full employment',
        explanation: 'The natural rate of unemployment is the unemployment rate that exists when the economy is at full employment.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_8',
        question: 'What is stagflation?',
        options: ['Growth with inflation', 'Stagnant growth with inflation', 'Deflation with growth', 'Normal economic condition'],
        correct: 'Stagnant growth with inflation',
        explanation: 'Stagflation is the combination of stagnant economic growth and rising inflation.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_9',
        question: 'What is the Phillips curve?',
        options: ['Income distribution', 'Trade-off between unemployment and inflation', 'Production function', 'Demand curve'],
        correct: 'Trade-off between unemployment and inflation',
        explanation: 'The Phillips curve shows the historical inverse relationship between unemployment and inflation rates.',
        difficulty: 'medium'
      },
      {
        id: 'g11_macro_med_10',
        question: 'What is aggregate supply?',
        options: ['Individual supply', 'Total supply of goods and services in economy', 'Demand for goods', 'Market equilibrium'],
        correct: 'Total supply of goods and services in economy',
        explanation: 'Aggregate supply is the total supply of goods and services available in an economy at different price levels.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g11_macro_hard_1',
        question: 'What is the liquidity trap?',
        options: ['High interest rates', 'Monetary policy becomes ineffective at very low interest rates', 'Banking crisis', 'Currency devaluation'],
        correct: 'Monetary policy becomes ineffective at very low interest rates',
        explanation: 'A liquidity trap occurs when monetary policy becomes ineffective because interest rates are near zero.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_2',
        question: 'What is quantitative easing?',
        options: ['Raising interest rates', 'Central bank buying government bonds to increase money supply', 'Fiscal expansion', 'Trade liberalization'],
        correct: 'Central bank buying government bonds to increase money supply',
        explanation: 'Quantitative easing involves central banks purchasing government bonds to inject money into the economy.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_3',
        question: 'What is the IS-LM model?',
        options: ['Trade model', 'Model showing relationship between interest rates and output', 'Labor market model', 'Price determination model'],
        correct: 'Model showing relationship between interest rates and output',
        explanation: 'The IS-LM model shows the relationship between interest rates and real output in the goods and money markets.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_4',
        question: 'What is crowding out?',
        options: ['Government spending increases private investment', 'Government spending reduces private investment', 'No effect on investment', 'Increased exports'],
        correct: 'Government spending reduces private investment',
        explanation: 'Crowding out occurs when government borrowing leads to higher interest rates, reducing private investment.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_5',
        question: 'What is the Laffer curve?',
        options: ['Demand curve', 'Relationship between tax rates and tax revenue', 'Supply curve', 'Cost curve'],
        correct: 'Relationship between tax rates and tax revenue',
        explanation: 'The Laffer curve shows that there is an optimal tax rate that maximizes government revenue.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_6',
        question: 'What is rational expectations theory?',
        options: ['People are irrational', 'People make decisions based on available information and past experience', 'Government knows best', 'Markets are always wrong'],
        correct: 'People make decisions based on available information and past experience',
        explanation: 'Rational expectations theory assumes people make decisions using all available information and learn from past mistakes.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_7',
        question: 'What is the Taylor rule?',
        options: ['Fiscal policy rule', 'Monetary policy rule for setting interest rates', 'Trade policy rule', 'Labor market rule'],
        correct: 'Monetary policy rule for setting interest rates',
        explanation: 'The Taylor rule provides guidance for central banks on how to adjust interest rates based on inflation and output.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_8',
        question: 'What is hysteresis in economics?',
        options: ['No lasting effects', 'Temporary shocks have permanent effects', 'Only short-term effects', 'Cyclical patterns'],
        correct: 'Temporary shocks have permanent effects',
        explanation: 'Hysteresis refers to situations where temporary economic shocks have permanent effects on economic variables.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_9',
        question: 'What is the Mundell-Fleming model?',
        options: ['Closed economy model', 'Open economy model with capital mobility', 'Labor market model', 'Industry analysis'],
        correct: 'Open economy model with capital mobility',
        explanation: 'The Mundell-Fleming model extends IS-LM analysis to open economies with international capital mobility.',
        difficulty: 'hard'
      },
      {
        id: 'g11_macro_hard_10',
        question: 'What is the zero lower bound problem?',
        options: ['High inflation problem', 'Cannot lower nominal interest rates below zero', 'Exchange rate problem', 'Budget deficit problem'],
        correct: 'Cannot lower nominal interest rates below zero',
        explanation: 'The zero lower bound problem occurs when nominal interest rates cannot be lowered below zero, limiting monetary policy.',
        difficulty: 'hard'
      }
    ]
  },

  {
    id: 'grade12_development_economics',
    name: 'Grade 12: Development Economics',
    description: 'Economic development, poverty, and growth strategies',
    questions: [
      // Easy Questions (10)
      {
        id: 'g12_dev_easy_1',
        question: 'What is economic development?',
        options: ['Only economic growth', 'Improvement in living standards and quality of life', 'Population growth', 'Industrial growth only'],
        correct: 'Improvement in living standards and quality of life',
        explanation: 'Economic development encompasses improvements in living standards, health, education, and overall quality of life.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_2',
        question: 'What is the difference between growth and development?',
        options: ['No difference', 'Growth: quantity increase, Development: quality improvement', 'Only measurement differs', 'Only time frame differs'],
        correct: 'Growth: quantity increase, Development: quality improvement',
        explanation: 'Growth refers to quantitative increases (like GDP), while development includes qualitative improvements in welfare.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_3',
        question: 'What is poverty?',
        options: ['Middle income', 'Lack of basic necessities for decent living', 'Wealth accumulation', 'Economic growth'],
        correct: 'Lack of basic necessities for decent living',
        explanation: 'Poverty is the condition where people lack basic necessities like food, shelter, healthcare, and education.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_4',
        question: 'What is the Human Development Index (HDI)?',
        options: ['Only income measure', 'Composite measure of health, education, and income', 'Population measure', 'Government efficiency measure'],
        correct: 'Composite measure of health, education, and income',
        explanation: 'HDI combines life expectancy, education, and income indicators to measure human development.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_5',
        question: 'What are developing countries?',
        options: ['High-income countries', 'Countries with lower income and development levels', 'Only African countries', 'Industrial countries'],
        correct: 'Countries with lower income and development levels',
        explanation: 'Developing countries generally have lower per capita incomes and less developed economic structures.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_6',
        question: 'What is foreign aid?',
        options: ['Domestic investment', 'Financial assistance from foreign countries', 'Trade agreement', 'Military support'],
        correct: 'Financial assistance from foreign countries',
        explanation: 'Foreign aid is financial, technical, or other assistance given by developed countries to developing countries.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_7',
        question: 'What is infrastructure?',
        options: ['Government buildings', 'Basic facilities and systems for economic activity', 'Private companies', 'Natural resources'],
        correct: 'Basic facilities and systems for economic activity',
        explanation: 'Infrastructure includes roads, bridges, telecommunications, and other basic facilities that support economic activity.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_8',
        question: 'What is sustainable development?',
        options: ['Short-term growth', 'Development meeting present needs without compromising future', 'Industrial development only', 'Urban development'],
        correct: 'Development meeting present needs without compromising future',
        explanation: 'Sustainable development meets current needs while preserving resources and environment for future generations.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_9',
        question: 'What is income inequality?',
        options: ['Equal income distribution', 'Unequal distribution of income in society', 'High average income', 'Low average income'],
        correct: 'Unequal distribution of income in society',
        explanation: 'Income inequality refers to the uneven distribution of income across individuals or groups in society.',
        difficulty: 'easy'
      },
      {
        id: 'g12_dev_easy_10',
        question: 'What is industrialization?',
        options: ['Agricultural development', 'Development of manufacturing industries', 'Service sector growth', 'Population growth'],
        correct: 'Development of manufacturing industries',
        explanation: 'Industrialization is the process of developing manufacturing industries in a country or region.',
        difficulty: 'easy'
      },

      // Medium Questions (10)
      {
        id: 'g12_dev_med_1',
        question: 'What is the poverty trap?',
        options: ['Easy escape from poverty', 'Self-reinforcing cycle keeping people poor', 'Government policy', 'Wealth accumulation'],
        correct: 'Self-reinforcing cycle keeping people poor',
        explanation: 'A poverty trap is a self-reinforcing mechanism that causes poverty to persist across generations.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_2',
        question: 'What is import substitution industrialization?',
        options: ['Promoting exports', 'Replacing imports with domestic production', 'Free trade policy', 'Agricultural focus'],
        correct: 'Replacing imports with domestic production',
        explanation: 'Import substitution industrialization involves developing domestic industries to replace imported goods.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_3',
        question: 'What is export promotion strategy?',
        options: ['Reducing exports', 'Encouraging production for export markets', 'Import focus', 'Domestic market only'],
        correct: 'Encouraging production for export markets',
        explanation: 'Export promotion strategy focuses on developing industries that can compete in international markets.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_4',
        question: 'What is the demographic transition?',
        options: ['Political change', 'Shift from high to low birth and death rates', 'Economic policy', 'Social movement'],
        correct: 'Shift from high to low birth and death rates',
        explanation: 'Demographic transition describes how populations move from high birth/death rates to low birth/death rates.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_5',
        question: 'What is brain drain?',
        options: ['Educational decline', 'Migration of skilled workers to other countries', 'Population growth', 'Industrial decline'],
        correct: 'Migration of skilled workers to other countries',
        explanation: 'Brain drain occurs when educated and skilled workers emigrate from their home country.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_6',
        question: 'What is technology transfer?',
        options: ['Moving computers', 'Sharing of technology between countries', 'Internet access', 'Educational exchange'],
        correct: 'Sharing of technology between countries',
        explanation: 'Technology transfer involves the sharing of technology and knowledge between developed and developing countries.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_7',
        question: 'What is microfinance?',
        options: ['Large loans', 'Small financial services for poor people', 'Government funding', 'Corporate finance'],
        correct: 'Small financial services for poor people',
        explanation: 'Microfinance provides small loans and financial services to people without access to traditional banking.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_8',
        question: 'What is the Millennium Development Goals (MDGs)?',
        options: ['Trade agreements', 'UN goals for reducing poverty and improving development', 'Military objectives', 'Educational curriculum'],
        correct: 'UN goals for reducing poverty and improving development',
        explanation: 'MDGs were eight international development goals established by the UN to address poverty and development issues.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_9',
        question: 'What is structural adjustment?',
        options: ['Building repairs', 'Economic policy reforms required by international lenders', 'Social programs', 'Educational reforms'],
        correct: 'Economic policy reforms required by international lenders',
        explanation: 'Structural adjustment programs involve economic policy reforms typically required by the World Bank and IMF.',
        difficulty: 'medium'
      },
      {
        id: 'g12_dev_med_10',
        question: 'What is the middle-income trap?',
        options: ['Low income problem', 'Countries stuck at middle-income level', 'High income problem', 'No income problem'],
        correct: 'Countries stuck at middle-income level',
        explanation: 'The middle-income trap refers to countries that reach middle income but struggle to advance to high income.',
        difficulty: 'medium'
      },

      // Hard Questions (10)
      {
        id: 'g12_dev_hard_1',
        question: 'What is the Big Push theory?',
        options: ['Small gradual changes', 'Large coordinated investment to break poverty trap', 'Government reduction', 'Market liberalization'],
        correct: 'Large coordinated investment to break poverty trap',
        explanation: 'Big Push theory argues that large, coordinated investments are needed to overcome development obstacles.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_2',
        question: 'What is the Lewis dual sector model?',
        options: ['Single sector economy', 'Modern and traditional sectors with labor transfer', 'Service economy only', 'Agricultural economy only'],
        correct: 'Modern and traditional sectors with labor transfer',
        explanation: 'Lewis model describes development as labor transfer from traditional (agricultural) to modern (industrial) sectors.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_3',
        question: 'What is the Harrod-Domar growth model?',
        options: ['Population model', 'Growth depends on savings and capital productivity', 'Trade model', 'Labor model'],
        correct: 'Growth depends on savings and capital productivity',
        explanation: 'The Harrod-Domar model relates economic growth to savings rates and capital-output ratios.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_4',
        question: 'What is the Washington Consensus?',
        options: ['Military agreement', 'Set of free-market economic policies', 'Environmental pact', 'Cultural exchange'],
        correct: 'Set of free-market economic policies',
        explanation: 'The Washington Consensus refers to a set of market-oriented economic policies promoted for developing countries.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_5',
        question: 'What is dependency theory?',
        options: ['Independence theory', 'Developing countries dependent on developed countries', 'Self-sufficiency theory', 'Isolation theory'],
        correct: 'Developing countries dependent on developed countries',
        explanation: 'Dependency theory argues that developing countries are kept dependent on developed countries through economic relationships.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_6',
        question: 'What is the capability approach to development?',
        options: ['Income focus only', 'Focus on what people can do and be', 'GDP focus only', 'Industrial focus only'],
        correct: 'Focus on what people can do and be',
        explanation: 'The capability approach, developed by Amartya Sen, focuses on expanding people\'s capabilities and freedoms.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_7',
        question: 'What is conditionality in development aid?',
        options: ['Unconditional assistance', 'Aid given with specific policy requirements', 'Emergency aid only', 'Military conditions'],
        correct: 'Aid given with specific policy requirements',
        explanation: 'Conditionality refers to requirements that recipient countries must meet to receive development aid.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_8',
        question: 'What is the resource curse?',
        options: ['Lack of resources', 'Natural resource wealth hindering development', 'Resource abundance helping development', 'Environmental protection'],
        correct: 'Natural resource wealth hindering development',
        explanation: 'The resource curse refers to the paradox where countries with abundant natural resources may experience slower development.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_9',
        question: 'What is inclusive growth?',
        options: ['Growth for elites only', 'Growth that benefits all segments of society', 'Industrial growth only', 'Urban growth only'],
        correct: 'Growth that benefits all segments of society',
        explanation: 'Inclusive growth ensures that the benefits of economic growth are shared across all segments of society.',
        difficulty: 'hard'
      },
      {
        id: 'g12_dev_hard_10',
        question: 'What is the concept of leapfrogging in development?',
        options: ['Going backwards', 'Skipping development stages using new technology', 'Slow progress', 'Following traditional path'],
        correct: 'Skipping development stages using new technology',
        explanation: 'Leapfrogging allows developing countries to skip traditional development stages by adopting newer technologies.',
        difficulty: 'hard'
      }
    ]
  }
];
