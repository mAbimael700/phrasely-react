import { RouteObject } from "react-router-dom";
import { GameConsole } from "@/app/console/game-console";
import { ScoreRanking } from "@/app/console/score-ranking";
import { GuestSession } from "@/app/console/new-guest";

export const ConsoleRoutes: RouteObject[] = [
    {
        path: "/console",
        element: <GameConsole />,
    },
    {
        path: "/console/rank",
        element: <ScoreRanking />,
    },
    {
        path: "/console/guest/add",
        element: <GuestSession />
    }
]