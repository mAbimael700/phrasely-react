"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useLocation } from "react-router-dom";
import { z } from "zod"
import { Button } from "../ui/button";
import { useQuestionSelection } from "@/contexts/question-form-context";
import React from "react";

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


    const { pathname } = useLocation()

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

    // Desestructurar métodos del formulario
    const { trigger } = form;

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        // Valida todos los campos antes de enviar
        const isValid = await trigger();
        if (!isValid) {
            console.log("There are validation errors.");
            return;
        }

        // Procede si no hay errores
        console.log(values);
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
