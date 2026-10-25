import React from 'react';
import { Compass, BookOpen } from 'lucide-react';

interface FooterProps {
  onOpenAbout: () => void;
  onNavigateLanding: () => void;
  onNavigateCampaign: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenAbout,
  onNavigateLanding,
  onNavigateCampaign,
}) => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/90 py-8 text-xs text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Slogan */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-rose-500 shrink-0" />
            <span className="font-['Cinzel'] font-bold text-slate-200 tracking-wider">
              COLD WAR: SHADOWS OF HISTORY
            </span>
          </div>
          <p className="text-slate-400 max-w-md">
            Game investigasi sejarah interaktif untuk siswa SMA/SMK berbasis kurikulum sejarah dunia periode 1945–1991.
          </p>
        </div>

        {/* Navigation & Context */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400">
          <button
            onClick={onNavigateLanding}
            aria-label="Navigasi ke Halaman Utama (footer)"
            className="hover:text-amber-300 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded px-1 cursor-pointer min-h-[36px] flex items-center"
          >
            Halaman Utama
          </button>
          <button
            onClick={onNavigateCampaign}
            aria-label="Navigasi ke Peta Kampanye (footer)"
            className="hover:text-amber-300 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded px-1 cursor-pointer min-h-[36px] flex items-center"
          >
            Peta Kampanye
          </button>
          <button
            onClick={onOpenAbout}
            aria-label="Buka dialog Tentang Game (footer)"
            className="hover:text-amber-300 transition-colors flex items-center gap-1 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded px-1 cursor-pointer min-h-[36px]"
          >
            <BookOpen className="w-3.5 h-3.5 shrink-0" />
            <span>Tentang Game</span>
          </button>
        </div>

        {/* Disclaimer / Academic note */}
        <div className="text-center md:text-right text-[11px] text-slate-400 font-mono">
          <div className="text-slate-300 font-medium">Belajar Sejarah melalui Investigasi</div>
          <div className="text-slate-400">Rujukan Fakta Sejarah Internasional (1945–1991)</div>
        </div>
      </div>
    </footer>
  );
};
