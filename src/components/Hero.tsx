import React, { useState, useEffect } from 'react';
import { Terminal, Code, Zap } from 'lucide-react';
import GlitchText from './GlitchText';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [currentCommand, setCurrentCommand] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  const commands = [
    'whoami',
    'ls -la /skills',
    'cat portfolio.txt',
    'grep -i "awesome" projects/*',
    'sudo make-me-a-sandwich'
  ];

  const responses = {
    'whoami': 'elite_developer',
    'ls -la /skills': 'JavaScript React Node.js Python Docker AWS',
    'cat portfolio.txt': 'Full-stack developer with 5+ years experience',
    'grep -i "awesome" projects/*': 'All projects contain awesome code',
    'sudo make-me-a-sandwich': 'Error: Must hire me first'
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        const randomCommand = commands[Math.floor(Math.random() * commands.length)];
        typeCommand(randomCommand);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isTyping, commandHistory]);

  const typeCommand = async (command: string) => {
    setIsTyping(true);
    setCurrentCommand('');
    
    for (let i = 0; i <= command.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
      setCurrentCommand(command.slice(0, i));
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setCommandHistory(prev => [...prev, `$ ${command}`, responses[command as keyof typeof responses] || 'Command not found']);
    setCurrentCommand('');
    setIsTyping(false);
  };

  const navigationCommands = [
    { cmd: 'cd /about', section: 'about', desc: 'Learn about me' },
    { cmd: 'ls /skills', section: 'skills', desc: 'View my skills' },
    { cmd: 'cat /projects', section: 'projects', desc: 'See my work' },
    { cmd: 'mail -s contact', section: 'contact', desc: 'Get in touch' }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* ASCII Art Header */}
        <div className="text-center mb-8">
          <pre className="text-green-400 text-xs md:text-sm font-mono leading-tight">
{`
██████╗ ██╗   ██╗███╗   ██╗██╗████████╗     ██████╗ 
██╔══██╗██║   ██║████╗  ██║██║╚══██╔══╝     ██╔══██╗
██████╔╝██║   ██║██╔██╗ ██║██║   ██║        ██║  ██║
██╔═══╝ ██║   ██║██║╚██╗██║██║   ██║        ██║  ██║
██║     ╚██████╔╝██║ ╚████║██║   ██║        ██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═══╝╚═╝   ╚═╝        ╚═════╝ 

`}
          </pre>
        </div>

        {/* Main Terminal */}
        <div className="bg-black bg-opacity-80 border border-green-400 rounded p-6 shadow-2xl backdrop-blur-sm">
          <div className="flex items-center mb-4">
            <Terminal className="text-green-400 mr-2" size={20} />
            <span className="text-green-400">root@portfolio:~#</span>
          </div>

          {/* Command History */}
          <div className="mb-6 max-h-40 overflow-y-auto">
            {commandHistory.map((line, index) => (
              <div key={index} className={`mb-1 ${line.startsWith('$') ? 'text-cyan-400' : 'text-green-300'}`}>
                {line}
              </div>
            ))}
          </div>

          {/* Current Command */}
          <div className="flex items-center mb-6">
            <span className="text-cyan-400 mr-2">$</span>
            <span className="text-white">{currentCommand}</span>
            <span className={`ml-1 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
              _
            </span>
          </div>

          {/* Welcome Message */}
          <div className="mb-8 text-center">
            <GlitchText text="WELCOME TO MY DIGITAL DOMAIN" className="text-2xl md:text-3xl font-bold mb-4" />
            <p className="text-green-300 mb-2">System initialized. Hacker mode: ACTIVE</p>
            <p className="text-cyan-400">Select navigation protocol:</p>
          </div>

          {/* Navigation Commands */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {navigationCommands.map((nav, index) => (
              <button
                key={index}
                onClick={() => onNavigate(nav.section)}
                className="group bg-gray-900 border border-green-600 rounded p-4 hover:border-cyan-400 hover:bg-gray-800 transition-all duration-300 text-left"
              >
                <div className="flex items-center mb-2">
                  <Code className="text-green-400 mr-2 group-hover:text-cyan-400 transition-colors" size={16} />
                  <code className="text-cyan-400 group-hover:text-white transition-colors">
                    {nav.cmd}
                  </code>
                </div>
                <p className="text-gray-400 text-sm group-hover:text-green-300 transition-colors">
                  {nav.desc}
                </p>
              </button>
            ))}
          </div>

          {/* Status Bar */}
          <div className="border-t border-green-600 pt-4 flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-green-400">STATUS: ONLINE</span>
              <span className="text-cyan-400">SECURITY: MAXIMUM</span>
            </div>
            <div className="flex items-center">
              <Zap className="text-yellow-400 mr-1" size={16} />
              <span className="text-yellow-400">POWERED BY CAFFEINE</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-green-600 text-sm">
          <p>&gt; Access granted. Welcome to the matrix.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
