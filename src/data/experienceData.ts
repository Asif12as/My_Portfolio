export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  technologies: string[];
}

const experienceData: Experience[] = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Pactfolio",
    location: "Remote (Canada-based Startup)",
    startDate: "Mar 2025",
    endDate: "Jun 2025",
    description: [
      "Handled the complete merchant application development for a Canadian startup",
      "Worked in a fast-paced startup environment requiring quick adaptation and delivery",
      "Developed responsive and intuitive user interfaces for merchant-facing applications",
      "Collaborated on business proposals, technical documentation and idea generation",
      "Gained valuable experience working in complex environments with tight deadlines"
    ],
    technologies: ["React.js", "JavaScript", "Bootstrap", "CSS", "HTML", "Git", "Technical Documentation"]
  },
  
  {
    id: 3,
    role: "Java Full-Stack Development Training",
    company: "Edubridge",
    location: "India",
    startDate: "Aug 2024",
    endDate: "Dec 2024",
    description: [
      "Completed a rigorous Java Full-Stack Development program, mastering Spring Boot, Angular, database management, and modern web application development",
      "Engineered full-stack applications, integrating scalable backend logic, API development, database structures, and dynamic front-end interfaces",
      "Designed and deployed robust applications using industry-standard frameworks, adhering to best coding practices for maintainability and efficiency"
    ],
    technologies: ["Java", "Spring Boot", "Angular", "Hibernate", "MySQL", "JDBC", "JSP", "Servlets", "HTML", "CSS", "TypeScript"]
  },
 
  {
    id: 5,
    role: "Advanced AI Trainer",
    company: "Invisible Technologies",
    location: "Remote",
    startDate: "Oct 2023",
    endDate: "Mar 2024",
    description: [
      "Executed comprehensive RLHF evaluations for over 1,000 AI model responses in Gemini SxS, ensuring superior accuracy and task alignment",
      "Refined over 500 AI-generated responses as a Response Clean-Up Agent to enhance clarity, coherence, and user engagement",
      "Optimized AI outputs by analyzing inconsistencies, implementing quality improvements, and strengthening model reliability",
      "Focused on refining model responses to improve overall performance, ensuring a seamless and effective user experience"
    ],
    technologies: ["RLHF", "AI Evaluation", "Python", "PyTorch", "React.js", "FastAPI", "Prompt Engineering", "LLM Fine-tuning"
]
  },
  {
    id: 6,
    role: "Blockchain Developer Intern",
    company: "KARTEXA",
    location: "Remote",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    description: [
      "Developed and implemented blockchain solutions using Ethereum and smart contracts",
      "Collaborated on decentralized application (dApp) development and integration",
      "Implemented secure transaction protocols and wallet functionalities",
      "Participated in code reviews and blockchain architecture planning",
      "Gained hands-on experience with blockchain consensus mechanisms and distributed ledger technology"
    ],
    technologies: ["Blockchain", "Ethereum", "Smart Contracts", "Solidity", "Web3.js", "Truffle", "Ganache", "Metamask", "JavaScript"]
  }
];

export default experienceData;