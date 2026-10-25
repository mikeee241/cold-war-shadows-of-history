import React from 'react';
import { ChapterData } from '../../data/chapters';
import {
  Compass,
  CheckCircle,
  ArrowLeft,
  MapPin,
  Calendar,
  Sparkles,
  Info
} from 'lucide-react';

interface MissionCompletionViewProps {
  chapter: ChapterData;
  onBackToChapter: () => void;
  onBackToMap: () => void;
}

export const MissionCompletionView: React.FC<MissionCompletionViewProps> = ({
  chapter,
  onBackToChapter,
  onBackToMap,
}) => {
  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col justify-between">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-archive-grid opacity-25 pointer-events-none" />

      <main className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 flex-1 w-full flex flex-col justify-center">
        <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-sm relative overflow-hidden text-center sm:text-left">
          {/* Header & Verification Stamp */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-950/80 border border-emerald-600/60 flex items-center justify-center text-emerald-400 shrink-0">
                <CheckCircle className="w-7 h-7" />
              </div>
              <div className="text-left">
                <div className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-semibold">
                  Misi Selesai · Fakta Terverifikasi
                </div>
                <h1 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-white tracking-wide">
                  Misi Investigasi Bab 0{chapter.number}
                </h1>
              </div>
            </div>

            <div className="stamp-declassified px-3 py-1 text-xs">
              BERKAS LENGKAP
            </div>
          </div>

          {/* Chapter Accomplishment Overview */}
          <div className="space-y-3">
            <h2 className="font-['Cinzel'] text-lg sm:text-xl font-bold text-amber-200">
              {chapter.title} ({chapter.indonesianTitle})
            </h2>
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-rose-400" />
                <span>{chapter.period}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{chapter.keyLocations[0]}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-400 font-semibold">3 dari 3 Tantangan Berhasil</span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed font-sans pt-2">
              Selamat, Penyelidik! Anda telah berhasil meneliti dokumen deklasifikasi dan menjawab seluruh tantangan sejarah pada bab ini. Pemahaman Anda mengenai dinamika peristiwa {chapter.title} telah tercatat dalam arsip investigasi.
            </p>
          </div>

          {/* Key Facts Summary Review */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Intisari Sejarah yang Anda Pelajari:</span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              {chapter.keyEvents.slice(0, 3).map((event, idx) => (
                <li key={idx} className="flex items-start gap-2 text-left">
                  <span className="text-emerald-400 font-mono font-bold">✓</span>
                  <span>{event}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Future Phase Scope Callout */}
          <div className="p-4 rounded-xl border border-amber-900/50 bg-amber-950/20 text-left space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold">
              <Info className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Catatan Pengembangan Berikutnya</span>
            </div>
            <p className="text-xs text-amber-200/90 leading-relaxed font-sans">
              Sistem perhitungan akumulasi XP, inventarisasi barang bukti sejarah ke dalam jurnal, dan penutupan kampanye akan diaktifkan pada tahap selanjutnya sesuai rencana proyek.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
            <button
              onClick={onBackToChapter}
              aria-label="Kembali ke berkas bab"
              className="min-h-[48px] px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center justify-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Kembali ke Berkas Bab</span>
            </button>

            <button
              onClick={onBackToMap}
              aria-label="Kembali ke peta kampanye untuk memilih bab lain"
              className="min-h-[48px] px-6 py-2.5 bg-rose-800 hover:bg-rose-700 active:bg-rose-900 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
            >
              <Compass className="w-4 h-4 text-rose-300" />
              <span>Pilih Bab Lain di Peta Kampanye</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
