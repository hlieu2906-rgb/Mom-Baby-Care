import React from 'react';
import { Lightbulb, Leaf, Handshake, Check, ShieldCheck, HeartHandshake, Sparkles } from 'lucide-react';

export const HighlightsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-rose-500" />
            <span>Cam Kết Chất Lượng Chuẩn Y Khoa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Điểm Nổi Bật Vượt Trội
          </h2>
          <p className="text-gray-500 mt-3 text-sm sm:text-base leading-relaxed">
            Thiết kế vì sự thoải mái của mẹ và dòng sữa ngọt ngào cho bé yêu.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Công nghệ */}
          <div
            id="cong-nghe"
            className="flex flex-col rounded-3xl bg-[#FCF9F6] border border-rose-100/80 p-7 sm:p-8 hover:shadow-xl hover:border-rose-300 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center text-2xl mb-5 font-bold shadow-xs group-hover:scale-105 transition-transform">
              💡
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-500 mb-1">
              Công nghệ độc quyền
            </span>
            <h3 className="text-xl font-black text-gray-900 mb-4 leading-snug">
              Hút Sữa Thông Minh & Cá Nhân Hóa
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Hút êm chuẩn y khoa – Tùy chỉnh nhịp sinh học:</strong> Mô phỏng chính xác nhịp nhấp nhả và lực hút tự nhiên của trẻ nhỏ, tích hợp nhiều cấp độ massage và vắt sữa giúp kích sữa về nhanh, giảm thiểu tình trạng đau rát hay tổn thương mô ngực.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Đèn LED & Màn hình cảm ứng ghi nhớ thông minh:</strong> Máy tự động lưu chế độ và lực hút yêu thích cho lần sau, đèn LED dịu nhẹ dễ thao tác trong đêm mà không làm bé thức giấc.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-600 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Thiết kế rảnh tay & Siêu nhẹ:</strong> Gọn nhẹ trong áo ngực, độ ồn thấp (dưới 40dB) giúp mẹ tự do làm việc, di chuyển hoặc thư giãn thảnh thơi.
                </span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Hệ sinh thái an toàn */}
          <div
            id="he-sinh-thai"
            className="flex flex-col rounded-3xl bg-[#FCF9F6] border border-amber-100/80 p-7 sm:p-8 hover:shadow-xl hover:border-amber-300 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center text-2xl mb-5 font-bold shadow-xs group-hover:scale-105 transition-transform">
              🌿
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 mb-1">
              An toàn tuyệt đối
            </span>
            <h3 className="text-xl font-black text-gray-900 mb-4 leading-snug">
              Hệ Sinh Thái Chuẩn An Toàn
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Chất liệu an toàn tuyệt đối:</strong> 100% phễu, bình chứa và túi trữ sữa đạt chứng nhận không chứa BPA/Phthalate, sử dụng silicone y tế cao cấp mềm mại, ôm sát mọi dáng ngực.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Giải pháp chăm sóc toàn diện:</strong> Khép kín từ khâu hút – trữ – tiệt trùng – hâm sữa (bình đun nước pha sữa, máy tiệt trùng UVC, túi chườm ngực đa năng, áo hút sữa chuyên dụng), giúp hành trình nuôi con bằng sữa mẹ nhàn nhã hơn.
                </span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Dịch vụ & Chăm sóc chuyên sâu */}
          <div
            id="dich-vu"
            className="flex flex-col rounded-3xl bg-[#FCF9F6] border border-emerald-100/80 p-7 sm:p-8 hover:shadow-xl hover:border-emerald-300 transition-all duration-300 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center text-2xl mb-5 font-bold shadow-xs group-hover:scale-105 transition-transform">
              🤝
            </div>
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-600 mb-1">
              Hỗ trợ 24/7 & Bảo hành vàng
            </span>
            <h3 className="text-xl font-black text-gray-900 mb-4 leading-snug">
              Dịch Vụ & Chăm Sóc Chuyên Sâu
            </h3>

            <ul className="space-y-4 text-xs sm:text-sm text-gray-600 leading-relaxed flex-1">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Đồng hành cùng Chuyên gia Lạc sữa/Sữa mẹ:</strong> Tư vấn 1:1 hỗ trợ kích sữa, xử lý dứt điểm tắc tia sữa và lên phác đồ hút sữa khoa học cho từng thể trạng mẹ bỉm.
                </span>
              </li>

              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 font-bold flex items-center justify-center text-xs shrink-0 mt-0.5">
                  ✓
                </span>
                <span>
                  <strong>Chính sách bảo hành vàng:</strong> Bảo hành 12–24 tháng, 1 đổi 1 trong 30 ngày nếu có lỗi từ NSX; đặc biệt <strong className="text-emerald-700">cho mượn máy thay thế 0đ</strong> để hành trình hút sữa của mẹ không bị ngắt quãng dù chỉ một ngày.
                </span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
