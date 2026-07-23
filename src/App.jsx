import { useState, useEffect } from 'react';
import './App.css';

function App() {
    // 디폴트를 false(라이트 모드)로 설정
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    // 스크롤 이동 함수
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            // 상단 헤더 높이(약 70px)만큼 빼고 스크롤하기 위한 처리
            const headerOffset = 70;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="app">
            {/* 상단 네비게이션 바 */}
            <header className="navbar">
                <div className="nav-container">
                    <div className="logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        이호성
                    </div>
                    <nav className="nav-links">
                        <button onClick={() => scrollToSection('about')}>소개</button>
                        <button onClick={() => scrollToSection('skills')}>기술</button>
                        <button onClick={() => scrollToSection('projects')}>프로젝트</button>
                        <button onClick={() => scrollToSection('contact')}>연락처</button>
                        <button className="theme-toggle-btn" onClick={() => setDarkMode(!darkMode)}>
                            {darkMode ? '🌙' : '☀️'}
                        </button>
                    </nav>
                </div>
            </header>

            <main className="main-content">
                {/* 메인 히어로 섹션 */}
                <section id="hero" className="hero-section">
                    <span className="badge">✦ Web Developer</span>
                    <h1>
                        안녕하세요,<br />
                        <span className="highlight">이호성</span> 입니다.
                    </h1>
                    <p className="hero-subtitle">안정적이고 유연한 웹 환경을 만드는 5년 차 웹 개발자입니다.</p>
                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={() => scrollToSection('projects')}>프로젝트 보기 →</button>
                        <button className="btn-secondary" onClick={() => scrollToSection('contact')}>연락하기</button>
                    </div>
                </section>

                {/* 소개 섹션 */}
                <section id="about" className="section">
                    <h2 className="section-title">ABOUT</h2>
                    <p className="about-text">
                        사용자 경험(UX)과 개발자 경험(DX)을 모두 고려한 프론트엔드 아키텍처 설계에 관심이 많습니다.
                        다양한 웹 어플리케이션을 개발하고 운영하며, 컴포넌트 재사용성과 데이터 정합성을 중요하게 생각합니다.
                    </p>
                </section>

                {/* 기술 스택 섹션 */}
                <section id="skills" className="section">
                    <h2 className="section-title">SKILLS</h2>

                    <div className="skill-category">
                        <h3>Frontend</h3>
                        <div className="tags">
                            <span className="tag-pill">React</span>
                            <span className="tag-pill">JavaScript (ES6+)</span>
                            <span className="tag-pill">HTML/CSS</span>
                            {/* 필요한 스킬 추가 */}
                        </div>
                    </div>

                    <div className="skill-category">
                        <h3>Tools & Others</h3>
                        <div className="tags">
                            <span className="tag-pill">Git</span>
                            <span className="tag-pill">GitHub</span>
                            <span className="tag-pill">Figma</span>
                        </div>
                    </div>
                </section>

                {/* 프로젝트 섹션 */}
                <section id="projects" className="section">
                    <h2 className="section-title">PROJECTS</h2>

                    <div className="projects-list">
                        {/* 프로젝트 카드 1 */}
                        <div className="project-card-modern">
                            <h3 className="project-name">사내 어드민 대시보드 리뉴얼</h3>
                            <span className="project-role">프론트엔드 개발</span>
                            <p className="project-desc">
                                기존 레거시 시스템을 React 기반으로 재구축하여 로딩 속도를 개선하고 UI/UX를 고도화했습니다.
                            </p>
                            <div className="tags">
                                <span className="tag-pill-blue">React</span>
                                <span className="tag-pill-blue">Vite</span>
                            </div>
                        </div>

                        {/* 프로젝트 카드 2 */}
                        <div className="project-card-modern">
                            <h3 className="project-name">포트폴리오 웹사이트</h3>
                            <span className="project-role">개인 프로젝트</span>
                            <p className="project-desc">
                                다크모드와 반응형 디자인이 적용된 개인 포트폴리오 웹사이트입니다.
                            </p>
                            <div className="tags">
                                <span className="tag-pill-blue">React</span>
                                <span className="tag-pill-blue">CSS Variables</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 연락처 섹션 */}
                <section id="contact" className="section">
                    <h2 className="section-title">CONTACT</h2>
                    <div className="contact-buttons">
                        <a href="mailto:이메일주소@gmail.com" className="btn-contact">✉️ email@gmail.com</a>
                        <a href="https://github.com/tmvkrpdla" target="_blank" rel="noopener noreferrer" className="btn-contact">GitHub</a>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default App;