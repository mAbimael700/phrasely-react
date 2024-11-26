import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import '@/index.css'
import 'react-lazy-load-image-component/src/effects/blur.css';
import { routerMerger } from '@/lib/router-merger'
import { IndexRoutes } from '@/routes/index-routes'
import { DashboardFormRoutes } from '@/routes/dashboard-forms-routes'
import { SentenceRoutes } from './routes/senteces-routes';


const routes = routerMerger(IndexRoutes, DashboardFormRoutes, SentenceRoutes)

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
