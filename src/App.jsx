import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from './data';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { MdOutlineWbSunny, MdDarkMode } from 'react-icons/md'; // 아이콘 추가
import './App.css';

function App() {
    // 1. 기본 테마 상태 (true: 다크모드, false: 라이트모드)
    const [darkMode, setDarkMode] = useState(true);

    // 2. darkMode 상태가 바뀔 때마다 html의 data-theme 속성 변경
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', darkMode ? 'dark' : 'light');
    }, [darkMode]);

    // 3. 버튼 클릭 시 테마 전환 함수
    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="app">
            {/* 다크/라이트 모드 토글 버튼 */}
            <button
                className="theme-toggle-btn"
                onClick={toggleTheme}
                aria-label="Toggle Theme"
            >
                {darkMode ? <MdOutlineWbSunny size={22} /> : <MdDarkMode size={22} />}
            </button>

            <Header profile={PORTFOLIO_DATA.profile} />
            <main>
                <Skills skills={PORTFOLIO_DATA.skills} />
                <Projects projects={PORTFOLIO_DATA.projects} />
            </main>
            <footer>
                <p>© 2026 {PORTFOLIO_DATA.profile.name}. All rights reserved.</p>
            </footer>
        </div>
    );
}

export default App;