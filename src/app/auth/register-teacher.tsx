import { useState } from "react";
import { TextInput } from "@/components/auth/text-input"
import { IoCloseSharp } from "react-icons/io5"; //IoArrowForwardOutline
import { useUser } from "@/hooks/useUser";
import { useNavigate } from 'react-router-dom';

type TeacherInfo = {
    displayName: string;
    email: string;
};

export const SignupTeacher = () => {
    const navigate = useNavigate();
    const { registerNewTeacher } = useUser();
    const [inputValue, setInputValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [isInvalid, setIsInvalid] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(1);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailValue(e.target.value);
    };
    
    const handleTeacher = ({ displayName, email }: TeacherInfo) => {
        try {
            setIsLoading(true);
            registerNewTeacher({ id: '1', displayName, email });
            navigate('/console');
        } catch (error) {
            console.error(error)
        }
    };
    
    const handleContinue = () => {
        if (step === 1) {
        // Verifica que el username no esté vacío
        if (inputValue.trim() !== '') {
            setStep(2); // Cambia al paso del email
        } else {
            setIsInvalid(true);
        }
        } else if (step === 2) {
        // Verifica que el email no esté vacío
        if (emailValue.trim() !== '') {
            handleTeacher({ displayName: inputValue, email: emailValue });
        } else {
            setIsInvalid(true);
        }
        }
    };

    return(
        <main className="w-full h-screen bg-[#F35F31] py-10 px-10">
            <div className="flex flex-row items-center">
                <a href="/"><IoCloseSharp size={25} className="text-orange-800 hover:text-orange-700"/></a>
                <p className=" text-orange-800 font-semibold my-4 mx-5">Welcome, Educator!</p>
            </div>
            <h1 className="font-logo mt-20 mb-6 text-gray-50 font-medium text-5xl lg:text-6xl">
                Let's start with your{" "}
                <span className="hidden lg:inline"> <br /> </span>
                {step === 1 ? 'username' : 'email'}.
            </h1>
            {step === 1 ? (
                <>
                    <TextInput
                        placeholderSM="Enter username"
                        placeholder="Please enter your username"
                        isInvalid={isInvalid}
                        value={inputValue}
                        type="text"
                        onChange={handleChange}
                        fontSize="45"
                        marginBottom="4"
                    />
                    {isInvalid && <p className="text-red-600 font-semibold text-sm">Input is invalid!</p>}
                </>
            ) : (
                <>
                <TextInput
                    placeholderSM="Enter email"
                    placeholder="Please enter your email"
                    isInvalid={isInvalid}
                    value={emailValue}
                    type="email"
                    onChange={handleEmailChange}
                    fontSize="45"
                    marginBottom="4"
                />
                {isInvalid && <p className="text-red-600 font-semibold text-sm">Input is invalid!</p>}
                </>
            )}

            <div className="flex justify-between">
                <button
                    onClick={handleContinue}
                    className="flex items-center justify-center rounded-xl bg-orange-800 border border-orange-700 px-4 py-2 text-sm font-semibold text-gray-100 shadow-lg hover:bg-orange-700 ml-auto"
                    type="button"
                >
                <span className="text-xl font-medium mr-1">{isLoading ? 'Saving...' : step === 1 ? 'Next' : 'Registrar'}</span>
                </button>
            </div>
        </main>
    );
};