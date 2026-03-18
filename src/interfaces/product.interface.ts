export interface Product {
  _id: string;
  id: string;
  title: string;
  description: string;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images?: string[];
  category?: {
    _id?: string;
    name: string;
    slug?: string;
  };
  ratingsAverage?: number;
  ratingsQuantity?: number;
  sold?: number;
}

export interface WishlistResponse {
  status: string;
  count: number;
  data: Product[];
}