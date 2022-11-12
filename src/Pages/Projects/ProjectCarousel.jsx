import React, { useState, Children } from "react";
import {
    ArrowBackIosNewRounded,
    ArrowForwardIosRounded,
} from "@mui/icons-material";

const Carousel = ({ children }) => {
    const [active, setActive] = useState(2);
    const count = Children.count(children);

    return (
        <div className="carousel">
            {active > 0 && (
                <div className="nav left">
                    <ArrowBackIosNewRounded
                        onClick={() => setActive((i) => i - 1)}
                    />
                </div>
            )}
            {Children.map(children, (child, i) => (
                <div
                    className="card-container"
                    style={{
                        "--active": i === active ? 1 : 0,
                        "--offset": (active - i) / 3,
                        "--direction": Math.sign(active - i),
                        "--abs-offset": Math.abs(active - i) / 3,
                        "pointerEvents": active === i ? "auto" : "none",
                        opacity: Math.abs(active - i) >= 3 ? "0" : "1",
                        display: Math.abs(active - i) > 3 ? "none" : "block",
                    }}
                >
                    {child}
                </div>
            ))}
            {active < count - 1 && (
                <div className="nav right">
                    <ArrowForwardIosRounded
                        onClick={() => setActive((i) => i + 1)}
                    />
                </div>
            )}
        </div>
    );
};

export default Carousel;
