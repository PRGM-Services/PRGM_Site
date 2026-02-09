import React, { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Button } from './components/Button';
import { Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['projects', 'about', 'features', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-prgm-text font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-prgm-border bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Logo className="h-6" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors ${
                  activeSection === item.id ? 'text-white' : 'text-prgm-muted hover:text-white'
                }`}
              >
                [ {item.label} ]
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="primary"
              size="sm"
            >
              [ HIRE_ME ]
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-prgm-border bg-black">
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-sm font-mono uppercase tracking-widest text-prgm-muted hover:text-white transition-colors py-2"
                >
                  [ {item.label} ]
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="primary"
                size="md"
                className="w-full mt-4"
              >
                [ HIRE_US ]
              </Button>
            </div>
          </div>
        )}
      </nav>

      <main>
        <Hero onScrollToProjects={() => scrollToSection('projects')} />
        <Projects />
        <About />
        <Features />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
