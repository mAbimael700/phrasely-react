import React from "react";

interface KeyboardProps {
  onKeyPress: (key: string) => void; // Función que se llama al presionar una tecla
}

const Keyboard: React.FC<KeyboardProps> = ({ onKeyPress }) => {
  // Organización en filas al estilo QWERTY
  const rows = [
    "QWERTYUIOP",
    "ASDFGHJKL",
    "ZXCVBNM",
  ];

  return (
    <div className="space-y-2">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center space-x-2">
          {row.split("").map((letter) => (
            <button
              key={letter}
              className="p-3 bg-gray-200 hover:bg-gray-300 text-black rounded shadow font-bold"
              onClick={() => onKeyPress(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export {Keyboard};
