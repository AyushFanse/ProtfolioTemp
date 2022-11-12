import React from "react";

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

                <h4>Hello, my name is</h4>
                <h1>
                    Ayush <span>Fanse</span>
                </h1>
                <h3>
                I am a <span>Full Stack Web Developer</span>
                </h3>
            </section>
        </>
    );
};

export default Home;
