import React from 'react';

const SkillsTemp = ({ skill }) => {
    return (
        <>
            <div id="contSkills" key={skill.name}>
                <a href={skill.link} rel="noreferrer" target="_blank">
                    <img
                        id="skillIcons"
                        style={{ width: "100px", height: "100px" }}
                        src={skill.skill_img}
                        alt="skill"
                    />
                </a>
                <a
                    id="skillName"
                    href={skill.link}
                    rel="noreferrer"
                    target="_blank"
                >
                    {skill.name}
                </a>
            </div>
        </>
    );
};

export default SkillsTemp;