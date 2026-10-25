import React from 'react';
import { Compass, BookOpen, Clock, ShieldCheck, Globe, ChevronRight, FileSearch } from 'lucide-react';
import heroDossierImage from '../assets/images/cold_war_dossier_hero_1792401598397.jpg';

interface LandingPageProps {
  onStartInvestigation: () => void;
  onOpenAbout: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  onStartInvestigation,
  onOpenAbout,
}) => {
  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col justify-between">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-archive-grid opacity-30 pointer-events-none" />

      {/* Main Hero Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-16 flex-1 flex flex-col justify-center">
        {/* Top Metadata Strip */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-400 mb-6">
          <span className="text-rose-400 tracking-wider font-semibold">ARSIP INVESTIGASI SEJARAH</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-amber-300 font-semibold">PERIODE 1945–1991</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">DOKUMEN DEKLASIFIKASI DIPLOMASI GLOBAL</span>
        </div>

        {/* Hero Split Layout */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative Briefing */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <h1 className="font-['Cinzel'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                COLD WAR<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-rose-200 to-amber-100">
                  SHADOWS OF HISTORY
                </span>
              </h1>
              <p className="text-base sm:text-lg text-rose-300 font-medium tracking-wide">
                Menyingkap Fakta dan Misteri di Balik Tirai Besi 1945–1991
              </p>
            </div>

            {/* Investigator Introduction Dossier Box */}
            <div className="bg-slate-900/90 border border-slate-800 p-5 sm:p-6 rounded-xl shadow-lg relative overflow-hidden backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-rose-600" />
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-semibold">
                <FileSearch className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Instruksi Penyelidik Sejarah Junior</span>
              </div>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                Selamat datang, Penyelidik. Tugas Anda adalah menelusuri arsip dokumen penting, memetakan titik-titik krusial ketegangan global, dan merekonstruksi kronologi persaingan ideologi antara blok Barat dan blok Timur pasca-Perang Dunia II hingga pembubaran Uni Soviet.
              </p>
            </div>

            {/* Action Buttons with high-visibility focus states and 44px+ touch targets */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onStartInvestigation}
                aria-label="Mulai investigasi sejarah dan buka peta kampanye"
                className="min-h-[48px] px-6 py-3.5 bg-rose-800 hover:bg-rose-700 active:bg-rose-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-rose-900/30 transition-all flex items-center justify-center gap-2.5 text-base focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none cursor-pointer group"
              >
                <Compass className="w-5 h-5 text-rose-300 group-hover:rotate-45 transition-transform" />
                <span>Mulai Investigasi</span>
                <ChevronRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenAbout}
                aria-label="Buka ringkasan tentang game dan tujuan edukasi"
                className="min-h-[48px] px-5 py-3.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-slate-200 border border-slate-700 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 text-sm focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none cursor-pointer"
              >
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span>Tentang Game</span>
              </button>
            </div>

            {/* Operational Metadata */}
            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>5 Bab Sejarah Interaktif</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Konteks Geopolitik Global</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Kurikulum Sejarah SMA/SMK</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Archival Dossier Frame */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer dossier card border */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900 shadow-2xl transition-transform duration-300 group-hover:scale-[1.01]">
                {/* Visual Image Asset (ESM imported for proper Vite production bundling) */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={heroDossierImage}
                    alt="Meja arsip penyelidikan dokumen Perang Dingin dengan peta Eropa dan berkas rahasia Berlin"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Stamp Overlay */}
                  <div className="absolute top-4 right-4">
                    <span className="stamp-classified px-2.5 py-1 text-[11px]">
                      ARSIP SEJARAH
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-300 flex items-center justify-between">
                    <span className="text-amber-300 font-bold">BERKAS CW-1945/91</span>
                    <span className="text-slate-400">STATUS: TERBUKA</span>
                  </div>
                </div>

                {/* Dossier Caption Box */}
                <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-2">
                  <div className="text-xs font-mono text-rose-400 uppercase tracking-wider font-semibold">
                    Eksplorasi Kronologi & Dokumen
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-sans">
                    Telusuri pembagian Berlin, pembentukan NATO & Pakta Warsawa, ancaman perang nuklir di Teluk Kuba, perlombaan antariksa, hingga runtuhnya Tembok Berlin melalui peta kampanye interaktif.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars of Investigation */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-xs font-mono text-amber-400 block mb-1">01 / DIPLOMASI</span>
            <h2 className="text-sm font-bold text-white mb-1.5 font-['Cinzel'] tracking-wide">
              Polarisasi Ideologi
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Pelajari bagaimana Doktrin Truman, Marshall Plan, dan persaingan aliansi militer memecah dunia ke dalam dua blok pengaruh.
            </p>
          </div>

          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
            <span className="text-xs font-mono text-rose-400 block mb-1">02 / KRISIS</span>
            <h2 className="text-sm font-bold text-white mb-1.5 font-['Cinzel'] tracking-wide">
              Ketegangan Ekstrem
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Teliti momen-momen kritis saat dunia berada di ambang perang nuklir, seperti Krisis Rudal Kuba 1962 dan kebuntuan di pos pemeriksaan Berlin.
            </p>
          </div>

          <div className="bg-slate-900/60 p-5 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors sm:col-span-2 lg:col-span-1">
            <span className="text-xs font-mono text-sky-400 block mb-1">03 / TRANSISI</span>
            <h2 className="text-sm font-bold text-white mb-1.5 font-['Cinzel'] tracking-wide">
              Sains & Akhir Tirai Besi
            </h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ikuti perlombaan antariksa ke Bulan hingga gelombang reformasi Glasnost-Perestroika yang mengakhiri era Perang Dingin pada 1991.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
