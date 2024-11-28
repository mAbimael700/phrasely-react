import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const   TranslationChallengeIntro = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto text-center">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">🌟 Translation Challenge</h1>
        <p className="text-gray-600 text-lg">
          Bienvenido al desafío de traducción. Ponte a prueba o reta a tus alumnos.
        </p>
      </header>

      <Card className="p-6">
        <h2 className="text-2xl font-semibold mb-4">📖 ¿Cómo jugar?</h2>
        <p className="text-gray-600 mb-6">
          Traduce las frases al inglés o español. El profesor puede configurar las reglas del juego y
          controlar la experiencia desde esta aplicación.
        </p>
        <Button asChild size="lg">
          <a href="/translation-challenge/play">🎮 Empezar a Jugar</a>
        </Button>
      </Card>

      <div className="flex justify-center gap-4 mt-8">
        <Button asChild variant="outline">
          <a href="/translation-challenge/settings">⚙️ Configuración</a>
        </Button>
        <Button asChild variant="outline">
          <a href="/translation-challenge/add-question">➕ Agregar Preguntas</a>
        </Button>
      </div>
    </div>
  );
};

export default TranslationChallengeIntro;
