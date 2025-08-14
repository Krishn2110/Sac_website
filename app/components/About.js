
// AboutPage.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import './About.css';
import localFont from "next/font/local";
import { FaLaptopCode, FaPaintBrush, FaChartLine, FaHandsHelping, FaFutbol, FaBookOpen } from 'react-icons/fa';

const activities = [
  {
    icon: <FaLaptopCode className="w-12 h-12 text-neon-green" />,
    title: 'Tech & Innovation',
    desc: 'Hackathons, coding workshops, and tech talks',
    color: '#00ffcc',
    // image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqZVFllErV6i6RT7VFB4CiO6HbLwiOtfg5pw&s',
    image: '../images/technology.png',
  },
  {
    icon: <FaPaintBrush className="w-12 h-12 text-neon-blue" />,
    title: 'Arts & Culture',
    desc: 'Art exhibitions, music performances, and cultural events',
    color: '#00e0b0',
    image: '../images/Artist.png',
  },
  {
    icon: <FaChartLine className="w-12 h-12 text-neon-pink" />,
    title: 'Leadership & Business',
    desc: 'Startup incubator, pitch competitions, and networking events',
    color: '#00b8a9',
    image: '../images/business.png',
  },
  {
    icon: <FaHandsHelping className="w-12 h-12 text-neon-purple" />,
    title: 'Community Service',
    desc: 'Volunteer programs and social impact initiatives',
    color: '#0ff',
    image: '../images/community.png',
  },
  {
    icon: <FaFutbol className="w-12 h-12 text-neon-orange" />,
    title: 'Sports & Wellness',
    desc: 'Fitness classes, intramural sports, and wellness workshops',
    color: '#0af',
    image: '../images/sport.png',
  },
  {
    icon: <FaBookOpen className="w-12 h-12 text-neon-yellow" />,
    title: 'Academic Support',
    desc: 'Tutoring, study groups, and research opportunities',
    color: '#0cf',
    image: '../images/academic.png',
  }
];


