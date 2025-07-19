import React from 'react';
import { User, Calendar, MapPin, Coffee, Zap } from 'lucide-react';
import GlitchText from './GlitchText';

const About: React.FC = () => {
  const stats = [
    { label: 'Years of Experience', value: '5+', icon: Calendar },
    { label: 'Projects Completed', value: '50+', icon: Zap },
    { label: 'Cups of Coffee', value: '∞', icon: Coffee },
    { label: 'Current Location', value: 'The Matrix', icon: MapPin }
  ];

  const skills = [
    'Full-Stack Development',
    'System Architecture',
    'Database Design',
    'Cloud Computing',
    'Security Implementation',
    'Performance Optimization'
  ];

  return (
    <div className="min-h-screen p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <GlitchText 
            text="IDENTITY_PROTOCOL.exe" 
            className="text-3xl md:text-4xl font-bold text-green-400 mb-4"
          />
          <div className="text-cyan-400 font-mono">
            <span className="animate-pulse">&gt;</span> Accessing personal data...
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Section */}
          <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <User className="text-green-400 mr-3" size={24} />
              <h2 className="text-xl font-bold text-cyan-400">PROFILE_DATA</h2>
            </div>

            <div className="space-y-4 font-mono">
              <div className="border-l-2 border-green-600 pl-4">
                <span className="text-green-400">Name:</span>
                <span className="text-white ml-2">Elite Developer</span>
              </div>
              
              <div className="border-l-2 border-green-600 pl-4">
                <span className="text-green-400">Role:</span>
                <span className="text-white ml-2">Full-Stack Engineer</span>
              </div>
              
              <div className="border-l-2 border-green-600 pl-4">
                <span className="text-green-400">Specialization:</span>
                <span className="text-white ml-2">Modern Web Technologies</span>
              </div>
              
              <div className="border-l-2 border-green-600 pl-4">
                <span className="text-green-400">Status:</span>
                <span className="text-green-300 ml-2 animate-pulse">● AVAILABLE FOR HIRE</span>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6 p-4 bg-gray-900 bg-opacity-50 rounded border border-gray-700">
              <h3 className="text-cyan-400 font-mono mb-3"># BIOGRAPHY</h3>
              <p className="text-green-300 text-sm leading-relaxed">
                Passionate developer with expertise in crafting robust, scalable applications. 
                I thrive in the digital realm, transforming complex problems into elegant solutions. 
                My code doesn't just work—it evolves, adapts, and pushes boundaries.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="space-y-6">
            <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-cyan-400 mb-6 font-mono">SYSTEM_STATS</h2>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded p-4 hover:border-cyan-400 transition-colors">
                      <div className="flex items-center mb-2">
                        <Icon className="text-green-400 mr-2" size={16} />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Skills Preview */}
            <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-cyan-400 mb-6 font-mono">CORE_MODULES</h2>
              
              <div className="space-y-2">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-3 text-sm">
                    <span className="text-green-400">[✓]</span>
                    <span className="text-green-300 font-mono">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Command Output */}
        <div className="mt-8 bg-black bg-opacity-80 border border-green-600 rounded-lg p-4 font-mono text-sm">
          <div className="text-cyan-400 mb-2">$ cat /etc/motd</div>
          <div className="text-green-300">
            <pre>{`
╔══════════════════════════════════════════════════════════════╗
║  WELCOME TO THE DEVELOPER MATRIX                             ║
║  ────────────────────────────────────────────────────────────║
║  "In a world of algorithms, be the exception handler."      ║
║                                                              ║
║  Ready to collaborate? Initialize contact protocol...       ║
╚══════════════════════════════════════════════════════════════╝`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;