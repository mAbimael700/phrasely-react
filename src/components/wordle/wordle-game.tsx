import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import { Keyboard } from "../quizz/keyboard";

interface Word {
    word: string;
    attempts: number;
}

interface WordleGameProps {
    words: Word[];
}

interface IWordleGameState {
    passedLetters: string[],
    guestedLetters: string[],
    currAttempt: number
}


const WordleGame: React.FC<WordleGameProps> = ({ words }) => {


    const [currentWord, setCurrentWord] = useState<number>(0)
    const [state, setState] = useState<IWordleGameState>(
        {
            passedLetters: [],
            guestedLetters: [],
            currAttempt: 0
        }
    )


    const [input, setInput] = useState<string>("");

    const handleKeyPress = (key: string) => {
        setState((prev) => ({
            ...prev,
            passedLetters: [...prev.passedLetters, key],
        })); // Agregar la letra presionada al estado
    };

    return (
        <div>

            <div>
                Intento {state.currAttempt + 1}
            </div>

            {/* grid */}

            <div className={cn("grid gap-x-2 gap-y-3 w-full", `grid-cols-${words.at(currentWord)?.word.length}`)}>
                {
                    Array.from({
                        length: words.at(currentWord)?.attempts ?? 0
                    }).map((_, j) => words.at(currentWord)?.word.split("").map((_, index) => (
                        <span className="p-5 border-orange-900 w-14 h-14 bg-card font-bold rounded shadow flex items-center justify-center text-orange-900" key={index}>
                            {state.currAttempt === j && state.passedLetters.at(index)}
                        </span>
                    )))

                }
            </div>


            <div className="p-5">

              

                {/* Teclado */}
                <Keyboard onKeyPress={handleKeyPress} />

                {/* Botón para reiniciar */}
                <button
                    className="mt-4 p-2 bg-red-500 text-white rounded"
                    onClick={() => setInput("")}
                >
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

export default WordleGame;
