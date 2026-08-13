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
