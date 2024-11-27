"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, FormProvider } from "react-hook-form"
import React from "react"
import { useSentenceSelection } from "@/contexts/sentence-form-context"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { Button } from "../ui/button"
import { Sentence } from "@/types/sentenceType"
import { toast } from "@/hooks/use-toast"
import { useSentence } from "@/hooks/useSentence"
export const formSchema = z.object({
    title: z.string().min(2, { message: "The title must have at least 2 characters." }),
    sentences: z.array(
        z
            .object({
                original_sentence: z.string().min(2, { message: "Original sentence must have at least 2 characters." }),
                sentence_to_show: z.string().min(2, { message: "Sentence to show must have at least 2 characters." }),
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
    ).min(1, { message: "At least one sentence is required." }),
});


export const SentenceForm = () => {
    const goTo = useNavigate();
    const { pathname } = useLocation()
    const { registerNewSentence, registerTopicSentence } = useSentence()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            sentences: [{
                original_sentence: "",
                sentence_to_show: "",
                answers: [""],
                correct_answer: 0
            }]

        },
    })


    // Mantener el índice de la sentencia seleccionada
    const { setSelectedSentenceIndex } = useSentenceSelection();

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        const sentences = values.sentences.map(s => {

            const sentence: Sentence = {
                id: crypto.randomUUID(),
                correct: s.correct_answer,
                label: s.sentence_to_show,
                header: values.title,
                options: s.answers
            }
            return sentence
        }
        )

        registerNewSentence(sentences)
        registerTopicSentence(values.title)

        toast({
            title: "Sentences added succesfully"
        })
        goTo("/console")

    }
    React.useEffect(() => {
        setSelectedSentenceIndex(0)
    }, [])

    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 selection:text-secondary-foreground w-full selection:bg-secondary p-10">
                <Outlet />

                {pathname === "/sentence/add/sentences" && <Button type="submit">Submit</Button>}
            </form>


        </FormProvider>
    )
}
