import React, { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  glitchIntensity?: 'low' | 'medium' | 'high';
}

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = '', 
  glitchIntensity = 'medium' 
}) => {
  const [isGlitching, setIsGlitching] = useState(false);
  const [glitchedText, setGlitchedText] = useState(text);

  const glitchChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~`';
  
  const getGlitchInterval = () => {
    switch (glitchIntensity) {
      case 'low': return 5000;
      case 'high': return 1000;
      default: return 3000;
    }
  };

  const glitchText = (originalText: string) => {
    return originalText
      .split('')
      .map(char => {
        if (Math.random() < 0.1 && char !== ' ') {
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }
        return char;
      })
      .join('');
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      
      // Multiple glitch phases
      let phase = 0;
      const glitchPhases = setInterval(() => {
        if (phase < 3) {
          setGlitchedText(glitchText(text));
          phase++;
        } else {
          setGlitchedText(text);
          setIsGlitching(false);
          clearInterval(glitchPhases);
        }
      }, 50);
      
    }, getGlitchInterval());

    return () => clearInterval(interval);
  }, [text, glitchIntensity]);

  return (
    <span 
      className={`${className} ${isGlitching ? 'glitch-text' : ''} relative inline-block`}
      data-text={text}
    >
      {glitchedText}
    </span>
  );
};

export default GlitchText;