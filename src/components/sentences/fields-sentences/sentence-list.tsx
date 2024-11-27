import { SentenceCardForm } from "@/components/sentences/sentence-card-form";

interface SentenceListProps {
    sentences: Array<any>;
}

export function SentenceList({ sentences }: SentenceListProps) {
    return (
        <div className="space-y-2">
            {sentences.map((_, index) => (
                <SentenceCardForm key={index} index={index} />
            ))}
        </div>
    );
}
