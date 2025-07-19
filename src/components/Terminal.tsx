import React, { useState } from 'react';
import { ChevronRight, Home, User, Code2, Briefcase, Mail, X } from 'lucide-react';

interface TerminalProps {
  onNavigate: (section: string) => void;
  currentSection: string;
}

const Terminal: React.FC<TerminalProps> = ({ onNavigate, currentSection }) => {
  const [isMinimized, setIsMinimized] = useState(false);

  const navigationItems = [
    { id: 'hero', label: 'HOME', icon: Home, cmd: 'cd ~' },
    { id: 'about', label: 'ABOUT', icon: User, cmd: 'whoami' },
    { id: 'skills', label: 'SKILLS', icon: Code2, cmd: 'ls /skills' },
    { id: 'projects', label: 'PROJECTS', icon: Briefcase, cmd: 'cat /projects' },
    { id: 'contact', label: 'CONTACT', icon: Mail, cmd: 'ping contact' }
  ];

  if (isMinimized) {
    return (
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsMinimized(false)}
          className="bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded font-mono text-sm transition-colors"
        >
          TERMINAL_
        </button>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-black bg-opacity-95 border-b border-green-400 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Terminal Header */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-green-400 font-mono text-sm">
              root@portfolio:/{currentSection}#
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentSection === item.id;
              
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`group flex items-center space-x-2 px-3 py-2 rounded transition-all duration-300 ${
                    isActive 
                      ? 'bg-green-600 text-black' 
                      : 'text-green-400 hover:bg-green-900 hover:text-cyan-400'
                  }`}
                  title={item.cmd}
                >
                  <Icon size={16} />
                  <span className="hidden md:inline font-mono text-xs">
                    {item.label}
                  </span>
                  {isActive && (
                    <ChevronRight size={12} className="animate-pulse" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Controls */}
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsMinimized(true)}
              className="text-green-400 hover:text-yellow-400 transition-colors"
              title="Minimize"
            >
              <span className="font-mono text-lg">-</span>
            </button>
            <button
              onClick={() => onNavigate('hero')}
              className="text-green-400 hover:text-red-400 transition-colors"
              title="Exit to main"
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Command Line Indicator */}
        <div className="pb-2">
          <div className="flex items-center text-xs font-mono text-cyan-400">
            <span className="mr-2">$</span>
            <span className="typing-animation">
              {navigationItems.find(item => item.id === currentSection)?.cmd || 'ls'}
            </span>
            <span className="animate-pulse ml-1 bg-cyan-400 w-2 h-4 inline-block"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;