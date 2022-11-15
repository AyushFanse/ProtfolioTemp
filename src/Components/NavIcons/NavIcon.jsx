import React from "react";
import {
    GitHub,
    LinkedIn,
    WhatsApp,
    AlternateEmail,
} from "@mui/icons-material";
import MyData from "../../Data/ConnectMe_data.json";
import { SiLeetcode } from "react-icons/si";

const NavIcons = () => {
    return (
        <ul className="flex jse ac ">
            <li className="flex jc ac col" data-aos="slide-up">
                <div>
                    <a
                        className="links"
                        rel="noreferrer"
                        href={MyData[0].leetcode}
                        target="_blank"
                    >
                        <SiLeetcode id="icons" />
                    </a>
                </div>
                <h6 id="FooterName">LeetCode</h6>
            </li>
            <li className="flex jc ac col" data-aos="slide-up">
                <div>
                    <a
                        className="links"
                        rel="noreferrer"
                        href={MyData[0].github}
                        target="_blank"
                    >
                        <GitHub id="icons" />
                    </a>
                </div>
                <h6 id="FooterName">GitHub</h6>
            </li>
            <li className="flex jc ac col" data-aos="slide-up">
                <div>
                    <a
                        className="links"
                        rel="noreferrer"
                        href={MyData[0].linked_in}
                        target="_blank"
                    >
                        <LinkedIn id="icons" />
                    </a>
                </div>
                <h6 id="FooterName">LinkedIn</h6>
            </li>
            <li className="flex jc ac col" data-aos="slide-right" id="desktop">
                <div>
                    <a
                        className="links"
                        rel="noreferrer"
                        href={`https://wa.me/${MyData[0].number}`}
                        target="_blank"
                    >
                        <WhatsApp id="icons" />
                    </a>
                </div>
                <h6 id="FooterName">WhatsApp</h6>
            </li>
            <li className="flex jc ac col" data-aos="slide-right" id="mobile">
                <div>
                    <a
                        className="links"
                        rel="noreferrer"
                        href={`https://api.whatsapp.com/send?phone=+91${MyData[0].number}`}
                        target="_blank"
                    >
                        <WhatsApp id="icons" />
                    </a>
                </div>
                <h6 id="FooterName">WhatsApp</h6>
            </li>
            <li className="flex jc ac col" data-aos="slide-right" id="desktop">
                <div>
                    <a
                        className="links hover"
                        rel="noreferrer"
                        href={`https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${MyData[0].email}`}
                        target="_blank"
                    >
                        <AlternateEmail id="icons" />
                    </a>
                </div>
                <h6 id="FooterName">Email</h6>
            </li>
            <li className="flex jc ac col" data-aos="slide-right" id="mobile">
                <div>
                    <a
                        className="links hover"
                        rel="noreferrer"
                        href={`mailto:${MyData[0].email}`}
                        target="_blank"
                    >
                        <AlternateEmail id="icons" />
                    </a>
                </div>
                <h6 id="FooterName">Email</h6>
            </li>
        </ul>
    );
};

export default NavIcons;
