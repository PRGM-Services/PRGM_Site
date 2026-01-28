import React, { useState, useEffect, useRef } from 'react';
import { Input } from './Input';
import { Button } from './Button';
import { Check, Terminal, ShieldCheck, Wifi, Database, Lock } from 'lucide-react';
import { waitlistService } from '../services/waitlistService';

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'IDLE' | 'PROCESSING' | 'SUCCESS'>('IDLE');
  const [logs, setLogs] = useState<string[]>([]);
  const logContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if already joined on mount
    const { joined, email: savedEmail } = waitlistService.getStatus();
    if (joined && savedEmail) {
      setEmail(savedEmail);
      setStatus('SUCCESS');
    }
  }, []);

  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  const addLog = (message: string) => {
    setLogs(prev => [...prev, `> ${message}`]);
  };

  const processSequence = async () => {
    setLogs([]);
    addLog("INITIATING_HANDSHAKE_PROTOCOL...");
    await new Promise(r => setTimeout(r, 600));
    
    addLog("ESTABLISHING_SECURE_CHANNEL (TLS_1.3)...");
    await new Promise(r => setTimeout(r, 800));
    
    addLog("ENCRYPTING_PAYLOAD [256-BIT_AES]...");
    await new Promise(r => setTimeout(r, 600));
    
    addLog("UPLOADING_CREDENTIALS_TO_NODE_04...");
    
    // Perform the actual API call
    const success = await waitlistService.join(email);
    
    if (!success) {
      await new Promise(r => setTimeout(r, 500));
      addLog("ERROR: CONNECTION_REFUSED_BY_HOST");
      addLog(">> PACKET_LOSS_DETECTED. ABORTING.");
      
      // Delay before letting user try again
      await new Promise(r => setTimeout(r, 3000));
      setStatus('IDLE');
      return;
    }
    
    addLog("VERIFYING_SIGNATURE... [OK]");
    await new Promise(r => setTimeout(r, 400));
    
    addLog("ACCESS_TOKEN_GENERATED.");
    await new Promise(r => setTimeout(r, 500));
    
    setStatus('SUCCESS');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simple validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        addLog("ERROR: INVALID_EMAIL_FORMAT");
        return;
    }

    setStatus('PROCESSING');
    processSequence();
  };

  const handleReset = () => {
    waitlistService.reset();
    setStatus('IDLE');
    setEmail('');
    setLogs([]);
  };

  return (
    <section className="py-32 relative bg-prgm-surface" id="waitlist">
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Main Terminal Window */}
          <div className="border border-prgm-border bg-black shadow-2xl relative overflow-hidden group">
            {/* Scanline Effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none animate-scan"></div>
            
            {/* Terminal Header */}
            <div className="bg-prgm-border/50 backdrop-blur px-4 py-2 flex items-center justify-between border-b border-prgm-border">
              <div className="flex items-center gap-2">
                <Terminal className="w-3 h-3 text-prgm-muted" />
                <span className="text-xs font-mono text-white tracking-widest">USER_SIGNUP_SEQUENCE</span>
              </div>
              <div className="flex gap-2">
                 <div className="w-2 h-2 bg-prgm-muted/50 rounded-full"></div>
                 <div className="w-2 h-2 bg-prgm-muted/50 rounded-full"></div>
                 <div className="w-2 h-2 bg-prgm-muted/50 rounded-full"></div>
              </div>
            </div>
            
            <div className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center">
              {status === 'IDLE' && (
                <div className="animate-fade-in">
                  <div className="mb-10 font-mono">
                    <div className="flex items-center gap-3 mb-4 text-white">
                        <Lock className="w-5 h-5" />
                        <h3 className="text-xl font-bold uppercase tracking-tighter">Secure Access Request</h3>
                    </div>
                    <p className="text-prgm-muted text-sm leading-relaxed border-l-2 border-prgm-border pl-4">
                      Enter credentials to queue for Beta Access.<br/> 
                      Invitations distributed sequentially via encrypted channels.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <Input 
                      type="email" 
                      label="ENTER_EMAIL_ADDRESS"
                      placeholder="user@domain.com" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-black focus:bg-prgm-surface transition-all"
                    />
                    <div className="flex justify-end">
                      <Button 
                        type="submit" 
                        className="w-full md:w-auto hover:scale-[1.02] active:scale-[0.98]"
                        size="lg"
                      >
                        [ EXECUTE_REQUEST ]
                      </Button>
                    </div>
                  </form>
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
                  
                  <h3 className="text-2xl font-bold text-white mb-2 uppercase tracking-widest">Waitlist Position Secured.</h3>
                  <div className="inline-block px-3 py-1 bg-prgm-border/50 text-xs text-prgm-muted mb-8 rounded">
                    ID: {btoa(email).substring(0, 12)}...
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                     <div className="flex flex-col items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-prgm-muted" />
                        <span className="text-[10px] text-prgm-muted uppercase">Verified</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <Database className="w-5 h-5 text-prgm-muted" />
                        <span className="text-[10px] text-prgm-muted uppercase">Archived</span>
                     </div>
                     <div className="flex flex-col items-center gap-2">
                        <Wifi className="w-5 h-5 text-prgm-muted" />
                        <span className="text-[10px] text-prgm-muted uppercase">Linked</span>
                     </div>
                  </div>

                  <p className="text-prgm-muted text-sm mb-8">
                    &gt;&gt; Credentials received.<br/>&gt;&gt; Stand by for future updates.
                  </p>
                  
                  <button 
                    onClick={handleReset}
                    className="text-xs text-prgm-muted hover:text-white transition-colors uppercase tracking-widest border-b border-transparent hover:border-white pb-0.5"
                  >
                    Reset_Terminal
                  </button>
                </div>
              )}
            </div>
            
            {/* Terminal Footer */}
            <div className="bg-prgm-border/30 px-4 py-1 flex items-center justify-between border-t border-prgm-border text-[10px] font-mono text-prgm-muted uppercase">
                <span>Status: {status === 'PROCESSING' ? 'BUSY' : 'READY'}</span>
                <span>Mem: 64K</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};