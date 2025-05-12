import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionTitle from '../components/SectionTitle';
import skillsData from '../data/skillsData';

interface SkillsSectionProps {
  id: string;
  onVisible: () => void;
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ id, onVisible }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [isVisible, onVisible]);

  return (
    <section 
      id={id}
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Technical Skills" 
          subtitle="My tech stack and areas of expertise" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {skillsData.map((category, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                {category.name}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <div 
                            key={index}
                            className={`w-2 h-2 rounded-full mx-0.5 ${
                              index < skill.level 
                                ? 'bg-teal-500 dark:bg-teal-400' 
                                : 'bg-gray-200 dark:bg-gray-700'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div 
                        className="bg-teal-600 dark:bg-teal-500 h-2.5 rounded-full" 
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;