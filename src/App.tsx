import React, { useState, useEffect } from 'react';
import Hero from './components/Hero';
import Terminal from './components/Terminal';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MatrixBackground from './components/MatrixBackground';
import './styles/animations.css';

function App() {
  const [currentSection, setCurrentSection] = useState('hero');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className={`min-h-screen bg-black text-green-400 font-mono overflow-hidden relative transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <MatrixBackground />
      
      {/* Scanlines effect */}
      <div className="fixed inset-0 pointer-events-none z-50">
        <div className="scanlines"></div>
      </div>

      {/* CRT effect */}
      <div className="fixed inset-0 pointer-events-none z-40">
        <div className="crt-effect"></div>
      </div>

      <div className="relative z-10">
        {currentSection !== 'hero' && (
          <Terminal onNavigate={setCurrentSection} currentSection={currentSection} />
        )}
        
        <main className={`transition-all duration-500 ${currentSection !== 'hero' ? 'pt-16' : ''}`}>
          {renderSection()}
        </main>
      </div>

      {/* Glitch overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 glitch-overlay"></div>
    </div>
  );
}

export default App;