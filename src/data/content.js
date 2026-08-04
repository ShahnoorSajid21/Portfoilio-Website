export const PROJECTS = [
  {
    id: 'pw01', model: 'PW01', title: 'Voice AI Agents', year: '2026', aspect: '1/1', img: 'assets/agent-desk.jpg',
    cardSummary: 'An end to end Voice AI suite designed for banking services, featuring automated customer QA with live human escalation, hyper localized regional marketing agents, and a unified management dashboard for campaign analytics and KPI reporting.',
    overview: 'Engineered a unified Voice AI platform for banking services to streamline customer quality assurance and drive targeted financial product adoption such as cards and lending products. The platform combines two specialized outbound voice workflows, an intelligent QA agent with real time human fallback and a localized marketing outreach engine, both managed through a centralized campaign and analytics dashboard. The solution enables banks to automate customer engagement while maintaining human intervention capabilities for critical scenarios.',
    capabilities: [
      { name: 'Automated QA & Escalation', desc: 'Conducts outbound customer feedback calls with real time sentiment analysis and intelligent escalation workflows.' },
      { name: 'Live Human Handoff', desc: 'Transfers calls seamlessly to human agents when negative sentiment or critical issues are detected.' },
      { name: 'Localized Marketing Engine', desc: 'Executes outreach campaigns using demographic tailored regional accent voice clones to improve engagement and conversion rates.' },
      { name: 'Campaign Management Dashboard', desc: 'Provides centralized control for campaign scheduling, audience management, and voice profile assignment.' },
      { name: 'Real Time Analytics', desc: 'Tracks KPIs, sentiment trends, campaign performance, and customer interaction metrics.' },
    ],
    stack: [
      { group: 'AI & Speech', items: ['Speech to Text (STT)', 'Neural Text to Speech (TTS)', 'Regional Accent Cloning', 'LLM Dialogue Orchestration'] },
      { group: 'Telephony', items: ['PSTN/SIP Routing', 'Real Time Audio Streaming', 'Live Call Transfer Protocols'] },
      { group: 'Frontend', items: ['React', 'Next.js'] },
      { group: 'Backend', items: ['Node.js', 'FastAPI'] },
      { group: 'Communication Layer', items: ['WebSockets'] },
    ],
  },
  {
    id: 'pw05', model: 'PW05', title: 'KlimaChain', year: '2025', aspect: '4/5', img: 'assets/retirement-press.jpeg',
    cardSummary: 'A full stack Web3 dApp for carbon credit tokenization featuring a dual token architecture (ERC721/ERC20), interconnected smart contracts with capacity gated issuance, and verifiable credit retirement deployed on Sepolia Testnet.',
    overview: 'Engineered KlimaChain, a full stack Web3 decentralized application designed to bring transparency, traceability, and liquidity to environmental credit markets. The platform utilizes a dual token architecture that separates project provenance from tradable carbon credit units while leveraging interconnected smart contracts to enforce issuance limits, access controls, and retirement mechanisms. The result is a verifiable and transparent carbon credit ecosystem operating entirely on chain.',
    capabilities: [
      { name: 'Dual Token Architecture', desc: 'Combines ERC721 tokens for project provenance with ERC20 tokens for tradable carbon credits.' },
      { name: 'Capacity Gated Issuance', desc: 'Controls token minting through predefined issuance constraints.' },
      { name: 'Smart Contract Governance', desc: 'Enforces access control and operational rules through interconnected contracts.' },
      { name: 'Credit Retirement Mechanism', desc: 'Supports verifiable burning of carbon credits to prevent double counting.' },
      { name: 'Web3 Authentication', desc: 'Enables seamless wallet connectivity and decentralized user interaction.' },
    ],
    stack: [
      { group: 'Blockchain', items: ['Ethereum', 'Sepolia Testnet'] },
      { group: 'Smart Contracts', items: ['Solidity', 'ERC20', 'ERC721', 'Hardhat'] },
      { group: 'Web3 Integration', items: ['Ethers.js v6', 'MetaMask API'] },
      { group: 'Frontend', items: ['React', 'Next.js'] },
      { group: 'Styling', items: ['Tailwind CSS'] },
      { group: 'Verification', items: ['Etherscan'] },
    ],
  },
  {
    id: 'pw04', model: 'PW04', title: 'Quant Engine', year: '2024', aspect: '4/5', img: 'assets/quant-engine.jpeg',
    cardSummary: 'A high performance C++ predictive analytics engine that processes financial time series data using custom built data structures, linear regression forecasting, moving average smoothing, and anomaly detection algorithms.',
    overview: 'Engineered a high performance predictive analytics engine focused on processing and forecasting financial time series datasets. Built entirely in C++ without relying on heavy statistical libraries, the system utilizes custom low level data structures to optimize indexing, sliding window computations, forecasting workflows, and statistical anomaly detection. The project demonstrates strong fundamentals in systems programming, algorithm design, and quantitative analytics.',
    capabilities: [
      { name: 'Custom Data Structures', desc: 'Implements Binary Search Trees and Doubly Linked Lists from scratch for efficient data processing.' },
      { name: 'Time Series Forecasting', desc: 'Uses Ordinary Least Squares Linear Regression for predictive modeling.' },
      { name: 'Trend Analysis', desc: 'Applies Simple Moving Average smoothing for market trend identification.' },
      { name: 'Anomaly Detection', desc: 'Monitors variance thresholds to identify unusual market events and outliers.' },
      { name: 'Performance Oriented Design', desc: 'Optimized for efficient memory management and computational speed.' },
    ],
    stack: [
      { group: 'Language', items: ['C++'] },
      { group: 'Systems Programming', items: ['Dynamic Memory Allocation', 'Low Level Memory Management'] },
      { group: 'Data Structures', items: ['Binary Search Trees', 'Doubly Linked Lists', 'Sliding Window Architectures'] },
      { group: 'Analytics', items: ['Linear Regression', 'Simple Moving Average (SMA)', 'Variance Analysis', 'Outlier Detection'] },
    ],
  },
  {
    id: 'pw02', model: 'PW02', title: 'TakafulGo', year: '2025', aspect: '4/5', img: 'assets/rain-gauge.jpeg',
    cardSummary: 'A parametric Takaful microinsurance platform featuring sub 3 click policy acquisition, automated weather triggered claims settlements via live third party API pipelines, and full compliance with Islamic finance and SECP regulatory frameworks.',
    overview: 'Architected and developed TakafulGo, an innovative parametric InsurTech platform engineered on a cooperative Takaful model aligned with Islamic finance principles. Built under the SECP Insurance Sandbox framework, the platform modernizes microinsurance by enabling frictionless policy purchasing and automated zero touch claims settlement driven by real time environmental and weather data feeds. The solution significantly reduces claims processing overhead while improving accessibility and transparency for policyholders.',
    capabilities: [
      { name: 'Sub 3 Click Onboarding', desc: 'Enables policy acquisition through a highly streamlined user experience.' },
      { name: 'Parametric Claims Engine', desc: 'Automates claims payouts using real time weather and climate data triggers.' },
      { name: 'Zero Touch Settlements', desc: 'Eliminates manual claims review for qualifying events.' },
      { name: 'Regulatory Compliance', desc: 'Designed to align with SECP Insurance Sandbox requirements.' },
      { name: 'Islamic Finance Alignment', desc: 'Built around a cooperative Takaful framework compliant with Shariah principles.' },
    ],
    stack: [
      { group: 'Frontend', items: ['React', 'Component Driven Architecture'] },
      { group: 'Backend', items: ['Node.js', 'Express.js'] },
      { group: 'API Integration', items: ['REST APIs', 'Webhooks', 'Third Party Data Pipelines'] },
      { group: 'Database', items: ['MongoDB'] },
      { group: 'Operations', items: ['Automated Payout Tracking and Transaction Logging'] },
    ],
  },
  {
    id: 'pw03', model: 'PW03', title: 'MicroVest', year: '2025', aspect: '4/5', img: 'assets/signal-box.jpg',
    cardSummary: 'A full stack portfolio management platform featuring automated buy/sell signal generation through quantitative models, hybrid database architecture, and role based access control across multiple user tiers.',
    overview: 'Engineered MicroVest, a full stack financial portfolio management platform designed to automate investment decision making and streamline multi user asset management workflows. The system processes financial datasets through quantitative regression models to generate data driven buy and sell recommendations while maintaining secure access controls and customized experiences for different stakeholder groups. The platform combines analytics, portfolio monitoring, and security into a single investment management solution.',
    capabilities: [
      { name: 'Quantitative Signal Engine', desc: 'Generates automated buy and sell recommendations using multi variable regression models.' },
      { name: 'Role Based Access Control', desc: 'Supports Admin, Portfolio Manager, and Investor user tiers with tailored permissions.' },
      { name: 'Portfolio Analytics Dashboard', desc: 'Provides visibility into portfolio performance, allocation, and exposure metrics.' },
      { name: 'Investment Monitoring', desc: 'Tracks historical performance and asset distribution in real time.' },
      { name: 'Secure User Management', desc: 'Enforces authentication and authorization across all user roles.' },
    ],
    stack: [
      { group: 'Frontend', items: ['React', 'Data Visualization Libraries'] },
      { group: 'Backend', items: ['Node.js', 'Express.js'] },
      { group: 'API Layer', items: ['REST APIs'] },
      { group: 'Analytics Engine', items: ['Custom Multi Variable Regression Models'] },
      { group: 'Databases', items: ['SQL', 'MongoDB'] },
      { group: 'Security', items: ['JWT Authentication', 'RBAC Middleware'] },
    ],
  },
];

