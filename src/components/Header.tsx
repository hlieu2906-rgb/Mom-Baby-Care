import React from 'react';
import { ShoppingBag, PhoneCall, Sparkles, ShieldCheck, Clock, MapPin, Ruler } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenFlangeGuide: () => void;
  onOpenConsultation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenFlangeGuide,
  onOpenConsultation,
}) => {
  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white text-xs font-medium py-2 px-4 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase">
              Hà Nội Hỏa Tốc
            </span>
            <span>Giao nhanh 2H nội thành Hà Nội &bull; Miễn phí vận chuyển từ 500.000 ₫</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span className="hidden md:inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-rose-200" />
              Bảo hành vàng 24 tháng - Cho mượn máy 0đ
            </span>
            <a
              href="tel:0988123456"
              className="font-bold hover:text-rose-100 transition inline-flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3" />
              Hotline: 0988 123 456
            </a>
          </div>
        </div>
      </div>

      {/* Main Header / Navigation */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-rose-100 transition-all shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center font-extrabold text-2xl shadow-md shadow-rose-200 group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
                  Mom&Baby
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-rose-100 text-rose-600 uppercase">
                  HN
                </span>
              </div>
              <span className="text-rose-500 font-bold text-[11px] block uppercase tracking-widest -mt-0.5">
                Care & Love &bull; Smart Pump
              </span>
            </div>
          </a>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-semibold text-gray-600">
            <a href="#about" className="hover:text-rose-600 transition-colors">
              Về chúng tôi
            </a>
            <a
              href="#san-pham"
              className="text-rose-600 font-bold hover:text-rose-700 transition-colors flex items-center gap-1"
            >
              <span>Cửa hàng</span>
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 inline-block animate-pulse"></span>
            </a>
            <button
              onClick={onOpenFlangeGuide}
              className="hover:text-rose-600 transition-colors inline-flex items-center gap-1.5 cursor-pointer text-gray-700"
            >
              <Ruler className="w-4 h-4 text-rose-500" />
              <span>Đo size phễu</span>
            </button>
            <a href="#cong-nghe" className="hover:text-rose-600 transition-colors">
              Công nghệ
            </a>
            <a href="#dich-vu" className="hover:text-rose-600 transition-colors">
              Bảo hành vàng
            </a>
            <a href="#lien-he" className="hover:text-rose-600 transition-colors flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>Showroom HN</span>
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Flange Guide button on smaller screens */}
            <button
              onClick={onOpenFlangeGuide}
              className="hidden sm:inline-flex lg:hidden items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl bg-rose-50 text-rose-600 hover:bg-rose-100 transition"
              title="Hướng dẫn đo size phễu"
            >
              <Ruler className="w-3.5 h-3.5" />
              <span>Đo size</span>
            </button>

            {/* Shopping Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="Mở giỏ hàng"
              className="relative p-2.5 sm:px-3 sm:py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-600 transition flex items-center gap-2 border border-rose-200/60 shadow-xs cursor-pointer group"
            >
              <ShoppingBag className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline text-xs font-bold text-gray-800">Giỏ hàng</span>
              {cartCount > 0 && (
                <span className="bg-rose-500 text-white text-[11px] font-extrabold min-w-5 h-5 px-1.5 rounded-full flex items-center justify-center shadow-sm animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* 1:1 Consultation button */}
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-md shadow-rose-200 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-3.5 h-3.5 mr-1.5 hidden sm:inline" />
              Tư vấn 1:1
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
