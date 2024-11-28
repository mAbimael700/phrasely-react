import { RouteObject } from "react-router-dom";
import { WordlePage } from "@/app/games/wordle/page";
import { WordleFormWordsFields } from "@/components/wordle/wordle-form-words-fields";
import { WordleFormTopic } from "@/components/wordle/wordle-form-topic";
import { CreateWordleGame } from "@/app/games/wordle/create-wordle-game";
import { WordleGamePage } from "@/app/games/wordle/wordle-game-page";

export const WordleGameRoutes: RouteObject[] = [
    {
        path: "wordle",
        element: <WordlePage />,
        children: [

            {
                path: "play",
                element: <WordleGamePage />
            },
            {
                path: 'add', element: <CreateWordleGame />,
                children: [
                    {
                        index: true,
                        element: <WordleFormTopic />
                    },
                    {
                        path: "words",
                        element: <WordleFormWordsFields />
                    }
                ]
            }
        ]

    }
]

