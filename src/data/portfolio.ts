import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Bishwadeep Khanra",
    role: "Full-Stack Developer & Software Engineer",
    headline: "Building high-performance digital experiences and software solutions that solve real problems.",
    tagline: "Bridging solid computer science fundamentals with modern, reactive full-stack web and mobile engineering.",
    bio: [
      "I am a dedicated, results-driven developer and MCA student at Techno Main Salt Lake, Kolkata, with an academic background in Computer Science (9.00 CGPA in B.Sc. Comp. Sci. Hons and JECA Rank 251).",
      "My technical strengths span full-stack web architecture, cross-platform mobile engineering with Flutter, algorithms, and backend systems. Over the past 3+ years, I have worked as an independent freelance web developer and in association with Soultechies.com, delivering tailored digital experiences for clients.",
      "As an active builder, I take pride in writing clean, scalable code, architecting maintainable backend services with Node.js, MongoDB, and Firebase, and building fluid, responsive interfaces with React and Flutter."
    ],
    location: "Kolkata, West Bengal, India",
    email: "bishwadeepkhanra4321@gmail.com",
    phone: "+91 6289549477",
    status: "Available for opportunities",
    resumeDriveUrl: "https://drive.google.com/file/d/1RrkTV-I1U_0H9GJvrHP5G4GKEofWVfwF/view?usp=drive_link",
    resumeDownloadUrl: "https://drive.google.com/uc?export=download&id=1RrkTV-I1U_0H9GJvrHP5G4GKEofWVfwF",
    localResumePath: "/resume.pdf",
    profilePhoto: "/images/profile.jpg",
    profilePhotoDriveUrl: "https://drive.google.com/file/d/1OvdZVDo0cpHNmVSIHn2aEUkcveJHey_O/view?usp=drivesdk",
    socials: {
      github: "https://github.com/b-4321",
      linkedin: "https://www.linkedin.com/in/bishwadeep-khanra-2b1b021b6",
      email: "mailto:bishwadeepkhanra4321@gmail.com"
    }
  },

  skills: [
    {
      title: "Programming Languages",
      categoryKey: "languages",
      skills: [
        { name: "Java", level: "Proficient", featured: true },
        { name: "Python", level: "Proficient", featured: true },
        { name: "C++", level: "Proficient", featured: true },
        { name: "C", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Proficient", featured: true },
        { name: "Kotlin", level: "Proficient" }
      ]
    },
    {
      title: "Mobile Development",
      categoryKey: "mobile",
      skills: [
        { name: "Flutter", level: "Proficient", featured: true },
        { name: "Android Studio", level: "Proficient", featured: true },
        { name: "Kotlin", level: "Proficient" },
        { name: "Cross-Platform UI", level: "Proficient" }
      ]
    },
    {
      title: "Frontend Engineering",
      categoryKey: "frontend",
      skills: [
        { name: "React", level: "Proficient", featured: true },
        { name: "HTML5", level: "Expert", featured: true },
        { name: "CSS3 / Modern CSS", level: "Expert", featured: true },
        { name: "Tailwind CSS", level: "Proficient", featured: true },
        { name: "Responsive Design", level: "Expert" }
      ]
    },
    {
      title: "Backend & Cloud",
      categoryKey: "backend",
      skills: [
        { name: "Node.js", level: "Proficient", featured: true },
        { name: "Firebase (Auth & Firestore)", level: "Proficient", featured: true },
        { name: "REST APIs", level: "Proficient", featured: true },
        { name: "Express", level: "Proficient" }
      ]
    },
    {
      title: "Database Systems",
      categoryKey: "database",
      skills: [
        { name: "MongoDB", level: "Proficient", featured: true },
        { name: "Firebase Realtime DB / Firestore", level: "Proficient", featured: true },
        { name: "Database Design", level: "Proficient" }
      ]
    },
    {
      title: "Tools & Ecosystem",
      categoryKey: "tools",
      skills: [
        { name: "Git", level: "Proficient", featured: true },
        { name: "GitHub", level: "Proficient", featured: true },
        { name: "Data Structures & Algorithms", level: "Proficient", featured: true },
        { name: "Video Production & Editing", level: "Proficient" }
      ]
    }
  ],

  techStack: [
    // 1. PROGRAMMING LANGUAGES (Strictly distinct)
    {
      id: "java",
      name: "Java",
      category: "language",
      categoryLabel: "Programming Language",
      description: "Core academic language, OOP & data structures",
      accentColor: "#EA2D2E",
      core: true
    },
    {
      id: "python",
      name: "Python",
      category: "language",
      categoryLabel: "Programming Language",
      description: "Backend scripting, algorithms & computation",
      accentColor: "#3776AB",
      core: true
    },
    {
      id: "javascript",
      name: "JavaScript (ES6+)",
      category: "language",
      categoryLabel: "Programming Language",
      description: "Modern ECMAScript for reactive full-stack web applications",
      accentColor: "#F7DF1E",
      core: true
    },
    {
      id: "cpp",
      name: "C++",
      category: "language",
      categoryLabel: "Programming Language",
      description: "Algorithms & performance-critical problem solving",
      accentColor: "#00599C",
      core: false
    },
    {
      id: "c",
      name: "C",
      category: "language",
      categoryLabel: "Programming Language",
      description: "Fundamental systems programming & memory concepts",
      accentColor: "#A8B9CC",
      core: false
    },
    {
      id: "kotlin",
      name: "Kotlin",
      category: "language",
      categoryLabel: "Programming Language",
      description: "Modern Android application development",
      accentColor: "#7F52FF",
      core: false
    },
    {
      id: "dart",
      name: "Dart",
      category: "language",
      categoryLabel: "Programming Language",
      description: "Primary language for cross-platform Flutter engineering",
      accentColor: "#0175C2",
      core: true
    },

    // 2. FRAMEWORKS / TECHNOLOGIES
    {
      id: "react",
      name: "React",
      category: "framework",
      categoryLabel: "Frontend UI Library",
      description: "Component-driven reactive user interfaces & SPA architecture",
      accentColor: "#61DAFB",
      core: true
    },
    {
      id: "flutter",
      name: "Flutter",
      category: "framework",
      categoryLabel: "Cross-Platform Mobile SDK",
      description: "High-performance cross-platform Android & iOS applications",
      accentColor: "#02569B",
      core: true
    },
    {
      id: "nodejs",
      name: "Node.js",
      category: "framework",
      categoryLabel: "JavaScript Runtime",
      description: "Asynchronous backend services, microservices & REST APIs",
      accentColor: "#5FA04E",
      core: true
    },
    {
      id: "express",
      name: "Express.js",
      category: "framework",
      categoryLabel: "Backend Framework",
      description: "Lightweight routing & server-side API architecture",
      accentColor: "#FFFFFF",
      core: false
    },
    {
      id: "firebase",
      name: "Firebase",
      category: "framework",
      categoryLabel: "Cloud Platform & BaaS",
      description: "Authentication, Firestore, Realtime Database & cloud storage",
      accentColor: "#FFCA28",
      core: true
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "database",
      categoryLabel: "NoSQL Database",
      description: "Flexible document-based data modeling, queries & indexing",
      accentColor: "#47A248",
      core: true
    },
    {
      id: "tailwindcss",
      name: "Tailwind CSS",
      category: "framework",
      categoryLabel: "CSS Framework",
      description: "Utility-first modern design systems & responsive layouts",
      accentColor: "#06B6D4",
      core: true
    },

    // 3. TOOLS & ECOSYSTEM
    {
      id: "git",
      name: "Git",
      category: "tool",
      categoryLabel: "Version Control",
      description: "Distributed version control & source code management",
      accentColor: "#F05032",
      core: true
    },
    {
      id: "github",
      name: "GitHub",
      category: "tool",
      categoryLabel: "Developer Platform",
      description: "Collaborative repository hosting, workflows & deployments",
      accentColor: "#E6EDF3",
      core: true
    },
    {
      id: "androidstudio",
      name: "Android Studio",
      category: "tool",
      categoryLabel: "Native / Mobile IDE",
      description: "Native & Flutter Android development, profiling & emulation",
      accentColor: "#3DDC84",
      core: false
    }
  ],

  experience: [
    {
      company: "Soultechies.com",
      role: "Professional Agency & Web Development",
      duration: "Jan 2022 – Present",
      period: "2+ years",
      location: "Remote / Kolkata",
      description: "Professional digital agency and web development association delivering bespoke web applications, responsive client platforms, and high-performance digital solutions.",
      achievements: [
        "Architected and deployed custom client web properties ensuring high performance, responsive layouts, and cross-browser consistency.",
        "Managed client deliverables from initial technical requirements to production deployment and maintenance.",
        "Integrated modern UI patterns, scalable media workflows, and responsive frontend systems."
      ],
      technologies: ["React", "JavaScript", "Node.js", "Web Development", "Video Production"],
      companyUrl: "https://soultechies.com",
      current: true
    },
    {
      company: "Freelance",
      role: "Full-Stack & Web Developer",
      duration: "Feb 2021 – Present",
      period: "3+ years",
      location: "Remote",
      description: "Delivering custom web applications, responsive frontend interfaces, and software tooling for diverse projects.",
      achievements: [
        "Engineered intuitive single-page applications and responsive client websites with optimized load performance.",
        "Created custom client-side utilities and automated data workflows.",
        "Implemented secure authentication, modern styling hierarchies, and maintainable code architectures."
      ],
      technologies: ["Flutter", "React", "JavaScript", "HTML5", "CSS3", "Python"],
      current: true
    },
    {
      company: "Code Clause",
      role: "Web Development Intern",
      duration: "Aug 2021 – Jan 2022",
      period: "6 months",
      location: "Remote, India",
      description: "Completed professional web development internship contributing to front-end development and UI enhancements for web platforms.",
      achievements: [
        "Collaborated with the engineering team to build modular, responsive UI components.",
        "Refactored styling and layout hierarchies to improve cross-device usability.",
        "Assisted in testing web features and resolving cross-browser compatibility quirks."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      company: "Open Source Community",
      role: "Open Source Developer",
      duration: "Jan 2021 – Present",
      period: "3+ years",
      location: "GitHub",
      description: "Active contributor to open-source developer tooling and algorithmic utility repositories.",
      achievements: [
        "Authored open repositories demonstrating core algorithmic implementations in C++ and Python.",
        "Shared modular web components and starter templates with the developer community.",
        "Engaged in collaborative code reviews, bug fixes, and feature enhancements."
      ],
      technologies: ["C++", "Python", "Git", "GitHub", "Data Structures"]
    }
  ],

  projects: [
    {
      id: "face-recognition-attendance",
      title: "Face Recognition Employee Attendance App",
      subtitle: "Biometric Mobile Attendance Management Application",
      description: "A mobile employee attendance application built using Flutter and Firebase with face-recognition-based employee identification and attendance functionality.",
      problem: "Manual attendance registers and physical biometric fingerprint hardware often create queues, require physical contact, and suffer from hardware maintenance issues.",
      solution: "Engineered a contact-free mobile attendance application using Flutter and Firebase, enabling seamless facial recognition-based identification and real-time attendance tracking.",
      features: [
        "Face recognition employee identification workflow",
        "Automated clock-in and attendance recording",
        "Real-time employee attendance management dashboard",
        "Cloud-synced employee records powered by Firebase",
        "Responsive, mobile-first intuitive interface"
      ],
      technologies: ["Flutter", "Firebase", "Face Recognition", "Mobile Development"],
      contribution: "Designed the Flutter mobile UI screens, integrated Firebase cloud backend services, and structured the attendance tracking workflow.",
      outcome: "Provides instantaneous mobile attendance capture with zero physical contact.",
      category: "Mobile",
      githubUrl: "https://github.com/b-4321",
      featured: true,
      accentColor: "#10b981"
    },
    {
      id: "billing-system",
      title: "Billing System",
      subtitle: "Professional Invoice & Billing Management Application",
      description: "A professional billing/invoice management application developed using Flutter. The system helps businesses create and manage billing information and invoices.",
      problem: "Small businesses often face calculation errors and slow customer checkouts when using paper bills or bloated accounting software.",
      solution: "Built a fast, streamlined billing application in Flutter with configurable business details, itemized billing, automated totals, and clean invoice records.",
      features: [
        "Dynamic bill and invoice creation with itemized product management",
        "Business profile configuration: Address, Phone number, and GSTIN",
        "Customer information logging and bill/invoice records",
        "Automated calculation of sub-totals, tax breakdowns, and final billing totals",
        "Clean, structured invoice summary view ready for customer handover"
      ],
      technologies: ["Flutter", "Dart", "Invoice Management", "Mobile Development"],
      contribution: "Architected the Flutter application interface, state management for line items, and business info configuration.",
      outcome: "Streamlined billing calculations with reliable invoice generation.",
      category: "Software / Utility",
      githubUrl: "https://github.com/b-4321",
      featured: true,
      accentColor: "#3b82f6"
    },
    {
      id: "hopzy-in",
      title: "Hopzy.in",
      subtitle: "Bus Booking & Travel Service Platform",
      description: "A modern bus booking service website designed to help users search routes, explore bus options, and book journeys online.",
      problem: "Travelers need a seamless, dependable digital platform to discover bus routes, compare schedules, and secure online seat reservations efficiently.",
      solution: "Developed Hopzy.in as a modern bus travel and booking service website featuring intuitive route searching, schedule visibility, and streamlined online booking workflows.",
      features: [
        "Interactive bus route search by departure city, destination, and travel date",
        "Comprehensive route listings with departure times, arrival estimates, and seat categories",
        "AC Sleeper and Seater bus options with transparent fare breakdowns",
        "Responsive, travel-first interface optimized for seamless mobile and desktop booking"
      ],
      technologies: ["Bus Booking", "Travel Platform"],
      contribution: "Designed and engineered the responsive travel UI, bus route search flows, and booking presentation.",
      outcome: "Modern, accessible bus booking platform live at hopzy.in.",
      category: "Travel Platform",
      liveUrl: "https://hopzy.in",
      liveUrlLabel: "Visit Website →",
      githubUrl: "https://github.com/b-4321",
      featured: true,
      accentColor: "#10b981"
    },
    {
      id: "car-rental-system",
      title: "Car Rental System",
      subtitle: "Fleet Management & Vehicle Reservation Platform",
      description: "A professional car rental and fleet booking web application designed to streamline vehicle reservations, catalog browsing, and rental pricing.",
      problem: "Vehicle fleet operators require coordinated booking schedules, dynamic inventory visibility, and automated duration-based pricing calculation.",
      solution: "Developed an inventory-driven rental web application with vehicle category filtering, reservation duration selection, and transparent pricing logic.",
      features: [
        "Comprehensive vehicle catalog with filterable specifications and categories",
        "Dynamic rental duration and transparent pricing calculation",
        "Reservation scheduling system with conflict prevention",
        "Clean, responsive desktop and mobile booking interface"
      ],
      technologies: ["Java", "React", "MongoDB", "CSS3"],
      contribution: "Designed the vehicle data model, backend logic in Java, and user-facing interactive catalog UI.",
      outcome: "Accurate booking calculations and streamlined vehicle catalog exploration.",
      category: "Full Stack",
      githubUrl: "https://github.com/b-4321",
      featured: true,
      accentColor: "#8b5cf6"
    },
    {
      id: "ai-resume-builder",
      title: "AI Resume Builder & Studio",
      subtitle: "Intelligent Resume Generator & Career Document Builder",
      description: "A modern web application built to help professionals generate clean, structured, ATS-compliant resumes with real-time editing and PDF generation.",
      problem: "Traditional resume makers are cluttered, lock formatting behind paywalls, or produce broken PDF layouts that fail automated screening systems.",
      solution: "Engineered a streamlined application featuring modular section blocks, live dual-pane previewing, and standardized PDF output formatting.",
      features: [
        "Live interactive preview with responsive split-pane layout",
        "Configurable sections: Experience, Education, Skills, and Projects",
        "Clean typography optimized for automated parsing and visual reading",
        "Direct client-side PDF document generation and export"
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js"],
      contribution: "Designed component hierarchy, built real-time state synchronization, and implemented high-fidelity PDF rendering.",
      outcome: "Provides instant zero-latency previewing and standard PDF export.",
      category: "Full Stack",
      githubUrl: "https://github.com/b-4321",
      featured: false,
      accentColor: "#06b6d4"
    },
    {
      id: "expense-tracker",
      title: "Expense Tracker & Analytics",
      subtitle: "Real-Time Personal Budget & Spending Tracker",
      description: "A cloud-synced financial dashboard that enables users to track daily expenditures, categorize spending habits, and gain visual budget insights.",
      problem: "Lack of immediate visibility into everyday expense categories causes budget overruns and poor personal financial planning.",
      solution: "Engineered a fast, cloud-backed expense tracking web app with category breakdown visualizations and instantaneous transaction updates.",
      features: [
        "Instant transaction logging with custom tags and categories",
        "Real-time data synchronization using Firebase cloud backend",
        "Visual expense breakdown summaries and financial insights",
        "Mobile-first responsive design for quick on-the-go entry"
      ],
      technologies: ["React", "Firebase", "JavaScript", "Tailwind CSS"],
      contribution: "Configured Firebase backend integration, real-time data hooks, and visual aggregation metrics.",
      outcome: "Sub-second transaction sync and intuitive daily financial logging.",
      category: "Full Stack",
      githubUrl: "https://github.com/b-4321",
      featured: false,
      accentColor: "#ec4899"
    }
  ],

  education: [
    {
      institution: "Techno Main Salt Lake, Kolkata",
      degree: "Master of Computer Applications (MCA)",
      field: "Computer Science & Applications",
      duration: "Oct 2023 – Jul 2025",
      grade: "JECA Rank 251",
      cgpa: "8.15 CGPA",
      details: [
        "Post-graduate focus on advanced computer architecture, software engineering, and web systems.",
        "Secured competitive West Bengal JECA State Rank 251."
      ]
    },
    {
      institution: "Acharya Prafulla Chandra College (West Bengal State University)",
      degree: "Bachelor of Science (B.Sc. Hons)",
      field: "Computer Science",
      duration: "Apr 2021 – Aug 2023",
      grade: "9.00 CGPA (First Class Honours)",
      details: [
        "Rigorous curriculum covering Data Structures, Object-Oriented Programming, Database Systems, and Discrete Mathematics.",
        "Graduated with outstanding academic distinction (9.00 CGPA)."
      ]
    },
    {
      institution: "Madhyamgram Acharya Prafulla Chandra Vidyayatan",
      degree: "Higher Secondary (10+2) & Secondary (10th)",
      field: "Science / Computer Science",
      duration: "2012 – 2020",
      details: [
        "Higher Secondary examination passed in 2020 with Computer Science specialization.",
        "Secondary examination passed in 2018."
      ]
    }
  ],

  certifications: [
    {
      title: "Data Structures in C++",
      issuer: "Coding Ninjas",
      credentialId: "5a90c81ba746e0c4"
    },
    {
      title: "Advanced Data Structures in C++",
      issuer: "Coding Ninjas",
      credentialId: "3966ae563a15dd17"
    },
    {
      title: "Full Stack Developer",
      issuer: "Code Help"
    },
    {
      title: "Google Tech Camp",
      issuer: "Google Cloud Community India"
    },
    {
      title: "Amazon Web Services Conference",
      issuer: "Amazon Web Services (AWS)"
    },
    {
      title: "Internship Ready Certificate",
      issuer: "Coding Ninjas"
    },
    {
      title: "Ethical Hacker Essentials",
      issuer: "EC-Council"
    },
    {
      title: "Digital Video Editor (DVE)",
      issuer: "Udemy",
      date: "Dec 2023"
    }
  ]
};
