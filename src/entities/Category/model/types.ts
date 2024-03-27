import { MAIN_CATEGORIES } from './constants';

/** The union type with the categories */
export type Category = (typeof MAIN_CATEGORIES)[number];
