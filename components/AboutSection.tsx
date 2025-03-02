import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import SkillItem from './SkillItem';

interface AboutSectionProps {
  isVisible: boolean;
  onClose: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isVisible, onClose }) => {
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
      id="about_container" 
      className={`container ${animationClass}`}
      style={{ display }}
    >
      <div 
        onClick={handleClose} 
        className="cursor-pointer text-[25px] my-[20px] transition-all duration-400 hover:text-primary absolute top-4 right-4 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </div>
      <h1 className="text-[60px] underline">about.</h1>
      <section className="my-[8vh]">
        <h2 className="text-2xl">about me</h2>
        <p className="text-lg">
          Proactive, customer-oriented software engineer with varied work experience, including machine learning system development, embedded Linux development and deployment, database/backend handling, and mobile app development. Have presented ideas/products to large crowds in the past.
        </p>
        <p className="text-lg">
          I was awarded a complete scholarship to come to Taiwan in 2015. Thanks to TaiwanICDF, I was able to carry out my studies in National Dong Hwa University completely free of charge. Throughout my college years, I obtained various awards and other scholarships, including an award for Outstanding Community Service and the PTSGI Translation Scholarship. After graduation, I joined a start-up company and am working hard to push us into success.
        </p>
      </section>
      
      <section className="my-[8vh]">
        <h2 className="text-2xl">skills</h2>
        <h5 className="text-base italic">languages</h5>
        <div id="used">
          <SkillItem skill="Español" />
          <SkillItem skill="中文" />
          <SkillItem skill="English" />
        </div>
        <h5 className="text-base italic">programming</h5>
        <div id="used">
          <SkillItem skill="Python" />
          <SkillItem skill="MySQL" />
          <SkillItem skill="JavaScript" />
          <SkillItem skill="Dart" />
          <SkillItem skill="HTML/CSS" />
          <SkillItem skill="C/C++" />
          <SkillItem skill="Java" />
          <SkillItem skill="Swift" />
        </div>
      </section>
    </div>
  );
};

export default AboutSection;