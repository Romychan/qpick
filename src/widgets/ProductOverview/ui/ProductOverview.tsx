import { Navigate, useNavigate, useParams } from 'react-router-dom';

import { AddToCart } from '~/features/AddToCart';

import { MOCK_PRODUCTS, ProductDetails } from '~/entities/Product';

import { Drawer } from '~/shared/ui/Drawer';

import styles from './ProductOverview.module.scss';

/** This component is used to display detailed product information in a modal window */
export const ProductOverview = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const currentProduct = MOCK_PRODUCTS.find(
    (element) => element.id === Number(productId),
  );

  if (!productId || !currentProduct) {
    return <Navigate to="/" />;
  }

  return (
    <Drawer
      description={`Каталог / ${currentProduct.category} / ${currentProduct.title}`}
      className={styles.container}
      onClose={() => navigate('/')}
      isVisible
    >
      <ProductDetails
        product={currentProduct}
        actions={<AddToCart product={currentProduct} />}
      />
    </Drawer>
  );
};
