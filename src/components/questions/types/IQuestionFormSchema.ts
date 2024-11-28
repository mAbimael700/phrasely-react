export interface IQuestionFormSchema {
    title: string;
    questions: {
        question: string;
        answers: string[];
        correct_answer: null | number
    }[];
}
