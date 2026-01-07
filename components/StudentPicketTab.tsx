import React from 'react';
import { studentPicketData } from '../data';
import { Sparkles, Crown } from 'lucide-react';
import { getIndonesianDay } from '../utils/timeUtils';

export const StudentPicketTab: React.FC = () => {
  const currentDay = getIndonesianDay();

  return (
    <div className="pb-20">
      <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
        <Sparkles className="text-accent" size={28} />
        Piket Kelas
      </h2>

      <div className="space-y-3">
        {studentPicketData.map((piket, index) => {
          const isToday = currentDay === piket.day.toUpperCase();

          return (
            <div
              key={index}
              className={`rounded-2xl overflow-hidden transition-all ${
                isToday
                  ? 'bg-white/10 border-2 border-amber-400/60 shadow-[0_0_30px_rgba(251,191,36,0.25)]'
                  : 'bg-white/5 border border-white/10'
              }`}
            >
              <div className={`px-6 py-4 ${
                isToday
                  ? 'bg-gradient-to-r from-amber-500/20 to-transparent'
                  : 'bg-white/5'
              }`}>
                <div className="flex items-center justify-between">
                  <h3 className={`font-heading font-bold text-xl tracking-wide ${
                    isToday ? 'text-amber-300' : 'text-slate-400'
                  }`}>
                    {piket.day}
                  </h3>
                  {isToday && (
                    <span className="px-3 py-1 rounded-full bg-amber-500/30 border border-amber-400/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                      Hari Ini
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Crown className="text-amber-400" size={20} />
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Koordinator
                  </span>
                </div>
                <div className="mb-6 px-4 py-3 bg-amber-500/10 border border-amber-500/20 rounded-xl">
                  <p className="text-lg font-heading font-bold text-amber-300">{piket.coordinator}</p>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="text-primary" size={20} />
                  <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                    Anggota
                  </span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {piket.students.map((student, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-center hover:bg-white/10 transition-all"
                    >
                      <span className="text-slate-200 font-medium">{student}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
