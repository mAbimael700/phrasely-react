import { useFormContext } from "react-hook-form";
import { Input } from "../quizz/input-sentences";
import { Link } from "react-router-dom";
import { buttonVariants } from "../ui/button";
import { IQuestionFormSchema } from "./types/IQuestionFormSchema";
import { Cross1Icon } from "@radix-ui/react-icons";

export const QuestionFormTopic = () => {

    const { register } = useFormContext<IQuestionFormSchema>();
    return (
        <div className="space-y-6">

            <div className="absolute top-10 left-5 flex items-center gap-1 text-slate-950 ">
                <Link to="/console" className={buttonVariants({
                    variant: "link",
                    className: "text-slate-950 "
                })}><Cross1Icon /></Link>
                WordWise
            </div>
            <div>
                <label className="mt-20 mb-6 text-slate-900 font-medium text-5xl lg:text-6xl">

                    Write the topic that{" "}
                    <span className="hidden lg:inline"> <br /> </span>
                    you would like to learn
                </label>
                <Input
                    {...register("title")}
                    className="text-5xl w-full mt-2 p-2 border-b text-orange-700"
                />
                <p className="text-sm text-slate-800 mt-2">
                    This is the topic of exercises you want to create the game for.
                </p>
            </div>


            <div className="flex w-full justify-end">
                <Link className={buttonVariants({
                    className: "self-end"
                })} to="questions">Next</Link>
            </div>
        </div>
    )
}
