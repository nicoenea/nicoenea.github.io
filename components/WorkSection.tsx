import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import SkillItem from './SkillItem';

interface WorkSectionProps {
  isVisible: boolean;
  onClose: () => void;
}

const WorkSection: React.FC<WorkSectionProps> = ({ isVisible, onClose }) => {
  const [animationClass, setAnimationClass] = useState('');
  const [display, setDisplay] = useState('none');
  
  // Handle opening animation - simplified to prevent double flash
  useEffect(() => {
    if (isVisible) {
      // Set both display and animation in one go
      setDisplay('block');
      // Need a single frame delay to ensure display change takes effect first
      window.requestAnimationFrame(() => {
        setAnimationClass('animate-slideIn');
      });
    } else {
      if (display !== 'none') {
        setAnimationClass('animate-slideOut');
        setTimeout(() => {
          setDisplay('none');
          // Reset animation class when hidden
          setAnimationClass('');
        }, 300);
      }
    }
  }, [isVisible]);

  const handleClose = () => {
    // Call onClose first to ensure buttons reappear immediately
    onClose();
    // Then start the fade out animation
    setAnimationClass('animate-slideOut');
  };

  return (
    <div 
      id="work_container" 
      className={`container ${animationClass}`}
      style={{ display }}
    >
      <div 
        onClick={handleClose} 
        className="cursor-pointer text-[25px] my-[20px] transition-all duration-400 hover:text-primary absolute top-4 right-4 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </div>
      <h1 className="text-[60px] underline">experience.</h1>
      
      <section className="my-[8vh]">
        <h2 className="text-2xl">Software Engineer</h2>
        <h3 className="text-xl">Ficus Data</h3>
        <h5 className="text-base italic">October 2020 - Present</h5>
      
        <p className="text-lg">
          - Conceptualized, developed, and tested different kinds of software, including work in the following different areas: front-end development, back-end development, embedded systems, and mobile app development.
        </p>
        <p className="text-lg">
          - Mobile IoT Application developed using Flutter. Used GCP to make and use REST APIs to transfer data from and to a MySQL database.
        </p>
        <p className="text-lg">
          - Application of machine learning algorithms and system development on an embedded Linux device. Using the device's hardware to make inferences. Device was successfully deployed to multiple locations.
        </p>
        <p className="text-lg">
          - Created web apps for the monitoring and control of the above mentioned projects. Created and implemented APIs to transfer and store data values.
        </p>
        <p className="text-lg">
          - Made use of the Google Cloud Platform to handle SQL Tables, Version Control, deploying websites, and storing image data.
        </p>
        <p className="text-lg">
          - Developed and launched the frontend for an educational platform within 1.5 months using Vue.js
        </p>
        <div id="used">
          <SkillItem skill="Python" />
          <SkillItem skill="MySQL" />
          <SkillItem skill="Dart (Flutter)" />
          <SkillItem skill="JavaScript" />
          <SkillItem skill="HTML/CSS" />
          <SkillItem skill="Bash (Linux)" />
        </div>
      </section>
      
      <section className="my-[8vh]">
        <h2 className="text-2xl">Chinese/English Translation</h2>
        <h3 className="text-xl">National Dong Hwa University</h3>
        <h5 className="text-base italic">May 2018 - August 2020</h5>
        
        <p className="text-lg">
          Assistance in translating and correcting Chinese documents into English for student dormitory announcements, school events, and other important information for international students.
        </p>
        <div id="used">
          <SkillItem skill="中文" />
          <SkillItem skill="English" />
        </div>
      </section>
    </div>
  );
};

export default WorkSection;