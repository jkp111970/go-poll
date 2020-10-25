export interface OptionAllData {
    id: number;
    questionMasterId: number;
    optionText: string;
    isCorrectAnswer: boolean;
}

export interface QuestionAllData {
    id: number;
    quizMasterId: number;
    questionText: string;
    options: Array<OptionAllData>;
}

export interface QuizMasterAllData {
    id: number;
    subject: string;
    questions : Array<QuestionAllData>;
}