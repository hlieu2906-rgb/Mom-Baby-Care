import React, { useState } from 'react';
import { X, Star, CheckCircle2, ShieldCheck, ShoppingBag, Plus, Minus, Truck } from 'lucide-react';
import { Product } from '../types';
import { FORMAT_CURRENCY } from '../data/products';

interface ProductQuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size?: string, quantity?: number) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes ? product.sizes[0] : ''
  );
  const [qty, setQty] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, product.sizes ? selectedSize : undefined, qty);
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
      onClose();
    }, 1000);
  };

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          
          {/* Visual Column */}
          <div className="md:col-span-5 flex flex-col items-center">
            <div className="w-full aspect-square rounded-3xl overflow-hidden border border-rose-100 shadow-md mb-3 bg-rose-50/40 relative">
              <img
                src={product.image}
                alt={product.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-rose-50 text-rose-600 border border-rose-200">
              {product.badge}
            </span>

            {/* Quick trust perks */}
            <div className="w-full mt-4 space-y-2 text-xs text-gray-600">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FCF9F6] border border-rose-100/50">
                <Truck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Giao hỏa tốc 2H tại Hà Nội</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#FCF9F6] border border-rose-100/50">
                <ShieldCheck className="w-4 h-4 text-rose-600 shrink-0" />
                <span>Bảo hành 1 đổi 1 trong 30 ngày</span>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="md:col-span-7 space-y-4">
            <div>
              <span className="text-[11px] font-bold text-rose-500 uppercase tracking-wider">
                {product.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-black text-gray-900 mt-1 leading-snug">
                {product.name}
              </h2>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-bold text-gray-700">{product.rating}</span>
                <span className="text-xs text-gray-400">
                  ({product.reviewsCount} mẹ tin dùng)
                </span>
              </div>
            </div>

            {/* Price Box */}
            <div className="flex items-baseline gap-3 p-3 rounded-2xl bg-rose-50/70 border border-rose-100">
              <div className="text-2xl font-black text-rose-600">
                {FORMAT_CURRENCY(product.price)}
              </div>
              <div className="text-xs text-gray-400 line-through">
                {FORMAT_CURRENCY(product.originalPrice)}
              </div>
              <span className="ml-auto text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                Tiết kiệm {Math.round((1 - product.price / product.originalPrice) * 100)}%
              </span>
            </div>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {product.fullDesc}
            </p>

            {/* Sizes if applicable */}
            {product.sizes && (
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-gray-700 block">
                  Lựa chọn kích cỡ:
                </label>
                <div className="grid grid-cols-1 gap-1.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3 py-2 rounded-xl text-left text-xs font-semibold transition border cursor-pointer ${
                        selectedSize === s
                          ? 'bg-rose-50 border-rose-500 text-rose-700 shadow-xs'
                          : 'border-gray-200 hover:border-rose-200 text-gray-600'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Technical specs table */}
            <div className="border border-gray-100 rounded-2xl overflow-hidden text-xs">
              <div className="bg-gray-50 px-3 py-1.5 font-bold text-gray-700 border-b border-gray-100">
                Thông số kỹ thuật chính:
              </div>
              <div className="divide-y divide-gray-100">
                {product.specs.map((item, idx) => (
                  <div key={idx} className="flex px-3 py-1.5 justify-between gap-2">
                    <span className="text-gray-500 shrink-0">{item.label}</span>
                    <span className="font-semibold text-gray-800 text-right">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key features checklist */}
            <div className="space-y-1.5 text-xs text-gray-600">
              <span className="font-bold text-gray-800 block">Đặc điểm nổi bật:</span>
              {product.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Quantity and Add to Cart */}
            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center border border-gray-200 rounded-xl bg-white px-2 py-1">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-rose-600 cursor-pointer font-bold"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-bold text-gray-800">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-rose-600 cursor-pointer font-bold"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-4 rounded-xl bg-rose-500 hover:bg-rose-600 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-rose-200 transition flex items-center justify-center gap-2 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isAdded ? 'Đã thêm thành công!' : 'Thêm Vào Giỏ Hàng'}</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
