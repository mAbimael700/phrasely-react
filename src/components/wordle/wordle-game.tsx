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


    let palabra = "Hola";

    [...palabra].map(letra => {
        return letra
    });



    return (
        <div>



            {/* grid */}
            {
                words.at(currentWord)?.word
            }


            <div>

            </div>
        </div>
    );
};

export default WordleGame;
