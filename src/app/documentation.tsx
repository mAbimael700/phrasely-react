import { useState } from "react"
import { FiMenu, FiX, FiSearch } from "react-icons/fi"

export const Documentation = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return (
        <>
            <div className="flex flex-col min-h-screen">
                {/* Header */}
                <header className="sticky top-0 z-50 bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="container flex items-center justify-between h-16 px-4 mx-auto">
                    <a href="/" className="flex items-center space-x-2">
                    <span className="text-2xl font-bold">Docs</span>
                    </a>
                    <div className="flex items-center space-x-4">
                    <div className="relative hidden sm:block">
                        <input
                        className="w-64 pl-8 pr-2 py-2 text-sm bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                        placeholder="Search documentation..."
                        type="search"
                        />
                        <FiSearch className="absolute w-4 h-4 top-3 left-2.5 text-gray-500 dark:text-gray-400" />
                    </div>
                    <button
                        className="p-2 text-gray-500 rounded-md sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        {sidebarOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
                    </button>
                    </div>
                </div>
                </header>
        
                <div className="flex-1">
                <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
                    {/* Sidebar */}
                    <aside
                    className={`fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto border-r border-gray-200 md:sticky md:block dark:border-gray-700 ${
                        sidebarOpen ? "block" : "hidden"
                    }`}
                    >
                    <div className="py-6 pr-6 lg:py-8">
                        <nav className="grid items-start gap-2">
                        <a
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            Getting Started
                        </a>
                        <a
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            Installation
                        </a>
                        <a
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            Configuration
                        </a>
                        <a
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                            href="#"
                        >
                            API Reference
                        </a>
                        </nav>
                    </div>
                    </aside>
        
                    {/* Main content */}
                    <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
                    <div className="mx-auto w-full min-w-0">
                        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Documentation</h1>
                        <div className="mt-6 space-y-6">
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            Welcome to our documentation. Here you'll find comprehensive guides and documentation to help you start
                            working with our product as quickly as possible, as well as support if you get stuck.
                        </p>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            Getting Started
                        </h2>
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                            To get started with our product, follow these simple steps:
                        </p>
                        <ol className="my-6 ml-6 list-decimal [&>li]:mt-2">
                            <li>Sign up for an account</li>
                            <li>Install the necessary dependencies</li>
                            <li>Configure your environment</li>
                            <li>Start building your project</li>
                        </ol>
                        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                            Key Features
                        </h2>
                        <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
                            <li>Easy to use API</li>
                            <li>Comprehensive documentation</li>
                            <li>Regular updates and improvements</li>
                            <li>Responsive support team</li>
                        </ul>
                        </div>
                    </div>
                    </main>
                </div>
                </div>
        
                {/* Footer */}
                <footer className="border-t border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
                    <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-left">
                        Built by the community. Open source. For everyone.
                    </p>
                    </div>
                </div>
                </footer>
            </div>
        </>
    );
};

/*
<main>
                <h1 className="text-5xl font-bold text-primary">
                    Phrasely
                </h1>
                <p>Play and create games for learning english with fun!</p>
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
*/