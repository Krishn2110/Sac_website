
// "use client"

// import React, { useState, useEffect, useRef } from 'react';
// import { MdPermContactCalendar } from "react-icons/md";
// import { FaHome, FaInfoCircle, FaCogs, FaEnvelope } from "react-icons/fa"; // Add as needed


// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);
//     const [activeHover, setActiveHover] = useState(null);
//     const logoRef = useRef(null);

//     // Add scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     // Logo animation
//     useEffect(() => {
//         if (logoRef.current) {
//             const logo = logoRef.current;
//             let angle = 0;
            
//             const animate = () => {
//                 angle = (angle + 0.5) % 360;
//                 const glowSize = 15 + 5 * Math.sin(angle * Math.PI / 180);
//                 logo.style.boxShadow = `0 0 ${glowSize}px #00ffcc, 0 0 ${glowSize * 2}px #00ffcc`;
//                 requestAnimationFrame(animate);
//             };
            
//             animate();
//         }
//     }, []);

//     return (
//         <nav className={`flex justify-between items-center p-4 bg-black/20 backdrop-blur-xl border-b border-neon-green/20 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-lg shadow-neon-green/10' : 'py-4'}`}>
//             {/* Logo with animated neon effect */}
//             <div className="flex items-center">
//   <div className="relative">
//     <div className="absolute -inset-2 bg-neon-green/20 rounded-full blur-md animate-pulse"></div>

//     <div 
//       className="w-22 h-16 bg-black border-2 border-neon-green rounded-full flex items-center justify-center relative overflow-hidden"
//     >
//       <img
//         src="../logo/2logo.png"
//         alt="SAC Logo"
//         className="w-20 h-22 object-contain z-10"
//       />
//       <div className="absolute bottom-0 w-full h-1 bg-neon-green animate-pulse"></div>
//     </div>
//   </div>

//   {/* <div className="ml-3">
//     <h1 className="text-2xl font-bold text-neon-green tracking-tighter">
//       <span className="neon-text-primary">SAC</span>
//     </h1>
//     <p className="text-xs text-neon-blue mt-0.5">STUDENT ACTIVITY CENTER</p>
//   </div> */}
// </div>

            
//             {/* Desktop Navigation */}
//             <ul className="hidden md:flex space-x-6 list-none m-0 p-0">
//     <NavItem href="#home" text="Home" color="green" icon={FaHome} activeHover={activeHover} setActiveHover={setActiveHover} />
//     <NavItem href="#about" text="About" color="blue" icon={FaInfoCircle} activeHover={activeHover} setActiveHover={setActiveHover} />
//     <NavItem href="#services" text="Services" color="pink" icon={FaCogs} activeHover={activeHover} setActiveHover={setActiveHover} />
//     <NavItem href="#contact" text="Contact" color="purple" icon={FaEnvelope} activeHover={activeHover} setActiveHover={setActiveHover} />
// </ul>

            
//             {/* Mobile Menu Button */}
//             <button 
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden p-2 rounded-md border border-neon-green text-neon-green hover:neon-glow-green transition-all relative group"
//             >
//                 <div className="absolute -inset-1 bg-neon-green/10 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                 {isOpen ? (
//                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                 ) : (
//                     <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                     </svg>
//                 )}
//             </button>
            
//             {/* Mobile Menu */}
//             <div className={`fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-2xl p-6 border-t border-neon-green/30 transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
//                 <ul className="flex flex-col space-y-5 list-none m-0 p-0">
//                     <MobileNavItem href="#home" text="Home" color="green" onClick={() => setIsOpen(false)} />
//                     <MobileNavItem href="#about" text="About" color="blue" onClick={() => setIsOpen(false)} />
//                     <MobileNavItem href="#services" text="Services" color="pink" onClick={() => setIsOpen(false)} />
//                     <MobileNavItem href="#contact" text="Contact" color="purple" onClick={() => setIsOpen(false)} />
//                 </ul>
//             </div>
//         </nav>
//     );
// };

// // NavItem component for individual navigation links
// const NavItem = ({ href, text, color, icon: Icon, activeHover, setActiveHover }) => {
//     const colorClasses = {
//         green: 'text-neon-green',
//         blue: 'text-neon-blue',
//         pink: 'text-neon-pink',
//         purple: 'text-neon-purple'
//     };

