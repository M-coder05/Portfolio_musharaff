/**
 * MOHAMMED MUSHARAFF S — EDITORIAL PORTFOLIO DATA REPOSITORY
 * Single source of truth for all portfolio content.
 * Edit this file to add or update projects, certificates, experience, or skills.
 */

const featuredCredentials = [
  {
    id: "aws-academy-cloud-architecting",
    title: "AWS Academy Graduate / Cloud Architecting (Trained)",
    issuer: "AWS Academy",
    type: "Training badge",
    image: "assets/images/badges/aws-academy-cloud-architecting.png",
    alt: "AWS Academy Cloud Architecting badge marked Trained",
    width: 821,
    height: 712,
    category: "cloud"
  },
  {
    id: "google-cloud-data-analytics",
    title: "Google Cloud Data Analytics Certificate",
    issuer: "Google Cloud",
    type: "Certificate",
    image: "assets/images/badges/google-cloud-data-analytics.png",
    alt: "Google Cloud Data Analytics Certificate badge",
    width: 600,
    height: 600,
    category: "data-ai",
    categories: ["certificates"],
    skills: ["Data Analytics with Python"]
  }
]

const PORTFOLIO_DATA = {
  personal: {
    name: "Mohammed Musharaff S",
    avatar: "assets/images/profile/mohammed-musharaff.webp",
    pronouns: "",
    title: "Frontend Developer",
    focus: "I build responsive websites with HTML, CSS, and JavaScript, and I am currently learning AI/ML and Computer Vision.",
    location: "Tiruchirappalli, Tamil Nadu, India",
    email: "cammm2005@gmail.com",
    whatsapp: "918122681754",
    github: "https://github.com/M-coder05",
    githubDisplay: "github.com/M-coder05",
    linkedin: "https://www.linkedin.com/in/mohammedmusharaff-m",
    linkedinDisplay: "linkedin.com/in/mohammedmusharaff-m",
    portfolio: "https://mohammedmusharaffm.in/",
    resumePath: "assets/resume/Mohammed_Musharaff_Resume.pdf",
    resumeLabel: "Download Resume",
    sameAs: [
      "https://github.com/M-coder05",
      "https://www.linkedin.com/in/mohammedmusharaff-m",
      "https://mohammedmusharaffm.in/"
    ],
    education: {
      degree: "Bachelor of Engineering in Computer Science and Engineering",
      institution: "M.A.M College of Engineering and Technology, Tiruchirappalli",
      period: "2023 – 2027",
      cgpa: "7.92 (Current)",
      standing: "Final Year Undergraduate"
    },
    summaryParagraphs: [
      "I am a final-year Computer Science and Engineering undergraduate at M.A.M College of Engineering and Technology, Tiruchirappalli, graduating in 2027. My current CGPA is 7.92 (Current).",
      "I have completed web development internships at F5CODER and Elewayte, and a Python development internship at Scopik. I have experience building responsive websites with HTML, CSS, and JavaScript, and I am learning AI/ML and Computer Vision to build practical software solutions."
    ],
    languages: ["English", "Tamil", "Hindi", "Urdu"],
    availability: "Open for 2026–2027 Engineering Internships & Frontend Roles"
  },

  featuredCredentials,

  skills: [
    {
      category: "Frontend Development",
      lead: "Responsive interfaces and browser-based applications",
      items: [
        { name: "HTML5", detail: "Semantic page structure" },
        { name: "CSS3", detail: "Responsive layouts and styling" },
        { name: "JavaScript", detail: "Interactive browser experiences" },
        { name: "Responsive Web Design", detail: "Layouts for mobile, tablet, and desktop" },
        { name: "Bootstrap", detail: "Responsive UI toolkit" },
        { name: "React.js", detail: "Practical use building this portfolio" }
      ]
    },
    {
      category: "Programming Languages",
      lead: "Programming fundamentals",
      items: [
        { name: "Python", detail: "Programming and introductory data workflows" },
        { name: "C", detail: "Programming fundamentals" },
        { name: "Java", detail: "Object-oriented programming fundamentals" }
      ]
    },
    {
      category: "Backend & Database",
      lead: "Foundational server-side and data technologies",
      items: [
        { name: "Node.js", detail: "Server-side JavaScript fundamentals" },
        { name: "Express.js", detail: "Backend routing and REST API fundamentals" },
        { name: "MongoDB", detail: "Document database fundamentals" }
      ]
    },
    {
      category: "AI & Machine Learning",
      lead: "Learning-stage interests and foundations",
      items: [
        { name: "Python for Machine Learning", detail: "Currently learning" },
        { name: "Artificial Intelligence", detail: "Foundational concepts; learning" },
        { name: "Machine Learning", detail: "Currently learning" },
        { name: "Deep Learning", detail: "Introductory hands-on workshop experience" },
        { name: "Computer Vision", detail: "Currently learning" }
      ]
    }
  ],

  currently: [
    "Machine Learning",
    "Natural Language Processing",
    "Computer Vision"
  ],

  experience: [
    {
      id: "f5coder-2025",
      plateNumber: "TR-01",
      role: "Web Development Intern",
      organization: "F5CODER",
      period: "Aug 2025 – Oct 2025",
      duration: "3 Months (Extended with Offer Letter Nov '25 – Jan '26)",
      location: "Tiruchirappalli, Tamil Nadu",
      type: "Internship",
      highlights: [
        "Constructed static and responsive client web pages adhering strictly to HTML5 semantic markup and CSS3 layout rules.",
        "Identified and rectified cross-viewport layout defects, enhancing visual consistency across mobile and desktop devices.",
        "Collaborated with senior developers on real-time client work orders and component modularization."
      ],
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
    },
    {
      id: "scopik-2025",
      plateNumber: "TR-02",
      role: "Python Developer (Intern)",
      organization: "Scopik Edutech Pvt. Ltd.",
      period: "27 Jun 2025 – 19 Jul 2025",
      duration: "Internship Training",
      location: "Tiruchirappalli, Tamil Nadu",
      type: "Internship",
      highlights: [
        "Completed structured corporate internship training focused on modular Python development and OOP structures.",
        "Implemented data processing routines and backend API concepts under technical mentorship.",
        "Represented M.A.M College of Engineering and Technology in departmental industry training initiatives."
      ],
      technologies: ["Python", "Object-Oriented Programming", "REST APIs", "Data Processing"]
    },
    {
      id: "elewayte-2024",
      plateNumber: "TR-03",
      role: "Web Development Intern",
      organization: "Elewayte",
      period: "Oct 2024 – Nov 2024",
      duration: "2 Months",
      location: "Remote / Bengaluru",
      type: "Internship",
      highlights: [
        "Engineered interactive web components using vanilla JavaScript, HTML, and custom CSS stylesheets.",
        "Adhered to tight project deadlines, task tickets, and sprint reviews in an industry simulated workflow.",
        "Validated browser compatibility and responsive layout breakpoints across tablet and phone viewports."
      ],
      technologies: ["JavaScript", "HTML5", "CSS3", "Component Architecture"]
    }
  ],

  projects: [
    {
      id: "rainbow-prints",
      featured: true,
      plateNumber: "PLATE 04 / PROOF A",
      slug: "rainbow-prints",
      title: "Rainbow Prints",
      descriptor: "Commercial Digital Printing Business Website",
      status: "LIVE PRODUCTION",
      liveUrl: "https://rainbowprintstry.com",
      meta: {
        client: "Rainbow Prints Tiruchirappalli",
        role: "Website development",
        timeline: "2024 – Present",
        stack: ["HTML5", "CSS3", "JavaScript"]
      },
      writeup: {
        problem: "A local printing business needed a website to present its services online.",
        solution: "Developed a responsive business website with interactive elements.",
        architecture: "Frontend implementation using HTML, CSS, and JavaScript for a real-world business use case."
      },
      tags: ["Web"],
      caseStudy: {
        role: "Frontend development",
        whatBuilt: "A responsive business website with interactive elements."
      },
      specs: [
        { label: "Implementation", value: "HTML5, CSS3, JavaScript" },
        { label: "Focus", value: "Responsive user interface" },
        { label: "Project type", value: "Business website" }
      ],
      gallery: [
        {
          src: "assets/images/projects/rainbow-prints/rainbow-prints-hero.webp",
          width: 1400,
          height: 880,
          caption: "Hero plate: Commercial service index and immediate quotation action banner.",
          isHero: true
        },
        {
          src: "assets/images/projects/rainbow-prints/rainbow-prints-services.webp",
          width: 1400,
          height: 880,
          caption: "Substrate & machine specification matrix with proofing control bars.",
          isHero: false
        },
        {
          src: "assets/images/projects/rainbow-prints/rainbow-prints-calculator.webp",
          width: 1400,
          height: 880,
          caption: "Instant job estimation calculator with multi-page catalog specifications.",
          isHero: false
        },
        {
          src: "assets/images/projects/rainbow-prints/rainbow-prints-responsive.webp",
          width: 1400,
          height: 880,
          caption: "Responsive viewport validation across mobile (375px) and tablet (768px) screens.",
          isHero: false
        }
      ]
    },
    {
      id: "smart-student-portal",
      featured: true,
      plateNumber: "PLATE 05 / PROOF B",
      slug: "smart-student-portal",
      title: "Smart Student Service Portal",
      descriptor: "Full-stack application for college administrative services",
      status: "LIVE PRODUCTION",
      liveUrl: "https://smart-student-service-portal.onrender.com/",
      githubUrl: "https://github.com/M-coder05/Student_request_OD",
      meta: {
        institution: "M.A.M College of Engineering & Technology",
        role: "Full-stack development",
        timeline: "2024 – 2025",
        stack: ["Node.js", "Express.js", "MongoDB Atlas", "JWT authentication", "REST APIs"]
      },
      writeup: {
        problem: "Students need a clear way to submit and track common college service requests.",
        solution: "A portal for leave, On-Duty (OD), bonafide certificate, and complaint requests, with status tracking and an admin approval workflow.",
        architecture: "Node.js and Express.js backend with REST API integration, MongoDB Atlas, JWT authentication, and role-based access control."
      },
      tags: ["Web"],
      caseStudy: {
        role: "Full-stack development",
        whatBuilt: "A college services portal for student requests, status tracking, and administrator approvals."
      },
      specs: [
        { label: "Backend", value: "Node.js and Express.js" },
        { label: "Database", value: "MongoDB Atlas" },
        { label: "Authentication", value: "JWT and role-based access" },
        { label: "Services", value: "Leave, OD, bonafide, complaints" }
      ],
      gallery: [
        {
          src: "assets/images/projects/smart-student-portal/smart-portal-hero.webp",
          width: 1024,
          height: 468,
          caption: "Campus Services Hub: Clean student landing view with interactive request flow preview.",
          isHero: true
        },
        {
          src: "assets/images/projects/smart-student-portal/smart-portal-services.webp",
          width: 1024,
          height: 465,
          caption: "Campus Essentials: Dedicated request modules for Leave, On-Duty (OD), Bonafide, and Complaints.",
          isHero: false
        },
        {
          src: "assets/images/projects/smart-student-portal/smart-portal-auth-login.webp",
          width: 1024,
          height: 465,
          caption: "Role-Based Authentication: Student and administrative sign-in with guided demo access.",
          isHero: false
        },
        {
          src: "assets/images/projects/smart-student-portal/smart-portal-registration.webp",
          width: 1024,
          height: 465,
          caption: "Student Account Creation: Form capture with department, semester, and register number indexing.",
          isHero: false
        },
        {
          src: "assets/images/projects/smart-student-portal/smart-portal-overview.webp",
          width: 1024,
          height: 467,
          caption: "Service Overview: Streamlined digital records replacing manual departmental paperwork.",
          isHero: false
        }
      ]
    }
  ],

  repositories: [
    {
      name: "Portfolio_musharaff",
      description: "Personal portfolio project built with React and JavaScript.",
      language: "JavaScript",
      url: "https://github.com/M-coder05/Portfolio_musharaff"
    },
    {
      name: "Student_request_OD",
      description: "Full-stack student service request and on-duty portal.",
      language: "JavaScript",
      url: "https://github.com/M-coder05/Student_request_OD"
    }
  ],

  seo: {
    title: "Mohammed Musharaff S | Frontend Developer",
    description: "Portfolio of Mohammed Musharaff S, a Computer Science and Engineering student, frontend developer, and aspiring AI/ML and Computer Vision developer.",
    image: "og-image.png"
  },
  contactCopy: {
    formIntro: "Send a direct inquiry through WhatsApp, or use email as an alternative.",
  },
  projectFilterEmpty: "No {category} projects are listed yet.",
  projectFilterLabel: "Filter projects by category",
  projectFilterOptions: ["All", "Web", "AI/ML", "Python"],
  caseStudyCopy: {
    summary: "Read the case study",
    labels: {
      problem: "Problem",
      role: "My role",
      stack: "Tech stack",
      built: "What I built",
      learned: "What I learned"
    },
    liveLink: "Live project ↗",
    githubLink: "GitHub ↗"
  },
  contactFormCopy: {
    name: "Name",
    email: "Email",
    message: "Message",
    copyEmail: "Copy email",
    copied: "Copied",
    copyFailed: "Unable to copy the email address."
  },
  shortcutsCopy: {
    title: "Shortcuts",
    heading: "KEYBOARD INDEX",
    close: "Close keyboard shortcuts"
  },
  currentlyCopy: {
    title: "Currently building / learning",
  },
  repositoriesCopy: {
    title: "Pinned repositories",
    profileLink: "GitHub profile"
  },
  intro: {
    kicker: "PRESS STARTING",
    title: "Preparing the press",
    prompt: "Press any key or click to continue."
  },

  shortcuts: [
    { key: "G, then H", destination: "hero", label: "Go to Front Matter" },
    { key: "G, then A", destination: "about", label: "Go to Imprint" },
    { key: "G, then P", destination: "proofs", label: "Go to Proofs" },
    { key: "G, then E", destination: "experience", label: "Go to Trade Record" },
    { key: "G, then C", destination: "contact", label: "Go to Dispatch" },
    { key: "?", destination: "help", label: "Show keyboard shortcuts" }
  ],

  achievements: [
    // AWARDS
    {
      id: "achieve-sankalpana-cert",
      category: "awards",
      categoryLabel: "Award",
      plateNumber: "PL-01",
      title: "Best Presentation Award — First Place",
      event: "SANKALPANA 2024 Internal Hackathon",
      issuer: "M.A.M College of Engineering and Technology (MoE's Innovation Cell)",
      date: "September 12, 2024",
      highlight: "Spark Squad project presentation evaluated by senior engineering faculty.",
      image: "assets/images/achievements/awards/sankalpana-2024-best-presentation-award.webp",
      width: 1001,
      height: 610,
      alt: "Sankalpana 2024 First Place Best Presentation Certificate"
    },
    {
      id: "achieve-sankalpana-photo",
      category: "awards",
      categoryLabel: "Award",
      plateNumber: "PL-02",
      title: "SANKALPANA 2024 Felicitation Ceremony",
      event: "Hackathon Award Presentation",
      issuer: "M.A.M College of Engineering and Technology",
      date: "September 12, 2024",
      highlight: "Receiving the first place trophy and memento alongside faculty coordinators.",
      image: "assets/images/achievements/awards/sankalpana-2024-hackathon-first-prize-ceremony.webp",
      width: 938,
      height: 700,
      alt: "Felicitation ceremony photo holding first place hackathon memento"
    },
    {
      id: "achieve-innovatrix-plaque",
      category: "awards",
      categoryLabel: "Award",
      plateNumber: "PL-03",
      title: "INNOVATRIX Club Web Development Plaque",
      event: "Departmental Recognition for Web Development",
      issuer: "M.A.M. College of Engineering & Technology (CSE Dept)",
      date: "2025",
      highlight: "Recognized for valuable contribution, commitment, and mentoring junior students in JavaScript.",
      image: "assets/images/achievements/awards/innovatrix-web-dev-memento-plaque.webp",
      width: 527,
      height: 716,
      alt: "Close-up photograph of INNOVATRIX Club Web Development Trophy Plaque"
    },
    {
      id: "achieve-innovatrix-photo",
      category: "awards",
      categoryLabel: "Award",
      plateNumber: "PL-04",
      title: "INNOVATRIX Club Recognition Ceremony",
      event: "Faculty Memento Handover",
      issuer: "M.A.M. College of Engineering & Technology (CSE Dept)",
      date: "2025",
      highlight: "Handover of departmental appreciation memento by faculty leaders.",
      image: "assets/images/achievements/awards/innovatrix-web-dev-recognition-ceremony.webp",
      width: 647,
      height: 711,
      alt: "Faculty presentation of Innovatrix Web Development award"
    },
    {
      id: "achieve-nspc-gold",
      category: "awards",
      categoryLabel: "Award",
      plateNumber: "PL-05",
      title: "National Student Paryavaran Competition (NSPC 2026) — Parijat Gold",
      event: "National Environmental Knowledge Competition",
      issuer: "Ministry of Education & Association of Indian Universities",
      date: "August 31, 2026",
      highlight: "Parijat Gold Certificate of Excellence awarded under UG & PG category.",
      image: "assets/images/achievements/awards/nspc-2026-paryavaran-competition-gold.webp",
      width: 1012,
      height: 578,
      alt: "NSPC 2026 National Student Paryavaran Gold Certificate"
    },
    {
      id: "achieve-sem1-rank",
      category: "awards",
      categoryLabel: "Award",
      plateNumber: "PL-06",
      title: "Anna University Examination I SEM Rank (GPA 8.55)",
      event: "Departmental Academic Merit Listing",
      issuer: "M.A.M. College of Engineering and Technology",
      date: "Nov–Dec 2023",
      highlight: "Secured 3rd rank across CSE B section in first-semester university board examinations.",
      image: "assets/images/achievements/awards/mamcet-anna-university-sem1-rank.webp",
      width: 617,
      height: 807,
      alt: "Academic rank announcement banner displaying GPA 8.55"
    },

    // CERTIFICATES
    {
      id: "cert-nptel-python",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-08",
      title: "Data Analytics with Python",
      event: "12-Week Intensive National Certification",
      issuer: "NPTEL & Indian Institute of Technology, Roorkee",
      date: "Jan–Apr 2026",
      highlight: "Proctored university board exam; consolidated score 58% (Assignments: 25/25).",
      image: "assets/images/achievements/certificates/nptel-data-analytics-with-python.webp",
      width: 625,
      height: 452,
      alt: "NPTEL IIT Roorkee Data Analytics with Python Certificate"
    },
    {
      id: "cert-infosys-bigdata",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-09",
      title: "Big Data 101",
      event: "Big Data Systems Curriculum",
      issuer: "Infosys Springboard",
      date: "April 8, 2026",
      highlight: "Foundational architecture of distributed big data systems and cluster processing.",
      image: "assets/images/achievements/certificates/infosys-springboard-big-data-101.webp",
      width: 990,
      height: 711,
      alt: "Infosys Springboard Big Data 101 Certificate"
    },
    {
      id: "cert-f5-internship",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-10",
      title: "Web Development Internship Completion",
      event: "Industry Web Production",
      issuer: "F5CODER & Ministry of MSME",
      date: "October 17, 2025",
      highlight: "Completed production tasks across responsive web layouts and client UI fixes.",
      image: "assets/images/achievements/certificates/f5coders-web-development-internship.webp",
      width: 606,
      height: 433,
      alt: "F5CODER Proof of Completion Web Development Internship"
    },
    {
      id: "cert-f5-offer",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-11",
      title: "F5CODER Web Development Offer Letter",
      event: "Internship Selection & Offer",
      issuer: "F5CODER & Ministry of MSME",
      date: "November 10, 2025",
      highlight: "Formal offer letter confirming selection for extended hands-on client development.",
      image: "assets/images/achievements/certificates/f5coders-internship-offer-letter.webp",
      width: 637,
      height: 845,
      alt: "F5CODER Internship Offer Letter"
    },
    {
      id: "cert-f5-python",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-12",
      title: "Intermediate Python — Proof of Completion",
      event: "Technical Skills Training",
      issuer: "F5CODER & Ministry of MSME",
      date: "December 5, 2025",
      highlight: "Completed intermediate Python concepts, data structures, and algorithmic scripting.",
      image: "assets/images/achievements/certificates/f5coders-intermediate-python.webp",
      width: 623,
      height: 440,
      alt: "F5CODER Intermediate Python Certificate"
    },
    {
      id: "cert-scopik-cert",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-13",
      title: "Python Developer Internship Certificate",
      event: "Corporate Technical Internship",
      issuer: "Scopik Edutech Pvt. Ltd.",
      date: "July 19, 2025",
      highlight: "Successfully completed internship training focusing on Python backend logic.",
      image: "assets/images/achievements/certificates/scopik-edutech-python-developer-internship.webp",
      width: 867,
      height: 703,
      alt: "Scopik Edutech Python Developer Internship Certificate"
    },
    {
      id: "cert-scopik-letter",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-14",
      title: "Scopik Edutech Internship Recommendation Letter",
      event: "Professional Testimonial Letter",
      issuer: "Scopik Edutech Pvt. Ltd.",
      date: "July 19, 2025",
      highlight: "Commendation letter from CEO noting dedication, punctuality, and REST API contributions.",
      image: "assets/images/achievements/certificates/scopik-edutech-internship-completion-letter.webp",
      width: 477,
      height: 710,
      alt: "Scopik Edutech Formal Internship Completion and Recommendation Letter"
    },
    {
      id: "cert-elewayte-internship",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-15",
      title: "Web Development Internship Certificate",
      event: "Hands-on Project Internship",
      issuer: "Elewayte & Wipro DICE ID",
      date: "November 24, 2024",
      highlight: "Verified internship program focused on HTML, CSS, JavaScript component building.",
      image: "assets/images/achievements/certificates/elewayte-web-development-internship.webp",
      width: 502,
      height: 717,
      alt: "Elewayte Certificate of Internship in Web Development"
    },
    {
      id: "cert-elewayte-course",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-16",
      title: "Web Development Course Completion",
      event: "Technical Course Completion",
      issuer: "Elewayte",
      date: "December 8, 2024",
      highlight: "Recognized for dedication in frontend web standards and interface workflows.",
      image: "assets/images/achievements/certificates/elewayte-web-development-completion.webp",
      width: 522,
      height: 707,
      alt: "Elewayte Certificate of Course Completion"
    },
    {
      id: "cert-naan-mudhalvan-java",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-17",
      title: "Java with Spring Boot Certification",
      event: "Naan Mudhalvan Scheme",
      issuer: "Tamil Nadu Skill Development Corp. & InLustro",
      date: "November 17, 2025",
      highlight: "State government sponsored engineering upskilling in Java and Spring Boot framework.",
      image: "assets/images/achievements/certificates/naan-mudhalvan-inlustro-java-spring-boot.webp",
      width: 987,
      height: 717,
      alt: "Naan Mudhalvan Java with Spring Boot Certificate"
    },
    {
      id: "cert-naan-mudhalvan-ebpl",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-18",
      title: "EBPL Professional Skills Certification",
      event: "Naan Mudhalvan Scheme",
      issuer: "Tamil Nadu Skill Development Corp. & HCL",
      date: "October 10, 2025",
      highlight: "Professional workplace skills and technical readiness training conducted by HCL.",
      image: "assets/images/achievements/certificates/naan-mudhalvan-hcl-ebpl-certificate.webp",
      width: 985,
      height: 691,
      alt: "Naan Mudhalvan HCL EBPL Certificate of Achievement"
    },
    {
      id: "cert-udemy-genai",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-19",
      title: "Master Generative AI with Java & Spring Boot",
      event: "Applied AI Integration",
      issuer: "Udemy (Instructor: Shabbir Dawoodi)",
      date: "June 27, 2025",
      highlight: "Spring AI implementation, LLM prompt orchestration, and intelligent backend services.",
      image: "assets/images/achievements/certificates/udemy-generative-ai-spring-boot.webp",
      width: 985,
      height: 736,
      alt: "Udemy Certificate: Master Generative AI with Java and Spring Boot"
    },
    {
      id: "cert-mamcet-mongodb",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-20",
      title: "MongoDB Workshop & Project Certificate",
      event: "Hands-on Database Workshop",
      issuer: "M.A.M College of Engineering & Technology",
      date: "March 14, 2026",
      highlight: "Constructed schemas, aggregation pipelines, and connected queries in MongoDB.",
      image: "assets/images/achievements/certificates/mamcet-mongodb-workshop.webp",
      width: 625,
      height: 438,
      alt: "MAMCET Workshop MongoDB Certificate of Appreciation"
    },
    {
      id: "cert-scripting-spider",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-21",
      title: "Web Development Internship Certificate",
      event: "Technical Internship",
      issuer: "Scripting Spider",
      date: "July 18, 2025",
      highlight: "Hands-on project work developing responsive client web modules.",
      image: "assets/images/achievements/certificates/scripting-spider-web-development-internship.webp",
      width: 515,
      height: 717,
      alt: "Scripting Spider Web Development Certificate of Internship"
    },
    {
      id: "cert-wadhwani-ignite",
      category: "certificates",
      categoryLabel: "Certificate",
      plateNumber: "PL-22",
      title: "Ignite Bootcamp — Venture Idea Development",
      event: "Entrepreneurship & Ideation Program",
      issuer: "Wadhwani Foundation & Global Entrepreneur",
      date: "March 17, 2026",
      highlight: "10 hours of intensive training in ideation, prototyping, and business modeling.",
      image: "assets/images/achievements/certificates/wadhwani-foundation-ignite-bootcamp.webp",
      width: 627,
      height: 446,
      alt: "Wadhwani Foundation Ignite Bootcamp Certificate"
    },

    // EVENTS & WORKSHOPS
    {
      id: "event-pragyan-mldl",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-23",
      title: "Machine Learning & Deep Learning Workshop",
      event: "Pragyan 2026 (International Techno-Managerial Fest)",
      issuer: "NIT Tiruchirappalli & GeeksforGeeks",
      date: "February 21, 2026",
      highlight: "Hands-on engineering workshop covering neural networks, deep learning pipelines, and model evaluation.",
      image: "assets/images/achievements/events/pragyan-2026-nit-trichy-ml-dl-workshop.webp",
      width: 630,
      height: 442,
      alt: "NIT Trichy Pragyan 2026 ML & DL Workshop Certificate"
    },
    {
      id: "event-pals-ibm-llm",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-24",
      title: "Systems for Large Language Models (LLMs)",
      event: "Industry-Assisted Lecture Series",
      issuer: "PALS & IBM India Research Lab Scientists",
      date: "February 2026",
      highlight: "Technical lectures delivered by IBM research scientists on training pipelines and GPU cluster systems.",
      image: "assets/images/achievements/events/pals-ibm-systems-for-llms.webp",
      width: 632,
      height: 447,
      alt: "PALS & IBM Research Lab Systems for LLMs Certificate"
    },
    {
      id: "event-zento-quiz",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-25",
      title: "ZENTO' 26 National Symposium — Technical Quiz",
      event: "National Level Technical Symposium",
      issuer: "Government College of Engineering, Thanjavur",
      date: "March 4, 2026",
      highlight: "Competed in engineering technical quiz covering algorithmic fundamentals and compute systems.",
      image: "assets/images/achievements/events/gce-thanjavur-zento26-technical-quiz.webp",
      width: 721,
      height: 542,
      alt: "GCE Thanjavur Zento 26 Technical Quiz Certificate"
    },
    {
      id: "event-mamcet-expo",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-26",
      title: "Project Expo 2026",
      event: "Departmental Engineering Expo",
      issuer: "M.A.M College of Engineering & Technology",
      date: "March 24, 2026",
      highlight: "Demonstrated live technical working prototype to academic faculty and industry evaluators.",
      image: "assets/images/achievements/events/mamcet-project-expo-2026.webp",
      width: 623,
      height: 448,
      alt: "MAMCET Project Expo 2026 Certificate of Participation"
    },
    {
      id: "event-mount-zion",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-27",
      title: "TECHQUEST-2024 National Symposium",
      event: "Technical Symposium",
      issuer: "Mount Zion College of Engineering and Technology",
      date: "October 16, 2024",
      highlight: "Participated in university level symposium on computational technologies and coding.",
      image: "assets/images/achievements/events/mount-zion-techquest-2024-symposium.webp",
      width: 997,
      height: 517,
      alt: "TECHQUEST-2024 Certificate of Participation"
    },
    {
      id: "event-pals-speaker",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-28",
      title: "Entrepreneur Speaks Virtual Session",
      event: "PALS Industry Series",
      issuer: "PALS & Typof / SMEPay",
      date: "August 12, 2025",
      highlight: "Interactive virtual keynote on technical startup ideation with founder & CTO Trilocahan Parida.",
      image: "assets/images/achievements/events/pals-entrepreneur-speaks-session.webp",
      width: 1277,
      height: 893,
      alt: "PALS Entrepreneur Speaks Session Certificate"
    },
    {
      id: "event-skill-dunia",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-29",
      title: "Career Guidance Webinar",
      event: "Career & Technology Roadmap",
      issuer: "Skill Dunia & E-Cell IIT Hyderabad",
      date: "May 9, 2025",
      highlight: "Participated in career guidance session on tech industry trajectories and software engineering skills.",
      image: "assets/images/achievements/events/skill-dunia-e-cell-iit-hyderabad-webinar.webp",
      width: 627,
      height: 378,
      alt: "Skill Dunia & E-Cell IIT Hyderabad Webinar Certificate"
    },
    {
      id: "event-bhumi-volunteer",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-30",
      title: "World Environment Day Campaign Volunteering",
      event: "Youth Civic Impact",
      issuer: "Bhumi, UNICEF & YuWaah",
      date: "June 2024",
      highlight: "Volunteered in civic environmental campaign under UNICEF & YuWaah umbrella.",
      image: "assets/images/achievements/events/bhumi-world-environment-day-volunteering.webp",
      width: 632,
      height: 445,
      alt: "Bhumi World Environment Day Volunteering Certificate"
    },
    {
      id: "event-karpagam-quiz",
      category: "events",
      categoryLabel: "Event & Workshop",
      plateNumber: "PL-31",
      title: "Knowledge Quiz Series on Electric Vehicles - XI",
      event: "State Level Technical Knowledge Series",
      issuer: "Karpagam College of Engineering, Coimbatore",
      date: "October 15, 2023",
      highlight: "Technical quiz series testing knowledge of electrical powertrains and EV infrastructure.",
      image: "assets/images/achievements/events/karpagam-college-electric-vehicles-quiz.webp",
      width: 625,
      height: 351,
      alt: "Karpagam College EV Knowledge Quiz Certificate"
    },
    ...featuredCredentials.map((credential, index) => ({
      ...credential,
      categoryLabel: credential.type,
      plateNumber: `PL-${String(index + 32).padStart(2, "0")}`
    }))
  ]
};

// Freeze data to prevent mutations
if (typeof Object.freeze === "function") {
  Object.freeze(PORTFOLIO_DATA);
}

export default PORTFOLIO_DATA;
