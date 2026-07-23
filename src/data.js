export const PORTFOLIO_DATA = {
    profile: {
        name: "이호성",
        title: "Web Developer",
        bio: "5년 차 웹개발자 이호성입니다. 안정적이고 확장 가능한 Web Application 구축에 관심이 많습니다.",
        email: "tmvkr0723@gmail.com", // 본인 이메일로 수정
        github: "https://github.com/tmvkr", // 본인 GitHub 주소로 수정
        blog: "https://velog.io", // 블로그나 링크드인이 있다면 추가
    },
    skills: [
        { name: "JavaScript / ES6+", level: "Advanced" },
        { name: "React.js", level: "Intermediate" },
        { name: "HTML5 / CSS3", level: "Advanced" },
        { name: "Git / GitHub", level: "Advanced" },
    ],
    experience: [
        {
            period: "2022 - Present",
            role: "Web Developer",
            company: "Company Name",
            description: "웹 서비스 개발 및 UI/UX 개선, 프론트엔드 성능 최적화 진행."
        }
    ],
    projects: [
        {
            id: 1,
            title: "개인 포트폴리오 웹사이트",
            description: "React와 Vite를 활용하여 제작한 반응형 개인 포트폴리오입니다.",
            techStack: ["React", "Vite", "CSS Modules"],
            githubLink: "https://github.com/tmvkr/lhs-portfolio",
            demoLink: "",
        },
        // 필요 시 프로젝트 추가
    ]
};