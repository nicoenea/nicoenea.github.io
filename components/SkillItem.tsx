import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

interface SkillItemProps {
  skill: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="text-[14px] inline-block px-[10px] py-[8px] border-2 border-white/70 bg-white/10 m-[5px] rounded-[50px]">
      <FontAwesomeIcon icon={faCircle} size="xs" className="text-white/90" />&nbsp;{skill}
    </div>
  );
};

export default SkillItem;