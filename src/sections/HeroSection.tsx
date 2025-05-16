import React, { useEffect } from 'react';
import { ArrowRight, Download, Github } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface HeroSectionProps {
  id: string;
  onVisible: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ id, onVisible }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.3 });

  useEffect(() => {
    if (isVisible) {
      onVisible();
    }
  }, [isVisible, onVisible]);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/10INwQbvKh4xMBrJzEE6EFtd1z9NNj3Qj/view?usp=sharing', '_blank');
  };

  return (
    <section 
      id={id}
      ref={ref as React.RefObject<HTMLElement>} 
      className="min-h-screen flex items-center py-16 bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-2/5 mb-8 md:mb-0 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-indigo-600 dark:border-indigo-500 shadow-xl">
                <img 
                  src="/profile.jpg" 
                  alt="Md Ashif" 
                  className="w-full h-full object-cover"
                  loading="eager"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-teal-500 text-white text-sm font-bold py-2 px-4 rounded-full shadow-lg transform hover:scale-105 transition-transform">
                Available for Hire
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 md:pl-12">
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                Hi, I'm <span className="text-teal-600 dark:text-teal-400">Md Ashif</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                Software Development Engineer
              </h2>
              <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
                Full Stack Developer with expertise in React,Spring Boot, Hibernate, Angular, Node.js, and MySQL. 
                Passionate about building scalable web applications, AI Integration and solving complex problems.
              </p>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button
                  onClick={handleContactClick}
                  className="bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transition-colors duration-300"
                >
                  <span>Get in Touch</span>
                  <ArrowRight size={20} className="ml-2" />
                </button>
                <button
                  onClick={handleResumeDownload}
                  className="bg-white hover:bg-gray-100 text-indigo-600 font-bold py-3 px-6 rounded-lg shadow-md border border-indigo-200 flex items-center transition-colors duration-300 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-indigo-400 dark:border-gray-700"
                >
                  <span>Download Resume</span>
                  <Download size={20} className="ml-2" />
                </button>
                <a
                  href="https://github.com/Asif12as"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-lg shadow-md flex items-center transition-colors duration-300 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <span>GitHub</span>
                  <Github size={20} className="ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
