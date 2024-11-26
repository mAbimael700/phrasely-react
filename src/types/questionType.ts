export interface Question {
    id: string;
    label: string;
    options: string[];
    correct: number;
}

export interface QuestionState {
    questions: Question[];
    current: number;
    topic: string;
}