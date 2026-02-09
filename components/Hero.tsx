import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from './Button';

interface HeroProps {
  onScrollToProjects: () => void;
}

// Hacker text scramble effect
const useScrambleText = (text: string, speed: number = 50) => {
  const [displayedText, setDisplayedText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_#@[]';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayedText(
        text
          .split('')
          .map((letter, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 2;
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return displayedText;
};

export const Hero: React.FC<HeroProps> = ({ onScrollToProjects }) => {
  const headline = useScrambleText("FULL STACK DEVELOPERS");
  const subline = useScrambleText("AI & SOFTWARE ENGINEERS");
  
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center border-b border-prgm-border">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 mb-8 border border-prgm-border px-4 py-2 bg-prgm-dark">
            <span className="w-2 h-2 bg-green-500 animate-pulse"></span>
            <span className="text-xs font-mono text-prgm-muted uppercase tracking-widest">Available for hire</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tighter mb-6 leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              {headline}
            </span>
            <span className="animate-cursor-blink text-white">_</span>
          </h1>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono text-prgm-muted mb-8 tracking-tight">
            {subline}
            <span className="animate-cursor-blink text-prgm-muted">_</span>
          </h2>

          <p className="text-lg md:text-xl font-mono text-prgm-muted max-w-2xl mb-12 leading-relaxed border-l-2 border-prgm-border pl-6">
            &gt;&gt; Building the next generation of AI-powered software.<br/>
            &gt;&gt; Specializing in software engineering, front end and back end development, and AI.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-6 mb-12">
            <Button size="lg" onClick={onScrollToProjects} className="group w-full sm:w-auto">
              [ VIEW_PROJECTS ]
              <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
            </Button>
            <div className="flex items-center gap-4 text-prgm-muted font-mono text-xs h-full py-4">
              <span>// Based in United Kingdom</span>
              <span>// Open to remote</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/PRGM-Services" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-prgm-muted hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/company/prgm-services/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-prgm-muted hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://x.com/prgmservices" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-prgm-muted hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <div className="h-px flex-1 bg-prgm-border max-w-[200px]"></div>
            <span className="text-xs font-mono text-prgm-muted">info@prgmservices.com</span>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/3 hidden lg:block opacity-20 pointer-events-none">
           <svg width="400" height="400" viewBox="0 0 100 100" className="fill-current text-white animate-spin-slow">
              <path d="M50 0 A50 50 0 1 1 49.9 0 Z" stroke="white" fill="none" strokeWidth="0.5" strokeDasharray="4 2"/>
              <circle cx="50" cy="50" r="30" stroke="white" fill="none" strokeWidth="0.5"/>
              <line x1="50" y1="20" x2="50" y2="80" stroke="white" strokeWidth="0.5"/>
              <line x1="20" y1="50" x2="80" y2="50" stroke="white" strokeWidth="0.5"/>
           </svg>
        </div>
      </div>
    </section>
  );
};
