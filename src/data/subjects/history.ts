import { Chapter } from '../types';

export const historyChapters: Chapter[] = [
  {
    id: 'ancient_civilizations',
    name: 'Ancient Civilizations',
    description: 'Early human societies and their development',
    questions: [
      // Easy Questions
      {
        id: 'ancient_1',
        question: 'Which river was central to ancient Egyptian civilization?',
        options: ['Tigris', 'Euphrates', 'Nile', 'Indus'],
        correct: 'Nile',
        explanation: 'The Nile River was the lifeline of ancient Egyptian civilization.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_2',
        question: 'What is a pyramid?',
        options: ['Temple', 'Palace', 'Tomb for pharaohs', 'Market'],
        correct: 'Tomb for pharaohs',
        explanation: 'Pyramids were built as tombs for Egyptian pharaohs.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_3',
        question: 'Which ancient civilization invented writing?',
        options: ['Egyptians', 'Sumerians', 'Greeks', 'Romans'],
        correct: 'Sumerians',
        explanation: 'The Sumerians developed the first writing system, cuneiform.',
        difficulty: 'easy'
      },
      {
        id: 'ancient_4',
        question: 'What was the agora in ancient Greece?',
        options: ['Temple', 'Marketplace and gathering place', 'Palace', 'Theater'],
        correct: 'Marketplace and gathering place',
        explanation: 'The agora was the central public space for commerce and assembly.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'ancient_med_1',
        question: 'What was the Code of Hammurabi?',
        options: ['Religious text', 'One of the first written law codes', 'Epic poem', 'Trade agreement'],
        correct: 'One of the first written law codes',
        explanation: 'Hammurabi\'s Code was one of the earliest and most complete legal codes.',
        difficulty: 'medium'
      },
      {
        id: 'ancient_med_2',
        question: 'What type of government did ancient Athens develop?',
        options: ['Monarchy', 'Oligarchy', 'Democracy', 'Theocracy'],
        correct: 'Democracy',
        explanation: 'Athens is credited with developing the first form of democracy.',
        difficulty: 'medium'
      },
      {
        id: 'ancient_med_3',
        question: 'What connected ancient Mesopotamian city-states?',
        options: ['Common language only', 'Trade networks and shared culture', 'One ruler', 'Same religion only'],
        correct: 'Trade networks and shared culture',
        explanation: 'City-states were connected through trade, culture, and sometimes religion.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'ancient_hard_1',
        question: 'What was the Rosetta Stone\'s significance?',
        options: ['Religious artifact', 'Key to deciphering Egyptian hieroglyphs', 'Ancient map', 'Trade document'],
        correct: 'Key to deciphering Egyptian hieroglyphs',
        explanation: 'The Rosetta Stone provided the key to understanding hieroglyphic writing.',
        difficulty: 'hard'
      },
      {
        id: 'ancient_hard_2',
        question: 'What was the Fertile Crescent?',
        options: ['Mountain range', 'Desert region', 'Arc of fertile land in Middle East', 'Island chain'],
        correct: 'Arc of fertile land in Middle East',
        explanation: 'The Fertile Crescent was a region where agriculture first developed.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'medieval_period',
    name: 'Medieval Period',
    description: 'Middle Ages in Europe and other regions',
    questions: [
      // Easy Questions
      {
        id: 'medieval_1',
        question: 'What was feudalism?',
        options: ['Trade system', 'Social and political system based on land ownership', 'Religious practice', 'Military strategy'],
        correct: 'Social and political system based on land ownership',
        explanation: 'Feudalism was a system where land was exchanged for service and loyalty.',
        difficulty: 'easy'
      },
      {
        id: 'medieval_2',
        question: 'Who were knights?',
        options: ['Farmers', 'Warriors on horseback', 'Merchants', 'Priests'],
        correct: 'Warriors on horseback',
        explanation: 'Knights were mounted warriors who served feudal lords.',
        difficulty: 'easy'
      },
      {
        id: 'medieval_3',
        question: 'What was a manor?',
        options: ['Castle', 'Self-sufficient estate', 'City', 'Church'],
        correct: 'Self-sufficient estate',
        explanation: 'A manor was a large estate that could support itself economically.',
        difficulty: 'easy'
      },
      {
        id: 'medieval_4',
        question: 'What were the Crusades?',
        options: ['Trade expeditions', 'Religious wars', 'Exploration voyages', 'Scientific studies'],
        correct: 'Religious wars',
        explanation: 'The Crusades were religious wars fought primarily over control of holy lands.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'medieval_med_1',
        question: 'What caused the decline of feudalism?',
        options: ['Growth of trade and cities', 'Religious reformation', 'Barbarian invasions', 'Natural disasters'],
        correct: 'Growth of trade and cities',
        explanation: 'The rise of commerce and urban centers weakened the feudal system.',
        difficulty: 'medium'
      },
      {
        id: 'medieval_med_2',
        question: 'What was the Black Death?',
        options: ['War', 'Plague that killed millions', 'Famine', 'Political revolution'],
        correct: 'Plague that killed millions',
        explanation: 'The Black Death was a devastating plague that swept through Europe.',
        difficulty: 'medium'
      },
      {
        id: 'medieval_med_3',
        question: 'What role did the Catholic Church play in medieval Europe?',
        options: ['Minor role', 'Dominant religious and political influence', 'Economic only', 'Military only'],
        correct: 'Dominant religious and political influence',
        explanation: 'The Church was the most powerful institution in medieval Europe.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'medieval_hard_1',
        question: 'What was the Great Schism?',
        options: ['Political division', 'Split in the Catholic Church', 'Economic crisis', 'Military conflict'],
        correct: 'Split in the Catholic Church',
        explanation: 'The Great Schism was a period when there were competing claims to the papacy.',
        difficulty: 'hard'
      },
      {
        id: 'medieval_hard_2',
        question: 'What was the Magna Carta\'s significance?',
        options: ['Religious document', 'Limited the power of the English king', 'Trade agreement', 'Military treaty'],
        correct: 'Limited the power of the English king',
        explanation: 'The Magna Carta established that even kings were subject to law.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_world_wars',
    name: 'Grade 12: World Wars and Modern History',
    description: 'Twentieth century conflicts and their global impact',
    questions: [
      // Easy Questions
      {
        id: 'g12_wars_easy_1',
        question: 'When did World War I begin?',
        options: ['1912', '1914', '1916', '1918'],
        correct: '1914',
        explanation: 'World War I began in 1914 following the assassination of Archduke Franz Ferdinand.',
        difficulty: 'easy'
      },
      {
        id: 'g12_wars_easy_2',
        question: 'What event triggered the United States entry into World War II?',
        options: ['Pearl Harbor attack', 'D-Day invasion', 'Battle of Britain', 'Invasion of Poland'],
        correct: 'Pearl Harbor attack',
        explanation: 'The Japanese attack on Pearl Harbor brought the US into WWII.',
        difficulty: 'easy'
      },
      {
        id: 'g12_wars_easy_3',
        question: 'What was the Holocaust?',
        options: ['Battle', 'Systematic persecution and murder of Jews and others', 'Peace treaty', 'Economic plan'],
        correct: 'Systematic persecution and murder of Jews and others',
        explanation: 'The Holocaust was Nazi Germany\'s systematic genocide.',
        difficulty: 'easy'
      },
      {
        id: 'g12_wars_easy_4',
        question: 'What was the Cold War?',
        options: ['Hot conflict', 'Period of tension between US and USSR', 'Economic depression', 'Natural disaster'],
        correct: 'Period of tension between US and USSR',
        explanation: 'The Cold War was a period of political and military tension after WWII.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'g12_wars_med_1',
        question: 'What were the main causes of World War I?',
        options: ['Economic only', 'Militarism, alliances, imperialism, nationalism', 'Religious differences', 'Natural disasters'],
        correct: 'Militarism, alliances, imperialism, nationalism',
        explanation: 'WWI resulted from complex factors including MAIN: Militarism, Alliances, Imperialism, Nationalism.',
        difficulty: 'medium'
      },
      {
        id: 'g12_wars_med_2',
        question: 'What was the Marshall Plan?',
        options: ['Military strategy', 'US economic aid to rebuild Europe', 'Peace treaty', 'Alliance system'],
        correct: 'US economic aid to rebuild Europe',
        explanation: 'The Marshall Plan provided US economic assistance to rebuild post-war Europe.',
        difficulty: 'medium'
      },
      {
        id: 'g12_wars_med_3',
        question: 'What was the significance of D-Day?',
        options: ['End of war', 'Allied invasion of Nazi-occupied France', 'Peace negotiations', 'Nuclear attack'],
        correct: 'Allied invasion of Nazi-occupied France',
        explanation: 'D-Day was the massive Allied invasion that opened a second front in Europe.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'g12_wars_hard_1',
        question: 'What was the Schlieffen Plan?',
        options: ['Peace proposal', 'German strategy for two-front war', 'Economic recovery plan', 'Alliance treaty'],
        correct: 'German strategy for two-front war',
        explanation: 'The Schlieffen Plan was Germany\'s strategy to quickly defeat France then fight Russia.',
        difficulty: 'hard'
      },
      {
        id: 'g12_wars_hard_2',
        question: 'What was the significance of the Yalta Conference?',
        options: ['Started WWI', 'Allied leaders planned post-war world', 'Ended Cold War', 'Created United Nations'],
        correct: 'Allied leaders planned post-war world',
        explanation: 'At Yalta, Roosevelt, Churchill, and Stalin discussed post-war arrangements.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_capitalism_nationalism',
    name: 'Grade 12: Development of Capitalism and Nationalism from 1815 to 1914',
    description: 'The rise of industrial capitalism and nationalist movements in 19th century Europe',
    questions: [
      // Easy Questions
      {
        id: 'cap_nat_easy_1',
        question: 'What was the Industrial Revolution?',
        options: ['Political uprising', 'Transformation from agricultural to industrial economy', 'Religious movement', 'Military conflict'],
        correct: 'Transformation from agricultural to industrial economy',
        explanation: 'The Industrial Revolution marked the shift from manual labor to mechanized production.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_2',
        question: 'What is nationalism?',
        options: ['Economic system', 'Loyalty and devotion to one\'s nation', 'Religious belief', 'Trade policy'],
        correct: 'Loyalty and devotion to one\'s nation',
        explanation: 'Nationalism is a political ideology emphasizing loyalty to one\'s nation.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_3',
        question: 'Which country is considered the birthplace of the Industrial Revolution?',
        options: ['France', 'Germany', 'Britain', 'United States'],
        correct: 'Britain',
        explanation: 'The Industrial Revolution began in Britain in the late 18th century.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_4',
        question: 'What was the main goal of nationalist movements?',
        options: ['Economic profit', 'National unity and independence', 'Religious conversion', 'Territorial expansion'],
        correct: 'National unity and independence',
        explanation: 'Nationalist movements sought to unite people of common heritage and achieve political independence.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_5',
        question: 'What characterized capitalism in the 19th century?',
        options: ['Government ownership', 'Private ownership of means of production', 'Collective farming', 'Feudal system'],
        correct: 'Private ownership of means of production',
        explanation: 'Capitalism is based on private ownership and free market competition.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_6',
        question: 'What was the Congress of Vienna (1815)?',
        options: ['Trade agreement', 'Peace conference after Napoleon\'s defeat', 'Religious gathering', 'Scientific conference'],
        correct: 'Peace conference after Napoleon\'s defeat',
        explanation: 'The Congress of Vienna redrew European boundaries after Napoleon\'s defeat.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_7',
        question: 'Which revolution of 1848 was particularly significant for nationalism?',
        options: ['American Revolution', 'French Revolution', 'Spring of Nations', 'Russian Revolution'],
        correct: 'Spring of Nations',
        explanation: 'The 1848 revolutions across Europe were driven by nationalist and democratic ideals.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_8',
        question: 'What was laissez-faire economics?',
        options: ['Government control', 'Minimal government intervention in economy', 'Socialist system', 'Feudal economy'],
        correct: 'Minimal government intervention in economy',
        explanation: 'Laissez-faire promoted free markets with minimal government interference.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_9',
        question: 'Which German leader unified Germany?',
        options: ['Kaiser Wilhelm', 'Otto von Bismarck', 'Frederick the Great', 'Adolf Hitler'],
        correct: 'Otto von Bismarck',
        explanation: 'Bismarck was the architect of German unification in the 1870s.',
        difficulty: 'easy'
      },
      {
        id: 'cap_nat_easy_10',
        question: 'What was the Suez Canal\'s significance?',
        options: ['Religious site', 'Trade route connecting Mediterranean and Red Sea', 'Military fortress', 'Agricultural project'],
        correct: 'Trade route connecting Mediterranean and Red Sea',
        explanation: 'The Suez Canal revolutionized global trade by providing a direct route to Asia.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'cap_nat_med_1',
        question: 'What was the Concert of Europe?',
        options: ['Musical event', 'System of diplomatic cooperation', 'Economic union', 'Military alliance'],
        correct: 'System of diplomatic cooperation',
        explanation: 'The Concert of Europe was established to maintain the balance of power after 1815.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_2',
        question: 'How did the railway system impact 19th-century capitalism?',
        options: ['Decreased trade', 'Facilitated mass transportation and market expansion', 'Reduced industrialization', 'Limited economic growth'],
        correct: 'Facilitated mass transportation and market expansion',
        explanation: 'Railways revolutionized transportation, enabling faster movement of goods and people.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_3',
        question: 'What was the significance of the Crimean War (1853-1856)?',
        options: ['Started WWI', 'Revealed weakness of traditional powers', 'Ended slavery', 'Created new nations'],
        correct: 'Revealed weakness of traditional powers',
        explanation: 'The Crimean War exposed the military and administrative weaknesses of Russia and Austria.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_4',
        question: 'What role did the bourgeoisie play in 19th-century capitalism?',
        options: ['Peasant class', 'Middle class driving industrial development', 'Aristocratic rulers', 'Industrial workers'],
        correct: 'Middle class driving industrial development',
        explanation: 'The bourgeoisie were the middle-class capitalists who owned factories and businesses.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_5',
        question: 'How did nationalism affect the Austrian Empire?',
        options: ['Strengthened unity', 'Created internal ethnic tensions', 'Improved economy', 'Expanded territory'],
        correct: 'Created internal ethnic tensions',
        explanation: 'The multi-ethnic Austrian Empire faced growing nationalist pressures from various ethnic groups.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_6',
        question: 'What was the impact of the Telegraph on 19th-century business?',
        options: ['Slowed communication', 'Revolutionized long-distance communication', 'Reduced trade', 'Limited information flow'],
        correct: 'Revolutionized long-distance communication',
        explanation: 'The telegraph enabled instant long-distance communication, transforming business and journalism.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_7',
        question: 'What characterized the Second Industrial Revolution?',
        options: ['Steam power', 'Electricity and steel production', 'Agricultural improvements', 'Manual labor'],
        correct: 'Electricity and steel production',
        explanation: 'The Second Industrial Revolution (1870-1914) featured electricity, steel, and chemicals.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_8',
        question: 'How did the Opium Wars affect global capitalism?',
        options: ['Ended trade', 'Opened new markets in Asia', 'Reduced European influence', 'Strengthened isolationism'],
        correct: 'Opened new markets in Asia',
        explanation: 'The Opium Wars forced China to open its markets to Western trade and influence.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_9',
        question: 'What was the significance of Italian unification?',
        options: ['Economic decline', 'Creation of modern nation-state', 'Religious reform', 'Colonial expansion'],
        correct: 'Creation of modern nation-state',
        explanation: 'Italian unification created a unified Italian nation-state from fragmented territories.',
        difficulty: 'medium'
      },
      {
        id: 'cap_nat_med_10',
        question: 'How did banking systems develop during this period?',
        options: ['Declined in importance', 'Became central to industrial financing', 'Were replaced by barter', 'Focused only on agriculture'],
        correct: 'Became central to industrial financing',
        explanation: 'Modern banking systems emerged to finance industrial expansion and international trade.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'cap_nat_hard_1',
        question: 'What was the economic impact of the Panic of 1873?',
        options: ['Economic boom', 'Global economic depression', 'Increased employment', 'Agricultural prosperity'],
        correct: 'Global economic depression',
        explanation: 'The Panic of 1873 triggered a global economic depression lasting several years.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_2',
        question: 'How did the doctrine of free trade affect international relations?',
        options: ['Increased protectionism', 'Promoted economic interdependence', 'Reduced global commerce', 'Strengthened mercantilism'],
        correct: 'Promoted economic interdependence',
        explanation: 'Free trade policies increased economic interdependence among nations.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_3',
        question: 'What was the relationship between imperialism and capitalism in this period?',
        options: ['They were opposing forces', 'Capitalism drove imperial expansion', 'Imperialism hindered capitalism', 'They were unrelated'],
        correct: 'Capitalism drove imperial expansion',
        explanation: 'Capitalist nations sought new markets and resources through imperial expansion.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_4',
        question: 'How did the Eastern Question affect European diplomacy?',
        options: ['Simplified relations', 'Created complex alliance systems', 'Ended conflicts', 'Unified Europe'],
        correct: 'Created complex alliance systems',
        explanation: 'The Eastern Question regarding Ottoman decline created shifting alliance patterns.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_5',
        question: 'What was the significance of the Berlin Conference (1878)?',
        options: ['Started German unification', 'Revised Balkan borders after Russo-Turkish War', 'Divided Africa', 'Created NATO'],
        correct: 'Revised Balkan borders after Russo-Turkish War',
        explanation: 'The Berlin Conference of 1878 redrew Balkan boundaries and limited Russian gains.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_6',
        question: 'How did Social Darwinism justify 19th-century economic policies?',
        options: ['Promoted equality', 'Justified competition and inequality', 'Supported socialism', 'Encouraged cooperation'],
        correct: 'Justified competition and inequality',
        explanation: 'Social Darwinism used evolutionary theory to justify economic competition and social inequality.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_7',
        question: 'What was the impact of the Second Reform Act (1867) in Britain?',
        options: ['Restricted voting', 'Extended suffrage to urban working class', 'Ended Parliament', 'Created monarchy'],
        correct: 'Extended suffrage to urban working class',
        explanation: 'The Second Reform Act significantly expanded voting rights to include more of the working class.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_8',
        question: 'How did the Great Game affect Central Asian development?',
        options: ['Promoted independence', 'Made it a zone of Anglo-Russian competition', 'Unified the region', 'Isolated it completely'],
        correct: 'Made it a zone of Anglo-Russian competition',
        explanation: 'The Great Game was the strategic rivalry between Britain and Russia for influence in Central Asia.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_9',
        question: 'What was the economic significance of the transcontinental railways?',
        options: ['Reduced trade', 'Connected distant markets and resources', 'Limited expansion', 'Decreased productivity'],
        correct: 'Connected distant markets and resources',
        explanation: 'Transcontinental railways revolutionized global trade by connecting distant regions.',
        difficulty: 'hard'
      },
      {
        id: 'cap_nat_hard_10',
        question: 'How did the Paris Commune (1871) reflect social tensions of the period?',
        options: ['Showed working class satisfaction', 'Revealed class conflict in industrial society', 'Demonstrated unity', 'Proved capitalism\'s success'],
        correct: 'Revealed class conflict in industrial society',
        explanation: 'The Paris Commune highlighted the growing tensions between different social classes in industrial society.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_africa_colonial',
    name: 'Grade 12: Africa and the Colonial Experience (1880s – 1960s)',
    description: 'European colonization of Africa and African responses to colonial rule',
    questions: [
      // Easy Questions
      {
        id: 'africa_col_easy_1',
        question: 'What was the Scramble for Africa?',
        options: ['African independence movement', 'European competition to colonize Africa', 'Trade agreement', 'Cultural exchange'],
        correct: 'European competition to colonize Africa',
        explanation: 'The Scramble for Africa was the rapid colonization of African territory by European powers.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_2',
        question: 'Which conference divided Africa among European powers?',
        options: ['Paris Conference', 'Berlin Conference', 'Vienna Conference', 'London Conference'],
        correct: 'Berlin Conference',
        explanation: 'The Berlin Conference of 1884-85 regulated European colonization of Africa.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_3',
        question: 'What was apartheid?',
        options: ['Trade system', 'System of racial segregation in South Africa', 'Religious practice', 'Educational policy'],
        correct: 'System of racial segregation in South Africa',
        explanation: 'Apartheid was a legal system of institutionalized racial segregation in South Africa.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_4',
        question: 'Who was Cecil Rhodes?',
        options: ['African leader', 'British imperialist in southern Africa', 'French explorer', 'German missionary'],
        correct: 'British imperialist in southern Africa',
        explanation: 'Cecil Rhodes was a British businessman and politician who played a major role in southern African colonialism.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_5',
        question: 'What was the main economic motive for European colonization of Africa?',
        options: ['Cultural exchange', 'Natural resources and markets', 'Religious conversion', 'Scientific research'],
        correct: 'Natural resources and markets',
        explanation: 'Europeans sought Africa\'s mineral wealth, agricultural products, and new markets.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_6',
        question: 'Which European country controlled the largest area in Africa?',
        options: ['Britain', 'France', 'Germany', 'Portugal'],
        correct: 'France',
        explanation: 'France controlled the largest territory in Africa, mainly in West and Central Africa.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_7',
        question: 'What was indirect rule?',
        options: ['Direct European administration', 'Governing through traditional African leaders', 'Military occupation', 'Economic exploitation'],
        correct: 'Governing through traditional African leaders',
        explanation: 'Indirect rule used existing African political structures under European supervision.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_8',
        question: 'When did most African countries gain independence?',
        options: ['1920s-1930s', '1940s-1950s', '1960s-1970s', '1980s-1990s'],
        correct: '1960s-1970s',
        explanation: 'The majority of African countries gained independence during the 1960s.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_9',
        question: 'What was the main goal of Pan-Africanism?',
        options: ['European unity', 'African unity and liberation', 'Economic development', 'Religious reform'],
        correct: 'African unity and liberation',
        explanation: 'Pan-Africanism promoted unity among African peoples and liberation from colonialism.',
        difficulty: 'easy'
      },
      {
        id: 'africa_col_easy_10',
        question: 'Who was Kwame Nkrumah?',
        options: ['South African leader', 'Ghanaian independence leader', 'Belgian administrator', 'Portuguese explorer'],
        correct: 'Ghanaian independence leader',
        explanation: 'Kwame Nkrumah led Ghana to independence and was a major Pan-African figure.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'africa_col_med_1',
        question: 'What were the main methods of African resistance to colonialism?',
        options: ['Only peaceful protests', 'Military resistance and diplomatic negotiations', 'Complete acceptance', 'Only religious opposition'],
        correct: 'Military resistance and diplomatic negotiations',
        explanation: 'Africans used various forms of resistance including armed conflict and diplomatic efforts.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_2',
        question: 'How did colonial education impact African societies?',
        options: ['Preserved all traditions', 'Created new elite while undermining traditional knowledge', 'Had no effect', 'Only taught religion'],
        correct: 'Created new elite while undermining traditional knowledge',
        explanation: 'Colonial education created Western-educated elites but often devalued traditional African knowledge.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_3',
        question: 'What was the impact of the Suez Canal on Africa?',
        options: ['Reduced European interest', 'Increased strategic importance of East Africa', 'Had no effect', 'Decreased trade'],
        correct: 'Increased strategic importance of East Africa',
        explanation: 'The Suez Canal made the route to India more important, increasing European interest in East Africa.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_4',
        question: 'How did World War I affect African colonial territories?',
        options: ['No involvement', 'Africans fought and provided resources', 'Immediate independence', 'Reduced colonial control'],
        correct: 'Africans fought and provided resources',
        explanation: 'African colonies provided soldiers and resources for the European war effort.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_5',
        question: 'What was the significance of the Maji Maji Rebellion?',
        options: ['Successful independence', 'Major resistance to German rule in East Africa', 'Economic protest', 'Religious movement only'],
        correct: 'Major resistance to German rule in East Africa',
        explanation: 'The Maji Maji Rebellion was a significant uprising against German colonial rule in Tanzania.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_6',
        question: 'How did colonial boundaries affect African societies?',
        options: ['Respected ethnic groups', 'Divided ethnic groups and created artificial states', 'United all Africans', 'Had no impact'],
        correct: 'Divided ethnic groups and created artificial states',
        explanation: 'Colonial boundaries often divided ethnic groups and created states with diverse populations.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_7',
        question: 'What role did missionaries play in colonization?',
        options: ['Only religious work', 'Education, healthcare, and cultural change', 'Military support only', 'Economic development only'],
        correct: 'Education, healthcare, and cultural change',
        explanation: 'Missionaries provided services but also facilitated cultural transformation and colonial penetration.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_8',
        question: 'How did the discovery of diamonds and gold affect southern Africa?',
        options: ['Reduced European interest', 'Intensified colonization and conflict', 'Promoted African unity', 'Had no effect'],
        correct: 'Intensified colonization and conflict',
        explanation: 'Mineral discoveries led to increased European settlement and conflicts like the Anglo-Boer Wars.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_9',
        question: 'What was the Atlantic Charter\'s significance for Africa?',
        options: ['Endorsed colonialism', 'Promoted self-determination principles', 'Divided Africa', 'Had no relevance'],
        correct: 'Promoted self-determination principles',
        explanation: 'The Atlantic Charter\'s principles of self-determination influenced African independence movements.',
        difficulty: 'medium'
      },
      {
        id: 'africa_col_med_10',
        question: 'How did colonial economic policies affect African agriculture?',
        options: ['Promoted food security', 'Emphasized cash crops over food crops', 'Had no impact', 'Improved all farming'],
        correct: 'Emphasized cash crops over food crops',
        explanation: 'Colonial policies prioritized export crops, often at the expense of food security.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'africa_col_hard_1',
        question: 'How did the concept of "effective occupation" shape colonial Africa?',
        options: ['Reduced colonization', 'Required actual administrative control to claim territory', 'Only applied to Britain', 'Was ignored by Europeans'],
        correct: 'Required actual administrative control to claim territory',
        explanation: 'Effective occupation meant European powers had to establish actual control, not just claim territory.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_2',
        question: 'What was the impact of the concessionary company system?',
        options: ['Promoted African development', 'Extreme exploitation of African labor and resources', 'Protected African rights', 'Had no economic impact'],
        correct: 'Extreme exploitation of African labor and resources',
        explanation: 'Concessionary companies, especially in Congo, led to severe exploitation and abuse.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_3',
        question: 'How did the two World Wars contribute to African nationalism?',
        options: ['Strengthened colonial rule', 'Exposed contradictions in colonial ideology', 'Had no effect', 'Ended all resistance'],
        correct: 'Exposed contradictions in colonial ideology',
        explanation: 'Wars against fascism highlighted contradictions between fighting for freedom abroad while denying it to Africans.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_4',
        question: 'What was the significance of the Brazzaville Conference (1944)?',
        options: ['Ended colonialism', 'Proposed limited reforms in French Africa', 'Divided French colonies', 'Had no impact'],
        correct: 'Proposed limited reforms in French Africa',
        explanation: 'The Brazzaville Conference proposed gradual reforms but rejected independence for French Africa.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_5',
        question: 'How did the development of infrastructure serve colonial interests?',
        options: ['Benefited all Africans equally', 'Primarily served extraction and control purposes', 'Was entirely altruistic', 'Had no strategic purpose'],
        correct: 'Primarily served extraction and control purposes',
        explanation: 'Colonial infrastructure was designed to extract resources and maintain control, not for African development.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_6',
        question: 'What was the impact of the "civilizing mission" ideology?',
        options: ['Respected African cultures', 'Justified cultural imperialism and assimilation', 'Promoted equality', 'Had no cultural impact'],
        correct: 'Justified cultural imperialism and assimilation',
        explanation: 'The "civilizing mission" was used to justify imposing European values and undermining African cultures.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_7',
        question: 'How did the mandates system affect former German colonies?',
        options: ['Granted immediate independence', 'Transferred them to Allied powers under League supervision', 'Returned them to Germany', 'Had no effect'],
        correct: 'Transferred them to Allied powers under League supervision',
        explanation: 'German colonies became mandates administered by Allied powers under League of Nations oversight.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_8',
        question: 'What was the relationship between racism and colonial rule?',
        options: ['Racism was rare', 'Racial ideologies justified and maintained colonial hierarchy', 'They were unrelated', 'Colonialism ended racism'],
        correct: 'Racial ideologies justified and maintained colonial hierarchy',
        explanation: 'Racist ideologies were integral to justifying and maintaining colonial domination.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_9',
        question: 'How did the Bandung Conference (1955) influence African decolonization?',
        options: ['Had no impact', 'Promoted Afro-Asian solidarity and non-alignment', 'Supported colonial powers', 'Divided African states'],
        correct: 'Promoted Afro-Asian solidarity and non-alignment',
        explanation: 'The Bandung Conference fostered solidarity among newly independent nations and influenced decolonization.',
        difficulty: 'hard'
      },
      {
        id: 'africa_col_hard_10',
        question: 'What were the long-term economic legacies of colonialism in Africa?',
        options: ['Rapid industrialization', 'Dependency on raw material exports', 'Economic equality', 'Complete isolation'],
        correct: 'Dependency on raw material exports',
        explanation: 'Colonialism created economic structures that made African economies dependent on exporting raw materials.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_ethiopia_mid19_1941',
    name: 'Grade 12: Social, Economic, and Political Developments in Ethiopia, Mid-19th C. to 1941',
    description: 'Ethiopia\'s modernization efforts, resistance to colonialism, and internal developments',
    questions: [
      // Easy Questions
      {
        id: 'eth_mid19_easy_1',
        question: 'Who was Emperor Tewodros II?',
        options: ['Medieval emperor', 'Modernizing emperor of mid-19th century', 'Colonial administrator', 'Religious leader'],
        correct: 'Modernizing emperor of mid-19th century',
        explanation: 'Tewodros II (r. 1855-1868) began Ethiopia\'s modernization efforts.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_2',
        question: 'What was the Battle of Adwa (1896)?',
        options: ['Ethiopian defeat', 'Ethiopian victory over Italian invasion', 'Civil war battle', 'Trade dispute'],
        correct: 'Ethiopian victory over Italian invasion',
        explanation: 'The Battle of Adwa was Ethiopia\'s decisive victory over Italian forces.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_3',
        question: 'Who was Menelik II?',
        options: ['Italian general', 'Emperor who defeated Italy at Adwa', 'British explorer', 'Egyptian ruler'],
        correct: 'Emperor who defeated Italy at Adwa',
        explanation: 'Menelik II led Ethiopia to victory at Adwa and expanded the empire.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_4',
        question: 'What was the Treaty of Wuchale controversy?',
        options: ['Trade agreement', 'Dispute over Italian protectorate claims', 'Border demarcation', 'Religious accord'],
        correct: 'Dispute over Italian protectorate claims',
        explanation: 'The Treaty of Wuchale had different versions, with Italy claiming Ethiopia as a protectorate.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_5',
        question: 'Who was Haile Selassie before becoming emperor?',
        options: ['Ras Tafari', 'Ras Alula', 'Ras Mikael', 'Ras Gobena'],
        correct: 'Ras Tafari',
        explanation: 'Haile Selassie was known as Ras Tafari before becoming emperor.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_6',
        question: 'What major infrastructure project began under Menelik II?',
        options: ['Airport construction', 'Railway from Djibouti to Addis Ababa', 'Highway system', 'Telegraph network only'],
        correct: 'Railway from Djibouti to Addis Ababa',
        explanation: 'The Ethio-Djibouti railway was a major modernization project.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_7',
        question: 'When was Addis Ababa founded?',
        options: ['1870s', '1880s', '1890s', '1900s'],
        correct: '1880s',
        explanation: 'Addis Ababa was founded by Menelik II in the 1880s.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_8',
        question: 'What was the Italian occupation of Ethiopia called?',
        options: ['The Scramble', 'The Italian East Africa period', 'The Colonial Era', 'The Occupation'],
        correct: 'The Italian East Africa period',
        explanation: 'The Italian occupation (1936-1941) was part of Italian East Africa.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_9',
        question: 'Which empress was influential during this period?',
        options: ['Empress Zewditu', 'Empress Menen', 'Empress Taytu', 'Empress Woizero'],
        correct: 'Empress Taytu',
        explanation: 'Empress Taytu, wife of Menelik II, was politically influential.',
        difficulty: 'easy'
      },
      {
        id: 'eth_mid19_easy_10',
        question: 'What was Ethiopia\'s status regarding colonialism?',
        options: ['Fully colonized', 'Never colonized except brief Italian occupation', 'British protectorate', 'French colony'],
        correct: 'Never colonized except brief Italian occupation',
        explanation: 'Ethiopia maintained independence except during the brief Italian occupation.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'eth_mid19_med_1',
        question: 'How did Tewodros II attempt to modernize Ethiopia?',
        options: ['Only military reforms', 'Administrative, military, and technological reforms', 'Only religious changes', 'Only economic policies'],
        correct: 'Administrative, military, and technological reforms',
        explanation: 'Tewodros II implemented comprehensive modernization including military, administrative, and technological changes.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_2',
        question: 'What was the significance of the Battle of Magdala (1868)?',
        options: ['Ethiopian victory', 'British expedition that ended Tewodros\'s reign', 'Italian invasion', 'Egyptian attack'],
        correct: 'British expedition that ended Tewodros\'s reign',
        explanation: 'The British expedition to Magdala resulted in Tewodros II\'s death and the end of his reign.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_3',
        question: 'How did Menelik II expand Ethiopia\'s territory?',
        options: ['Only through war', 'Through conquest and political alliances', 'Only through diplomacy', 'Through foreign assistance'],
        correct: 'Through conquest and political alliances',
        explanation: 'Menelik II used both military conquest and political alliances to expand Ethiopian territory.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_4',
        question: 'What role did firearms play in Ethiopian politics during this period?',
        options: ['No importance', 'Central to military and political power', 'Only for hunting', 'Banned completely'],
        correct: 'Central to military and political power',
        explanation: 'Access to modern firearms was crucial for political and military success.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_5',
        question: 'How did the Ethiopian Orthodox Church influence politics?',
        options: ['No political role', 'Significant influence on imperial legitimacy', 'Only religious functions', 'Opposed all emperors'],
        correct: 'Significant influence on imperial legitimacy',
        explanation: 'The Ethiopian Orthodox Church played a major role in legitimizing imperial rule.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_6',
        question: 'What was the impact of the 1889 Italian treaty controversy?',
        options: ['Peaceful resolution', 'Led to the First Italo-Ethiopian War', 'Ethiopian submission', 'No consequences'],
        correct: 'Led to the First Italo-Ethiopian War',
        explanation: 'The treaty controversy over protectorate status led to war between Ethiopia and Italy.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_7',
        question: 'How did Ras Alula contribute to Ethiopian resistance?',
        options: ['Diplomatic negotiations only', 'Military leadership in northern frontier', 'Economic development', 'Religious reform'],
        correct: 'Military leadership in northern frontier',
        explanation: 'Ras Alula was a key military leader defending Ethiopia\'s northern frontiers.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_8',
        question: 'What was the significance of Entoto?',
        options: ['Trade center', 'Menelik\'s capital before Addis Ababa', 'Religious site only', 'Military fortress'],
        correct: 'Menelik\'s capital before Addis Ababa',
        explanation: 'Entoto served as Menelik II\'s capital before he founded Addis Ababa.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_9',
        question: 'How did the regency period (1916-1930) affect Ethiopia?',
        options: ['Complete stability', 'Political tensions and modernization efforts', 'Isolation from world', 'No significant changes'],
        correct: 'Political tensions and modernization efforts',
        explanation: 'The regency period under Ras Tafari featured both political tensions and continued modernization.',
        difficulty: 'medium'
      },
      {
        id: 'eth_mid19_med_10',
        question: 'What was the impact of the Great Famine (1888-1892)?',
        options: ['Only affected animals', 'Massive human and livestock mortality', 'Improved agriculture', 'No long-term effects'],
        correct: 'Massive human and livestock mortality',
        explanation: 'The Great Famine caused devastating loss of human and animal life across Ethiopia.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'eth_mid19_hard_1',
        question: 'How did the abolition of slavery affect Ethiopian society?',
        options: ['Immediate complete elimination', 'Gradual process with social and economic impacts', 'No actual change', 'Only affected foreigners'],
        correct: 'Gradual process with social and economic impacts',
        explanation: 'Slavery abolition was a gradual process that significantly impacted social and economic structures.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_2',
        question: 'What was the significance of Ethiopia\'s admission to the League of Nations?',
        options: ['No importance', 'International recognition and diplomatic equality', 'Economic benefits only', 'Military alliance'],
        correct: 'International recognition and diplomatic equality',
        explanation: 'League membership represented Ethiopia\'s recognition as a sovereign nation among world powers.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_3',
        question: 'How did the development of Amharic literature reflect political changes?',
        options: ['No connection', 'Supported centralization and national identity', 'Only religious themes', 'Opposed imperial rule'],
        correct: 'Supported centralization and national identity',
        explanation: 'Amharic literature development paralleled and supported political centralization and national identity formation.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_4',
        question: 'What was the impact of the Ethio-Djibouti railway on Ethiopian politics?',
        options: ['Only economic effects', 'Increased foreign influence and internal connectivity', 'Reduced imperial power', 'No political impact'],
        correct: 'Increased foreign influence and internal connectivity',
        explanation: 'The railway increased both foreign economic influence and internal political connectivity.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_5',
        question: 'How did the 1931 Constitution reflect Ethiopia\'s modernization?',
        options: ['Traditional governance only', 'Blend of modern constitutionalism and traditional authority', 'Complete westernization', 'No real changes'],
        correct: 'Blend of modern constitutionalism and traditional authority',
        explanation: 'The 1931 Constitution attempted to modernize governance while maintaining traditional imperial authority.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_6',
        question: 'What was the relationship between education and political change?',
        options: ['Education was discouraged', 'Modern education created new elite supporting reform', 'No connection', 'Education only for foreigners'],
        correct: 'Modern education created new elite supporting reform',
        explanation: 'Modern education created a new intellectual elite that supported political and social reforms.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_7',
        question: 'How did regional resistance affect imperial centralization?',
        options: ['No resistance occurred', 'Persistent resistance slowed but didn\'t stop centralization', 'Completely prevented centralization', 'Only helped centralization'],
        correct: 'Persistent resistance slowed but didn\'t stop centralization',
        explanation: 'Regional resistance created challenges but ultimately couldn\'t prevent imperial centralization.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_8',
        question: 'What was the significance of the Wal Wal incident (1934)?',
        options: ['Minor border dispute', 'Pretext for Italian invasion of Ethiopia', 'Trade disagreement', 'Religious conflict'],
        correct: 'Pretext for Italian invasion of Ethiopia',
        explanation: 'The Wal Wal incident provided Italy with a pretext for its 1935 invasion of Ethiopia.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_9',
        question: 'How did the Italian occupation attempt to transform Ethiopian society?',
        options: ['No changes attempted', 'Systematic effort to destroy traditional structures', 'Only economic changes', 'Strengthened traditional rule'],
        correct: 'Systematic effort to destroy traditional structures',
        explanation: 'The Italian occupation systematically attempted to dismantle traditional Ethiopian political and social structures.',
        difficulty: 'hard'
      },
      {
        id: 'eth_mid19_hard_10',
        question: 'What was the role of the Ethiopian Patriots during the occupation?',
        options: ['Collaborated with Italians', 'Led sustained resistance against occupation', 'Remained neutral', 'Fled the country'],
        correct: 'Led sustained resistance against occupation',
        explanation: 'Ethiopian Patriots led continuous resistance that significantly hampered Italian control.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_world_wars_politics',
    name: 'Grade 12: Society and Politics in the Age of World Wars, 1914 - 1945',
    description: 'The impact of two world wars on global society and political transformation',
    questions: [
      // Easy Questions
      {
        id: 'wars_pol_easy_1',
        question: 'What event triggered World War I?',
        options: ['Sinking of Lusitania', 'Assassination of Archduke Franz Ferdinand', 'German invasion of Belgium', 'Russian mobilization'],
        correct: 'Assassination of Archduke Franz Ferdinand',
        explanation: 'The assassination of Archduke Franz Ferdinand in Sarajevo triggered the start of WWI.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_2',
        question: 'What was the Russian Revolution of 1917?',
        options: ['Democratic reform', 'Overthrow of Tsarist regime', 'Economic policy change', 'Military reorganization'],
        correct: 'Overthrow of Tsarist regime',
        explanation: 'The Russian Revolution of 1917 overthrew the Tsarist autocracy.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_3',
        question: 'What was the Treaty of Versailles?',
        options: ['Alliance agreement', 'Peace treaty ending WWI', 'Trade agreement', 'Military pact'],
        correct: 'Peace treaty ending WWI',
        explanation: 'The Treaty of Versailles officially ended World War I.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_4',
        question: 'What was the Great Depression?',
        options: ['Political crisis', 'Global economic collapse', 'Military conflict', 'Social movement'],
        correct: 'Global economic collapse',
        explanation: 'The Great Depression was a severe worldwide economic downturn.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_5',
        question: 'Who was Adolf Hitler?',
        options: ['Italian dictator', 'German Nazi leader', 'Soviet leader', 'Japanese emperor'],
        correct: 'German Nazi leader',
        explanation: 'Adolf Hitler was the leader of Nazi Germany.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_6',
        question: 'What was fascism?',
        options: ['Democratic system', 'Authoritarian ultra-nationalist ideology', 'Economic theory', 'Religious movement'],
        correct: 'Authoritarian ultra-nationalist ideology',
        explanation: 'Fascism is a far-right, authoritarian ultranationalist political ideology.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_7',
        question: 'What was the Holocaust?',
        options: ['Military battle', 'Systematic genocide of Jews and others', 'Economic program', 'Political agreement'],
        correct: 'Systematic genocide of Jews and others',
        explanation: 'The Holocaust was the systematic persecution and murder of Jews and other groups by Nazi Germany.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_8',
        question: 'When did World War II end in Europe?',
        options: ['1944', '1945', '1946', '1947'],
        correct: '1945',
        explanation: 'World War II ended in Europe in May 1945 with Germany\'s surrender.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_9',
        question: 'What was the League of Nations?',
        options: ['Military alliance', 'International peacekeeping organization', 'Economic union', 'Colonial administration'],
        correct: 'International peacekeeping organization',
        explanation: 'The League of Nations was established to maintain world peace after WWI.',
        difficulty: 'easy'
      },
      {
        id: 'wars_pol_easy_10',
        question: 'What ended World War II in the Pacific?',
        options: ['German surrender', 'Atomic bombs on Japan', 'Italian defeat', 'Soviet invasion'],
        correct: 'Atomic bombs on Japan',
        explanation: 'The atomic bombs on Hiroshima and Nagasaki led to Japan\'s surrender.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'wars_pol_med_1',
        question: 'How did World War I change the role of government in society?',
        options: ['Reduced government role', 'Expanded government control over economy and society', 'No significant change', 'Eliminated government'],
        correct: 'Expanded government control over economy and society',
        explanation: 'WWI led to unprecedented government intervention in economy and society.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_2',
        question: 'What was the impact of the Russian Revolution on global politics?',
        options: ['No international impact', 'Inspired communist movements worldwide', 'Strengthened monarchies', 'Ended all revolutions'],
        correct: 'Inspired communist movements worldwide',
        explanation: 'The Russian Revolution inspired communist and socialist movements globally.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_3',
        question: 'How did the Treaty of Versailles contribute to future conflicts?',
        options: ['Ensured lasting peace', 'Created resentment and instability in Germany', 'Solved all problems', 'United Europe'],
        correct: 'Created resentment and instability in Germany',
        explanation: 'The harsh terms of Versailles created conditions that contributed to WWII.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_4',
        question: 'What was the relationship between the Great Depression and political extremism?',
        options: ['No connection', 'Economic crisis strengthened extremist movements', 'Depression weakened extremism', 'Only affected economics'],
        correct: 'Economic crisis strengthened extremist movements',
        explanation: 'The Great Depression\'s hardships made extremist political movements more appealing.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_5',
        question: 'How did World War I affect women\'s roles in society?',
        options: ['No change', 'Expanded women\'s participation in workforce and politics', 'Reduced women\'s rights', 'Only affected upper class'],
        correct: 'Expanded women\'s participation in workforce and politics',
        explanation: 'WWI brought women into new roles in work and public life.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_6',
        question: 'What was the significance of the Weimar Republic?',
        options: ['Successful democracy', 'Unstable German democracy between wars', 'Military dictatorship', 'Economic union'],
        correct: 'Unstable German democracy between wars',
        explanation: 'The Weimar Republic was Germany\'s fragile democratic government from 1919-1933.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_7',
        question: 'How did propaganda become important during this period?',
        options: ['Was banned', 'Became crucial tool for political mobilization', 'Only used in peacetime', 'Had no effect'],
        correct: 'Became crucial tool for political mobilization',
        explanation: 'Both world wars and totalitarian regimes used propaganda extensively.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_8',
        question: 'What was the impact of technological warfare on society?',
        options: ['No social impact', 'Transformed military strategy and civilian experience', 'Only affected soldiers', 'Reduced casualties'],
        correct: 'Transformed military strategy and civilian experience',
        explanation: 'New technologies made warfare more destructive and brought war to civilian populations.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_9',
        question: 'How did the mandate system affect former Ottoman territories?',
        options: ['Granted immediate independence', 'Placed them under European administration', 'Restored Ottoman rule', 'Had no effect'],
        correct: 'Placed them under European administration',
        explanation: 'The mandate system placed former Ottoman territories under European supervision.',
        difficulty: 'medium'
      },
      {
        id: 'wars_pol_med_10',
        question: 'What was the significance of the Popular Front governments?',
        options: ['Right-wing victories', 'Left-wing coalitions against fascism', 'Military governments', 'Religious movements'],
        correct: 'Left-wing coalitions against fascism',
        explanation: 'Popular Fronts were left-wing political coalitions formed to oppose fascism.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'wars_pol_hard_1',
        question: 'How did the concept of total war transform modern societies?',
        options: ['Limited military impact', 'Mobilized entire societies for war effort', 'Only affected armies', 'Reduced government power'],
        correct: 'Mobilized entire societies for war effort',
        explanation: 'Total war required mobilization of entire societies, not just military forces.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_2',
        question: 'What was the relationship between nationalism and imperialism during this period?',
        options: ['They were opposing forces', 'Nationalism both challenged and reinforced imperial systems', 'No relationship', 'Imperialism ended nationalism'],
        correct: 'Nationalism both challenged and reinforced imperial systems',
        explanation: 'Nationalism challenged some empires while being used to justify others.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_3',
        question: 'How did the war economies of 1914-1918 influence post-war social changes?',
        options: ['No lasting influence', 'Demonstrated state capacity for economic intervention', 'Reduced government involvement', 'Only affected military'],
        correct: 'Demonstrated state capacity for economic intervention',
        explanation: 'War economies showed governments could effectively manage complex economic systems.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_4',
        question: 'What was the significance of the Dawes Plan (1924)?',
        options: ['Military alliance', 'American-led economic stabilization of Germany', 'Political agreement', 'Colonial division'],
        correct: 'American-led economic stabilization of Germany',
        explanation: 'The Dawes Plan restructured German reparations payments and stabilized the economy.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_5',
        question: 'How did the Spanish Civil War (1936-1939) prefigure World War II?',
        options: ['No connection', 'Became testing ground for fascist and anti-fascist forces', 'Prevented WWII', 'Only local significance'],
        correct: 'Became testing ground for fascist and anti-fascist forces',
        explanation: 'The Spanish Civil War served as a rehearsal for the ideological conflicts of WWII.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_6',
        question: 'What was the impact of the Munich Agreement (1938) on international relations?',
        options: ['Ensured peace', 'Demonstrated failure of appeasement policy', 'Strengthened League of Nations', 'Solved territorial disputes'],
        correct: 'Demonstrated failure of appeasement policy',
        explanation: 'Munich showed that appeasing aggressive powers only encouraged further aggression.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_7',
        question: 'How did the experience of occupation affect European societies?',
        options: ['No significant impact', 'Created resistance movements and collaboration dilemmas', 'Strengthened existing governments', 'Only affected politics'],
        correct: 'Created resistance movements and collaboration dilemmas',
        explanation: 'Occupation created complex moral and political choices between resistance and collaboration.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_8',
        question: 'What was the significance of the Molotov-Ribbentrop Pact (1939)?',
        options: ['Anti-fascist alliance', 'Non-aggression pact that enabled WWII to begin', 'Trade agreement', 'Military alliance'],
        correct: 'Non-aggression pact that enabled WWII to begin',
        explanation: 'The Nazi-Soviet pact allowed Germany to avoid a two-front war initially.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_9',
        question: 'How did wartime planning influence post-war welfare state development?',
        options: ['No influence', 'War planning demonstrated state capacity for social provision', 'Reduced social programs', 'Only affected military'],
        correct: 'War planning demonstrated state capacity for social provision',
        explanation: 'Wartime economic and social planning provided models for post-war welfare states.',
        difficulty: 'hard'
      },
      {
        id: 'wars_pol_hard_10',
        question: 'What was the long-term impact of the Nuremberg Trials?',
        options: ['No lasting significance', 'Established precedents for international criminal law', 'Only punished Germans', 'Ended war crimes'],
        correct: 'Established precedents for international criminal law',
        explanation: 'Nuremberg established important principles for prosecuting crimes against humanity.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_global_developments_1945',
    name: 'Grade 12: Global and Regional Developments Since 1945',
    description: 'Cold War, decolonization, and the emergence of the modern world order',
    questions: [
      // Easy Questions
      {
        id: 'global_1945_easy_1',
        question: 'What was the Cold War?',
        options: ['Hot military conflict', 'Period of tension between US and USSR', 'Economic depression', 'Colonial war'],
        correct: 'Period of tension between US and USSR',
        explanation: 'The Cold War was a period of geopolitical tension between the Soviet Union and United States.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_2',
        question: 'What was NATO?',
        options: ['Economic organization', 'Military alliance of Western nations', 'United Nations agency', 'Trade agreement'],
        correct: 'Military alliance of Western nations',
        explanation: 'NATO (North Atlantic Treaty Organization) was a military alliance formed in 1949.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_3',
        question: 'What was decolonization?',
        options: ['Economic policy', 'Process of colonies gaining independence', 'Military strategy', 'Cultural movement'],
        correct: 'Process of colonies gaining independence',
        explanation: 'Decolonization was the process by which colonies gained independence from European powers.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_4',
        question: 'What was the Marshall Plan?',
        options: ['Military strategy', 'US economic aid to rebuild Europe', 'Trade agreement', 'Colonial policy'],
        correct: 'US economic aid to rebuild Europe',
        explanation: 'The Marshall Plan provided American economic assistance to rebuild Western Europe.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_5',
        question: 'What was the Berlin Wall?',
        options: ['Ancient fortification', 'Barrier dividing East and West Berlin', 'Trade barrier', 'Religious monument'],
        correct: 'Barrier dividing East and West Berlin',
        explanation: 'The Berlin Wall was built in 1961 to separate East and West Berlin.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_6',
        question: 'What was the United Nations?',
        options: ['Military alliance', 'International organization for peace and cooperation', 'Economic union', 'Colonial administration'],
        correct: 'International organization for peace and cooperation',
        explanation: 'The United Nations was established in 1945 to promote international peace and cooperation.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_7',
        question: 'What was the Cuban Missile Crisis?',
        options: ['Economic dispute', 'Nuclear confrontation between US and USSR', 'Trade war', 'Cultural conflict'],
        correct: 'Nuclear confrontation between US and USSR',
        explanation: 'The Cuban Missile Crisis (1962) was a tense nuclear standoff between superpowers.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_8',
        question: 'What was apartheid?',
        options: ['Economic system', 'Racial segregation system in South Africa', 'Political party', 'Trade policy'],
        correct: 'Racial segregation system in South Africa',
        explanation: 'Apartheid was South Africa\'s legal system of racial segregation.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_9',
        question: 'When did the Berlin Wall fall?',
        options: ['1987', '1989', '1991', '1993'],
        correct: '1989',
        explanation: 'The Berlin Wall fell in November 1989, symbolizing the end of the Cold War.',
        difficulty: 'easy'
      },
      {
        id: 'global_1945_easy_10',
        question: 'What was the Non-Aligned Movement?',
        options: ['Military alliance', 'Group of countries not aligned with superpowers', 'Economic union', 'Religious organization'],
        correct: 'Group of countries not aligned with superpowers',
        explanation: 'The Non-Aligned Movement consisted of countries that remained neutral during the Cold War.',
        difficulty: 'easy'
      },

      // Medium Questions
      {
        id: 'global_1945_med_1',
        question: 'How did the Korean War (1950-1953) reflect Cold War tensions?',
        options: ['No Cold War connection', 'First proxy war between superpowers', 'Only local conflict', 'Economic dispute'],
        correct: 'First proxy war between superpowers',
        explanation: 'The Korean War was the first major proxy conflict of the Cold War era.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_2',
        question: 'What was the significance of the Suez Crisis (1956)?',
        options: ['Strengthened European empires', 'Marked decline of European colonial power', 'Increased Cold War tensions', 'Had no impact'],
        correct: 'Marked decline of European colonial power',
        explanation: 'The Suez Crisis demonstrated the limits of European imperial power in the Cold War era.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_3',
        question: 'How did the Vietnam War affect global politics?',
        options: ['Strengthened US position', 'Challenged US credibility and divided American society', 'Had no global impact', 'Ended Cold War'],
        correct: 'Challenged US credibility and divided American society',
        explanation: 'Vietnam damaged US credibility and created deep divisions in American society.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_4',
        question: 'What was the impact of nuclear weapons on international relations?',
        options: ['Made war more likely', 'Created balance of terror and deterrence', 'Had no effect', 'Ended all conflicts'],
        correct: 'Created balance of terror and deterrence',
        explanation: 'Nuclear weapons created a balance of terror that deterred direct superpower conflict.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_5',
        question: 'How did decolonization affect the global economy?',
        options: ['No economic impact', 'Created new economic relationships and dependencies', 'Strengthened colonial economies', 'Ended all trade'],
        correct: 'Created new economic relationships and dependencies',
        explanation: 'Decolonization created complex new economic relationships between former colonies and powers.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_6',
        question: 'What was the significance of the Bandung Conference (1955)?',
        options: ['Western alliance meeting', 'Afro-Asian solidarity and non-alignment', 'Economic summit', 'Military planning'],
        correct: 'Afro-Asian solidarity and non-alignment',
        explanation: 'Bandung promoted solidarity among newly independent Afro-Asian nations.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_7',
        question: 'How did the Space Race reflect Cold War competition?',
        options: ['No political significance', 'Demonstrated technological and ideological superiority', 'Only scientific value', 'Reduced tensions'],
        correct: 'Demonstrated technological and ideological superiority',
        explanation: 'The Space Race was a key arena for demonstrating superpower technological capabilities.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_8',
        question: 'What was détente in the 1970s?',
        options: ['Increased tensions', 'Period of reduced Cold War tensions', 'Military alliance', 'Economic policy'],
        correct: 'Period of reduced Cold War tensions',
        explanation: 'Détente was a period of improved relations between the superpowers in the 1970s.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_9',
        question: 'How did the oil crises of the 1970s affect global politics?',
        options: ['No political impact', 'Shifted power to oil-producing nations', 'Strengthened Western dominance', 'Ended globalization'],
        correct: 'Shifted power to oil-producing nations',
        explanation: 'Oil crises demonstrated the power of resource-rich developing nations.',
        difficulty: 'medium'
      },
      {
        id: 'global_1945_med_10',
        question: 'What was the significance of the Helsinki Accords (1975)?',
        options: ['Military treaty', 'Agreement on human rights and European security', 'Trade agreement', 'Colonial arrangement'],
        correct: 'Agreement on human rights and European security',
        explanation: 'Helsinki Accords established principles for European security and human rights.',
        difficulty: 'medium'
      },

      // Hard Questions
      {
        id: 'global_1945_hard_1',
        question: 'How did the concept of modernization theory influence Cold War policies?',
        options: ['Had no influence', 'Justified Western development assistance and intervention', 'Only affected economics', 'Reduced tensions'],
        correct: 'Justified Western development assistance and intervention',
        explanation: 'Modernization theory provided intellectual justification for Western involvement in developing countries.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_2',
        question: 'What was the relationship between decolonization and the Cold War?',
        options: ['No connection', 'Decolonization became arena for superpower competition', 'Cold War prevented decolonization', 'They were opposing forces'],
        correct: 'Decolonization became arena for superpower competition',
        explanation: 'Newly independent nations often became proxies in Cold War competition.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_3',
        question: 'How did the Prague Spring (1968) affect Cold War dynamics?',
        options: ['Strengthened Soviet control', 'Demonstrated limits of Soviet tolerance for reform', 'Had no impact', 'Ended Cold War'],
        correct: 'Demonstrated limits of Soviet tolerance for reform',
        explanation: 'The Soviet invasion of Czechoslovakia showed the limits of reform within the Soviet bloc.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_4',
        question: 'What was the significance of the Sino-Soviet split?',
        options: ['Strengthened communist unity', 'Fragmented communist world and created triangular diplomacy', 'Had no impact', 'Ended communism'],
        correct: 'Fragmented communist world and created triangular diplomacy',
        explanation: 'The Sino-Soviet split created a three-way dynamic in Cold War politics.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_5',
        question: 'How did dependency theory challenge modernization approaches?',
        options: ['Supported modernization', 'Argued that underdevelopment was created by global capitalism', 'Had no impact', 'Focused only on politics'],
        correct: 'Argued that underdevelopment was created by global capitalism',
        explanation: 'Dependency theory argued that global capitalism created and maintained underdevelopment.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_6',
        question: 'What was the impact of the Iranian Revolution (1979) on regional politics?',
        options: ['No regional impact', 'Challenged both superpowers and reshaped Middle East', 'Only affected Iran', 'Strengthened US influence'],
        correct: 'Challenged both superpowers and reshaped Middle East',
        explanation: 'The Iranian Revolution created a new Islamic republic that challenged both superpowers.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_7',
        question: 'How did the concept of "Third World" evolve during this period?',
        options: ['Remained constant', 'Evolved from non-alignment to development status indicator', 'Disappeared immediately', 'Only geographical term'],
        correct: 'Evolved from non-alignment to development status indicator',
        explanation: 'Third World evolved from describing non-aligned countries to indicating development status.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_8',
        question: 'What was the significance of Gorbachev\'s reforms for the Cold War\'s end?',
        options: ['Strengthened Soviet power', 'Inadvertently accelerated Soviet collapse and Cold War end', 'Had no effect', 'Only domestic impact'],
        correct: 'Inadvertently accelerated Soviet collapse and Cold War end',
        explanation: 'Gorbachev\'s reforms unleashed forces that ultimately led to Soviet collapse.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_9',
        question: 'How did the emergence of regional organizations reflect changing global order?',
        options: ['Strengthened superpowers', 'Represented multipolar trends and regional integration', 'Had no significance', 'Weakened all states'],
        correct: 'Represented multipolar trends and regional integration',
        explanation: 'Regional organizations reflected the emergence of a more multipolar world order.',
        difficulty: 'hard'
      },
      {
        id: 'global_1945_hard_10',
        question: 'What was the long-term impact of the Nuclear Non-Proliferation Treaty (1968)?',
        options: ['Ended nuclear weapons', 'Created framework for limiting nuclear spread', 'Had no effect', 'Increased proliferation'],
        correct: 'Created framework for limiting nuclear spread',
        explanation: 'The NPT established important norms and mechanisms for controlling nuclear proliferation.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_ethiopia_1941_1991',
    name: 'Grade 12: Ethiopia: Internal Developments and External Influences from 1941 to 1991',
    description: 'Modern Ethiopia under Haile Selassie, the Derg, and Cold War influences',
    questions: [
      // Easy Questions - 10 questions
      {
        id: 'eth_1941_easy_1',
        question: 'When was Ethiopia liberated from Italian occupation?',
        options: ['1940', '1941', '1942', '1943'],
        correct: '1941',
        explanation: 'Ethiopia was liberated from Italian occupation in 1941 with British assistance.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_2',
        question: 'What was the 1955 Ethiopian Constitution called?',
        options: ['Revised Constitution', 'Modern Constitution', 'Democratic Constitution', 'Imperial Constitution'],
        correct: 'Revised Constitution',
        explanation: 'The 1955 Constitution was known as the Revised Constitution.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_3',
        question: 'What major famine occurred in Ethiopia in the 1970s?',
        options: ['Wollo famine', 'Tigray famine', 'Gondar famine', 'Shewa famine'],
        correct: 'Wollo famine',
        explanation: 'The Wollo famine of 1973-74 was a major humanitarian crisis.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_4',
        question: 'Who overthrew Emperor Haile Selassie in 1974?',
        options: ['Civilian government', 'The Derg military committee', 'Foreign powers', 'Regional governors'],
        correct: 'The Derg military committee',
        explanation: 'The Derg, a military committee, overthrew Haile Selassie in 1974.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_5',
        question: 'What ideology did the Derg adopt?',
        options: ['Capitalism', 'Marxist-Leninist socialism', 'Feudalism', 'Democracy'],
        correct: 'Marxist-Leninist socialism',
        explanation: 'The Derg adopted Marxist-Leninist socialist ideology.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_6',
        question: 'Who was the leader of the Derg from 1977?',
        options: ['Teferi Benti', 'Mengistu Haile Mariam', 'Atnafu Abate', 'Fisseha Desta'],
        correct: 'Mengistu Haile Mariam',
        explanation: 'Mengistu Haile Mariam became the leader of the Derg in 1977.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_7',
        question: 'What was the Red Terror?',
        options: ['Economic policy', 'Campaign of political violence', 'Military strategy', 'Educational reform'],
        correct: 'Campaign of political violence',
        explanation: 'The Red Terror was a period of political violence and repression.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_8',
        question: 'Which neighboring country fought with Ethiopia in 1977-1978?',
        options: ['Kenya', 'Sudan', 'Somalia', 'Djibouti'],
        correct: 'Somalia',
        explanation: 'Ethiopia and Somalia fought the Ogaden War in 1977-1978.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_9',
        question: 'What major drought and famine occurred in the 1980s?',
        options: ['1983-1984 famine', '1985-1986 famine', '1987-1988 famine', '1989-1990 famine'],
        correct: '1983-1984 famine',
        explanation: 'The 1983-1984 famine was a major humanitarian crisis that drew international attention.',
        difficulty: 'easy'
      },
      {
        id: 'eth_1941_easy_10',
        question: 'When did the Derg regime end?',
        options: ['1989', '1990', '1991', '1992'],
        correct: '1991',
        explanation: 'The Derg regime was overthrown in 1991.',
        difficulty: 'easy'
      },

      // Medium Questions - 10 questions
      {
        id: 'eth_1941_med_1',
        question: 'What was the significance of the 1960 coup attempt?',
        options: ['Successfully overthrew Haile Selassie', 'Failed but revealed growing opposition to imperial rule', 'Had no impact', 'Only military significance'],
        correct: 'Failed but revealed growing opposition to imperial rule',
        explanation: 'The 1960 coup attempt failed but demonstrated growing dissatisfaction with imperial rule.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_2',
        question: 'How did the student movement of the 1960s influence Ethiopian politics?',
        options: ['Had no influence', 'Raised political consciousness and demanded reforms', 'Only focused on education', 'Supported the emperor'],
        correct: 'Raised political consciousness and demanded reforms',
        explanation: 'The student movement played a crucial role in raising political awareness and demanding change.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_3',
        question: 'What was the impact of land tenure issues on Ethiopian society?',
        options: ['No social impact', 'Created widespread peasant grievances', 'Benefited all farmers', 'Only affected cities'],
        correct: 'Created widespread peasant grievances',
        explanation: 'Inequitable land tenure created significant social tensions and peasant grievances.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_4',
        question: 'How did the 1973-74 famine contribute to political change?',
        options: ['Strengthened the emperor', 'Exposed government incompetence and contributed to revolution', 'Had no political impact', 'Only affected agriculture'],
        correct: 'Exposed government incompetence and contributed to revolution',
        explanation: 'The government\'s poor handling of the famine undermined its legitimacy.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_5',
        question: 'What was the Derg\'s land reform policy?',
        options: ['Maintained feudal system', 'Nationalized land and established peasant associations', 'Only affected cities', 'Had no land policy'],
        correct: 'Nationalized land and established peasant associations',
        explanation: 'The Derg implemented radical land reform, nationalizing land and creating peasant associations.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_6',
        question: 'How did the Cold War affect Ethiopia\'s foreign relations?',
        options: ['No impact', 'Ethiopia switched from US to Soviet alignment', 'Only economic effects', 'Strengthened neutrality'],
        correct: 'Ethiopia switched from US to Soviet alignment',
        explanation: 'Ethiopia shifted from being a US ally under Haile Selassie to Soviet alignment under the Derg.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_7',
        question: 'What was the role of the Ethiopian People\'s Revolutionary Party (EPRP)?',
        options: ['Supported the Derg', 'Opposed the Derg from a leftist position', 'Only focused on economics', 'Had no political role'],
        correct: 'Opposed the Derg from a leftist position',
        explanation: 'The EPRP was a civilian leftist organization that opposed the military Derg.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_8',
        question: 'How did the Ogaden War affect Ethiopia\'s regional position?',
        options: ['Strengthened regional ties', 'Created lasting tensions with Somalia', 'Had no regional impact', 'Improved all relationships'],
        correct: 'Created lasting tensions with Somalia',
        explanation: 'The Ogaden War created enduring tensions between Ethiopia and Somalia.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_9',
        question: 'What was the impact of resettlement policies in the 1980s?',
        options: ['Successfully solved problems', 'Created controversy and humanitarian concerns', 'Had no impact', 'Only economic benefits'],
        correct: 'Created controversy and humanitarian concerns',
        explanation: 'The resettlement policies were controversial and raised humanitarian concerns.',
        difficulty: 'medium'
      },
      {
        id: 'eth_1941_med_10',
        question: 'How did liberation movements affect Derg rule?',
        options: ['Strengthened the Derg', 'Gradually weakened central government control', 'Had no effect', 'Only affected cities'],
        correct: 'Gradually weakened central government control',
        explanation: 'Various liberation movements progressively weakened the Derg\'s control over different regions.',
        difficulty: 'medium'
      },

      // Hard Questions - 10 questions
      {
        id: 'eth_1941_hard_1',
        question: 'How did the restoration of Haile Selassie affect Ethiopia\'s international status?',
        options: ['Isolated Ethiopia', 'Restored Ethiopia\'s sovereignty and international recognition', 'Had no international impact', 'Only regional effects'],
        correct: 'Restored Ethiopia\'s sovereignty and international recognition',
        explanation: 'The restoration rehabilitated Ethiopia as a sovereign nation and founding member of the UN.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_2',
        question: 'What was the relationship between modernization and traditional authority under Haile Selassie?',
        options: ['Complete modernization', 'Tension between modern institutions and traditional power', 'No modernization occurred', 'Perfect harmony'],
        correct: 'Tension between modern institutions and traditional power',
        explanation: 'Modernization efforts created tensions with traditional power structures and social relations.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_3',
        question: 'How did the federal arrangement with Eritrea (1952-1962) evolve?',
        options: ['Remained stable', 'Gradually eroded leading to full incorporation', 'Strengthened autonomy', 'Had no changes'],
        correct: 'Gradually eroded leading to full incorporation',
        explanation: 'The Ethiopian government gradually undermined Eritrean autonomy, leading to full incorporation in 1962.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_4',
        question: 'What was the significance of the concept "Ethiopia Tikdem" (Ethiopia First)?',
        options: ['Democratic slogan', 'Derg ideology combining socialism and nationalism', 'Imperial motto', 'Economic policy'],
        correct: 'Derg ideology combining socialism and nationalism',
        explanation: '"Ethiopia Tikdem" was the Derg\'s ideological slogan combining socialist and nationalist elements.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_5',
        question: 'How did the nationalization policies affect Ethiopia\'s economy?',
        options: ['Improved efficiency', 'Created state control but economic problems', 'Had no effect', 'Only benefited agriculture'],
        correct: 'Created state control but economic problems',
        explanation: 'Nationalization gave the state control over the economy but created significant economic problems.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_6',
        question: 'What was the impact of Soviet military aid on the Derg regime?',
        options: ['No military impact', 'Strengthened military capacity but increased dependency', 'Only economic aid', 'Weakened the military'],
        correct: 'Strengthened military capacity but increased dependency',
        explanation: 'Soviet aid strengthened Ethiopia\'s military but created dependency on external support.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_7',
        question: 'How did the Workers\' Party of Ethiopia (WPE) function within the political system?',
        options: ['Democratic party', 'Vanguard party controlling all political activity', 'Opposition party', 'Had no real function'],
        correct: 'Vanguard party controlling all political activity',
        explanation: 'The WPE was established as a Marxist-Leninist vanguard party to control all political activity.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_8',
        question: 'What was the relationship between drought, conflict, and famine in the 1980s?',
        options: ['No relationship', 'Complex interaction where conflict worsened drought impact', 'Only drought caused problems', 'Conflict prevented drought'],
        correct: 'Complex interaction where conflict worsened drought impact',
        explanation: 'Civil conflicts exacerbated the impact of drought, creating severe famine conditions.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_9',
        question: 'How did international intervention during the 1984-85 famine affect Ethiopian politics?',
        options: ['Strengthened the regime', 'Created tension between humanitarian needs and political control', 'Had no political impact', 'Ended the conflict'],
        correct: 'Created tension between humanitarian needs and political control',
        explanation: 'International famine relief created tensions between humanitarian access and government control.',
        difficulty: 'hard'
      },
      {
        id: 'eth_1941_hard_10',
        question: 'What were the long-term consequences of the Derg\'s ethnic and regional policies?',
        options: ['Created unity', 'Intensified ethnic tensions and regional grievances', 'Solved all problems', 'Had no long-term effects'],
        correct: 'Intensified ethnic tensions and regional grievances',
        explanation: 'The Derg\'s centralist policies intensified ethnic tensions and regional grievances that outlasted the regime.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_africa_since_1960s',
    name: 'Grade 12: Africa since the 1960s',
    description: 'Post-independence challenges, development efforts, and contemporary African history',
    questions: [
      // Easy Questions - 10 questions
      {
        id: 'africa_1960s_easy_1',
        question: 'Which decade is known as Africa\'s "Year of Independence"?',
        options: ['1950s', '1960s', '1970s', '1980s'],
        correct: '1960s',
        explanation: '1960 is particularly known as the "Year of Africa" when many countries gained independence.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_2',
        question: 'What major challenge faced newly independent African countries?',
        options: ['Too much wealth', 'Building new nations from colonial territories', 'Overpopulation only', 'No challenges'],
        correct: 'Building new nations from colonial territories',
        explanation: 'Nation-building was a major challenge as colonial boundaries often didn\'t reflect ethnic or cultural unity.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_3',
        question: 'What was apartheid?',
        options: ['Economic system', 'Racial segregation system in South Africa', 'Political party', 'Trade agreement'],
        correct: 'Racial segregation system in South Africa',
        explanation: 'Apartheid was South Africa\'s legal system of racial segregation and discrimination.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_4',
        question: 'Who was Nelson Mandela?',
        options: ['Kenyan leader', 'South African anti-apartheid leader', 'Nigerian president', 'Ghanaian politician'],
        correct: 'South African anti-apartheid leader',
        explanation: 'Nelson Mandela was the iconic leader of the anti-apartheid movement and later president of South Africa.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_5',
        question: 'What was the Organization of African Unity (OAU)?',
        options: ['Military alliance', 'Continental organization promoting African unity', 'Economic union only', 'Religious organization'],
        correct: 'Continental organization promoting African unity',
        explanation: 'The OAU was established in 1963 to promote African unity and cooperation.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_6',
        question: 'What major problem affected many African countries in the 1980s?',
        options: ['Too much development', 'Debt crisis', 'Overpopulation only', 'No problems'],
        correct: 'Debt crisis',
        explanation: 'The 1980s debt crisis severely affected many African countries\' development efforts.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_7',
        question: 'When did apartheid end in South Africa?',
        options: ['1990', '1992', '1994', '1996'],
        correct: '1994',
        explanation: 'Apartheid officially ended with South Africa\'s first democratic elections in 1994.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_8',
        question: 'What replaced the OAU in 2001?',
        options: ['African Union (AU)', 'African Economic Community', 'United Nations Africa', 'African Development Bank'],
        correct: 'African Union (AU)',
        explanation: 'The African Union was established in 2001 to replace the OAU.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_9',
        question: 'What is NEPAD?',
        options: ['Military organization', 'New Partnership for Africa\'s Development', 'Trade agreement', 'Educational program'],
        correct: 'New Partnership for Africa\'s Development',
        explanation: 'NEPAD is an economic development program launched in 2001.',
        difficulty: 'easy'
      },
      {
        id: 'africa_1960s_easy_10',
        question: 'What major health challenge has affected Africa since the 1980s?',
        options: ['Malaria only', 'HIV/AIDS pandemic', 'Heart disease', 'No health challenges'],
        correct: 'HIV/AIDS pandemic',
        explanation: 'The HIV/AIDS pandemic has been a major health and development challenge for Africa.',
        difficulty: 'easy'
      },

      // Medium Questions - 10 questions
      {
        id: 'africa_1960s_med_1',
        question: 'How did the Cold War affect African politics after independence?',
        options: ['No impact', 'Superpowers competed for influence through proxy conflicts', 'Only economic effects', 'United all African countries'],
        correct: 'Superpowers competed for influence through proxy conflicts',
        explanation: 'The Cold War led to superpower competition in Africa, often exacerbating conflicts.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_2',
        question: 'What was structural adjustment in the context of African development?',
        options: ['Building projects', 'Economic reform programs imposed by international lenders', 'Political reforms only', 'Educational changes'],
        correct: 'Economic reform programs imposed by international lenders',
        explanation: 'Structural adjustment programs were economic reforms required by the World Bank and IMF.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_3',
        question: 'How did the concept of "African socialism" influence post-independence policies?',
        options: ['Had no influence', 'Provided alternative development model emphasizing community values', 'Only affected culture', 'Promoted capitalism'],
        correct: 'Provided alternative development model emphasizing community values',
        explanation: 'African socialism attempted to blend socialist ideas with traditional African communal values.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_4',
        question: 'What was the impact of military coups on African governance?',
        options: ['Improved democracy', 'Disrupted civilian rule and democratic development', 'Had no impact', 'Only positive effects'],
        correct: 'Disrupted civilian rule and democratic development',
        explanation: 'Military coups significantly disrupted the development of democratic institutions in many African countries.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_5',
        question: 'How did ethnic conflicts affect African states?',
        options: ['Promoted unity', 'Created instability and challenged nation-building', 'Had no effect', 'Only economic impact'],
        correct: 'Created instability and challenged nation-building',
        explanation: 'Ethnic conflicts often undermined state stability and complicated nation-building efforts.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_6',
        question: 'What was the significance of the Lagos Plan of Action (1980)?',
        options: ['Military strategy', 'African initiative for economic development and self-reliance', 'Trade agreement', 'Educational reform'],
        correct: 'African initiative for economic development and self-reliance',
        explanation: 'The Lagos Plan emphasized African-led development and economic self-reliance.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_7',
        question: 'How did drought and famine affect African development?',
        options: ['No significant impact', 'Diverted resources and highlighted vulnerability', 'Only affected agriculture', 'Improved development'],
        correct: 'Diverted resources and highlighted vulnerability',
        explanation: 'Recurring droughts and famines diverted resources from development and exposed structural vulnerabilities.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_8',
        question: 'What role did regional organizations play in African integration?',
        options: ['No role', 'Promoted economic cooperation and conflict resolution', 'Only cultural functions', 'Hindered development'],
        correct: 'Promoted economic cooperation and conflict resolution',
        explanation: 'Regional organizations like ECOWAS and SADC promoted integration and helped resolve conflicts.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_9',
        question: 'How did the end of the Cold War affect Africa?',
        options: ['No change', 'Reduced superpower interest but enabled democratization', 'Increased conflicts only', 'Only economic effects'],
        correct: 'Reduced superpower interest but enabled democratization',
        explanation: 'The Cold War\'s end reduced external support for dictatorships but also decreased international attention.',
        difficulty: 'medium'
      },
      {
        id: 'africa_1960s_med_10',
        question: 'What was the impact of China\'s engagement with Africa since 2000?',
        options: ['No impact', 'Provided alternative development partnerships and investment', 'Only negative effects', 'Replaced all Western involvement'],
        correct: 'Provided alternative development partnerships and investment',
        explanation: 'China\'s engagement offered African countries alternative partnerships and significant infrastructure investment.',
        difficulty: 'medium'
      },

      // Hard Questions - 10 questions
      {
        id: 'africa_1960s_hard_1',
        question: 'How did the concept of "neopatrimonialism" characterize African governance?',
        options: ['Democratic governance', 'Blend of modern institutions with traditional patronage networks', 'Only traditional rule', 'Complete modernization'],
        correct: 'Blend of modern institutions with traditional patronage networks',
        explanation: 'Neopatrimonialism describes how modern state institutions operated through traditional patronage relationships.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_2',
        question: 'What was the relationship between resource abundance and governance in Africa?',
        options: ['Always improved governance', 'Often created "resource curse" undermining institutions', 'No relationship', 'Only positive effects'],
        correct: 'Often created "resource curse" undermining institutions',
        explanation: 'Natural resource wealth often weakened governance by reducing accountability and fueling conflicts.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_3',
        question: 'How did the debt crisis of the 1980s reshape African development strategies?',
        options: ['No change', 'Forced shift from state-led to market-oriented policies', 'Strengthened state control', 'Only affected debt'],
        correct: 'Forced shift from state-led to market-oriented policies',
        explanation: 'The debt crisis compelled African countries to abandon state-led development for market-oriented reforms.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_4',
        question: 'What was the significance of the "third wave of democratization" for Africa?',
        options: ['No relevance to Africa', 'Triggered widespread democratic transitions in 1990s', 'Only affected one country', 'Hindered development'],
        correct: 'Triggered widespread democratic transitions in 1990s',
        explanation: 'The third wave brought multiparty democracy to many African countries in the 1990s.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_5',
        question: 'How did globalization affect African economies since the 1990s?',
        options: ['Only positive effects', 'Created opportunities but also increased vulnerability', 'No impact', 'Only negative effects'],
        correct: 'Created opportunities but also increased vulnerability',
        explanation: 'Globalization offered market access but also exposed African economies to external shocks.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_6',
        question: 'What was the impact of the Rwandan genocide (1994) on African conflict prevention?',
        options: ['No impact', 'Led to new approaches to conflict prevention and intervention', 'Only affected Rwanda', 'Ended all conflicts'],
        correct: 'Led to new approaches to conflict prevention and intervention',
        explanation: 'The Rwandan genocide prompted new continental mechanisms for conflict prevention and intervention.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_7',
        question: 'How did the concept of "peer review" in NEPAD represent a new approach?',
        options: ['Traditional approach', 'African-led mechanism for governance assessment', 'External imposition', 'Only economic tool'],
        correct: 'African-led mechanism for governance assessment',
        explanation: 'The African Peer Review Mechanism represented African ownership of governance standards and assessment.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_8',
        question: 'What was the relationship between urbanization and political change in Africa?',
        options: ['No relationship', 'Urban growth created new political dynamics and demands', 'Only rural areas mattered', 'Weakened all politics'],
        correct: 'Urban growth created new political dynamics and demands',
        explanation: 'Rapid urbanization created new constituencies with different political demands and greater mobilization capacity.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_9',
        question: 'How did the concept of "African Renaissance" influence continental development?',
        options: ['Had no influence', 'Promoted cultural pride and self-reliant development', 'Only affected culture', 'Hindered development'],
        correct: 'Promoted cultural pride and self-reliant development',
        explanation: 'The African Renaissance concept emphasized cultural pride, unity, and African-led development solutions.',
        difficulty: 'hard'
      },
      {
        id: 'africa_1960s_hard_10',
        question: 'What was the significance of mobile technology for African development?',
        options: ['No significance', 'Enabled leapfrogging in communications and financial services', 'Only entertainment value', 'Hindered development'],
        correct: 'Enabled leapfrogging in communications and financial services',
        explanation: 'Mobile technology allowed Africa to bypass traditional infrastructure and develop innovative solutions like mobile banking.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_post1991_ethiopia',
    name: 'Grade 12: Post-1991 Developments in Ethiopia',
    description: 'Ethiopia\'s transition to federalism, ethnic politics, and contemporary challenges',
    questions: [
      // Easy Questions - 10 questions
      {
        id: 'post1991_eth_easy_1',
        question: 'Which coalition came to power in Ethiopia in 1991?',
        options: ['EPRDF', 'DERG', 'EPRP', 'OLF'],
        correct: 'EPRDF',
        explanation: 'The Ethiopian People\'s Revolutionary Democratic Front (EPRDF) came to power in 1991.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_2',
        question: 'What type of federal system did Ethiopia adopt after 1991?',
        options: ['Centralized system', 'Ethnic federalism', 'Regional federalism', 'Religious federalism'],
        correct: 'Ethnic federalism',
        explanation: 'Ethiopia adopted an ethnic federal system based on linguistic and ethnic groups.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_3',
        question: 'When was the current Ethiopian constitution adopted?',
        options: ['1991', '1993', '1995', '1997'],
        correct: '1995',
        explanation: 'The Federal Democratic Republic of Ethiopia Constitution was adopted in 1995.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_4',
        question: 'Which country gained independence from Ethiopia in 1993?',
        options: ['Djibouti', 'Eritrea', 'Somalia', 'Sudan'],
        correct: 'Eritrea',
        explanation: 'Eritrea gained independence from Ethiopia in 1993 after a referendum.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_5',
        question: 'Who was Ethiopia\'s Prime Minister from 1991 to 2012?',
        options: ['Hailemariam Desalegn', 'Meles Zenawi', 'Abiy Ahmed', 'Girma Wolde-Giorgis'],
        correct: 'Meles Zenawi',
        explanation: 'Meles Zenawi served as Prime Minister from 1991 until his death in 2012.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_6',
        question: 'What major economic policy did Ethiopia adopt after 1991?',
        options: ['Socialist economy', 'Market-oriented reforms', 'Command economy', 'Feudal system'],
        correct: 'Market-oriented reforms',
        explanation: 'Ethiopia transitioned from a socialist to a market-oriented economy after 1991.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_7',
        question: 'How many regional states does Ethiopia have under the federal system?',
        options: ['7', '9', '11', '13'],
        correct: '11',
        explanation: 'Ethiopia has 11 regional states under the current federal system.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_8',
        question: 'When did the Ethiopia-Eritrea border war occur?',
        options: ['1996-1998', '1998-2000', '2000-2002', '2002-2004'],
        correct: '1998-2000',
        explanation: 'The Ethiopia-Eritrea border war was fought from 1998 to 2000.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_9',
        question: 'Who became Prime Minister after Meles Zenawi\'s death?',
        options: ['Abiy Ahmed', 'Hailemariam Desalegn', 'Lemma Megersa', 'Debretsion Gebremichael'],
        correct: 'Hailemariam Desalegn',
        explanation: 'Hailemariam Desalegn succeeded Meles Zenawi as Prime Minister in 2012.',
        difficulty: 'easy'
      },
      {
        id: 'post1991_eth_easy_10',
        question: 'In which year did Abiy Ahmed become Prime Minister?',
        options: ['2016', '2017', '2018', '2019'],
        correct: '2018',
        explanation: 'Abiy Ahmed became Prime Minister of Ethiopia in April 2018.',
        difficulty: 'easy'
      },

      // Medium Questions - 10 questions
      {
        id: 'post1991_eth_med_1',
        question: 'What was the main principle behind Ethiopia\'s ethnic federalism?',
        options: ['Religious autonomy', 'Self-determination for nationalities and peoples', 'Economic decentralization only', 'Administrative convenience'],
        correct: 'Self-determination for nationalities and peoples',
        explanation: 'Ethiopia\'s federalism is based on the right to self-determination for nationalities and peoples.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_2',
        question: 'How did the transition period (1991-1995) handle the ethnic question?',
        options: ['Ignored ethnic issues', 'Established transitional ethnic-based regions', 'Maintained centralized rule', 'Only focused on economics'],
        correct: 'Established transitional ethnic-based regions',
        explanation: 'The transition period established ethnic-based regional administrations as a step toward federalism.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_3',
        question: 'What was the impact of economic liberalization on Ethiopian agriculture?',
        options: ['No change', 'Mixed results with improved production but persistent poverty', 'Complete failure', 'Only positive outcomes'],
        correct: 'Mixed results with improved production but persistent poverty',
        explanation: 'Agricultural reforms showed some improvements but rural poverty remained a significant challenge.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_4',
        question: 'How did the Eritrean independence affect Ethiopia?',
        options: ['No impact', 'Loss of access to sea and need for new economic relationships', 'Only positive effects', 'Strengthened Ethiopia'],
        correct: 'Loss of access to sea and need for new economic relationships',
        explanation: 'Eritrean independence made Ethiopia landlocked and required new approaches to trade and development.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_5',
        question: 'What was the "developmental state" model adopted by Ethiopia?',
        options: ['Free market approach', 'State-led development with market mechanisms', 'Socialist planning only', 'No economic policy'],
        correct: 'State-led development with market mechanisms',
        explanation: 'Ethiopia adopted a developmental state model combining state leadership with market mechanisms.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_6',
        question: 'How did the federal system affect language policy?',
        options: ['Only Amharic allowed', 'Promoted use of local languages in regional administration', 'Banned all local languages', 'No language policy'],
        correct: 'Promoted use of local languages in regional administration',
        explanation: 'The federal system allowed regions to use their local languages in administration and education.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_7',
        question: 'What was the challenge of democratization in post-1991 Ethiopia?',
        options: ['Too much democracy', 'Building democratic institutions while maintaining stability', 'No democratic attempts', 'Only elections mattered'],
        correct: 'Building democratic institutions while maintaining stability',
        explanation: 'Ethiopia faced the challenge of democratization while managing ethnic tensions and ensuring stability.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_8',
        question: 'How did Ethiopia\'s role in regional peacekeeping evolve?',
        options: ['Became isolationist', 'Became active in Horn of Africa peacekeeping', 'Only focused internally', 'Avoided all conflicts'],
        correct: 'Became active in Horn of Africa peacekeeping',
        explanation: 'Ethiopia became a major contributor to peacekeeping efforts in Somalia and other regional conflicts.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_9',
        question: 'What was the impact of the Growth and Transformation Plans?',
        options: ['Complete failure', 'Achieved significant economic growth but with challenges', 'No economic change', 'Only agricultural focus'],
        correct: 'Achieved significant economic growth but with challenges',
        explanation: 'The Growth and Transformation Plans contributed to rapid economic growth but faced implementation challenges.',
        difficulty: 'medium'
      },
      {
        id: 'post1991_eth_med_10',
        question: 'How did protests in 2015-2018 affect Ethiopian politics?',
        options: ['Had no impact', 'Led to significant political reforms and leadership change', 'Only local effects', 'Strengthened old system'],
        correct: 'Led to significant political reforms and leadership change',
        explanation: 'The widespread protests led to major political reforms and the rise of Abiy Ahmed as Prime Minister.',
        difficulty: 'medium'
      },

      // Hard Questions - 10 questions
      {
        id: 'post1991_eth_hard_1',
        question: 'How did the concept of "revolutionary democracy" shape Ethiopian governance?',
        options: ['Promoted liberal democracy', 'Combined democratic forms with vanguard party control', 'Had no influence', 'Only affected economics'],
        correct: 'Combined democratic forms with vanguard party control',
        explanation: 'Revolutionary democracy justified EPRDF\'s dominance while maintaining democratic institutions.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_2',
        question: 'What was the relationship between ethnic federalism and national unity?',
        options: ['Always strengthened unity', 'Created tension between ethnic autonomy and national cohesion', 'Had no relationship', 'Only promoted division'],
        correct: 'Created tension between ethnic autonomy and national cohesion',
        explanation: 'Ethnic federalism created ongoing tensions between respecting ethnic autonomy and maintaining national unity.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_3',
        question: 'How did the land tenure system after 1991 affect rural development?',
        options: ['Solved all problems', 'Maintained state ownership while allowing use rights', 'Privatized all land', 'Returned to feudalism'],
        correct: 'Maintained state ownership while allowing use rights',
        explanation: 'The 1995 Constitution maintained state land ownership while granting use rights to farmers.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_4',
        question: 'What was the significance of the Algiers Agreement (2000) for Ethiopia-Eritrea relations?',
        options: ['Permanently solved border issues', 'Established framework that later became controversial', 'Had no significance', 'Only economic agreement'],
        correct: 'Established framework that later became controversial',
        explanation: 'The Algiers Agreement ended the war but its border demarcation decision later became a source of tension.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_5',
        question: 'How did Ethiopia\'s relationship with international donors evolve after 1991?',
        options: ['Remained constant', 'Shifted from emergency aid to development partnership', 'Ended all relationships', 'Only military aid'],
        correct: 'Shifted from emergency aid to development partnership',
        explanation: 'Ethiopia transitioned from being primarily an aid recipient to a development partner with more strategic relationships.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_6',
        question: 'What was the impact of infrastructure development on Ethiopian transformation?',
        options: ['No impact', 'Created foundation for economic growth but raised debt concerns', 'Only negative effects', 'Solved all problems'],
        correct: 'Created foundation for economic growth but raised debt concerns',
        explanation: 'Massive infrastructure investment facilitated growth but also raised concerns about debt sustainability.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_7',
        question: 'How did the manufacturing sector development strategy affect Ethiopia\'s economy?',
        options: ['Had no effect', 'Promoted industrial parks and export-oriented manufacturing', 'Only focused on agriculture', 'Reduced all industry'],
        correct: 'Promoted industrial parks and export-oriented manufacturing',
        explanation: 'Ethiopia developed industrial parks to attract foreign investment and promote manufacturing exports.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_8',
        question: 'What was the relationship between rapid urbanization and social change?',
        options: ['No relationship', 'Created new social dynamics and political demands', 'Only economic effects', 'Reduced social change'],
        correct: 'Created new social dynamics and political demands',
        explanation: 'Rapid urbanization created new social classes and political demands that challenged traditional structures.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_9',
        question: 'How did the 2018 political reforms under Abiy Ahmed represent a shift?',
        options: ['No real change', 'Moved toward political liberalization and reconciliation', 'Only cosmetic changes', 'Returned to old system'],
        correct: 'Moved toward political liberalization and reconciliation',
        explanation: 'Abiy Ahmed\'s reforms represented a significant shift toward political opening and regional reconciliation.',
        difficulty: 'hard'
      },
      {
        id: 'post1991_eth_hard_10',
        question: 'What are the long-term challenges facing Ethiopia\'s federal system?',
        options: ['No challenges exist', 'Balancing unity, diversity, and democratic governance', 'Only economic challenges', 'System is perfect'],
        correct: 'Balancing unity, diversity, and democratic governance',
        explanation: 'Ethiopia faces ongoing challenges in balancing national unity with ethnic diversity while building democratic institutions.',
        difficulty: 'hard'
      }
    ]
  },
  {
    id: 'grade12_indigenous_knowledge_heritage',
    name: 'Grade 12: Indigenous Knowledge Systems and Heritages of Ethiopia',
    description: 'Traditional knowledge, cultural practices, and heritage preservation in Ethiopia',
    questions: [
      // Easy Questions - 10 questions
      {
        id: 'indigenous_eth_easy_1',
        question: 'What is indigenous knowledge?',
        options: ['Foreign knowledge', 'Traditional knowledge developed by local communities', 'Modern scientific knowledge', 'Religious knowledge only'],
        correct: 'Traditional knowledge developed by local communities',
        explanation: 'Indigenous knowledge refers to traditional knowledge, skills, and practices developed by local communities over generations.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_2',
        question: 'Which ancient Ethiopian script is still in use today?',
        options: ['Arabic script', 'Ge\'ez script', 'Latin script', 'Greek script'],
        correct: 'Ge\'ez script',
        explanation: 'Ge\'ez script is an ancient Ethiopian script that continues to be used, especially in religious contexts.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_3',
        question: 'What is the traditional Ethiopian calendar system based on?',
        options: ['Lunar calendar only', 'Solar calendar with 13 months', 'Gregorian calendar', 'Chinese calendar'],
        correct: 'Solar calendar with 13 months',
        explanation: 'The Ethiopian calendar is a solar calendar with 12 months of 30 days each and a 13th month of 5-6 days.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_4',
        question: 'What are the rock-hewn churches of Lalibela an example of?',
        options: ['Modern architecture', 'Indigenous architectural knowledge', 'Foreign influence only', 'Industrial construction'],
        correct: 'Indigenous architectural knowledge',
        explanation: 'The rock-hewn churches of Lalibela demonstrate sophisticated indigenous architectural and engineering knowledge.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_5',
        question: 'What is traditional Ethiopian medicine often based on?',
        options: ['Modern pharmaceuticals', 'Herbal and natural remedies', 'Surgery only', 'Foreign medicine'],
        correct: 'Herbal and natural remedies',
        explanation: 'Traditional Ethiopian medicine relies heavily on herbal remedies and natural healing practices.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_6',
        question: 'What is the Gada system?',
        options: ['Modern political system', 'Traditional Oromo governance system', 'Religious practice', 'Economic system'],
        correct: 'Traditional Oromo governance system',
        explanation: 'The Gada system is the traditional democratic governance system of the Oromo people.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_7',
        question: 'What are traditional Ethiopian musical instruments made from?',
        options: ['Only metal', 'Natural materials like wood, hide, and bamboo', 'Plastic only', 'Imported materials'],
        correct: 'Natural materials like wood, hide, and bamboo',
        explanation: 'Traditional Ethiopian instruments are crafted from natural materials found in the local environment.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_8',
        question: 'What is Timkat?',
        options: ['Modern holiday', 'Traditional Ethiopian Orthodox celebration', 'Political event', 'Economic festival'],
        correct: 'Traditional Ethiopian Orthodox celebration',
        explanation: 'Timkat is the traditional Ethiopian Orthodox celebration of Epiphany.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_9',
        question: 'What role do elders play in traditional Ethiopian communities?',
        options: ['No special role', 'Keepers of knowledge and wisdom', 'Only economic functions', 'Modern administrators'],
        correct: 'Keepers of knowledge and wisdom',
        explanation: 'Elders are traditionally respected as keepers and transmitters of cultural knowledge and wisdom.',
        difficulty: 'easy'
      },
      {
        id: 'indigenous_eth_easy_10',
        question: 'What is traditional Ethiopian architecture adapted to?',
        options: ['Foreign styles only', 'Local climate and available materials', 'Modern needs only', 'No specific adaptations'],
        correct: 'Local climate and available materials',
        explanation: 'Traditional Ethiopian architecture is specifically adapted to local climate conditions and available building materials.',
        difficulty: 'easy'
      },

      // Medium Questions - 10 questions
      {
        id: 'indigenous_eth_med_1',
        question: 'How does traditional Ethiopian agriculture practice crop rotation?',
        options: ['No rotation practiced', 'Complex rotation systems preserving soil fertility', 'Only modern techniques', 'Random planting'],
        correct: 'Complex rotation systems preserving soil fertility',
        explanation: 'Traditional Ethiopian agriculture includes sophisticated crop rotation systems that maintain soil fertility.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_2',
        question: 'What is the significance of oral tradition in Ethiopian culture?',
        options: ['No importance', 'Primary means of preserving and transmitting knowledge', 'Only entertainment', 'Modern development'],
        correct: 'Primary means of preserving and transmitting knowledge',
        explanation: 'Oral tradition has been the primary method for preserving and transmitting cultural knowledge, history, and values.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_3',
        question: 'How do traditional Ethiopian communities manage natural resources?',
        options: ['No management systems', 'Community-based conservation and sustainable use practices', 'Only modern methods', 'Individual ownership only'],
        correct: 'Community-based conservation and sustainable use practices',
        explanation: 'Traditional communities developed sophisticated systems for managing and conserving natural resources.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_4',
        question: 'What role does traditional knowledge play in weather prediction?',
        options: ['No role', 'Local observations and indicators guide agricultural timing', 'Only modern forecasting', 'Random guessing'],
        correct: 'Local observations and indicators guide agricultural timing',
        explanation: 'Traditional communities developed detailed systems for weather prediction based on local environmental indicators.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_5',
        question: 'How do traditional healing practices integrate with spiritual beliefs?',
        options: ['No integration', 'Holistic approach combining physical and spiritual healing', 'Only physical treatment', 'Only spiritual practices'],
        correct: 'Holistic approach combining physical and spiritual healing',
        explanation: 'Traditional healing typically integrates physical remedies with spiritual and psychological dimensions.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_6',
        question: 'What is the role of traditional crafts in Ethiopian culture?',
        options: ['Only decorative', 'Functional items that preserve cultural identity', 'Modern industrial products', 'No cultural significance'],
        correct: 'Functional items that preserve cultural identity',
        explanation: 'Traditional crafts serve practical purposes while preserving and expressing cultural identity and knowledge.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_7',
        question: 'How do traditional Ethiopian communities handle conflict resolution?',
        options: ['No traditional methods', 'Community-based mediation and reconciliation systems', 'Only modern courts', 'Violence only'],
        correct: 'Community-based mediation and reconciliation systems',
        explanation: 'Traditional communities developed sophisticated systems for conflict resolution based on mediation and community involvement.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_8',
        question: 'What is the significance of traditional festivals in knowledge transmission?',
        options: ['Only entertainment', 'Important occasions for teaching and preserving culture', 'Modern inventions', 'No educational value'],
        correct: 'Important occasions for teaching and preserving culture',
        explanation: 'Traditional festivals serve as crucial times for transmitting cultural knowledge, values, and practices to younger generations.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_9',
        question: 'How do traditional building techniques adapt to seismic activity?',
        options: ['No adaptation', 'Flexible construction methods using local knowledge', 'Only modern engineering', 'Random construction'],
        correct: 'Flexible construction methods using local knowledge',
        explanation: 'Traditional building techniques often incorporate earthquake-resistant features based on local experience and knowledge.',
        difficulty: 'medium'
      },
      {
        id: 'indigenous_eth_med_10',
        question: 'What role do traditional institutions play in resource management?',
        options: ['No role', 'Establish rules and practices for sustainable use', 'Only modern management', 'Create conflicts only'],
        correct: 'Establish rules and practices for sustainable use',
        explanation: 'Traditional institutions developed comprehensive rules and practices for managing community resources sustainably.',
        difficulty: 'medium'
      },

      // Hard Questions - 10 questions
      {
        id: 'indigenous_eth_hard_1',
        question: 'How do traditional Ethiopian astronomical observations contribute to agricultural timing?',
        options: ['No contribution', 'Complex star-based calendars guide planting and harvesting', 'Only modern astronomy matters', 'Random timing'],
        correct: 'Complex star-based calendars guide planting and harvesting',
        explanation: 'Traditional Ethiopian communities developed sophisticated astronomical observation systems to guide agricultural activities.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_2',
        question: 'What is the relationship between traditional ecological knowledge and biodiversity conservation?',
        options: ['No relationship', 'Traditional practices often maintain and enhance biodiversity', 'Always harmful to environment', 'Only modern conservation works'],
        correct: 'Traditional practices often maintain and enhance biodiversity',
        explanation: 'Traditional ecological knowledge often includes practices that maintain and enhance local biodiversity.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_3',
        question: 'How do traditional legal systems complement modern legal frameworks?',
        options: ['Complete opposition', 'Provide alternative dispute resolution and community justice', 'No interaction', 'Replace modern law entirely'],
        correct: 'Provide alternative dispute resolution and community justice',
        explanation: 'Traditional legal systems often provide effective community-based alternatives that complement formal legal systems.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_4',
        question: 'What challenges face the preservation of indigenous knowledge in modern Ethiopia?',
        options: ['No challenges', 'Urbanization, modernization, and loss of traditional contexts', 'Too much preservation', 'Only language barriers'],
        correct: 'Urbanization, modernization, and loss of traditional contexts',
        explanation: 'Indigenous knowledge faces challenges from rapid social change, urbanization, and the loss of traditional contexts.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_5',
        question: 'How can traditional knowledge contribute to modern sustainable development?',
        options: ['No contribution possible', 'Provides tested solutions for environmental and social challenges', 'Only hinders development', 'Irrelevant to sustainability'],
        correct: 'Provides tested solutions for environmental and social challenges',
        explanation: 'Traditional knowledge offers time-tested solutions that can inform sustainable development approaches.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_6',
        question: 'What is the role of language in preserving indigenous knowledge systems?',
        options: ['No role', 'Language carries specialized knowledge and cultural concepts', 'Only communication tool', 'Barriers to development'],
        correct: 'Language carries specialized knowledge and cultural concepts',
        explanation: 'Indigenous languages often contain specialized vocabulary and concepts essential for transmitting traditional knowledge.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_7',
        question: 'How do traditional Ethiopian medical practices contribute to modern healthcare?',
        options: ['No contribution', 'Provide complementary treatments and pharmaceutical sources', 'Replace modern medicine', 'Only harmful practices'],
        correct: 'Provide complementary treatments and pharmaceutical sources',
        explanation: 'Traditional medicine can provide complementary treatments and sources for modern pharmaceutical development.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_8',
        question: 'What is the significance of intangible cultural heritage in Ethiopian society?',
        options: ['No significance', 'Represents core values and identity that guide social behavior', 'Only historical interest', 'Obstacle to progress'],
        correct: 'Represents core values and identity that guide social behavior',
        explanation: 'Intangible cultural heritage represents fundamental values and identity that continue to influence social behavior and community life.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_9',
        question: 'How can modern education systems integrate indigenous knowledge?',
        options: ['Impossible integration', 'Through curricula that value and include traditional knowledge', 'Complete replacement', 'Only separate systems'],
        correct: 'Through curricula that value and include traditional knowledge',
        explanation: 'Modern education can be enriched by integrating indigenous knowledge through inclusive curricula that value traditional wisdom.',
        difficulty: 'hard'
      },
      {
        id: 'indigenous_eth_hard_10',
        question: 'What are the intellectual property implications of indigenous knowledge?',
        options: ['No implications', 'Need for protection against unauthorized commercial use', 'Should be freely available', 'Only economic value matters'],
        correct: 'Need for protection against unauthorized commercial use',
        explanation: 'Indigenous knowledge requires protection mechanisms to prevent unauthorized commercial exploitation while respecting community rights.',
        difficulty: 'hard'
      }
    ]
  }
];
