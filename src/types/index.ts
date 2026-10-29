export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  badge: string;
  imageIcon: string;
  image: string;
  imageBg: string;
  desc: string;
  fullDesc: string;
  features: string[];
  specs: {
    label: string;
    value: string;
  }[];
  sizes?: string[];
  inStock: boolean;
  rating: number;
  reviewsCount: number;
}

export interface CartItem {
  product: Product;
  selectedSize?: string;
  qty: number;
}

export interface OrderData {
  orderId: string;
  customerName: string;
  phone: string;
  city: string;
  district: string;
  address: string;
  note: string;
  paymentMethod: 'cod' | 'banking';
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  discount: number;
  total: number;
  createdAt: string;
}

export interface ConsultationData {
  name: string;
  phone: string;
  need: string;
  preferredTime: string;
}
