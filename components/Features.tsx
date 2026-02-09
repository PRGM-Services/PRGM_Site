import React from 'react';
import { 
  Brain, 
  Box, 
  Shield, 
  Zap, 
  Code2, 
  Database,
  Globe,
  Cpu,
  Layers,
  Lock,
  Sparkles,
  Terminal
} from 'lucide-react';

interface Skill {
  title: string;
  description: string;
  icon: React.ReactNode;
  level: string;
}

const skills: Skill[] = [
  {
    title: "AI / Machine Learning",
    description: "API LLM Intergration, Agent Dataset Creation, LLM Fine tuning, LLM Software intergration",
    icon: <Brain className="w-5 h-5" />,
    level: "Expert"
  },
  {
    title: "3D Graphics",
    description: "OpenGL, Vulkan, DirectX11",
    icon: <Box className="w-5 h-5" />,
    level: "Expert"
  },
  {
    title: "Systems Programming",
    description: "Rust, C++, C#, Python, Dart, Flutter, Java, Javascript",
    icon: <Cpu className="w-5 h-5" />,
    level: "Advanced"
  },
  {
    title: "Web Development",
    description: "React, TypeScript, Node.js, Next.js, HTML, CSS, REST APIs, Tailwind CSS",
    icon: <Globe className="w-5 h-5" />,
    level: "Expert"
  },
  {
    title: "Infrastructure",
    description: "AWS, Docker, Kubernetes, Azure, Proxmox, TrueNAS, Ubuntu Server, Windows Server",
    icon: <Layers className="w-5 h-5" />,
    level: "Advanced"
  },
  {
    title: "Cryptography",
    description: "Xor, Virtualisation, Control Flow, SHA256, AES, Code Obfuscation, Fernet",
    icon: <Lock className="w-5 h-5" />,
    level: "Expert"
  },
  {
    title: "Performance",
    description: "GPU Optimization, Threading, Object Oriented Programming, Memory Optimization, Modular Programming",
    icon: <Zap className="w-5 h-5" />,
    level: "Expert"
  },
  {
    title: "Languages",
    description: "TypeScript, Python, Rust, C++, Dart, Flutter, Java, Next.js, React, Node.js, C#, HTML, CSS, JavaScript, Tailwind CSS, Markdown",
    icon: <Code2 className="w-5 h-5" />,
    level: "Expert"
  }
];

const SkillCard: React.FC<{ skill: Skill; index: number }> = ({ skill, index }) => (
  <div className="relative group border border-prgm-border bg-prgm-dark p-6 hover:border-white transition-colors duration-300">
    <div className="absolute top-4 right-4 text-xs font-mono text-prgm-border group-hover:text-white">
      {`0${index + 1}`}
    </div>
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 flex items-center justify-center text-white bg-prgm-surface border border-prgm-border">
        {skill.icon}
      </div>
      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-1 border border-prgm-border text-prgm-muted">
        {skill.level}
      </span>
    </div>
    <h3 className="text-lg font-bold text-white mb-2 font-sans tracking-tight uppercase">{skill.title}</h3>
    <p className="text-prgm-muted font-mono text-xs leading-relaxed">{skill.description}</p>
    
    {/* Corner accents */}
    <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section className="py-32 bg-black border-b border-prgm-border" id="features">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-prgm-border pb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-prgm-muted" />
              <span className="text-xs font-mono text-prgm-muted uppercase tracking-widest">Technical Arsenal</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tighter">
              SKILLS
            </h2>
            <p className="text-prgm-muted font-mono">
              &gt;&gt; Technologies and domains we work with.
            </p>
          </div>
          <div className="font-mono text-xs text-prgm-muted mt-4 md:mt-0">
            [ DISPLAYING_9_MODULES ]
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {skills.map((skill, i) => (
            <SkillCard key={i} index={i} skill={skill} />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="border border-prgm-border bg-prgm-dark p-6 text-center">
            <Sparkles className="w-6 h-6 text-white mx-auto mb-3" />
            <div className="text-2xl font-sans font-bold text-white mb-1">AI First</div>
            <p className="text-xs font-mono text-prgm-muted">Building software with modern AI/ML at the core</p>
          </div>
          <div className="border border-prgm-border bg-prgm-dark p-6 text-center">
            <Shield className="w-6 h-6 text-white mx-auto mb-3" />
            <div className="text-2xl font-sans font-bold text-white mb-1">Security Focused</div>
            <p className="text-xs font-mono text-prgm-muted">Privacy-preserving architectures</p>
          </div>
          <div className="border border-prgm-border bg-prgm-dark p-6 text-center">
            <Zap className="w-6 h-6 text-white mx-auto mb-3" />
            <div className="text-2xl font-sans font-bold text-white mb-1">Performance</div>
            <p className="text-xs font-mono text-prgm-muted">Optimized for speed and scale</p>
          </div>
        </div>
      </div>
    </section>
  );
};
