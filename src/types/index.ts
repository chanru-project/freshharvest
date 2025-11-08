export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'fruits' | 'vegetables' | 'grains' | 'dairy';
  image: string;
  unit: string;
  description: string;
  organic: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
