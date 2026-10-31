import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Cookie, Check, X, SlidersHorizontal, Info } from '@phosphor-icons/react';

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
}

const STORAGE_KEY = 'nexus_finance_cookie_preferences';

export const CookieConsent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: true,
    analytics: true,
  });

  useEffect(() => {
    // Check if user has already set cookie preferences
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Small delay on page load before gently sliding up
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      essential: true,
      functional: true,
      analytics: true,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allAccepted));
    setIsOpen(false);
  };

  const handleDeclineOptional = () => {
    const essentialOnly: CookiePreferences = {
      essential: true,
      functional: false,
      analytics: false,
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(essentialOnly));
    setIsOpen(false);
  };

  const handleSaveCustom = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="cookie-consent-modal"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 220 }}
          className="fixed bottom-4 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-lg z-50 select-none font-sans"
          role="dialog"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
        >
          <div className="p-5 sm:p-6 rounded-3xl bg-neutral-950/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.85)] text-white">
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#00e575] shrink-0">
                  <Cookie className="w-5 h-5" weight="fill" />
                </div>
                <div>
                  <h3 id="cookie-title" className="text-base font-bold font-display text-white">
                    Cookie &amp; Privacy Preferences
                  </h3>
                  <p className="text-[11px] text-neutral-400 font-sans">
                    Nexus Finance LTD Data Governance
                  </p>
                </div>
              </div>
              <button
                onClick={handleDeclineOptional}
                className="text-neutral-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
                aria-label="Dismiss banner with essential cookies only"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Description */}
            <p id="cookie-desc" className="text-xs text-neutral-300 leading-relaxed mb-4">
              We use strictly necessary cookies to ensure secure banking sessions and anti-fraud verification, plus functional cookies that remember your previous visit date to accurately calculate your accumulated interest returns.
            </p>

            {/* Detailed Preferences View */}
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3 pt-3 mb-4 border-t border-white/10"
              >
                {/* 1. Essential Cookies */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      Strictly Essential
                      <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full font-mono">
                        Always Active
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">
                      Session encryption, BVN rate limit safeguards, and secure form submissions.
                    </div>
                  </div>
                  <Check className="w-4 h-4 text-[#00e575]" weight="bold" />
                </div>

                {/* 2. Functional Cookies */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div className="pr-3">
                    <div className="text-xs font-semibold text-white">Functional Cookies</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">
                      Remembers your last visit timestamp for the &quot;Since your last visit&quot; yield ticker and stores your preferred loan calculator presets.
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) =>
                        setPreferences({ ...preferences, functional: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00e575]"></div>
                  </label>
                </div>

                {/* 3. Analytics Cookies */}
                <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                  <div className="pr-3">
                    <div className="text-xs font-semibold text-white">Performance Diagnostics</div>
                    <div className="text-[11px] text-neutral-400 mt-0.5">
                      Anonymized analytics to measure page load speeds and interface responsiveness.
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer shrink-0">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                      className="sr-only peer"
                    />
                    <div className="w-9 h-5 bg-neutral-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#00e575]"></div>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-2.5 px-4 rounded-xl bg-[#00e575] hover:bg-[#15f38a] active:scale-95 text-black font-bold text-xs font-sans transition-all shadow-md shadow-[#00e575]/20 cursor-pointer"
              >
                Accept All
              </button>

              {showDetails ? (
                <button
                  onClick={handleSaveCustom}
                  className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white font-semibold text-xs font-sans transition-all cursor-pointer"
                >
                  Save Choices
                </button>
              ) : (
                <button
                  onClick={handleDeclineOptional}
                  className="py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white font-semibold text-xs font-sans transition-all cursor-pointer"
                >
                  Essential Only
                </button>
              )}

              <button
                onClick={() => setShowDetails(!showDetails)}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white text-xs font-sans transition-all flex items-center justify-center cursor-pointer"
                title="Customize specific cookie categories"
              >
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
