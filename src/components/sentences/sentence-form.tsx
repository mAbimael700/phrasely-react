"use client"

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"


import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/quizz/input-sentences"
import { FieldsSentences } from "@/components/sentences/fields-sentences"


export const formSchema = z.object({
    title: z.string().min(2),
    sentences: z.array(z.object(
        {
            original_sentence: z.string().min(2),
            sentence_to_show: z.string().min(2),
            answers: z.array(z.string()).min(2)
        }
    )).min(1)

})


export const SentenceForm = () => {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            sentences: [{
                original_sentence: "",
                sentence_to_show: "",
                answers: []
            }]

        },
    })


    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-2xl">Topic to learn</FormLabel>
                                <FormControl>
                                    <Input type="text" className="text-5xl" {...field} />
                                </FormControl>
                                <FormDescription>
                                    This is the topic of excersices you want to create the game.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FieldsSentences form={form} />
                    <Button type="submit">Submit</Button>
                </form>

                
            </Form>
        </div>
    )
}
