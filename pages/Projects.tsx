import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';
import { useLanguage } from '../context/LanguageContext';

const Projects: React.FC = () => {
  const { t } = useLanguage();

  const projectsData: Project[] = [
    {
      id: 1,
      title: t.projects.projects[0].title,
      description: t.projects.projects[0].description,
      tags: ["React", "TypeScript", "Tailwind", "D3.js"],
      imageUrl: "https://picsum.photos/seed/dashboard/800/600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 2,
      title: t.projects.projects[1].title,
      description: t.projects.projects[1].description,
      tags: ["Next.js", "Supabase", "Framer Motion"],
      imageUrl: "https://picsum.photos/seed/task/800/600",
      repoUrl: "https://github.com",
    },
    {
      id: 3,
      title: t.projects.projects[2].title,
      description: t.projects.projects[2].description,
      tags: ["React", "OpenAI API", "Node.js"],
      imageUrl: "https://picsum.photos/seed/ai/800/600",
      demoUrl: "https://example.com",
    },
    {
      id: 4,
      title: t.projects.projects[3].title,
      description: t.projects.projects[3].description,
      tags: ["Vue.js", "WeatherAPI", "Chart.js"],
      imageUrl: "https://picsum.photos/seed/weather/800/600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 5,
      title: t.projects.projects[4].title,
      description: t.projects.projects[4].description,
      tags: ["Laravel", "MySQL", "Vue.js", "Stripe"],
      imageUrl: "https://picsum.photos/seed/restaurant/800/600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
    {
      id: 6,
      title: t.projects.projects[5].title,
      description: t.projects.projects[5].description,
      tags: ["React", "Node.js", "MongoDB", "Socket.io"],
      imageUrl: "https://picsum.photos/seed/learning/800/600",
      demoUrl: "https://example.com",
      repoUrl: "https://github.com",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-mono">
          {t.projects.title} <span className="text-blue-500">{t.projects.titleHighlight}</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          {t.projects.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up-delay-1">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;