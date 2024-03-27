import { Outlet } from 'react-router-dom';

import { ProductList } from '~/widgets/ProductList';

import { MOCK_PRODUCTS } from '~/entities/Product';
import { MAIN_CATEGORIES } from '~/entities/Category';

import styles from './CatalogPage.module.scss';

/** This component is used to display the catalog page */
export const CatalogPage = () => {
  return (
    <div className={styles.container}>
      {MAIN_CATEGORIES.map((category) => (
        <ProductList
          key={category}
          title={category}
          products={MOCK_PRODUCTS.filter(
            (product) => product.category === category,
          )}
        />
      ))}

      <Outlet />
    </div>
  );
};