const DeliusRegular = localFont({
  src: [
    {
      path: '../fonts/Delius-Regular.ttf',
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-delius-regular",
  display: "swap",
});

const AboutPage = () => {
  const particlesRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const container = particlesRef.current;
    if (!container) return;

    // Enhanced particle creation with physics simulation
    const createParticle = () => {
      const particle = document.createElement('div');
      const size = Math.random() * 4 + 1;
      const startX = Math.random() * container.clientWidth;
      const startY = Math.random() * container.clientHeight;
      
      // Particle physics properties
      let velocityX = (Math.random() - 0.5) * 0.8;
      let velocityY = (Math.random() - 0.5) * 0.8;
      const rotation = Math.random() * 360;
      const rotationSpeed = (Math.random() - 0.5) * 2;
      
      // Random neon color
      const colors = ['#00ffcc', '#00e0b0', '#00b8a9', '#0ff', '#0af'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: ${color};
        border-radius: 50%;
        top: ${startY}px;
        left: ${startX}px;
        opacity: ${Math.random() * 0.7 + 0.3};
        filter: blur(${Math.random() * 2 + 1}px);
        box-shadow: 0 0 ${Math.random() * 5 + 5}px ${color};
      `;
      
      container.appendChild(particle);
      
      // Physics simulation
      let x = startX;
      let y = startY;
      let currentRotation = rotation;
      
      const moveParticle = () => {
        x += velocityX;
        y += velocityY;
        currentRotation += rotationSpeed;
        
        // Bounce off edges
        if (x < 0 || x > container.clientWidth) velocityX *= -0.8;
        if (y < 0 || y > container.clientHeight) velocityY *= -0.8;
        
        particle.style.transform = `translate(${x}px, ${y}px) rotate(${currentRotation}deg)`;
        
        // Continue animation if particle is still in view
        if (Math.abs(velocityX) > 0.01 || Math.abs(velocityY) > 0.01) {
          requestAnimationFrame(moveParticle);
        }
      };
      
      requestAnimationFrame(moveParticle);
      
      // Remove particle after delay
      setTimeout(() => {
        particle.style.opacity = '0';
        setTimeout(() => particle.remove(), 1000);
      }, (Math.random() * 15 + 10) * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 100; i++) createParticle();
    
    // Create particles at intervals
    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('animate-slide-up');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
  }, []);

  return (
    <div className={`${DeliusRegular.className} about-page min-h-screen bg-gray-950 text-white overflow-hidden relative`}>
      {/* Enhanced parallax layers */}
      {/* Fixed Right Label */}
<div className="fixed bottom-0 flex justify-center right-0 p-2 z-50">
  <div className="bg-white/10 backdrop-blur-md border-l border-neon-green px-4 py-2 text-xl md:text-base font-semibold text-neon-green shadow-lg rounded-xl">
    Student Affairs IITRAM
  </div>
</div>

      <div className="parallax-layer layer1" />
      <div className="parallax-layer layer2" />
      <div className="parallax-layer layer3" />
      
      {/* Particle background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-teal-500/[0.02] pointer-events-none z-0" />
      
      {/* Circuit overlay */}
      <div className="circuit-overlay"  />

      {/* Hero Section */}
     <section id='home' className="relative z-10 min-h-screen flex items-center justify-center scroll-reveal overflow-hidden">


  {/* 💡 Optional Neon Background Blobs */}
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
    <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-neon-pink/10 rounded-full blur-3xl animate-pulse"></div>
  </div>

  {/* Hero Content (unchanged) */}
  <div  className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
    
    <div className="mx-auto">
      <div className="relative w-40 h-46 mx-auto">
        <div className="absolute -inset-2 bg-neon-green/20 rounded-full blur-md animate-pulse"></div>
        <img
          src="/logo/2logo.png"
          alt="SAC Logo"
          className="w-full h-full object-contain relative z-10"
        />
      </div>
    </div>

    {/* HEADING */}
    <h1 className="text-5xl md:text-7xl font-bold mb-6">
      <span className="neon-text-primary flicker-slow">STUDENT</span>
      <span className="neon-text-secondary flicker-medium delay-100"> ACTIVITY CENTER</span>
    </h1>

    {/* SUBTEXT */}
    <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
      Where innovation meets passion, and students transform into leaders
    </p>

    {/* BUTTONS */}
    <div className="mt-12 flex justify-center space-x-6">
      <button className="neon-button-primary">Discover Clubs</button>
      <button className="neon-button-secondary">Join Our Community</button>
    </div>

    {/* BOUNCE ICON */}
    <div className="mt-20 animate-bounce-slow">
      <svg className="h-12 w-12 mx-auto text-neon-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>

  </div>
</section>



      {/* About Section */}
      <section id='about' className="about-intro relative z-10 py-32 scroll-reveal">
        <div className="neon-border-top"></div>
        <div className="neon-border-bottom"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
  <div className="text-center mb-12">
    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
      <span className="neon-text-primary flicker-slow">ABOUT</span>
      <span className="neon-text-secondary flicker-medium delay-100"> OUR CLUB</span>
    </h1>
    <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
      The Student Activity Centre (SAC) is the central body for organizing and encouraging student-led extracurricular activities at IITRAM.
    </p>
  </div>

  <div className="max-w-4xl mx-auto text-left space-y-6 text-gray-300 text-base md:text-lg leading-relaxed bg-white/5 backdrop-blur-md p-6 rounded-xl border border-neon-green/20 shadow-md">
    <p>
      SAC empowers students to explore and grow their interests by joining a wide variety of clubs and groups. These include:
    </p>

    <ul className="list-disc pl-5 space-y-2">
      <li><strong>Sports and Games</strong> – promoting physical well-being and teamwork.</li>
      <li><strong>Literary and Cultural</strong> – nurturing creativity, expression, and cultural exchange.</li>
      <li><strong>Science and Technology</strong> – encouraging innovation, research, and technical exploration.</li>
    </ul>

    <p>
      Each club is student-managed, operating under the guidance of the SAC Chairperson, Vice-Chairperson, and Dean of Student Affairs.
    </p>

    <p>
      SAC's vibrant club culture is a hallmark of IITRAM, helping students develop diverse talents, leadership skills, and a strong sense of community.
    </p>
  </div>
</div>

      </section>

      {/* Mission with stats */}
      <section  className="mission relative z-10 py-20 scroll-reveal">
        <div className="neon-border-top"></div>
        <div className="neon-border-bottom"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8 neon-text-primary flicker-slow">
                <span>OUR MISSION</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  At CampusHub, we're dedicated to creating a vibrant community where students can explore their passions, 
                  develop new skills, and connect with like-minded peers. Our center provides resources, space, and support 
                  for all student-led initiatives.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded in 2015, we've grown from a small student group to the largest activity center on campus, 
                  serving over 2,000 students annually through our diverse programs and events.
                </p>
              </div>
            </div>
            
            <div className="stats grid grid-cols-2 gap-6">
              {[
                { value: '2000+', label: 'Active Members' },
                { value: '120+', label: 'Events Yearly' },
                { value: '25', label: 'Student Clubs' },
                { value: '10', label: 'Years Active' },
              ].map((stat, idx) => (
                <div key={idx} className={`stat-card hover-neon transition transform delay-${idx * 100 + 300}`}>
                  <div className="text-3xl font-bold neon-text-accent">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities */}
      <section id='activities' className="activities relative z-10 py-20 scroll-reveal bg-black/90 backdrop-blur-xl">
  <div className="neon-border-top"></div>
  <div className="neon-border-bottom"></div>

  <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-16 neon-text-secondary flicker-medium">
      <span>OUR ACTIVITIES</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {activities.map((activity, idx) => (
        <div
          key={idx}
          className="rounded-xl overflow-hidden shadow-lg bg-white/5 backdrop-blur-lg border border-white/10 hover:shadow-neon transition duration-300 group"
        >
          <div className="relative h-46 overflow-hidden">
            <img
              src={activity.image}
              alt={activity.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
             
            />
            {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              {activity.icon}
            </div> */}
          </div>

          <div className="p-6 text-white">
            <h3 className="text-xl font-bold mb-2" style={{ color: activity.color }}>
              {activity.title}
            </h3>
            <p className="text-gray-300">{activity.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      
      {/* Team Section */}
      <section className="team relative z-10 py-20 scroll-reveal">
        <div className="neon-border-top"></div>
        <div className="neon-border-bottom"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text-primary flicker-slow">
            <span>OUR TEAM</span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Satyam Kumar', role: 'President', color: '#00ffcc' },
              { name: 'Sakshi Sureka', role: 'Vice President', color: '#00e0b0' },
              { name: 'Shrey Chaudary', role: 'Vice President', color: '#00b8a9' },
            ].map((member, idx) => (
              <div 
                key={idx} 
                className="team-card hover-neon transition transform delay-0 scroll-reveal"
                style={{ '--neon-color': member.color }}
              >
                <div className="team-avatar" style={{ backgroundColor: `${member.color}20` }}>
                  <div className="avatar-initial" style={{ color: member.color }}>
                    {member.name.charAt(0)}
                  </div>
                  <div className="online-indicator" style={{ backgroundColor: member.color }}></div>
                </div>
                <h3 className="text-xl font-bold mt-4" style={{ color: member.color }}>{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
                
                <div className="flex justify-center mt-4 space-x-3">
                  {['twitter', 'linkedin', 'github'].map((social, i) => (
                    <div 
                      key={i} 
                      className="social-icon"
                      style={{ 
                        backgroundColor: `${member.color}20`,
                        borderColor: member.color
                      }}
                    >
                      <div className="social-dot" style={{ backgroundColor: member.color }}></div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id='contact' className="contact relative z-10 py-20 scroll-reveal">
        <div className="neon-border-top"></div>
        <div className="neon-border-bottom"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text-secondary flicker-medium">
            <span>GET IN TOUCH</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4 neon-text-accent">
                Visit Our Center
              </h3>
              <p className="text-gray-300 mb-6">
                Student Activity Center Building<br />
                IITRAM Campus<br />
                Ahmedabad, Gujarat 382426
              </p>
              
              <h3 className="text-2xl font-bold mb-4 neon-text-accent">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-2">
                <span className="text-gray-400">Email:</span> sac@iitram.ac.in
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-gray-400">Phone:</span> +91 79 1234 5678
              </p>
              <p className="text-gray-300">
                <span className="text-gray-400">Social Media:</span> @SAC_IITRAM
              </p>
              
              <div className="flex space-x-4 mt-8">
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
                  <div 
                    key={index} 
                    className="social-icon-large"
                    style={{ 
                      backgroundColor: 'rgba(0, 255, 204, 0.1)',
                      borderColor: '#00ffcc'
                    }}
                  >
                    <div className="social-dot" style={{ backgroundColor: '#00ffcc' }}></div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="contact-form">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-gray-900/50 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-gray-900/50 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-gray-900/50 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full bg-gray-900/50 border border-teal-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-400 transition-colors"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="neon-button-primary w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer relative z-10 py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4 neon-text-primary flicker-slow">
            STUDENT<span className="neon-text-secondary"> ACTIVITY CENTER</span>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Empowering students to explore, create, and innovate beyond the classroom
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social, index) => (
              <div 
                key={index} 
                className="social-icon"
                style={{ 
                  backgroundColor: 'rgba(0, 255, 204, 0.1)',
                  borderColor: '#00ffcc'
                }}
              >
                <div className="social-dot" style={{ backgroundColor: '#00ffcc' }}></div>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Student Activity Center, IITRAM. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;