import React, { useEffect } from 'react';
import Glass from "@/assets/happy_people.png"
import Foodies from "@/assets/foodies.jpg"
import Cube from "@/assets/cube.jpg"
import Background from "@/assets/room.jpg";
import { Footer } from "@/components/home/footer"
import { IoOpenOutline } from "react-icons/io5";
import { useAppSelector } from "@/redux/reduxHooks";
import { Link, useNavigate } from 'react-router-dom';

const games = [
    { title: 'Translation Challenge', tags: ['Funny', 'Translator'] , image: Glass, url: '/' },
    { title: 'WordWise', tags: ['Trivia', 'Skills', 'Fun'] , image: Foodies, url: '/sentence/add' },
    { title: 'Sece-Sentences', tags: ['Practice', 'Knowledge'] , image: Cube, url: '/question/add' },
];

interface GameCardProps {
    title: string;
    tags: string[]; 
    image: string;
    url: string;
}

const ConsoleHeader = () => {
    const teacher = useAppSelector((state) => state.user.teacher);
    return (
        <>
            <header>
                <div className="mx-auto max-w-screen-xl px-2 py-8 sm:px-6 sm:py-12 lg:px-4">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-orange-200 sm:text-3xl">Welcome, {teacher?.displayName}</h1>

                            <p className="mt-1.5 text-base max-w-96 text-slate-100">
                            Phrasely Games, it's an application to create educational games in English, add game content on topics you want to teach your class.
                            </p>
                        </div>

                        <div className="flex items-center gap-4">
                            <Link to="/">
                                <button
                                    className="flex items-center justify-center rounded-full bg-[#433252] border border-[#594668] px-4 py-2 text-sm font-semibold text-gray-100 shadow-lg hover:bg-[#594668]"
                                    type="button"
                                >
                                    <span className="text-sm font-medium mr-1">Website</span>
                                    <IoOpenOutline />
                                </button>
                            </Link>
                            <p><a href="/console/rank" className='text-orange-100 hover:text-orange-200 hover:font-bold font-semibold text-sm'>Go to score</a></p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

const GameCard: React.FC<GameCardProps> = ({ title, tags, image, url }) => {
    return (
        <article
            className={`hover:animate-background rounded-xl bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]`}
        >
            <div
                className="relative rounded-[10px] bg-cover bg-center p-4 sm:p-6"
                style={{ backgroundImage: `url(${image})`, height: '250px' }}
            >
                <div className="absolute inset-0 bg-orange-100 bg-opacity-60"></div>
                
                <div className="relative z-10 flex flex-col justify-center h-full">
                    <a href={url}>
                        <h3 className="mt-0.5 text-2xl font-medium text-orange-900">{title}</h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className={`whitespace-nowrap rounded-full border border-orange-200 bg-orange-100 px-2.5 py-0.5 text-xs text-orange-600 pointer-events-none select-none`}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};

export const GameConsole = () => {
    const teacher = useAppSelector((state) => state.user.teacher);
    const navigate = useNavigate();
    const navs = [
        { href: '/', name: 'Home' },
        { href: '/docs', name: 'Docs' },
        { href: '/console', name: 'Console' }
    ];

    useEffect(() => {
        if (!teacher || teacher.displayName === '') {
            navigate('/auth/signup');
        }
    }, [teacher, navigate]); 

    return (
        <div 
            className="w-full min-h-screen px-10 bg-[#F35F31] bg-cover bg-center bg-no-repeat lg:bg-[url('./path-to-image.jpg')]"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <ConsoleHeader />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                {games.map((item, idx)=>(
                    <GameCard 
                        key={idx}
                        title={item.title}
                        tags={item.tags}
                        image={item.image}
                        url={item.url}
                    />
                ))}
            </div>
            <Footer data={navs} />
        </div>
    );
};