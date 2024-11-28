
interface FooterProps {
    data: { href: string; name: string }[];
} 

export const Footer: React.FC<FooterProps> = ({ data }) => {
    return (
        <footer className="px-10">
            <div className="mt-10 py-10 border-t border-orange-300 items-center justify-between sm:flex">
                    <p className="text-orange-950">© 2024 Phrasely Game. All rights reserved.</p>
                    <ul className="flex flex-wrap items-center gap-4 mt-6 sm:text-sm sm:mt-0">
                        {
                            data.map((item, idx) => (
                                <li key={idx} className="text-orange-950 hover:text-orange-800 hover:font-semibold duration-150">
                                    <a href={item.href}>
                                        {item.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
        </footer>
    )
}