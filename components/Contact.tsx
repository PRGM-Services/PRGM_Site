import React, { useState, useRef } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Send, Check, Terminal, Mail, MessageSquare, AlertCircle } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [logs, setLogs] = useState<string[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `> ${message}`]);
  };

  const processSubmission = async () => {
    setLogs([]);
    addLog("INITIATING_CONTACT_PROTOCOL...");
    await new Promise(r => setTimeout(r, 400));
    
    addLog("VALIDATING_INPUT_PARAMETERS...");
    await new Promise(r => setTimeout(r, 500));
    
    addLog("ENCRYPTING_PAYLOAD [256-BIT_AES]...");
    await new Promise(r => setTimeout(r, 600));
    
    addLog("ROUTING_TO_INBOX_NODE_07...");
    await new Promise(r => setTimeout(r, 500));
    
    // Simulate API success
    await new Promise(r => setTimeout(r, 800));
    
    addLog("MESSAGE_QUEUED_FOR_REVIEW [OK]");
    await new Promise(r => setTimeout(r, 400));
    
    setStatus('SUCCESS');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      addLog("ERROR: REQUIRED_FIELDS_MISSING");
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 2000);
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      addLog("ERROR: INVALID_EMAIL_FORMAT");
      setStatus('ERROR');
      setTimeout(() => setStatus('IDLE'), 2000);
      return;
    }

    setStatus('PROCESSING');
    processSubmission();
  };

  const handleReset = () => {
    setStatus('IDLE');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setLogs([]);
  };

  return (
    <section className="py-32 relative bg-prgm-surface" id="contact">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 border border-prgm-border px-4 py-2">
            <Mail className="w-3 h-3 text-prgm-muted" />
            <span className="text-xs font-mono text-prgm-muted uppercase tracking-widest">Open for Collaboration</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4 tracking-tighter">
            GET_IN_TOUCH
          </h2>
          <p className="text-prgm-muted font-mono">
            &gt;&gt; Have a project in mind? Let's build something together.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Main Terminal Window */}
          <div className="border border-prgm-border bg-black shadow-2xl relative overflow-hidden group">
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none animate-scan"></div>
            
            {/* Terminal Header */}
            <div className="bg-prgm-border/50 backdrop-blur px-4 py-2 flex items-center justify-between border-b border-prgm-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-prgm-muted" />
                <span className="text-xs font-mono text-white tracking-widest">CONTACT_FORM.exe</span>
              </div>
              <div className="flex gap-2">
                <div className="w-2 h-2 bg-prgm-muted/50 rounded-full"></div>
                <div className="w-2 h-2 bg-prgm-muted/50 rounded-full"></div>
                <div className="w-2 h-2 bg-prgm-muted/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 min-h-[500px] flex flex-col justify-center">
              {status === 'IDLE' && (
                <div className="animate-fade-in">
                  <div className="mb-10 font-mono">
                    <div className="flex items-center gap-3 mb-4 text-white">
                      <MessageSquare className="w-5 h-5" />
                      <h3 className="text-xl font-bold uppercase tracking-tighter">Secure Channel</h3>
                    </div>
                    <p className="text-prgm-muted text-sm leading-relaxed border-l-2 border-prgm-border pl-4">
                      Response time: typically within 24-48 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input 
                        type="text" 
                        label="NAME"
                        placeholder="John Doe" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                        className="bg-black focus:bg-prgm-surface transition-all"
                      />
                      <Input 
                        type="email" 
                        label="EMAIL"
                        placeholder="john@example.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                        className="bg-black focus:bg-prgm-surface transition-all"
                      />
                    </div>
                    
                    <Input 
                      type="text" 
                      label="SUBJECT"
                      placeholder="Project collaboration inquiry" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="bg-black focus:bg-prgm-surface transition-all"
                    />

                    <div className="space-y-2">
                      <label className="block text-xs font-mono text-prgm-muted uppercase tracking-wider">
                        MESSAGE
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project..."
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-black border border-prgm-border text-white placeholder:text-prgm-muted/50 font-mono text-sm focus:outline-none focus:border-white transition-colors resize-none"
                      />
                    </div>

                    <div className="flex justify-end pt-4">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto hover:scale-[1.02] active:scale-[0.98] group"
                        size="lg"
                      >
                        <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                        [ SEND_MESSAGE ]
                      </Button>
                    </div>
                  </form>
                </div>
              )}

              {status === 'ERROR' && (
                <div className="text-center font-mono animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 border border-red-500/30 bg-red-500/5 rounded-full mb-8">
                    <AlertCircle className="w-10 h-10 text-red-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Input Error</h3>
                  <p className="text-prgm-muted text-sm">
                    &gt;&gt; Please check your input and try again.
                  </p>
                </div>
              )}

              {status === 'PROCESSING' && (
                <div className="font-mono text-xs md:text-sm text-green-500/80 h-full flex flex-col">
                  <div className="flex-1 overflow-y-auto space-y-2 p-4 bg-black/50" ref={logContainerRef}>
                    {logs.map((log, i) => (
                      <div key={i} className="animate-fade-in-up">
                        <span className="opacity-50 mr-2">
                          {new Date().toLocaleTimeString('en-US', {hour12: false})}:
                        </span>
                        {log}
                      </div>
                    ))}
                    <div className="animate-pulse">_</div>
                  </div>
                </div>
              )}

              {status === 'SUCCESS' && (
                <div className="text-center font-mono animate-fade-in">
                  <div className="inline-flex items-center justify-center w-20 h-20 border border-green-500/30 bg-green-500/5 rounded-full mb-8 relative">
                    <div className="absolute inset-0 border border-green-500 rounded-full animate-ping opacity-20"></div>
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Message Transmitted.</h3>
                  <div className="inline-block px-3 py-1 bg-prgm-border/50 text-xs text-prgm-muted mb-8 rounded">
                    MSG_ID: {Math.random().toString(36).substring(2, 14).toUpperCase()}
                  </div>

                  <p className="text-prgm-muted text-sm mb-8">
                    &gt;&gt; Your message has been queued for review.<br/>
                    &gt;&gt; Expect a response within 24-48 hours.
                  </p>
                  
                  <button 
                    onClick={handleReset}
                    className="text-xs text-prgm-muted hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-0.5"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
            
            {/* Terminal Footer */}
            <div className="bg-prgm-border/30 px-4 py-1 flex items-center justify-between border-t border-prgm-border text-[10px] font-mono text-prgm-muted uppercase">
              <span>Status: {status === 'PROCESSING' ? 'BUSY' : status === 'SUCCESS' ? 'SENT' : 'READY'}</span>
              <span>Encryption: AES-256-GCM</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
