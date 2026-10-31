import React, { useEffect } from 'react';
import { CheckCircle, Info, X } from '@phosphor-icons/react';

export interface SnackbarMessage {
  id: string;
  text: string;
  actionLabel?: string;
  onAction?: () => void;
  type?: 'success' | 'info';
}

interface MaterialSnackbarProps {
  message: SnackbarMessage | null;
  onClose: () => void;
}

export const MaterialSnackbar: React.FC<MaterialSnackbarProps> = ({
  message,
  onClose,
}) => {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 4500);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[92vw] sm:max-w-md w-full px-3 pointer-events-none animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      <div className="pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-2xl bg-neutral-900/95 border border-white/15 text-white shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-2.5 min-w-0">
          {message.type === 'info' ? (
            <Info className="w-4 h-4 text-cyan-400 shrink-0" weight="fill" />
          ) : (
            <CheckCircle className="w-4 h-4 text-[#00e575] shrink-0" weight="fill" />
          )}
          <span className="text-xs sm:text-sm font-medium font-sans text-slate-100 truncate">
            {message.text}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          {message.actionLabel && message.onAction && (
            <button
              onClick={() => {
                message.onAction?.();
                onClose();
              }}
              className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider text-[#00e575] hover:text-[#15f38a] hover:bg-emerald-500/10 rounded-lg transition-colors cursor-pointer"
            >
              {message.actionLabel}
            </button>
          )}

          <button
            onClick={onClose}
            aria-label="Dismiss notification"
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
