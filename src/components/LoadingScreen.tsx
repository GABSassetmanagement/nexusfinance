import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export const LoadingScreen: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Show smooth animated brand splash on initial mount for 1.3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="nexus-loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black select-none pointer-events-auto"
          aria-label="Loading Nexus Finance LTD"
          role="status"
        >
          {/* Ambient radial glow behind the mark */}
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{
                scale: [0.85, 1.25, 0.95],
                opacity: [0.25, 0.65, 0.35],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-44 h-44 rounded-full bg-gradient-to-tr from-[#0055ff]/40 via-[#00e575]/40 to-[#00e575]/20 blur-3xl pointer-events-none"
            />

            {/* Rotating subtle neon ring around mark */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
              className="absolute w-28 h-28 rounded-full border border-dashed border-[#00e575]/40"
            />

            {/* Pulsing inner glow ring */}
            <motion.div
              animate={{
                scale: [0.95, 1.1, 0.95],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="absolute w-24 h-24 rounded-full border border-[#00e575]/50 shadow-[0_0_20px_rgba(0,229,117,0.4)]"
            />

            {/* The Brand Logo Mark: ONLY the logo mark, no text */}
            <motion.div
              animate={{
                scale: [0.94, 1.04, 0.94],
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative z-10 w-20 h-20 flex items-center justify-center filter drop-shadow-[0_0_24px_rgba(0,229,117,0.5)]"
            >
              <img
                src="./assets/nexus/NEXUS-mark-coloured-1x1.png"
                alt="Nexus Finance Logo Mark"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          {/* Minimalist sleek progress bar underneath */}
          <div className="mt-8 w-32 h-1 bg-white/10 rounded-full overflow-hidden relative">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '100%' }}
              transition={{
                repeat: Infinity,
                duration: 1.1,
                ease: 'easeInOut',
              }}
              className="w-1/2 h-full bg-gradient-to-r from-transparent via-[#00e575] to-transparent"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
