import { SentenceForm } from '@/components/sentences/sentence-form-provider'
import { SentenceSelectionProvider } from '@/contexts/sentence-form-context'
export const AddSentences = () => {
    return (
        <SentenceSelectionProvider>
            <SentenceForm />
        </SentenceSelectionProvider>
    )
}
