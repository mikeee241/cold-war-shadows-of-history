import React, { useEffect, useRef } from 'react';
import { X, GraduationCap, Shield, Target, FileText } from 'lucide-react';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      // Autofocus close button for accessible keyboard navigation
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 50);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="about-modal-title"
      aria-describedby="about-modal-desc"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col focus-visible:outline-none"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/70">
          <div className="flex items-center gap-2.5">
            <GraduationCap className="w-5 h-5 text-amber-400 shrink-0" />
            <h2 id="about-modal-title" className="text-base sm:text-lg font-semibold text-slate-100 font-['Cinzel'] tracking-wide">
              Tentang Proyek Edukasi
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="min-h-[40px] min-w-[40px] p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:outline-none flex items-center justify-center cursor-pointer"
            aria-label="Tutup jendela informasi (tombol silang)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
          {/* Ringkasan Konsep */}
          <div>
            <div className="text-xs uppercase tracking-widest text-amber-400/90 font-mono mb-1 font-semibold">
              Konsep Permainan
            </div>
            <h3 className="text-base font-semibold text-white mb-2">
              COLD WAR: SHADOWS OF HISTORY
            </h3>
            <p id="about-modal-desc" className="text-slate-300">
              Game investigasi sejarah berbasis web yang dirancang khusus untuk membantu siswa SMA/SMK memahami dinamika Perang Dingin (1945–1991). Pemain berperan sebagai penyelidik sejarah junior yang menelaah arsip diplomasi, menelusuri lokasi historis penting, dan mengungkap hubungan sebab-akibat antarperistiwa.
            </p>
          </div>

          {/* Tujuan Pembelajaran */}
          <div className="border-t border-slate-800 pt-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-400/90 font-mono mb-3 font-semibold">
              <Target className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Tujuan Pembelajaran Kurikulum Sejarah</span>
            </div>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-mono font-bold text-xs mt-0.5 shrink-0">01.</span>
                <span>Memahami latar belakang persaingan Amerika Serikat dan Uni Soviet pasca-Perang Dunia II serta pembagian Berlin.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-mono font-bold text-xs mt-0.5 shrink-0">02.</span>
                <span>Mengidentifikasi perbedaan ideologi demokrasi kapitalis dan komunisme serta pembentukan aliansi NATO dan Pakta Warsawa.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-mono font-bold text-xs mt-0.5 shrink-0">03.</span>
                <span>Menganalisis Krisis Rudal Kuba 1962 sebagai titik balik ketegangan nuklir paling kritis dalam sejarah modern.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-mono font-bold text-xs mt-0.5 shrink-0">04.</span>
                <span>Menelaah perlombaan sains dan teknologi antariksa mulai dari satelit Sputnik 1 hingga pendaratan manusia di Bulan oleh misi Apollo 11.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-rose-400 font-mono font-bold text-xs mt-0.5 shrink-0">05.</span>
                <span>Menjelaskan proses runtuhnya Tembok Berlin, kebijakan Glasnost dan Perestroika, serta pembubaran Uni Soviet pada 1991.</span>
              </li>
            </ul>
          </div>

          {/* Peran Pemain & Metodologi */}
          <div className="border-t border-slate-800 pt-4 grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-1.5">
                <Shield className="w-4 h-4 text-rose-400 shrink-0" />
                <span>Peran Penyelidik</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Pemain bukan sekadar membaca teks, melainkan membaca konteks arsip, menganalisis situasi geopolitik, dan memverifikasi bukti sejarah.
              </p>
            </div>
            <div className="bg-slate-950/50 p-4 rounded-lg border border-slate-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200 mb-1.5">
                <FileText className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Rujukan Sejarah</span>
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Materi disusun berdasarkan catatan peristiwa faktual, arsip deklasifikasi, dan kronologi internasional yang tepercaya.
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-4">
            <div className="text-xs font-mono uppercase tracking-wider text-amber-300 font-semibold mb-1">
              Pengalaman Belajar
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Jelajahi lima bab kronologis, jawab tantangan sejarah, dan gunakan rujukan yang tersedia untuk memperdalam pemahaman tentang Perang Dingin.
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950/70 flex justify-end">
          <button
            onClick={onClose}
            aria-label="Tutup jendela informasi tentang game"
            className="min-h-[44px] px-5 py-2.5 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 active:bg-slate-900 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:outline-none cursor-pointer"
          >
            Tutup Informasi
          </button>
        </div>
      </div>
    </div>
  );
};
