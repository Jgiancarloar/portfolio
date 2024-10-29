import React, { useState, useEffect, useRef } from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { ChevronLeft } from "lucide-react";

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const projectsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }, // Cambia el threshold según cuándo quieras que aparezca
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Para que el scroll sea suave
    });
  };

  const scrollToProjects = () => {
    projectsRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="font-roboto text-xs">
      {isVisible && (
        <div className="cursor-pointer fixed z-50 flex items-center bottom-10 right-2 text-gray-500 rotate-90"
        onClick={scrollToTop}>
          <ChevronLeft strokeWidth={1} />
          <p className="leading-none tracking-[0.5em]">TOP</p>
        </div>
      )}
      <section>
        <Hero scrollToProjects={scrollToProjects}  />
      </section>
      <section ref={projectsRef} className="bg-[#F9F9F9]">
        <Projects />
      </section>
      <section className="bg-black">
        <Contact />
      </section>
    </div>
  );
};

export default App;
