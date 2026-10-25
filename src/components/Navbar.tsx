import React from 'react';
import { Compass, BookOpen, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  currentPage: 'landing' | 'campaign' | 'chapter';
  onNavigateLanding: () => void;
  onNavigateCampaign: () => void;
  onOpenAbout: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigateLanding,
  onNavigateCampaign,
  onOpenAbout,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4 md:gap-8">
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={onNavigateLanding}
          className="flex items-center gap-2.5 text-left group focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded-md py-1 cursor-pointer"
          aria-label="Kembali ke halaman utama Cold War: Shadows of History"
        >
          <div className="w-8 h-8 rounded bg-rose-950/80 border border-rose-800/60 flex items-center justify-center text-rose-400 group-hover:border-rose-600 transition-colors">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="font-['Cinzel'] tracking-wider text-sm sm:text-base font-bold text-amber-50 group-hover:text-rose-200 transition-colors whitespace-nowrap block">
              COLD WAR
            </span>
            <span className="text-[10px] tracking-widest text-slate-400 uppercase font-mono block -mt-1">
              SHADOWS OF HISTORY
            </span>
          </div>
        </button>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-300">
          <button
            onClick={onNavigateLanding}
            aria-label="Navigasi ke Halaman Utama"
            className={`transition-colors whitespace-nowrap py-1 hover:text-white cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded px-1.5 ${
              currentPage === 'landing' ? 'text-amber-300 font-semibold border-b-2 border-amber-400' : 'text-slate-400'
            }`}
          >
            Halaman Utama
          </button>
          <button
            onClick={onNavigateCampaign}
            aria-label="Navigasi ke Peta Kampanye"
            className={`transition-colors whitespace-nowrap py-1 hover:text-white cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded px-1.5 ${
              currentPage === 'campaign' || currentPage === 'chapter'
                ? 'text-amber-300 font-semibold border-b-2 border-amber-400'
                : 'text-slate-400'
            }`}
          >
            Peta Kampanye
          </button>
          <button
            onClick={onOpenAbout}
            aria-label="Buka dialog Tentang Game"
            className="text-slate-400 hover:text-white transition-colors whitespace-nowrap py-1 flex items-center gap-1.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded px-1.5"
          >
            <BookOpen className="w-3.5 h-3.5 text-slate-400" />
            <span>Tentang Game</span>
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Mobile about button */}
          <button
            onClick={onOpenAbout}
            className="md:hidden min-h-[44px] min-w-[44px] p-2 text-slate-400 hover:text-white focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded-lg flex items-center justify-center cursor-pointer"
            aria-label="Buka Informasi Tentang Game di Perangkat Seluler"
          >
            <BookOpen className="w-5 h-5" />
          </button>

          {currentPage === 'landing' ? (
            <button
              onClick={onNavigateCampaign}
              aria-label="Mulai Investigasi dari bilah navigasi"
              className="min-h-[40px] px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-rose-900 hover:bg-rose-800 active:bg-rose-950 border border-rose-700/80 rounded-lg shadow-sm transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none flex items-center gap-2 cursor-pointer"
            >
              <Compass className="w-4 h-4 text-rose-300" />
              <span>Mulai Investigasi</span>
            </button>
          ) : currentPage === 'chapter' ? (
            <button
              onClick={onNavigateCampaign}
              aria-label="Kembali ke Peta Kampanye dari bilah navigasi"
              className="min-h-[40px] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 border border-slate-700 rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
              <span>Kembali ke Peta</span>
            </button>
          ) : (
            <button
              onClick={onNavigateLanding}
              aria-label="Kembali ke Halaman Utama dari bilah navigasi"
              className="min-h-[40px] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 border border-slate-700 rounded-lg transition-colors whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-slate-400" />
              <span>Halaman Utama</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
