import React from 'react';
import { Twitter, Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-prgm-border py-16 font-mono text-sm">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo />
            <p className="text-prgm-muted mt-6 max-w-sm leading-relaxed">
              Architecting the infrastructure for the next generation of software engineering. Available for freelance and consulting opportunities.
            </p>
            <div className="mt-6">
              <a 
                href="mailto:info@prgmservices.com"
                className="inline-flex items-center gap-2 text-white hover:text-prgm-muted transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@prgmservices.com</span>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h4 className="text-white uppercase tracking-widest mb-6 font-bold text-xs">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Projects', href: '#projects' },
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#features' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href}
                    className="text-prgm-muted hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <h4 className="text-white uppercase tracking-widest mb-6 font-bold text-xs">Connect</h4>
            <div className="flex flex-col gap-3">
              <a 
                href="https://github.com/PRGM-Services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-prgm-muted hover:text-white transition-colors text-sm group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://www.linkedin.com/company/prgm-services/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-prgm-muted hover:text-white transition-colors text-sm group"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a 
                href="https://x.com/prgmservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-prgm-muted hover:text-white transition-colors text-sm group"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-prgm-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-prgm-muted uppercase">
            © {currentYear} PRGM Services. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-xs text-prgm-muted hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2"
          >
            [ BACK_TO_TOP ]
          </button>
        </div>
      </div>
    </footer>
  );
};
