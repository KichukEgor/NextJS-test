"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function PokemonUniverse() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative">
            <section className="h-screen flex flex-col justify-center items-center bg-blue-500 text-white">
                <div className="relative w-full h-full overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            transform: `rotate(${scrollY * 0.2}deg) scale(${1 + scrollY * 0.0005})`,
                            transition: "transform 0.1s linear",
                        }}
                    >
                        <Image
                            src="/assets/images/pokeball.png"
                            alt="Pokeball"
                            objectFit="contain"
                            layout="fill"
                            className="opacity-20"
                            aria-hidden="true" // hidden for screen readers
                            style={{
                                transform: "rotate(0deg) scale(0.6)", // Start size
                            }}
                            priority
                        />
                    </div>
                    <div className="relative mt-8 z-10 text-center fade-in">
                        <h1 className="text-5xl font-bold">Welcome to the Pokémon Universe</h1>
                        <p className="mt-4 text-xl">
                            Dive into a world full of adventures and incredible creatures.
                        </p>
                    </div>
                </div>
            </section>

            <section className="h-screen flex flex-col justify-center items-center bg-green-500 text-white">
                <div className="relative w-full h-full overflow-hidden">
                    <div
                        className="absolute inset-0 z-0"
                        style={{
                            transform: `translateX(${scrollY * 0.2}px)`,
                            transition: "transform 0.1s linear",
                        }}
                    >
                        <Image
                            src="/assets/images/pokemon-group.png"
                            alt="Group of Pokémon"
                            layout="fill"
                            className="opacity-20 object-cover"
                            aria-hidden="true" // hidden for screen readers
                        />
                    </div>
                    <div className="relative mt-8 z-10 text-center fade-in">
                        <h1 className="text-5xl font-bold">The Variety of Pokémon</h1>
                        <p className="mt-4 text-xl">
                            Over 800 unique creatures are waiting for you to discover!
                        </p>
                    </div>
                </div>
            </section>

            <section className="h-screen flex flex-col justify-center items-center bg-yellow-500 text-white">
                <div className="relative w-full h-full overflow-hidden">
                    <div
                        className="absolute top-1/3 left-1/4 z-0"
                        style={{
                            transform: `translateY(${-scrollY * 0.1}px)`,
                            transition: "transform 0.1s linear",
                        }}
                    >
                        <Image
                            src="/assets/images/pikachu.png"
                            alt="Pikachu"
                            width={400}
                            height={400}
                            aria-hidden="true" // hidden for screen readers
                        />
                    </div>
                    <div className="relative mt-8 z-10 text-center fade-in">
                        <h1 className="text-5xl font-bold">Find Your Pokémon!</h1>
                        <p className="mt-8 text-xl">Your journey begins here.</p>
                        <Link
                            href="/pokemons"
                            aria-label="Go to pokemon list"
                            className="mt-8 inline-block px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800 transition"
                        >
                            Find Your Pokémon
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
