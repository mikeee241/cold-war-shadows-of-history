import React from 'react';
import { ChapterData } from '../data/chapters';
import { ArrowLeft, Compass, Calendar, ChevronRight, MapPin, Eye, Shield } from 'lucide-react';
import geopoliticalMapImage from '../assets/images/cold_war_geopolitical_map_1792401598813.jpg';

interface CampaignMapProps {
  chapters: ChapterData[];
  onSelectChapter: (chapterId: string) => void;
  onBackToLanding: () => void;
}

export const CampaignMap: React.FC<CampaignMapProps> = ({
  chapters,
  onSelectChapter,
  onBackToLanding,
}) => {
  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col">
      {/* Background Cartography Backdrop with Overlay */}
      <div className="relative w-full border-b border-slate-800 bg-slate-950/90 overflow-hidden">
        {/* Subtle Map visual (ESM imported for proper Vite production bundling) */}
        <div className="absolute inset-0 opacity-15 mix-blend-luminosity pointer-events-none">
          <img
            src={geopoliticalMapImage}
            alt="Peta kartografi geopolitik Perang Dingin"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0b111e]/80 to-[#0b111e] pointer-events-none" />

        {/* Map Header Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              {/* Mandatory Game Label & Subtitle */}
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-widest mb-1.5 font-semibold">
                <Compass className="w-3.5 h-3.5" />
                <span>Game Investigasi Sejarah · Perang Dingin (1945–1991)</span>
              </div>
              <h1 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide">
                Peta Kampanye
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-2xl font-sans">
                Pilih bab untuk mempelajari konteks sejarah dan memulai penyelidikan. Setiap bab mewakili tonggak penting persaingan geopolitik global.
              </p>
            </div>

            {/* Back button with explicit aria-label and touch target >= 44px */}
            <div className="shrink-0">
              <button
                onClick={onBackToLanding}
                aria-label="Kembali ke Halaman Utama"
                className="min-h-[44px] inline-flex items-center gap-2 px-4 py-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-slate-200 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none shadow-sm cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 text-slate-400" />
                <span>Kembali ke Halaman Utama</span>
              </button>
            </div>
          </div>

          {/* Timeline progress bar connector overview (Desktop & Tablet) */}
          <div className="mt-8 pt-6 border-t border-slate-800/80">
            <div className="text-xs font-mono text-slate-400 mb-3 flex items-center justify-between">
              <span className="font-semibold uppercase tracking-wider text-slate-300">
                Alur Kronologis Investigasi
              </span>
              <span className="text-amber-400 font-semibold">5 BAB KRONOLOGIS</span>
            </div>

            {/* Visual timeline rail */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {chapters.map((ch) => (
                <div
                  key={ch.id}
                  onClick={() => onSelectChapter(ch.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectChapter(ch.id);
                    }
                  }}
                  aria-label={`Lompat ke Bab 0${ch.number}: ${ch.title}`}
                  className="flex flex-col p-2 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-rose-600/60 transition-colors cursor-pointer group focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                >
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="w-5 h-5 rounded-full bg-rose-950 border border-rose-600 flex items-center justify-center text-[10px] font-mono font-bold text-rose-300 group-hover:bg-rose-900 transition-colors">
                      {ch.number}
                    </div>
                    <span className="text-[11px] font-mono text-slate-300 truncate font-medium group-hover:text-amber-200 transition-colors">
                      {ch.period}
                    </span>
                  </div>
                  <div className="text-[11px] font-sans text-slate-400 truncate group-hover:text-white transition-colors">
                    {ch.title}
                  </div>
                  <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden mt-1.5">
                    <div className="h-full bg-rose-700/80 w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Cards Grid Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter) => {
            return (
              <div
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectChapter(chapter.id);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Buka detail Bab 0${chapter.number}: ${chapter.title} (${chapter.period})`}
                className="group relative bg-slate-900/95 border border-slate-800 hover:border-rose-600/70 rounded-xl p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/50 cursor-pointer flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none"
              >
                {/* Dossier Code Badge */}
                <div className="flex items-center justify-between gap-2 border-b border-slate-800/80 pb-3 mb-4 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">BAB 0{chapter.number}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-slate-400">{chapter.dossierCode}</span>
                  </div>
                  <span className="text-[11px] text-emerald-400/90 bg-emerald-950/40 border border-emerald-800/50 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                    <Shield className="w-3 h-3 text-emerald-400" />
                    <span>TERSEDIA</span>
                  </span>
                </div>

                {/* Chapter Title & Period */}
                <div className="space-y-2 mb-5">
                  <div className="flex items-center gap-1.5 text-xs text-rose-300 font-mono font-medium">
                    <Calendar className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>{chapter.period}</span>
                    {chapter.focus && (
                      <>
                        <span aria-hidden="true" className="text-slate-600">·</span>
                        <span className="text-amber-300 truncate">{chapter.focus}</span>
                      </>
                    )}
                  </div>

                  {/* Official English Title (Mandatory) */}
                  <h2 className="font-['Cinzel'] text-xl font-bold text-white group-hover:text-amber-200 transition-colors">
                    {chapter.title}
                  </h2>

                  {/* Indonesian Subtitle */}
                  <div className="text-xs font-medium text-slate-400 font-sans">
                    {chapter.indonesianTitle}
                  </div>

                  {/* Indonesian Description */}
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3 leading-relaxed pt-1 font-sans">
                    {chapter.description}
                  </p>
                </div>

                {/* Card Footer: Metadata & Action button */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2 text-xs font-medium">
                  <div className="flex items-center gap-1.5 text-slate-400 min-w-0">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span className="truncate max-w-[130px] sm:max-w-[160px]">
                      {chapter.keyLocations[0]}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-1 text-rose-300 font-semibold group-hover:text-rose-200 group-hover:translate-x-0.5 transition-all shrink-0">
                    <Eye className="w-3.5 h-3.5 text-rose-400" />
                    <span>Buka Informasi Bab</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
