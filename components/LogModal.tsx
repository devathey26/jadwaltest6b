import React from 'react';
import { X, Sparkles } from 'lucide-react';

interface LogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LogModal: React.FC<LogModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-[#0f172a] border border-white/10 rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="bg-white/5 px-6 py-5 border-b border-white/5 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
             <Sparkles className="text-primary" size={20} />
             <h2 className="text-xl font-heading font-bold">What's New</h2>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 max-h-[60vh] overflow-y-auto space-y-8">
          
          <div className="relative pl-8 border-l border-primary/30">
            <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(139,92,246,0.5)]"></span>
            <div className="mb-2">
                <h3 className="font-bold text-white text-lg">DKV Connect v3.0</h3>
                <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">ULTIMATE UPDATE</span>
            </div>
            <p className="text-sm text-slate-400 mb-3">Redesign total terinspirasi dari gaya Cyberpunk & Glassmorphism.</p>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex gap-2">
                <span className="text-accent">●</span>
                <span>Dark Mode & Aurora Background.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">●</span>
                <span>Jam Digital & Sapaan Dinamis.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-accent">●</span>
                <span>Floating Dock Navigation.</span>
              </li>
            </ul>
          </div>

          <div className="relative pl-8 border-l border-white/10">
            <span className="absolute -left-[5px] top-0 w-2.5 h-2.5 rounded-full bg-slate-600"></span>
            <h3 className="font-bold text-slate-500 mb-1">Versi Terdahulu</h3>
            <p className="text-sm text-slate-600">Fitur dasar jadwal, guru, dan piket.</p>
          </div>

        </div>

        <div className="p-4 bg-black/20 border-t border-white/5 text-center">
            <button 
              onClick={onClose}
              className="w-full bg-white text-black font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors"
            >
              Keren! 🔥
            </button>
        </div>
      </div>
    </div>
  );
};