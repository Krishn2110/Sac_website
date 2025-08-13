// "use client"

// import React, { useEffect, useRef } from 'react';

// const AboutPage = () => {
//   const particlesRef = useRef(null);
  
//   // Generate floating particles
//   useEffect(() => {
//     const container = particlesRef.current;
//     if (!container) return;
    
//     const createParticle = () => {
//       const particle = document.createElement('div');
//       const size = Math.random() * 4 + 1;
//       const color = Math.random() > 0.7 ? '#00ffcc' : 
//                    Math.random() > 0.4 ? '#00e0b0' : '#00b8a9';
//       const opacity = Math.random() * 0.5 + 0.1;
      
//       particle.style.cssText = `
//         position: absolute;
//         width: ${size}px;
//         height: ${size}px;
//         background: ${color};
//         border-radius: 50%;
//         top: ${Math.random() * 100}%;
//         left: ${Math.random() * 100}%;
//         opacity: ${opacity};
//         animation: float ${Math.random() * 20 + 10}s infinite linear;
//       `;
      
//       container.appendChild(particle);
      
//       setTimeout(() => {
//         particle.remove();
//       }, (Math.random() * 20 + 10) * 1000);
//     };
    
//     for (let i = 0; i < 60; i++) {
//       createParticle();
//     }
    
//     const interval = setInterval(createParticle, 800);
    
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gray-950 text-white overflow-hidden relative">
//       {/* Floating particles background */}
//       <div 
//         ref={particlesRef} 
//         className="absolute inset-0 pointer-events-none overflow-hidden z-0"
//       />
      
//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-grid-teal-500/[0.02] pointer-events-none z-0" />
      
//       {/* Hero Section */}
//       <div className="relative py-32 overflow-hidden z-10">
//         <div className="absolute inset-0 z-0">
//           <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse animate-float-1"></div>
//           <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-pulse animate-float-2"></div>
//           <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl animate-pulse animate-float-3"></div>
//         </div>
        
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center animate-fade-in-up">
//             <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">
//               <span className="text-teal-400 glow-teal animate-pulse-slow">ABOUT</span>
//               <span className="text-emerald-400 glow-emerald animate-pulse-slow delay-100"> OUR CLUB</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-150">
//               The Students Activity Centre is the regulating body for all student activities at IITRAM. SAC IITRAM encourages and supports students to participate in a variety of extracurricular activities, and students can join a group or activity of their choice. It strives to install a culture of sportsmanship and teamwork among students by providing them with outstanding sports, cultural, and technological facilities.
//             </p>
//           </div>
//         </div>
//       </div>
      
//       {/* Floating Elements */}
//       <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-teal-500/20 blur-xl animate-float-1"></div>
//       <div className="absolute top-2/3 left-1/4 w-16 h-16 rounded-lg bg-emerald-500/20 blur-xl rotate-45 animate-float-2"></div>
//       <div className="absolute bottom-1/4 right-1/3 w-24 h-24 rounded-full bg-cyan-500/20 blur-xl animate-float-3"></div>
      
//       {/* Mission Section */}
//       <section className="py-20 border-t border-teal-900 relative z-10">
//         <div className="absolute -top-24 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-pulse-slow"></div>
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
//             <div>
//               <h2 className="text-4xl font-bold mb-8 animate-fade-in-right">
//                 <span className="text-cyan-400 glow-cyan">OUR MISSION</span>
//               </h2>
//               <div className="space-y-6">
//                 <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-right delay-100">
//                   At CampusHub, we're dedicated to creating a vibrant community where students can explore their passions, develop new skills, and connect with like-minded peers. Our center provides resources, space, and support for all student-led initiatives.
//                 </p>
//                 <p className="text-lg text-gray-300 leading-relaxed animate-fade-in-right delay-200">
//                   Founded in 2015, we've grown from a small student group to the largest activity center on campus, serving over 2,000 students annually through our diverse programs and events.
//                 </p>
//               </div>
              
