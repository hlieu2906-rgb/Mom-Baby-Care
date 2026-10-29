import React from 'react';
import { CheckCircle, Truck, PhoneCall, QrCode, Copy, ArrowRight, ShieldCheck, Heart } from 'lucide-react';
import { OrderData } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface OrderSuccessModalProps {
  order: OrderData | null;
  onClose: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({ order, onClose }) => {
  if (!order) return null;

  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-rose-100 max-h-[92vh] overflow-y-auto relative text-gray-800 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Animated Celebration Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
          <CheckCircle className="w-9 h-9" />
        </div>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-black bg-rose-100 text-rose-700 uppercase tracking-wider mb-2">
          Đặt Hàng Thành Công!
        </span>

        <h3 className="text-2xl font-black text-gray-900">
          Cảm ơn Mẹ {order.customerName}!
        </h3>

        <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
          Đơn hàng của mẹ đã được chuyển tới Showroom Mom&Baby Care tại Cầu Giấy, Hà Nội. Nhân viên tư vấn sẽ liên hệ với mẹ qua số{' '}
          <strong className="text-gray-900 font-bold">{order.phone}</strong> trong vòng 15 phút để xác nhận và gửi hàng ngay.
        </p>

        {/* Order Info Card */}
        <div className="mt-5 p-4 rounded-2xl bg-[#FCF9F6] border border-rose-100 text-left text-xs space-y-2.5">
          <div className="flex justify-between items-center border-b border-rose-100 pb-2">
            <span className="text-gray-500">Mã đơn hàng:</span>
            <span className="font-black text-rose-600 text-sm tracking-wider">
              {order.orderId}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Thời gian đặt:</span>
            <span className="font-semibold text-gray-800">{order.createdAt}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Địa chỉ giao:</span>
            <span className="font-semibold text-gray-800 text-right max-w-[260px] truncate">
              {order.address}, {order.district}, {order.city}
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-gray-500">Phương thức:</span>
            <span className="font-semibold text-gray-800">
              {order.paymentMethod === 'cod'
                ? 'Thanh toán khi nhận hàng (COD)'
                : 'Chuyển khoản QR ngân hàng'}
            </span>
          </div>

          <div className="flex justify-between items-center pt-2 border-t border-rose-100">
            <span className="font-bold text-gray-900">Tổng tiền thanh toán:</span>
            <span className="text-base font-black text-rose-600">
              {FORMAT_CURRENCY(order.total)}
            </span>
          </div>
        </div>

        {/* If Banking Selected: Show QR Code Bank Info */}
        {order.paymentMethod === 'banking' && (
          <div className="mt-4 p-4 rounded-2xl bg-amber-50/70 border border-amber-200 text-left text-xs space-y-2">
            <div className="flex items-center gap-2 text-amber-800 font-bold">
              <QrCode className="w-4 h-4 text-amber-600" />
              <span>Thông tin chuyển khoản qua VietQR:</span>
            </div>
            <div className="bg-white p-3 rounded-xl border border-amber-100 space-y-1 text-gray-700">
              <div>Ngân hàng: <strong>Techcombank (Hà Nội)</strong></div>
              <div className="flex items-center justify-between">
                <span>Số tài khoản: <strong>1903 8888 6666</strong></span>
                <button
                  type="button"
                  onClick={() => copyToClipboard('190388886666')}
                  className="text-[11px] text-rose-600 font-bold hover:underline cursor-pointer"
                >
                  {copied ? 'Đã sao chép!' : 'Sao chép STK'}
                </button>
              </div>
              <div>Chủ tài khoản: <strong>CTY TNHH MOM AND BABY CARE HN</strong></div>
              <div>Số tiền: <strong className="text-rose-600">{FORMAT_CURRENCY(order.total)}</strong></div>
              <div>Nội dung chuyển: <strong className="text-rose-600 font-mono">{order.orderId} - {order.phone}</strong></div>
            </div>
          </div>
        )}

        {/* Warranty and Service Note */}
        <div className="mt-4 p-3 rounded-xl bg-rose-50 text-[11px] text-rose-800 text-left flex items-start gap-2 border border-rose-100">
          <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
          <span>
            Đơn hàng được áp dụng chính sách <strong>Bảo hành vàng 24 tháng</strong>, đổi mới trong 30 ngày và mượn máy thay thế miễn phí trong suốt quá trình sử dụng.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a
            href="tel:0988123456"
            className="flex-1 py-3 px-4 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold text-xs flex items-center justify-center gap-2 transition"
          >
            <PhoneCall className="w-3.5 h-3.5 text-rose-600" />
            <span>Gọi Hotline: 0988 123 456</span>
          </a>

          <button
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs shadow-md shadow-rose-200 transition cursor-pointer"
          >
            Tiếp Tục Mua Sắm
          </button>
        </div>
      </div>
    </div>
  );
};
