import { QuestionFormProvider } from '@/components/questions/question-form-provider'
import { QuestionSelectionProvider } from '@/contexts/question-form-context'
export const AddQuestions = () => {
    return (
        <QuestionSelectionProvider>
            <QuestionFormProvider />
        </QuestionSelectionProvider>
    )
}
