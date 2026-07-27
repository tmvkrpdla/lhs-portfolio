function ProjectModal({project, close}) {


    if (!project) return null;


    return (

        <div
            className="modal-bg"
            onClick={close}
        >


            <div
                className="modal card"
                onClick={(e) => e.stopPropagation()}
            >


                <button
                    className="modal-close"
                    onClick={close}
                >
                    ✕
                </button>


                <h2>
                    {project.title}
                </h2>


                <p className="project-category">
                    {project.category}
                </p>


                {
                    project.role?.length > 0 &&
                    <>
                        <h3>
                            담당 업무
                        </h3>


                        <ul>

                            {
                                project.role.map(item => (

                                    <li key={item}>
                                        {item}
                                    </li>

                                ))
                            }

                        </ul>
                    </>
                }


                {
                    project.tech?.length > 0 &&
                    <>
                        <h3>
                            기술 스택
                        </h3>


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
                    </>
                }


                {
                    project.result?.length > 0 &&
                    <>
                        <h3>
                            성과
                        </h3>


                        <ul>

                            {
                                project.result.map(item => (

                                    <li key={item}>
                                        {item}
                                    </li>

                                ))
                            }

                        </ul>
                    </>
                }


            </div>


        </div>

    );

}


export default ProjectModal;