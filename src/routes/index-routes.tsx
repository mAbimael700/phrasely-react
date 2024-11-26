import { RouteObject } from "react-router-dom";
import { Index } from "@/app/index";
import { Documentation } from "@/app/documentation";
import { GameConsole } from "@/app/game-console";

export const IndexRoutes: RouteObject[] = [
    {
        path: "/",
        element: <Index/>
    },
    {
        path: "/docs",
        element: <Documentation/>
    },
    {
        path: "/console",
        element: <GameConsole/>
    }
]