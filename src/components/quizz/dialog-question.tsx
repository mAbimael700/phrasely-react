import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Question } from "@/types/types"
import { Button } from "../ui/button"

/* interface DialogQuestionsProps {
    answers: string[]
} */



export const DialogQuestion = () => {
    return (
        <Dialog>
            <DialogTrigger>Open</DialogTrigger>
            <DialogContent className=" border-none">
                <DialogHeader>
                    <DialogTitle className=" bg-background text-2xl text-center rounded-t-md text-primary">Present Perfect </DialogTitle>
                    <DialogDescription className=" rounded-b-md">

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



                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}
