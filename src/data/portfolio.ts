/**
 * Data Structures and Types for Portfolio Content
 */

// ============================================
// TYPES
// ============================================

export interface Hackathon {
  title: string;
  category: 'ai' | 'robotics' | 'blockchain';
  featured?: boolean;
  achievements: string[];
  description: string;
  link?: string | null;
  video?: string | null;
  image?: string;
}

export interface SpeakingEngagement {
  title: string;
  event: string;
  type: 'talk' | 'organizer' | 'pitch' | 'tutorial' | 'contribution';
  link?: string;
  featured?: boolean;
  note?: string;
}

export interface Project {
  title: string;
  description: string;
  type: 'mobile' | 'AI/ML' | 'robotics' | 'backend' | 'blockchain' | 'community';
  featured?: boolean;
  link?: string;
  language: string;
  github?: string;
  image?: string;
}

export interface ContentItem {
  title: string;
  platform: string;
  type: 'video' | 'article';
  link: string;
  views?: string;
  reads?: string;
  image?: string;
}

export interface TechStack {
  frontend: string[];
  backend: string[];
  specialties: string[];
}

// ============================================
// DATA
// ============================================

export const hackathons: Hackathon[] = [
  {
    title: "Kobolt",
    category: "robotics",
    featured: true,
    achievements: [
      "HackLab Robotics Berlin Hackathon 2026",
      "Gemini Robotics-ER 1.6 as the brain, NormaCore to drive the arm",
      "ai-coustics Voice Focus to hear commands in a noisy hall",
      "Team: Karim Taher, Ilja Weber, Ming Yip C."
    ],
    description: "Can an LLM control a robot? An autonomous robotic arm driven by voice, with a Gemini robotics model planning the moves.",
    link: null,
    video: "https://youtu.be/PILwXTECAoo"
  },
  {
    title: "Reins",
    category: "robotics",
    featured: true,
    achievements: [
      "Alien Bazaar Hackathon 2026",
      "Approve or reject robot actions with gestures on Snap Spectacles, or by voice",
      "Voice isolation and acoustic awareness with ai-coustics Quail and Tyto",
      "Team: Artur Habuda, Jone Steinhoff, Jonathan Tybirk, Christoffer Shane Rask"
    ],
    description: "A reward loop for the LLM harness around VLA models, tested on Pollen Robotics Reachy and Unitree R1.",
    link: null,
    video: null
  },
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
    video: "https://youtu.be/A4HixCZWekA",
    image: "/images/spindra.png"
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
    video: null,
    image: "/images/zerog.png"
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
    video: null,
    image: "/images/straighty.png"
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
];

export const speakingEngagements: SpeakingEngagement[] = [
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
    link: "https://www.youtube.com/watch?v=NMk20KeD-ec",
    featured: true,
    note: "Won December 2024 - Same day as Straighty Product Hunt success"
  },
  {
    title: "Founders Running Club",
    event: "Founders Running Club :: Warsaw",
    type: "organizer",
    link: "https://www.meetup.com/founders-running-club-warsaw/",
    featured: true,
    note: "Active contributor and participant of the Founders Running Club :: Warsaw"
  }
];

