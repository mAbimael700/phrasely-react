"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { z } from "zod"
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

export const formSchema = z.object({
    title: z.string().min(2, { message: "The title must have at least 2 characters." }),
    words: z.array(
        z.object({

            word: z.string().min(2, { message: "Question to show must have at least 2 characters." }),
            attempts: z.number().min(3).max(9),
        })
    ).min(1, { message: "At least one question is required." }),
});

export const WordleFormProvider = () => {

    const { pathname } = useLocation()
    const goTo = useNavigate();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            words: [{
                word: "",
                attempts: 5
            }]

        },
    })

    // 2. Define a submit handler.
    const onSubmit = async (values: z.infer<typeof formSchema>) => {

        // Prints the values
       console.log(values);
       

        toast({
            title: "Words added succesfully"
        })
        goTo("/console")
    };




    return (
        <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 selection:text-secondary-foreground w-full selection:bg-secondary p-10">
                <Outlet />


                {pathname === "/wordle/add/words" && <Button type="submit">Submit</Button>}

            </form>


        </FormProvider>
    )
}
