import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, TerminalSquare, Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.experience, path: '/experience' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <TerminalSquare className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            <span className="font-mono font-bold text-lg tracking-tight text-slate-100 group-hover:text-blue-400 transition-colors">buildapptech.dev</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-md text-sm font-medium font-mono transition-all duration-200 ${
                    isActive
                      ? 'text-blue-400 bg-blue-500/10'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Language Toggle Desktop */}
            <div className="ml-4 pl-4 border-l border-slate-800">
                <button 
                    onClick={toggleLanguage}
                    className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700 hover:border-blue-500/50 transition-colors group"
                >
                    <Languages className="w-4 h-4 text-slate-400 group-hover:text-blue-400" />
                    <span className="text-xs font-mono font-semibold text-slate-300 group-hover:text-white w-5 text-center">
                        {language === 'en' ? 'EN' : 'ID'}
                    </span>
                </button>
            </div>
          </div>

          {/* Mobile Menu Button & Language Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono font-bold text-slate-300"
            >
                {language === 'en' ? 'EN' : 'ID'}
            </button>

            <button
              onClick={toggleMenu}
              className="text-slate-400 hover:text-slate-100 focus:outline-none p-2 rounded-md hover:bg-slate-800"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 absolute w-full z-50 animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium font-mono ${
                    isActive
                      ? 'bg-blue-500/10 text-blue-400'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;