import WordleGame  from "@/components/wordle/wordle-game"

export const WordleGamePage = () => {
    const words = [
        { word: "walked", attempts: 5 },
        { word: "played", attempts: 5 },
        { word: "jumped", attempts: 5 },
      ];
      
    return (
        <div>

            <WordleGame words={words}/>
        </div>
    )
}
