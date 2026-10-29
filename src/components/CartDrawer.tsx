import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, Truck, Gift, Check } from 'lucide-react';
import { CartItem } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (productId: number, delta: number, selectedSize?: string) => void;
  onRemoveItem: (productId: number, selectedSize?: string) => void;
  onProceedToCheckout: (appliedDiscount: number, discountCode: string) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [couponCode, setCouponCode] = useState<string>('');
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponMessage, setCouponMessage] = useState<{ text: string; isError: boolean } | null>(null);

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const freeShippingThreshold = 500000;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (!code) return;

    if (code === 'MOMCARE' || code === 'MEVAITHUONG') {
      const discountVal = 50000;
      setAppliedDiscount(discountVal);
      setCouponMessage({ text: 'Áp dụng mã giảm 50.000 ₫ thành công!', isError: false });
    } else if (code === 'HANOHOI') {
      const discountVal = 30000;
      setAppliedDiscount(discountVal);
      setCouponMessage({ text: 'Áp dụng mã hỗ trợ ship Hà Nội 30.000 ₫!', isError: false });
    } else {
      setCouponMessage({ text: 'Mã ưu đãi không hợp lệ hoặc đã hết hạn.', isError: true });
    }
  };

  const handleCheckout = () => {
    onProceedToCheckout(appliedDiscount, couponCode);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/40 backdrop-blur-xs z-50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col transform transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Cart Header */}
        <div className="p-5 border-b border-rose-100 flex items-center justify-between bg-gradient-to-r from-rose-50/70 to-pink-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-rose-500 text-white flex items-center justify-center font-bold shadow-sm shadow-rose-200">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-black text-gray-900 text-base sm:text-lg">
                Giỏ Hàng Của Mẹ
              </h3>
              <p className="text-[11px] text-gray-500">
                {items.length === 0
                  ? 'Chưa có sản phẩm nào'
                  : `${items.reduce((s, i) => s + i.qty, 0)} món trong giỏ`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition cursor-pointer"
            aria-label="Đóng giỏ hàng"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="px-5 py-3 bg-[#FCF9F6] border-b border-rose-100/60">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="font-semibold text-gray-700 flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-rose-500" />
              {isFreeShipping ? (
                <span className="text-emerald-600 font-bold">
                  🎉 Chúc mừng mẹ được MIỄN PHÍ VẬN CHUYỂN toàn quốc!
                </span>
              ) : (
                <span>
                  Mua thêm{' '}
                  <strong className="text-rose-600">
                    {FORMAT_CURRENCY(remainingForFreeShipping)}
                  </strong>{' '}
                  để được freeship
                </span>
              )}
            </span>
            <span className="text-[10px] font-bold text-gray-400">
              {Math.round(progressPercent)}%
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-500 rounded-full ${
                isFreeShipping
                  ? 'bg-emerald-500'
                  : 'bg-gradient-to-r from-rose-400 to-pink-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {items.length === 0 ? (
            <div className="text-center py-20 text-gray-400 space-y-3">
              <span className="text-6xl block mb-2 filter drop-shadow">🧺</span>
              <p className="text-sm font-bold text-gray-600">
                Giỏ hàng của mẹ đang trống
              </p>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                Mẹ hãy chọn máy hút sữa thông minh hoặc phụ kiện chuẩn y khoa để bắt đầu hành trình hút sữa nhẹ nhàng nhé!
              </p>
              <button
                onClick={onClose}
                className="mt-3 px-5 py-2.5 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-2xl text-xs font-bold transition cursor-pointer"
              >
                Khám phá sản phẩm ngay
              </button>
            </div>
          ) : (
            items.map((item, index) => {
              const itemTotal = item.product.price * item.qty;
              return (
                <div
                  key={`${item.product.id}-${item.selectedSize || 'default'}-${index}`}
                  className="p-3.5 bg-[#FCF9F6] rounded-2xl border border-rose-100/70 hover:border-rose-200 transition space-y-2"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-14 h-14 rounded-xl bg-white border border-rose-100 flex items-center justify-center shrink-0 text-2xl shadow-xs">
                      {item.product.imageIcon}
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-900 text-xs sm:text-sm line-clamp-2 leading-snug">
                        {item.product.name}
                      </h4>
                      {item.selectedSize && (
                        <span className="inline-block px-2 py-0.5 mt-1 rounded text-[10px] font-semibold bg-rose-100/60 text-rose-700">
                          {item.selectedSize}
                        </span>
                      )}
                      <div className="text-rose-600 font-black text-xs sm:text-sm mt-1">
                        {FORMAT_CURRENCY(item.product.price)}
                      </div>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id, item.selectedSize)}
                      className="p-1 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition cursor-pointer"
                      title="Xóa món này"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Quantity and Subtotal line */}
                  <div className="flex items-center justify-between pt-2 border-t border-rose-100/50 text-xs">
                    <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-xl border border-gray-200">
                      <button
                        onClick={() => onUpdateQty(item.product.id, -1, item.selectedSize)}
                        className="w-5 h-5 flex items-center justify-center text-gray-500 hover:text-rose-600 font-bold cursor-pointer"
                        title="Giảm 1"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-5 text-center text-gray-800">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.product.id, 1, item.selectedSize)}
                        className="w-5 h-5 flex items-center justify-center text-gray-500 hover:text-rose-600 font-bold cursor-pointer"
                        title="Tăng 1"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <div className="text-right">
                      <span className="text-[11px] text-gray-400">Thành tiền: </span>
                      <span className="font-extrabold text-gray-900">
                        {FORMAT_CURRENCY(itemTotal)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Footer */}
        {items.length > 0 && (
          <div className="p-5 border-t border-rose-100 bg-white space-y-3.5 shadow-lg">
            
            {/* Coupon input */}
            <form onSubmit={handleApplyCoupon} className="space-y-1.5">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Mã giảm giá (Thử: MOMCARE)"
                    className="w-full pl-8 pr-3 py-1.5 text-xs bg-gray-50 border border-gray-200 rounded-xl uppercase font-semibold text-gray-700 focus:outline-none focus:ring-1 focus:ring-rose-400"
                  />
                </div>
                <button
                  type="submit"
                  className="px-3.5 py-1.5 rounded-xl bg-gray-900 text-white text-xs font-bold hover:bg-gray-800 transition cursor-pointer"
                >
                  Áp dụng
                </button>
              </div>
              {couponMessage && (
                <p
                  className={`text-[11px] font-medium ${
                    couponMessage.isError ? 'text-rose-600' : 'text-emerald-600'
                  }`}
                >
                  {couponMessage.text}
                </p>
              )}
            </form>

            {/* Calculations */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center text-gray-600">
                <span>Tạm tính hàng:</span>
                <span className="font-semibold text-gray-800">
                  {FORMAT_CURRENCY(subtotal)}
                </span>
              </div>

              {appliedDiscount > 0 && (
                <div className="flex justify-between items-center text-emerald-600 font-semibold">
                  <span>Ưu đãi áp dụng:</span>
                  <span>-{FORMAT_CURRENCY(appliedDiscount)}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-gray-600">
                <span>Phí vận chuyển:</span>
                <span className={isFreeShipping ? 'text-emerald-600 font-bold' : 'font-semibold text-gray-800'}>
                  {isFreeShipping ? 'Miễn phí' : '30.000 ₫ (Toàn quốc)'}
                </span>
              </div>

              <div className="pt-2 border-t border-gray-100 flex justify-between items-baseline">
                <div>
                  <span className="text-sm font-bold text-gray-900 block">Tổng thanh toán:</span>
                  <span className="text-[10px] text-gray-400">(Đã bao gồm VAT & đóng gói cẩn thận)</span>
                </div>
                <span className="text-xl font-black text-rose-600">
                  {FORMAT_CURRENCY(
                    Math.max(0, subtotal - appliedDiscount + (isFreeShipping ? 0 : 30000))
                  )}
                </span>
              </div>
            </div>

            {/* Free shipping perk note */}
            <div className="text-[11px] text-emerald-700 bg-emerald-50/80 p-2.5 rounded-xl flex items-center gap-2 border border-emerald-100">
              <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Tặng cẩm nang kích sữa điện tử <strong>"21 Ngày Vàng Gọi Sữa Về"</strong> khi đặt hàng!
              </span>
            </div>

            {/* Checkout Action Button */}
            <button
              onClick={handleCheckout}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-rose-200 transition-all flex items-center justify-center gap-2 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Tiến Hành Đặt Hàng Ngay</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};
