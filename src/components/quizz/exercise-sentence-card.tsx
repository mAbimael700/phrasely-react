import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button"


interface ExerciseSentenceCardProps {
    title: string;   
}


export const ExerciseSentenceCard = () => {
    return (
        <Card >
            <CardHeader>

                <CardTitle className=" text-2xl text-center rounded-t-md text-primary">Present Perfect</CardTitle>
            </CardHeader>
            <CardContent className="rounded-b-md">
                <p className="text-2xl text-center text-slate-700">
                    She ___ (eat) sushi for the first time.
                </p>

                <div className="flex items-center w-full justify-center gap-6 py-3 pt-6">

                    <Button className="w-28">
                        has eaten
                    </Button>

                    <Button className="w-28">
                        have eaten
                    </Button>
                    <Button className="w-28">
                        eats
                    </Button>

                </div>
            </CardContent>
            {/*  <CardFooter>
                <p>Card Footer</p>
            </CardFooter> */}
        </Card>

    )
}
