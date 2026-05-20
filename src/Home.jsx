import { useState, useEffect } from "react";
import { Element } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Preloader from "./components/Preloader";
import Skills from "./components/Skills";
import Internships from "./components/Internships";


function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fallback timer
        const timer = setTimeout(() => {
            setLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <AnimatePresence mode="wait">
                {loading ? (
                    <motion.div
                        key="preloader"
                        exit={{ opacity: 0, filter: "blur(10px)" }}
                        transition={{ duration: 0.6 }}
                    >
                        <Preloader onFinish={() => setLoading(false)} />
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Navbar />
                        <Element name="home">
                            <HeroSection />
                        </Element>
                        <Element name="skills">
                            <Skills />
                        </Element>
                        <Element name="experience">
                            <Internships />
                        </Element>
                        <Element name="projects">
                            <Projects />
                        </Element>

                        <Element name="education">
                            <Education />
                        </Element>
                        <Element name="contact">
                            <Contact />
                        </Element>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

export default Home;
