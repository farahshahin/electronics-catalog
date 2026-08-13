import { images } from './images';

export type Product = {
  id: string;
  name: string;
  category: string;
  brand: string;
  price: number;
  oldPrice: number;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
  description: string;
  specs: string[];
  stock: number;
};

export const products: Product[] = [
  {
    id: 'sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Wireless Headphones',
    category: 'Headphones & Audio',
    brand: 'Sony',
    price: 279,
    oldPrice: 399,
    rating: 4.8,
    reviews: 1284,
    image: images.headphones,
    badge: 'Best Seller',
    description: 'Premium wireless headphones with industry-leading noise cancellation.',
    specs: ['30-hour battery', 'Multipoint connection', 'Speak-to-chat', 'Hi-Res Audio'],
    stock: 18,
  },

  {
    id: 'macbook-pro-m3',
    name: 'Apple MacBook Pro 14-inch M3',
    category: 'Laptops & Computers',
    brand: 'Apple',
    price: 1499,
    oldPrice: 1699,
    rating: 4.9,
    reviews: 642,
    image: images.workspace,
    badge: 'New',
    description: 'Powerful MacBook Pro with the M3 chip for work and creativity.',
    specs: ['Apple M3 chip', '14.2-inch XDR display', '18-hour battery', '16GB memory'],
    stock: 7,
  },

  {
    id: 'galaxy-s25',
    name: 'Samsung Galaxy S25 Ultra',
    category: 'Smartphones',
    brand: 'Samsung',
    price: 999,
    oldPrice: 1199,
    rating: 4.7,
    reviews: 918,
    image: images.phone,
    badge: '20% Off',
    description: 'Premium smartphone with powerful performance and advanced cameras.',
    specs: ['6.8-inch AMOLED', '200MP camera', 'Snapdragon 8 Elite', '5000mAh battery'],
    stock: 24,
  },

  {
    id: 'mx-master-3s',
    name: 'Logitech MX Master 3S',
    category: 'Accessories',
    brand: 'Logitech',
    price: 89,
    oldPrice: 119,
    rating: 4.6,
    reviews: 756,
    image: images.desk,
    description: 'Precision wireless mouse designed for comfortable and productive work.',
    specs: ['8000 DPI', 'Quiet clicks', 'MagSpeed scroll', '3-device support'],
    stock: 46,
  },

  {
    id: 'playstation-5',
    name: 'PlayStation 5 Slim Console',
    category: 'Gaming',
    brand: 'Sony',
    price: 499,
    oldPrice: 549,
    rating: 4.9,
    reviews: 2210,
    image: images.gaming,
    badge: 'Limited Stock',
    description: 'Next-generation gaming with fast loading and immersive 4K graphics.',
    specs: ['1TB SSD', '4K gaming', 'Ray tracing', 'DualSense controller'],
    stock: 4,
  },

  {
    id: 'anker-737',
    name: 'Anker 737 Power Bank',
    category: 'Accessories',
    brand: 'Anker',
    price: 99,
    oldPrice: 129,
    rating: 4.7,
    reviews: 1102,
    image: images.gadgets,
    description: 'High-capacity portable charger with fast USB-C charging.',
    specs: ['24000mAh', '140W USB-C', 'Digital display', 'Safety system'],
    stock: 39,
  },
];

export const formatPrice = (price: number) =>
  `$${price.toLocaleString('en-US', {
    minimumFractionDigits: 2,
  })}`;