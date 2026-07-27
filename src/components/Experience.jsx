function Experience(){


    const works = [

        "Spring Boot, Spring Framework 기반 백엔드 서비스 개발",

        "RESTful API 설계 및 외부 서비스 연동",

        "MyBatis, QueryDSL 기반 조회 기능 개발",

        "MariaDB 데이터 모델링 및 SQL 튜닝",

        "React, JSP, jQuery 기반 웹·모바일 서비스 개발",

        "AWS EC2, Nginx 서버 운영 및 Jenkins CI/CD 관리",

        "서비스 장애 분석 및 레거시 코드 리팩토링"

    ];



    return (

        <section id="experience">


            <div className="section-title">
                EXPERIENCE
            </div>



            <h2 className="section-heading">

                ㈜에너넷
                <br/>
                서비스개발팀

            </h2>



            <div className="experience-card card">


                <div className="experience-header">


                    <div>

                        <h3>
                            웹 개발자 · 주임
                        </h3>

                        <p>
                            2021.04 ~ 현재
                        </p>

                    </div>



                    <span className="period">

                        5년 4개월

                    </span>


                </div>



                <div className="ami-box">


                    <h3>
                        산업통상자원부 AMI 국가사업
                    </h3>


                    <p>

                        전국 717개 단지,
                        약 50만 세대 규모의
                        원격검침 데이터 관리 시스템 개발 및 운영

                    </p>


                    <div className="ami-tags">

                        <span>
                            717 단지
                        </span>

                        <span>
                            50만 세대
                        </span>

                        <span>
                            원격검침
                        </span>

                        <span>
                            실시간 모니터링
                        </span>

                    </div>


                </div>



                <ul className="work-list">


                    {
                        works.map((work,index)=>(

                            <li key={index}>

                                {work}

                            </li>

                        ))
                    }


                </ul>



            </div>


        </section>

    );

}


export default Experience;