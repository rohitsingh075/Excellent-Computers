export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  oldPrice?: number;
  category: string;
  image: string;
  inStock: boolean;
  features?: string[];
  specifications?: Array<{name: string, value: string}>;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  content: string;
  rating: number;
}