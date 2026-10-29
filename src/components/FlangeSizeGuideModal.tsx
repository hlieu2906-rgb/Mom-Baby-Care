import React, { useState } from 'react';
import { X, Ruler, CheckCircle2, AlertCircle, ShoppingBag, Sparkles } from 'lucide-react';
import { Product } from '../types';

interface FlangeSizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectFlangeSize: (sizeName: string) => void;
  flangeProduct?: Product;
}

export const FlangeSizeGuideModal: React.FC<FlangeSizeGuideModalProps> = ({
  isOpen,
  onClose,
  onSelectFlangeSize,
  flangeProduct,
}) => {
  const [nippleDiameter, setNippleDiameter] = useState<number>(18);

  if (!isOpen) return null;

  // Calculation: Recommended flange size = nipple diameter + 3 to 4 mm
  let recommendedSize = '24mm';
  let recommendedLabel = 'Size 24mm (Chân ti chuẩn 19-21mm)';
  let advice = '';

  if (nippleDiameter <= 17) {
    recommendedSize = '21mm';
    recommendedLabel = 'Size 21mm (Chân ti nhỏ < 18mm)';
    advice = 'Chân ti của mẹ ở kích cỡ nhỏ. Phễu 21mm sẽ ôm khít, không kéo theo quầng vú vào ống dẫn sữa, giúp giảm đau rát tối đa.';
  } else if (nippleDiameter <= 21) {
    recommendedSize = '24mm';
    recommendedLabel = 'Size 24mm (Chân ti chuẩn 19-21mm)';
    advice = 'Chân ti của mẹ thuộc kích thước tiêu chuẩn phổ biến nhất. Phễu 24mm cho phép chân ti chuyển động tự do không cọ xát.';
  } else {
    recommendedSize = '27mm';
    recommendedLabel = 'Size 27mm (Chân ti lớn > 22mm)';
    advice = 'Chân ti của mẹ có đường kính lớn. Mẹ cần phễu rộng 27mm để tránh chân ti cọ xát vào thành ống gây sưng tấy và tắc sữa.';
  }

  const handleAddSuggested = () => {
    onSelectFlangeSize(recommendedLabel);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-rose-100 max-h-[90vh] overflow-y-auto relative text-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
            <Ruler className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-900">
              Công Cụ Tính Size Phễu Hút Sữa
            </h3>
            <p className="text-xs text-rose-600 font-semibold">
              Khuyên dùng theo cẩm nang chuyên gia Nuôi con bằng Sữa Mẹ
            </p>
          </div>
        </div>

        {/* Instructions */}
        <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-100 text-xs text-gray-600 leading-relaxed mb-6">
          <strong>Cách đo chính xác:</strong> Dùng thước kẻ đo đường kính ngang của chân núm ti (không tính phần quầng vú thẫm màu xung quanh). Tốt nhất đo sau khi vừa cho con bú hoặc sau cữ hút.
        </div>

        {/* Interactive Slider */}
        <div className="space-y-4 mb-6 bg-[#FCF9F6] p-5 rounded-2xl border border-rose-100/60">
          <div className="flex justify-between items-center">
            <span className="text-xs font-bold text-gray-700">Đường kính chân ti của Mẹ:</span>
            <span className="text-lg font-black text-rose-600 bg-white px-3 py-1 rounded-xl border border-rose-200 shadow-xs">
              {nippleDiameter} mm
            </span>
          </div>

          <input
            type="range"
            min={12}
            max={26}
            step={1}
            value={nippleDiameter}
            onChange={(e) => setNippleDiameter(Number(e.target.value))}
            className="w-full accent-rose-500 cursor-pointer h-2 bg-rose-200 rounded-lg"
          />

          <div className="flex justify-between text-[10px] text-gray-400 font-medium">
            <span>12mm (Nhỏ)</span>
            <span>18mm (Tiêu chuẩn)</span>
            <span>26mm (Lớn)</span>
          </div>

          {/* Result Box */}
          <div className="mt-4 p-4 rounded-2xl bg-white border-2 border-rose-400 shadow-sm">
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">
                Size phễu khuyến nghị cho mẹ:
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-rose-100 text-rose-700">
                Phù hợp 100%
              </span>
            </div>
            <div className="text-2xl font-black text-rose-600 mb-1">
              {recommendedLabel}
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              {advice}
            </p>
          </div>
        </div>

        {/* Visual fit indicators */}
        <div className="grid grid-cols-3 gap-2 text-center text-[11px] mb-6">
          <div className="p-2.5 rounded-xl bg-red-50 text-red-700 border border-red-100">
            <span className="font-bold block mb-0.5">⚠️ Quá chật</span>
            <span>Chân ti cọ xát viền gây rát, giảm lượng sữa</span>
          </div>
          <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 font-medium">
            <span className="font-bold block mb-0.5">✅ Chuẩn xác</span>
            <span>Khoảng hở 2mm, chân ti chuyển động êm</span>
          </div>
          <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-100">
            <span className="font-bold block mb-0.5">⚠️ Quá rộng</span>
            <span>Quầng thâm bị hút vào lòng phễu gây thâm tím</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAddSuggested}
            className="flex-1 py-3 px-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-200 transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Thêm Phễu {recommendedSize} vào Giỏ</span>
          </button>
          <button
            onClick={onClose}
            className="py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold text-xs transition cursor-pointer"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};
