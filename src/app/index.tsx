import { LazyLoadImage } from "react-lazy-load-image-component";
import HeaderImg from "@/assets/medium-shot-happy-young-people-partying (1).webp";
import { NavigationMenuHome } from "@/components/home/navbar";

const Image = LazyLoadImage;

export const Index = () => {
  return (
    <>
      <nav className="bg-primary">
        <NavigationMenuHome />
      </nav>

      <header>
        <Image
          src={HeaderImg}
          alt="Close-up of happy young people partying - Photo by Freepik"
          effect="blur"
          className="h-[20%] w-full rounded-md overflow-hidden"
        />
      </header>

      <main className="p-6">
        <h1 className="text-5xl font-bold text-primary mb-4">Phrasely</h1>
        <p className="text-lg mb-8">
          Play and create games for learning English with fun!
        </p>

        <section className="p-6 rounded-lg w-6/12 mx-auto">
          <h2 className="text-3xl font-semibold text-orange-500 mb-4">
            Application Instructions
          </h2>

          <h3 className="text-xl font-semibold mt-4">1. Installation</h3>
          <p className="text-base mb-4">
            Run the installer file and follow the on-screen instructions to
            install the application on your PC. After installation, open the
            application from the desktop shortcut.
          </p>

          <h3 className="text-xl font-semibold mt-4">2. Creating a New Quiz</h3>
          <p className="text-base mb-4">
            Select "Create Quiz" from the main menu, enter the quiz name, and
            choose the topic (e.g., Grammar, Vocabulary, Comprehension). Click
            "Add Question" to start adding questions to the quiz.
          </p>

          <h3 className="text-xl font-semibold mt-4">3. Adding Questions</h3>
          <p className="text-base mb-4">
            Type the question in the designated field and select the question
            type:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>
              <strong>Multiple Choice:</strong> Enter answer options and mark
              the correct answer.
            </li>
            <li>
              <strong>Open-ended:</strong> Allows the student to type their
              response in a text field.
            </li>
          </ul>
          <p className="text-base mb-4">
            Repeat this process to add all desired questions, then select "Save
            Quiz."
          </p>

          <h3 className="text-xl font-semibold mt-4">
            4. Starting a Quiz Session
          </h3>
          <p className="text-base mb-4">
            From the main menu, select "Start Quiz" and choose the quiz you want
            to use. The application will display each question on screen, one by
            one. Have the student respond, then click "Next" to proceed to the
            following question.
          </p>

          <h3 className="text-xl font-semibold mt-4">5. Reviewing Results</h3>
          <p className="text-base mb-4">
            Upon finishing the quiz, click "Finish" to view a summary of
            responses. The app will display correct and incorrect answers,
            allowing you to review performance with the student and discuss
            areas for improvement.
          </p>

          <h3 className="text-xl font-semibold mt-4">6. Saving Results</h3>
          <p className="text-base mb-4">
            To save the results, select "Save" and choose a location on your PC
            to store the file. This enables you to keep a record of student
            performance for future reference.
          </p>
        </section>
      </main>
    </>
  );
};
