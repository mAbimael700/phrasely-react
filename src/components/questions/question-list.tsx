import { QuestionCardForm } from "./question-card-form";

interface QuestionListProps {
    questions: Array<any>;
}

export function QuestionList({ questions }: QuestionListProps) {
    return (
        <div className="space-y-2">
            {questions.map((_, index) => (
                <QuestionCardForm key={index} index={index} />
            ))}
        </div>
    );
}
