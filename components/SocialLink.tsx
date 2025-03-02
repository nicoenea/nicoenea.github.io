import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SocialLinkProps {
  href: string;
  icon: IconDefinition;
  animationDelay: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, animationDelay }) => {
  return (
    <td className="animated zoomIn px-2" style={{ animationDelay }}>
      <a className="social text-white text-[22px] transition-all duration-400 text-center hover:text-primary hover:cursor-pointer" href={href}>
        <FontAwesomeIcon icon={icon} />
      </a>
    </td>
  );
};

export default SocialLink;