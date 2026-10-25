import type { Project } from '../lib/types'

const platformAdventureImage = 'https://raw.githubusercontent.com/mihadkazi1/Unity-3D-Platform-Adventure/main/Main%20Gameplay.png'
const eduArModelImage = 'https://raw.githubusercontent.com/mihadkazi1/EduAR-3D/main/Docs/Screenshots/HumanHeart.jpg'

export const projects: Project[] = [


{
  id: 'echoes-of-sonargaon-webar',
  title: 'Echoes of Sonargaon: The Cursed Guardian',
  category: 'Augmented Reality',
  description:
    'An immersive image-target WebAR adventure inspired by ancient Sonargaon, featuring a mysterious guardian, interactive 3D combat, and hidden treasure.',
  details:
    'Echoes of Sonargaon: The Cursed Guardian is a browser-based augmented reality game built with 8th Wall, TypeScript, and interactive 3D assets. Players scan an image target to enter an immersive experience, interact with an ancient gate, encounter the cursed guardian, explore combat mechanics, and discover hidden treasure—all through a smartphone browser without installing a traditional mobile application.',
  technologies: ['8th Wall', 'TypeScript', 'WebAR', '3D Animation'],
 image: '/images/GAMEPLAY.jpg',
alt: 'Echoes of Sonargaon: The Cursed Guardian gameplay',
  github:
    'https://github.com/mihadkazi1/echoes-of-sonargaon-webar',
  demo: 'https://echoes-of-sonargaon-webar.netlify.app',
  featured: true,
  year: '2026',
  highlights: [
    'Image-target tracking with 8th Wall',
    'Interactive ancient gate animation',
    'Guardian encounters and combat mechanics',
    '3D treasure discovery',
    'Browser-based mobile AR gameplay',
  ],
},



{
  id: 'auron-watch-ar',
  title: 'AURON Watch AR',
  category: 'Augmented Reality',
  description: 'An interactive AR watch experience that brings the AURON watch to life through immersive 3D visualization and live wrist try-on.',
  details:
    'AURON Watch AR is an augmented reality experience built with Unity and Vuforia. Users can explore a 3D watch model and experience the watch through an interactive live wrist try-on, bridging digital product visualization with real-world interaction.',
  technologies: ['Unity', 'C#', 'Vuforia Engine', 'Augmented Reality'],
  image: 'https://raw.githubusercontent.com/mihadkazi1/AURON-Watch-AR/main/docs/screenshots/05-live-wrist-try-on.jpg',
  alt: 'AURON Watch AR live wrist try-on experience',
  github: 'https://github.com/mihadkazi1/AURON-Watch-AR',
  featured: true,
  year: '2026',
  highlights: [
    'Live wrist try-on experience',
    'Interactive 3D watch visualization',
    'Unity and Vuforia integration',
    'Augmented reality product experience',
  ],
},






  {
    id: 'eduar-3d',
    title: 'EduAR 3D',
    category: 'Augmented Reality',
    description: 'Educational AR app that turns printed lesson images into interactive 3D learning experiences on Android.',
    details:
      'EduAR 3D combines textbook-based learning with image-target AR. Students scan registered lesson images on Android, automatically load the corresponding educational 3D model, interact with it, study topic content, complete quizzes, and track learning progress.',
    technologies: ['Unity', 'C#', 'Vuforia Engine', 'Android'],
    image: eduArModelImage,
    alt: 'EduAR 3D Human Heart AR model with labeled anatomy controls',
    github: 'https://github.com/mihadkazi1/EduAR-3D',
    featured: true,
    year: 'Academic Project',
    highlights: ['Universal lesson scanner', 'Interactive 3D model controls', 'Educational labels and learning mode', 'Interactive quizzes and progress tracking'],
  },
  {
    id: 'platform-adventure',
    title: '3D Platform Adventure',
    category: 'Game Development',
    description: 'Unity 3D platform-adventure game built around movement, collectibles, hazards, and progressive level challenges.',
    details:
      'The gameplay loop moves from starting a level to collecting required coins, unlocking a key, reaching the door, and showing a victory state. The project also includes a three-life system, restart flow, audio feedback, gameplay UI, and multiple levels.',
    technologies: ['Unity', 'C#', '3D Game Development'],
    image: platformAdventureImage,
    alt: '3D Platform Adventure gameplay showing floating platforms, coins, and hazards',
    github: 'https://github.com/mihadkazi1/Unity-3D-Platform-Adventure',
    featured: true,
    year: '2026',
    highlights: ['3D player movement and jumping', 'Coin, key, door, and hazard systems', 'Lives, Game Over, Victory, and restart flow', 'Multiple levels and progression'],
  },
  {
    id: 'pothiq-ai',
    title: 'PothIQ AI — Smart Dhaka Transit',
    category: 'Software Development',
    description: 'Dhaka transit companion for route search, fare information, interactive maps, and AI-assisted commuter support.',
    details:
      'PothIQ AI is a mobile transit application focused on practical access to Dhaka bus information. Its public repository documents offline-first route data, fuzzy bus search, fare calculation, interactive map routing, an in-app AI assistant, bilingual support, and emergency SOS functionality.',
    technologies: ['React Native', 'Expo', 'TypeScript', 'SQLite'],
    github: 'https://github.com/taher-dev/pothiq-ai',
    featured: false,
    year: 'Project',
    highlights: ['Offline-first transit experience', 'Smart route and fare search', 'Interactive route maps', 'AI transit assistant and SOS flow'],
  },
  {
    id: 'nike-store',
    title: 'Nike E-Commerce Website',
    category: 'Web Development',
    description: 'Responsive Nike-inspired e-commerce website with a product catalog, shopping flow, and PHP/MySQL backend.',
    details:
      'A three-person group project that combines a responsive Nike-inspired storefront with a functional PHP backend and MySQL database. The public repository also documents user authentication and product data handling.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/taher-dev/nike-web-programming-project',
    featured: false,
    year: 'Group Project',
    highlights: ['Responsive storefront UI', 'Product catalog and shopping flow', 'User authentication', 'PHP + MySQL backend'],
  },
  {
    id: 'karmacheck',
    title: 'KarmaCheck — Decentralized Trust & Reputation Engine',
    category: 'Portfolio',
    description: 'SOLVIO Phase 1 qualified concept for portable reputation, AI-verified reviews, and blockchain-secured trust data.',
    details:
      'KarmaCheck was developed by Team IdeaEngine for SOLVIO. The concept addresses platform-locked and manipulated reputations by aggregating reviews, using AI for sentiment and fraud detection, and securing trust data with blockchain. The team qualified for SOLVIO Phase 1 but did not advance to Phase 2; the project remains a meaningful product-building milestone. Team: Md Nazmul Hossain, Md Sanjid Alam Araf, Kazi Saqlain Mihad, and Shamsunnaher. The mission is to make trust transparent, fair, and portable for service providers across South Asia.',
    technologies: ['Python', 'spaCy', 'scikit-learn', 'Node.js', 'React', 'Hyperledger', 'AWS'],
    demo: 'https://lnkd.in/gz64Mqg5',
    linkedinPost: 'https://www.linkedin.com/feed/update/urn:li:activity:7400437981645369344/',
    featured: false,
    year: 'SOLVIO Phase 1',
    highlights: ['AI-powered sentiment and fraud detection', 'Blockchain-verified trust transparency', 'Universal cross-platform reputation', 'Subscription + API business model concept'],
  },
  {
    id: 'plant-disease',
    title: 'Plant Disease Detection AI System',
    category: 'AI / ML',
    description: 'AI-based plant disease detection system using image processing and machine learning techniques.',
    details:
      'The system explores image-based plant disease detection using Python and common data and ML tooling. The project is positioned around practical machine learning experimentation and visual classification workflows.',
    technologies: ['Python', 'Kaggle', 'Pandas'],
    github: 'https://github.com/mihadkazi1/Plant-Disease-Detection-AI-System',
    featured: false,
    year: 'Project',
    highlights: ['Image-based detection workflow', 'Machine learning experimentation', 'Python-based data pipeline'],
  },
]
