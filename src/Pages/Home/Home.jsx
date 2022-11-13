import React from "react";
import { Redirect } from "../../Components/Common/Functions";

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
                    <div className="home_button flex jc ac row">
                        <div className="home_button_inner">
                            <button>Resume</button>
                            <button onClick={()=>{Redirect("Contact")}}>Contact</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
