import React from 'react';

interface NavLinkProps {
  id: string;
  onClick: () => void;
  animationDelay?: string;
  className?: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ 
  id, 
  onClick, 
  animationDelay = "2.2s", 
  className = "", 
  children 
}) => {
  return (
    <a 
      id={id} 
      onClick={onClick} 
      className={`animated fadeIn cursor-pointer ${className}`} 
      style={{ animationDelay }}
    >
      {children}
    </a>
  );
};

export default NavLink;