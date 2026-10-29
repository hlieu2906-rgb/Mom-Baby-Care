import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS, FORMAT_CURRENCY } from '../data/products';
import { Plus, Eye, Check, Star, Search, Filter, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';

interface ShopSectionProps {
  onAddToCart: (product: Product, size?: string) => void;
  onQuickView: (product: Product) => void;
  onOpenFlangeGuide: () => void;
}

export const ShopSection: React.FC<ShopSectionProps> = ({
  onAddToCart,
  onQuickView,
  onOpenFlangeGuide,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tất cả');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({
    3: 'Size 24mm (Chân ti chuẩn 19-21mm)', // Default standard size for Phễu
    4: 'Size M (3-6 tháng)', // Default size for Núm ti
  });
  const [recentlyAddedId, setRecentlyAddedId] = useState<number | null>(null);

  const categories = [
    'Tất cả',
    'Máy hút sữa thông minh',
    'Phụ kiện chuẩn an toàn',
    'Phụ kiện bú bình',
    'Linh kiện thay thế',
    'Phụ kiện trữ sữa',
  ];

  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory =
      selectedCategory === 'Tất cả' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleAdd = (product: Product) => {
    const size = product.sizes ? selectedSizes[product.id] || product.sizes[0] : undefined;
    onAddToCart(product, size);
    setRecentlyAddedId(product.id);
    setTimeout(() => {
      setRecentlyAddedId(null);
    }, 1500);
  };

  const handleSizeChange = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  return (
    <section id="san-pham" className="py-16 sm:py-24 bg-[#FCF9F6] border-b border-rose-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-100 text-rose-700 text-xs font-bold uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Sản Phẩm & Phụ Kiện Chính Hãng</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
            Dụng Cụ Hút Sữa & Phụ Kiện An Toàn
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Mức giá trợ giá tối ưu cùng chính sách bảo hành 1 đổi 1 và hỗ trợ mượn máy thay thế 0đ tại Hà Nội.
          </p>

          {/* Quick link to Flange Size tool */}
          <div className="mt-4 inline-flex items-center gap-2 bg-white px-4 py-2 rounded-2xl border border-rose-200 shadow-xs text-xs sm:text-sm text-gray-700">
            <span>Mẹ chưa biết chọn size phễu nào?</span>
            <button
              onClick={onOpenFlangeGuide}
              className="text-rose-600 font-bold hover:underline cursor-pointer inline-flex items-center gap-1"
            >
              <span>Xem công cụ đo size phễu miễn phí</span>
              &rarr;
            </button>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none text-xs sm:text-sm font-semibold">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-rose-500 text-white shadow-md shadow-rose-200 font-bold'
                    : 'bg-white text-gray-600 border border-gray-200/80 hover:border-rose-300 hover:bg-rose-50/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative min-w-[240px] max-w-sm">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm máy hút, phụ kiện..."
              className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-rose-400 transition placeholder:text-gray-400"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 hover:text-gray-600"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((prod) => {
            const isAdded = recentlyAddedId === prod.id;
            return (
              <div
                key={prod.id}
                className="bg-white rounded-3xl p-6 border border-rose-100 shadow-xs hover:shadow-xl hover:border-rose-300/80 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Top Badge & Graphic */}
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-100">
                      {prod.badge}
                    </span>
                    <button
                      onClick={() => onQuickView(prod)}
                      className="p-1.5 rounded-xl bg-gray-50 text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition cursor-pointer"
                      title="Xem thông số kỹ thuật chi tiết"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Real Product Image Container */}
                  <div
                    onClick={() => onQuickView(prod)}
                    className="w-full h-52 rounded-2xl overflow-hidden bg-rose-50/40 border border-rose-100/70 mb-4 group-hover:shadow-md transition-all cursor-pointer relative flex items-center justify-center"
                  >
                    <img
                      src={prod.image}
                      alt={prod.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        const fallback = e.currentTarget.parentElement?.querySelector('.fallback-icon');
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className="fallback-icon hidden flex flex-col items-center justify-center p-4">
                      <span className="text-5xl filter drop-shadow select-none mb-1">
                        {prod.imageIcon}
                      </span>
                      <span className="text-[10px] text-gray-400 font-medium">Bấm để xem chi tiết</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-2.5">
                      <span className="text-[11px] font-bold text-white bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs flex items-center gap-1 shadow-sm">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Xem ảnh & thông số</span>
                      </span>
                    </div>
                  </div>

                  {/* Category & Title */}
                  <span className="text-[11px] font-bold text-rose-500 uppercase tracking-wider block mb-1">
                    {prod.category}
                  </span>
                  <h3
                    onClick={() => onQuickView(prod)}
                    className="font-extrabold text-gray-900 text-base sm:text-lg leading-snug mb-2 hover:text-rose-600 cursor-pointer transition-colors"
                  >
                    {prod.name}
                  </h3>

                  {/* Rating preview */}
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs font-bold text-gray-700">{prod.rating}</span>
                    <span className="text-[11px] text-gray-400">({prod.reviewsCount} đánh giá)</span>
                  </div>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {prod.desc}
                  </p>

                  {/* Size selection if product has sizes */}
                  {prod.sizes && prod.sizes.length > 0 && (
                    <div className="mb-4 p-3 rounded-2xl bg-[#FCF9F6] border border-rose-100/70">
                      <div className="flex justify-between items-center mb-1.5">
                        <label className="text-[11px] font-bold text-gray-700">
                          Chọn kích thước:
                        </label>
                        {prod.id === 3 && (
                          <button
                            type="button"
                            onClick={onOpenFlangeGuide}
                            className="text-[10px] text-rose-600 font-bold hover:underline cursor-pointer"
                          >
                            Đo size?
                          </button>
                        )}
                      </div>
                      <select
                        value={selectedSizes[prod.id] || prod.sizes[0]}
                        onChange={(e) => handleSizeChange(prod.id, e.target.value)}
                        className="w-full text-xs bg-white border border-gray-200 rounded-xl px-2.5 py-1.5 font-medium text-gray-700 focus:outline-none focus:ring-1 focus:ring-rose-400 cursor-pointer"
                      >
                        {prod.sizes.map((sz) => (
                          <option key={sz} value={sz}>
                            {sz}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-lg font-black text-rose-600">
                      {FORMAT_CURRENCY(prod.price)}
                    </div>
                    <div className="text-xs text-gray-400 line-through">
                      {FORMAT_CURRENCY(prod.originalPrice)}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onQuickView(prod)}
                      className="px-2.5 py-2 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 text-xs font-semibold transition cursor-pointer"
                    >
                      Chi tiết
                    </button>
                    <button
                      onClick={() => handleAdd(prod)}
                      className={`px-4 py-2.5 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 shadow-sm cursor-pointer ${
                        isAdded
                          ? 'bg-emerald-500 text-white'
                          : 'bg-rose-50 text-rose-600 hover:bg-rose-500 hover:text-white border border-rose-200'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>Đã thêm</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>Thêm</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty search state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 p-8">
            <p className="text-gray-500 text-sm">Không tìm thấy sản phẩm phù hợp với từ khóa "{searchQuery}".</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('Tất cả');
              }}
              className="mt-3 px-4 py-2 rounded-xl bg-rose-50 text-rose-600 text-xs font-bold hover:bg-rose-100"
            >
              Xem lại tất cả sản phẩm
            </button>
          </div>
        )}

        {/* Assurance Banner below products */}
        <div className="mt-12 p-6 rounded-3xl bg-gradient-to-r from-rose-500/5 via-pink-500/10 to-amber-500/5 border border-rose-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm">
                Cam kết 100% chính hãng & chuẩn an toàn y tế cho mẹ & bé
              </h4>
              <p className="text-xs text-gray-500">
                Cho mượn máy hút thay thế miễn phí trong lúc bảo hành hoặc kiểm tra máy tại Hà Nội.
              </p>
            </div>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <a
              href="#tu-van"
              className="px-5 py-2.5 rounded-xl bg-white border border-rose-200 text-rose-600 text-xs font-bold hover:bg-rose-50 transition shadow-xs"
            >
              Đăng ký mượn máy
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