export const byId = (id) => PROJECTS.find((p) => p.id === id);

export const NAV_ITEMS = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#work', label: 'Projects', num: '02' },
  { href: '#experience', label: 'Experience', num: '03' },
  { href: '#education', label: 'Education', num: '04' },
  { href: '#skills', label: 'Skills', num: '05' },
  { href: '#community', label: 'Community', num: '06' },
  { href: '#connect', label: 'Contact', num: '07' },
];

export const FACTS = [
  'BS Financial Technology · FAST NUCES',
  'Python · SQL · C++ · JavaScript',
  'TensorFlow · Scikit-Learn · Pandas',
  'Urdu / English',
];

export const COURSES = [
  'Data structures & algorithms',
  'Machine learning',
  'Databases & SQL',
  'Financial modelling',
  'Object oriented programming',
  'Agentic AI',
];

export const EXPERIENCE = [
  {
    org: 'Abhi Microfinance Bank', role: 'Digital Products Intern', dates: 'Jul 2026 — present', loc: 'Islamabad, PK',
    did: [
      'Architected an on-premise blockchain KYC system, designing database ERDs, REST APIs, and smart contracts to eliminate redundant identity verifications.',
      'System architecture and technical specifications; competitor research and user journey mapping.',
      'Authored technical architecture, specs, and user journeys, backed by competitor research to drive core product design.',
      'Developed AI POCs, including automated voice agents for marketing and loan recovery workflows.',
    ],
  },
  {
    org: 'Finova Solutions', role: 'Co-Founder & Head of Strategy', dates: 'Feb 2025 — Dec 2025', loc: 'Islamabad, PK',
    did: [
      'Led product strategy and development for a team of 5, delivering an MVP in 6 months and pitching to tier-1 institutions (JazzCash, Easypaisa, Bank Of Punjab and National Bank Of Pakistan).',
      'Secured a government contract with Telecom Foundation (Ministry of IT) and signed a MENA distribution MoU with Advanzatech.',
    ],
  },
  {
    org: 'Mobilink Microfinance Bank', role: 'Digital Banking Intern', dates: 'Jul — Aug 2024', loc: 'Islamabad, PK',
    did: [
      'Built and maintained KPI dashboards for the Digital Banking team to track operational performance metrics.',
      'Analyzed operational data using Python and Excel, identifying process inefficiencies to drive service delivery improvements.',
    ],
  },
  {
    org: 'LearnOBots', role: 'Sponsorship Intern', dates: 'Jun — Jul 2024', loc: 'Islamabad, PK',
    did: [
      'Managed the end-to-end sponsorship pipeline and drafted commercial proposals.',
      'Maintained reporting across three or more active corporate partnership conversations.',
    ],
  },
];

