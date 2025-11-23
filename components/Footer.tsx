import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          <div className="text-center md:text-left">
            <p className="text-slate-500 text-sm font-mono">
              &copy; {currentYear} zumar.dev
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-200">
              <span className="sr-only">GitHub</span>
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-200">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-200">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:hello@example.com" className="text-slate-500 hover:text-blue-400 transition-colors transform hover:-translate-y-1 duration-200">
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