import React, { useEffect, useState } from "react";
import { Question } from "@/types/question";

const Game = () => {
  // Lista de preguntas predeterminadas
  const predefinedQuestions: Question[] = [
    { id: 1, question: "¿Cómo se traduce 'apple'?", answers: ["Manzana", "Naranja", "Pera", "Banana"], correctAnswers: [0], difficulty: "easy" },
    { id: 2, question: "¿Cómo se traduce 'table'?", answers: ["Mesa", "Silla", "Escritorio", "Puerta"], correctAnswers: [0], difficulty: "medium" },
    { id: 3, question: "¿Cómo se traduce 'house'?", answers: ["Casa", "Edificio", "Departamento", "Oficina"], correctAnswers: [0], difficulty: "easy" },
    { id: 4, question: "¿Cómo se traduce 'unbelievable'?", answers: ["Increíble", "Imposible", "Desafiante", "Insólito"], correctAnswers: [0], difficulty: "hard" },
    { id: 5, question: "¿Cómo se traduce 'chair'?", answers: ["Silla", "Mesa", "Cama", "Ventana"], correctAnswers: [0], difficulty: "easy" },
    { 
        "id": 6, 
        "question": "¿Cómo se traduce 'dog'?", 
        "answers": ["Perro", "Gato", "Conejo", "Pez"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 7, 
        "question": "¿Cómo se traduce 'window'?", 
        "answers": ["Ventana", "Puerta", "Pared", "Techo"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 8, 
        "question": "¿Cómo se traduce 'freedom'?", 
        "answers": ["Libertad", "Amor", "Paz", "Justicia"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 9, 
        "question": "¿Cómo se traduce 'book'?", 
        "answers": ["Libro", "Revista", "Cuaderno", "Diario"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 10, 
        "question": "¿Cómo se traduce 'challenge'?", 
        "answers": ["Desafío", "Problema", "Reto", "Competencia"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 11, 
        "question": "¿Cómo se traduce 'river'?", 
        "answers": ["Río", "Lago", "Océano", "Montaña"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 12, 
        "question": "¿Cómo se traduce 'beautiful'?", 
        "answers": ["Hermoso", "Atractivo", "Elegante", "Fabuloso"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 13, 
        "question": "¿Cómo se traduce 'sunshine'?", 
        "answers": ["Luz del sol", "Calor", "Verano", "Amanecer"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 14, 
        "question": "¿Cómo se traduce 'flower'?", 
        "answers": ["Flor", "Árbol", "Hoja", "Raíz"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 15, 
        "question": "¿Cómo se traduce 'happiness'?", 
        "answers": ["Felicidad", "Diversión", "Alegría", "Paz"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 16, 
        "question": "¿Cómo se traduce 'car'?", 
        "answers": ["Coche", "Bicicleta", "Autobús", "Camión"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 17, 
        "question": "¿Cómo se traduce 'mountain'?", 
        "answers": ["Montaña", "Colina", "Valle", "Desierto"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 18, 
        "question": "¿Cómo se traduce 'knowledge'?", 
        "answers": ["Conocimiento", "Sabiduría", "Entendimiento", "Información"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 19, 
        "question": "¿Cómo se traduce 'bird'?", 
        "answers": ["Pájaro", "Águila", "Perro", "Mariposa"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 20, 
        "question": "¿Cómo se traduce 'forest'?", 
        "answers": ["Bosque", "Selva", "Pradera", "Jardín"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 21, 
        "question": "¿Cómo se traduce 'adventure'?", 
        "answers": ["Aventura", "Riesgo", "Viaje", "Descubrimiento"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 22, 
        "question": "¿Cómo se traduce 'train'?", 
        "answers": ["Tren", "Carro", "Avión", "Barco"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 23, 
        "question": "¿Cómo se traduce 'ocean'?", 
        "answers": ["Océano", "Lago", "Río", "Mar"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 24, 
        "question": "¿Cómo se traduce 'strength'?", 
        "answers": ["Fuerza", "Energía", "Poder", "Resistencia"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 25, 
        "question": "¿Cómo se traduce 'friend'?", 
        "answers": ["Amigo", "Vecino", "Pariente", "Conocido"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 26, 
        "question": "¿Cómo se traduce 'dream'?", 
        "answers": ["Sueño", "Deseo", "Visión", "Meta"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 27, 
        "question": "¿Cómo se traduce 'justice'?", 
        "answers": ["Justicia", "Honestidad", "Igualdad", "Ley"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 28, 
        "question": "¿Cómo se traduce 'city'?", 
        "answers": ["Ciudad", "Pueblo", "Villa", "Barrio"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 29, 
        "question": "¿Cómo se traduce 'garden'?", 
        "answers": ["Jardín", "Campo", "Bosque", "Patio"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 30, 
        "question": "¿Cómo se traduce 'wisdom'?", 
        "answers": ["Sabiduría", "Inteligencia", "Entendimiento", "Conocimiento"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 31, 
        "question": "¿Cómo se traduce 'I love you'?", 
        "answers": ["Te amo", "Te extraño", "Te admiro", "Te necesito"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 32, 
        "question": "¿Cómo se traduce 'She is reading a book'?", 
        "answers": ["Ella está leyendo un libro", "Ella escribió un libro", "Ella lee todos los días", "Ella tiene un libro"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 33, 
        "question": "¿Cómo se traduce 'They went to the beach'?", 
        "answers": ["Ellos fueron a la playa", "Ellos vieron la playa", "Ellos están en la playa", "Ellos visitaron un lago"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 34, 
        "question": "¿Cómo se traduce 'Where is my phone?'?", 
        "answers": ["¿Dónde está mi teléfono?", "¿Dónde dejé mi teléfono?", "¿Tienes mi teléfono?", "¿Quién tomó mi teléfono?"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 35, 
        "question": "¿Cómo se traduce 'I have never been to Paris'?", 
        "answers": ["Nunca he estado en París", "He estado en París una vez", "Visité París el año pasado", "Estoy pensando en ir a París"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 36, 
        "question": "¿Cómo se traduce 'The car is very fast'?", 
        "answers": ["El coche es muy rápido", "El coche es nuevo", "El coche es lento", "El coche es caro"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 37, 
        "question": "¿Cómo se traduce 'Could you help me, please?'?", 
        "answers": ["¿Podrías ayudarme, por favor?", "¿Dónde puedo ayudarte?", "¿Puedo ayudarte, por favor?", "¿Quién me puede ayudar?"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 38, 
        "question": "¿Cómo se traduce 'It’s raining a lot today'?", 
        "answers": ["Está lloviendo mucho hoy", "Llovió mucho ayer", "Va a llover mañana", "Hoy no ha llovido"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 39, 
        "question": "¿Cómo se traduce 'The stars are beautiful tonight'?", 
        "answers": ["Las estrellas están hermosas esta noche", "Las estrellas brillan durante el día", "El cielo está oscuro esta noche", "Las estrellas están lejos"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 40, 
        "question": "¿Cómo se traduce 'I need a glass of water'?", 
        "answers": ["Necesito un vaso de agua", "Quiero un poco de agua", "Trae agua, por favor", "¿Dónde está el agua?"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 41, 
        "question": "¿Cómo se traduce 'Can you tell me the time?'?", 
        "answers": ["¿Me puedes decir la hora?", "¿Cuál es la hora?", "¿Qué hora es?", "¿Tienes tiempo?"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 42, 
        "question": "¿Cómo se traduce 'The train arrives at noon'?", 
        "answers": ["El tren llega al mediodía", "El tren parte al mediodía", "El tren llegará en la noche", "El tren no llega a tiempo"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 43, 
        "question": "¿Cómo se traduce 'She always smiles'?", 
        "answers": ["Ella siempre sonríe", "Ella está sonriendo ahora", "Ella casi nunca sonríe", "Ella sonríe a veces"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 44, 
        "question": "¿Cómo se traduce 'This coffee is too hot to drink'?", 
        "answers": ["Este café está demasiado caliente para beber", "El café está frío", "Este café no tiene azúcar", "Prefiero otro café"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 45, 
        "question": "¿Cómo se traduce 'The book was written by her'?", 
        "answers": ["El libro fue escrito por ella", "Ella leyó el libro", "El libro es de ella", "Ella vendió el libro"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },{ 
        "id": 46, 
        "question": "¿Cuál es la forma correcta del verbo 'to be' en esta oración: 'She ___ happy'?", 
        "answers": ["is", "are", "am", "be"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 47, 
        "question": "Selecciona la forma correcta del pasado simple del verbo 'go': 'Yesterday, I ___ to the park.'", 
        "answers": ["went", "go", "gone", "going"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 48, 
        "question": "Elige el pronombre correcto: 'This is my book. That one is ___.'", 
        "answers": ["yours", "your", "you", "mine"], 
        "correctAnswers": [3], 
        "difficulty": "medium" 
    },
    { 
        "id": 49, 
        "question": "¿Cuál es la forma correcta en voz pasiva de esta oración: 'They build houses.'?", 
        "answers": ["Houses are built by them.", "Houses were built by them.", "Houses are building by them.", "Houses have built by them."], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 50, 
        "question": "Completa con la preposición adecuada: 'I am interested ___ learning new languages.'", 
        "answers": ["in", "on", "at", "of"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 51, 
        "question": "Selecciona el adverbio correcto: 'She sings ___. Everyone loves her voice.'", 
        "answers": ["beautifully", "beautiful", "beauty", "beauties"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 52, 
        "question": "Elige la conjugación correcta: 'If I ___ rich, I would travel the world.'", 
        "answers": ["were", "am", "was", "will be"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 53, 
        "question": "Completa la oración con el comparativo correcto: 'This book is ___ than the other one.'", 
        "answers": ["more interesting", "interestinger", "most interesting", "interesting more"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 54, 
        "question": "Selecciona la forma correcta para el presente perfecto: 'They ___ in this house for five years.'", 
        "answers": ["have lived", "lived", "are living", "will live"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 55, 
        "question": "Elige la forma correcta de condicional: 'If it rains, we ___ at home.'", 
        "answers": ["will stay", "stayed", "stay", "would stay"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 56, 
        "question": "¿Qué forma verbal es correcta en esta oración: 'By next year, she ___ her degree.'?", 
        "answers": ["will have finished", "has finished", "is finishing", "finished"], 
        "correctAnswers": [0], 
        "difficulty": "hard" 
    },
    { 
        "id": 57, 
        "question": "Completa con la forma correcta del verbo modal: 'You ___ study harder to pass the exam.'", 
        "answers": ["should", "mustn't", "might", "can"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 58, 
        "question": "Selecciona el artículo correcto: 'I saw ___ apple on the table.'", 
        "answers": ["an", "a", "the", "no article"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    },
    { 
        "id": 59, 
        "question": "Completa con la forma correcta del gerundio o infinitivo: 'She enjoys ___ in the morning.'", 
        "answers": ["running", "to run", "run", "runs"], 
        "correctAnswers": [0], 
        "difficulty": "medium" 
    },
    { 
        "id": 60, 
        "question": "Selecciona la forma correcta del superlativo: 'This is the ___ movie I have ever seen.'", 
        "answers": ["best", "better", "good", "most better"], 
        "correctAnswers": [0], 
        "difficulty": "easy" 
    }
  ];

  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard" | null>(null);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    if (timer && timeLeft > 0) {
      const countdown = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
      return () => clearInterval(countdown);
    }
    if (timeLeft === 0 && timer) {
      endGame();
    }
  }, [timeLeft, timer]);

  const startGame = (selectedDifficulty: "easy" | "medium" | "hard") => {
    setDifficulty(selectedDifficulty);

    // Filtra las preguntas por dificultad y selecciona aleatoriamente 20 (o menos si no hay tantas disponibles)
    const filteredQuestions = predefinedQuestions.filter((q) => q.difficulty === selectedDifficulty);
    const shuffledQuestions = filteredQuestions.sort(() => Math.random() - 0.5).slice(0, 20);

    setQuestions(shuffledQuestions);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setTimer(null);
    setTimeLeft(0);
    setIsGameOver(false);
  };

  const startTimer = (duration: number) => {
    setTimer(duration);
    setTimeLeft(duration);
  };

  const revealAnswer = () => {
    setIsAnswerRevealed(true);
    if (selectedAnswer !== null && questions[currentQuestionIndex].correctAnswers.includes(selectedAnswer)) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      endGame();
    }
  };

  const endGame = () => {
    setIsGameOver(true);
    setTimer(null);
  };

  const restartGame = () => {
    setQuestions([]);
    setDifficulty(null);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setScore(0);
    setTimer(null);
    setTimeLeft(0);
    setIsGameOver(false);
  };

  if (!difficulty) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Translation Challenge</h1>
        <p>Selecciona un nivel de dificultad para comenzar:</p>
        <div className="flex space-x-4 mt-4">
          <button className="bg-green-500 text-white p-2 rounded" onClick={() => startGame("easy")}>
            Fácil
          </button>
          <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => startGame("medium")}>
            Medio
          </button>
          <button className="bg-red-500 text-white p-2 rounded" onClick={() => startGame("hard")}>
            Difícil
          </button>
        </div>
      </div>
    );
  }

  if (isGameOver) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Juego terminado</h1>
        <p>Puntuación final: {score}</p>
        <button className="bg-blue-500 text-white p-2 rounded mt-4" onClick={restartGame}>
          Reiniciar juego
        </button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Translation Challenge</h1>
      <p className="mb-2">Puntuación: <span className="font-bold">{score}</span></p>
      {timer && <p className="mb-2">Tiempo restante: <span className="font-bold">{timeLeft}s</span></p>}
      <div className="border p-4 rounded mb-4">
        <h2 className="text-xl font-semibold">{currentQuestion.question}</h2>
      </div>
      <div className="space-y-2">
        {currentQuestion.answers.map((answer, index) => (
          <button
            key={index}
            className={`block w-full text-left p-2 rounded ${selectedAnswer === index ? "bg-blue-200" : "bg-gray-200"}`}
            onClick={() => setSelectedAnswer(index)}
            disabled={isAnswerRevealed}
          >
            {answer}
          </button>
        ))}
      </div>
      <div className="mt-4 flex space-x-4">
        {!isAnswerRevealed ? (
          <button className="bg-green-500 text-white p-2 rounded" onClick={revealAnswer}>
            Revelar Respuesta
          </button>
        ) : (
          <button className="bg-blue-500 text-white p-2 rounded" onClick={nextQuestion}>
            Siguiente Pregunta
          </button>
        )}
        {timer === null && (
          <button className="bg-yellow-500 text-white p-2 rounded" onClick={() => startTimer(30)}>
            Iniciar Temporizador (30s)
          </button>
        )}
      </div>
      {isAnswerRevealed && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p className="font-bold">Respuesta(s) correcta(s):</p>
          {currentQuestion.correctAnswers.map((index) => (
            <p key={index} className="text-green-600">
              {currentQuestion.answers[index]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Game;
