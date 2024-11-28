import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const [enableTimer, setEnableTimer] = useState<boolean>(false);
  const [timerDuration, setTimerDuration] = useState<number>(30); // Tiempo en segundos
  const [defaultDifficulty, setDefaultDifficulty] = useState<"easy" | "medium" | "hard">("medium");
  const navigate = useNavigate();

  const handleSaveSettings = () => {
    // Guarda las configuraciones en localStorage o en un estado global
    const settings = {
      enableTimer,
      timerDuration,
      defaultDifficulty,
    };

    localStorage.setItem("gameSettings", JSON.stringify(settings));
    alert("¡Configuraciones guardadas!");
    navigate("/translation-challenge");
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold">⚙️ Configuración</h1>
      </header>

      <div className="space-y-6">
        {/* Configuración del temporizador */}
        <div>
          <label className="block text-gray-700 font-semibold">Habilitar Temporizador:</label>
          <input
            type="checkbox"
            checked={enableTimer}
            onChange={(e) => setEnableTimer(e.target.checked)}
            className="mt-2"
          />
        </div>

        {enableTimer && (
          <div>
            <label className="block text-gray-700 font-semibold">Duración del Temporizador (segundos):</label>
            <input
              type="number"
              value={timerDuration}
              onChange={(e) => setTimerDuration(Number(e.target.value))}
              min={5}
              max={300}
              className="w-full p-2 border rounded mt-1"
            />
          </div>
        )}

        {/* Configuración de dificultad */}
        <div>
          <label className="block text-gray-700 font-semibold">Dificultad Predeterminada:</label>
          <select
            value={defaultDifficulty}
            onChange={(e) => setDefaultDifficulty(e.target.value as "easy" | "medium" | "hard")}
            className="w-full p-2 border rounded mt-1"
          >
            <option value="easy">Fácil</option>
            <option value="medium">Media</option>
            <option value="hard">Difícil</option>
          </select>
        </div>

        {/* Botón para guardar configuraciones */}
        <div className="text-center">
          <button
            onClick={handleSaveSettings}
            className="px-6 py-2 bg-blue-500 text-white rounded font-semibold"
          >
            Guardar Configuración
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
