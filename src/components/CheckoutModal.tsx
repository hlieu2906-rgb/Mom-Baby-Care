import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Banknote, AlertCircle, Phone, MapPin, User, FileText } from 'lucide-react';
import { CartItem, OrderData } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discount: number;
  discountCode: string;
  onCompleteOrder: (order: OrderData) => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discount,
  discountCode,
  onCompleteOrder,
}) => {
  if (!isOpen) return null;

  const [customerName, setCustomerName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [city, setCity] = useState<string>('Hà Nội');
  const [district, setDistrict] = useState<string>('Quận Cầu Giấy');
  const [address, setAddress] = useState<string>('');
  const [note, setNote] = useState<string>('Gọi trước khi giao 15 phút, đóng gói kín đáo');
  const [paymentMethod, setPaymentMethod] = useState<'cod' | 'banking'>('cod');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const isFreeShipping = subtotal >= 500000;
  const shippingFee = isFreeShipping ? 0 : 30000;
  const totalAmount = Math.max(0, subtotal - discount + shippingFee);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setErrorMessage('Mẹ vui lòng nhập Họ tên người nhận nhé.');
      return;
    }
    if (!phone.trim() || phone.trim().length < 9) {
      setErrorMessage('Mẹ vui lòng nhập số điện thoại hoặc Zalo hợp lệ để showroom liên hệ giao hàng.');
      return;
    }
    if (!address.trim()) {
      setErrorMessage('Mẹ vui lòng nhập số nhà, tên đường để Shipper giao tận nơi.');
      return;
    }

    setErrorMessage('');
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const orderId = `MB-${randomCode}`;

    const newOrder: OrderData = {
      orderId,
      customerName: customerName.trim(),
      phone: phone.trim(),
      city,
      district,
      address: address.trim(),
      note: note.trim(),
      paymentMethod,
      items,
      subtotal,
      shippingFee,
      discount,
      total: totalAmount,
      createdAt: new Date().toLocaleTimeString('vi-VN') + ' ngày ' + new Date().toLocaleDateString('vi-VN'),
    };

    onCompleteOrder(newOrder);
  };

  const hanoiDistricts = [
    'Quận Cầu Giấy',
    'Quận Đống Đa',
    'Quận Ba Đình',
    'Quận Hoàn Kiếm',
    'Quận Thanh Xuân',
    'Quận Nam Từ Liêm',
    'Quận Bắc Từ Liêm',
    'Quận Hà Đông',
    'Quận Hai Bà Trưng',
    'Quận Tây Hồ',
    'Quận Long Biên',
    'Quận Hoàng Mai',
    'Huyện Thanh Trì',
    'Huyện Gia Lâm',
    'Huyện Hoài Đức',
    'Khu vực khác',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
      <div
        className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-rose-100 max-h-[92vh] overflow-y-auto relative text-gray-800"
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
        <div className="flex items-center gap-3 mb-6 border-b border-rose-100 pb-4">
          <div className="w-11 h-11 rounded-2xl bg-rose-500 text-white flex items-center justify-center font-bold shadow-md shadow-rose-200">
            <Truck className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-xl font-black text-gray-900">
              Thông Tin Giao Hàng & Đặt Hàng
            </h3>
            <p className="text-xs text-rose-600 font-semibold">
              Mom&Baby Care Hà Nội &bull; Cam kết bảo hành 1 đổi 1 & hỗ trợ mượn máy 0đ
            </p>
          </div>
        </div>

        {errorMessage && (
          <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-700 text-xs font-semibold flex items-center gap-2 border border-red-200">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Section: Customer Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <User className="w-3.5 h-3.5 text-rose-500" />
              <span>1. Thông tin người nhận</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Họ và tên của Mẹ *
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Ví dụ: Hoàng Mai Linh"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Số điện thoại / Zalo *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="09xx xxx xxx"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 bg-white"
                />
              </div>
            </div>
          </div>

          {/* Section: Address */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500" />
              <span>2. Địa chỉ nhận hàng</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Tỉnh / Thành phố
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                >
                  <option value="Hà Nội">Hà Nội (Hỏa tốc 2H hoặc trong ngày)</option>
                  <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh (1-2 ngày)</option>
                  <option value="Đà Nẵng">Đà Nẵng (1-2 ngày)</option>
                  <option value="Hải Phòng">Hải Phòng (trong ngày/1 ngày)</option>
                  <option value="Tỉnh/Thành khác">Các tỉnh/thành phố khác trên toàn quốc</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Quận / Huyện
                </label>
                {city === 'Hà Nội' ? (
                  <select
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                  >
                    {hanoiDistricts.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    type="text"
                    value={district}
                    onChange={(e) => setDistrict(e.target.value)}
                    placeholder="Nhập Quận / Huyện"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
                  />
                )}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Địa chỉ chi tiết (Số nhà, ngõ/ngách, tên đường, tòa chung cư) *
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Ví dụ: P.1204 Tòa Discovery Complex, 302 Cầu Giấy"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1">
                Ghi chú cho đơn vị giao hàng
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Ví dụ: Gọi trước 15 phút, giao ngoài giờ hành chính..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 bg-white"
              />
            </div>
          </div>

          {/* Section: Payment Method */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 flex items-center gap-1.5">
              <CreditCard className="w-3.5 h-3.5 text-rose-500" />
              <span>3. Phương thức thanh toán</span>
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label
                onClick={() => setPaymentMethod('cod')}
                className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition ${
                  paymentMethod === 'cod'
                    ? 'border-rose-500 bg-rose-50/60'
                    : 'border-gray-200 bg-white hover:border-rose-200'
                }`}
              >
                <div className="w-5 h-5 rounded-full border-2 border-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                  {paymentMethod === 'cod' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  )}
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-gray-900 flex items-center gap-1.5">
                    <Banknote className="w-4 h-4 text-emerald-600" />
                    <span>Thanh toán khi nhận hàng (COD)</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Được kiểm tra máy và tem niêm phong trước khi thanh toán.
                  </p>
                </div>
              </label>

              <label
                onClick={() => setPaymentMethod('banking')}
                className={`p-3.5 rounded-2xl border-2 flex items-start gap-3 cursor-pointer transition ${
                  paymentMethod === 'banking'
                    ? 'border-rose-500 bg-rose-50/60'
                    : 'border-gray-200 bg-white hover:border-rose-200'
                }`}
              >
                <div className="w-5 h-5 rounded-full border-2 border-rose-500 flex items-center justify-center shrink-0 mt-0.5">
                  {paymentMethod === 'banking' && (
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  )}
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-gray-900 flex items-center gap-1.5">
                    <CreditCard className="w-4 h-4 text-rose-600" />
                    <span>Chuyển khoản QR ngân hàng (VietQR)</span>
                  </div>
                  <p className="text-[11px] text-gray-500 mt-1">
                    Quét mã QR tự động điền số tiền và mã đơn hàng.
                  </p>
                </div>
              </label>
            </div>
          </div>

          {/* Order Summary Recap */}
          <div className="p-4 rounded-2xl bg-[#FCF9F6] border border-rose-100 text-xs space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Số lượng sản phẩm:</span>
              <span className="font-bold text-gray-800">
                {items.reduce((s, i) => s + i.qty, 0)} sản phẩm
              </span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Tạm tính:</span>
              <span className="font-semibold text-gray-800">{FORMAT_CURRENCY(subtotal)}</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-emerald-600 font-semibold">
                <span>Khuyến mãi ({discountCode || 'Voucher'}):</span>
                <span>-{FORMAT_CURRENCY(discount)}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-600">
              <span>Phí vận chuyển:</span>
              <span className={isFreeShipping ? 'text-emerald-600 font-bold' : 'font-semibold text-gray-800'}>
                {isFreeShipping ? 'Miễn phí (Đơn >= 500k)' : '30.000 ₫'}
              </span>
            </div>
            <div className="pt-2 border-t border-rose-200/80 flex justify-between items-baseline">
              <span className="text-sm font-black text-gray-900">Tổng thanh toán:</span>
              <span className="text-xl font-black text-rose-600">
                {FORMAT_CURRENCY(totalAmount)}
              </span>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-extrabold text-base shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Xác Nhận Đặt Hàng & Gửi Đơn</span>
          </button>
        </form>
      </div>
    </div>
  );
};
