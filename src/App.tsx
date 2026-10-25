/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  CHAPTERS,
  getChapterById,
  getNextChapterId,
  getPreviousChapterId
} from './data/chapters';
import {
  getMissionBriefing,
  getChallengesByChapterId
} from './data/challenges';
import { Navbar } from './components/Navbar';
import { LandingPage } from './components/LandingPage';
import { CampaignMap } from './components/CampaignMap';
import { ChapterDetail } from './components/ChapterDetail';
import { MissionBriefingView } from './components/gameplay/MissionBriefingView';
import { ChallengeView } from './components/gameplay/ChallengeView';
import { MissionCompletionView } from './components/gameplay/MissionCompletionView';
import { AboutModal } from './components/AboutModal';
import { Footer } from './components/Footer';

export type AppView = 'landing' | 'campaign' | 'chapter' | 'briefing' | 'challenge' | 'completion';

export default function App() {
  // Support query parameters for direct navigation & testing
  const [currentPage, setCurrentPage] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const modeParam = params.get('mode');
      if (modeParam === 'briefing') return 'briefing';
      if (modeParam === 'challenge') return 'challenge';
      if (params.get('chapter')) return 'chapter';
      if (params.get('autostart') === '1') return 'campaign';
    }
    return 'landing';
  });

  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const chParam = params.get('chapter');
      if (chParam && getChapterById(chParam)) {
        return chParam;
      }
    }
    return 'chapter-1';
  });

  const [currentChallengeIndex, setCurrentChallengeIndex] = useState<number>(0);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage, selectedChapterId, currentChallengeIndex]);

  const handleStartInvestigation = () => {
    setCurrentPage('campaign');
  };

  const handleSelectChapter = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setCurrentPage('chapter');
  };

  const handleBackToMap = () => {
    setCurrentPage('campaign');
  };

  const handleBackToLanding = () => {
    setCurrentPage('landing');
  };

  const handleNavigateChapter = (chapterId: string) => {
    setSelectedChapterId(chapterId);
  };

  // Gameplay flow handlers
  const handleStartMission = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setCurrentChallengeIndex(0);
    setCurrentPage('briefing');
  };

  const handleStartChallenges = () => {
    setCurrentChallengeIndex(0);
    setCurrentPage('challenge');
  };

  const handleNextChallenge = () => {
    if (!selectedChapterId) return;
    const challenges = getChallengesByChapterId(selectedChapterId);
    if (currentChallengeIndex < challenges.length - 1) {
      setCurrentChallengeIndex((prev) => prev + 1);
    } else {
      setCurrentPage('completion');
    }
  };

  const handleBackToChapter = () => {
    setCurrentPage('chapter');
  };

  const activeChapter = selectedChapterId ? getChapterById(selectedChapterId) : null;
  const previousChapterId = selectedChapterId ? getPreviousChapterId(selectedChapterId) : null;
  const nextChapterId = selectedChapterId ? getNextChapterId(selectedChapterId) : null;

  const activeBriefing = selectedChapterId ? getMissionBriefing(selectedChapterId) : undefined;
  const chapterChallenges = selectedChapterId ? getChallengesByChapterId(selectedChapterId) : [];
  const currentChallenge = chapterChallenges[currentChallengeIndex];

  // Map subpages to Navbar top-level states
  const navbarPage =
    currentPage === 'briefing' || currentPage === 'challenge' || currentPage === 'completion'
      ? 'chapter'
      : currentPage;

  return (
    <div className="min-h-screen bg-[#0b111e] text-slate-100 flex flex-col font-sans selection:bg-rose-900 selection:text-white">
      {/* Universal Top Bar */}
      <Navbar
        currentPage={navbarPage}
        onNavigateLanding={handleBackToLanding}
        onNavigateCampaign={handleStartInvestigation}
        onOpenAbout={() => setIsAboutOpen(true)}
      />

      {/* Main View Router */}
      <div className="flex-1 flex flex-col">
        {currentPage === 'landing' && (
          <LandingPage
            onStartInvestigation={handleStartInvestigation}
            onOpenAbout={() => setIsAboutOpen(true)}
          />
        )}

        {currentPage === 'campaign' && (
          <CampaignMap
            chapters={CHAPTERS}
            onSelectChapter={handleSelectChapter}
            onBackToLanding={handleBackToLanding}
          />
        )}

        {currentPage === 'chapter' && activeChapter && (
          <ChapterDetail
            chapter={activeChapter}
            onBackToMap={handleBackToMap}
            onStartMission={handleStartMission}
            onNavigateChapter={handleNavigateChapter}
            previousChapterId={previousChapterId}
            nextChapterId={nextChapterId}
          />
        )}

        {currentPage === 'briefing' && activeChapter && activeBriefing && (
          <MissionBriefingView
            chapter={activeChapter}
            briefing={activeBriefing}
            onStartChallenges={handleStartChallenges}
            onBackToChapter={handleBackToChapter}
          />
        )}

        {currentPage === 'challenge' && activeChapter && currentChallenge && (
          <ChallengeView
            key={currentChallenge.id}
            chapter={activeChapter}
            challenge={currentChallenge}
            challengeIndex={currentChallengeIndex}
            totalChallenges={chapterChallenges.length}
            onNextChallenge={handleNextChallenge}
            onBackToChapter={handleBackToChapter}
            onBackToMap={handleBackToMap}
          />
        )}

        {currentPage === 'completion' && activeChapter && (
          <MissionCompletionView
            chapter={activeChapter}
            onBackToChapter={handleBackToChapter}
            onBackToMap={handleBackToMap}
          />
        )}
      </div>

      {/* Universal Footer */}
      <Footer
        onOpenAbout={() => setIsAboutOpen(true)}
        onNavigateLanding={handleBackToLanding}
        onNavigateCampaign={handleStartInvestigation}
      />

      {/* Educational & Concept Modal */}
      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
      />
    </div>
  );
}
