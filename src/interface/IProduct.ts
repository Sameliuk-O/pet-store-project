export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  key: number;
  price: string;
  rating: {
    count: number;
    rate: string;
  };
  title: string;
}
