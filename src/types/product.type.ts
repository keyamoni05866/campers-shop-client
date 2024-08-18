export type TProduct = {
  _id: string;
  name: string;
  price: string;
  stockQuantity: number;
  description: string;
  category: string;
  image: string;
  ratings: number;
  isFeatured?: boolean;
};
