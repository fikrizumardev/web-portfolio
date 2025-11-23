import React from 'react';
import { Terminal } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();

  const skills = [
    { category: t.about.categories.backend, items: ['PHP', 'Laravel', 'CodeIgniter', 'MySQL'] },
    { category: t.about.categories.frontend, items: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Tailwind', 'Livewire'] },
    { category: t.about.categories.tools, items: ['Git', 'Docker', 'Linux Server', 'Nginx/Apache', 'Cloudflare'] },
    { category: t.about.categories.others, items: ['REST API', 'WordPress Plugin/Theme Dev', 'Payment Gateway', 'ERP Customization'] },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      
      {/* Info Column - Centered */}
      <div className="opacity-0 animate-slide-up">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-mono">
          {t.about.title} <span className="text-blue-500">{t.about.titleHighlight}</span>
        </h1>
        <div className="prose prose-lg text-slate-400 mb-10 prose-invert max-w-none">
          <p className="mb-4">{t.about.p1}</p>
          <p className="mb-4">{t.about.p2}</p>
          <p>{t.about.p3}</p>
        </div>

        <div className="space-y-6">
          <h3 className="text-lg font-bold text-slate-200 font-mono flex items-center border-b border-slate-800 pb-2">
            <Terminal className="w-5 h-5 mr-2 text-blue-500" />
            {t.about.techStack}
          </h3>
          <div className="space-y-4 pt-2">
              {skills.map((skillGroup, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-start pb-4">
                      <span className="w-32 text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2 sm:mb-0 font-mono pt-1">{skillGroup.category}</span>
                      <div className="flex flex-wrap gap-2 flex-1">
                          {skillGroup.items.map((skill) => (
                              <span key={skill} className="px-3 py-1 bg-slate-900 border border-slate-800 rounded text-sm text-blue-300 font-mono shadow-sm hover:border-blue-500/50 transition-colors cursor-default">
                                  {skill}
                              </span>
                          ))}
                      </div>
                  </div>
              ))}
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default About;
