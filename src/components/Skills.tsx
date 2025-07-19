import React, { useState } from 'react';
import { Code, Database, Cloud, Shield, Zap, Cpu } from 'lucide-react';
import GlitchText from './GlitchText';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: Code,
      title: 'FRONTEND_STACK',
      color: 'text-cyan-400',
      skills: [
        { name: 'React/Next.js', level: 95, experience: '4 years' },
        { name: 'TypeScript', level: 90, experience: '3 years' },
        { name: 'Vue.js', level: 85, experience: '2 years' },
        { name: 'Tailwind CSS', level: 92, experience: '3 years' },
        { name: 'SASS/SCSS', level: 88, experience: '4 years' },
        { name: 'Three.js/WebGL', level: 75, experience: '1 year' }
      ]
    },
    backend: {
      icon: Database,
      title: 'BACKEND_CORE',
      color: 'text-green-400',
      skills: [
        { name: 'Node.js', level: 93, experience: '4 years' },
        { name: 'Python/Django', level: 87, experience: '3 years' },
        { name: 'PostgreSQL', level: 89, experience: '4 years' },
        { name: 'MongoDB', level: 84, experience: '2 years' },
        { name: 'Redis', level: 81, experience: '2 years' },
        { name: 'GraphQL', level: 78, experience: '1 year' }
      ]
    },
    devops: {
      icon: Cloud,
      title: 'DEVOPS_PROTOCOL',
      color: 'text-yellow-400',
      skills: [
        { name: 'Docker', level: 88, experience: '3 years' },
        { name: 'AWS/GCP', level: 82, experience: '2 years' },
        { name: 'Kubernetes', level: 75, experience: '1 year' },
        { name: 'CI/CD', level: 86, experience: '3 years' },
        { name: 'Terraform', level: 71, experience: '1 year' },
        { name: 'Nginx', level: 83, experience: '2 years' }
      ]
    },
    security: {
      icon: Shield,
      title: 'SECURITY_MODULE',
      color: 'text-red-400',
      skills: [
        { name: 'JWT/OAuth', level: 89, experience: '3 years' },
        { name: 'OWASP Top 10', level: 85, experience: '2 years' },
        { name: 'SSL/TLS', level: 82, experience: '2 years' },
        { name: 'Penetration Testing', level: 73, experience: '1 year' },
        { name: 'Encryption', level: 79, experience: '2 years' },
        { name: 'Security Auditing', level: 76, experience: '1 year' }
      ]
    }
  };

  const getSkillBar = (level: number) => {
    return (
      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-green-600 to-cyan-400 rounded-full transition-all duration-1000 relative"
          style={{ width: `${level}%` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <GlitchText 
            text="SKILL_MATRIX.dll" 
            className="text-3xl md:text-4xl font-bold text-green-400 mb-4"
          />
          <div className="text-cyan-400 font-mono">
            <span className="animate-pulse">&gt;</span> Analyzing technical proficiencies...
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 font-mono ${
                  activeCategory === key
                    ? `border-green-400 bg-green-400 bg-opacity-10 ${category.color}`
                    : 'border-gray-600 text-gray-400 hover:border-green-600 hover:text-green-400'
                }`}
              >
                <Icon size={20} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display */}
        <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
          <div className="flex items-center mb-6">
            {React.createElement(skillCategories[activeCategory as keyof typeof skillCategories].icon, {
              className: `${skillCategories[activeCategory as keyof typeof skillCategories].color} mr-3`,
              size: 24
            })}
            <h2 className={`text-2xl font-bold font-mono ${skillCategories[activeCategory as keyof typeof skillCategories].color}`}>
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <div key={index} className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded-lg p-4 hover:border-cyan-400 transition-all duration-300">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-white font-mono font-semibold">{skill.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-green-400 font-mono text-sm">{skill.level}%</span>
                    <Cpu className="text-cyan-400" size={16} />
                  </div>
                </div>
                
                {getSkillBar(skill.level)}
                
                <div className="flex justify-between items-center mt-2">
                  <span className="text-gray-400 text-xs font-mono">Experience: {skill.experience}</span>
                  <div className="flex space-x-1">
                    {[...Array(Math.floor(skill.level / 20))].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Command Output */}
        <div className="mt-8 bg-black bg-opacity-80 border border-green-600 rounded-lg p-4 font-mono text-sm">
          <div className="text-cyan-400 mb-2">$ system --performance-report</div>
          <div className="text-green-300 space-y-1">
            <div>[INFO] All systems operational</div>
            <div>[INFO] Learning algorithms active</div>
            <div>[INFO] Skill optimization: 24/7</div>
            <div className="text-yellow-400">[WARN] Coffee levels critical - refill recommended</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;