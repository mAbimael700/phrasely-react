import { RouteObject } from "react-router-dom";

import { FieldsSentences } from "@/components/sentences/fields-sentences/fields-sentences";
import { QuestionPage } from "@/app/games/questions/page";
import { AddQuestions } from "@/app/games/questions/add-questions";
import { QuestionFormTopic } from "@/components/questions/question-form-topic";
import { QuestionsFields } from "@/components/questions/questions-fields";

export const QuestionsGameRoutes: RouteObject[] = [
    {
        path: "question",
        element: <QuestionPage />,
        children: [

            {
                path: 'add', element: <AddQuestions />,
                children: [
                    {
                        index: true,
                        element: <QuestionFormTopic />
                    },
                    {
                        path: "questions",
                        element: <QuestionsFields />
                    }
                ]
            }
        ]

    }
]