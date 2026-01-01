import React from 'react';
import { Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { isDark } = useTheme();

  return (
    <footer className={`border-t py-12 mt-auto transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-950 border-slate-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <p className={`text-sm font-mono transition-colors ${
              isDark ? 'text-slate-500' : 'text-gray-500'
            }`}>
              &copy; {currentYear} buildapptech.dev
            </p>
          </div>

          <div className="flex space-x-6">
            <a 
              href="mailto:buildapptech@gmail.com" 
              className={`transition-all duration-200 transform hover:-translate-y-1 ${
                isDark 
                  ? 'text-slate-500 hover:text-blue-400' 
                  : 'text-gray-500 hover:text-blue-500'
              }`}
            >
              <span className="sr-only">Email</span>
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;