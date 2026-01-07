import React from 'react';
import { substituteData } from '../data';
import { Timer, AlertCircle, Check } from 'lucide-react';

export const SubstituteTab: React.FC = () => {
  if (substituteData.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-600">
        <Timer size={64} className="mb-4 opacity-20" />
        <p className="font-heading">Tidak ada data guru pengganti.</p>
      </div>
    );
  }

  return (
    <div className="pb-20">
      <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
        <Timer className="text-accent" size={28} />
        Team Teaching
      </h2>

      <div className="space-y-4">
        {substituteData.map((sub, index) => (
          <div key={index} className="bg-white/5 border-l-4 border-primary rounded-r-xl p-5 flex flex-col md:flex-row md:items-center gap-4 hover:bg-white/10 transition-all">
            <div className="bg-primary/20 p-3 rounded-full text-primary w-fit">
              <Check size={24} />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-heading font-bold text-white text-lg break-words">{sub.name}</h3>
                <span className="bg-white/10 text-slate-300 text-[10px] px-2 py-1 rounded border border-white/10 font-mono">
                  {sub.code}
                </span>
              </div>
              <p className="text-primary font-medium">{sub.subject}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};