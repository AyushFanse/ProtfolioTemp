import React from "react";
import { Title } from "../../Components/Common/ReusableFunctions";
import AboutData from "../../Data/About.json";
import { ExpandMore, Add } from "@mui/icons-material";

const About = () => {
    const contentData = (content) => {
        return (
            <>
                {content.map((data, i) => (
                    <div key={`${data}`+i}>
                        <h4 className="subheading">
                            {data.timeline}
                        </h4>
                        <div className="timeline-body">
                            <p className="text-muted">{data.description}</p>
                        </div>
                    </div>
                ))}
            </>
        );
    };

    return (
        <section className="about_container" id="About">
            <Title title={"About"} />
            <div>
                <ul className="timeline">
                    {AboutData.map((info, i) => (
                        <li key={`${info.heading}`+i}>
                            <div className="timeline-image">
                                <ExpandMore />
                            </div>
                            <div className="timeline-panel">
                                <h4>{info.heading}</h4>
                                {contentData(info.content)}
                            </div>
                        </li>
                    ))}
                    <li>
                        <div className="timeline-image">
                            <Add />
                        </div>
                        <div className="timeline-panel timeline-panel-last">
                            <h4
                                style={{
                                    color: "var(--color)",
                                    fontSize: "2.4rem",
                                    margin: " 20px 0"
                                }}
                            >
                                Be part of my story!
                            </h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default React.memo(About);
