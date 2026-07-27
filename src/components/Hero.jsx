import profile from "../data/profile";
import {motion} from "framer-motion";

function Hero() {


    return (

        <motion.section

            className="hero"

            initial={{
                opacity: 0,
                y: 30
            }}

            whileInView={{
                opacity: 1,
                y: 0
            }}

            viewport={{
                once: true
            }}

            transition={{
                duration: 0.6
            }}

        >


            <div className="badge">

                ✦ Backend Developer

            </div>


            <h1>

                안녕하세요.
                <br/>

                <span>
                    {profile.name}
                </span>
                입니다.

            </h1>


            <p className="hero-desc">

                {profile.subtitle}

            </p>


            <div className="hero-buttons">


                <button
                    className="btn btn-primary"
                    onClick={() => {

                        document
                            .getElementById("projects")
                            ?.scrollIntoView({
                                behavior: "smooth"
                            });

                    }}
                >

                    프로젝트 보기 →

                </button>


                <a
                    className="btn btn-outline"
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                >

                    GitHub

                </a>


            </div>


            <div className="hero-info">


                <div>

                    <strong>
                        5년 4개월
                    </strong>

                    <span>
                        개발 경력
                    </span>

                </div>


                <div>

                    <strong>
                        717+
                    </strong>

                    <span>
                        운영 단지
                    </span>

                </div>


                <div>

                    <strong>
                        50만+
                    </strong>

                    <span>
                        관리 세대
                    </span>

                </div>


            </div>


        </motion.section>

    );

}


export default Hero;