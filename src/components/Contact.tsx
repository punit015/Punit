import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Phone, MapPin, Clock } from 'lucide-react';
import GlitchText from './GlitchText';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    setTimeout(() => setSubmitStatus('idle'), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'EMAIL_PROTOCOL',
      value: 'elite.dev@matrix.net',
      description: 'Primary communication channel'
    },
    {
      icon: Phone,
      label: 'VOICE_CHANNEL',
      value: '+1 (555) HACKER-1',
      description: 'Emergency contact only'
    },
    {
      icon: MapPin,
      label: 'LOCATION_DATA',
      value: 'Cyberspace, Matrix-7',
      description: 'Remote accessibility'
    },
    {
      icon: Clock,
      label: 'AVAILABILITY',
      value: '24/7 (GMT+0)',
      description: 'Always online'
    }
  ];

  return (
    <div className="min-h-screen p-6 pt-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <GlitchText 
            text="CONTACT_INTERFACE.dll" 
            className="text-3xl md:text-4xl font-bold text-green-400 mb-4"
          />
          <div className="text-cyan-400 font-mono">
            <span className="animate-pulse">&gt;</span> Establishing secure communication channel...
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center mb-6">
              <MessageSquare className="text-green-400 mr-3" size={24} />
              <h2 className="text-xl font-bold text-cyan-400 font-mono">MESSAGE_TRANSMITTER</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-green-400 text-sm font-mono mb-2">
                    SENDER_NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="Enter your handle..."
                  />
                </div>
                
                <div>
                  <label className="block text-green-400 text-sm font-mono mb-2">
                    EMAIL_ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-green-400 text-sm font-mono mb-2">
                  MESSAGE_SUBJECT *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors"
                  placeholder="Project inquiry / Collaboration / Other"
                />
              </div>

              <div>
                <label className="block text-green-400 text-sm font-mono mb-2">
                  MESSAGE_BODY *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full bg-gray-900 border border-gray-600 rounded px-3 py-2 text-white font-mono focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                  placeholder="Enter your message... Be specific about your requirements."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center space-x-2 py-3 rounded font-mono transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-500'
                    : 'bg-cyan-600 hover:bg-cyan-500'
                } text-black`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent"></div>
                    <span>TRANSMITTING...</span>
                  </>
                ) : submitStatus === 'success' ? (
                  <>
                    <span>✓ MESSAGE_SENT</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>SEND_MESSAGE</span>
                  </>
                )}
              </button>
            </form>

            {submitStatus === 'success' && (
              <div className="mt-4 p-3 bg-green-900 bg-opacity-50 border border-green-600 rounded">
                <p className="text-green-400 font-mono text-sm">
                  ✓ Message transmitted successfully. Response ETA: 24 hours.
                </p>
              </div>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-cyan-400 mb-6 font-mono">CONTACT_PROTOCOLS</h2>
              
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start space-x-3 p-3 bg-gray-900 bg-opacity-50 rounded border border-gray-700 hover:border-cyan-400 transition-colors">
                      <Icon className="text-green-400 mt-1" size={20} />
                      <div>
                        <h3 className="text-white font-mono font-semibold">{method.label}</h3>
                        <p className="text-cyan-400 font-mono">{method.value}</p>
                        <p className="text-gray-400 text-sm font-mono">{method.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Status Panel */}
            <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-cyan-400 mb-6 font-mono">SYSTEM_STATUS</h2>
              
              <div className="space-y-3 font-mono text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Connection Status:</span>
                  <span className="text-green-400 animate-pulse">● ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time:</span>
                  <span className="text-cyan-400">&lt; 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability:</span>
                  <span className="text-green-400">READY FOR HIRE</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Security Level:</span>
                  <span className="text-yellow-400">MAXIMUM</span>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-black bg-opacity-60 border border-green-600 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-xl font-bold text-cyan-400 mb-4 font-mono">QUICK_ACCESS</h2>
              
              <div className="space-y-3">
                <a
                  href="mailto:elite.dev@matrix.net"
                  className="flex items-center space-x-2 p-3 bg-gray-900 border border-gray-700 rounded hover:border-green-400 hover:bg-gray-800 transition-all duration-300 text-green-400"
                >
                  <Mail size={16} />
                  <span className="font-mono text-sm">SEND_EMAIL</span>
                </a>
                
                <button className="w-full flex items-center space-x-2 p-3 bg-cyan-600 hover:bg-cyan-500 rounded transition-colors text-black font-mono text-sm">
                  <Phone size={16} />
                  <span>SCHEDULE_CALL</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Command Output */}
        <div className="mt-8 bg-black bg-opacity-80 border border-green-600 rounded-lg p-4 font-mono text-sm">
          <div className="text-cyan-400 mb-2">$ netstat -an | grep :443</div>
          <div className="text-green-300 space-y-1">
            <div>tcp    0    0 0.0.0.0:443    0.0.0.0:*    LISTEN</div>
            <div>tcp    0    0 127.0.0.1:443  127.0.0.1:*  ESTABLISHED</div>
            <div className="text-cyan-400">Secure communication channel ready. Encryption: AES-256</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;