export const projects: Project[] = [
  {
    title: "Spindra",
    description: "AI-powered tennis training app with real-time pose estimation, AR tennis experience, and ElevenLabs voice coaching. Features swing analysis, challenge system, and leaderboards.",
    type: "mobile",
    featured: true,
    link: "https://youtu.be/A4HixCZWekA",
    language: "Swift",
    image: "/images/spindra.png",
  },
  {
    title: "Zero-G",
    description: "Space-themed fitness app with AI voice coach, camera-based rep counting, and daily AI-generated missions. Received ElevenLabs grant for immersive voice technology.",
    type: "mobile",
    featured: true,
    link: "https://zero-g.app",
    language: "Swift",
    image: "/images/zerog.png",
  },
  {
    title: "Straighty",
    description: "Professional habit tracking app that helps users build consistent routines. Features clean UI, analytics, and motivational streaks system.",
    type: "AI/ML",
    featured: true,
    link: "https://straighty.app",
    language: "Swift",
    image: "/images/straighty.png",
  },
  {
    title: "Pullz",
    description: "Pull-up coach that counts reps, judges your form and keeps you off your phone between sets. Built with TypeSafe AI jev, Gemini 3.8 Live and ai-coustics Tyto, following Straighty and Zero-G.",
    type: "AI/ML",
    featured: true,
    link: "https://x.com/GrungeCoder",
    language: "Computer Vision"
  },
  {
    title: "Rhetor",
    description: "AI pitch coach that interrupts you. Gemini Live streams your voice and video, flags filler words and pace in real time, and simulates tough audiences like a skeptical investor.",
    type: "AI/ML",
    featured: true,
    language: "TypeScript",
    github: "https://github.com/LachPawel/Rhetor"
  },
  {
    title: "Blacoustic",
    description: "Real-time speech enhancement for Google Meet. AirPods mic → ai-coustics SDK → BlackHole virtual device, with automatic sample-rate conversion.",
    type: "AI/ML",
    featured: true,
    language: "Rust",
    github: "https://github.com/LachPawel/blacoustic"
  },
  {
    title: "apic",
    description: "Fully local voice pipeline for Apple Silicon: whisper-rs STT, on-device LLM, Kokoro TTS. Benchmarked at 661 ms STT and 146 ms TTS, no cloud, no API keys.",
    type: "AI/ML",
    language: "Rust",
    github: "https://github.com/LachPawel/apic"
  },
  {
    title: "Realtime Voice Agent in 60 Seconds",
    description: "Minimal starter for OpenAI's gpt-realtime-2. WebRTC audio in the browser, a 40-line Python server that only adds the API key, function calling in one JS object.",
    type: "AI/ML",
    language: "HTML/Python",
    github: "https://github.com/LachPawel/gpt2-rt"
  },
  {
    title: "FormKit",
    description: "Started as a handstand trainer that plays Michael Jackson when you forget the pelvis twist, then open-sourced as an iOS template for body pose apps. Apple Vision at 30 fps, skeleton overlay, protocol-based rep counter.",
    type: "mobile",
    language: "Swift",
    github: "https://github.com/LachPawel/FormKit",
    image: "/images/formkit.png"
  },
  {
    title: "Aporia",
    description: "Live GitHub activity galaxy. Every repo is a glowing planet in a Three.js scene that lights up on new commits, made for hackathon screens and dev streams.",
    type: "community",
    link: "https://aporia-hack.vercel.app",
    language: "TypeScript",
    github: "https://github.com/LachPawel/aporia"
  },
  {
    title: "iTARS",
    description: "TARS from Interstellar in augmented reality. Place it on any surface with ARKit and talk to it through ElevenLabs conversational AI.",
    type: "mobile",
    link: "https://www.youtube.com/watch?v=WhkKBo74Hq8",
    language: "Swift",
    github: "https://github.com/ARPLearn/iTARS"
  },
  {
    title: "Arduino RC Car",
    description: "DIY remote-controlled car built with Arduino. Complete tutorial with 15k+ views on dev.to helping makers build their own.",
    type: "robotics",
    featured: true,
    language: "C++/Java",
    github: "https://dev.to/pawel/how-to-build-your-own-rc-car-with-arduino-arducar-12ei",
    image: "/images/arducar.png"
  },
  {
    title: "Syncra.xyz",
    description: "Startup co-founded from zkVote hackathon win (HackOnChain 2022 Berlin). Zero-knowledge voting system that evolved into a full startup, accelerated by AlephZero.",
    type: "blockchain",
    featured: true,
    link: "https://syncra.xyz",
    language: "TypeScript/Rust",
    image: "/images/syncra.png"
  },
  {
    title: "Eidolon",
    description: "Next-generation Manufacturing Execution System (MES) bridging production planning and shop floor execution. Features AI-driven insights, vector search, and real-time production tracking.",
    type: "backend",
    featured: false,
    link: "https://github.com/LachPawel/Eidolon",
    language: "TypeScript",
    github: "https://github.com/LachPawel/Eidolon"
  },
  {
    title: "LazyDog AI Robot",
    description: "Custom WAVEGO quadruped robot enhanced with AI capabilities. Featured in multiple viral YouTube videos demonstrating robotics and AI integration.",
    type: "robotics",
    featured: true,
    link: "https://github.com/LachPawel/lazydog",
    language: "Python",
    github: "https://github.com/LachPawel/lazydog",
    image: "/images/lazydog.png"
  },
  {
    title: "Senior Cactus AI",
    description: "Interactive robot cactus with personality using Raspberry Pi Pico, React Native, Bluetooth, and OpenAI's Realtime API for voice-controlled interactions.",
    type: "robotics",
    featured: false,
    language: "TypeScript/Python",
    github: "https://github.com/LachPawel/SenorCactus.AI"
  },
  {
    title: "BUN-HTMX-Full-Stack-Template",
    description: "Production-ready full stack template combining HTMX, Server Side Components, SQLite, and Bun runtime. Used by developers worldwide.",
    type: "backend",
    language: "TypeScript",
    github: "https://github.com/LachPawel/BUN-HTMX-Full-Stack-App-Template"
  },
  {
    title: "NEM-API",
    description: "Boilerplate code for REST API that can be implemented in various projects. Features JWT authentication and comprehensive testing.",
    type: "backend",
    language: "JavaScript",
    github: "https://github.com/LachPawel/NEM-API"
  },
  {
    title: "Dziknik",
    description: "Web application for fitness enthusiasts to create, share, and follow training plans. Perfect for beginners and experienced athletes.",
    type: "backend",
    language: "TypeScript",
    github: "https://github.com/LachPawel/Dziknik"
  },
  {
    title: "GitProve",
    description: "Collaborative hub where IT enthusiasts build, showcase, and evolve. Community-driven projects for amplifying tech journeys.",
    type: "community",
    language: "JavaScript",
    github: "https://github.com/ARPLearn/Git-Prove"
  },
  {
    title: "QuantumFit API",
    description: "Node.js/TypeScript backend with Python microservices implementing TruLens-powered LLM prompt evaluations for AI-driven fitness.",
    type: "AI/ML",
    language: "Python/TypeScript",
    github: "https://github.com/LachPawel/QuantumFit-Gemini-Vertex"
  },
  {
    title: "QuantumFit Mobile",
    description: "Revolutionary React Native fitness app using AI to help users physically become better versions of themselves.",
    type: "mobile",
    language: "TypeScript - React Native",
    github: "https://github.com/LachPawel/QuantumFit"
  },
  {
    title: "Smart Contracts Caller",
    description: "Backend tool for executing methods on Substrate-based Smart Contracts, powered by Polkadot.js.",
    type: "blockchain",
    language: "TypeScript",
    github: "https://github.com/LachPawel/Substrate-Polkadot-Smart-Contracts-Caller"
  },
  {
    title: "RISC Zero Examples",
    description: "Zero-knowledge proofs based on RISC Zero with multiple example implementations across different branches.",
    type: "blockchain",
    language: "Rust",
    github: "https://github.com/LachPawel/RISC-Zero-Prover-Verifier"
  },
  {
    title: "Gradatrim",
    description: "Innovative iOS fitness app combining AI-powered coaching with real-time form analysis for personalized workout guidance.",
    type: "mobile",
    featured: false,
    language: "Swift",
    github: "https://github.com/The-Sloths/Gradatrim"
  }
];

