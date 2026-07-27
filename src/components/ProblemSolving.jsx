function ProblemSolving() {


    const problems = [


        {
            title:"QueryDSL 기반 조회 구조 개선",

            before:
                "복잡한 조건 조회 증가로 MyBatis Dynamic SQL 관리 어려움",

            after:
                "QueryDSL 기반 타입 안정 조회 구조로 개선",

            result:
                "유지보수성 향상 및 복잡한 조회 로직 관리 개선"

        },


        {
            title:"SQL 튜닝 및 조회 성능 개선",

            before:
                "대량 검침 데이터 조회 시 응답 지연 발생",

            after:
                "인덱스 개선 및 SQL 실행 계획 분석",

            result:
                "조회 성능 개선 및 사용자 응답 속도 향상"

        },


        {
            title:"Grafana 기반 실시간 모니터링",

            before:
                "운영 장애 발생 후 데이터 상태 확인",

            after:
                "실시간 검침 데이터 모니터링 환경 구축",

            result:
                "장애 원인 파악 시간 단축 및 운영 안정성 향상"

        },


        {
            title:"반복 업무 자동화",

            before:
                "반복적인 데이터 확인 및 처리 작업",

            after:
                "크롤링 및 스크립트 자동화",

            result:
                "운영 업무 효율 개선"

        }


    ];



    return (

        <section id="problem">


            <div className="section-title">

                PROBLEM SOLVING

            </div>



            <h2 className="section-heading">

                문제를 분석하고
                개선하는 개발자입니다.

            </h2>



            <div className="problem-grid">


                {
                    problems.map((item,index)=>(


                        <div
                            className="problem-card card"
                            key={index}
                        >


                            <h3>
                                {item.title}
                            </h3>


                            <div className="problem-item">


                                <span>
                                    Before
                                </span>

                                <p>
                                    {item.before}
                                </p>


                            </div>



                            <div className="problem-item">


                                <span>
                                    After
                                </span>

                                <p>
                                    {item.after}
                                </p>


                            </div>



                            <div className="problem-result">


                                <strong>
                                    개선 효과
                                </strong>


                                <p>
                                    {item.result}
                                </p>


                            </div>


                        </div>


                    ))
                }


            </div>


        </section>

    );

}


export default ProblemSolving;