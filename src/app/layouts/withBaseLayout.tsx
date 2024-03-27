import { Header } from '~/widgets/Header';
import { Footer } from '~/widgets/Footer';

import { Layout } from '~/shared/ui/Layout';

/** Layout for pages with basic element layout */
export const withBaseLayout = (
  <Layout header={<Header />} footer={<Footer />} />
);
