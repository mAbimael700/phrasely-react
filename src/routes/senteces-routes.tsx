import { RouteObject } from "react-router-dom";
//import { Index } from "@/app/index";
import { AddSentences } from "@/app/games/sentences/add-sentences";
import { SentencePage } from "@/app/games/sentences/page";
import { FieldsSentences } from "@/components/sentences/fields-sentences/fields-sentences";
import { SentenceFormTopic } from "@/components/sentences/sentence-form-topic";

export const SentenceRoutes: RouteObject[] = [
    {
        path: "sentence",
        element: <SentencePage />,
        children: [

            {
                path: 'add', element: <AddSentences />,
                children: [
                    {
                        index: true,
                        element: <SentenceFormTopic />
                    },
                    {
                        path: "sentences",
                        element: <FieldsSentences />
                    }
                ]
            }
        ]

    }
]