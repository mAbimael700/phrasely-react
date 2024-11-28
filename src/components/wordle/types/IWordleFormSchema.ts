export interface IWordleFormSchema  {
    title: string,
    words: {
        word: string,
        attempts: number
    }[]

}