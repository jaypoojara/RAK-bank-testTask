export interface IQuestionItem {
    key: string,
    question: string,
    options: IOptionItem[]
}

export interface IOptionItem {
    key: string,
    title: string,
    points: number
}