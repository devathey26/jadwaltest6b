import React, { useState, useEffect } from 'react';
import { getGreeting, getDateString } from '../utils/timeUtils';
import { Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative mb-8 pt-4">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-base font-semibold text-accent">
          <Sparkles size={16} />
          <span>Kavitwo Connect</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 tracking-tight drop-shadow-sm">
          {time.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
        </h1>
        
        <p className="mt-2 text-slate-400 text-sm md:text-base font-medium tracking-wide uppercase">
          {getDateString()}
        </p>

        <p className="mt-6 text-xl md:text-2xl font-heading font-semibold text-white">
          {getGreeting()}, <span className="text-primary">Teman!</span> 👋
        </p>
      </div>
    </div>
  );
};