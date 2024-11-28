export interface ISenteceFormSchema {
    title: string;
    sentences: {
        original_sentence: string;
        sentence_to_show: string;
        answers: string[];
        correct_answer: null | number
    }[];
}
