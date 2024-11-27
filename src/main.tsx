import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@/index.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { routerMerger } from "@/lib/router-merger";
import { IndexRoutes } from "@/routes/index-routes";
import { DashboardFormRoutes } from "@/routes/dashboard-forms-routes";
import { SentenceRoutes } from "./routes/senteces-routes";

import { Provider } from "react-redux"; // Agregado para Redux
import store from "@/redux/store"; // Importa la tienda Redux

// Importa las rutas de translationChallenge
import translationChallengeRoutes from "@/routes/translation-challenge-routes"; // Ajusta la ruta del archivo

// Mezcla las rutas
const routes = routerMerger(
  IndexRoutes,
  DashboardFormRoutes,
  SentenceRoutes,
  translationChallengeRoutes // Agrega las rutas de translationChallenge
);

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
