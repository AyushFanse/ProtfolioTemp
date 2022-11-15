import React from "react";
import { Redirect } from "../../Components/Common/Functions";
import MyData from "../../Data/ConnectMe_data.json";

const Home = () => {
    return (
        <>
            <section className="home_container flex jc col" id="Home">
                <div className="parentAnim">
                    <div className="box">
                        <div className="box box1 box2"></div>
                        <div className="box box1 box3"></div>
                        <div className="box box1 box4"></div>
                        <div className="box box1 box5"></div>
                        <div className="box box6"></div>
                    </div>
                </div>
                <div className="home_container_inner">
                    <h1>
                        Ayush <span>Fanse</span>
                    </h1>
                    <h3>
                        Full Stack
                        <span> Web </span>
                        Developer
                    </h3>
                    <div className="home_button flex ac row">
                        <div className="home_button_inner flex jsb">
                            <a
                                href={MyData[0].resume}
                                rel="noreferrer"
                                target="_blank"
                            >
                                Resume
                                <svg viewBox="0 2 70 32">
                                    <path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" />
                                </svg>
                            </a>
                            <button
                                onClick={() => {
                                    Redirect("Contact");
                                }}
                            >
                                Let's Connect
                                <svg
                                    className="tea"
                                    viewBox="0 0 37 48"
                                    fill="none"
                                >
                                    <path
                                        d="M27.0819 17H3.02508C1.91076 17 1.01376 17.9059 1.0485 19.0197C1.15761 22.5177 1.49703 29.7374 2.5 34C4.07125 40.6778 7.18553 44.8868 8.44856 46.3845C8.79051 46.79 9.29799 47 9.82843 47H20.0218C20.639 47 21.2193 46.7159 21.5659 46.2052C22.6765 44.5687 25.2312 40.4282 27.5 34C28.9757 29.8188 29.084 22.4043 29.0441 18.9156C29.0319 17.8436 28.1539 17 27.0819 17Z"
                                        stroke="var(--text)"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M29 23.5C29 23.5 34.5 20.5 35.5 25.4999C36.0986 28.4926 34.2033 31.5383 32 32.8713C29.4555 34.4108 28 34 28 34"
                                        stroke="var(--text)"
                                        strokeWidth="2"
                                    />
                                    <path
                                        id="teabag"
                                        fill="var(--theme)"
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M16 25V17H14V25H12C10.3431 25 9 26.3431 9 28V34C9 35.6569 10.3431 37 12 37H18C19.6569 37 21 35.6569 21 34V28C21 26.3431 19.6569 25 18 25H16ZM11 28C11 27.4477 11.4477 27 12 27H18C18.5523 27 19 27.4477 19 28V34C19 34.5523 18.5523 35 18 35H12C11.4477 35 11 34.5523 11 34V28Z"
                                    />
                                    <path
                                        id="steamL"
                                        d="M17 1C17 1 17 4.5 14 6.5C11 8.5 11 12 11 12"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        stroke="var(--text)"
                                    />
                                    <path
                                        id="steamR"
                                        d="M21 6C21 6 21 8.22727 19 9.5C17 10.7727 17 13 17 13"
                                        stroke="var(--text)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
