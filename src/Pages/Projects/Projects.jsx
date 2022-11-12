import React from "react";
import { Title } from "../../Components/Common/ReusableFunctions";
import ProjectsData from "../../Data/Projects.json";
import Carousel from "./ProjectCarousel";
import DialogBox from "../../Components/DialogBox/DialogBox";

const Projects = () => {
    const [open, setOpen] = React.useState(false);
    const [RowData, setRowData] = React.useState("");

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
                <div className="projects_container_inner flex jc ac">
                    <Carousel>
                        {ProjectsData.map((project, i) => (
                            <div className="CardOut" key={i}>
                                <div className="Card">
                                    <img src={project.files[0].path} alt="" />
                                    <div className="CardData flex">
                                        <h1>{project.title}</h1>
                                        <h6>{project.date}</h6>
                                        <div className="Navigation flex">
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
            </div>
            <DialogBox
                RowData={RowData}
                handleClose={handleClose}
                open={open}
            />
        </>
    );
};

export default Projects;
