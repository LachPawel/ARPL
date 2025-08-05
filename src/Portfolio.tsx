import { useState, useEffect } from 'react';
import { Github, Youtube, Trophy, Star, GitBranch, ExternalLink, ChevronDown, Code2, Zap, BookOpen, Sun, Moon, FileText } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const projects = [
    {
      title: "Straighty",
      description: "Professional habit tracking app that helps users build consistent routines. Features clean UI, analytics, and motivational streaks system.",
      type: "product",
      stars: 42,
      featured: true,
      link: "https://straighty.app",
      language: "TypeScript",
      github: "https://github.com/LachPawel/straighty"
    },
    {
      title: "LazyDog AI Robot",
      description: "Custom WAVEGO quadruped robot enhanced with AI capabilities. Featured in multiple viral YouTube videos demonstrating robotics and AI integration.",
      type: "robotics",
      stars: 15,
      featured: true,
      link: "https://www.youtube.com/watch?v=2VGDe0nQBYM",
      language: "Python",
      github: "https://github.com/LachPawel/lazydog-ai"
    },
    {
      title: "BUN-HTMX-Full-Stack-Template",
      description: "Production-ready full stack template combining HTMX, Server Side Components, SQLite, and Bun runtime. Used by developers worldwide.",
      type: "template",
      stars: 10,
      forks: 3,
      language: "TypeScript",
      github: "https://github.com/LachPawel/BUN-HTMX-Full-Stack-App-Template"
    },
    {
      title: "Arduino RC Car",
      description: "DIY remote-controlled car built with Arduino. Complete tutorial with 15k+ views on dev.to helping makers build their own.",
      type: "hardware",
      stars: 8,
      language: "C++",
      github: "https://github.com/LachPawel/arducar"
    },
    {
      title: "QuantumFit API",
      description: "RESTful API backend with microservices architecture for fitness applications. Includes real-time data processing and analytics.",
      type: "backend",
      stars: 1,
      language: "Python",
      github: "https://github.com/LachPawel/QuantumFit-Gemini-Vertex"
    },
    {
      title: "Zero Knowledge Examples",
      description: "Collection of cryptographic proof implementations and examples for educational purposes. Clear documentation and tutorials included.",
      type: "security",
      stars: 1,
      language: "Rust",
      github: "https://github.com/LachPawel/RISC-Zero-Prover-Verifier"
    }
  ];

  const achievements = [
    {
      title: "100k+ Total Views",
      description: "80k+ article reads and 25k+ video views across platforms",
      icon: "📈",
      type: "content"
    },
    {
      title: "AI Robot Goes Viral",
      description: "LazyDog robot with AI brain reaches 24k+ YouTube views",
      icon: "🤖",
      type: "video"
    },
    {
      title: "Straighty.app Launch",
      description: "Successfully launched habit tracking SaaS with growing user base",
      icon: "🚀",
      type: "product"
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
      reads: "15.2k"
    },
    {
      title: "How to Secure your API's Routes with JWT Token",
      platform: "dev.to",
      type: "article",
      link: "https://dev.to/pawel/how-to-secure-your-api-s-routes-with-jwt-token-4bd1",
      reads: "4k"
    },
    {
      title: "From Scratch to Working App - Building a React Library App",
      platform: "dev.to",
      type: "article",
      link: "https://dev.to/pawel/from-scratch-to-working-app-building-a-react-library-app-2pkb",
      reads: "1.7k"
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

  const filterProjects = () => {
    if (activeFilter === 'all') return projects;
    return projects.filter(p => p.type === activeFilter);
  };

  const isDark = theme === 'dark';

  const projectTypeColors = {
    product: isDark ? 'text-purple-400 border-purple-400' : 'text-purple-600 border-purple-600',
    robotics: isDark ? 'text-cyan-400 border-cyan-400' : 'text-cyan-600 border-cyan-600',
    backend: isDark ? 'text-blue-400 border-blue-400' : 'text-blue-600 border-blue-600',
    template: isDark ? 'text-green-400 border-green-400' : 'text-green-600 border-green-600',
    hardware: isDark ? 'text-orange-400 border-orange-400' : 'text-orange-600 border-orange-600',
    web: isDark ? 'text-yellow-400 border-yellow-400' : 'text-yellow-600 border-yellow-600',
    education: isDark ? 'text-pink-400 border-pink-400' : 'text-pink-600 border-pink-600',
    security: isDark ? 'text-red-400 border-red-400' : 'text-red-600 border-red-600'
  };

  const languageColors = {
    'Rust': 'bg-orange-600',
    'Python': 'bg-blue-500',
    'Swift': 'bg-orange-500',
    'TypeScript': 'bg-blue-600',
    'JavaScript': 'bg-yellow-500',
    'C++': 'bg-pink-600'
  };

  return (
    <div className={`min-h-screen ${isDark ? 'bg-black' : 'bg-gray-50'} ${isDark ? 'text-gray-100' : 'text-gray-900'} font-mono transition-all duration-500`}>
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? `${isDark ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-xl ${isDark ? 'border-b border-gray-800' : 'border-b border-gray-200'}` : 'bg-transparent'} ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>ARPL</div>
            <span className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>LachPawel</span>
          </div>
          
          <div className="flex items-center space-x-4 md:space-x-6">
            <a href="https://github.com/LachPawel" target="_blank" rel="noopener noreferrer" title="GitHub" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              <Github size={20} />
            </a>
            <a href="https://dev.to/pawel" target="_blank" rel="noopener noreferrer" title="dev.to Articles" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              <FileText size={20} />
            </a>
            <a href="https://youtube.com/@arplearn" target="_blank" rel="noopener noreferrer" title="YouTube Channel" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              <Youtube size={20} />
            </a>
            <a href="https://www.linkedin.com/in/pawelach/" target="_blank" rel="noopener noreferrer" title="LinkedIn" className={`${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors hidden sm:block`}>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg ${isDark ? 'bg-gray-900 border-gray-700 hover:border-gray-600 text-yellow-400' : 'bg-white border-gray-300 hover:border-gray-400 text-gray-700'} border transition-all duration-300`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a href="mailto:pawelkowalewsk@gmail.com" className={`px-4 py-2 border ${isDark ? 'border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white' : 'border-gray-300 hover:border-gray-400'} rounded-md text-sm transition-all duration-300`}>
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className={`inline-flex items-center space-x-2 text-sm ${isDark ? 'text-emerald-400' : 'text-emerald-600'} mb-4`}>
                <Code2 size={16} />
                <span>Available for collaboration</span>
              </div>
              
              <h1 className={`text-5xl lg:text-6xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Hi there I'm Pawel 👋
              </h1>
              
              <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-700'} leading-relaxed`}>
                Software Engineer, Educator, Content Creator, and robotics enthusiast. 
                Building everything from SaaS products to AI-powered robots.
              </p>
              
              <div className={`flex items-center space-x-4 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                <span className="flex items-center">
                  <Star size={16} className={`mr-1 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
                  100k+ content views
                </span>
                <span>•</span>
                <span>640+ contributions</span>
                <span>•</span>
                <span>🤖 Robotics creator</span>
              </div>

              <div className="flex space-x-4 pt-4">
                <a href="#projects" className={`px-6 py-3 ${isDark ? 'bg-emerald-600 hover:bg-emerald-700' : 'bg-emerald-600 hover:bg-emerald-700'} text-white rounded-md transition-all duration-300 transform hover:scale-105`}>
                  View Projects
                </a>
                <a href="https://github.com/LachPawel" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 border ${isDark ? 'border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-900' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100'} rounded-md transition-all duration-300`}>
                  GitHub Profile
                </a>
              </div>
            </div>
            
            <div className="flex-1 max-w-md">
              <div className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border rounded-lg p-6 space-y-4 ${isDark ? 'shadow-2xl shadow-black/50' : 'shadow-lg'}`}>
                <h3 className={`text-lg font-semibold flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  <Zap className={`mr-2 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} size={20} />
                  My Motto - "Act, Reflect, Persist, Learn"
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
                  Education is the foundational step to solving nearly any conceivable problem. 
                  Learning is my greatest passion, as it stands as one of the most gratifying aspects of life.
                </p>
                <div className="pt-2 space-y-2">
                  <div className="flex items-center text-sm">
                    <span className={`w-20 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Focus:</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Robotics, SaaS, Education</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className={`w-20 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Location:</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>Warsaw, Poland</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <span className={`w-20 ${isDark ? 'text-gray-500' : 'text-gray-500'}`}>Company:</span>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-700'}>ING</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
        </div>
      </section>

      {/* Achievements Section */}
      <section className={`py-24 px-6 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-12 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <Trophy className={`mr-3 ${isDark ? 'text-yellow-400' : 'text-yellow-500'}`} />
            Achievements & Recognition
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-gray-50 border-gray-200 hover:border-gray-300'} border rounded-lg p-6 transition-all duration-300 ${isDark ? 'hover:shadow-xl hover:shadow-black/30' : 'hover:shadow-lg'}`}>
                <div className="text-4xl mb-4">{achievement.icon}</div>
                <h3 className={`text-xl font-semibold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{achievement.title}</h3>
                <p className={isDark ? 'text-gray-400' : 'text-gray-600'}>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-24 px-6 ${isDark ? 'bg-black' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-4">
            <h2 className={`text-3xl font-bold flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
              <GitBranch className="mr-3" />
              Projects
            </h2>
            
            <div className="flex flex-wrap gap-2 justify-center">
              {['all', 'product', 'robotics', 'backend', 'template'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 text-sm rounded-full border transition-all duration-300 ${
                    activeFilter === filter 
                      ? isDark 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-blue-600 border-blue-600 text-white'
                      : isDark 
                        ? 'border-gray-700 text-gray-400 hover:border-gray-500 hover:text-white' 
                        : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filterProjects().map((project, index) => (
              <div key={index} className={`${isDark ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-white border-gray-200 hover:border-gray-300'} border rounded-lg p-6 transition-all duration-300 group ${isDark ? 'hover:shadow-xl hover:shadow-black/30' : 'hover:shadow-lg'} ${project.featured && filterProjects().filter(p => p.featured).length === 2 && index < 2 ? 'lg:col-span-1' : ''}`}>
                {project.featured && (
                  <div className={`inline-flex items-center px-2 py-1 text-xs rounded-full mb-3 ${isDark ? 'bg-emerald-900 text-emerald-400' : 'bg-emerald-100 text-emerald-700'}`}>
                    ✨ Featured Project
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <h3 className={`text-lg font-semibold ${isDark ? 'text-blue-400' : 'text-blue-600'} group-hover:underline`}>
                    {project.title}
                  </h3>
                  <a href={project.link || project.github} target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-500 hover:text-gray-800'}`}>
                    <ExternalLink size={16} />
                  </a>
                </div>
                
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4 line-clamp-3`}>
                  {project.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 text-sm">
                    <span className={`px-2 py-1 rounded-full border text-xs ${projectTypeColors[project.type as keyof typeof projectTypeColors]}`}>
                      {project.type}
                    </span>
                    <span className={`flex items-center ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                      <span className={`w-3 h-3 rounded-full ${languageColors[project.language as keyof typeof languageColors]} mr-1`}></span>
                      {project.language}
                    </span>
                  </div>
                  
                  <div className={`flex items-center space-x-3 text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                    {project.stars > 0 && (
                      <span className="flex items-center">
                        <Star size={14} className="mr-1" />
                        {project.stars}
                      </span>
                    )}
                    {project.forks && project.forks > 0 && (
                      <span className="flex items-center">
                        <GitBranch size={14} className="mr-1" />
                        {project.forks}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Creation Section */}
      <section className={`py-24 px-6 ${isDark ? 'bg-gray-950' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className={`text-3xl font-bold mb-4 flex items-center ${isDark ? 'text-white' : 'text-gray-900'}`}>
            <BookOpen className="mr-3" />
            Content & Education
          </h2>
          <p className={`text-sm ${isDark ? 'text-gray-500' : 'text-gray-600'} mb-12`}>100k+ combined views across dev.to articles and YouTube videos</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={`block ${isDark ? 'bg-gray-900 border-gray-800 hover:border-gray-700' : 'bg-gray-50 border-gray-200 hover:border-gray-300'} border rounded-lg p-4 transition-all duration-300 group ${isDark ? 'hover:shadow-lg hover:shadow-black/20' : 'hover:shadow-md'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.type === 'article' 
                      ? isDark ? 'bg-blue-900 text-blue-400' : 'bg-blue-100 text-blue-700'
                      : isDark ? 'bg-red-900 text-red-400' : 'bg-red-100 text-red-700'
                  }`}>
                    {item.platform}
                  </span>
                  {item.type === 'article' ? (
                    <FileText size={20} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
                  ) : (
                    <Youtube size={20} className={isDark ? 'text-gray-600' : 'text-gray-400'} />
                  )}
                </div>
                <h4 className={`font-semibold ${isDark ? 'text-gray-200 group-hover:text-blue-400' : 'text-gray-800 group-hover:text-blue-600'} line-clamp-2`}>
                  {item.title}
                </h4>
                <p className={`text-sm mt-2 ${isDark ? 'text-gray-500' : 'text-gray-600'}`}>
                  {item.type === 'article' ? `${item.reads} reads` : `${item.views} views`}
                </p>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className={`${isDark ? 'text-gray-400' : 'text-gray-600'} mb-4`}>Want to learn together?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://youtube.com/@arplearn" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 ${isDark ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} text-white rounded-md transition-all duration-300 transform hover:scale-105`}>
                Subscribe @ARPLearn
              </a>
              <a href="https://dev.to/pawel" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 ${isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-md transition-all duration-300 transform hover:scale-105`}>
                Follow on dev.to
              </a>
              <a href="https://straighty.app" target="_blank" rel="noopener noreferrer" className={`px-6 py-3 border ${isDark ? 'border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white hover:bg-gray-900' : 'border-gray-300 hover:border-gray-400 hover:bg-gray-100'} rounded-md transition-all duration-300`}>
                Try Straighty.app
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 px-6 border-t ${isDark ? 'border-gray-800 bg-black' : 'border-gray-200 bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-black'}`}>ARPL</span>
            <span className={isDark ? 'text-gray-500' : 'text-gray-600'}>© 2025 Pawel Lach</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/LachPawel" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              GitHub
            </a>
            <a href="https://dev.to/pawel" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              dev.to
            </a>
            <a href="https://youtube.com/@arplearn" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              YouTube
            </a>
            <a href="https://www.linkedin.com/in/pawelach/" target="_blank" rel="noopener noreferrer" className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              LinkedIn
            </a>
            <a href="mailto:pawelkowalewsk@gmail.com" className={`${isDark ? 'text-gray-500 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}>
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;