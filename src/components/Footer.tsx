import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-bold text-xl mb-2">
              <span className="text-teal-600 dark:text-teal-400">Md</span>
              <span className="text-indigo-600 dark:text-indigo-400">Ashif</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Building scalable web applications with modern technologies
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="mailto:mda957947@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Mail size={20} />
              </a>
              <a href="https://www.linkedin.com/in/ashif-49039b207" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://github.com/Asif12as" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                <Github size={20} />
              </a>
            </div>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} Md Ashif. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;