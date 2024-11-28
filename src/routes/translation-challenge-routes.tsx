import { RouteObject } from "react-router-dom";
import TranslationChallenge from "@/app/translation/TranslationChallengeIntro";
import AddQuestion from "@/app/translation/AddQuestion";
import Game from "@/app/translation/TranslationChallengePlay";
import Settings from "@/app/translation/TranslationChallengeSettings"; // Importar el nuevo componente de configuración

const translationChallengeRoutes: RouteObject[] = [
  {
    path: "/translation-challenge",
    Component: TranslationChallenge,
  },
  {
    path: "/translation-challenge/add-question",
    element: <AddQuestion />,
  },
  {
    path: "/translation-challenge/play",
    element: <Game />,
  },
  {
    path: "/translation-challenge/settings", // Nueva ruta para configuración
    element: <Settings />,
  },
];

export default translationChallengeRoutes;
