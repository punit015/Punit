import React, { useState } from 'react';
import { ExternalLink, Github, Play, Code, Zap, Shield, Database } from 'lucide-react';
import GlitchText from './GlitchText';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: 'NEURAL_NETWORK_DASHBOARD',
      category: 'AI/ML Platform',
      description: 'Advanced machine learning dashboard with real-time data visualization and model training capabilities.',
      tech: ['React', 'Python', 'TensorFlow', 'WebSocket', 'D3.js'],
      features: [
        'Real-time ML model training',
        'Interactive data visualization',
        'Custom neural network architect',
        'Performance metrics tracking'
      ],
      status: 'DEPLOYED',
      github: 'https://github.com',
      live: 'https://demo.com',
      icon: Zap
    },
    {
      id: 2,
      title: 'CYBER_SECURITY_TOOLKIT',
      category: 'Security Application',
      description: 'Comprehensive cybersecurity toolkit for vulnerability assessment and penetration testing.',
      tech: ['Node.js', 'Express', 'MongoDB', 'React', 'Docker'],
      features: [
        'Automated vulnerability scanning',
        'Network penetration testing',
        'Security report generation',
        'Real-time threat monitoring'
      ],
      status: 'ACTIVE',
      github: 'https://github.com',
      live: 'https://demo.com',
      icon: Shield
    },
    {
      id: 3,
      title: 'BLOCKCHAIN_EXPLORER',
      category: 'Web3 Application',
      description: 'Full-featured blockchain explorer with transaction analysis and smart contract interaction.',
      tech: ['Next.js', 'Web3.js', 'Ethereum', 'GraphQL', 'PostgreSQL'],
      features: [
        'Transaction history tracking',
        'Smart contract verification',
        'Wallet address analysis',
        'DeFi protocol integration'
      ],
      status: 'BETA',
      github: 'https://github.com',
      live: 'https://demo.com',
      icon: Database
    },
    {
      id: 4,
      title: 'QUANTUM_CODE_EDITOR',
      category: 'Development Tool',
      description: 'Next-generation code editor with AI-powered suggestions and collaborative features.',
      tech: ['Electron', 'Monaco Editor', 'WebSocket', 'AI/ML', 'Node.js'],
      features: [
        'AI-powered code completion',
        'Real-time collaboration',
        'Syntax highlighting for 50+ languages',
        'Integrated terminal and debugger'
      ],
      status: 'DEVELOPMENT',
      github: 'https://github.com',
      live: null,
      icon: Code
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'DEPLOYED': return 'text-green-400';
      case 'ACTIVE': return 'text-cyan-400';
      case 'BETA': return 'text-yellow-400';
      case 'DEVELOPMENT': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const currentProject = projects[selectedProject];

  return (
    <div className="min-h-screen p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <GlitchText 
            text="PROJECT_PORTFOLIO.exe" 
            className="text-3xl md:text-4xl font-bold text-green-400 mb-4"
          />
          <div className="text-cyan-400 font-mono">
            <span className="animate-pulse">&gt;</span> Loading project archives...
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project List */}
          <div className="lg:col-span-1">
            <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-4 backdrop-blur-sm">
              <h3 className="text-cyan-400 font-mono font-bold mb-4">PROJECT_LIST</h3>
              
              <div className="space-y-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setSelectedProject(index)}
                    className={`w-full text-left p-3 rounded border transition-all duration-300 ${
                      selectedProject === index
                        ? 'border-green-400 bg-green-400 bg-opacity-10'
                        : 'border-gray-700 hover:border-cyan-400 hover:bg-gray-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white font-mono text-sm font-semibold">
                        {project.title}
                      </span>
                      <span className={`text-xs font-mono ${getStatusColor(project.status)}`}>
                        ● {project.status}
                      </span>
                    </div>
                    <div className="text-gray-400 text-xs font-mono">
                      {project.category}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="lg:col-span-2">
            <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
              {/* Project Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  {React.createElement(currentProject.icon, {
                    className: 'text-green-400',
                    size: 28
                  })}
                  <div>
                    <h2 className="text-2xl font-bold text-white font-mono">
                      {currentProject.title}
                    </h2>
                    <p className="text-cyan-400 text-sm font-mono">
                      {currentProject.category}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`px-3 py-1 rounded text-xs font-mono border ${getStatusColor(currentProject.status)} border-current`}>
                    {currentProject.status}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-cyan-400 font-mono font-bold mb-3">DESCRIPTION</h3>
                <p className="text-green-300 leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h3 className="text-cyan-400 font-mono font-bold mb-3">TECH_STACK</h3>
                <div className="flex flex-wrap gap-2">
                  {currentProject.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800 border border-gray-600 rounded text-green-400 text-sm font-mono hover:border-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h3 className="text-cyan-400 font-mono font-bold mb-3">KEY_FEATURES</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm">
                      <span className="text-green-400">▶</span>
                      <span className="text-green-300 font-mono">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded hover:border-green-400 hover:bg-gray-700 transition-all duration-300 text-green-400"
                >
                  <Github size={16} />
                  <span className="font-mono text-sm">SOURCE_CODE</span>
                </a>
                
                {currentProject.live && (
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-500 rounded text-black transition-colors font-mono text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>LIVE_DEMO</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Command Output */}
        <div className="mt-8 bg-black bg-opacity-80 border border-green-600 rounded-lg p-4 font-mono text-sm">
          <div className="text-cyan-400 mb-2">$ ls -la /projects/{currentProject.title.toLowerCase()}/</div>
          <div className="text-green-300 space-y-1">
            <div>-rw-r--r-- 1 dev dev  4096 Jan 15 2024 README.md</div>
            <div>-rw-r--r-- 1 dev dev  2048 Jan 15 2024 package.json</div>
            <div>drwxr-xr-x 2 dev dev  4096 Jan 15 2024 src/</div>
            <div>drwxr-xr-x 2 dev dev  4096 Jan 15 2024 tests/</div>
            <div className="text-cyan-400">Total projects: {projects.length} | Active development: 24/7</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;