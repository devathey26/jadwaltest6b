import React from 'react';
import { teacherData } from '../data';
import { MessageCircle, BookOpen, Star, Users } from 'lucide-react';

export const TeacherTab: React.FC = () => {
  return (
    <div className="pb-20">
      <h2 className="text-2xl font-heading font-bold text-white mb-6 flex items-center gap-3">
        <Users className="text-accent" size={28} />
        Daftar Guru Pengajar
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {teacherData.map((teacher) => (
        <div key={teacher.code} className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1">
          {/* Gradient Glow Effect on Hover */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          
          <div className="relative flex justify-between items-start mb-3">
            <span className="font-mono text-xs text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-primary/30 transition-colors">
              {teacher.code}
            </span>
            {teacher.phone && (
              <a
                href={`https://wa.me/${teacher.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 transition-colors p-1 shrink-0"
              >
                <MessageCircle size={20} />
              </a>
            )}
          </div>

          <div className="relative">
            <h3 className="text-lg font-heading font-bold text-white mb-1 group-hover:text-primary transition-colors break-words">
              {teacher.name}
            </h3>
            <div className="flex items-center gap-2 text-slate-400 text-sm mt-2">
              <BookOpen size={14} className="text-secondary" />
              <span>{teacher.subject}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};