//     const bgClasses = {
//         green: 'bg-neon-green/20',
//         blue: 'bg-neon-blue/20',
//         pink: 'bg-neon-pink/20',
//         purple: 'bg-neon-purple/20'
//     };

//     return (
//         <li 
//             className="relative group"
//             onMouseEnter={() => setActiveHover(color)}
//             onMouseLeave={() => setActiveHover(null)}
//         >
//             <a 
//                 href={href} 
//                 className={`px-4 py-2 bg-white/10 backdrop-blur-sm hover:scale-105 rounded-lg transition-all duration-300 ${colorClasses[color]} relative z-10 flex items-center space-x-2`}
//             >
                
//                 {Icon && <Icon className="w-5 h-5" />}
//                 <span className='font-semibold text-lg'>{text}</span>
//             </a>

//             {/* Background and effects */}
//             <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${bgClasses[color]} ${activeHover === color ? 'opacity-100' : 'opacity-0'}`}></div>
//             <div className={`absolute inset-0 rounded-lg border border-current transition-all duration-500 ${activeHover === color ? 'opacity-100' : 'opacity-0'}`}></div>

//             {/* Floating particles */}
//             <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
//                 {[...Array(6)].map((_, i) => (
//                     <div 
//                         key={i}
//                         className={`absolute w-1.5 h-1.5 rounded-full bg-current animate-float`}
//                         style={{
//                             left: `${Math.random() * 80 + 10}%`,
//                             top: `${Math.random() * 80 + 10}%`,
//                             animationDelay: `${i * 0.2}s`,
//                             animationDuration: `${Math.random() * 3 + 2}s`
//                         }}
//                     ></div>
//                 ))}
//             </div>
//         </li>
//     );
// };


// // Mobile navigation item component
// const MobileNavItem = ({ href, text, color, onClick }) => {
//     const colorClasses = {
//         green: 'text-neon-green',
//         blue: 'text-neon-blue',
//         pink: 'text-neon-pink',
//         purple: 'text-neon-purple'
//     };
    
//     const bgClasses = {
//         green: 'bg-neon-green/10',
//         blue: 'bg-neon-blue/10',
//         pink: 'bg-neon-pink/10',
//         purple: 'bg-neon-purple/10'
//     };
    
//     return (
//         <li>
//             <a 
//                 href={href} 
//                 onClick={onClick}
//                 className={`px-5 py-3 rounded-xl transition-all duration-300 ${colorClasses[color]} flex items-center group ${bgClasses[color]}`}
//             >
//                 <span className="w-2 h-2 rounded-full bg-current mr-3 transition-all group-hover:mr-4 group-hover:animate-pulse"></span>
//                 <span className="font-medium">{text}</span>
//                 <span className="ml-auto text-xs opacity-70 group-hover:opacity-100">→</span>
//             </a>
//         </li>
//     );
// };

// export default Navbar;




"use client";

