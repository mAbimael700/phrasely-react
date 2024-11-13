import { LazyLoadImage } from "react-lazy-load-image-component";
import HeaderImg from "@/assets/medium-shot-happy-young-people-partying (1).webp";
import { NavigationMenuHome } from "@/components/home/navbar";
import { DialogQuestion } from '@/components/quizz/dialog-question';

const Image = LazyLoadImage;

export const Index = () => {
    return (
        <>
            <header>
                <nav className="bg-primary">
                    <NavigationMenuHome />
                </nav>

                <Image
                    src={HeaderImg}
                    alt="Plano medio jóvenes felices de fiesta Photo By Freepik "
                    effect="blur"
                    className="h-[20%] bg-cover object-contain w-screen overflow-hidden"
                />
            </header>

            <main>
                <h1 className="text-5xl font-bold text-primary">
                    Phrasely
                </h1>
                <p>Play and create games for learning english with fun!</p>
                <DialogQuestion></DialogQuestion>

            </main>

        </>
    )
}
