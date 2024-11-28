"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useQuestion } from "@/hooks/useQuestion";
import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { useQuestionSelection } from "@/contexts/question-form-context";
import React from "react";
import { Question } from "@/types/questionType";
import { toast } from "@/hooks/use-toast";

export const formSchema = z.object({
    title: z.string().min(2, { message: "The title must have at least 2 characters." }),
    questions: z.array(
        z
            .object({

                question: z.string().min(2, { message: "Question to show must have at least 2 characters." }),
                answers: z.array(z.string().min(1, { message: "Answer cannot be empty." })).min(2, {
                    message: "There must be at least 2 answers.",
                }),
                correct_answer: z.number(),
            })
            .refine(
                (obj) =>
                    obj.correct_answer >= 0 && obj.correct_answer < obj.answers.length,
                {
                    message: "The correct answer index must be within the range of available answers.",
                }
            )
    ).min(1, { message: "At least one question is required." }),
});

export const QuestionFormProvider = () => {


    const { handleNewQuestion, registerTopicSentence } = useQuestion()
    const { pathname } = useLocation()
    const goTo = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            questions: [{

                question: "",
                answers: [""],
                correct_answer: 0
            }]

        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        //addTopic(values.title)
        const questions = values.questions.map(q => {
            const question: Question = {
                id: crypto.randomUUID(),
                label: q.question,
                options: q.answers,
                correct: q.correct_answer,
            }
            return question
        })

        registerTopicSentence(values.title)
        handleNewQuestion(questions)

        toast({
            title: "Questions added succesfully"
        })
        goTo("/console")
    };

    // Mantener el índice de la sentencia seleccionada
    const { setSelectedQuestionIndex } = useQuestionSelection();
    React.useEffect(() => {
        setSelectedQuestionIndex(0)
    }, [])


    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 selection:text-secondary-foreground w-full selection:bg-secondary p-10">
                <Outlet />


                {pathname === "/question/add/questions" && <Button type="submit">Submit</Button>}

            </form>


        </FormProvider>
    )
}
