import { useState, useEffect } from 'react';
import { Github, Youtube, ExternalLink, ChevronDown, Moon, Sun, FileText, Mail, Linkedin, ArrowRight, MapPin, Briefcase, Trophy, Users, Mic, Award, Zap, Code, Menu, X } from 'lucide-react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [activeHackathonFilter, setActiveHackathonFilter] = useState('all');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const hackathons = [
    {
      title: "Spindra",
      category: "ai",
      featured: true,
      achievements: [
        "AI-Powered Tennis Training App",
        "Real-time pose estimation with Apple Vision",
        "AR Tennis Experience with 3D models",
        "ElevenLabs AI voice coaching integration"
      ],
      description: "Revolutionary iOS tennis training app combining computer vision, AR, and AI voice coaching. Features real-time swing analysis, biomechanical feedback, and immersive AR tennis environment.",
      link: null,
      video: "https://youtu.be/A4HixCZWekA"
    },
    {
      title: "Zero-G",
      category: "ai",
      featured: true,
      achievements: [
        "ElevenLabs Grant Recipient",
        "AI-powered space fitness gamification",
        "Real-time form detection with Apple Vision",
        "Immersive AI voice coaching"
      ],
      description: "Transforms workouts into space missions with AI coach, camera vision for rep counting, daily AI-generated missions, and multiplayer challenges. Built with Swift, ElevenLabs voice AI, and Apple Vision models.",
      link: "https://zero-g.app",
      video: null
    },
    {
      title: "Straighty Web",
      category: "ai",
      featured: true,
      achievements: [
        "hackathon.dev 2025 Winner - World's Largest Hackathon",
        "Selected among 60 finalists from 10,000+ projects",
        "Global competition victory"
      ],
      description: "Web version of the AI-powered habit tracking app that won the world's largest hackathon",
      link: "https://devpost.com/software/straighty",
      video: null
    },
    {
      title: "Straighty",
      category: "ai",
      featured: true,
      achievements: [
        "HackYeah 2024 Winner - Wellness & Fitness",
        "Product Hunt - Fitness Product of the Week #1",
        "Top Free Fitness App on Mac App Store",
        "Hundreds of Active Users",
        "Green light for AccelStart 2025 program"
      ],
      description: "AI-powered habit tracking app with remarkable success across multiple platforms",
      link: "https://straighty.app",
      video: null
    },
    {
      title: "FretFlinger",
      category: "ai",
      featured: true,
      achievements: [
        "2nd Place at TechEurope Berlin Hackathon 2025"
      ],
      description: "Real-time AI music generation tool using tone.js, OpenAI API, and ElevenLabs. Helps musicians collaborate and create with AI assistance",
      link: null,
      video: "https://youtu.be/LUCaTjnEdeI"
    },
    {
      title: "FitBet / QuantumFit / Gradatrim",
      category: "ai",
      featured: true,
      achievements: [
        "1st place QuantumGains at LabLab.ai",
        "1st place FitBet at DegenHack 2024",
        "Green light for AlephZero grant program",
        "PL.Kombinator top 6 finalist"
      ],
      description: "Personal AI Trainer App with real-time exercise analysis and voice agents",
      link: "https://alephzero.org/blog/degen-hack-2024-winners/",
      video: "https://www.youtube.com/watch?v=c3gVLQjHQXQ"
    },
    {
      title: "YogiCorgi / LazyDog",
      category: "robotics",
      featured: true,
      achievements: [
        "1st place at ING Experiment Days",
        "Viral video series with 24k+ views",
        "Recognized by Waveshare Wavego team"
      ],
      description: "Autonomous robot dog with computer vision for workout assistance",
      link: null,
      video: "https://youtu.be/h1H0Wt9AboA"
    },
    {
      title: "zkVote",
      category: "blockchain",
      achievements: [
        "HackOnChain 2022 Berlin Winner",
        "Accelerated by AlephZero to syncra.xyz startup"
      ],
      description: "Zero-knowledge voting system turned into a startup",
      link: "https://devpost.com/software/zkvote",
      video: null
    },
  {
    title: "Shielder.js",
    category: "blockchain",
    achievements: [
      "HackOnChain 2023 Winner"
    ],
    description: "Zero-knowledge proof generation in browser using WASM and Rust",
    link: null,
    video: "https://youtu.be/_3rMxH5q0pQ"
  },
  {
    title: "NonFungiblePrints",
    category: "blockchain",
    achievements: [
      "ETH Warsaw 2022 Winner"
    ],
    description: "3D printed key-rings with NFC chips for authentication",
    link: "https://devpost.com/software/non-fungible-prints",
    video: "https://youtu.be/bC4lFjUqTyU"
  },
  {
    title: "Rally 3.0",
    category: "blockchain",
    achievements: ["ETHGlobal Hackathon Winner"],
    description: "Phaser.js 2D rally game with interactive in-game banner ads",
    link: "https://ethglobal.com/showcase/rally3-0-htd4b",
    video: null
  },
  {
    title: "DAO Found",
    category: "blockchain",
    achievements: ["ETHGlobal Hackathon Winner"],
    description: "Decentralized autonomous organization for charities, that support real-time stream of donations",
    link: "https://ethglobal.com/showcase/daofound-vrj65",
    video: null
  },
  {
    title: "F3Bridge",
    category: "blockchain",
    achievements: ["ETHGlobal Hackathon Winner"],
    description: "Platform for seamless cross-social media profile linking",
    link: "https://ethglobal.com/showcase/f3bridge-r4bc9",
    video: null
  },
  {
    title: "Wolon 3.0",
    category: "blockchain",
    achievements: ["ETHGlobal Hackathon Winner"],
    description: "Next-generation volunteer coordination platform",
    link: "https://ethglobal.com/showcase/wolon-3-0-mfsx8",
    video: null
  },
  {
    title: "Quantum Gains",
    category: "ai",
    achievements: ["1st place at LabLab.ai Multimodal Hackathon"],
    description: "AI-powered fitness optimization platform",
    link: "https://lablab.ai/event/multimodal-hackathon/quantumgainforge/quantumgains",
    video: null
  },
  {
    title: "QuantumFit",
    category: "ai",
    achievements: ["1st place at Gemini AI Hackathon"],
    description: "Personal fitness assistant powered by Gemini AI",
    link: "https://lablab.ai/event/gemini-ai-hackathon/quantumfit-labs/quantumfit",
    video: null
  }
  ];

  const speakingEngagements = [
    {
      title: "Zero Knowledge Proofs",
      event: "Node.js Warsaw",
      type: "talk",
      link: "https://www.youtube.com/watch?v=AoG1wzCibJQ",
      featured: true
    },
    {
      title: "ZK Tutorial Featured at RiscZero",
      event: "RiscZero",
      type: "tutorial",
      link: "https://youtu.be/mQQePxfE1sE",
      featured: true
    },
    {
      title: "Contribution to RiscZero Docs",
      event: "Open Source",
      type: "contribution",
      link: "https://x.com/RiscZero/status/1664270670203854850",
      featured: true
    },
    {
      title: "GitProve Social Coding Edition",
      event: "Node.js Warsaw",
      type: "organizer",
      link: "https://www.meetup.com/node-js-warsaw/events/296993184/",
      featured: true,
      note: "Organized meetup with 40+ participants at Okta Offices Warsaw (2023)"
    },
    {
      title: "PitchMeBaby Winner",
      event: "PitchMeBaby",
      type: "pitch",
      link: null,
      featured: true,
      note: "Won December 2024 - Same day as Straighty Product Hunt success"
    }
  ];

  const projects = [
    {
      title: "Spindra",
      description: "AI-powered tennis training app with real-time pose estimation, AR tennis experience, and ElevenLabs voice coaching. Features swing analysis, challenge system, and leaderboards.",
      type: "mobile",
      featured: true,
      link: "https://youtu.be/A4HixCZWekA",
      language: "Swift",
    },
    {
      title: "Zero-G",
      description: "Space-themed fitness app with AI voice coach, camera-based rep counting, and daily AI-generated missions. Received ElevenLabs grant for immersive voice technology.",
      type: "mobile",
      featured: true,
      link: "https://zero-g.app",
      language: "Swift",
    },
    {
      title: "Straighty",
      description: "Professional habit tracking app that helps users build consistent routines. Features clean UI, analytics, and motivational streaks system.",
      type: "AI/ML",
      featured: true,
      link: "https://straighty.app",
      language: "Swift",
    },
    {
      title: "Senior Cactus AI",
      description: "Interactive robot cactus with personality using Raspberry Pi Pico, React Native, Bluetooth, and OpenAI's Realtime API for voice-controlled interactions.",
      type: "robotics",
      featured: true,
      forks: 1,
      language: "TypeScript/Python",
      github: "https://github.com/LachPawel/SenorCactus.AI"
    },
    {
      title: "LazyDog AI Robot",
      description: "Custom WAVEGO quadruped robot enhanced with AI capabilities. Featured in multiple viral YouTube videos demonstrating robotics and AI integration.",
      type: "robotics",
      stars: 1,
      forks: 1,
      featured: true,
      link: "https://github.com/LachPawel/lazydog",
      language: "Python",
      github: "https://github.com/LachPawel/lazydog"
    },
    {
      title: "Gradatrim",
      description: "Innovative iOS fitness app combining AI-powered coaching with real-time form analysis for personalized workout guidance.",
      type: "mobile",
      featured: true,
      language: "Swift",
      github: "https://github.com/The-Sloths/Gradatrim"
    },
    {
      title: "BUN-HTMX-Full-Stack-Template",
      description: "Production-ready full stack template combining HTMX, Server Side Components, SQLite, and Bun runtime. Used by developers worldwide.",
      type: "backend",
      stars: 10,
      forks: 3,
      language: "TypeScript",
      github: "https://github.com/LachPawel/BUN-HTMX-Full-Stack-App-Template"
    },
    {
      title: "NEM-API",
      description: "Boilerplate code for REST API that can be implemented in various projects. Features JWT authentication and comprehensive testing.",
      type: "backend",
      stars: 1,
      language: "JavaScript",
      github: "https://github.com/LachPawel/NEM-API"
    },
    {
      title: "Dziknik",
      description: "Web application for fitness enthusiasts to create, share, and follow training plans. Perfect for beginners and experienced athletes.",
      type: "backend",
      stars: 1,
      forks: 1,
      language: "TypeScript",
      github: "https://github.com/LachPawel/Dziknik"
    },
    {
      title: "GitProve",
      description: "Collaborative hub where IT enthusiasts build, showcase, and evolve. Community-driven projects for amplifying tech journeys.",
      type: "community",
      stars: 2,
      forks: 1,
      language: "JavaScript",
      github: "https://github.com/ARPLearn/Git-Prove"
    },
    {
      title: "QuantumFit API",
      description: "Node.js/TypeScript backend with Python microservices implementing TruLens-powered LLM prompt evaluations for AI-driven fitness.",
      type: "AI/ML",
      stars: 1,
      language: "Python/TypeScript",
      github: "https://github.com/LachPawel/QuantumFit-Gemini-Vertex"
    },
    {
      title: "QuantumFit Mobile",
      description: "Revolutionary React Native fitness app using AI to help users physically become better versions of themselves.",
      type: "mobile",
      stars: 1,
      language: "TypeScript - React Native",
      github: "https://github.com/LachPawel/QuantumFit"
    },
    {
      title: "Smart Contracts Caller",
      description: "Backend tool for executing methods on Substrate-based Smart Contracts, powered by Polkadot.js.",
      type: "blockchain",
      stars: 1,
      language: "TypeScript",
      github: "https://github.com/LachPawel/Substrate-Polkadot-Smart-Contracts-Caller"
    },
    {
      title: "RISC Zero Examples",
      description: "Zero-knowledge proofs based on RISC Zero with multiple example implementations across different branches.",
      type: "blockchain",
      forks: 1,
      language: "Rust",
      github: "https://github.com/LachPawel/RISC-Zero-Prover-Verifier"
    },
    {
      title: "Arduino RC Car",
      description: "DIY remote-controlled car built with Arduino. Complete tutorial with 15k+ views on dev.to helping makers build their own.",
      type: "robotics",
      language: "C++/Java",
      github: "https://dev.to/pawel/how-to-build-your-own-rc-car-with-arduino-arducar-12ei"
    }
  ];

  const content = [
    {
      title: "It's ALIVE! I Gave My Robot Dog an AI Brain",
      platform: "YouTube",
      type: "video",
      link: "https://www.youtube.com/watch?v=2VGDe0nQBYM",
      views: "24k+"
    },
    {
      title: "How to Build your own RC Car with Arduino - ArduCar",
      platform: "dev.to",
      type: "article",
      link: "https://dev.to/pawel/how-to-build-your-own-rc-car-with-arduino-arducar-12ei",
      reads: "15k+"
    },
    {
      title: "How to Secure your API's Routes with JWT Token",
      platform: "dev.to",
      type: "article",
      link: "https://dev.to/pawel/how-to-secure-your-api-s-routes-with-jwt-token-4bd1",
      reads: "4k+"
    },
    {
      title: "From Scratch to Working App - Building a React Library App",
      platform: "dev.to",
      type: "article",
      link: "https://dev.to/pawel/from-scratch-to-working-app-building-a-react-library-app-2pkb",
      reads: "1.7k+"
    },
    {
      title: "LazyDog: The WAVEGO Robot That's Anything But Lazy!",
      platform: "YouTube",
      type: "video",
      link: "https://www.youtube.com/watch?v=8YEK-4KBU5o",
      views: "1.5k+"
    },
    {
      title: "How to Create Prover and Verifier App on zkVM",
      platform: "YouTube",
      type: "video",
      link: "https://www.youtube.com/watch?v=mQQePxfE1sE",
      views: "500+"
    }
  ];

  const techStack = {
    frontend: ["JavaScript", "TypeScript", "React", "Swift", "Kotlin"],
    backend: ["Node.js", "Python", "Rust"],
    specialties: ["Web Development", "Computer Vision", "AI/ML", "Robotics"]
  };

  const filterProjects = () => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.type === activeFilter);
  };

  const filterHackathons = () => {
    if (activeHackathonFilter === 'all') return hackathons;
    if (activeHackathonFilter === 'featured') return hackathons.filter(h => h.featured);
    return hackathons.filter(h => h.category === activeHackathonFilter);
  };

  const isDark = theme === 'dark';

  const typeColors = {
    product: isDark ? 'text-gray-500' : 'text-gray-600',
    robotics: isDark ? 'text-gray-500' : 'text-gray-600',
    backend: isDark ? 'text-gray-500' : 'text-gray-600',
    template: isDark ? 'text-gray-500' : 'text-gray-600',
    hardware: isDark ? 'text-gray-500' : 'text-gray-600',
    security: isDark ? 'text-gray-500' : 'text-gray-600',
    wellness: isDark ? 'text-gray-500' : 'text-gray-600',
    blockchain: isDark ? 'text-gray-500' : 'text-gray-600',
    ai: isDark ? 'text-gray-500' : 'text-gray-600',
    fitness: isDark ? 'text-gray-500' : 'text-gray-600',
    community: isDark ? 'text-gray-500' : 'text-gray-600',
    other: isDark ? 'text-gray-500' : 'text-gray-600',
    mobile: isDark ? 'text-gray-500' : 'text-gray-600',
    'AI/ML': isDark ? 'text-gray-500' : 'text-gray-600'
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      isDark 
        ? 'text-white' 
        : 'bg-white text-black'
    }`} style={isDark ? { backgroundColor: '#1e1e1e' } : {}}>
        {/* Scroll Progress Bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
          style={{ backgroundColor: '#BADA55', scaleX: scrollYProgress }}
        />
        
        {/* Navigation */}
        <motion.nav 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          isScrolled 
            ? `backdrop-blur-sm border-b py-3 sm:py-4` 
            : 'bg-transparent py-4 sm:py-6'
        }`}
        style={isScrolled ? { 
          backgroundColor: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
          borderBottom: isDark ? '1px solid #333' : '1px solid #e0e0e0'
        } : {}}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl font-bold">ARPL</span>
              <span className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} hidden sm:inline`}>/ Pawel Lach</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <a href="https://github.com/LachPawel" target="_blank" rel="noopener noreferrer" 
                 className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <Github size={20} />
              </a>
              <a href="https://youtube.com/@arplearn" target="_blank" rel="noopener noreferrer"
                 className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <Youtube size={20} />
              </a>
              <a href="https://www.linkedin.com/in/pawelach/" target="_blank" rel="noopener noreferrer"
                 className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                <Linkedin size={20} />
              </a>
              
              <button
                onClick={toggleTheme}
                className={`p-2 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <a href="mailto:pawel@arpl.dev" 
                 className="px-3 lg:px-4 py-2 text-sm font-medium transition-all"
                 style={{
                   border: `1px solid ${isDark ? '#BADA55' : '#BADA55'}`,
                   color: isDark ? '#BADA55' : '#BADA55'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.backgroundColor = '#BADA55';
                   e.currentTarget.style.color = isDark ? '#1e1e1e' : '#ffffff';
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.backgroundColor = 'transparent';
                   e.currentTarget.style.color = '#BADA55';
                 }}>
                Contact
              </a>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className={`p-2 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden backdrop-blur-sm border-t"
              style={{ 
                backgroundColor: isDark ? 'rgba(30, 30, 30, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                borderTop: isDark ? '1px solid #333' : '1px solid #e0e0e0'
              }}>
              <div className="px-4 py-4 space-y-4">
                <div className="flex items-center justify-center space-x-6">
                  <a href="https://github.com/LachPawel" target="_blank" rel="noopener noreferrer" 
                     className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                    <Github size={20} />
                  </a>
                  <a href="https://youtube.com/@arplearn" target="_blank" rel="noopener noreferrer"
                     className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                    <Youtube size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/pawelach/" target="_blank" rel="noopener noreferrer"
                     className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                    <Linkedin size={20} />
                  </a>
                </div>
                <div className="text-center">
                  <a href="mailto:pawel@arpl.dev" 
                     className="inline-block px-4 py-2 text-sm font-medium transition-all"
                     style={{
                       border: '1px solid #BADA55',
                       color: '#BADA55'
                     }}
                     onMouseEnter={(e) => {
                       e.currentTarget.style.backgroundColor = '#BADA55';
                       e.currentTarget.style.color = isDark ? '#1e1e1e' : '#ffffff';
                     }}
                     onMouseLeave={(e) => {
                       e.currentTarget.style.backgroundColor = 'transparent';
                       e.currentTarget.style.color = '#BADA55';
                     }}>
                    Contact
                  </a>
                </div>
              </div>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.nav>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-4 sm:px-6 pt-16 sm:pt-20 relative">
          <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col justify-center">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
              >
                <div className="space-y-3 sm:space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      Pawel Lach
                    </h1>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className={`text-lg sm:text-xl ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
                  >
                    Software Engineer | Educator | Content Creator
                  </motion.p>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className={`${isDark ? 'text-gray-500' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}
                >
                  Software Engineer, Educator, Content Creator, and former University Lecturer. 
                  Coding and programming enthusiast with a primary focus on Web Development and 
                  technologies that hold significant potential for positive impact. 15+ hackathon 
                  victories including the world's largest hackathon (hackathon.dev).
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className={`flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}
                >
                  <span className="flex items-center gap-2">
                    <MapPin size={14} />
                    Warsaw, Poland
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase size={14} />
                    Senior Software Engineer @ ING
                  </span>
                  <span className="flex items-center gap-2">
                    <Trophy size={14} />
                    15+ Hackathon Winner
                  </span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4"
                >
                  <motion.a 
                    href="#hackathons"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-6 py-3 text-center font-medium transition-colors text-sm sm:text-base"
                    style={{
                      backgroundColor: '#BADA55',
                      color: isDark ? '#1e1e1e' : '#ffffff'
                    }}
                  >
                    View Achievements
                  </motion.a>
                  <motion.a 
                    href="https://github.com/LachPawel" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-4 sm:px-6 py-3 text-center font-medium transition-colors text-sm sm:text-base"
                    style={{ 
                      backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5', 
                      borderColor: '#BADA55', 
                      color: '#BADA55',
                      border: '1px solid #BADA55'
                    }}
                  >
                    GitHub Profile
                  </motion.a>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="lg:pl-12 mt-8 lg:mt-0"
              >
                <div className="space-y-6 sm:space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase tracking-wider mb-3 sm:mb-4`}>
                      Philosophy
                    </h3>
                    <blockquote className={`text-base sm:text-lg italic ${isDark ? 'text-gray-400' : 'text-gray-700'} border-l-4 pl-4 mb-4`}
                    style={{ borderColor: '#BADA55' }}>
                      "Act, Reflect, Persist, Learn"
                    </blockquote>
                    <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-sm sm:text-base`}>
                      Education is the foundational step to solving nearly any conceivable problem. 
                      Learning is my greatest passion, as it stands as one of the most gratifying aspects of life.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase tracking-wider mb-3 sm:mb-4`}>
                      Tech Stack
                    </h3>
                    <div className="space-y-2">
                      <div className="flex flex-wrap gap-2">
                        {techStack.frontend.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 text-xs rounded"
                            style={{ 
                              backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5', 
                              color: '#BADA55', 
                              border: isDark ? '1px solid #333' : '1px solid #e0e0e0'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {techStack.backend.map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 text-xs rounded"
                            style={{ 
                              backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5', 
                              color: '#BADA55', 
                              border: isDark ? '1px solid #333' : '1px solid #e0e0e0'
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <h3 className={`text-xs sm:text-sm font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase tracking-wider mb-3 sm:mb-4`}>
                      Quick Stats
                    </h3>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex flex-col">
                        <span className={isDark ? 'text-gray-500' : 'text-gray-600'}>Hackathon Victories</span>
                        <span className="font-semibold">15+</span>
                      </div>
                      <div className="flex flex-col">
                        <span className={isDark ? 'text-gray-500' : 'text-gray-600'}>Content Views</span>
                        <span className="font-semibold">100k+</span>
                      </div>
                      <div className="flex flex-col">
                        <span className={isDark ? 'text-gray-500' : 'text-gray-600'}>GitHub Contributions</span>
                        <span className="font-semibold">1000+</span>
                      </div>
                      <div className="flex flex-col">
                        <span className={isDark ? 'text-gray-500' : 'text-gray-600'}>Community Impact</span>
                        <span className="font-semibold">1000+ devs</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className={`mt-12 sm:mt-16 mb-8 sm:mb-12 text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} text-center px-4`}
            >
              Beyond professional pursuits: Amateur guitarist • Motorcyclist • Rally enthusiast
            </motion.p>
          </div>
          
          <motion.button
            onClick={() => document.getElementById('hackathons')?.scrollIntoView({ behavior: 'smooth' })}
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className={`mx-auto mb-4 sm:mb-24 cursor-pointer ${isDark ? 'text-gray-600 hover:text-white' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
            aria-label="Scroll to next section"
          >
            <ChevronDown size={20} className="sm:hidden" />
            <ChevronDown size={24} className="hidden sm:block" />
          </motion.button>
        </section>

        {/* Hackathon Victories Section */}
        <section id="hackathons" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5' }}>
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12"
            >
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center sm:justify-start gap-3">
                  <Trophy size={24} className={`${isDark ? 'text-gray-500' : 'text-gray-600'} sm:w-8 sm:h-8`} />
                  Hackathon Victories
                </h2>
                <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-sm sm:text-base`}>
                  15+ competition wins including the world's largest hackathon (10,000+ projects)
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {['all', 'featured', 'ai', 'robotics', 'blockchain'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveHackathonFilter(filter)}
                    className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all"
                    style={activeHackathonFilter === filter ? {
                      backgroundColor: '#BADA55',
                      color: isDark ? '#1e1e1e' : '#ffffff'
                    } : {
                      color: isDark ? '#888' : '#666'
                    }}
                    onMouseEnter={(e) => {
                      if (activeHackathonFilter !== filter) {
                        e.currentTarget.style.color = isDark ? '#ffffff' : '#000000';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeHackathonFilter !== filter) {
                        e.currentTarget.style.color = isDark ? '#888' : '#666';
                      }
                    }}
                  >
                    {filter === "ai" ? "AI/ML" : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filterHackathons().map((hackathon, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="border transition-colors"
                  style={{ 
                    backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                    borderColor: '#333'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = '#BADA55'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}
                >
                  <div className="p-4 sm:p-6">
                    {hackathon.featured && (
                      <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#BADA55' }}>
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base sm:text-lg font-semibold">
                        {hackathon.title}
                      </h3>
                      {(hackathon.link || hackathon.video) && (
                        <a href={hackathon.link || hackathon.video || ''} target="_blank" rel="noopener noreferrer" 
                           className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-700'} transition-colors`}>
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                    
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'} mb-4`}>
                      {hackathon.description}
                    </p>
                    
                    <div className="space-y-2">
                      {hackathon.achievements.map((achievement, idx) => (
                        <div key={idx} className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-700'} flex items-start gap-2`}>
                          <span className="mt-0.5">•</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 flex items-center gap-3">
                      <span className={`text-xs ${typeColors[hackathon.category as keyof typeof typeColors]}`}>
                        {hackathon.category}
                      </span>
                      {hackathon.video && (
                        <a href={hackathon.video} target="_blank" rel="noopener noreferrer" 
                           className={`text-xs ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-700'} flex items-center gap-1`}>
                          <Youtube size={12} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Speaking & Community Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-12 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2 flex items-center justify-center sm:justify-start gap-3">
                <Mic className={`sm:w-8 sm:h-8 ${isDark ? 'text-gray-500' : 'text-gray-600'}`} size={24} />
                Speaking & Community
              </h2>
              <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-sm sm:text-base`}>
                Active speaker, organizer, and supporter of the Warsaw tech community
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {speakingEngagements.map((engagement, index) => (
                <div key={index} className="border p-4 sm:p-6 transition-colors"
                style={{ 
                  backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                  borderColor: '#333' 
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#BADA55'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase tracking-wider`}>
                      {engagement.type}
                    </span>
                    {engagement.type === 'talk' && <Mic size={14} className={isDark ? 'text-gray-500' : 'text-gray-500'} />}
                    {engagement.type === 'organizer' && <Users size={14} className={isDark ? 'text-gray-500' : 'text-gray-500'} />}
                    {engagement.type === 'pitch' && <Award size={14} className={isDark ? 'text-gray-500' : 'text-gray-500'} />}
                    {engagement.type === 'tutorial' && <Code size={14} className={isDark ? 'text-gray-500' : 'text-gray-500'} />}
                    {engagement.type === 'contribution' && <Github size={14} className={isDark ? 'text-gray-500' : 'text-gray-500'} />}
                  </div>
                  
                  <h4 className="font-medium mb-2 text-sm sm:text-base">{engagement.title}</h4>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'} mb-2`}>
                    {engagement.event}
                  </p>
                  
                  {engagement.note && (
                    <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'} mb-3`}>
                      {engagement.note}
                    </p>
                  )}
                  
                  {engagement.link && (
                    <a href={engagement.link} target="_blank" rel="noopener noreferrer" 
                       className={`text-xs sm:text-sm ${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} flex items-center gap-1`}>
                      View
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="p-4 sm:p-6" style={{ backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5' }}>
              <h3 className="font-semibold mb-4 text-sm sm:text-base">Community Involvement</h3>
              <ul className={`space-y-2 ${isDark ? 'text-gray-500' : 'text-gray-600'} text-xs sm:text-sm`}>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Active supporter of Node.js Warsaw & Founder Running Club Warsaw</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Regular speaker at Warsaw.js, Node.js Warsaw, PitchMeBaby, and StartupGrind Warsaw</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>PitchMeBaby startup pitch contest winner (December 2024)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-0.5">•</span>
                  <span>Former University Lecturer</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5' }}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="text-center sm:text-left">
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">Projects</h2>
                <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-sm sm:text-base`}>
                  From Web Apps, Mobile, Robotics, AI/ML to Computer vision
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                {['all', 'mobile', 'AI/ML', 'robotics', 'backend', 'blockchain'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className="px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium transition-all"
                    style={activeFilter === filter ? {
                      backgroundColor: '#BADA55',
                      color: isDark ? '#1e1e1e' : '#ffffff'
                    } : {
                      color: isDark ? '#888' : '#666'
                    }}
                    onMouseEnter={(e) => {
                      if (activeFilter !== filter) {
                        e.currentTarget.style.color = isDark ? '#ffffff' : '#000000';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (activeFilter !== filter) {
                        e.currentTarget.style.color = isDark ? '#888' : '#666';
                      }
                    }}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filterProjects().map((project, index) => (
                <div key={index} className="border transition-colors"
                style={{ 
                  backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                  borderColor: '#333'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = '#BADA55'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}>
                  <div className="p-4 sm:p-6">
                    {project.featured && (
                      <div className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#BADA55' }}>
                        Featured
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-base sm:text-lg font-semibold">
                        {project.title}
                      </h3>
                      <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" 
                         className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-700'} transition-colors`}>
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'} mb-4 line-clamp-3`}>
                      {project.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <div className="flex items-center gap-3">
                        <span className={typeColors[project.type as keyof typeof typeColors]}>
                          {project.type}
                        </span>
                        <span className={`${isDark ? 'text-gray-500' : 'text-gray-500'} hidden sm:inline`}>
                          {project.language}
                        </span>
                      </div>
                      
                      <div className={`flex items-center gap-3 ${isDark ? 'text-gray-600' : 'text-gray-500'}`}>
                        {project.stars && project.stars > 0 && (
                          <span className="flex items-center gap-1">
                            • {project.stars}
                          </span>
                        )}
                        {project.forks && (
                          <span className="flex items-center gap-1">
                            • {project.forks}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-12 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Content & Education</h2>
              <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-sm sm:text-base`}>
                100k+ combined views across dev.to articles and YouTube videos
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {content.map((item, index) => (
                <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" 
                   className="group border p-4 sm:p-6 transition-colors"
                   style={{ 
                     backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                     borderColor: '#333'
                   }}
                   onMouseEnter={(e) => e.currentTarget.style.borderColor = '#BADA55'}
                   onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-semibold ${isDark ? 'text-gray-500' : 'text-gray-500'} uppercase tracking-wider`}>
                      {item.platform}
                    </span>
                    {item.type === 'article' ? (
                      <FileText size={14} className={isDark ? 'text-gray-500' : 'text-gray-500'} />
                    ) : (
                      <Youtube size={14} className={isDark ? 'text-gray-500' : 'text-gray-500'} />
                    )}
                  </div>
                  <h4 className={`font-medium mb-2 ${isDark ? 'group-hover:text-white' : 'group-hover:text-black'} transition-colors line-clamp-2 text-sm sm:text-base`}>
                    {item.title}
                  </h4>
                  <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    {item.type === 'article' ? `${item.reads} reads` : `${item.views} views`}
                  </p>
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a href="https://youtube.com/@arplearn" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
                 style={{ backgroundColor: '#BADA55', color: isDark ? '#1e1e1e' : '#ffffff' }}>
                YouTube Channel
                <ArrowRight size={14} />
              </a>
              <a href="https://dev.to/pawel" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-medium transition-colors text-sm sm:text-base"
                 style={{ 
                   border: '1px solid #BADA55',
                   color: '#BADA55',
                   backgroundColor: 'transparent'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#1f1f1f' : '#f5f5f5'}
                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                dev.to Articles
                <ArrowRight size={14} />
              </a>
              <a href="https://straighty.app" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-medium transition-colors text-sm sm:text-base"
                 style={{ 
                   border: '1px solid #BADA55',
                   color: '#BADA55',
                   backgroundColor: 'transparent'
                 }}
                 onMouseEnter={(e) => e.currentTarget.style.backgroundColor = isDark ? '#1f1f1f' : '#f5f5f5'}
                 onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                Try Straighty.app
                <ArrowRight size={14} />
              </a>
              <a href="https://zero-g.app" target="_blank" rel="noopener noreferrer" 
                 className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3 font-medium hover:opacity-90 transition-opacity text-sm sm:text-base"
                 style={{ backgroundColor: '#BADA55', color: isDark ? '#1e1e1e' : '#ffffff' }}>
                Try Zero-G.app
                <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </section>

        {/* Career Highlights Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: isDark ? '#1f1f1f' : '#f5f5f5' }}>
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 sm:mb-12 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold mb-2">Career Highlights</h2>
              <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} text-sm sm:text-base`}>
                Working at the intersection of Data, AI, and Web Development
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
              <div className="border p-4 sm:p-6" 
              style={{ 
                backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                borderColor: '#333'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#BADA55'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Briefcase className={isDark ? 'text-gray-500' : 'text-gray-600'} size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold">ING</h3>
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Senior Software Engineer
                    </p>
                    <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                      Poland • Hybrid
                    </p>
                  </div>
                </div>
                <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} mb-3 text-sm`}>
                  Building high-traffic React applications serving 1000+ active users with modern frontend architecture and AI integration.
                </p>
                <ul className={`text-xs sm:text-sm ${isDark ? 'text-gray-600' : 'text-gray-500'} space-y-1`}>
                  <li>• Full-stack development with Spring Boot & PostgreSQL</li>
                  <li>• AI integration with Gemini & Llama models</li>
                  <li>• Cloud infrastructure on Azure & GCP</li>
                  <li>• Data visualization with Power BI</li>
                  <li>• Modern React with TanStack Query & ShadCN</li>
                </ul>
                <div className={`mt-3 pt-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    Tech: React, TypeScript, Kotlin, Spring Boot, PostgreSQL, Azure, GCP, Docker
                  </p>
                </div>
              </div>

              <div className="border p-4 sm:p-6"
              style={{ 
                backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
                borderColor: '#333'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#BADA55'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#333'}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-3 ${isDark ? 'bg-white/10' : 'bg-black/10'}`}>
                    <Zap className={isDark ? 'text-gray-500' : 'text-gray-600'} size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold">MicroStrategy (Strategy)</h3>
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      Software Engineer
                    </p>
                    <p className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>
                    Poland • Hybrid
                    </p>
                  </div>
                </div>
                <p className={`${isDark ? 'text-gray-500' : 'text-gray-600'} mb-3 text-sm`}>
                  Key contributor to MicroStrategy Lightning Platform under Michael Saylor's team, building Bitcoin Lightning Network integrations.
                </p>
                <ul className={`text-xs sm:text-sm ${isDark ? 'text-gray-600' : 'text-gray-500'} space-y-1`}>
                  <li>• Built core React components for MSTR products</li>
                  <li>• Lightning Network platform development</li>
                  <li>• Designed personalized integration solutions</li>
                  <li>• Established CI/CD automation pipelines</li>
                  <li>• UI/UX design & technical architecture</li>
                </ul>
                <div className={`mt-3 pt-3 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <p className={`text-xs ${isDark ? 'text-gray-600' : 'text-gray-400'}`}>
                    Tech: React, TypeScript, Bitcoin Lightning, AWS, MongoDB, GraphQL, MUI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={`py-8 sm:py-12 px-4 sm:px-6 border-t ${isDark ? 'border-white/20' : 'border-black/20'}`}>
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col gap-6 sm:gap-0 sm:flex-row justify-between items-center">
              <div className="flex items-center gap-4 sm:gap-6">
                <a href="https://github.com/LachPawel" target="_blank" rel="noopener noreferrer" 
                   className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <Github size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="https://youtube.com/@arplearn" target="_blank" rel="noopener noreferrer" 
                   className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <Youtube size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="https://www.linkedin.com/in/pawelach/" target="_blank" rel="noopener noreferrer" 
                   className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <Linkedin size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="https://dev.to/pawel" target="_blank" rel="noopener noreferrer" 
                   className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <FileText size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="mailto:pawel@arpl.dev" 
                   className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <Mail size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
              
              <p className={`text-xs sm:text-sm ${isDark ? 'text-gray-500' : 'text-gray-500'} text-center sm:text-right`}>
                © 2025 Pawel Lach - ARPL
              </p>
            </div>
          </div>
        </footer>
    </div>
  );
};

export default Portfolio;