import ItCompany from '../assets/IT-Company.png'
import Pokepalette from '../assets/pokepalette.png'

export const projects = [
    {
        name: "IT Company Website",
        image: ItCompany,
        description:
            "Corporate website mockup for a tech company built with Vite, React, and TailwindCSS. Features multi-page navigation (React Router), responsive design, smooth animations, and deployment on Vercel. Placeholder text used as content.",
        technologies: ["Vite", "React", "TailwindCSS", "React Router", "Vercel"],
        url: "https://it-company-website-xi.vercel.app/"
    },
    {
        name: "Pokepalette",
        image: Pokepalette,
        description:
            "PokePalette is a web app that generates color palettes inspired by Pokémon. It extracts 6 dominant colors from a selected Pokémon’s sprite and displays them as a palette. Users can copy color codes in HEX, RGB, or HSL, with visual feedback and smart Pokémon name suggestions in a responsive interface.",
        technologies: [
            "React 19",
            "Vite",
            "TailwindCSS",
            "@ctrl/tinycolor",
            "PokéAPI",
            "React Icons",
            "React Router",
          ],
        url: "https://pokepalettecolors.vercel.app/"
    },
];
