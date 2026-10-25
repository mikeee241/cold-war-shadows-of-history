import React from 'react';
import { ChapterData } from '../data/chapters';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  Scroll,
  Clock,
  ChevronLeft,
  ChevronRight,
  Info,
  Compass,
  FileCheck
} from 'lucide-react';
import berlinAirliftImage from '../assets/images/berlin_partition_1948_1792401598224.jpg';

interface ChapterDetailProps {
  chapter: ChapterData;
  onBackToMap: () => void;
  onStartMission: (chapterId: string) => void;
  onNavigateChapter: (chapterId: string) => void;
  previousChapterId: string | null;
  nextChapterId: string | null;
}

export const ChapterDetail: React.FC<ChapterDetailProps> = ({
  chapter,
  onBackToMap,
  onStartMission,
  onNavigateChapter,
  previousChapterId,
  nextChapterId,
}) => {
  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-archive-grid opacity-20 pointer-events-none" />

      {/* Chapter Detail Container */}
      <main className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 flex-1 w-full">
        {/* Top Navigation Bar for Chapter View */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-800">
          <button
            onClick={onBackToMap}
            aria-label="Kembali ke peta kampanye (navigasi atas)"
            className="min-h-[44px] inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-slate-200 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Kembali ke Peta</span>
          </button>

          {/* Pagination Controls between Chapters */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => previousChapterId && onNavigateChapter(previousChapterId)}
              disabled={!previousChapterId}
              aria-disabled={!previousChapterId}
              aria-label="Menuju bab sebelumnya"
              className={`min-h-[44px] px-3 py-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                previousChapterId
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 active:bg-slate-950 cursor-pointer'
                  : 'bg-slate-950/80 border-slate-800/40 text-slate-600 opacity-40 cursor-not-allowed pointer-events-none'
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Bab Sebelumnya</span>
            </button>

            <span className="text-xs font-mono text-slate-300 px-2.5 py-1.5 rounded bg-slate-900/60 border border-slate-800">
              Bab 0{chapter.number} / 05
            </span>

            <button
              onClick={() => nextChapterId && onNavigateChapter(nextChapterId)}
              disabled={!nextChapterId}
              aria-disabled={!nextChapterId}
              aria-label="Menuju bab selanjutnya"
              className={`min-h-[44px] px-3 py-2 rounded-lg border text-xs font-medium flex items-center gap-1.5 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                nextChapterId
                  ? 'bg-slate-900 border-slate-700 text-slate-200 hover:bg-slate-800 active:bg-slate-950 cursor-pointer'
                  : 'bg-slate-950/80 border-slate-800/40 text-slate-600 opacity-40 cursor-not-allowed pointer-events-none'
              }`}
            >
              <span className="hidden sm:inline">Bab Berikutnya</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dossier Card Container */}
        <article className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl space-y-8 backdrop-blur-sm">
          {/* Header Metadata */}
          <div className="space-y-4 border-b border-slate-800 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2.5">
                <span className="text-rose-400 font-bold text-sm tracking-wider">
                  BAB 0{chapter.number}
                </span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-slate-400">BERKAS INVESTIGASI {chapter.dossierCode}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-300 bg-amber-950/40 border border-amber-800/50 px-2.5 py-1 rounded">
                <Calendar className="w-3.5 h-3.5" />
                <span className="font-semibold">{chapter.period}</span>
                {chapter.focus && (
                  <span className="text-slate-300">({chapter.focus})</span>
                )}
              </div>
            </div>

            <div>
              {/* Official English Title (Mandatory) */}
              <h1 className="font-['Cinzel'] text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-wide">
                {chapter.title}
              </h1>
              {/* Indonesian Subtitle */}
              <div className="text-base text-rose-300 font-medium mt-1 font-sans">
                {chapter.indonesianTitle}
              </div>
              {/* Operational Geopolitical Theater */}
              <div className="text-xs text-slate-400 mt-2 font-mono flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>Teater Operasi: {chapter.theater}</span>
              </div>
            </div>
          </div>

          {/* Archival Visual / Dossier Sheet Header */}
          {chapter.number === 1 ? (
            /* Chapter 1 Historical Archival Photo (ESM bundled) */
            <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
              <div className="relative aspect-[16/9] sm:aspect-[21/9]">
                <img
                  src={berlinAirliftImage}
                  alt="Ilustrasi dokumenter Operasi Jembatan Udara Berlin (Berlin Airlift) di Bandara Tempelhof 1948"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span>DOKUMEN HISTORIS: BERLIN AIRLIFT (1948–1949)</span>
                  <span className="text-amber-300 font-medium">BANDARA TEMPELHOF</span>
                </div>
              </div>
            </div>
          ) : (
            /* Chapters 2, 3, 4, 5: Authentic Structured Archival Intelligence Sheet */
            <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-5 sm:p-6 relative overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-950/70 border border-rose-800/60 flex items-center justify-center text-rose-400">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Arsip Intelijen & Diplomasi Sejarah
                    </div>
                    <div className="text-sm font-bold text-slate-200 font-['Cinzel']">
                      Lembar Ringkasan Berkas: {chapter.dossierCode}
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="stamp-declassified px-2.5 py-0.5 text-[10px]">
                    DEKLASIFIKASI
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    STATUS: TERVERIFIKASI
                  </span>
                </div>
              </div>
              <div className="text-xs text-slate-400 font-mono flex flex-wrap items-center gap-x-4 gap-y-1">
                <span>DOKUMEN KRONOLOGI: {chapter.period}</span>
                <span aria-hidden="true">·</span>
                <span>FOKUS: {chapter.focus ?? chapter.indonesianTitle}</span>
                <span aria-hidden="true">·</span>
                <span>RUJUKAN: ARSIP PERANG DINGIN INTERNASIONAL</span>
              </div>
            </div>
          )}

          {/* Section: Ringkasan Bab (Summary) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              <Scroll className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Ringkasan Sejarah Bab</span>
            </div>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans font-normal">
              {chapter.summary}
            </p>
          </div>

          {/* 3 Investigation Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pt-4 border-t border-slate-800">
            {/* Lokasi Kunci */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-sky-400 font-semibold uppercase">
                <MapPin className="w-3.5 h-3.5 shrink-0" />
                <span>Lokasi Kunci</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {chapter.keyLocations.map((loc, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-500/80 shrink-0" />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Peristiwa Utama */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-rose-400 font-semibold uppercase">
                <Clock className="w-3.5 h-3.5 shrink-0" />
                <span>Peristiwa Utama</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {chapter.keyEvents.map((ev, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500/80 mt-1.5 shrink-0" />
                    <span>{ev}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tokoh Bersejarah */}
            <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono text-amber-400 font-semibold uppercase">
                <Users className="w-3.5 h-3.5 shrink-0" />
                <span>Tokoh Terkait</span>
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {chapter.keyFigures.map((fig, idx) => (
                  <li key={idx} className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shrink-0" />
                    <span>{fig}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Gameplay Status Callout */}
          <div className="p-5 rounded-xl border border-slate-800 bg-slate-950/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-400 font-bold">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Status Misi: Siap Dimainkan</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Tekan tombol <strong>"Mulai Misi Bab Ini"</strong> untuk membuka pengarahan intelijen dan menjawab 3 tantangan sejarah terverifikasi. Sistem perolehan XP dan inventarisasi barang bukti akan diaktifkan pada tahap selanjutnya sesuai rencana MVP.
            </p>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <button
              onClick={onBackToMap}
              aria-label="Kembali ke peta kampanye (navigasi bawah)"
              className="min-h-[48px] px-5 py-2.5 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-slate-200 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Peta</span>
            </button>

            {/* Primary Action Button: Launch Mission */}
            <button
              onClick={() => onStartMission(chapter.id)}
              aria-label={`Mulai Misi Investigasi untuk ${chapter.title}`}
              className="min-h-[48px] px-6 py-2.5 bg-rose-800 hover:bg-rose-700 active:bg-rose-900 text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-rose-900/40 transition-all flex items-center justify-center gap-2.5 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none cursor-pointer group"
            >
              <Compass className="w-4 h-4 text-rose-300 group-hover:rotate-45 transition-transform" />
              <span>Mulai Misi Bab Ini</span>
              <ChevronRight className="w-4 h-4 text-rose-200 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </article>
      </main>
    </div>
  );
};
