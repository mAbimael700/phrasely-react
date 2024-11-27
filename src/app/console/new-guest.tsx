import { useState, useEffect } from 'react';
import { IoCloseSharp } from "react-icons/io5";
import { useAppSelector } from "@/redux/reduxHooks";
import { useNavigate } from 'react-router-dom';
import { TextInput } from "@/components/auth/text-input"
import { useUser } from '@/hooks/useUser';

type GuestInfo = {
    displayName: string;
    score: number;
};

export const GuestSession = () => {
    const navigate = useNavigate();
    const { registerNewGuest } = useUser();
    const guests = useAppSelector((state) => state.user?.guests || []);

    const [Guest, setGuest] = useState<GuestInfo[]>([]); 
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isInvalid, setIsInvalid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
        setIsInvalid(false);
        setErrorMessage('');
    };

    const handleGuest = ({ displayName, score }: GuestInfo) => {
        /*
        if (guests.length >= 5) {
            setIsInvalid(true);
            setErrorMessage('No puedes registrar más de 5 invitados.');
            return;
        }
        */

        try {
            setIsLoading(true);
            registerNewGuest({ id: `${guests.length + 1}`, displayName, score });

            setGuest((prevGuests) => [...prevGuests, { displayName, score }]);


            navigate('/console');
        } catch (error) {
            console.error(error);
            setErrorMessage('Error al registrar el invitado.');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (!guests) {
            navigate('/auth/signup');
        }
    }, [guests, navigate]);

    return (
        <div className="w-full min-h-screen bg-[#F35F31] p-10">
            <div className="flex flex-row items-center">
                <a href="/"><IoCloseSharp size={25} className="text-orange-800 hover:text-orange-700" /></a>
                <p className="text-orange-800 font-semibold my-4 mx-5">Welcome, Educator!</p>
            </div>

            <h1 className="font-logo mt-20 mb-6 text-gray-50 font-medium text-5xl lg:text-6xl">
                Let's create your{" "}
                <span className="hidden lg:inline"><br /></span>
                game session.
            </h1>

            <TextInput
                placeholderSM="Enter a guest name"
                placeholder="Please enter a guest name"
                isInvalid={isInvalid}
                value={inputValue}
                type="text"
                onChange={handleChange}
                fontSize="45"
                marginBottom="4"
            />
            {Guest.map((item, idx) => (
                <div key={idx}>
                    <p>{item.displayName}</p>
                </div>
            ))}

            {isInvalid && <p className="text-red-600 font-semibold text-sm">{errorMessage}</p>}

            <div className="flex justify-between">
                <button
                    onClick={() => handleGuest({ displayName: inputValue, score: 0 })}
                    className="flex items-center justify-center rounded-xl bg-orange-800 border border-orange-700 px-4 py-2 text-sm font-semibold text-gray-100 shadow-lg hover:bg-orange-700 ml-auto"
                    type="button"
                >
                    <span className="text-xl font-medium mr-1">{isLoading ? 'Registrando...' : 'Guardar'}</span>
                </button>
            </div>
        </div>
    );
};