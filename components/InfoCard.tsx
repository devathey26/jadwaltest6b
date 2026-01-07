import React from 'react';
import { MessageCircle, MapPin, GraduationCap, Shield } from 'lucide-react';

export const InfoCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
      {/* Ruang Kelas */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center gap-4 hover:bg-white/10 transition-all group">
        <div className="bg-blue-500/20 p-3 rounded-xl text-blue-400 group-hover:scale-110 transition-transform">
          <MapPin size={24} />
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Lokasi Kelas</p>
          <p className="text-lg font-heading font-bold text-white">Ruang 15</p>
        </div>
      </div>

      {/* Wali Kelas */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between gap-3 md:col-span-1 group hover:bg-white/10 transition-all relative">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="bg-purple-500/20 p-3 rounded-xl text-purple-400 group-hover:scale-110 transition-transform shrink-0">
            <GraduationCap size={24} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Wali Kelas</p>
            <p className="text-sm font-heading font-bold text-white break-words">Drs. I Gusti Putu Tirta Yasa, M.Pd.</p>
          </div>
        </div>
        <a
          href="https://wa.me/6281338401856"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white p-2 rounded-lg transition-all shrink-0"
        >
          <MessageCircle size={18} />
        </a>
      </div>

      {/* Guru BK */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-2xl flex items-center justify-between gap-3 md:col-span-1 group hover:bg-white/10 transition-all relative">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="bg-pink-500/20 p-3 rounded-xl text-pink-400 group-hover:scale-110 transition-transform shrink-0">
            <Shield size={24} />
          </div>
          <div className="min-w-0">
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Guru BK</p>
            <p className="text-sm font-heading font-bold text-white break-words">Ni Putu Chintya Pradnya Suari, S.Pd.</p>
          </div>
        </div>
        <a
          href="https://wa.me/6281905583802"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white p-2 rounded-lg transition-all shrink-0"
        >
          <MessageCircle size={18} />
        </a>
      </div>
    </div>
  );
};