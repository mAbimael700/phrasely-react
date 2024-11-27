import Background from "@/assets/room.jpg";
import { FaStar } from "react-icons/fa6";
import { IoOpenOutline, IoPeople } from "react-icons/io5";
import { useAppSelector } from "@/redux/reduxHooks";
import { Link } from 'react-router-dom';

const ConsoleHeader = () => {
    return (
        <>
            <header>
                <div className="mx-auto max-w-screen-xl px-2 py-8 sm:px-6 sm:py-12 lg:px-4">
                    <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-orange-200 sm:text-3xl">Ranking</h1>

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
                            <p><a href="/console" className='text-orange-100 hover:text-orange-200 hover:font-bold font-semibold text-sm'>Go to console</a></p>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export const ScoreRanking = () => {
    const guests = useAppSelector((state) => state.user?.guests || []);
    return (
        <div 
            className="w-full min-h-screen px-10 bg-[#F35F31] bg-cover bg-center bg-no-repeat lg:bg-[url('./path-to-image.jpg')]"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <ConsoleHeader/>

            {guests.length === 0 ? (
                <div className="flex items-center">
                    <IoPeople size={30} color="#fed7aa"/>
                    <p className="mx-3 font-montserrat font-semibold text-3xl text-orange-200">
                        No hay registros
                    </p>
                </div>
            ) : (
                <>
                    {guests
                    .slice()
                    .sort((a, b) => b.score - a.score)
                    .map((item, idx) => (
                        <div key={idx} className="flex flex-row justify-between items-center py-3 pointer-events-none select-none">
                            <div className="flex flex-row items-center">
                                <p className="mx-3 font-montserrat font-semibold text-3xl text-orange-100">{idx + 1}. </p>
                                <h3 className="mx-3 font-montserrat font-semibold text-3xl text-orange-200">{item.displayName}</h3>
                            </div>

                            <div className="flex flex-row items-center space-x-1 px-4 rounded-lg bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg">
                                <FaStar size={22} color="#fed7aa" />
                                <p className="font-montserrat font-semibold text-3xl text-orange-200">{item.score}</p>
                            </div>

                        </div>
                    ))}
                </>
            )}
        </div>
    )
};