export interface Question {
    id: string;
    question: string;
    options: string[];
    correctAnswer: string;
}

export interface QuestionState {
    questions: Question[];
    current: number;
}