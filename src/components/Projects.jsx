import {useState} from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


function Projects() {


    const [selected, setSelected] = useState(null);

    const [imageOpen, setImageOpen] = useState(false);

    const [images, setImages] = useState([]);

    const [imageIndex, setImageIndex] = useState(0);


    return (

        <>

            <section id="projects">

                <div className="section-title">
                    PROJECTS
                </div>


                <h2 className="section-heading">
                    주요 프로젝트
                </h2>


                <div className="project-grid">


                    {
                        projects.map((project, index) => (


                            <ProjectCard

                                key={index}

                                project={{
                                    ...project,

                                    openImage: (index = 0) => {

                                        setImages(project.images);

                                        setImageIndex(index);

                                        setImageOpen(true);

                                    }

                                }}

                                open={() => setSelected(project)}

                            />


                        ))
                    }


                </div>


                <ProjectModal

                    project={selected}

                    close={() => setSelected(null)}

                />


            </section>


            <Lightbox
                open={imageOpen}
                close={() => setImageOpen(false)}
                index={imageIndex}
                slides={
                    images.map(img => ({
                        src: img
                    }))
                }
            />

        </>

    );

}


export default Projects;