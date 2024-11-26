import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/index.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { routerMerger } from '@/lib/router-merger'
import { IndexRoutes } from '@/routes/index-routes'
import { DashboardFormRoutes } from '@/routes/dashboard-forms-routes'
import { SentenceRoutes } from './routes/senteces-routes';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store.ts'; 

const routes = routerMerger(IndexRoutes, DashboardFormRoutes, SentenceRoutes)

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>,
)