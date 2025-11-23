import React from 'react';
import { Server, Globe, Rocket, Database, Terminal, Layers } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Experience: React.FC = () => {
  const { t } = useLanguage();

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
            <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-mono">
                {t.experience.title} <span className="text-blue-500">{t.experience.titleHighlight}</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl">
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
                        className="group relative p-8 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1 overflow-hidden flex flex-col"
                    >
                        {/* Decorative background glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl -z-10 group-hover:bg-blue-500/10 transition-colors duration-500"></div>
                        
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0 p-4 bg-slate-800/50 rounded-xl border border-slate-700/50 group-hover:border-blue-500/30 group-hover:bg-blue-500/10 transition-colors duration-300">
                                <exp.icon className="w-8 h-8 text-blue-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-100 mb-2 font-mono group-hover:text-blue-400 transition-colors duration-300">
                                    {translatedItem ? translatedItem.title : "Unknown Title"}
                                </h3>
                                <p className="text-slate-400 mb-6 leading-relaxed font-light">
                                    {translatedItem ? translatedItem.description : "No description available."}
                                </p>
                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {exp.tech.map((tItem, i) => (
                                        <span key={i} className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-500 group-hover:text-blue-300 group-hover:border-blue-500/30 transition-all duration-300">
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
