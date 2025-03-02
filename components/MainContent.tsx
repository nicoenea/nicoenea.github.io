import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SocialLink from './SocialLink';

interface MainContentProps {
  onShowAbout: () => void;
  onShowWork: () => void;
  onShowContact: () => void;
  disabled?: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ onShowAbout, onShowWork, onShowContact, disabled = false }) => {
  return (
    <div id="middle" className="w-full h-[90vh] flex flex-col justify-center fixed top-0 text-center z-[1] text-white pb-[10vh] animated slideInDown" style={{ animationDelay: '2.0s' }}>
      <h1 className="text-primary text-[70px] font-comfortaa underline font-bold">nicolasenea.</h1>
      <h2 className="text-2xl font-bold mt-2">Software Engineer / 1337 / Human</h2>
      <div id="menu" className={`w-full text-center my-[4vh] mx-0 hidden md:block ${disabled ? 'opacity-0' : 'opacity-100 transition-opacity duration-200'}`}>
        <a 
          onClick={disabled ? undefined : onShowAbout} 
          className="mx-[6%] text-[19px] text-white underline cursor-pointer"
        >
          about
        </a>
        <a 
          onClick={disabled ? undefined : onShowWork} 
          className="mx-[6%] text-[19px] text-white underline cursor-pointer"
        >
          work
        </a>
        <a 
          onClick={disabled ? undefined : onShowContact} 
          className="mx-[6%] text-[19px] text-white underline cursor-pointer"
        >
          contact
        </a>
      </div>
      <table className="w-[20%] my-[3vh] mx-auto md:w-[60%]">
        <tbody>
          <tr className="flex justify-center space-x-4">
            <SocialLink href="mailto:nicolasenea17@gmail.com" icon={faEnvelope} animationDelay="2.4s" />
            <SocialLink href="https://github.com/nicoenea" icon={faGithub} animationDelay="2.6s" />
            <SocialLink href="https://www.linkedin.com/in/nicolasenea/" icon={faLinkedin} animationDelay="2.8s" />
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MainContent;