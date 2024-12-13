export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'Brazilian League Forecast',
      desc: 'Developed a logistic regression model to predict league rankings with a maximum accuracy of 97%. Leveraged extensive match data and applied statistical analysis to uncover key scoring patterns, enabling more precise ranking predictions.',
      subdesc:
        'Built as a university project for my Introduction to Data Science course.',
      model: 'Trophy',
      modelScale: 0.2,
      href: 'https://github.com/Gronoxx/Brazilian-League-Forecast/tree/main',
      logo: '/assets/project1Logo.png',
      logoStyle: {
        backgroundColor: '#559224',
        border: '0.2px solid #2e6800',
        boxShadow: '0px 0px 60px 0px rgba(85, 146, 36, 0.75)',
      },
      lighting:{
        ambientLight: { intensity: 1, position: [-4, -35, -80] },
        directionalLights: [
          { intensity: 14, color: "#FFD700", position: [11, 40, 44], castShadow: true},
          { intensity: 8.8, color: "#FFD700", position: [14, -200, 200], castShadow: true },
          { intensity: 8.8, color: "#FFD700", position: [-200, 100, 200], castShadow: true},
          { intensity: 8.8, color: "#FFD700", position: [-200, 100, 200], castShadow: true },
        ],
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: '/assets/pythonLogo.png'
        },
        {
          id: 2,
          name: 'Google Colab',
          path: 'assets/googleColabLogo.png',
        },

      ],
    },
    {
      title: 'File Compressor',
      desc: 'A robust file compression system leveraging Huffman encoding to efficiently reduce file sizes. Achieved an average compression rate of 45.92%, with a maximum compression rate of 87.07% for simpler files. It is designed for optimized performance, striking a precise balance between processing speed and resource efficiency.',
      href: 'https://github.com/Gronoxx/Estruturas-de-Dados/tree/main/Projeto%203/TP',
      model: 'Folder',
      modelScale: 0.5,
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px rgba(58, 88, 254, 0.75)',
      },
      lighting:{
        ambientLight: { intensity: 3, position: [-4, -35, -80] },
        directionalLights: [
          { intensity: 3.8, color: "#FDFBD3", position: [14, -200, 200], castShadow: true },
        ],
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'Cpp',
          path: '/assets/cpp_logo.png',
        },
      ],
    },
    {
      title: 'UFMGolf',
      desc: 'A 2D mini golf game where players navigate obstacles and aim to score points with the fewest strokes possible. The game is controlled primarily using the mouse.',
      subdesc: 'Developed as a university project',
      model: 'GolfCart',
      modelScale: 0.7,
      href: 'https://github.com/pds2-dcc-ufmg/2022-2-TW-grupo03',
      logo: '/assets/golfLogo.png',
      logoStyle: {
        backgroundColor: '#cbe8c7',
        background:
          'linear-gradient(0deg, #ebf5ea, #fafcfa), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(203, 232, 199, 0.75)',
      },
      lighting:{
        ambientLight: { intensity: 3, position: [-4, -35, -80] },
        directionalLights: [
          { intensity: 8.8, color: "#FDFBD3", position: [14, -200, 200], castShadow: true },
        ],
      },
      
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'Cpp',
          path: '/assets/cpp_logo.png',
        },
        {
          id: 2,
          name: 'SDL',
          path: 'assets/SDLlogo.png',
        },
        {
          id: 3,
          name: 'Cmake',
          path: '/assets/cmakelogo.png',
        },
      ],
    },
    {
      title: 'Weather App',
      desc: 'A project designed to introduce me to SwiftUI and user experience-driven development. This simple app provides weather updates based on your current location.',
      href: 'https://github.com/Gronoxx/Weather-App/tree/main',
      model: 'Sky',
      modelScale: 10,
      logo: '/assets/WeatherLogo.png',
      logoStyle: {
        backgroundColor: '#12c1fe',
        border: '0.2px solid #12c1fe',
        boxShadow: '0px 0px 60px 0px rgba(18, 193, 254, 0.75)',
      },
      lighting:{
        ambientLight: { intensity: 3, position: [-4, -35, -80] },
        directionalLights: [
          { intensity: 8.8, color: "#FDFBD3", position: [14, -200, 200], castShadow: true },
        ],
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Swift',
          path: '/assets/swiftlogo.png',
        },
        {
          id: 2,
          name: 'SwiftUI',
          path: 'assets/swiftuilogo.png',
        },
      ],
    },
    {
      title: 'Conic Identifier',
      desc: 'The website you\'re currently exploring is my second front-end-focused project, showcasing significant improvements in design and functionality. My first front-end project, a conic identifier, may not look visually appealing, but it features intriguing mathematics derived from advanced concepts in my Analytical Geometry and Linear Algebra Course.',
      subdesc:
        'If you’re curious to see the progress I’ve made, feel free to check out my earlier webpage and compare the two!',
      href: 'https://delicate-frangipane-ae8863.netlify.app',
      model: 'Cone',
      modelScale: 30, 
      logo: '/assets/conicLogo.png',
      logoStyle: {
        backgroundColor: '#e7e300',
        border: '0.2px solid #e7e300',
        boxShadow: '0px 0px 60px 0px rgba(231, 227, 0, 0.70)',
      },
      lighting:{
        ambientLight: { intensity: 3, position: [-4, -35, -80] },
        directionalLights: [
          { intensity: 8.8, color: "#FDFBD3", position: [14, -200, 200], castShadow: true },
        ],
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Js',
          path: '/assets/javascriptLogo.png',
        },
        {
          id: 2,
          name: 'HTML',
          path: 'assets/htmlLogo.png',
        },
        {
          id: 3,
          name: 'CSS',
          path: '/assets/cssLogo.webp',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      cubePosition: isSmall ? [5, -9.4, 0] : isMobile ? [6.5, -8, 0] : isTablet ? [14, -10, 0] : [15,-10,0],
      cubeScale: isSmall ? 0.75 : isMobile ? 0.9 : isTablet ? 1.3 : 1.3,       

      reactLogoPosition: isSmall ? [4, 4, 0] : isMobile ? [5.6, 4.8, 0] : isTablet ? [15, 0, 0] : [15,3,0],
      reactLogoScale: isSmall ? 0.5 : isMobile ? 0.65 : isTablet ? 0.8 : 0.8,       

      ringPosition: isSmall ? [-9, 7, 0] : isMobile ? [-8, 7, 0] : isTablet ? [-20, 3, 0] : [-25 ,10,0],
      ringScale: isSmall ? 0.5 : isMobile ? 0.65 :isTablet ? 0.7 : 0.7,       

      targetPosition: isSmall ? [-7, -13, -10] : isMobile ? [-9, -12, -10] : isTablet ? [-17, -15, -10] : [-15,-10,0],
      targetScale: isSmall ? 1.5 : isMobile ? 1.6 : isTablet ? 2 : 1.7,       

      mazePosition: isSmall? [0, -4.5, 0] : isMobile ? [0, -5.5, 0] : [0, -8, 0],
      mazeScale: isSmall ? 1 : isMobile ? 1.6: isTablet ? 1.7 : 2.0,         

    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Undergraduate Researcher',
      pos: 'Federal University of Minas Gerais',
      duration: '2023 - 2024',
      title: "Designed and implemented Q-Learning agents using Python and reinforcement learning libraries, leveraging the Bellman Equation to optimize decision-making in dynamic gaming simulations. This resulted in significant improvements in decision accuracy and efficiency, advancing the capabilities of intelligent systems in complex simulated environments.",
      icon: '/assets/mario.png',
      animation: 'victory',
    },
    {
      id: 2,
      name: 'Undergraduate Researcher',
      pos: 'Federal University of Minas Gerais  ',
      duration: '2022 - 2023',
      title: "Assisted in structuring and optimizing large datasets for a team of 20 researchers and contributed to the development of a medical ontology to streamline research progress tracking and standardize data use. This work enhanced international collaboration, resolved data ambiguities, and improved communication among research teams, supporting health research advancements.",
      icon: '/assets/healthy.png',
      animation: 'salute',
    }
  ];