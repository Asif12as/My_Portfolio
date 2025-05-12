import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import SectionTitle from '../components/SectionTitle';
import experienceData from '../data/experienceData';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceSectionProps {
  id: string;
  onVisible: () => void;
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ id, onVisible }) => {
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
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Work Experience" 
          subtitle="My professional journey and roles" 
        />
        
        <div className="relative mt-12">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>
          
          {/* Experience Items */}
          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-600 dark:bg-indigo-500 border-4 border-white dark:border-gray-900"></div>
                
                <div className={`md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:ml-auto' : 'md:pl-12'
                } relative`}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 sm:mb-0">
                        {experience.role}
                      </h3>
                      <div className="flex items-center text-teal-600 dark:text-teal-400 text-sm font-medium">
                        <Calendar size={16} className="mr-1" />
                        <span>{experience.startDate} - {experience.endDate}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center mb-4">
                      <h4 className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mr-2">
                        {experience.company}
                      </h4>
                      <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>{experience.location}</span>
                      </div>
                    </div>
                    
                    <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700 dark:text-gray-300">
                      {experience.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {experience.technologies.map((tech, i) => (
                        <span 
                          key={i}
                          className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-300 text-xs font-medium px-2.5 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;