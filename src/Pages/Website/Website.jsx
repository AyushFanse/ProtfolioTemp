import React, { useEffect } from "react";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { ScrollTop } from "../../Components/Common/Functions";

const Website = () => {
    const [loader, setLoader] = React.useState(false);
    const isLoaded = sessionStorage.getItem("load");

    useEffect(() => {
        if (isLoaded) setLoader(true);

        if (!isLoaded) {
            setTimeout(() => {
                setLoader(true);
                sessionStorage.setItem("load", "Loaded");
            }, 3500);
        }
    }, [isLoaded, loader]);

    return (
        <>
            {loader ? (
                <div className="main_layout">
                    <nav>
                        <Navbar />
                    </nav>
                    <main>
                        <Home />
                        <Skills />
                        <About />
                        <Projects />
                        <Contact />
                    </main>
                    <footer>
                        <ScrollTop />
                        <Footer />
                    </footer>
                </div>
            ) : (
                <section id="loader">
                    <svg
                        className="pl"
                        viewBox="0 0 128 128"
                        width="128px"
                        height="128px"
                    >
                        <defs>
                            <linearGradient
                                id="pl-grad"
                                x1="0"
                                y1="0"
                                x2="0"
                                y2="1"
                            >
                                <stop offset="30%" stopColor="var(--color)" />
                                <stop
                                    offset="100%"
                                    stopColor="hsl(48,100%,50%)"
                                />
                            </linearGradient>
                        </defs>
                        <circle
                            className="pl__ring"
                            r="56"
                            cx="64"
                            cy="64"
                            fill="none"
                            stroke="hsla(358,10%,10%,0.1)"
                            strokeWidth="16"
                            strokeLinecap="round"
                        />
                        <path
                            className="pl__worm"
                            d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z"
                            fill="none"
                            stroke="url(#pl-grad)"
                            strokeWidth="16"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeDasharray="24 1131"
                            strokeDashoffset="10"
                        />
                    </svg>
                    <h3 className="LoaderHeading">Welcome to My Portfolio</h3>
                </section>
            )}
        </>
    );
};

export default Website;
