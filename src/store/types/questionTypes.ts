export interface Question {
    id: string;
    questionText: string;
    options: string[];
    correctAnswer: string;
}

export interface QuestionState {
    questions: Question[];
    current: number;
}