export const content: ContentItem[] = [
  {
    title: "ARP Learn",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/@arplearn",
    views: "1K+ subscribers • Tech YT channel",
    image: "/images/arpl.png"
  },
  {
    title: "Z innej perspektywy - From a Different Perspective",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/@zip_differentperspective",
    views: "Personal vlog about life, learning & sports",
    image: "/images/zinnejperspektywy.png"
  },
  {
    title: "DEPTH",
    platform: "SoundCloud",
    type: "video",
    link: "https://soundcloud.com/depth-arpl",
    views: "Alternative Ambient Post-Rock music project",
    image: "/images/depth.png"
  },
  {
    title: "Tyto - Audio Insight for the Voice AI",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=RjDujIWAkuA",
    views: "Real-time audio quality scoring for voice agents at ai-coustics"
  },
  {
    title: "The Robots Are Pushing Back: Claude 3.7 Posture Police",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=LbgSKqaUsos",
    views: "600+"
  },
  {
    title: "What Happens When a $2 Cactus Gets an AI Brain?",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=rP5ospQdvWM",
    views: "250+"
  },
  {
    title: "It's ALIVE! I Gave My Robot Dog an AI Brain",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=2VGDe0nQBYM",
    views: "25k+"
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
    views: "3.5k+"
  },
  {
    title: "How to Create Prover and Verifier App on zkVM",
    platform: "YouTube",
    type: "video",
    link: "https://www.youtube.com/watch?v=mQQePxfE1sE",
    views: "800+"
  }
];

export const techStack: TechStack = {
  frontend: ["JavaScript", "TypeScript", "React", "Swift", "Kotlin"],
  backend: ["Node.js", "Python", "Rust"],
  specialties: ["Web Development", "Computer Vision", "AI/ML", "Robotics"]
};
