const projects = [

    {
        title: "산업통상자원부 AMI \n" +
            "원격검침 데이터 관리 플랫폼",

        category: "Backend / Platform",

        // period: "2021.04 ~ 현재",

        image: `${import.meta.env.BASE_URL}projects/ami.png`,

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
        title: "50만 세대 검침데이터 실시간 모니터링 대시보드",

        role: [
            "Grafana 기반 실시간 모니터링 환경 구축",
            "검침 데이터 상태 조회 API 개발",
            "운영 장애 분석 및 대응"
        ],

        // period: "서비스 운영 개선",

        description:
            `
            전국 717개 단지,
            약 50만 세대의 원격검침 데이터를
            실시간으로 확인할 수 있는 모니터링 대시보드 구축
            
            검침 데이터 수집 상태,
            장애 현황,
            데이터 처리 상태를 시각화하여
            운영 안정성 향상
            `,

        tech: [
            "Grafana",
            "MariaDB",
            "REST API",
            "Chart.js"
        ],

        image: `${import.meta.env.BASE_URL}projects/monitoring.png`
    },


    {
        title: "검침 관리자 시스템",

        category: "Web Application",

        // period: "서비스 개발",

        image: `${import.meta.env.BASE_URL}projects/admin.png`,

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
        title: "세대 사용자용 하이브리드 앱",

        role: "Frontend & Backend Developer",

        category: "Frontend / Mobile Web",

        // period: "AMI 서비스 개발",

        description:
            `
            일반 사용자가 본인의 전력 사용량을
            조회할 수 있는 모바일 웹 서비스 개발
            
            검침 데이터 조회,
            사용량 통계,
            기간별 사용 패턴 확인 기능 구현
            `,

        tech: [
            "React",
            "JavaScript",
            "Spring Boot",
            "REST API"
        ],

        image: `${import.meta.env.BASE_URL}projects/user-mobile.png`
    },

    {
        title: "수요반응(DR) 정산 및 포인트 쇼핑 모바일 웹",

        role: "Full Stack Developer",

        // period: "DR 서비스 개발",

        category: "Mobile Web / Service",

        description:
            `
            전력 수요반응(DR) 참여 고객을 위한
            정산 및 포인트 관리 모바일 웹 개발
            
            DR 참여 결과 조회,
            절감량 기반 포인트 지급,
            포인트 쇼핑 기능을 제공하는
            사용자 서비스 구현
            `,

        tech: [
            "Spring Boot",
            "React",
            "REST API",
            "MariaDB"
        ],

        image: `${import.meta.env.BASE_URL}projects/dr.png`
    },

    {
        title: "현장 설치 작업자 모바일 웹",

        category: "Mobile Web",

        // period: "AMI 구축 프로젝트",

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
        ],

        image: `${import.meta.env.BASE_URL}projects/worker.png`


    },


];


export default projects;