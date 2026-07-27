import {useState} from "react";

import Lightbox from "yet-another-react-lightbox";

import "yet-another-react-lightbox/styles.css";

function ProjectCard({project, open}) {

    const [imageOpen, setImageOpen] = useState(false);

    const [image, setImage] = useState(null);


    return (

        <div
            className="project-card card"
            onClick={open}
        >


            {
                project.image &&
                <img
                    src={project.image}
                    className="project-image"
                    alt={project.title}
                    onClick={(e) => {

                        e.stopPropagation();

                        project.openImage();

                    }}
                />
            }


            <div className="project-top">

                <h3>
                    {project.title}
                </h3>

                <span>
                    {project.period}
                </span>

            </div>


            <p className="project-role">
                {project.role}
            </p>


            <p className="project-desc">
                {project.description}
            </p>


            <div className="project-tech">

                {
                    project.tech.map(item => (

                        <span
                            className="tag"
                            key={item}
                        >
                            {item}
                        </span>

                    ))
                }

            </div>


        </div>

    );

}


export default ProjectCard;