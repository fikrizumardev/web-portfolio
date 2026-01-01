import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isDark } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen font-sans transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-950 text-slate-200' 
        : 'bg-gray-50 text-gray-900'
    }`}>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;