import { useFieldArray, useFormContext } from "react-hook-form";
import { IWordleFormSchema } from "@/components/wordle/types/IWordleFormSchema";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Button, buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon, Cross1Icon, PlusCircledIcon } from "@radix-ui/react-icons";
import { handleGrammarCommands } from "@/lib/commands/handle-grammar-commands";

export const WordleFormWordsFields = () => {

    const { control, register, setValue } = useFormContext<IWordleFormSchema>();
    const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
        control, // control props comes from useForm (optional: if you are using FormProvider)
        name: "words", // unique name for your Field Array
    });

    const defaultValues = {
        word: "",
        attempts: 5
    }


    return (
        <div className="space-y-6">

            <Link to=".." className={buttonVariants({ variant: "link", className: "text-secondary font-normal text-slate-800" })}>
                <ChevronLeftIcon /> Go back</Link>



            <div className="flex items-center justify-between">

                <h2 className="text-2xl font-semibold text-slate-900">Let's add some words!</h2>
                <Button type="button" size="icon" variant="secondary"
                    onClick={() => append(defaultValues)}>
                    <PlusCircledIcon />
                </Button>
            </div>

            <div className="space-y-4">

                <span className="grid grid-cols-3 gap-4 items-center text-orange-800">
                    <strong className="col-span-2">Words</strong>
                    <strong className="col-span-1 grid grid-cols-4">
                        <span className="col-span-3">Attempts</span>

                    </strong>
                </span>

                {fields.map((field, index) => (
                    <ul
                        className="grid grid-cols-3 gap-4 items-center"
                        key={field.id} // important to include key with field's id
                    >
                        <Input
                            type="text"
                            className="col-span-2 bg-orange-200 border-orange-400 text-secondary-foreground"
                            {...register(`words.${index}.word`)}
                            onKeyDown={(e) => handleGrammarCommands(e, `words.${index}.word`, setValue)}
                        />


                        <div className="grid grid-cols-4 col-span-1 gap-4">

                            <Input type="number" className="bg-orange-200 border-orange-400 col-span-3 text-secondary-foreground"{...register(`words.${index}.attempts`)} />
                            <Button variant="destructive" onClick={() => remove(index)} size="icon" type="button"><Cross1Icon /></Button>
                        </div>
                    </ul>

                ))}
            </div>



        </div>
    )
}   
