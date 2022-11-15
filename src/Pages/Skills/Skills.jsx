import React from "react";
import SkillsData from "../../Data/Skills.json";
import { Title } from "../../Components/Common/ReusableFunctions";
import SkillsTemp from "./SkillsTemp";

const DURATION = 45000;
const ROWS = 4;
const TAGS_PER_ROW = SkillsData.length;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const InfiniteLoopSlider = ({ children, duration, reverse = false }) => {
    return (
        <div
            className="loop-slider"
            style={{
                "--duration": `${duration}ms`,
                "--direction": reverse ? "reverse" : "normal",
            }}
        >
            <div className="inner">
                {children}
                {children}
                {children}
                {children}
            </div>
        </div>
    );
};

const Skills = () => (
    <>
        <section className="skills_container" id="Skills">
            <Title title={"Skills"} />
            <div className="skills_container_inner flex js ac">
                <div className="tag-list">
                    {[...new Array(ROWS)].map((_, i) => (
                        <InfiniteLoopSlider
                            key={i}
                            duration={random(
                                DURATION - 5000,
                                DURATION - 7000,
                                DURATION + 7000,
                                DURATION - 11000,
                                DURATION + 11000,
                                DURATION + 5000
                            )}
                            reverse={i % 2}
                        >
                            {shuffle(SkillsData)
                                .slice(0, TAGS_PER_ROW)
                                .map((tag, i) => (
                                    <SkillsTemp skill={tag} key={i} />
                                ))}
                        </InfiniteLoopSlider>
                    ))}
                    <div className="fade" />
                </div>
                <div style={{margin:'auto'}}>
                    <div className="glasscard">
                        <ul>
                            {SkillsData.map((tag, i) => (
                                <li key={i}>
                                    <a
                                        className="skill_link"
                                        href={tag.link}
                                        disabled
                                    >
                                        <img src={tag.skill_img} alt="" />
                                        {tag.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
);

export default Skills;
