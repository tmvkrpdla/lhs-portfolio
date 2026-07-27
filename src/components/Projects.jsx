import {useState} from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";


function Projects() {


    const [selected, setSelected] = useState(null);

    const [imageOpen, setImageOpen] = useState(false);

    const [image, setImage] = useState(null);


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

                                    openImage: () => {

                                        setImage(project.image);

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

                slides={[
                    {
                        src: image
                    }
                ]}

            />


        </>

    );

}


export default Projects;