export const LEADERSHIP = [
  {
    org: 'Google Developer Groups on Campus (FAST Islamabad)',
    positions: [
      {
        role: 'Vice Head Corporate Outreach', dates: 'Oct 2024 — Aug 2025 · 11 mos', loc: 'Islamabad, PK · On site',
        did: [
          'Facilitated strategic partnerships bridging academic talent and industry leaders.',
          'Managed corporate stakeholder relationships to align resources, mentorship, and funding with student led initiatives.',
        ],
      },
    ],
  },
  {
    org: 'RozMarrah',
    positions: [
      {
        role: 'Campus Ambassador', dates: 'Sep 2024 — Mar 2025 · 7 mos', loc: 'Islamabad, PK · On site',
        did: ['Led on campus brand activation and platform adoption, coordinating an ambassador network on unified outreach.'],
      },
      {
        role: 'Social Media and Marketing Intern', dates: 'Jul 2024 — Aug 2024 · 2 mos', loc: 'Remote',
        did: ['Designed visual collateral and ran digital campaigns to grow brand visibility and engagement.'],
      },
    ],
  },
  {
    org: 'TEDxFASTIslamabad',
    positions: [
      {
        role: 'Executive Partnerships', dates: 'Jun 2024 — Oct 2024 · 5 mos', loc: 'Islamabad, PK',
        did: ['Secured corporate sponsorships, ensuring every partnership matched TEDx brand standards.'],
      },
    ],
  },
  {
    org: 'NASCON 24, FAST NUCES',
    positions: [
      {
        role: 'Sponsorship Team', dates: 'Dec 2023 — Mar 2024 · 4 mos', loc: 'Islamabad, PK · On site',
        did: [
          'Closed a PKR 2M partnership deal through targeted market research and stakeholder negotiation.',
          'Designed sponsorship proposals and oversaw activation execution to meet contractual deliverables.',
        ],
      },
    ],
  },
];

