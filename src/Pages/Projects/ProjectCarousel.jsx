import React, { Children } from "react";

const Carousel = ({ children, active }) => {
    return (
        <>
            <div className="carousel">
                {Children.map(children, (child, i) => (
                    <div
                        className="card-container"
                        style={{
                            "--active": i === active ? 1 : 0,
                            "--offset": (active - i) / 3,
                            "--direction": Math.sign(active - i),
                            "--abs-offset": Math.abs(active - i) / 3,
                            pointerEvents: active === i ? "auto" : "none",
                            opacity: Math.abs(active - i) >= 3 ? "0" : "1",
                            display:
                                Math.abs(active - i) > 3 ? "none" : "block",
                        }}
                    >
                        {child}
                    </div>
                ))}
            </div>
        </>
    );
};

export default Carousel;
