import profile from "../data/profile";


function Skills(){


    const categories = [

        {
            title:"Backend",
            items:profile.skills.backend
        },

        {
            title:"Frontend",
            items:profile.skills.frontend
        },

        {
            title:"Database",
            items:profile.skills.database
        },

        {
            title:"Infra & Tools",
            items:[
                ...profile.skills.infra,
                ...profile.skills.tools
            ]
        }

    ];



    return (

        <section id="skills">


            <div className="section-title">
                SKILLS
            </div>


            <h2 className="section-heading">

                기술 스택

            </h2>



            <div className="skill-grid">


                {
                    categories.map((category,index)=>(


                        <div
                            className="skill-card card"
                            key={index}
                        >


                            <h3>
                                {category.title}
                            </h3>


                            <div className="skill-tags">


                                {
                                    category.items.map((skill)=>(

                                        <span
                                            className="tag"
                                            key={skill}
                                        >
                                            {skill}
                                        </span>

                                    ))
                                }


                            </div>


                        </div>


                    ))
                }


            </div>


        </section>

    );

}


export default Skills;