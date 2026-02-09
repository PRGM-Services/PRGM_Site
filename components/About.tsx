import React from 'react';
import { Terminal, MapPin, Calendar, Mail, Code2, Cpu, Database, Globe } from 'lucide-react';

const skills = [
  { category: "Languages", items: ["TypeScript", "Python", "Rust", "C++", "Dart", "Flutter", "Java", "Next.js", "React", "Node.js", "C#", "HTML", "CSS", "JavaScript", "Tailwind CSS", "Markdown"] },
  { category: "Frameworks", items: ["React", "PyTorch", "FastAPI", "Node.js", "Flask", "Next.js", "Django"] },
  { category: "Systems", items: ["Docker", "Kubernetes", "AWS", "Redis", "PostgreSQL", "Azure", "Proxmox", "Linux", "Windows", "MacOS"] },
  { category: "Other", items: ["OpenGL", "Vulkan", "WebGPU", "Three.js", "AI", "Unreal Engine", "Unity", "Blender", "DirectX11", "3Ds Max"] }
];

const experiences = [
  {
    period: "2026 — PRESENT",
    role: "Glide AI IDE development started.",
    description: "Development of the Glide AI IDE started."
  },
  {
    period: "2025 — PRESENT",
    role: "GenSYS AI Visualization assistant development started.",
    description: "Development of the GenSYS AI Visualization assistant started."
  },
  {
    period: "2024 — PRESENT",
    role: "PRGM Services was founded.",
    description: "Developed computer vision models for automated 3D asset generation. Deployed production AI systems processing millions of images."
  }
];

export const About: React.FC = () => {
  return (
    <section className="py-32 bg-prgm-surface border-b border-prgm-border relative overflow-hidden" id="about">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-prgm-border pb-8">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 mb-4">
              <Terminal className="w-4 h-4 text-prgm-muted" />
              <span className="text-xs font-mono text-prgm-muted uppercase tracking-widest">System Profile</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tighter">
              ABOUT
            </h2>
          </div>
          <div className="font-mono text-xs text-prgm-muted mt-4 md:mt-0">
            [ ID: PRGM-001 ]
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Bio */}
          <div className="lg:col-span-7 space-y-12">
            {/* Bio Text */}
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-white font-sans leading-relaxed">
                Architecting the intersection of AI and software engineering. 
                We build systems that enable creators to work faster, smarter, and more securely.
              </p>
              <p className="text-prgm-muted font-mono leading-relaxed">
                With a background in software engineering and our team of founders having coded since they where young, 
                we have an advantage to having grown with the technology seeing the strenghts, weaknesses, success and failure
                of our passion and work.
              </p>
              <p className="text-prgm-muted font-mono leading-relaxed">
                Not just offering consultancy, we also strive to establish ourselves as a company at the forefront 
                of development for new systems and softwares that are used by both businesses and consumers alike.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-white border-b border-prgm-border pb-4">
                PRGM Services Timeline
              </h3>
              {experiences.map((exp, index) => (
                <div key={index} className="group relative pl-6 border-l-2 border-prgm-border hover:border-white transition-colors">
                  <div className="absolute left-[-5px] top-0 w-2 h-2 bg-prgm-border group-hover:bg-white rounded-full transition-colors"></div>
                  <div className="text-xs font-mono text-prgm-muted mb-2">{exp.period}</div>
                  <h4 className="text-white font-sans font-bold text-lg mb-1">{exp.role}</h4>
                  <p className="text-sm text-prgm-muted leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats & Skills */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-prgm-border bg-black p-6 text-center">
                <div className="text-3xl font-sans font-bold text-white mb-2">14+</div>
                <div className="text-xs font-mono text-prgm-muted uppercase">Years Experience</div>
              </div>
              <div className="border border-prgm-border bg-black p-6 text-center">
                <div className="text-3xl font-sans font-bold text-white mb-2">10+</div>
                <div className="text-xs font-mono text-prgm-muted uppercase">Clients Satisfied</div>
              </div>
              <div className="border border-prgm-border bg-black p-6 text-center">
                <div className="text-3xl font-sans font-bold text-white mb-2">1M+</div>
                <div className="text-xs font-mono text-prgm-muted uppercase">Lines of code written</div>
              </div>
              <div className="border border-prgm-border bg-black p-6 text-center">
                <div className="text-3xl font-sans font-bold text-white mb-2">10+</div>
                <div className="text-xs font-mono text-prgm-muted uppercase">Programming Languages known</div>
              </div>
            </div>

            {/* Skills Matrix */}
            <div className="border border-prgm-border bg-black">
              <div className="px-6 py-4 border-b border-prgm-border bg-prgm-border/20">
                <span className="text-xs font-mono uppercase tracking-widest text-white">Technical Stack</span>
              </div>
              <div className="p-6 space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <div className="text-xs font-mono text-prgm-muted uppercase mb-3">{skillGroup.category}</div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1.5 text-xs font-mono border border-prgm-border text-white/80 hover:border-white hover:bg-white/5 transition-all cursor-default"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="border border-prgm-border bg-black p-6">
              <div className="text-xs font-mono uppercase tracking-widest text-white mb-4">Contact</div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-prgm-muted">
                  <MapPin className="w-4 h-4" />
                  <span>London, UK</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-prgm-muted">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:info@prgmservices.com" className="hover:text-white transition-colors">
                    info@prgmservices.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-sm text-prgm-muted">
                  <Calendar className="w-4 h-4" />
                  <span>Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
