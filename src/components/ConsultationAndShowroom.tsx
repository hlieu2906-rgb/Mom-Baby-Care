import React, { useState } from 'react';
import { Phone, MapPin, Clock, ShieldCheck, HeartHandshake, CheckCircle2, Star, Send, BookOpen, Sparkles } from 'lucide-react';
import { TESTIMONIALS, KNOWLEDGE_TIPS } from '../data/products';

export const ConsultationAndShowroom: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('Tư vấn chọn máy hút sữa rảnh tay phân khúc 800k - 1 triệu');
  const [time, setTime] = useState('Trong vòng 15 phút tới');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="tu-van" className="py-16 sm:py-24 bg-rose-50/60 border-t border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Consultation and Hanoi Address Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 bg-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl border border-rose-100 relative overflow-hidden">
          
          {/* Form Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-rose-500 font-extrabold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 bg-rose-100 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" />
                Hỗ Trợ 1:1 Cùng Chuyên Gia Sữa Mẹ
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-gray-900 mt-2">
                Đăng ký tư vấn kích sữa 1:1
              </h2>
              <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                Chuyên gia của Mom&Baby Care sẽ liên hệ để giải đáp tình trạng ngực, lên lịch hút sữa và hỗ trợ mẹ đo size phễu miễn phí.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-3 animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-base text-gray-900">
                  Đã tiếp nhận yêu cầu từ Mẹ {name}!
                </h4>
                <p className="text-xs text-gray-600 max-w-md mx-auto">
                  Chuyên viên tư vấn kích sữa tại Showroom Cầu Giấy (Hà Nội) sẽ liên hệ tới số{' '}
                  <strong className="text-rose-600">{phone}</strong> trong khoảng{' '}
                  <strong>{time}</strong>. Mẹ chú ý điện thoại nhé!
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                  }}
                  className="px-4 py-2 bg-white text-emerald-700 text-xs font-bold rounded-xl border border-emerald-300 hover:bg-emerald-50 transition cursor-pointer"
                >
                  Gửi yêu cầu khác
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Tên của Mẹ *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ví dụ: Hoàng Mai Linh"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      Số điện thoại / Zalo *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="09xx xxx xxx"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Nhu cầu cần hỗ trợ
                  </label>
                  <select
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white text-gray-700"
                  >
                    <option value="Tư vấn chọn máy hút sữa rảnh tay phân khúc 800k - 1 triệu">
                      Tư vấn chọn máy hút sữa rảnh tay phân khúc 800k - 1 triệu
                    </option>
                    <option value="Đo size phễu và tư vấn phễu silicone chống đau rát">
                      Đo size phễu và tư vấn phễu silicone chống đau rát
                    </option>
                    <option value="Hỗ trợ liệu trình kích sữa và xử lý tắc tia sữa">
                      Hỗ trợ liệu trình kích sữa và xử lý tắc tia sữa
                    </option>
                    <option value="Đăng ký mượn máy bảo hành dự phòng 0đ">
                      Đăng ký mượn máy bảo hành dự phòng 0đ
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    Thời gian thuận tiện để chuyên gia gọi
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white text-gray-700"
                  >
                    <option value="Trong vòng 15 phút tới">Trong vòng 15 phút tới (Khẩn cấp)</option>
                    <option value="Buổi sáng (09:00 - 11:30)">Buổi sáng (09:00 - 11:30)</option>
                    <option value="Buổi chiều (14:00 - 17:00)">Buổi chiều (14:00 - 17:00)</option>
                    <option value="Buổi tối (19:30 - 21:00)">Buổi tối (19:30 - 21:00 - Sau giờ ăn của bé)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 transition shadow-lg shadow-rose-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Gửi yêu cầu chuyên gia gọi lại</span>
                </button>
              </form>
            )}
          </div>

          {/* Hanoi Address Column */}
          <div
            id="lien-he"
            className="lg:col-span-5 bg-[#FCF9F6] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-rose-100"
          >
            <div className="space-y-6">
              <div className="border-b pb-3 border-gray-200">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-rose-500">
                  Trực Tiếp Tại Thủ Đô
                </span>
                <h3 className="text-xl font-black text-gray-900 mt-0.5">
                  Showroom & Điểm Bảo Hành Hà Nội
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-gray-600">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-bold mb-0.5">
                      Địa chỉ tại Hà Nội:
                    </strong>
                    <span>
                      Tầng 3, Tòa nhà Discovery Complex, Số 302 Đường Cầu Giấy, Phường Dịch Vọng, Quận Cầu Giấy, Hà Nội
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-bold mb-0.5">
                      Hotline Trực Tiếp:
                    </strong>
                    <div className="flex flex-wrap gap-2 text-rose-600 font-bold">
                      <a href="tel:0988123456" className="hover:underline">
                        0988 123 456
                      </a>
                      <span>-</span>
                      <a href="tel:19006868" className="hover:underline">
                        1900 6868
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-gray-900 block font-bold mb-0.5">
                      Giờ mở cửa đón tiếp:
                    </strong>
                    <span>
                      08:30 - 21:00 hàng ngày (Cả Thứ 7 & Chủ Nhật)
                    </span>
                    <p className="text-[11px] text-emerald-600 font-semibold mt-0.5">
                      * Hỗ trợ thử máy & đo size phễu trực tiếp cho mẹ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-200 text-xs text-gray-500 bg-white p-3.5 rounded-2xl border border-rose-100/70">
              <span className="font-bold text-rose-600">💡 Lưu ý vàng cho mẹ:</span> Mẹ có thể mang máy cũ tới showroom để kiểm tra áp lực hút và thử lắp phụ kiện silicone miễn phí trước khi mua!
            </div>
          </div>

        </div>

        {/* Knowledge & Articles Section */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
                Góc Kiến Thức Mẹ Bỉm
              </span>
              <h3 className="text-2xl font-black text-gray-900 mt-1">
                Cẩm Nang Kích Sữa & Chăm Bé
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KNOWLEDGE_TIPS.map((tip) => (
              <div
                key={tip.id}
                className="bg-white rounded-2xl p-6 border border-rose-100 shadow-xs hover:shadow-md transition space-y-3"
              >
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-600">
                    {tip.category}
                  </span>
                  <span className="text-gray-400">{tip.time}</span>
                </div>
                <h4 className="font-bold text-gray-900 text-base leading-snug">
                  {tip.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {tip.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Real Mom Feedback / Testimonials */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-500">
              Trải Nghiệm Thực Tế
            </span>
            <h3 className="text-2xl font-black text-gray-900 mt-1">
              Hơn 15.000+ Mẹ Bỉm Đã Tin Dùng
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs hover:shadow-lg transition space-y-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-4xl">{t.avatar}</span>
                  <div>
                    <h5 className="font-extrabold text-gray-900 text-sm">
                      {t.name}
                    </h5>
                    <span className="text-[11px] text-gray-400 block">{t.baby}</span>
                  </div>
                </div>

                <div className="flex text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs text-gray-600 leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
