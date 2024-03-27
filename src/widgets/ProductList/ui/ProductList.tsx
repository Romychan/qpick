import { AddToCart } from '~/features/AddToCart';

import { Product, ProductCard } from '~/entities/Product';

import styles from './ProductList.module.scss';

interface IProductListProps {
  /** Sets the title for the current list of products */
  title?: string;
  /** List of products to display */
  products: Product[];
}

/** This component is used to display the `<ProductCard />` as a list. */
export const ProductList = ({ title, products }: IProductListProps) => {
  return (
    <div className={styles.container}>
      {title ? <h2 className={styles.title}>{title}</h2> : null}

      <div className={styles.items}>
        {products.length ? (
          products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              rate={product.rate}
              price={product.price}
              oldPrice={product.oldPrice}
              actions={<AddToCart product={product} />}
            />
          ))
        ) : (
          <p className={styles.empty} data-testid="products-empty">
            Список пуст
          </p>
        )}
      </div>
    </div>
  );
};
