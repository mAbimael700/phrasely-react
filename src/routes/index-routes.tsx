import { RouteObject } from "react-router-dom";
import { Index } from "@/app/index";
import { Documentation } from "@/app/documentation";
import { TestCode } from "@/app/test";

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
        path: "/hola",
        element: <TestCode/>
    }
]