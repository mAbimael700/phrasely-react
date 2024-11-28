
export interface Teacher {
    id: string;
    displayName: string;
    email: string;
}

export interface Guest {
    id: string;
    displayName: string;
    score: number;
}

export interface QuestionHistory {
    questionId: string;
    isCorrect: boolean;
}

export interface UserState {
    teacher: Teacher | null;
    guests: Guest[];
    currentIndex: number;
}