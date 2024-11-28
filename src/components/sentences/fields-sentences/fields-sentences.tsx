
import { useFormContext } from "react-hook-form";

import { useSentenceSelection } from "@/contexts/sentence-form-context";
import { SentenceEditor } from "@/components/sentences/fields-sentences/sentence-editor";
import { SentenceList } from "@/components/sentences/fields-sentences/sentence-list";
import { ISenteceFormSchema } from "@/components/sentences/fields-sentences/types/ISentenceFormSchema";
import { buttonVariants } from "@/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";


export function FieldsSentences() {
    const { watch, setValue, getValues } = useFormContext<ISenteceFormSchema>();
    const { selectedSentenceIndex, setSelectedSentenceIndex } = useSentenceSelection();

    // Observar las sentencias
    const sentences = watch("sentences");

    // Función para agregar una nueva sentencia
    const addSentence = () => {
        const currentSentences = getValues("sentences") || [];
        setValue("sentences", [
            ...currentSentences,
            {
                original_sentence: "",
                sentence_to_show: "",
                answers: [""],
                correct_answer: 0,
            },
        ]);
        setSelectedSentenceIndex(currentSentences.length);
    };

    return (
        <div className="space-y-4 selection:text-primary-foreground selection:bg-primary">


            <Link to=".." className={buttonVariants({ variant: "link", className: "text-secondary font-normal text-slate-800" })}>
            <ChevronLeftIcon /> Go back</Link>

            <h2 className="text-2xl font-semibold text-slate-900">Let's add some sentences!</h2>
            <div className="grid md:grid-cols-2 gap-5">
                {selectedSentenceIndex != null && (
                    <SentenceEditor
                        selectedIndex={selectedSentenceIndex}
                        sentences={sentences}
                        addSentence={addSentence}
                    />
                )}
                <SentenceList sentences={sentences} />
            </div>


        </div>
    );
}
