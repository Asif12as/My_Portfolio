// projectsData.ts

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  category: 'frontend' | 'backend' | 'fullstack' | 'mobile' | 'ai';
  githubLink: string;
  demoLink: string;
  featured: boolean;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Enterprise Database Migration Tool",
    description: "A robust tool designed for seamless migration of enterprise databases, ensuring data integrity and minimal downtime during transitions.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    technologies: ["Java", "Spring Boot", "MySQL", "PostgreSQL", "MongoDB", "Docker", "REST API"],
    category: "backend",
    githubLink: "https://github.com/Asif12as/EnterpriseDBMigrator_Tool",
    demoLink: "https://github.com/Asif12as/EnterpriseDBMigrator_Tool",
    featured: true
  },
  {
    id: 2,
    title: "DLP Chrome Extension",
    description: "A Chrome extension for Data Loss Prevention that helps protect sensitive information while browsing.",
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg",
    technologies: ["JavaScript", "HTML", "CSS", "Chrome Extensions API"],
    category: "frontend",
    githubLink: "https://github.com/Asif12as/DLP_Chrome_Extension",
    demoLink: "https://github.com/Asif12as/DLP_Chrome_Extension",
    featured: true
  },
  {
    id: 3,
    title: "Live Poll Battle",
    description: "A real-time polling app with live updates, vote tracking, analytics, and winner celebrations for interactive voting.",
    image: "https://images.pexels.com/photos/7054528/pexels-photo-7054528.jpeg",
    technologies: ["React", "Node.js", "Express", "Socket.io", "Chart.js", "WebSockets"],
    category: "fullstack",
    githubLink: "https://github.com/Asif12as/Live_Poll_Battle",
    demoLink: "https://livepollbattle.vercel.app/",
    featured: true
  },
  {
    id: 4,
    title: "OwN IT E-Commerce",
    description: "A full-featured e-commerce platform with product management, user authentication, and payment processing.",
    image: "https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    category: "fullstack",
    githubLink: "https://github.com/Asif12as/OwN-IT--E-Commerce",
    demoLink: "https://github.com/Asif12as/OwN-IT--E-Commerce",
    featured: true
  },
  {
    id: 5,
    title: "ASD Early Detection System",
    description: "An AI-powered system for early detection of Autism Spectrum Disorder using machine learning algorithms.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    technologies: ["Python", "Machine Learning", "TensorFlow", "OpenCV"],
    category: "ai",
    githubLink: "https://github.com/Asif12as/ASD_Early_Detection_System",
    demoLink: "https://github.com/Asif12as/ASD_Early_Detection_System",
    featured: true
  },
  {
    id: 6,
    title: "E-Commerce Microservices Architecture",
    description: "A modern distributed system with API Gateway, rate limiting, caching, and scalable microservices for e-commerce.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Docker", "JWT", "Swagger"],
    category: "backend",
    githubLink: "https://github.com/Asif12as/E-Commerce_Microservices",
    demoLink: "https://github.com/Asif12as/E-Commerce_Microservices",
    featured: true
  }
];

export default projectsData;