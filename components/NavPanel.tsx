import React from 'react';
import NavLink from './NavLink';

interface NavPanelProps {
  onShowAbout: () => void;
  onShowWork: () => void;
  onShowContact: () => void;
  disabled?: boolean;
}

const NavPanel: React.FC<NavPanelProps> = ({ 
  onShowAbout, 
  onShowWork, 
  onShowContact, 
  disabled = false
}) => {
  // Add a fade-in animation class if not disabled
  const visibilityClass = disabled 
    ? 'opacity-0 pointer-events-none' // Hidden with no interaction
    : 'opacity-100 transition-opacity duration-200'; // Quick 200ms fade in
  
  return (
    <>
      {/* Desktop navigation buttons with quick fade in/out */}
      <NavLink 
        id="about" 
        onClick={onShowAbout} 
        className={`w-[10vw] h-[10vw] text-center text-[25px] transform -rotate-90 bg-transparent text-white fixed left-0 bottom-[40vh] flex flex-col justify-center z-[4] rounded-b-[100px] hover:bg-primary/90 hover:cursor-pointer ${visibilityClass} max-md:hidden`}
        style={{padding: '0 20px'}}
      >
        about
      </NavLink>
      
      <NavLink 
        id="work" 
        onClick={onShowWork} 
        className={`w-[10vw] h-[10vw] text-center text-[25px] transform rotate-90 bg-transparent text-white fixed right-0 bottom-[40vh] flex flex-col justify-center z-[4] rounded-b-[100px] hover:bg-primary/90 hover:cursor-pointer ${visibilityClass} max-md:hidden`}
        style={{padding: '0 20px'}}
      >
        work
      </NavLink>
      
      <NavLink 
        id="contact" 
        onClick={onShowContact} 
        className={`w-[10vw] h-[10vw] text-center text-[25px] bg-transparent text-white fixed bottom-0 left-[45vw] flex flex-col justify-center z-[4] rounded-t-[100px] hover:bg-primary/90 hover:cursor-pointer ${visibilityClass} max-md:hidden`}
      >
        contact
      </NavLink>
    </>
  );
};

export default NavPanel;