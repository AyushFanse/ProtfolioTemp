import React, { useEffect, memo } from "react";
import {
    NavbarIndicator,
    Menu,
    NavbarShrink,
    scrollToTop,
    navbarScrollIndicator,
    menuNavbarIndicator,
} from "../../Components/Common/Functions";
import { ConnectWithoutContact } from "@mui/icons-material";
import { GiSkills } from "react-icons/gi";
import { RiHome3Line } from "react-icons/ri";
import { BiCategoryAlt } from "react-icons/bi";
import { TbListDetails } from "react-icons/tb";

const Navbar = () => {
    useEffect(() => {
        NavbarShrink();
        NavbarIndicator();
        scrollToTop();
        navbarScrollIndicator();
        menuNavbarIndicator();
    });

    return (
        <div className="navbar_section flex jsb ac" id="navbar_section">
            <div className="navbar_logo flex ac"></div>
            <div className="navbar_tabs flex je ac">
                <ul className="nav_tabs flex jse ac row">
                    <li
                        className="nav_tab home active"
                        id="homenav"
                        title="Home"
                    >
                        <div className="link">Home</div>
                    </li>
                    <li className="nav_tab" id="skillsnav" title="Skills">
                        <div className="link">Skills</div>
                    </li>
                    <li className="nav_tab" id="aboutnav" title="About">
                        <div className="link">About</div>
                    </li>
                    <li className="nav_tab" id="projectnav" title="Projects">
                        <div className="link">Projects</div>
                    </li>
                    <li className="nav_tab" id="contactnav" title="Contact">
                        <div className="link">Contact</div>
                    </li>
                    <li className="indicator" />
                </ul>
            </div>
            <div className="navbar_menu  flex jc ac">
                <div className="nav_menu">
                    <div className="menu_icon" onClick={Menu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul id="menu" className="menu_tabs flex jc ac col">
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac" title="Home">
                                <RiHome3Line id="menu_icons" />
                                <span className="ts">Home</span>
                            </div>
                        </li>
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac row" title="Skills">
                                <GiSkills id="menu_icons" />
                                <span className="ts">Skills</span>
                            </div>
                        </li>
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac row" title="About">
                                <TbListDetails id="menu_icons" />
                                <span className="ts">About</span>
                            </div>
                        </li>
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac row" title="Projects">
                                <BiCategoryAlt id="menu_icons" />
                                <span className="ts">Projects</span>
                            </div>
                        </li>
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac row" title="Contact">
                                <ConnectWithoutContact id="menu_icons" />
                                <span className="ts">Contact</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default memo(Navbar);