export const EDUCATION = {
  dates: 'Aug 2023 — present',
  loc: 'Islamabad, PK',
  org: 'FAST NUCES',
  role: 'BS Financial Technology',
  desc: 'Engineered at the intersection of Computer Science and Finance: leveraging algorithms, machine learning, and domain knowledge in payments and lending to build compliant, scalable financial applications.',
};

export const LAYERS = [
  { no: 'L1', img: 'assets/skill-l1.jpeg', name: 'Data engineering', def: 'Getting the signal in, and getting it clean enough that the model is not learning the noise.', tools: ['Pandas', 'NumPy', 'SQL', 'Data Ingestion', 'Power BI'] },
  { no: 'L2', img: 'assets/skill-l2-v2.jpeg', name: 'Modelling & ML', def: 'Turning a signal into a decision classification, regression, anomaly detection.', tools: ['TensorFlow', 'Scikit Learn', 'Time series', 'Python','C++','Quantitative Modeling'] },
  { no: 'L3', img: 'assets/skill-l3.jpeg', name: 'Agents & automation', def: 'Acting on the decision unattended, and knowing when to hand it back to a person.', tools: ['Agentic workflows', 'ASR', 'Intent classification', 'Escalation policy','TTS','LLM Orchestration'] },
  { no: 'L4', img: 'assets/skill-l4.jpeg', name: 'Product & systems', def: 'Deciding what to build, specifying it, and defending the trade off afterwards.', tools: ['API Design', 'System architecture', 'MERN', 'Solidity', 'Git'] },
];

// `img` is optional: a slot without one falls back to a framed placeholder,
// so the section never renders a broken image while photos are pending.
export const COMMUNITY = [
  {
    slot: 'Photo 01',
    img: 'assets/community/photo-01.jpg',
    cap: 'Contract signing with Telecom Foundation (MOITT)',
    alt: 'Finova team members at a contract signing event with the Telecom Foundation (MOITT), standing beside a screen reading "Finova x Telecom Foundation"',
    pos: 'center 25%',
  },
  {
    slot: 'Photo 02',
    img: 'assets/community/photo-02.jpg',
    cap: 'Finova at Google I/O Extended — community partners',
    alt: 'The Finova team at Google I/O Extended, where they were community partners',
    pos: 'center 40%',
  },
  {
    slot: 'Photo 03',
    img: 'assets/community/photo-03.jpg',
    cap: 'TEDxFAST Islamabad — core team award',
    alt: 'Receiving the TEDxFAST Islamabad core team award on stage',
    pos: 'center 45%',
  },
  {
    slot: 'Photo 04',
    img: 'assets/community/photo-04.jpg',
    cap: 'Leadership training — Mobilink Microfinance Bank',
    alt: 'Leadership training cohort at Mobilink Microfinance Bank',
    pos: 'center 40%',
  },
  {
    slot: 'Photo 05',
    img: 'assets/community/photo-05.jpg',
    cap: 'Padel with friends',
    alt: 'Group of friends on a padel court after a matche',
    pos: 'center 45%',
  },
  {
    slot: 'Photo 06',
    img: 'assets/community/photo-06.jpg',
    cap: 'Climatrix project showcase — university science conference',
    alt: 'The Finova team presenting the Climatrix project beside their banner at a university science conference',
    pos: 'center 35%',
  },
];
