import React from 'react';
import { Heart, VolumeX, Lightbulb, Stethoscope, ArrowRight, ShieldCheck, CheckCircle2, ShoppingBag } from 'lucide-react';
import { FORMAT_CURRENCY } from '../data/products';

interface HeroProps {
  onAddToCartBestSeller: () => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onAddToCartBestSeller,
  onOpenConsultation,
}) => {
  return (
    <section id="about" className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 border-b border-rose-100/80 overflow-hidden bg-gradient-to-b from-[#FFF5F6] via-[#FFFFFF] to-[#FFF9F6]">
      {/* Decorative backdrop elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-rose-200/25 blur-3xl rounded-full pointer-events-none -z-0"></div>
      <div className="absolute top-40 right-10 w-72 h-72 bg-pink-100/40 blur-2xl rounded-full pointer-events-none -z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Content Left */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-700 text-xs font-extrabold uppercase tracking-wider shadow-xs">
              <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500 animate-pulse" />
              <span>Mom&Baby Care &bull; Đồng Hành Cùng Mẹ</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.15] tracking-tight">
              Đồng hành cùng <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600">
                hành trình làm mẹ
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Nơi cung cấp dụng cụ hút sữa thông minh, cung cấp kiến thức nuôi con và giảm bớt gánh nặng chăm con của mẹ.
            </p>

            <div className="p-4 sm:p-5 rounded-3xl bg-white/90 backdrop-blur-md border border-rose-100 shadow-sm text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 text-left flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border border-rose-100 shadow-xs bg-white p-1 flex items-center justify-center">
                <img
                  src="/assets/aistudio/mombabycare_815cdf17.jpg"
                  alt="Mom&Baby Care - San sẻ vất vả, vẹn tròn yêu thương"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1.5 text-center sm:text-left">
                <div className="font-extrabold text-gray-900 text-sm sm:text-base flex items-center justify-center sm:justify-start gap-1.5 text-rose-600">
                  <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
                  <span>Sứ mệnh Mom&Baby Care</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Đồng hành cùng mẹ chia sẻ kiến thức nuôi con hiện đại, san sẻ gánh nặng nuôi con bằng thiết bị thông minh mà doanh nghiệp cung cấp, nơi để các bà mẹ tìm hiểu và học hỏi kiến thức chăm con nhỏ.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#san-pham"
                className="px-8 py-3.5 rounded-2xl text-base font-extrabold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-lg shadow-rose-200 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              >
                <span>Xem sản phẩm & Giá tốt</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <button
                onClick={onOpenConsultation}
                className="px-7 py-3.5 rounded-2xl text-base font-bold text-gray-700 bg-white border border-rose-200 hover:border-rose-400 hover:bg-rose-50/50 transition-all shadow-xs cursor-pointer"
              >
                Tư vấn kích sữa 1:1
              </button>
            </div>

            {/* Trust highlights under CTA */}
            <div className="pt-4 grid grid-cols-3 gap-2 sm:gap-4 max-w-lg mx-auto lg:mx-0 border-t border-rose-100 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span className="text-xs text-gray-600 font-semibold">1 đổi 1 30 ngày</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="text-xs text-gray-600 font-semibold">Bảo hành 24T</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-xs text-gray-600 font-semibold">Mượn máy 0đ</span>
              </div>
            </div>
          </div>

          {/* Right Spotlight Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md rounded-3xl bg-gradient-to-tr from-rose-200 via-pink-100 to-rose-50 p-3 sm:p-5 shadow-2xl shadow-rose-200/50 border border-white">
              
              {/* Badge top-right */}
              <div className="absolute -top-3 -right-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                🔥 Bán chạy #1
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm space-y-5 border border-rose-50">
                <div className="flex items-start justify-between border-b pb-4 border-gray-100">
                  <div>
                    <span className="text-xs uppercase tracking-wider font-extrabold text-rose-500 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      Dòng máy hút rảnh tay thông minh
                    </span>
                    <h3 className="font-black text-gray-900 text-lg sm:text-xl mt-1">
                      MomCare Pro Smart Wearable
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="bg-rose-50 text-rose-600 text-xs px-3 py-1 rounded-full font-black border border-rose-200">
                      890.000 ₫
                    </span>
                    <div className="text-[11px] text-gray-400 line-through mt-0.5">1.250.000 ₫</div>
                  </div>
                </div>

                {/* Visual device illustration with real photo */}
                <div className="relative rounded-2xl overflow-hidden border border-rose-100 shadow-inner group">
                  <img
                    src="/src/assets/images/momcare_pro_pump_1793258814756.jpg"
                    alt="Máy Hút Sữa Điện Rảnh Tay MomCare Pro"
                    referrerPolicy="no-referrer"
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/60 shadow-xs flex items-center justify-between text-[11px]">
                    <span className="font-bold text-gray-800">Pin 1200mAh &bull; 9 cấp độ</span>
                    <span className="font-extrabold text-rose-600">Đạt chuẩn y khoa FDA</span>
                  </div>
                </div>

                {/* 3 bullet highlights matching user brief */}
                <div className="space-y-2.5 text-xs text-gray-600">
                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FCF9F6] border border-rose-100/50">
                    <div className="w-6 h-6 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                      <VolumeX className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      Độ ồn cực thấp <strong>dưới 40dB</strong> (êm ái trong đêm)
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FCF9F6] border border-rose-100/50">
                    <div className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center shrink-0">
                      <Lightbulb className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      Màn hình LED cảm ứng <strong>ghi nhớ nhịp hút</strong>
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#FCF9F6] border border-rose-100/50">
                    <div className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Stethoscope className="w-3.5 h-3.5" />
                    </div>
                    <span>
                      100% silicone y tế <strong>không chứa BPA</strong>
                    </span>
                  </div>
                </div>

                {/* Primary Button */}
                <button
                  onClick={onAddToCartBestSeller}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-extrabold text-sm shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>+ Thêm Ngay Vào Giỏ Hàng</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
