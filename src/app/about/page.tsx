import Image from "next/image";

const ABOUT_DATA= {
  technologies: ["Next.js 14", "React", "Tailwind CSS", "TypeScript"],
  semanticTags: ["header", "main", "section", "article"],
  animations: [
    "Smooth text appearance on scroll.",
    "Parallax effects for background elements.",
    "Custom page loading indicator.",
  ],
  ariaTags: ["aria-label", "aria-hidden"],
};

export default async function About() {
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

        <div className="w-full lg:w-1/2 text-center lg:text-left fade-in-right">
          <h3 className="text-4xl font-bold mb-6">
                        About the Project
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            This project is a test assignment to demonstrate my expertise in modern web development techniques.
            It includes semantic HTML, accessibility practices, animations, and performance optimizations.
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Free API:</span>{" "}
              <a
                href={"https://pokeapi.co/"}
                aria-label="Go to the PokeAPI website"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                pokeapi.co
              </a>
            </li>
            <li>
              <span className="font-semibold">Semantic HTML: </span>
              {ABOUT_DATA.semanticTags.map((tag, index) => (
                <span key={tag}>
                  <code className="bg-gray-800 px-1 py-0.5 rounded">
                    {tag}
                  </code>
                  {index !== ABOUT_DATA.semanticTags.length - 1 && ", "}
                </span>
              ))}
            </li>
            <li>
              <span className="font-semibold">Technologies:</span> Developed with{" "}
              <strong>{ABOUT_DATA.technologies.join(", ")}</strong>.
            </li>
            <li>
              <span className="font-semibold">Animations:</span>
              <ul className="list-disc list-inside mt-2">
                {ABOUT_DATA.animations.map((animation, index) => (
                  <li key={index}>{animation}</li>
                ))}
              </ul>
            </li>
            <li>
              <span className="font-semibold">Accessibility:</span> Implemented ARIA tags such as{" "}
              {ABOUT_DATA.ariaTags.map((tag, index) => (
                <code key={index} className="bg-gray-800 px-1 py-0.5 rounded">
                  {tag}
                </code>
              ))}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
