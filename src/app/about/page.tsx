"use client";

import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-12 bg-black overflow-x-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12 ">
                <div className="w-full lg:w-1/2 flex justify-center items-center fade-in-left">
                    <Image
                        src="/assets/images/boy.png"
                        alt="About Pokémon"
                        width={280}
                        height={500}
                    />
                </div>

                <div className="w-full lg:w-1/2 text-center lg:text-left fade-in-right lg:pr-8">
                    <h2 className="text-3xl font-bold mb-4">About Project</h2>
                    <p className="text-lg text-gray-300 mb-4">
                        This project is a <strong>test assignment</strong> aimed at evaluating my skills in web development best
                        practices, including semantic HTML, accessibility, ARIA (Accessible Rich Internet Applications), animation (without libs) and performance optimization.
                    </p>

                    <ul>
                        <li>
                            used pokeapi
                        </li>
                        <li>
                            used HTML5 (header, main, section, )
                            used ARIA-tags (aria-label, aria-hidden)
                        </li>
                        <li>
                            developed using Next.js, React, Tailwind CSS, and TypeScript
                        </li>

                        <li>
                            used packages:
                            "react": "^18",
                            "react-dom": "^18",
                            "next": "14.2.18"
                            "tailwindcss": "^3.4.1",
                            "typescript": "^5",
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
