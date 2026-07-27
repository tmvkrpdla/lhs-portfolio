import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ProjectCard({project, open}) {


    return (

        <div
            className="project-card card"
            onClick={open}
        >

            {
                project.images?.length > 0 &&

                <div
                    className="project-image-area"
                    onClick={(e) => e.stopPropagation()}
                >

                    <Swiper

                        modules={[
                            Navigation,
                            Pagination
                        ]}

                        navigation

                        pagination={{
                            clickable: true
                        }}

                        spaceBetween={10}

                        className="project-swiper"

                        onClick={(swiper) => {

                            const index = swiper.clickedIndex;

                            project.openImage(index);

                        }}

                    >

                        {
                            project.images.map((img, index) => (

                                <SwiperSlide key={index}>

                                    <img
                                        src={img}
                                        className="project-image"
                                        alt={project.title}
                                    />

                                </SwiperSlide>
                            ))
                        }


                    </Swiper>

                </div>
            }

            <div className="project-top">

                <h3>
                    {project.title}
                </h3>

                <span>
                    {project.period}
                </span>

            </div>


            <div className="project-role">

                {
                    Array.isArray(project.role)
                        ? project.role.join(" · ")
                        : project.role
                }

            </div>


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