import { RouteObject } from "react-router-dom";
import { QuestionPage } from "@/app/games/questions/page";
import { AddQuestions } from "@/app/games/questions/add-questions";
import { QuestionFormTopic } from "@/components/questions/question-form-topic";
import { QuestionsFields } from "@/components/questions/questions-fields";
import { QuestionSlider } from "@/app/games/questions/slider-questions";

export const QuestionsGameRoutes: RouteObject[] = [
    {
        path: "question",
        element: <QuestionPage />,
        children: [

            {
                path: "play",
                element: <QuestionSlider />
            },
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