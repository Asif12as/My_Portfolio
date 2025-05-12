export interface SkillCategory {
  name: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number; // 1-5 where 5 is expert
  icon?: string;
}

const skillsData: SkillCategory[] = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 4 },
      { name: "Python", level: 4 },
      { name: "Java", level: 4 },
      { name: "C++", level: 3 },
      { name: "TypeScript", level: 4 }
    ]
  },
  {
    name: "Frontend Development",
    skills: [
      { name: "React", level: 4 },
      { name: "HTML5", level: 4 },
      { name: "CSS3", level: 4 },
      { name: "Redux", level: 3 },
      { name: "Tailwind CSS", level: 4 }
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 4 },
      { name: "Express", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "MySQL", level: 3 },
      { name: "RESTful APIs", level: 4 }
    ]
  },
  {
    name: "Tools & Technologies",
    skills: [
      { name: "Git", level: 4 },
      { name: "Docker", level: 3 },
      { name: "VS Code", level: 4 },
      { name: "Chrome DevTools", level: 4 },
      { name: "Postman", level: 4 }
    ]
  }
];

export default skillsData;