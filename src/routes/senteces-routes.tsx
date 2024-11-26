import { RouteObject } from "react-router-dom";
//import { Index } from "@/app/index";
import { AddSentences } from "@/app/games/sentences/add-sentences";
import { SentencePage } from "@/app/games/sentences/page";

export const SentenceRoutes: RouteObject[] = [
    {
        path: "sentence",

        element: <SentencePage />,
        children: [
            {
                path: 'add', element: <AddSentences />
            }
        ]

    }
]