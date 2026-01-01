import React from 'react';
import { Server, Globe, Rocket, Database, Terminal, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();
  const { isDark } = useTheme();

  const experiences = [
    {
      icon: Globe,
      tech: ["React", "TypeScript", "Modern Web"]
    },
    {
      icon: Rocket,
      tech: ["FinTech", "Secure Payments", "Scalability"]
    },
    {
      icon: Server,
      tech: ["Linux", "Nginx", "Security"]
    },
    {
      icon: Layers,
      tech: ["CMS", "Performance", "Plugins"]
    },
    {
      icon: Database,
      tech: ["PHP", "Legacy Systems", "Integration"]
    },
    {
      icon: Terminal,
      tech: ["REST", "GraphQL", "Microservices"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-16 animate-fade-in text-center md:text-left">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 font-mono transition-colors ${
              isDark ? 'text-slate-100' : 'text-gray-900'
            }`}>
                {t.experience.title} <span className="text-blue-500">{t.experience.titleHighlight}</span>
            </h1>
            <p className={`text-xl max-w-2xl transition-colors ${
              isDark ? 'text-slate-400' : 'text-gray-600'
            }`}>
                {t.experience.subtitle}
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 animate-slide-up-delay-1">
            {experiences.map((exp, index) => {
                // Ensure we access the translated item safely
                const translatedItem = t.experience.items[index];

                return (
                    <div 
                        key={index}
                        className={`group relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden flex flex-col ${
                          isDark 
                            ? 'bg-slate-900 border-slate-800 hover:border-blue-500/50' 
                            : 'bg-white border-gray-200 hover:border-blue-500/50'
                        }`}
                    >
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
                        
                        <div className="flex items-start space-x-6">
                            <div className={`flex-shrink-0 p-4 rounded-xl border transition-colors duration-300 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 ${
                              isDark 
                                ? 'bg-slate-800/50 border-slate-700/50' 
                                : 'bg-gray-100/50 border-gray-300/50'
                            }`}>
                                <exp.icon className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className={`text-xl font-bold mb-2 font-mono group-hover:text-blue-400 transition-colors duration-300 ${
                                  isDark ? 'text-slate-100' : 'text-gray-900'
                                }`}>
                                    {translatedItem ? translatedItem.title : "Unknown Title"}
                                </h3>
                                <p className={`mb-6 leading-relaxed font-light transition-colors ${
                                  isDark ? 'text-slate-400' : 'text-gray-600'
                                }`}>
                                    {translatedItem ? translatedItem.description : "No description available."}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {exp.tech.map((tItem, i) => (
                                        <span key={i} className={`text-xs font-mono px-2.5 py-1 rounded-md border transition-all duration-300 group-hover:border-blue-500/30 ${
                                          isDark 
                                            ? 'bg-slate-950 border-slate-800 text-slate-500 group-hover:text-blue-300' 
                                            : 'bg-gray-50 border-gray-300 text-gray-600 group-hover:text-blue-600'
                                        }`}>
                                            {tItem}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  );
};

export default Experience;