//               <div className="mt-12 grid grid-cols-2 gap-6">
//                 {[
//                   { value: '2000+', label: 'Active Members', color: 'teal' },
//                   { value: '120+', label: 'Events Yearly', color: 'emerald' },
//                   { value: '25', label: 'Student Clubs', color: 'cyan' },
//                   { value: '10', label: 'Years Active', color: 'teal' },
//                 ].map((stat, index) => (
//                   <div 
//                     key={index} 
//                     className={`p-6 bg-gray-900/70 border border-teal-900 rounded-xl hover:neon-glow-${stat.color} transition-all duration-300 hover:-translate-y-1 animate-fade-in-up delay-${index * 100 + 300}`}
//                   >
//                     <div className={`text-3xl font-bold mb-2 text-${stat.color}-400`}>
//                       {stat.value}
//                     </div>
//                     <div className="text-gray-400">{stat.label}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>
            
//             <div className="relative animate-fade-in-left delay-300">
//               <div className="absolute -inset-4 bg-teal-500/10 rounded-xl blur-xl animate-pulse"></div>
//               <div className="relative bg-gray-900/70 border border-teal-900 rounded-xl overflow-hidden neon-glow-teal">
//                 <div className="p-8">
//                   <h3 className="text-2xl font-bold mb-4 text-cyan-400">
//                     Our Core Values
//                   </h3>
//                   <ul className="space-y-4">
//                     {[
//                       { title: 'Innovation', desc: 'Encouraging creative thinking and new ideas', icon: '💡' },
//                       { title: 'Inclusion', desc: 'Welcoming students from all backgrounds', icon: '🤝' },
//                       { title: 'Collaboration', desc: 'Working together to achieve common goals', icon: '🚀' },
//                       { title: 'Growth', desc: 'Helping students develop new skills', icon: '🌱' },
//                     ].map((value, index) => (
//                       <li key={index} className="flex items-start animate-fade-in-right delay-500">
//                         <div className="text-2xl mr-4 text-teal-400">{value.icon}</div>
//                         <div>
//                           <div className="font-bold text-lg text-cyan-300">{value.title}</div>
//                           <div className="text-gray-400">{value.desc}</div>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Activities Section */}
//       <section className="py-20 bg-gray-900/30 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="text-teal-400 glow-teal">OUR</span>
//               <span className="text-cyan-400 glow-cyan"> ACTIVITIES</span>
//             </h2>
//             <div className="w-24 h-1 bg-cyan-400 mx-auto mb-6 animate-pulse"></div>
//             <p className="text-gray-400 max-w-3xl mx-auto">
//               Discover the diverse range of activities and clubs that make our center vibrant
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { 
//                 title: 'Tech & Innovation', 
//                 desc: 'Hackathons, coding workshops, and tech talks', 
//                 color: 'teal',
//                 icon: '💻'
//               },
//               { 
//                 title: 'Arts & Culture', 
//                 desc: 'Art exhibitions, music performances, and cultural events', 
//                 color: 'emerald',
//                 icon: '🎨'
//               },
//               { 
//                 title: 'Leadership & Business', 
//                 desc: 'Startup incubator, pitch competitions, and networking events', 
//                 color: 'cyan',
//                 icon: '📈'
//               },
//               { 
//                 title: 'Community Service', 
//                 desc: 'Volunteer programs and social impact initiatives', 
//                 color: 'teal',
//                 icon: '🤝'
//               },
//               { 
//                 title: 'Sports & Wellness', 
//                 desc: 'Fitness classes, intramural sports, and wellness workshops', 
//                 color: 'emerald',
//                 icon: '⚽'
//               },
//               { 
//                 title: 'Academic Support', 
//                 desc: 'Tutoring, study groups, and research opportunities', 
//                 color: 'cyan',
//                 icon: '📚'
//               },
//             ].map((activity, index) => (
//               <div 
//                 key={index} 
//                 className={`bg-gray-900/70 border border-teal-900 rounded-xl p-6 hover:neon-glow-${activity.color} transition-all duration-300 hover:-translate-y-2 animate-fade-in-up delay-${index * 100}`}
//               >
//                 <div className="text-4xl mb-4 text-teal-400 animate-pulse">{activity.icon}</div>
//                 <h3 className={`text-xl font-bold mb-2 text-${activity.color}-400`}>
//                   {activity.title}
//                 </h3>
//                 <p className="text-gray-400">{activity.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
      
//       {/* Team Section */}
//       <section className="py-20 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="text-cyan-400 glow-cyan">MEET OUR</span>
//               <span className="text-teal-400 glow-teal"> TEAM</span>
//             </h2>
//             <div className="w-24 h-1 bg-teal-400 mx-auto mb-6 animate-pulse"></div>
//             <p className="text-gray-400 max-w-3xl mx-auto">
//               Passionate students dedicated to making our community vibrant
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//             {[
//               { name: 'Alex Johnson', role: 'President', color: 'teal' },
//               { name: 'Samantha Lee', role: 'Vice President', color: 'emerald' },
//               { name: 'Marcus Chen', role: 'Tech Director', color: 'cyan' },
//               { name: 'Taylor Morgan', role: 'Events Coordinator', color: 'teal' },
//             ].map((member, index) => (
//               <div 
//                 key={index} 
//                 className="text-center bg-gray-900/70 border border-teal-900 rounded-xl p-6 hover:neon-glow-teal transition-all duration-300 hover:-translate-y-2 animate-fade-in-up delay-200"
//               >
//                 <div className="relative inline-block mb-6">
//                   <div className="w-32 h-32 rounded-full bg-gradient-to-br from-teal-900/50 to-cyan-900/50 mx-auto mb-4 border border-teal-700 flex items-center justify-center animate-pulse-slow">
//                     <div className="text-4xl">
//                       <span className={`text-${member.color}-400`}>
//                         {member.name.charAt(0)}
//                       </span>
//                     </div>
//                   </div>
//                   <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-${member.color}-400 border-4 border-gray-900 animate-pulse`}></div>
//                 </div>
//                 <h3 className={`text-xl font-bold mb-1 text-${member.color}-400`}>
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-400 mb-4">{member.role}</p>
//                 <div className="flex justify-center space-x-3">
//                   {['twitter', 'linkedin', 'github'].map((social, i) => (
//                     <a 
//                       key={i} 
//                       href="#" 
//                       className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center hover:bg-teal-400/20 transition-all duration-300"
//                     >
//                       <div className={`w-4 h-4 rounded-full bg-${member.color}-400`}></div>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           <div className="mt-16 text-center animate-fade-in-up delay-500">
//             <button className="bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 px-8 py-3 rounded-full font-bold text-lg hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 hover:-translate-y-1 shadow-lg shadow-cyan-500/20">
//               Join Our Team
//             </button>
//           </div>
//         </div>
//       </section>
      
//       {/* Contact Section */}
//       <section className="py-20 bg-gray-900/30 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="text-center mb-16 animate-fade-in-up">
//             <h2 className="text-4xl font-bold mb-4">
//               <span className="text-cyan-400 glow-cyan">GET IN</span>
//               <span className="text-teal-400 glow-teal"> TOUCH</span>
//             </h2>
//             <div className="w-24 h-1 bg-teal-400 mx-auto mb-6 animate-pulse"></div>
//             <p className="text-gray-400 max-w-3xl mx-auto">
//               Have questions or want to get involved? Reach out to us!
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
//             <div className="animate-fade-in-right">
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold mb-4 text-teal-400">
//                   Visit Our Center
//                 </h3>
//                 <p className="text-gray-300 mb-4">
//                   Student Activity Center Building<br />
//                   123 University Avenue<br />
//                   Campus City, CC 12345
//                 </p>
//                 <p className="text-gray-400">
//                   Open Monday-Friday: 9AM - 9PM<br />
//                   Weekends: 10AM - 6PM
//                 </p>
//               </div>
              
//               <div className="mb-8">
//                 <h3 className="text-2xl font-bold mb-4 text-cyan-400">
//                   Contact Information
//                 </h3>
//                 <p className="text-gray-300 mb-2">
//                   <span className="text-gray-400">Email:</span> info@campushub.edu
//                 </p>
//                 <p className="text-gray-300 mb-2">
//                   <span className="text-gray-400">Phone:</span> (123) 456-7890
//                 </p>
//                 <p className="text-gray-300">
//                   <span className="text-gray-400">Social Media:</span> @CampusHubOfficial
//                 </p>
//               </div>
              
//               <div className="flex space-x-4">
//                 {['facebook', 'twitter', 'instagram', 'linkedin'].map((social, index) => (
//                   <a 
//                     key={index} 
//                     href="#" 
//                     className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center hover:bg-teal-400/20 transition-all duration-300 hover:-translate-y-1"
//                   >
//                     <div className="w-6 h-6 rounded-full bg-teal-400"></div>
//                   </a>
//                 ))}
//               </div>
//             </div>
            
//             <div className="bg-gray-900/70 border border-teal-900 rounded-xl p-8 animate-fade-in-left neon-glow-cyan">
//               <h3 className="text-2xl font-bold mb-6 text-cyan-400">
//                 Send Us a Message
//               </h3>
//               <form className="space-y-6">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//                   <div>
//                     <label className="block text-gray-400 mb-2">Name</label>
//                     <input 
//                       type="text" 
//                       className="w-full bg-gray-800/50 border border-teal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
//                       placeholder="Your name"
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-gray-400 mb-2">Email</label>
//                     <input 
//                       type="email" 
//                       className="w-full bg-gray-800/50 border border-teal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <label className="block text-gray-400 mb-2">Subject</label>
//                   <input 
//                     type="text" 
//                     className="w-full bg-gray-800/50 border border-teal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
//                     placeholder="How can we help?"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-400 mb-2">Message</label>
//                   <textarea 
//                     rows="4"
//                     className="w-full bg-gray-800/50 border border-teal-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-teal-500 transition-colors"
//                     placeholder="Your message here..."
//                   ></textarea>
//                 </div>
//                 <button 
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-teal-500 to-cyan-500 text-gray-900 px-8 py-3 rounded-lg font-bold text-lg hover:from-teal-400 hover:to-cyan-400 transition-all duration-300 hover:-translate-y-1"
//                 >
//                   Send Message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
      
//       {/* Footer */}
//       <footer className="py-12 border-t border-teal-900 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <div className="text-2xl font-bold mb-4 animate-pulse-slow">
//             <span className="text-teal-400 glow-teal">CAMPUS</span>
//             <span className="text-cyan-400 glow-cyan">HUB</span>
//           </div>
//           <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
//             Empowering students to explore, create, and innovate beyond the classroom since 2015
//           </p>
//           <div className="flex justify-center space-x-6 mb-8">
//             {['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map((social, index) => (
//               <a 
//                 key={index} 
//                 href="#" 
//                 className="text-gray-400 hover:text-teal-400 transition-colors duration-300"
//               >
//                 <div className="w-10 h-10 rounded-full bg-teal-900/50 flex items-center justify-center hover:bg-teal-400/20 transition-all">
//                   <div className="w-5 h-5 rounded-full bg-teal-400"></div>
//                 </div>
//               </a>
//             ))}
//           </div>
//           <p className="text-gray-500 text-sm">
//             © {new Date().getFullYear()} CampusHub Student Activity Center. All rights reserved.
//           </p>
//         </div>
//       </footer>
      
     
      
//     </div>
//   );
// };

// export default AboutPage;










// "use client";

// import React, { useEffect, useRef } from 'react';
// import './About.css'; // Assuming the CSS module or stylesheet is alongside

// const AboutPage = () => {
//   const particlesRef = useRef(null);

//   useEffect(() => {
//     const container = particlesRef.current;
//     if (!container) return;

//     const createParticle = () => {
//       const particle = document.createElement('div');
//       const size = Math.random() * 4 + 1;
//       const startX = Math.random() * container.clientWidth;
//       const startY = Math.random() * container.clientHeight;
//       particle.style.cssText = `
//         position: absolute;
//         width: ${size}px;
//         height: ${size}px;
//         background: rgba(0, 255, 204, ${Math.random() * 0.5 + 0.1});
//         border-radius: 50%;
//         top: ${startY}px;
//         left: ${startX}px;
//         opacity: ${Math.random() * 0.5 + 0.1};
//         transition: transform ${(Math.random() * 15 + 10)}s linear, background-color ${(Math.random() * 8 + 4)}s linear;
//       `;
//       container.appendChild(particle);

//       const dx = (Math.random() - 0.5) * (container.clientWidth * 0.5);
//       const dy = (Math.random() - 0.5) * (container.clientHeight * 0.5);
//       requestAnimationFrame(() => {
//         particle.style.transform = `translate(${dx}px, ${dy}px)`;
//         const newColor = Math.random() > 0.5 ? '#00ffcc' : '#00e0b0';
//         particle.style.backgroundColor = newColor;
//       });

//       setTimeout(() => particle.remove(), (Math.random() * 15 + 10) * 1000);
//     };

//     for (let i = 0; i < 60; i++) createParticle();
//     const interval = setInterval(createParticle, 800);
//     return () => clearInterval(interval);
//   }, []);

//   // Scroll animation
//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(e => {
//         if (e.isIntersecting) {
//           e.target.classList.add('animate-slide-up');
//           observer.unobserve(e.target);
//         }
//       });
//     }, { threshold: 0.1 });

//     document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
//   }, []);

//   return (
//     <div className="about-page min-h-screen bg-gray-950 text-white overflow-hidden relative">
//       <div className="parallax-layer layer1" />
//       <div className="parallax-layer layer2" />

//       {/* Particle background */}
//       <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0" />

//       {/* Grid overlay */}
//       <div className="absolute inset-0 bg-grid-teal-500/[0.02] pointer-events-none z-0" />

//       {/* Content sections */}
//       <section className="hero relative z-10 py-32 text-center scroll-reveal">
//         <h1 className="text-5xl md:text-7xl font-bold neon-flicker">
//           <span>ABOUT</span>
//           <span className="delay-100">OUR CLUB</span>
//         </h1>
//         <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
//           The Students Activity Centre is the regulating body for all student activities at IITRAM…
//         </p>
//       </section>

//       {/* Mission with stats */}
//       <section className="mission relative z-10 py-20 border-t border-teal-900 scroll-reveal">
//         <h2 className="text-4xl font-bold mb-8 neon-flicker delay-200"><span>OUR MISSION</span></h2>
//         <div className="stats grid grid-cols-2 gap-6 max-w-4xl mx-auto">
//           {[
//             { value: '2000+', label: 'Active Members' },
//             { value: '120+', label: 'Events Yearly' },
//             { value: '25', label: 'Student Clubs' },
//             { value: '10', label: 'Years Active' },
//           ].map((stat, idx) => (
//             <div key={idx} className={`stat-card hover-neon transition transform delay-${idx * 100 + 300}`}>
//               <div className="text-3xl font-bold">{stat.value}</div>
//               <div className="text-gray-400">{stat.label}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Activities */}
//       <section className="activities relative z-10 py-20 bg-gray-900/30 scroll-reveal">
//         <h2 className="text-4xl font-bold text-center mb-4 neon-flicker delay-300"><span>OUR ACTIVITIES</span></h2>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-8">
//           {[
//             ['💻', 'Tech & Innovation', 'Hackathons, coding workshops'],
//             ['🎨', 'Arts & Culture', 'Art exhibitions, performances'],
//             ['📈', 'Leadership & Business', 'Pitch competitions, networking'],
//             ['🤝', 'Community Service', 'Volunteer programs, impact'],
//             ['⚽', 'Sports & Wellness', 'Fitness classes, intramural sports'],
//             ['📚', 'Academic Support', 'Tutoring, study groups'],
//           ].map(([icon, title, desc], idx) => (
//             <div key={idx} className="activity-card hover-neon transition transform delay-0 scroll-reveal">
//               <div className="text-4xl mb-4">{icon}</div>
//               <h3 className="text-xl font-bold">{title}</h3>
//               <p className="text-gray-400">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutPage;





// AboutPage.jsx
"use client";

import React, { useEffect, useRef } from 'react';
import './About.css';
import localFont from "next/font/local";

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
      <div className="parallax-layer layer1" />
      <div className="parallax-layer layer2" />
      <div className="parallax-layer layer3" />
      
      {/* Particle background */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0" />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid-teal-500/[0.02] pointer-events-none z-0" />
      
      {/* Circuit overlay */}
      <div className="circuit-overlay" />

      {/* Content sections */}
      <section className="hero relative z-10 py-32 text-center scroll-reveal">
        <div className="neon-border-top"></div>
        <div className="neon-border-bottom"></div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="neon-text-primary flicker-slow">ABOUT</span>
          <span className="neon-text-secondary flicker-medium delay-100"> OUR CLUB</span>
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          The Students Activity Centre is the regulating body for all student activities at IITRAM. 
          We foster innovation, collaboration, and personal growth through diverse extracurricular opportunities.
        </p>
        
        <div className="mt-12 flex justify-center space-x-6">
          <button className="neon-button-primary">
            Join Us
          </button>
          <button className="neon-button-secondary">
            Explore Activities
          </button>
        </div>
      </section>

      {/* Mission with stats */}
      <section className="mission relative z-10 py-20 scroll-reveal">
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
      <section className="activities relative z-10 py-20 scroll-reveal">
        <div className="neon-border-top"></div>
        <div className="neon-border-bottom"></div>
        
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 neon-text-secondary flicker-medium">
            <span>OUR ACTIVITIES</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '💻', title: 'Tech & Innovation', desc: 'Hackathons, coding workshops, and tech talks', color: '#00ffcc' },
              { icon: '🎨', title: 'Arts & Culture', desc: 'Art exhibitions, music performances, and cultural events', color: '#00e0b0' },
              { icon: '📈', title: 'Leadership & Business', desc: 'Startup incubator, pitch competitions, and networking events', color: '#00b8a9' },
              { icon: '🤝', title: 'Community Service', desc: 'Volunteer programs and social impact initiatives', color: '#0ff' },
              { icon: '⚽', title: 'Sports & Wellness', desc: 'Fitness classes, intramural sports, and wellness workshops', color: '#0af' },
              { icon: '📚', title: 'Academic Support', desc: 'Tutoring, study groups, and research opportunities', color: '#0cf' },
            ].map((activity, idx) => (
              <div 
                key={idx} 
                className="activity-card hover-neon transition transform delay-0 scroll-reveal"
                style={{ '--neon-color': activity.color }}
              >
                <div className="activity-icon" style={{ color: activity.color }}>{activity.icon}</div>
                <h3 className="text-xl font-bold" style={{ color: activity.color }}>{activity.title}</h3>
                <p className="text-gray-400 mt-2">{activity.desc}</p>
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
      <section className="contact relative z-10 py-20 scroll-reveal">
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
                123 University Avenue<br />
                Campus City, CC 12345
              </p>
              
              <h3 className="text-2xl font-bold mb-4 neon-text-accent">
                Contact Information
              </h3>
              <p className="text-gray-300 mb-2">
                <span className="text-gray-400">Email:</span> info@campushub.edu
              </p>
              <p className="text-gray-300 mb-2">
                <span className="text-gray-400">Phone:</span> (123) 456-7890
              </p>
              <p className="text-gray-300">
                <span className="text-gray-400">Social Media:</span> @CampusHubOfficial
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
            CAMPUS<span className="neon-text-secondary">HUB</span>
          </div>
          <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
            Empowering students to explore, create, and innovate beyond the classroom since 2015
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
            © {new Date().getFullYear()} CampusHub Student Activity Center. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AboutPage;