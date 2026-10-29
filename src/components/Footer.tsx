import React from 'react';
import { Heart, ShieldCheck, MapPin, Phone, Mail, Award } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-rose-100 pt-16 pb-12 text-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-100">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-rose-500 to-pink-500 text-white flex items-center justify-center font-extrabold text-xl shadow-md shadow-rose-200">
                M
              </div>
              <div>
                <span className="text-xl font-black text-gray-900 tracking-tight">
                  Mom&Baby
                </span>
                <span className="text-rose-500 font-bold text-xs block uppercase tracking-widest -mt-0.5">
                  Care & Love &bull; Hà Nội
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-sm">
              Đồng hành cùng mẹ chia sẻ kiến thức nuôi con hiện đại, san sẻ gánh nặng nuôi con bằng thiết bị thông minh, nơi các mẹ tìm hiểu và học hỏi kiến thức chăm sóc con nhỏ an toàn.
            </p>

            <div className="flex items-center gap-3 text-xs text-rose-700 bg-rose-50 p-3 rounded-2xl border border-rose-100 max-w-sm">
              <ShieldCheck className="w-5 h-5 shrink-0 text-rose-500" />
              <span>Chính sách Bảo Hành Vàng 24T & Mượn Máy Thay Thế 0đ</span>
            </div>
          </div>

          {/* Quick links */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-gray-900">Danh Mục Sản Phẩm</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#san-pham" className="hover:text-rose-600 transition">
                  Máy hút sữa MomCare Pro
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-rose-600 transition">
                  Máy hút siêu êm UltraQuiet S2
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-rose-600 transition">
                  Phễu Silicone Y Tế 21/24/27mm
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-rose-600 transition">
                  Núm Ti Mô Phỏng Khớp Ngậm
                </a>
              </li>
              <li>
                <a href="#san-pham" className="hover:text-rose-600 transition">
                  Túi trữ sữa cảm ứng nhiệt
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-gray-900">Dịch Vụ & Bảo Hành</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#dich-vu" className="hover:text-rose-600 transition">
                  Quy trình mượn máy 0đ
                </a>
              </li>
              <li>
                <a href="#tu-van" className="hover:text-rose-600 transition">
                  Tư vấn kích sữa 1:1 cùng chuyên gia
                </a>
              </li>
              <li>
                <a href="#cong-nghe" className="hover:text-rose-600 transition">
                  Công nghệ hút nhịp sinh học
                </a>
              </li>
              <li>
                <a href="#tu-van" className="hover:text-rose-600 transition">
                  Bảo hành 1 đổi 1 trong 30 ngày
                </a>
              </li>
            </ul>
          </div>

          {/* Showroom Contact */}
          <div className="space-y-3">
            <h4 className="font-bold text-sm text-gray-900">Showroom Hà Nội</h4>
            <div className="space-y-2 text-xs text-gray-500">
              <p className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                <span>Tầng 3, Discovery Complex, 302 Cầu Giấy, HN</span>
              </p>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                <span className="font-bold text-gray-800">0988 123 456 - 1900 6868</span>
              </p>
              <p className="text-[11px] text-gray-400">
                Mở cửa: 08:30 - 21:00 (Hàng ngày)
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© 2026 Mom&Baby Care Hà Nội. San sẻ vất vả, vẹn tròn yêu thương.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Không chứa BPA/Phthalate</span>
            <span>&bull;</span>
            <span>Chuẩn Y Khoa FDA Hoa Kỳ</span>
            <span>&bull;</span>
            <span>Đổi mới 30 ngày</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
