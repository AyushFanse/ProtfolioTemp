import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

//^---------------------> COMPONENT <---------------------^//
import Website from "../Website/Website";
import Error from "../Error/Error";

const AppRouters = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Website />} />
                    <Route exact path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};

export default AppRouters;
