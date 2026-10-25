import React from 'react';
import { ChapterData } from '../../data/chapters';
import { MissionBriefing } from '../../data/challenges';
import {
  ArrowLeft,
  Compass,
  FileText,
  UserCheck,
  CheckCircle2,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';

interface MissionBriefingViewProps {
  chapter: ChapterData;
  briefing: MissionBriefing;
  onStartChallenges: () => void;
  onBackToChapter: () => void;
}

export const MissionBriefingView: React.FC<MissionBriefingViewProps> = ({
  chapter,
  briefing,
  onStartChallenges,
  onBackToChapter,
}) => {
  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col justify-between">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-archive-grid opacity-25 pointer-events-none" />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex-1 w-full flex flex-col justify-center">
        {/* Top Navigation */}
        <div className="mb-6 pb-4 border-b border-slate-800 flex items-center justify-between">
          <button
            onClick={onBackToChapter}
            aria-label="Kembali ke berkas bab"
            className="min-h-[44px] inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-slate-200 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Kembali ke Berkas Bab</span>
          </button>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="text-amber-400 font-bold">BAB 0{chapter.number}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-300 font-['Cinzel']">{chapter.title}</span>
          </div>
        </div>

        {/* Briefing Dossier Board */}
        <div className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8 backdrop-blur-sm relative overflow-hidden">
          {/* Header Metadata */}
          <div className="space-y-3 border-b border-slate-800 pb-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-rose-400 font-semibold tracking-wider">
                <Compass className="w-4 h-4" />
                <span>PENGANTAR MISI INVESTIGASI</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="stamp-classified px-2.5 py-0.5 text-[10px]">
                  BERKAS AKTIF
                </span>
                <span className="text-slate-400">KODE: {chapter.dossierCode}</span>
              </div>
            </div>

            <h1 className="font-['Cinzel'] text-2xl sm:text-3xl font-extrabold text-white tracking-wide">
              Pengarahan Intelijen: {chapter.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-sans">
              Subjudul: {chapter.indonesianTitle} ({chapter.period})
            </p>
          </div>

          {/* Officer Identity Card with Fictional Character Disclaimer */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-800/80">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider font-semibold">
                <UserCheck className="w-4 h-4 text-amber-400" />
                <span>Pemandu Narasi Permainan</span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-sans font-medium bg-amber-500/10 text-amber-300 border border-amber-500/30 self-start sm:self-auto">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                Karakter fiktif dalam narasi permainan
              </span>
            </div>

            <div className="flex items-start gap-4 pt-1">
              <div className="w-12 h-12 rounded-lg bg-rose-950/80 border border-rose-800/80 flex items-center justify-center text-rose-400 shrink-0">
                <UserCheck className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="text-base sm:text-lg font-bold text-slate-100 font-['Cinzel']">
                  {briefing.officerName}
                </div>
                <div className="text-xs sm:text-sm text-slate-300 font-sans">
                  {briefing.officerRole}
                </div>
                <p className="text-[11px] text-slate-400 italic pt-0.5">
                  Tokoh di atas adalah karakter fiktif yang memandu narasi permainan edukasi ini, bukan tokoh sejarah nyata.
                </p>
              </div>
            </div>
          </div>

          {/* Dialogue / Narrative Paragraphs */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Narasi Permainan (Instruksi Misi)</span>
              </div>
              <span className="text-[11px] text-slate-500 font-sans normal-case">
                Skenario Naratif
              </span>
            </div>
            <div className="space-y-3 bg-slate-950/50 p-5 rounded-xl border border-slate-800/80">
              {briefing.briefingText.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                  "{paragraph}"
                </p>
              ))}
            </div>
          </div>

          {/* Investigative Directives (Historical Facts) */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <div className="flex items-center justify-between gap-2 text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Materi Sejarah Nyata yang Diselidiki</span>
              </div>
              <span className="text-[11px] text-emerald-400 font-sans normal-case">
                Fakta Historis
              </span>
            </div>
            <ul className="space-y-2.5">
              {briefing.directives.map((directive, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 mt-0.5 shrink-0" />
                  <span>{directive}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Action Footer */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-6 border-t border-slate-800">
            <button
              onClick={onBackToChapter}
              aria-label="Batalkan pengarahan dan kembali ke berkas bab"
              className="min-h-[48px] px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer text-center"
            >
              Kembali ke Berkas Bab
            </button>

            <button
              onClick={onStartChallenges}
              aria-label="Mulai tantangan investigasi sejarah untuk bab ini"
              className="min-h-[48px] px-6 py-3 bg-rose-800 hover:bg-rose-700 active:bg-rose-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-rose-900/30 transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:outline-none cursor-pointer group"
            >
              <span>Mulai Tantangan Investigasi</span>
              <ChevronRight className="w-4 h-4 text-rose-200 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
