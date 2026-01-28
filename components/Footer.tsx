import React from 'react';
import { Twitter, Github, Linkedin } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-prgm-border py-16 font-mono text-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Logo />
            <p className="text-prgm-muted mt-6 max-w-xs leading-relaxed">
              Architecting the infrastructure for the next generation of autonomous intelligence.
            </p>
          </div>
          
          <div>

          </div>

          <div>
            <h4 className="text-white uppercase tracking-widest mb-6 font-bold">Network</h4>
            <div className="flex space-x-4">
              <a href="https://x.com/prgmservices" className="text-prgm-muted hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://github.com/PRGM-Services" className="text-prgm-muted hover:text-white transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/prgm-services/" className="text-prgm-muted hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-prgm-border flex flex-col md:flex-row justify-between text-xs text-prgm-muted uppercase">
          <p>© {new Date().getFullYear()} PRGM SERVICES INC.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">

          </div>
        </div>
      </div>
    </footer>
  );
};