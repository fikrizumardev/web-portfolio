import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, TerminalSquare, Languages, Sun, Moon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const { theme: _theme, toggleTheme, isDark } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.experience, path: '/experience' },
    // { label: t.nav.projects, path: '/projects' },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full backdrop-blur-md border-b transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-950/80 border-slate-800' 
        : 'bg-white/80 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 group" onClick={closeMenu}>
            <TerminalSquare className="h-6 w-6 text-blue-500 group-hover:text-blue-400 transition-colors duration-300" />
            <span className={`font-mono font-bold text-lg tracking-tight group-hover:text-blue-400 transition-colors ${
              isDark ? 'text-slate-100' : 'text-gray-900'
            }`}>
              buildapptech.dev
            </span>
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
                      : isDark
                        ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            
            {/* Controls Desktop */}
            <div className={`ml-4 pl-4 border-l flex items-center gap-3 ${
              isDark ? 'border-slate-800' : 'border-gray-200'
            }`}>
              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className={`flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 group ${
                  isDark 
                    ? 'bg-slate-900 border-slate-700 hover:border-blue-500/50 text-slate-400 hover:text-blue-400' 
                    : 'bg-gray-100 border-gray-300 hover:border-blue-500/50 text-gray-600 hover:text-blue-500'
                }`}
                title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                {isDark ? (
                  <Sun className="w-4 h-4 transition-transform group-hover:rotate-12" />
                ) : (
                  <Moon className="w-4 h-4 transition-transform group-hover:-rotate-12" />
                )}
              </button>

              {/* Language Toggle */}
              <button 
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border transition-colors group ${
                  isDark 
                    ? 'bg-slate-900 border-slate-700 hover:border-blue-500/50' 
                    : 'bg-gray-100 border-gray-300 hover:border-blue-500/50'
                }`}
              >
                <Languages className={`w-4 h-4 transition-colors ${
                  isDark 
                    ? 'text-slate-400 group-hover:text-blue-400' 
                    : 'text-gray-600 group-hover:text-blue-500'
                }`} />
                <span className={`text-xs font-mono font-semibold w-5 text-center transition-colors ${
                  isDark 
                    ? 'text-slate-300 group-hover:text-white' 
                    : 'text-gray-700 group-hover:text-gray-900'
                }`}>
                  {language === 'en' ? 'EN' : 'ID'}
                </span>
              </button>
            </div>
          </div>

          {/* Mobile Controls & Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Theme Toggle Mobile */}
            <button 
              onClick={toggleTheme}
              className={`flex items-center justify-center w-8 h-8 rounded-full border text-xs font-mono font-bold transition-colors ${
                isDark 
                  ? 'bg-slate-900 border-slate-700 text-slate-300' 
                  : 'bg-gray-100 border-gray-300 text-gray-700'
              }`}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            {/* Language Toggle Mobile */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center justify-center w-8 h-8 rounded-full border text-xs font-mono font-bold transition-colors ${
                isDark 
                  ? 'bg-slate-900 border-slate-700 text-slate-300' 
                  : 'bg-gray-100 border-gray-300 text-gray-700'
              }`}
            >
              {language === 'en' ? 'EN' : 'ID'}
            </button>

            {/* Menu Button */}
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none transition-colors ${
                isDark 
                  ? 'text-slate-400 hover:text-slate-100 hover:bg-slate-800' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className={`md:hidden border-b absolute w-full z-50 animate-fade-in transition-colors ${
          isDark 
            ? 'bg-slate-900 border-slate-800' 
            : 'bg-white border-gray-200'
        }`}>
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-3 py-3 rounded-md text-base font-medium font-mono transition-colors ${
                    isActive
                      ? 'bg-blue-500/10 text-blue-400'
                      : isDark
                        ? 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
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