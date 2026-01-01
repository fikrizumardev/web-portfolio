import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const { t } = useLanguage();

  return (
    <div className="group bg-slate-900 rounded-xl overflow-hidden border border-slate-800 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col h-full hover:-translate-y-1">
      <div className="relative overflow-hidden aspect-[16/9] bg-slate-800 group">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/40 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100 backdrop-blur-[2px]">
            <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {project.demoUrl && (
                    <a 
                      href={project.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-blue-600 rounded-full text-white hover:bg-blue-500 transition-colors shadow-lg shadow-blue-500/30"
                      title={t.projects.viewDemo}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </a>
                )}
                {project.repoUrl && (
                    <a 
                      href={project.repoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="p-3 bg-slate-800 rounded-full text-white hover:bg-slate-700 transition-colors border border-slate-600"
                      title={t.projects.viewCode}
                    >
                        <Github className="w-5 h-5" />
                    </a>
                )}
            </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col relative">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center space-x-2 text-xs font-semibold text-blue-400 uppercase tracking-wider mb-2">
            <Code className="w-4 h-4" />
            <span>Project</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-blue-400 transition-colors font-mono">
          {project.title}
        </h3>

        <p className="text-slate-400 mb-6 text-sm leading-relaxed flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-slate-800/50 text-blue-200 text-xs font-mono font-medium rounded border border-slate-700/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;