import React from 'react';
import { PORTFOLIO_DATA } from './data';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import './App.css';

function App() {
  return (
      <div className="app">
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