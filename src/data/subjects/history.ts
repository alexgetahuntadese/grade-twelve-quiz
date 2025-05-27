
interface Question {
  id: string;
  question: string;
  options: string[];
  correct: string;
  explanation?: string;
}

interface Chapter {
  id: string;
  name: string;
  description: string;
  questions: Question[];
}

export const historyChapters: Chapter[] = [
  {
    id: "ancient",
    name: "Ancient Ethiopia",
    description: "Early Civilizations and Kingdoms",
    questions: [
      {
        id: "hist1",
        question: "Which ancient Ethiopian kingdom was known for its rock-hewn churches?",
        options: ["Aksum", "Lalibela", "Gondar", "Harar"],
        correct: "Lalibela",
        explanation: "Lalibela is famous for its 11 medieval rock-hewn churches, carved in the 12th and 13th centuries"
      },
      {
        id: "hist2",
        question: "Who was the founder of the Aksumite Kingdom?",
        options: ["King Ezana", "Queen Sheba", "Menelik I", "Emperor Haile Selassie"],
        correct: "Menelik I",
        explanation: "According to Ethiopian tradition, Menelik I was the legendary founder of the Ethiopian empire and the Aksumite dynasty"
      },
      {
        id: "hist3",
        question: "What was the capital of the Kingdom of Aksum?",
        options: ["Aksum", "Lalibela", "Gondar", "Addis Ababa"],
        correct: "Aksum",
        explanation: "The ancient city of Aksum was the capital of the Aksumite Kingdom"
      },
      {
        id: "hist4",
        question: "Which religion did King Ezana convert to?",
        options: ["Islam", "Christianity", "Judaism", "Traditional beliefs"],
        correct: "Christianity",
        explanation: "King Ezana of Aksum converted to Christianity in the 4th century CE, making Ethiopia one of the first Christian nations"
      },
      {
        id: "hist5",
        question: "What was Aksum famous for trading?",
        options: ["Gold and ivory", "Spices and textiles", "Salt and coffee", "All of the above"],
        correct: "All of the above",
        explanation: "Aksum was a major trading empire dealing in gold, ivory, spices, textiles, salt, and other valuable goods"
      },
      {
        id: "hist6",
        question: "Which ancient Ethiopian script is still used today?",
        options: ["Ge'ez", "Amharic", "Oromo", "Arabic"],
        correct: "Ge'ez",
        explanation: "Ge'ez is an ancient Semitic script that originated in Ethiopia and is still used in liturgical contexts"
      },
      {
        id: "hist7",
        question: "What is the legendary connection between Ethiopia and the Queen of Sheba?",
        options: ["She was Ethiopian", "She visited Solomon", "She founded a dynasty", "All of the above"],
        correct: "All of the above",
        explanation: "Ethiopian tradition claims the Queen of Sheba was Ethiopian, visited King Solomon, and founded the Solomonic dynasty"
      },
      {
        id: "hist8",
        question: "Which ancient trade route passed through Ethiopia?",
        options: ["Silk Road", "Red Sea trade route", "Trans-Saharan route", "Indian Ocean route"],
        correct: "Red Sea trade route",
        explanation: "Ethiopia was strategically located on the Red Sea trade route connecting Africa, Arabia, and the Mediterranean"
      },
      {
        id: "hist9",
        question: "What were the famous monuments of Aksum called?",
        options: ["Stelae", "Pyramids", "Temples", "Castles"],
        correct: "Stelae",
        explanation: "Aksum is famous for its giant stone obelisks called stelae, some reaching over 20 meters in height"
      },
      {
        id: "hist10",
        question: "Which ancient text mentions Ethiopia?",
        options: ["The Bible", "Greek histories", "Roman records", "All of the above"],
        correct: "All of the above",
        explanation: "Ethiopia is mentioned in biblical texts, Greek histories by Herodotus, and various Roman records"
      },
      {
        id: "hist11",
        question: "What was the ancient name for Ethiopia?",
        options: ["Abyssinia", "Kush", "Nubia", "All of the above"],
        correct: "All of the above",
        explanation: "Ethiopia was known by various names including Abyssinia, and was associated with Kush and Nubia in ancient times"
      },
      {
        id: "hist12",
        question: "Which century did the Aksumite Kingdom reach its peak?",
        options: ["3rd-4th century CE", "1st-2nd century CE", "5th-6th century CE", "7th-8th century CE"],
        correct: "3rd-4th century CE",
        explanation: "The Aksumite Kingdom reached its peak during the 3rd and 4th centuries CE"
      },
      {
        id: "hist13",
        question: "What caused the decline of Aksum?",
        options: ["Rise of Islam", "Climate change", "Trade route shifts", "All of the above"],
        correct: "All of the above",
        explanation: "Multiple factors contributed to Aksum's decline including the rise of Islam, environmental changes, and shifting trade routes"
      },
      {
        id: "hist14",
        question: "Which precious item was Ethiopia famous for in ancient times?",
        options: ["Gold", "Frankincense", "Myrrh", "All of the above"],
        correct: "All of the above",
        explanation: "Ancient Ethiopia was renowned for gold, frankincense, myrrh, and other precious goods"
      },
      {
        id: "hist15",
        question: "What language family does Ge'ez belong to?",
        options: ["Semitic", "Cushitic", "Nilo-Saharan", "Niger-Congo"],
        correct: "Semitic",
        explanation: "Ge'ez belongs to the Semitic language family, related to Hebrew and Arabic"
      },
      {
        id: "hist16",
        question: "Which architectural feature is unique to Ethiopian churches?",
        options: ["Rock-hewn construction", "Wooden roofs", "Stone walls", "Metal doors"],
        correct: "Rock-hewn construction",
        explanation: "Ethiopia is unique for its rock-hewn churches carved directly from solid rock"
      },
      {
        id: "hist17",
        question: "What was the role of monasteries in ancient Ethiopia?",
        options: ["Religious centers", "Educational institutions", "Cultural preservation", "All of the above"],
        correct: "All of the above",
        explanation: "Ethiopian monasteries served as religious, educational, and cultural centers"
      },
      {
        id: "hist18",
        question: "Which ancient Ethiopian artifact is most famous?",
        options: ["Ark of the Covenant", "Crown of Sheba", "Tablets of Moses", "Seal of Solomon"],
        correct: "Ark of the Covenant",
        explanation: "Ethiopia claims to house the original Ark of the Covenant in Aksum"
      },
      {
        id: "hist19",
        question: "What connected ancient Ethiopia to the outside world?",
        options: ["Maritime trade", "Overland routes", "Religious pilgrimages", "All of the above"],
        correct: "All of the above",
        explanation: "Ancient Ethiopia was connected globally through trade routes, maritime connections, and religious ties"
      },
      {
        id: "hist20",
        question: "Which modern region of Ethiopia contains most ancient sites?",
        options: ["Northern Ethiopia", "Southern Ethiopia", "Eastern Ethiopia", "Western Ethiopia"],
        correct: "Northern Ethiopia",
        explanation: "Most ancient Ethiopian historical sites are located in the northern regions, including Aksum and Lalibela"
      }
    ]
  },
  {
    id: "medieval",
    name: "Medieval Period",
    description: "Zagwe Dynasty and Rise of Solomonic Dynasty",
    questions: [
      {
        id: "med1",
        question: "Which dynasty built the rock churches of Lalibela?",
        options: ["Solomonic", "Zagwe", "Aksumite", "Gondarine"],
        correct: "Zagwe",
        explanation: "The Zagwe dynasty, particularly King Lalibela, built the famous rock-hewn churches in the 12th century"
      },
      {
        id: "med2",
        question: "How many churches are there in Lalibela?",
        options: ["11", "12", "10", "13"],
        correct: "11",
        explanation: "There are 11 rock-hewn churches in Lalibela, carved from solid volcanic rock"
      },
      {
        id: "med3",
        question: "What was the capital of the Zagwe dynasty?",
        options: ["Lalibela", "Aksum", "Gondar", "Roha"],
        correct: "Roha",
        explanation: "The Zagwe capital was called Roha, which was later renamed Lalibela"
      },
      {
        id: "med4",
        question: "Which emperor restored the Solomonic dynasty?",
        options: ["Yekuno Amlak", "Zara Yaqob", "Amda Seyon", "Dawit I"],
        correct: "Yekuno Amlak",
        explanation: "Emperor Yekuno Amlak overthrew the Zagwe dynasty and restored the Solomonic line in 1270 CE"
      },
      {
        id: "med5",
        question: "What is the most famous church in Lalibela?",
        options: ["St. George", "St. Mary", "St. Michael", "Holy Trinity"],
        correct: "St. George",
        explanation: "The Church of St. George (Bet Giyorgis) is the most famous and well-preserved church in Lalibela"
      },
      {
        id: "med6",
        question: "During which century did the Zagwe dynasty rule?",
        options: ["12th-13th centuries", "10th-11th centuries", "14th-15th centuries", "11th-12th centuries"],
        correct: "12th-13th centuries",
        explanation: "The Zagwe dynasty ruled from approximately 1137 to 1270 CE"
      },
      {
        id: "med7",
        question: "What was the primary religion during the medieval period?",
        options: ["Christianity", "Islam", "Traditional beliefs", "Judaism"],
        correct: "Christianity",
        explanation: "Ethiopian Orthodox Christianity was the dominant religion during the medieval period"
      },
      {
        id: "med8",
        question: "Which famous medieval emperor expanded Ethiopian territory?",
        options: ["Amda Seyon I", "Lalibela", "Yekuno Amlak", "Zara Yaqob"],
        correct: "Amda Seyon I",
        explanation: "Emperor Amda Seyon I (1314-1344) significantly expanded Ethiopian territory through military campaigns"
      },
      {
        id: "med9",
        question: "What architectural style characterizes Lalibela churches?",
        options: ["Rock-hewn", "Wooden", "Stone masonry", "Mud brick"],
        correct: "Rock-hewn",
        explanation: "Lalibela churches are carved entirely from solid volcanic rock, creating a unique architectural style"
      },
      {
        id: "med10",
        question: "Which foreign religion began expanding in medieval Ethiopia?",
        options: ["Islam", "Buddhism", "Hinduism", "Paganism"],
        correct: "Islam",
        explanation: "Islam began expanding in Ethiopia during the medieval period, particularly in eastern and southern regions"
      },
      {
        id: "med11",
        question: "What was the Kebra Nagast?",
        options: ["Ethiopian chronicle", "Religious text", "Legal code", "Military manual"],
        correct: "Ethiopian chronicle",
        explanation: "The Kebra Nagast (Glory of the Kings) is an important Ethiopian text that traces the Solomonic dynasty's origins"
      },
      {
        id: "med12",
        question: "Which medieval emperor was known for religious reforms?",
        options: ["Zara Yaqob", "Amda Seyon", "Dawit I", "Baeda Maryam"],
        correct: "Zara Yaqob",
        explanation: "Emperor Zara Yaqob (1434-1468) implemented significant religious and administrative reforms"
      },
      {
        id: "med13",
        question: "What was the main economic activity in medieval Ethiopia?",
        options: ["Agriculture", "Trade", "Mining", "Crafts"],
        correct: "Agriculture",
        explanation: "Agriculture was the foundation of medieval Ethiopian economy, though trade was also important"
      },
      {
        id: "med14",
        question: "Which river system was important for medieval Ethiopian trade?",
        options: ["Blue Nile", "White Nile", "Awash", "Omo"],
        correct: "Blue Nile",
        explanation: "The Blue Nile system was crucial for trade and agriculture in medieval Ethiopia"
      },
      {
        id: "med15",
        question: "What writing system was used in medieval Ethiopia?",
        options: ["Ge'ez", "Arabic", "Latin", "Greek"],
        correct: "Ge'ez",
        explanation: "Ge'ez script continued to be used for religious and administrative purposes in medieval Ethiopia"
      },
      {
        id: "med16",
        question: "Which foreign power threatened medieval Ethiopia?",
        options: ["Ottoman Empire", "Portuguese", "Arabs", "All of the above"],
        correct: "All of the above",
        explanation: "Medieval Ethiopia faced threats from various foreign powers including Ottomans, Portuguese, and Arab states"
      },
      {
        id: "med17",
        question: "What was the social structure of medieval Ethiopia?",
        options: ["Hierarchical", "Egalitarian", "Tribal", "Democratic"],
        correct: "Hierarchical",
        explanation: "Medieval Ethiopian society was highly hierarchical with the emperor at the top"
      },
      {
        id: "med18",
        question: "Which medieval tradition connected Ethiopia to Jerusalem?",
        options: ["Pilgrimage", "Trade", "Diplomatic missions", "All of the above"],
        correct: "All of the above",
        explanation: "Ethiopia maintained connections to Jerusalem through pilgrimages, trade, and diplomatic relations"
      },
      {
        id: "med19",
        question: "What was the role of monasteries in medieval Ethiopia?",
        options: ["Education and preservation", "Military training", "Economic production", "Political administration"],
        correct: "Education and preservation",
        explanation: "Monasteries were centers of learning and preserved Ethiopian culture and knowledge"
      },
      {
        id: "med20",
        question: "Which medieval Ethiopian emperor established diplomatic relations with Europe?",
        options: ["Dawit I", "Zara Yaqob", "Amda Seyon", "Yeshaq I"],
        correct: "Dawit I",
        explanation: "Emperor Dawit I (1382-1413) established some of the earliest diplomatic contacts with European powers"
      }
    ]
  },
  {
    id: "modern",
    name: "Modern Ethiopia",
    description: "19th and 20th Century History",
    questions: [
      {
        id: "mod1",
        question: "In which year did Ethiopia defeat Italy at the Battle of Adwa?",
        options: ["1895", "1896", "1897", "1898"],
        correct: "1896",
        explanation: "The Battle of Adwa took place on March 1, 1896, where Ethiopian forces defeated Italian colonial forces"
      },
      {
        id: "mod2",
        question: "Which Ethiopian emperor is known for modernizing the country?",
        options: ["Menelik II", "Haile Selassie", "Yohannes IV", "Tewodros II"],
        correct: "Menelik II",
        explanation: "Emperor Menelik II (1889-1913) is credited with modernizing Ethiopia, expanding its territory, and maintaining independence"
      },
      {
        id: "mod3",
        question: "Who founded modern Addis Ababa?",
        options: ["Menelik II", "Haile Selassie", "Empress Taytu", "Tewodros II"],
        correct: "Menelik II",
        explanation: "Emperor Menelik II founded Addis Ababa in 1886, making it the capital of Ethiopia"
      },
      {
        id: "mod4",
        question: "When did Italy first invade Ethiopia?",
        options: ["1895", "1935", "1889", "1936"],
        correct: "1895",
        explanation: "The First Italo-Ethiopian War began in 1895, culminating in the Battle of Adwa in 1896"
      },
      {
        id: "mod5",
        question: "Which emperor ruled during the Italian occupation (1936-1941)?",
        options: ["Haile Selassie", "Menelik II", "Iyasu V", "Zewditu"],
        correct: "Haile Selassie",
        explanation: "Emperor Haile Selassie was in exile during the Italian occupation and returned in 1941"
      },
      {
        id: "mod6",
        question: "When was the Organization of African Unity (OAU) founded in Addis Ababa?",
        options: ["1963", "1960", "1965", "1958"],
        correct: "1963",
        explanation: "The OAU was founded in Addis Ababa on May 25, 1963, with Haile Selassie playing a key role"
      },
      {
        id: "mod7",
        question: "Which emperor was known as the 'Lion of Judah'?",
        options: ["Haile Selassie", "Menelik II", "Tewodros II", "Yohannes IV"],
        correct: "Haile Selassie",
        explanation: "Emperor Haile Selassie was known as the 'Lion of Judah' and 'Conquering Lion of the Tribe of Judah'"
      },
      {
        id: "mod8",
        question: "What was the Derg?",
        options: ["Military committee", "Political party", "Religious organization", "Trade union"],
        correct: "Military committee",
        explanation: "The Derg was a military committee that overthrew Haile Selassie in 1974 and ruled Ethiopia until 1987"
      },
      {
        id: "mod9",
        question: "Who led the Derg regime?",
        options: ["Mengistu Haile Mariam", "Aman Andom", "Teferi Benti", "Atnafu Abate"],
        correct: "Mengistu Haile Mariam",
        explanation: "Colonel Mengistu Haile Mariam emerged as the leader of the Derg and ruled Ethiopia from 1974-1991"
      },
      {
        id: "mod10",
        question: "When did the Derg regime end?",
        options: ["1991", "1987", "1974", "1995"],
        correct: "1991",
        explanation: "The Derg regime ended in 1991 when it was overthrown by the Ethiopian People's Revolutionary Democratic Front (EPRDF)"
      },
      {
        id: "mod11",
        question: "Which battle secured Ethiopian independence from Italy in 1941?",
        options: ["Battle of Keren", "Battle of Adwa", "Battle of Maychew", "Battle of Amba Aradam"],
        correct: "Battle of Keren",
        explanation: "The Battle of Keren (1941) was crucial in the British-Ethiopian campaign that liberated Ethiopia from Italian occupation"
      },
      {
        id: "mod12",
        question: "What was the Red Terror?",
        options: ["Period of political violence", "Military campaign", "Economic policy", "Cultural revolution"],
        correct: "Period of political violence",
        explanation: "The Red Terror (1977-1978) was a period of violent political repression under the Derg regime"
      },
      {
        id: "mod13",
        question: "Which drought caused major famine in Ethiopia?",
        options: ["1984-1985", "1973-1974", "1990-1991", "All of the above"],
        correct: "All of the above",
        explanation: "Ethiopia experienced severe famines during 1973-74, 1984-85, and other periods due to drought and conflict"
      },
      {
        id: "mod14",
        question: "When did Eritrea gain independence from Ethiopia?",
        options: ["1993", "1991", "1995", "1998"],
        correct: "1993",
        explanation: "Eritrea gained independence from Ethiopia in 1993 after a referendum supervised by the UN"
      },
      {
        id: "mod15",
        question: "Who was the first Prime Minister of modern Ethiopia?",
        options: ["Meles Zenawi", "Hailemariam Desalegn", "Abiy Ahmed", "Tamirat Layne"],
        correct: "Meles Zenawi",
        explanation: "Meles Zenawi was the first Prime Minister of the Federal Democratic Republic of Ethiopia (1995-2012)"
      },
      {
        id: "mod16",
        question: "When was the current Ethiopian constitution adopted?",
        options: ["1995", "1991", "1987", "2000"],
        correct: "1995",
        explanation: "The Constitution of the Federal Democratic Republic of Ethiopia was adopted in 1995"
      },
      {
        id: "mod17",
        question: "Which emperor attempted to modernize Ethiopia in the 19th century?",
        options: ["Tewodros II", "Yohannes IV", "Menelik II", "All of the above"],
        correct: "All of the above",
        explanation: "Emperors Tewodros II, Yohannes IV, and Menelik II all attempted various modernization efforts"
      },
      {
        id: "mod18",
        question: "What was the significance of the Treaty of Wuchale (1889)?",
        options: ["Disputed Italian claims", "Established borders", "Trade agreement", "Military alliance"],
        correct: "Disputed Italian claims",
        explanation: "The Treaty of Wuchale led to disputes between Ethiopia and Italy, eventually contributing to the First Italo-Ethiopian War"
      },
      {
        id: "mod19",
        question: "Which foreign power helped Ethiopia modernize its military?",
        options: ["France", "Britain", "Russia", "Germany"],
        correct: "France",
        explanation: "France provided military advisors and modern weapons to help Ethiopia modernize its armed forces"
      },
      {
        id: "mod20",
        question: "Who became Prime Minister of Ethiopia in 2018?",
        options: ["Abiy Ahmed", "Hailemariam Desalegn", "Meles Zenawi", "Sahle-Work Zewde"],
        correct: "Abiy Ahmed",
        explanation: "Abiy Ahmed became Prime Minister of Ethiopia in April 2018 and won the Nobel Peace Prize in 2019"
      }
    ]
  }
];
