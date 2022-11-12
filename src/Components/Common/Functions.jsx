import { ArrowUpwardRounded } from "@mui/icons-material";
import React from "react";
import $ from "jquery";

//#=================> Slide Top <=================#//

export const ScrollTop = () => {
    return (
        <div className="scroll_top link" onClick={Scroll}>
            <ArrowUpwardRounded id="scroll_top" />
        </div>
    );
};

export const Scroll = (XTarget, YTarget) => {
    window.scrollTo(XTarget ? XTarget : 0, YTarget ? YTarget : 0);
};

export const scrollToTop = () => {
    $(window).scroll(() => {
        if ($(window)[0].pageYOffset < 400) {
            $(".scroll_top").hide();
            return;
        }
        $(".scroll_top").show();
    });
};

export const navbarScrollIndicator = () => {
    $(window).scroll(() => {
        let indicator = "homenav";

        if ($(window)[0].pageYOffset > $("#Skills").offset().top - 180) {
            indicator = "skillsnav";
        }
        if ($(window)[0].pageYOffset > $("#About").offset().top - 180) {
            indicator = "aboutnav";
        }
        if ($(window)[0].pageYOffset > $("#Projects").offset().top - 180) {
            indicator = "projectnav";
        }
        if ($(window)[0].pageYOffset > $("#Contact").offset().top - 180) {
            indicator = "contactnav";
        }

        console.log($(`#${indicator}`)[0]);

        $(".nav_tab").each((nav) => {
            $(`#${nav}`).removeClass("active");
        });
        $(`#${indicator}`).addClass("active");
        Indicator($(`#${indicator}`)[0]);
    });
};

//#=================> Navigation Function <=================#//

export const NavbarIndicator = () => {
    $(".nav_tab").each(function () {
        if ($(this).hasClass("active")) {
            Indicator($(this)[0]);
            scrollToTop();
        }

        $(this).click(function () {
            $(".nav_tab").each(() => {
                $(this).removeClass("active");
            });
            $(this).addClass("active");
            Indicator($(this)[0]);
            Redirect($(this).text());
        });
    });
};

//#=================> Menu Navigation Function <=================#//

export const menuNavbarIndicator = () => {
    $(".menu_tab").each(function () {
        $(this).click(function () {
            Menu();
            Redirect($(this).text());
        });
    });
};

//#=================> Navigation Shrink Function <=================#//

export const NavbarShrink = () => {
    $(window).scroll(() => {
        if ($(window)[0].pageYOffset >= 200) {
            $(".navbar_section").addClass("active");
            return;
        }
        $(".navbar_section").removeClass("active");
    });
};

export const Redirect = (value) => {
    let locate = $(`#${value}`).offset().top;
    Scroll(0, value !== "Home" ? locate - 65.5 : null);
};

export const Menu = () => {
    $(".navbar_menu").toggleClass("active");
};

export const Indicator = (e) => {
    $(".indicator").css(`left`, `${e.offsetLeft}px`);
    $(".indicator").css(`width`, `${e.offsetWidth}px`);
};

export const FormAnimation = () => {
    $(".input_label").each((i, label) => {
        label.innerHTML = label.innerText
            .split("")
            .map(
                (letter, idx) =>
                    `<span style="transition-delay:${
                        idx * 70
                    }ms">${letter}</span>`
            )
            .join("");
    });
};
