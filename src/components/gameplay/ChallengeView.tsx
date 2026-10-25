import React, { useState, useEffect } from 'react';
import { ChapterData } from '../../data/chapters';
import { Challenge } from '../../data/challenges';
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  XCircle,
  HelpCircle,
  ChevronRight,
  RotateCcw,
  Sparkles,
  BookOpen,
  ExternalLink,
  Keyboard,
  Compass
} from 'lucide-react';

interface ChallengeViewProps {
  chapter: ChapterData;
  challenge: Challenge;
  challengeIndex: number;
  totalChallenges: number;
  onNextChallenge: () => void;
  onBackToChapter: () => void;
  onBackToMap?: () => void;
}

export const ChallengeView: React.FC<ChallengeViewProps> = ({
  chapter,
  challenge,
  challengeIndex,
  totalChallenges,
  onNextChallenge,
  onBackToChapter,
  onBackToMap,
}) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);

  // Reset answer state whenever the challenge changes
  useEffect(() => {
    setSelectedOption(null);
    setHasSubmitted(false);
  }, [challenge.id]);

  const handleSelectOption = (index: number) => {
    if (hasSubmitted) return; // Prevent re-selection while submitted
    setSelectedOption(index);
    setHasSubmitted(true);
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setHasSubmitted(false);
  };

  const isCorrect = selectedOption === challenge.correctOptionIndex;
  const isLastChallenge = challengeIndex === totalChallenges - 1;
  const optionLetters = ['A', 'B', 'C', 'D'];

  // Global Keyboard Navigation:
  // - A, B, C, D or 1, 2, 3, 4: Select an option when question is active
  // - R, Enter, Space: Retry when answered incorrectly
  // - Enter, Space, N: Proceed to next challenge when answered correctly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Leave native keyboard behavior alone for interactive elements.
      // In particular, Enter/Space on the focused "Next" button must not
      // also trigger this global shortcut, or the next question can be skipped.
      const target = e.target;
      if (target instanceof HTMLElement && target.closest(
        'button, a, input, textarea, select, [contenteditable="true"], [role="button"], [role="radio"]'
      )) {
        return;
      }

      const key = e.key.toUpperCase();

      if (!hasSubmitted) {
        if (key === 'A' || key === '1') {
          e.preventDefault();
          handleSelectOption(0);
        } else if (key === 'B' || key === '2') {
          e.preventDefault();
          handleSelectOption(1);
        } else if (key === 'C' || key === '3') {
          e.preventDefault();
          handleSelectOption(2);
        } else if (key === 'D' || key === '4') {
          e.preventDefault();
          handleSelectOption(3);
        }
      } else {
        if (!isCorrect && (key === 'R' || key === 'ENTER' || key === ' ')) {
          e.preventDefault();
          handleRetry();
        } else if (isCorrect && (key === 'ENTER' || key === ' ' || key === 'N')) {
          e.preventDefault();
          onNextChallenge();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasSubmitted, isCorrect, onNextChallenge]);

  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col justify-between">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-archive-grid opacity-20 pointer-events-none" />

      <main className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex-1 w-full">
        {/* Breadcrumb Navigation Trail (Orientation Aid) */}
        <nav aria-label="Alur navigasi hierarki" className="mb-4 flex items-center gap-1.5 text-xs font-mono text-slate-400 flex-wrap">
          {onBackToMap && (
            <>
              <button
                onClick={onBackToMap}
                className="hover:text-amber-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:underline flex items-center gap-1"
                aria-label="Kembali ke Peta Kampanye"
              >
                <Compass className="w-3.5 h-3.5 text-rose-400" />
                <span>Peta Kampanye</span>
              </button>
              <span className="text-slate-600" aria-hidden="true">/</span>
            </>
          )}
          <button
            onClick={onBackToChapter}
            className="hover:text-amber-300 transition-colors cursor-pointer focus-visible:outline-none focus-visible:underline"
            aria-label={`Kembali ke Berkas Bab 0${chapter.number}`}
          >
            Bab 0{chapter.number}: {chapter.title}
          </button>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span className="text-amber-400 font-semibold">Tantangan 0{challengeIndex + 1} dari 0{totalChallenges}</span>
        </nav>

        {/* Top Progress & Navigation Header */}
        <div className="mb-6 pb-4 border-b border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <button
            onClick={onBackToChapter}
            aria-label="Kembali ke berkas bab"
            className="min-h-[44px] self-start inline-flex items-center gap-2 px-3.5 py-2 bg-slate-900 hover:bg-slate-800 active:bg-slate-950 text-slate-200 border border-slate-700/80 rounded-lg text-xs sm:text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-slate-400" />
            <span>Kembali ke Berkas Bab</span>
          </button>

          {/* Stepper Progress Indicator */}
          <div
            className="flex items-center justify-between sm:justify-end gap-3 bg-slate-950/70 border border-slate-800/80 px-3.5 py-2 rounded-xl"
            role="progressbar"
            aria-valuenow={challengeIndex + 1}
            aria-valuemin={1}
            aria-valuemax={totalChallenges}
            aria-label={`Kemajuan tantangan: ${challengeIndex + 1} dari ${totalChallenges}`}
          >
            <span className="text-xs font-mono text-slate-300">
              Pertanyaan <strong className="text-amber-400 font-bold">0{challengeIndex + 1}</strong> dari 0{totalChallenges}
            </span>
            <div className="flex items-center gap-1.5" aria-hidden="true">
              {Array.from({ length: totalChallenges }).map((_, idx) => (
                <div
                  key={idx}
                  title={`Tantangan ${idx + 1} ${
                    idx === challengeIndex
                      ? '(Sedang Dikerjakan)'
                      : idx < challengeIndex
                      ? '(Selesai)'
                      : '(Belum Dikerjakan)'
                  }`}
                  className={`h-2.5 rounded-full transition-all ${
                    idx === challengeIndex
                      ? 'w-7 bg-amber-500 ring-2 ring-amber-400/40'
                      : idx < challengeIndex
                      ? 'w-2.5 bg-emerald-500'
                      : 'w-2.5 bg-slate-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Main Challenge Board */}
        <article className="bg-slate-900/95 border border-slate-700/80 rounded-2xl p-5 sm:p-8 shadow-2xl space-y-6 backdrop-blur-sm">
          {/* Challenge Header & Context */}
          <div className="space-y-3 border-b border-slate-800 pb-5">
            <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <div className="flex items-center gap-2 text-rose-400 font-semibold tracking-wider">
                <HelpCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>BAB 0{chapter.number} · {chapter.title}</span>
              </div>
              <div className="flex items-center gap-1.5 text-amber-300 bg-amber-950/40 border border-amber-800/50 px-2.5 py-0.5 rounded font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>Tahun {challenge.year}</span>
              </div>
            </div>

            <h1 className="font-['Cinzel'] text-xl sm:text-2xl font-bold text-white tracking-wide">
              {challenge.title}
            </h1>

            {/* Historical Context Scenario */}
            <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              <span className="font-mono text-amber-400 text-xs uppercase tracking-wider block mb-1 font-semibold">
                Konteks Arsip Sejarah:
              </span>
              {challenge.context}
            </div>
          </div>

          {/* Question Statement & Keyboard Hint */}
          <div className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
              <h2 className="text-base sm:text-lg font-semibold text-slate-100 font-sans leading-snug">
                {challenge.question}
              </h2>
            </div>
            <div className="flex items-center justify-between gap-2 text-xs text-slate-400 font-mono">
              <span>Pilih satu jawaban yang paling tepat:</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-slate-500">
                <Keyboard className="w-3 h-3 text-slate-400" />
                <span>Pintas tombol: A, B, C, D</span>
              </span>
            </div>
          </div>

          {/* Options Grid */}
          <div className="space-y-3 pt-1" role="radiogroup" aria-label={challenge.question}>
            {challenge.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrectOption = idx === challenge.correctOptionIndex;

              let buttonStyle = 'bg-slate-950/60 border-slate-800 hover:border-slate-600 text-slate-200';
              let badgeStyle = 'bg-slate-900 border-slate-700 text-slate-300';
              let statusBadge = null;

              if (hasSubmitted) {
                if (isSelected && isCorrect) {
                  // User chose this and it's correct
                  buttonStyle = 'bg-emerald-950/70 border-emerald-500 text-emerald-100 shadow-md shadow-emerald-950/50 ring-1 ring-emerald-500/50';
                  badgeStyle = 'bg-emerald-700 border-emerald-400 text-white font-extrabold';
                  statusBadge = (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-900/90 text-emerald-200 border border-emerald-500/80 text-[11px] font-mono font-bold shrink-0 self-center">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-300" />
                      <span>Jawaban Anda: Benar</span>
                    </span>
                  );
                } else if (isSelected && !isCorrect) {
                  // User chose this and it's incorrect
                  buttonStyle = 'bg-rose-950/70 border-rose-600 text-rose-100 shadow-md shadow-rose-950/50 ring-1 ring-rose-600/50';
                  badgeStyle = 'bg-rose-700 border-rose-400 text-white font-extrabold';
                  statusBadge = (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-rose-900/90 text-rose-200 border border-rose-500/80 text-[11px] font-mono font-bold shrink-0 self-center">
                      <XCircle className="w-3.5 h-3.5 text-rose-300" />
                      <span>Jawaban Anda: Belum Tepat</span>
                    </span>
                  );
                } else if (isCorrectOption) {
                  // Show which option was the correct one
                  buttonStyle = 'bg-emerald-950/30 border-emerald-600/70 text-emerald-200 border-dashed';
                  badgeStyle = 'bg-emerald-900/90 border-emerald-500 text-emerald-200 font-bold';
                  statusBadge = (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 border border-emerald-600/60 text-[11px] font-mono font-semibold shrink-0 self-center">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Kunci Jawaban Tepat</span>
                    </span>
                  );
                } else {
                  buttonStyle = 'bg-slate-950/40 border-slate-900 text-slate-500 opacity-50';
                  badgeStyle = 'bg-slate-950 border-slate-800 text-slate-600';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasSubmitted}
                  role="radio"
                  aria-checked={isSelected}
                  aria-label={`Pilihan ${optionLetters[idx]}: ${option}${
                    hasSubmitted
                      ? isSelected && isCorrect
                        ? ' (Jawaban Anda: Benar)'
                        : isSelected && !isCorrect
                        ? ' (Jawaban Anda: Belum Tepat)'
                        : isCorrectOption
                        ? ' (Kunci Jawaban yang Benar)'
                        : ''
                      : ''
                  }`}
                  className={`w-full min-h-[52px] p-3.5 sm:p-4 rounded-xl border text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none cursor-pointer ${buttonStyle}`}
                >
                  <div className="flex items-start gap-3.5 min-w-0 flex-1">
                    <span
                      className={`w-7 h-7 rounded-lg border font-mono font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 transition-colors ${badgeStyle}`}
                    >
                      {optionLetters[idx]}
                    </span>
                    <span className="text-xs sm:text-sm font-sans leading-relaxed pt-0.5 text-slate-200 flex-1">
                      {option}
                    </span>
                  </div>
                  {statusBadge && (
                    <div className="self-end sm:self-center pl-10 sm:pl-0">
                      {statusBadge}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feedback & Historical Explanation */}
          {hasSubmitted && (
            <div
              className={`p-5 rounded-xl border space-y-4 animate-in fade-in duration-300 ${
                isCorrect
                  ? 'bg-emerald-950/40 border-emerald-700/80 text-emerald-200'
                  : 'bg-rose-950/40 border-rose-700/80 text-rose-200'
              }`}
            >
              {/* Header Status with Non-Color Distinction */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-800/80">
                <div className="flex items-center gap-2.5 text-sm font-bold font-mono">
                  {isCorrect ? (
                    <>
                      <div className="w-7 h-7 rounded-lg bg-emerald-900/80 border border-emerald-500 flex items-center justify-center shrink-0">
                        <CheckCircle className="w-4 h-4 text-emerald-300" />
                      </div>
                      <span className="text-emerald-300 tracking-wider">
                        STATUS: FAKTA TERVERIFIKASI (JAWABAN TEPAT)
                      </span>
                    </>
                  ) : (
                    <>
                      <div className="w-7 h-7 rounded-lg bg-rose-900/80 border border-rose-500 flex items-center justify-center shrink-0">
                        <XCircle className="w-4 h-4 text-rose-300" />
                      </div>
                      <span className="text-rose-300 tracking-wider">
                        STATUS: PERLU DITELITI KEMBALI (JAWABAN BELUM TEPAT)
                      </span>
                    </>
                  )}
                </div>
                <span className="text-[11px] font-mono text-slate-400">
                  {isCorrect ? 'Analisis Dokumen Berhasil' : 'Tidak Ada Penalti · Coba Lagi'}
                </span>
              </div>

              {/* Historical Explanation */}
              <div className="space-y-1.5 text-xs sm:text-sm leading-relaxed">
                <div className="font-mono text-xs uppercase tracking-wider opacity-90 flex items-center gap-1.5 font-semibold text-slate-300">
                  <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                  <span>Penjelasan Konteks Sejarah:</span>
                </div>
                <p className="font-sans text-slate-200">
                  {challenge.explanation}
                </p>
              </div>

              {/* Referensi sumber sejarah */}
              {challenge.sources && challenge.sources.length > 0 && (
                <div className="pt-3 border-t border-slate-800/80 space-y-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
                    <ExternalLink className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>Sumber & Dokumen Rujukan Sejarah Terverifikasi:</span>
                  </div>
                  <div className="grid gap-2">
                    {challenge.sources.map((source, sIdx) => (
                      <a
                        key={sIdx}
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start justify-between gap-3 p-2.5 rounded-lg bg-slate-950/80 hover:bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all group text-left focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                        aria-label={`Buka dokumen rujukan: ${source.title} (${source.institution}) di tab baru`}
                      >
                        <div className="space-y-0.5 min-w-0 flex-1">
                          <div className="text-xs font-medium text-slate-200 group-hover:text-amber-300 transition-colors flex items-center gap-1.5 flex-wrap">
                            <span>{source.title}</span>
                            {source.type && (
                              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800/90 text-slate-300 border border-slate-700 shrink-0">
                                {source.type}
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-slate-400 font-mono flex items-center gap-2 flex-wrap">
                            <span className="text-slate-300 font-medium">{source.institution}</span>
                            {source.note && (
                              <>
                                <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
                                <span className="text-slate-400 italic text-[11px]">{source.note}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-400 shrink-0 mt-0.5 transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons for Feedback */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                {!isCorrect ? (
                  <button
                    onClick={handleRetry}
                    aria-label="Coba jawab lagi tanpa penalti"
                    className="w-full sm:w-auto min-h-[46px] px-5 py-2.5 bg-rose-800 hover:bg-rose-700 active:bg-rose-900 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none cursor-pointer shadow-md"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Coba Jawab Lagi (Tantangan 0{challengeIndex + 1})</span>
                    <span className="hidden sm:inline text-[11px] opacity-75 font-mono">(Tekan R / Enter)</span>
                  </button>
                ) : (
                  <button
                    onClick={onNextChallenge}
                    aria-label={
                      isLastChallenge
                        ? "Selesaikan seluruh tantangan dan buka debriefing misi bab ini"
                        : `Lanjut ke tantangan sejarah berikutnya (${challengeIndex + 2} dari ${totalChallenges})`
                    }
                    className="w-full sm:w-auto min-h-[46px] px-6 py-2.5 bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none cursor-pointer shadow-md ml-auto"
                  >
                    <span>
                      {isLastChallenge
                        ? `Selesaikan Misi & Buka Debriefing (0${totalChallenges} / 0${totalChallenges})`
                        : `Lanjut ke Tantangan Berikutnya (0${challengeIndex + 2} / 0${totalChallenges})`}
                    </span>
                    {isLastChallenge ? (
                      <Sparkles className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                    <span className="hidden sm:inline text-[11px] opacity-75 font-mono">(Tekan Enter ↵)</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </article>
      </main>
    </div>
  );
};
