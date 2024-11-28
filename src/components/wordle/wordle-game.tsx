import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";

interface Word {
    word: string;
    attempts: number;
}

interface WordleGameProps {
    words: Word[];
}

const WordleGame: React.FC<WordleGameProps> = ({ words }) => {


    const [currentWord, setCurrentWord] = useState<number>(0)




    return (
        <div>



            {/* grid */}

            <div className={cn("grid gap-x-2 gap-y-3 w-full", `grid-cols-${words.at(currentWord)?.word.length}`)}>
                {
                    Array.from({
                        length: words.at(currentWord)?.word.length ?? 0
                    }).map(_ => words.at(currentWord)?.word.split("").map((letra, index) => (
                        <span className="p-5 border-orange-900 w-14 h-14 bg-card rounded shadow" key={index}></span>
                    )))

                }
            </div>


            <div>

            </div>
        </div>
    );
};

export default WordleGame;
