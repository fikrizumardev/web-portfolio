import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Layout>
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;