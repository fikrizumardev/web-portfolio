import React from 'react';
import ProjectCard from '../components/ProjectCard';
import { Project } from '../types';

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers. Features real-time data visualization using D3.js, inventory management, and sales reporting. Built with performance and accessibility in mind.",
    tags: ["React", "TypeScript", "Tailwind", "D3.js"],
    imageUrl: "https://picsum.photos/seed/dashboard/800/600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
  {
    id: 2,
    title: "Task Master App",
    description: "A collaborative project management tool inspired by Kanban boards. Supports drag-and-drop functionality, real-time updates via WebSockets, and team permissions.",
    tags: ["Next.js", "Supabase", "Framer Motion"],
    imageUrl: "https://picsum.photos/seed/task/800/600",
    repoUrl: "https://github.com",
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An interface interacting with LLMs to generate marketing copy. Includes tone adjustment, history saving, and direct export to CMS platforms.",
    tags: ["React", "OpenAI API", "Node.js"],
    imageUrl: "https://picsum.photos/seed/ai/800/600",
    demoUrl: "https://example.com",
  },
  {
    id: 4,
    title: "Weather Pivot",
    description: "A hyper-local weather forecasting app using geolocation API. Provides hourly forecasts, severe weather alerts, and historical climate data comparisons.",
    tags: ["Vue.js", "WeatherAPI", "Chart.js"],
    imageUrl: "https://picsum.photos/seed/weather/800/600",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 font-mono">Featured <span className="text-blue-500">Projects</span></h1>
        <p className="text-xl text-slate-400 max-w-2xl">
          A collection of projects I've worked on, ranging from web applications to open-source libraries.
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