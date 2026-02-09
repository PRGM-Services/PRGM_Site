import React, { useState } from 'react';
import { ExternalLink, Github, Folder, ArrowUpRight } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  links: {
    demo?: string;
    github?: string;
  };
  year: string;
}

const projects: Project[] = [
  {
    id: "01",
    title: "GenSYS AI",
    description: "Next-generation AI architecture for 3D design workflows. Built with privacy-first zero-knowledge architecture and universal framework integration.",
    tags: ["AI/ML", "3D Graphics", "TypeScript", "Python", "C++"],
    links: {
    },
    year: "2025"
  },
  {
    id: "02",
    title: "Glide AI IDE",
    description: "Creating the next generation of AI IDEs for developers. To solve all the pain points of the current AI enabled IDEs.",
    tags: ["Dart", "Flutter", "AI"],
    links: {
    },
    year: "2026"
  }
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative border border-prgm-border bg-prgm-dark hover:border-white transition-all duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header with ID and Year */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-prgm-border bg-black/50">
        <div className="flex items-center gap-3">
          <Folder className="w-4 h-4 text-prgm-muted group-hover:text-white transition-colors" />
          <span className="text-xs font-mono text-prgm-muted">PROJECT_{project.id}</span>
        </div>
        <span className="text-xs font-mono text-prgm-muted">{project.year}</span>
      </div>

      {/* Content */}
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-sans font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
          {project.title}
        </h3>
        
        <p className="text-prgm-muted font-mono text-sm leading-relaxed mb-6 min-h-[80px]">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, i) => (
            <span 
              key={i}
              className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider border border-prgm-border text-prgm-muted group-hover:border-white/50 group-hover:text-white/70 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-4 border-t border-prgm-border">
          {project.links.demo && (
            <a 
              href={project.links.demo}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-prgm-muted hover:text-white transition-colors group/link"
            >
              <ExternalLink className="w-3 h-3" />
              <span>Live Demo</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          )}
          {project.links.github && (
            <a 
              href={project.links.github}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-prgm-muted hover:text-white transition-colors group/link"
            >
              <Github className="w-3 h-3" />
              <span>Source</span>
              <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
            </a>
          )}
        </div>
      </div>

      {/* Corner accents on hover */}
      <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.01] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 animate-scan"></div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <section className="py-32 bg-black border-b border-prgm-border" id="projects">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-prgm-border pb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-white animate-pulse"></span>
              <span className="text-xs font-mono text-prgm-muted uppercase tracking-widest">Selected Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tighter">
              PROJECTS
            </h2>
            <p className="text-prgm-muted font-mono">
              &gt;&gt; Recent builds and experiments.
            </p>
          </div>
          <div className="font-mono text-xs text-prgm-muted mt-4 md:mt-0">
            [ DISPLAYING_4_ITEMS ]
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com/PRGM-Services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-prgm-border text-xs font-mono uppercase tracking-widest text-prgm-muted hover:text-white hover:border-white transition-all group"
          >
            <Github className="w-4 h-4" />
            <span>View All Projects on GitHub</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
