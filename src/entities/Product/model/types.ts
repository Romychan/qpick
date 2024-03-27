// eslint-disable-next-line @conarti/feature-sliced/layers-slices
import { Category } from '~/entities/Category/@x';

/** Base interface for product */
export interface Product {
  id: number;
  image: string;
  title: string;
  rate: number;
  price: number;
  oldPrice?: number | null;
  description?: string;
  category?: Category;
}
