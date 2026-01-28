import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({ label, error, className = '', ...props }) => {
  return (
    <div className="w-full">
      {label && <label className="block text-xs font-mono text-prgm-muted mb-2 uppercase tracking-widest">{label}</label>}
      <div className="relative group">
        <input
          className={`w-full bg-prgm-dark border-b-2 border-prgm-border px-4 py-4 text-white font-mono placeholder-prgm-muted focus:outline-none focus:border-white transition-colors rounded-none ${className}`}
          spellCheck={false}
          {...props}
        />
        <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 group-focus-within:w-full transition-all duration-500"></div>
      </div>
      {error && <p className="mt-2 text-xs font-mono text-red-500">&gt;&gt; ERROR: {error}</p>}
    </div>
  );
};