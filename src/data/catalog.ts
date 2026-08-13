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

export type Category = {
  name: string;
  count: string;
  image: string;
  accent: string;
};

const images = {
  gadgets: 'https://images.pexels.com/photos/32583519/pexels-photo-32583519.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  workspace: 'https://images.pexels.com/photos/16247545/pexels-photo-16247545.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  headphones: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  phone: 'https://images.pexels.com/photos/14979013/pexels-photo-14979013.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  desk: 'https://images.pexels.com/photos/14666034/pexels-photo-14666034.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
  blueTech: 'https://images.pexels.com/photos/24182750/pexels-photo-24182750.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
};

export const products: Product[] = [
  { id: 'sony-wh1000xm5', name: 'Sony WH-1000XM5 Wireless Headphones', category: 'Headphones & Audio', brand: 'Sony', price: 279, oldPrice: 399, rating: 4.8, reviews: 1284, image: images.headphones, badge: 'Best seller', description: 'Industry-leading noise cancellation and exceptional sound in a beautifully light, all-day design.', specs: ['30-hour battery life', 'Multipoint connection', 'Speak-to-chat technology', 'Hi-Res Audio certified'], stock: 18 },
  { id: 'macbook-pro-m3', name: 'Apple MacBook Pro 14-inch M3', category: 'Laptops & Computers', brand: 'Apple', price: 1499, oldPrice: 1699, rating: 4.9, reviews: 642, image: images.workspace, badge: 'New', description: 'Supercharged by the M3 chip, this MacBook Pro delivers incredible performance for work and creativity.', specs: ['Apple M3 chip', '14.2-inch Liquid Retina XDR display', '18-hour battery life', '16GB unified memory'], stock: 7 },
  { id: 'galaxy-s25', name: 'Samsung Galaxy S25 Ultra', category: 'Smartphones', brand: 'Samsung', price: 999, oldPrice: 1199, rating: 4.7, reviews: 918, image: images.phone, badge: '20% off', description: 'A premium smartphone built for next-level photography, productivity, and powerful performance.', specs: ['6.8-inch Dynamic AMOLED 2X', '200MP wide camera', 'Snapdragon 8 Elite', '5000mAh battery'], stock: 24 },
  { id: 'apple-watch-series', name: 'Apple Watch Series 10', category: 'Smartwatches', brand: 'Apple', price: 399, oldPrice: 449, rating: 4.8, reviews: 387, image: images.gadgets, badge: 'Trending', description: 'Thinner, smarter, and more capable. Stay active, connected, and informed throughout your day.', specs: ['42mm aluminum case', 'Always-On Retina display', 'Water resistant 50m', 'Up to 18-hour battery'], stock: 31 },
  { id: 'mx-master-3s', name: 'Logitech MX Master 3S', category: 'Accessories', brand: 'Logitech', price: 89, oldPrice: 119, rating: 4.6, reviews: 756, image: images.desk, description: 'The precision wireless mouse that helps you work faster with quiet clicks and an 8,000 DPI sensor.', specs: ['8,000 DPI tracking', 'Quiet clicks', 'MagSpeed scroll wheel', 'Works across 3 devices'], stock: 46 },
  { id: 'playstation-5', name: 'PlayStation 5 Slim Console', category: 'Gaming', brand: 'Sony', price: 499, oldPrice: 549, rating: 4.9, reviews: 2210, image: images.blueTech, badge: 'Limited stock', description: 'Experience lightning-fast loading, immersive haptic feedback, and breathtaking 4K graphics.', specs: ['1TB SSD', '4K TV gaming', 'Ray tracing', 'DualSense wireless controller'], stock: 4 },
  { id: 'samsung-tv', name: 'Samsung 55-inch 4K Smart TV', category: 'Smart Home', brand: 'Samsung', price: 649, oldPrice: 799, rating: 4.5, reviews: 531, image: images.workspace, badge: 'Top rated', description: 'Bring your favorite entertainment to life with vivid 4K detail and intelligent picture optimization.', specs: ['55-inch Crystal UHD', '4K upscaling', 'Smart TV powered by Tizen', 'HDR support'], stock: 12 },
  { id: 'anker-powerbank', name: 'Anker 737 Power Bank', category: 'Accessories', brand: 'Anker', price: 99, oldPrice: 129, rating: 4.7, reviews: 1102, image: images.gadgets, description: 'A powerful, travel-ready charger with real-time charging information and enough capacity for multi-day trips.', specs: ['24,000mAh capacity', '140W USB-C output', 'Smart digital display', 'MultiProtect safety system'], stock: 39 },
];

export const categories: Category[] = [
  { name: 'Smartphones', count: '120+ products', image: images.phone, accent: '#e8f1ff' },
  { name: 'Laptops & Computers', count: '86+ products', image: images.workspace, accent: '#eef8f5' },
  { name: 'Headphones & Audio', count: '64+ products', image: images.headphones, accent: '#fff4e8' },
  { name: 'Smartwatches', count: '42+ products', image: images.gadgets, accent: '#f1edff' },
  { name: 'Gaming', count: '78+ products', image: images.blueTech, accent: '#eaf8ff' },
  { name: 'Cameras', count: '36+ products', image: images.desk, accent: '#fff0f0' },
  { name: 'Smart Home', count: '51+ products', image: images.workspace, accent: '#eff9e8' },
  { name: 'Accessories', count: '210+ products', image: images.gadgets, accent: '#f4f5f7' },
];

export const formatPrice = (price: number) => `$${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
