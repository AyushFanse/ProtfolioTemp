import React, { memo } from "react";
import NavIcons from "../../Components/NavIcons/NavIcon";

const Footer = memo(() => {
    return (
        <>
            <div className="footer_container flex jc ac col" id="Contact">
                <div className="nav_icons flex jc ac row">
                    <NavIcons />
                </div>
                <div className="copy">&copy; Ayush Fanse</div>
            </div>
        </>
    );
});

export default Footer;
