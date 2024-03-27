import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { CartContextProvider } from '~/entities/Cart';

import { ToastProvider } from '~/shared/ui/Toast';

import { withRouter } from '~/app/providers/withRouter';

import '~/app/assets/styles/style.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ToastProvider>
    <CartContextProvider>
      <RouterProvider router={withRouter()} />
    </CartContextProvider>
  </ToastProvider>,
);
