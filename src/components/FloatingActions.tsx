import React from 'react';
import { ShoppingBag, PhoneCall, ArrowUp, MessageCircle } from 'lucide-react';

interface FloatingActionsProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenConsultation: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  cartCount,
  onOpenCart,
  onOpenConsultation,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
      
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="pointer-events-auto w-10 h-10 rounded-full bg-white/90 text-gray-600 hover:text-gray-900 shadow-md border border-gray-200 flex items-center justify-center transition hover:-translate-y-0.5 cursor-pointer"
        title="Lên đầu trang"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Quick Consultation button */}
      <button
        onClick={onOpenConsultation}
        className="pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-lg shadow-emerald-200/50 transition transform hover:-translate-y-0.5 cursor-pointer"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="hidden sm:inline">Hỏi chuyên gia</span>
      </button>

      {/* Hotline Call button */}
      <a
        href="tel:0988123456"
        className="pointer-events-auto w-12 h-12 rounded-full bg-gradient-to-tr from-amber-500 to-orange-500 text-white flex items-center justify-center shadow-lg shadow-amber-200/50 transition transform hover:-translate-y-0.5 hover:scale-105"
        title="Gọi hotline tư vấn"
      >
        <PhoneCall className="w-5 h-5 animate-pulse" />
      </a>

      {/* Floating Cart Button */}
      <button
        onClick={onOpenCart}
        className="pointer-events-auto relative w-14 h-14 rounded-full bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center shadow-xl shadow-rose-300 transition transform hover:-translate-y-0.5 hover:scale-105 cursor-pointer group"
        title="Xem giỏ hàng"
      >
        <ShoppingBag className="w-6 h-6 group-hover:scale-110 transition-transform" />
        {cartCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-amber-400 text-gray-900 text-xs font-black w-6 h-6 rounded-full flex items-center justify-center shadow border-2 border-white animate-bounce">
            {cartCount}
          </span>
        )}
      </button>

    </div>
  );
};
