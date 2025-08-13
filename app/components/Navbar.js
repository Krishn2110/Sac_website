
// "use client"

// import React, { useState, useEffect } from 'react';
// import localFont from "next/font/local";

// const DeliusRegular = localFont({
//   src: [
   
//     {
//       path: '../fonts/Delius-Regular.ttf',
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-delius-regular",
//   display: "swap",
// });


// const Navbar = () => {
//     const [scrolled, setScrolled] = useState(false);
//     const [isOpen, setIsOpen] = useState(false);

//     // Add scroll effect
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 10);
//         };
//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <nav className={`${DeliusRegular.className} flex justify-between items-center p-4 bg-black/80 border-b border-neon-green/30 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg shadow-neon-green/10' : 'py-4'}`}>
//             <div className="text-2xl font-bold neon-text-primary flicker-slow">
//                 <span className="neon-text-secondary">SAC</span>
//             </div>
            
//             {/* Desktop Navigation */}
//             <ul className="hidden md:flex space-x-8 list-none m-0 p-0">
//                 <NavItem href="#home" text="Home" color="green" />
//                 <NavItem href="#about" text="About" color="blue" />
//                 <NavItem href="#services" text="Services" color="pink" />
//                 <NavItem href="#contact" text="Contact" color="purple" />
//             </ul>
            
//             {/* Mobile Menu Button */}
//             <button 
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="md:hidden p-2 rounded-md border border-neon-green text-neon-green hover:neon-glow-green transition-all"
//             >
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
//             {isOpen && (
//                 <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl p-4 border-t border-neon-green/30 neon-glow-green">
//                     <ul className="flex flex-col space-y-4 list-none m-0 p-0">
//                         <MobileNavItem href="#home" text="Home" color="green" onClick={() => setIsOpen(false)} />
//                         <MobileNavItem href="#about" text="About" color="blue" onClick={() => setIsOpen(false)} />
//                         <MobileNavItem href="#services" text="Services" color="pink" onClick={() => setIsOpen(false)} />
//                         <MobileNavItem href="#contact" text="Contact" color="purple" onClick={() => setIsOpen(false)} />
//                     </ul>
//                 </div>
//             )}
//         </nav>
//     );
// };

// // NavItem component for individual navigation links
// const NavItem = ({ href, text, color }) => {
//     const colorClasses = {
//         green: 'text-neon-green hover:text-neon-pink',
//         blue: 'text-neon-blue hover:text-neon-green',
//         pink: 'text-neon-pink hover:text-neon-blue',
//         purple: 'text-neon-purple hover:text-neon-green'
//     };
    
//     const glowClasses = {
//         green: 'glow-green',
//         blue: 'glow-blue',
//         pink: 'glow-pink',
//         purple: 'glow-purple'
//     };
    
//     return (
//         <li className="relative group">
//             <a 
//                 href={href} 
//                 className={`text-lg transition-all duration-300 ${colorClasses[color]} ${glowClasses[color]}`}
//             >
//                 {text}
//             </a>
//             <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-neon-${color} transition-all duration-300 group-hover:w-full`}></span>
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
    
//     return (
//         <li>
//             <a 
//                 href={href} 
//                 onClick={onClick}
//                 className={`font-mono text-lg transition-all duration-300 ${colorClasses[color]} hover:pl-4 flex items-center group`}
//             >
//                 <span className="w-2 h-2 rounded-full bg-current mr-3 transition-all group-hover:mr-4"></span>
//                 {text};
//             </a>
//         </li>
//     );
// };

// export default Navbar;


"use client"

