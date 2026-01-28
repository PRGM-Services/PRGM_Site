import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { Logo } from './components/Logo';
import { Button } from './components/Button';

const App: React.FC = () => {
  const scrollToWaitlist = () => {
    document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-prgm-text font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-prgm-border bg-black/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth'})}>
            <Logo className="h-6" />
          </div>
          
          <div className="hidden md:flex items-center space-x-12">
            <a href="#features" className="text-xs font-mono uppercase tracking-widest text-prgm-muted hover:text-white transition-colors">Modules</a>
            <a href="#security" className="text-xs font-mono uppercase tracking-widest text-prgm-muted hover:text-white transition-colors">Security</a>
          </div>
          
          <Button 
            onClick={scrollToWaitlist}
            variant="primary"
            size="sm"
          >
            [ JOIN_WAITLIST ]
          </Button>
        </div>
      </nav>

      <main>
        <Hero onJoinWaitlist={scrollToWaitlist} />
        <Features />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
};

export default App;