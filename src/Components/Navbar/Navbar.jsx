import React, { useEffect, memo } from "react";
import {
    NavbarIndicator,
    Menu,
    NavbarShrink,
    scrollToTop,
    navbarScrollIndicator,
    menuNavbarIndicator
} from "../../Components/Common/Functions";
import {
    HomeRounded,
    GroupsRounded,
    DvrRounded,
    AddSharp,
    ConnectWithoutContact,
} from "@mui/icons-material";

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
            <div className="navbar_logo flex ac">
                <img className="nav_logo" src="./img/logo.png"  alt="" />
            </div>
            <div className="navbar_tabs flex je ac">
                <ul className="nav_tabs flex jse ac row">
                    <li className="nav_tab home active" id="homenav" title="Home">
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
                        <AddSharp id="menu_icon_add" />
                        <sup>Menu</sup>
                    </div>
                    <ul id="menu" className="menu_tabs flex jc ac col">
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac" title="Home">
                                <HomeRounded id="menu_icons" />
                                <span className="ts">Home</span>
                            </div>
                        </li>
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac row" title="Skills">
                                <DvrRounded id="menu_icons" />
                                <span className="ts">Skills</span>
                            </div>
                        </li>
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac row" title="About">
                                <GroupsRounded id="menu_icons" />
                                <span className="ts">About</span>
                            </div>
                        </li>
                        <li className="menu_tab flex jc ac">
                            <div className="link flex ac row" title="Products">
                                <DvrRounded id="menu_icons" />
                                <span className="ts">Products</span>
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
