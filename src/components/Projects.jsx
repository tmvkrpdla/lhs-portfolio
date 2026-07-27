import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";


function Projects() {

    const [selected, setSelected] = useState(null);


    return (

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

                            project={project}

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

    );

}


export default Projects;