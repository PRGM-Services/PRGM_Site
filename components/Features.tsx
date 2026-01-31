import React, { useState } from 'react';
import { Lock, Eye, Zap, Globe, Shield, Cpu } from 'lucide-react';

const FeatureCard: React.FC<{ title: string; description: string; icon: React.ReactNode; index: number }> = ({ title, description, icon, index }) => (
  <div className="relative group border border-prgm-border bg-prgm-dark p-8 hover:border-white transition-colors duration-300">
    <div className="absolute top-4 right-4 text-xs font-mono text-prgm-border group-hover:text-white">
      {`0${index + 1}`}
    </div>
    <div className="w-10 h-10 flex items-center justify-center mb-6 text-white bg-prgm-surface border border-prgm-border">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-4 font-sans tracking-tight uppercase">{title}</h3>
    <p className="text-prgm-muted font-mono text-sm leading-relaxed">{description}</p>
    
    {/* Corner accents */}
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

export const Features: React.FC = () => {
  const features = [
    {
      title: "Zero-Knowledge",
      description: "Our architecture guarantees data isolation. Your data stays yours.",
      icon: <Lock className="w-5 h-5" />
    },
    {
      title: "Image Recognition / Replication",
      description: "Our system is able to recognize images and replicate them in 3D software.",
      icon: <Eye className="w-5 h-5" />
    },
    {
      title: "In-Depth Knowledge Base",
      description: "Our system is trained on a vast amount of data to provide accurate and up-to-date information.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "Non intrusive Dynamic Work",
      description: "Our AI works using a dynamic system, utilising placeholders to protect your work.",
      icon: <Shield className="w-5 h-5" />
    },
    {
      title: "Smart Learning",
      description: "Our system is able to learn from your interactions and improve its performance and responses over time.",
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: "Universal Framework",
      description: "Our software is built on a universal framework, allowing it to be used in a variety of design / visualisation software.",
      icon: <Cpu className="w-5 h-5" />
    }
  ];

  return (
    <section className="py-32 bg-black border-b border-prgm-border" id="features">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-prgm-border pb-8">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tighter">
              CORE MODULES
            </h2>
            <p className="text-prgm-muted font-mono">
              &gt;&gt; Core capabilities of GenSYS AI.
            </p>
          </div>
          <div className="font-mono text-xs text-prgm-muted mt-4 md:mt-0">
            [ DISPLAYING_MODULES_1-6 ]
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {features.map((f, i) => (
            <FeatureCard key={i} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};