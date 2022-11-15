import React, { useState, memo } from "react";
import { Title } from "../../Components/Common/ReusableFunctions";
import ProjectsData from "../../Data/Projects.json";
import Carousel from "./ProjectCarousel";
import DialogBox from "../../Components/DialogBox/DialogBox";
import {
    ArrowBackIosNewRounded,
    ArrowForwardIosRounded,
} from "@mui/icons-material";

const Projects = () => {
    const [open, setOpen] = useState(false);
    const [RowData, setRowData] = useState("");
    const count = ProjectsData.length;
    const [active, setActive] = useState(Math.floor(count/2));

    const handleClickOpen = (row_data) => {
        setRowData(row_data);
        setOpen(true);
    };
    const handleClose = () => {
        setRowData("");
        setOpen(false);
    };

    return (
        <>
            <div className="projects_container" id="Projects">
                <Title title={"Projects"} />
                <div className="projects_container_inner flex jc ac col">
                    <Carousel active={active}>
                        {ProjectsData.map((project, i) => (
                            <div className="CardOut" key={i}>
                                <div className="Card">
                                    <img src={project.files[0].path} alt="" />
                                    <div className="CardData flex je as col">
                                        <h1>{project.title}</h1>
                                        <h6>{project.date}</h6>
                                        <div className="Navigation flex jsb ac row">
                                            <h3
                                                className="Timeline_underline"
                                                onClick={() => {
                                                    handleClickOpen(project);
                                                }}
                                            >
                                                Read More
                                            </h3>
                                            <a
                                                title="Website"
                                                href={project.site_link}
                                                rel="noreferrer"
                                                target="_blank"
                                                className="material-symbols-rounded"
                                                aria-label="Website"
                                            >
                                                ads_click
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                    <div className="carousel_button jsb flex ac row">
                        <button className="nav left flex ac jc">
                            <ArrowBackIosNewRounded
                                onClick={() => setActive((i) => i - 1)}
                                sx={{ display: active > 0 ? "flex" : "none" }}
                            />
                        </button>

                        {active < count - 1 && (
                            <button className="nav right flex ac jc">
                                <ArrowForwardIosRounded
                                    onClick={() => setActive((i) => i + 1)}
                                    sx={{
                                        display:
                                            active < count - 1
                                                ? "flex"
                                                : "none",
                                    }}
                                />
                            </button>
                        )}
                    </div>
            </div>
            <DialogBox
                RowData={RowData}
                handleClose={handleClose}
                open={open}
            />
        </>
    );
};

export default memo(Projects);