import React, { useState, useEffect } from 'react';
import localFont from "next/font/local";
import '../globals.css';

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

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeHover, setActiveHover] = useState(null);

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Logo animation
    const logoAnimation = `
        @keyframes logo-pulse {
            0% { text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc; }
            50% { text-shadow: 0 0 15px #00ffcc, 0 0 30px #00ffcc; }
            100% { text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc; }
        }
        
        @keyframes logo-flicker {
            0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
            20%, 24%, 55% { opacity: 0.7; }
        }
    `;

    return (
        <>
            <style>{logoAnimation}</style>
            {/* <nav className={`${DeliusRegular.className} flex justify-between glass-card items-center p-4 bg-black/80 border-b border-neon-green/30 backdrop-blur-lg sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-lg shadow-neon-green/10' : 'py-4'}`}> */}
            <nav className={`${DeliusRegular.className} flex justify-between items-center sticky top-0 z-50 transition-all duration-300 
  border-b backdrop-blur-md ${scrolled ? 'bg-black/40 py-2 shadow-lg shadow-neon-green/10' : 'bg-black/10 py-4'} 
  border-neon-green/30 rounded-md`}>


                <div className="flex items-center">
                    {/* Animated logo */}
                    <div className="relative mr-3">
                        <div className="absolute -inset-1 bg-neon-green/20 rounded-full blur-sm animate-pulse"></div>
                        <div className="w-10 h-10 bg-black border-2 border-neon-green rounded-full flex items-center justify-center neon-glow-green">
                            <span className="text-neon-green text-xl font-bold">S</span>
                        </div>
                    </div>
                    
                    <div className="text-2xl font-bold">
                        <span 
                            className="text-neon-green"
                            style={{
                                animation: 'logo-pulse 3s infinite, logo-flicker 4s infinite',
                                textShadow: '0 0 10px #00ffcc, 0 0 20px #00ffcc'
                            }}
                        >
                            SAC
                        </span>
                    </div>
                </div>
                
                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-8 list-none m-0 p-0">
                    <NavItem href="#home" text="Home" color="green" activeHover={activeHover} setActiveHover={setActiveHover} />
                    <NavItem href="#about" text="About" color="blue" activeHover={activeHover} setActiveHover={setActiveHover} />
                    <NavItem href="#services" text="Services" color="pink" activeHover={activeHover} setActiveHover={setActiveHover} />
                    <NavItem href="#contact" text="Contact" color="purple" activeHover={activeHover} setActiveHover={setActiveHover} />
                </ul>
                
                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden p-2 rounded-md border border-neon-green text-neon-green hover:neon-glow-green transition-all relative"
                >
                    <div className="absolute -inset-1 bg-neon-green/10 rounded-md blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {isOpen ? (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
                
                {/* Mobile Menu */}
                <div className={`absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl p-4 border-t border-neon-green/30 transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'}`}>
                    <ul className="flex flex-col space-y-4 list-none m-0 p-0">
                        <MobileNavItem href="#home" text="Home" color="green" onClick={() => setIsOpen(false)} />
                        <MobileNavItem href="#about" text="About" color="blue" onClick={() => setIsOpen(false)} />
                        <MobileNavItem href="#services" text="Services" color="pink" onClick={() => setIsOpen(false)} />
                        <MobileNavItem href="#contact" text="Contact" color="purple" onClick={() => setIsOpen(false)} />
                    </ul>
                </div>
            </nav>
        </>
    );
};

// NavItem component for individual navigation links
const NavItem = ({ href, text, color, activeHover, setActiveHover }) => {
    const colorClasses = {
        green: 'text-neon-green hover:text-neon-pink',
        blue: 'text-neon-blue hover:text-neon-green',
        pink: 'text-neon-pink hover:text-neon-blue',
        purple: 'text-neon-purple hover:text-neon-green'
    };
    
    const glowClasses = {
        green: 'glow-green',
        blue: 'glow-blue',
        pink: 'glow-pink',
        purple: 'glow-purple'
    };
    
    return (
        <li 
            className="relative group"
            onMouseEnter={() => setActiveHover(color)}
            onMouseLeave={() => setActiveHover(null)}
        >
            <a 
                href={href} 
                className={`text-lg transition-all duration-300 ${colorClasses[color]} ${glowClasses[color]} relative z-10`}
            >
                {text}
            </a>
            {/* Animated background effect */}
            <div className={`absolute inset-0 rounded-lg transition-all duration-500 ${
                activeHover === color ? 'bg-neon-green/10' : 'bg-transparent'
            }`}></div>
            
            {/* Glowing underline */}
            <div className={`absolute bottom-0 left-0 w-full h-0.5 bg-neon-${color} transition-all duration-500 transform origin-left ${
                activeHover === color ? 'scale-x-100' : 'scale-x-0'
            }`}></div>
            
            {/* Floating particles */}
            <div className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <div 
                        key={i}
                        className={`absolute w-1 h-1 rounded-full bg-neon-${color} animate-float`}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${i * 0.2}s`
                        }}
                    ></div>
                ))}
            </div>
        </li>
    );
};

// Mobile navigation item component
const MobileNavItem = ({ href, text, color, onClick }) => {
    const colorClasses = {
        green: 'text-neon-green',
        blue: 'text-neon-blue',
        pink: 'text-neon-pink',
        purple: 'text-neon-purple'
    };
    
    return (
        <li>
            <a 
                href={href} 
                onClick={onClick}
                className={`text-lg transition-all duration-300 ${colorClasses[color]} hover:pl-4 flex items-center group py-2 rounded-lg hover:bg-neon-${color}/10`}
            >
                <span className={`w-2 h-2 rounded-full bg-${colorClasses[color]} mr-3 transition-all group-hover:mr-4`}></span>
                {text}
            </a>
        </li>
    );
};

export default Navbar;