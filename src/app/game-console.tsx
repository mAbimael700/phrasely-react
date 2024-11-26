import Glass from "@/assets/happy_people.png"
import Foodies from "@/assets/foodies.jpg"
import Cube from "@/assets/cube.jpg"
import { Footer } from "@/components/home/footer"

interface GameCardProps {
    title: string;
    tags: string[]; 
    image: string;
}

const GameCard: React.FC<GameCardProps> = ({ title, tags, image }) => {
    return (
        <article
            className={`hover:animate-background rounded-xl bg-gradient-to-r from-orange-300 via-orange-400 to-orange-500 p-1 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]`}
        >
            <div
                className="relative rounded-[10px] bg-cover bg-center p-4 sm:p-6"
                style={{ backgroundImage: `url(${image})`, height: '250px' }}
            >
                <div className="absolute inset-0 bg-orange-100 bg-opacity-50"></div>
                
                <div className="relative z-10 flex flex-col justify-center h-full">
                    <a href="#">
                        <h3 className="mt-0.5 text-2xl font-medium text-orange-900">{title}</h3>
                    </a>

                    <div className="mt-4 flex flex-wrap gap-1">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className={`whitespace-nowrap rounded-full bg-orange-100 px-2.5 py-0.5 text-xs text-orange-600`}
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
    const navs = [
        { href: '/', name: 'Home' },
        { href: '/docs', name: 'Docs' },
        { href: '/console', name: 'Console' }
    ]
    return (
        <div className="bg-[#FFA96D] w-full h-screen px-10 pt-3">
            <a href="/" className="text-orange-800 text-2xl font-semibold">Phrasely</a>
            <div className="py-10 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
                <GameCard 
                    title="Question or not?"
                    tags={['JavaScript', 'Snippet']}
                    image={Glass}
                />
                <GameCard 
                    title="Sece-Sentences"
                    tags={['Logical', 'Snippet']}
                    image={Foodies}
                />
                <GameCard 
                    title="Sece-Sentences"
                    tags={['Logical', 'Snippet']}
                    image={Cube}
                />

            </div>
            <Footer data={navs}/>
        </div>
    )
};