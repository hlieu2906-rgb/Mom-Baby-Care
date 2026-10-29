/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Product, CartItem, OrderData } from './types';
import { PRODUCTS } from './data/products';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ShopSection } from './components/ShopSection';
import { HighlightsSection } from './components/HighlightsSection';
import { ConsultationAndShowroom } from './components/ConsultationAndShowroom';
import { CartDrawer } from './components/CartDrawer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { FlangeSizeGuideModal } from './components/FlangeSizeGuideModal';
import { CheckoutModal } from './components/CheckoutModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { FloatingActions } from './components/FloatingActions';
import { NotificationToast } from './components/NotificationToast';
import { Footer } from './components/Footer';

export default function App() {
  // Load initial cart from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('mb_cart');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return [];
  });

  // Modals & Drawers state
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [isFlangeGuideOpen, setIsFlangeGuideOpen] = useState<boolean>(false);
  const [completedOrder, setCompletedOrder] = useState<OrderData | null>(null);
  
  // Checkout discount applied from cart drawer
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [discountCode, setDiscountCode] = useState<string>('');

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('mb_cart', JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((curr) => (curr === msg ? null : curr));
    }, 3500);
  };

  // Add product to cart
  const handleAddToCart = (product: Product, size?: string, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex].qty += quantity;
        return next;
      } else {
        return [...prev, { product, selectedSize: size, qty: quantity }];
      }
    });

    const sizeText = size ? ` (${size.split(' ')[0]} ${size.split(' ')[1] || ''})` : '';
    showToast(`Đã thêm "${product.name}${sizeText}" vào giỏ hàng`);
  };

  // Update quantity
  const handleUpdateQty = (productId: number, delta: number, size?: string) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const newQty = item.qty + delta;
            return newQty > 0 ? { ...item, qty: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  // Remove single item
  const handleRemoveItem = (productId: number, size?: string) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size)
      )
    );
  };

  // Add Best Seller (MomCare Pro) from Hero
  const handleAddToCartBestSeller = () => {
    const momcarePro = PRODUCTS.find((p) => p.id === 1) || PRODUCTS[0];
    handleAddToCart(momcarePro);
    setIsCartOpen(true);
  };

  // Flange recommendation direct add
  const handleSelectFlangeSize = (sizeLabel: string) => {
    const flangeProduct = PRODUCTS.find((p) => p.id === 3);
    if (flangeProduct) {
      handleAddToCart(flangeProduct, sizeLabel, 1);
      setIsCartOpen(true);
    }
  };

  // Proceed from Drawer to Checkout Modal
  const handleProceedToCheckout = (discount: number, code: string) => {
    setAppliedDiscount(discount);
    setDiscountCode(code);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Order submission
  const handleCompleteOrder = (orderData: OrderData) => {
    setCompletedOrder(orderData);
    setCart([]);
    setIsCheckoutOpen(false);
    showToast(`🎉 Chúc mừng mẹ đã đặt hàng thành công! Mã đơn: ${orderData.orderId}`);
  };

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  const scrollToConsultation = () => {
    const el = document.getElementById('tu-van');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCF9F6] text-gray-800 flex flex-col font-sans selection:bg-rose-100 selection:text-rose-700">
      
      {/* Toast Notification */}
      <NotificationToast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenFlangeGuide={() => setIsFlangeGuideOpen(true)}
        onOpenConsultation={scrollToConsultation}
      />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onAddToCartBestSeller={handleAddToCartBestSeller}
          onOpenConsultation={scrollToConsultation}
        />

        {/* Product Store Section */}
        <ShopSection
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickViewProduct(p)}
          onOpenFlangeGuide={() => setIsFlangeGuideOpen(true)}
        />

        {/* 3 Pillars Highlights Section */}
        <HighlightsSection />

        {/* Consultation Form & Hanoi Showroom Section */}
        <ConsultationAndShowroom />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <FloatingActions
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenConsultation={scrollToConsultation}
      />

      {/* Shopping Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Product Quick View Modal */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Flange Size Guide Modal */}
      <FlangeSizeGuideModal
        isOpen={isFlangeGuideOpen}
        onClose={() => setIsFlangeGuideOpen(false)}
        onSelectFlangeSize={handleSelectFlangeSize}
        flangeProduct={PRODUCTS.find((p) => p.id === 3)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cart}
        discount={appliedDiscount}
        discountCode={discountCode}
        onCompleteOrder={handleCompleteOrder}
      />

      {/* Order Success Confirmation Modal */}
      <OrderSuccessModal
        order={completedOrder}
        onClose={() => setCompletedOrder(null)}
      />

    </div>
  );
}
