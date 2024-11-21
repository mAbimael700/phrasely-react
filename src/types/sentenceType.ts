export interface Sentence {
    id: string;
    label: string;
    header: string;
    options: string[];
    correct: number;
}

export interface SentenceState {
    sentences: Sentence[];
    current: number;
    topic: string;
}