import React, { useState, useEffect, useRef } from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { FaHome, FaInfoCircle, FaCogs, FaEnvelope } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeHover, setActiveHover] = useState(null);
  const [activeSection, setActiveSection] = useState("home");
  const logoRef = useRef(null);

  // Handle scroll styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Glow animation for logo
  useEffect(() => {
    if (logoRef.current) {
      const logo = logoRef.current;
      let angle = 0;

      const animate = () => {
        angle = (angle + 0.5) % 360;
        const glowSize = 15 + 5 * Math.sin((angle * Math.PI) / 180);
        logo.style.boxShadow = `0 0 ${glowSize}px #00ffcc, 0 0 ${
          glowSize * 2
        }px #00ffcc`;
        requestAnimationFrame(animate);
      };

      animate();
    }
  }, []);

  // Detect active section using Intersection Observer
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`flex justify-between items-center p-4 bg-black/20 backdrop-blur-xl border-b border-neon-green/20 fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 shadow-lg shadow-neon-green/10" : "py-4"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center">
        <div className="relative">
          <div className="absolute -inset-2 bg-neon-green/20 rounded-full blur-md animate-pulse"></div>

          <div
            className="w-18 h-18 bg-black border-2 border-neon-green rounded-full flex items-center justify-center relative overflow-hidden"
            ref={logoRef}
          >
            <img
              src="../logo/2logo.png"
              alt="SAC Logo"
              className="w-18 h-20 object-contain z-10"
            />
            <div className="absolute bottom-0 w-full h-1 bg-neon-green animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 list-none m-0 p-0">
        <NavItem
          href="#home"
          text="Home"
          color="green"
          icon={FaHome}
          activeHover={activeHover}
          setActiveHover={setActiveHover}
          isActive={activeSection === "home"}
        />
        <NavItem
          href="#about"
          text="About"
          color="blue"
          icon={FaInfoCircle}
          activeHover={activeHover}
          setActiveHover={setActiveHover}
          isActive={activeSection === "about"}
        />
        <NavItem
          href="#activities"
          text="Activities"
          color="pink"
          icon={FaCogs}
          activeHover={activeHover}
          setActiveHover={setActiveHover}
          isActive={activeSection === "activities"}
        />
        <NavItem
          href="#contact"
          text="Contact"
          color="purple"
          icon={FaEnvelope}
          activeHover={activeHover}
          setActiveHover={setActiveHover}
          isActive={activeSection === "contact"}
        />
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-md border border-neon-green text-neon-green hover:neon-glow-green transition-all relative group"
      >
        <div className="absolute -inset-1 bg-neon-green/10 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
        {isOpen ? (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 right-0 bg-black/90 backdrop-blur-2xl p-6 border-t border-neon-green/30 transition-all duration-500 ease-in-out transform ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-5 list-none m-0 p-0">
          <MobileNavItem
            href="#home"
            text="Home"
            color="green"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavItem
            href="#about"
            text="About"
            color="blue"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavItem
            href="#activities"
            text="Activities"
            color="pink"
            onClick={() => setIsOpen(false)}
          />
          <MobileNavItem
            href="#contact"
            text="Contact"
            color="purple"
            onClick={() => setIsOpen(false)}
          />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({
  href,
  text,
  color,
  icon: Icon,
  activeHover,
  setActiveHover,
  isActive,
}) => {
  const colorClasses = {
    green: "text-neon-green",
    blue: "text-neon-blue",
    pink: "text-neon-pink",
    purple: "text-neon-purple",
  };

  const bgClasses = {
    green: "bg-neon-green/20",
    blue: "bg-neon-blue/20",
    pink: "bg-neon-pink/20",
    purple: "bg-neon-purple/20",
  };

  return (
    <li
      className="relative group"
      onMouseEnter={() => setActiveHover(color)}
      onMouseLeave={() => setActiveHover(null)}
    >
      <a
        href={href}
        className={`px-4 py-2 bg-white/10 backdrop-blur-sm hover:scale-105 rounded-lg transition-all duration-300 ${
          isActive ? colorClasses[color] : "text-white/60"
        } relative z-10 flex items-center space-x-2`}
      >
        {Icon && <Icon className="w-5 h-5" />}
        <span className="font-semibold text-lg">{text}</span>
      </a>

      <div
        className={`absolute inset-0 rounded-lg transition-all duration-500 ${bgClasses[color]} ${
          activeHover === color ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        className={`absolute inset-0 rounded-lg border border-current transition-all duration-500 ${
          activeHover === color ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-current animate-float"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
            }}
          ></div>
        ))}
      </div>
    </li>
  );
};

const MobileNavItem = ({ href, text, color, onClick }) => {
  const colorClasses = {
    green: "text-neon-green",
    blue: "text-neon-blue",
    pink: "text-neon-pink",
    purple: "text-neon-purple",
  };

  const bgClasses = {
    green: "bg-neon-green/10",
    blue: "bg-neon-blue/10",
    pink: "bg-neon-pink/10",
    purple: "bg-neon-purple/10",
  };

  return (
    <li>
      <a
        href={href}
        onClick={onClick}
        className={`px-5 py-3 rounded-xl transition-all duration-300 ${colorClasses[color]} flex items-center group ${bgClasses[color]}`}
      >
        <span className="w-2 h-2 rounded-full bg-current mr-3 transition-all group-hover:mr-4 group-hover:animate-pulse"></span>
        <span className="font-medium">{text}</span>
        <span className="ml-auto text-xs opacity-70 group-hover:opacity-100">
          →
        </span>
      </a>
    </li>
  );
};

export default Navbar;
