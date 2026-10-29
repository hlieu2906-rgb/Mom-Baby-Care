import React from 'react';
import { CheckCircle2, ShoppingBag, X } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
  onOpenCart?: () => void;
}

export const NotificationToast: React.FC<ToastProps> = ({
  message,
  onClose,
  onOpenCart,
}) => {
  if (!message) return null;

  return (
    <div className="fixed top-24 right-4 sm:right-6 z-50 animate-slideDown max-w-sm w-full">
      <div className="bg-gray-900/95 text-white p-4 rounded-2xl shadow-2xl backdrop-blur-md flex items-center justify-between gap-3 border border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <p className="text-xs font-semibold leading-snug">{message}</p>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {onOpenCart && (
            <button
              onClick={onOpenCart}
              className="text-xs text-rose-300 hover:text-white font-bold underline px-2 py-1 cursor-pointer"
            >
              Xem giỏ
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
