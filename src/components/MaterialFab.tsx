import React, { useState, useEffect } from 'react';
import { ArrowUp } from '@phosphor-icons/react';

interface MaterialFabProps {
  onScrollToCalculator?: () => void;
  isModalOpen?: boolean;
}

export const MaterialFab: React.FC<MaterialFabProps> = ({
  isModalOpen = false,
}) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollTop(scrollY > 500 && !isModalOpen);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isModalOpen]);

  if (!showScrollTop || isModalOpen) return null;

  return (
    <aside
      aria-label="Quick Navigation"
      className="fixed bottom-6 right-5 sm:bottom-8 sm:right-8 z-40 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* Scroll to Top Small FAB */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
        className="w-10 h-10 rounded-full bg-neutral-900/90 text-slate-300 hover:text-white border border-white/15 backdrop-blur-md flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer m3-ripple"
      >
        <ArrowUp className="w-4 h-4" weight="bold" />
      </button>
    </aside>
  );
};
