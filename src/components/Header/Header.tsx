import Link from "next/link";
import Image from "next/image";

const menuItems = [
    { href: '/pokemons', label: 'Pokémons', ariaLabel: 'Pokémon section' },
    { href: '/about', label: 'About', ariaLabel: 'About page' },
];

export default function Header() {
    return (
        <header className="fixed h-20 top-0 left-0 p-4 w-full z-50 shadow-lg bg-blue-600 text-white">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <Link href="/">
                        <Image
                            src="/assets/images/logo.png"
                            alt="Pokémon logo, Pokeball icon"
                            width={100}
                            height={30}
                            priority
                        />
                    </Link>
                </div>

                <nav aria-label="Main Navigation">
                    <ul className="flex gap-6">
                        {menuItems.map((item) => (
                            <li key={item.href} className="text-xl">
                                <Link href={item.href} aria-label={item.ariaLabel}>
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
