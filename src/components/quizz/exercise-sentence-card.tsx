import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"


interface ExerciseSentenceCardProps {
    title: string;
    label: string;
    answers: Array<String>;

}


export const ExerciseSentenceCard = ({ title, label, answers }: ExerciseSentenceCardProps) => {
    return (
        <Card >
            <CardHeader>
                <CardTitle className=" text-2xl text-center rounded-t-md text-primary">{title}</CardTitle>
            </CardHeader>

            <CardContent className="rounded-b-md">
                <p className="text-2xl text-center text-slate-700">
                    {label}
                </p>

                <div className="flex items-center w-full justify-center gap-6 py-3 pt-6">


                    {answers.map(a =>
                        <Button className="w-28">
                            {a}
                        </Button>)}

                </div>
            </CardContent>
        </Card>

    )
}
