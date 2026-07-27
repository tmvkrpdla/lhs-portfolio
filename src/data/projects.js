const projects = [

    {
        title: "AMI 원격검침 플랫폼",

        category: "Backend / Platform",

        period: "2021.04 ~ 현재",

        image:"/projects/ami.png",

        description:
            `
산업통상자원부 가정용 스마트플랫폼(AMI)
국가사업 시스템 개발 및 운영

전국 717개 단지,
약 50만 세대의 원격검침 데이터를
수집·관리하는 플랫폼 구축
`,

        role: [
            "검침 데이터 관리 시스템 개발",
            "관리자 웹 서비스 개발",
            "REST API 설계 및 구현",
            "외부 시스템 연동",
            "서비스 운영 및 장애 대응"
        ],


        tech: [
            "Spring Boot",
            "MyBatis",
            "QueryDSL",
            "MariaDB",
            "AWS",
            "Jenkins"
        ],


        result: [
            "대규모 검침 데이터 안정적 운영",
            "QueryDSL 적용으로 복잡한 조회 로직 개선",
            "SQL 튜닝을 통한 조회 성능 개선"
        ]

    },


    {
        title: "검침 관리자(Admin) 시스템",

        category: "Web Application",

        period: "서비스 개발",

        description:
            `
운영자가 사용하는 검침 데이터 관리 시스템 개발

회원관리,
검침 조회,
통계 화면,
운영 기능 구현
`,

        role: [
            "관리자 페이지 개발",
            "데이터 조회 기능 구현",
            "권한 관리 기능 개발"
        ],

        tech: [
            "Spring",
            "JSP",
            "jQuery",
            "MariaDB"
        ],

        result: [
            "운영 업무 효율화",
            "반복 조회 업무 개선"
        ]

    },


    {
        title: "현장 설치 작업자 모바일 웹",

        category: "Mobile Web",

        period: "AMI 구축 프로젝트",

        description:
            `
원격검침 인프라 설치 현장에서 사용하는
모바일 웹 서비스 개발

계량기,
DCU 정보 등록 및 설치 상태 관리
`,

        role: [
            "React 기반 모바일 UI 개발",
            "설치 데이터 등록 기능 구현",
            "REST API 연동"
        ],

        tech: [
            "React",
            "JavaScript",
            "REST API"
        ],

        result: [
            "현장 설치 업무 디지털화",
            "수기 관리 업무 감소"
        ]

    }

];


export default projects;