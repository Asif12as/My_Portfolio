import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionTitle from '../components/SectionTitle';
import { Code, Server, Database, GitBranch, Layers } from 'lucide-react';

interface AboutSectionProps {
  id: string;
  onVisible: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ id, onVisible }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [isVisible, onVisible]);
  
  const services = [
    {
      icon: <Code size={24} />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive web applications using React, Angular TypeScript, Bootstrap and modern frontend technologies.'
    },
    {
      icon: <Server size={24} />,
      title: 'Backend Development',
      description: 'Developing robust server-side applications and RESTful APIs using SpringBoot, Hibernate, Node.js, Express, MySQL and MongoDB.'
    },
    {
      icon: <Database size={24} />,
      title: 'Database Design',
      description: 'Designing and implementing efficient database schemas using MongoDB and MySQL.'
    },
    {
      icon: <GitBranch size={24} />,
      title: 'Version Control',
      description: 'Proficient in Git and GitHub for version control and collaborative development.'
    },
    {
      icon: <Layers size={24} />,
      title: 'Full Stack Solutions',
      description: 'Delivering end-to-end web applications with integrated frontend, backend, and database components.'
    },
  ];

  return (
    <section 
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="About Me" 
          subtitle="Software Development Engineer with expertise in full-stack development" 
        />
        
        <div className="flex flex-col md:flex-row gap-12 mt-12">
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              My Background
            </h3>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                I am a Software Development Engineer, I work on building scalable web applications
                using modern technologies like React, Angular, SpringBoot, Hibernate, Node.js, MySQL, and MongoDB.
              </p>
              <p>
                I graduated with a degree in Computer Science and Engineering from Vel Tech Rangarajan Dr.Sagunthala R&D Institute of Science and Technology,
                where I developed a strong foundation in computer science fundamentals and software engineering principles.
              </p>
              <p>
               My experience spans multiple domains including frontend development for a Canadian startup, AI training and evaluation for advanced models, blockchain development with Ethereum, and full-stack Java application development. I've built diverse projects ranging from Enterprise Database Migration Tools to responsive e-commerce platforms. I thrive in fast-paced environments, passionate about embracing new technologies and solving complex problems across different technical domains.
              </p>
              <p>
                I believe in writing clean, maintainable code and following best practices. I enjoy working in collaborative
                environments and contributing to team success through effective communication and problem-solving skills.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              What I Do
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-400 rounded-lg mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">
                    {service.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
