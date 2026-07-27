import {useEffect, useState} from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProblemSolving from "./components/ProblemSolving";

function App() {

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute(
            "data-theme",
            darkMode ? "dark" : "light"
        );
    }, [darkMode]);

    return (
        <div className="app">

            <Navbar
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />

            <main>

                <Hero/>

                <About/>

                <Experience/>

                <Skills/>

                <Projects/>

                <ProblemSolving/>

                <Contact/>

            </main>

            <Footer/>

        </div>
    );
}

export default App;