import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/index.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { routerMerger } from '@/lib/router-merger'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/redux/store.ts';

import { QuestionsGameRoutes } from '@/routes/question-routes.tsx';
import { SentenceRoutes } from '@/routes/senteces-routes';
import { IndexRoutes } from '@/routes/index-routes'
import { DashboardFormRoutes } from '@/routes/dashboard-forms-routes'
import { ConsoleRoutes } from './routes/console-routes';
import { Toaster } from "@/components/ui/toaster"
import { AuthRoutes } from './routes/auth-routes';
import { WordleGameRoutes } from './routes/wordle-routes';

const routes = routerMerger(IndexRoutes,
  DashboardFormRoutes,
  SentenceRoutes,
  QuestionsGameRoutes,
  ConsoleRoutes,
  AuthRoutes,
  WordleGameRoutes)

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster />
      </PersistGate>
    </Provider>
  </StrictMode>,
)