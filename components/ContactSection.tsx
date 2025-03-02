import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

interface ContactSectionProps {
  isVisible: boolean;
  onClose: () => void;
}

const ContactSection: React.FC<ContactSectionProps> = ({ isVisible, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div 
      id="contact_container" 
      className={`container ${animationClass}`}
      style={{ display }}
    >
      <div 
        onClick={handleClose} 
        className="cursor-pointer text-[25px] my-[20px] transition-all duration-400 hover:text-primary absolute top-4 right-4 bg-white/10 rounded-full w-10 h-10 flex items-center justify-center hover:bg-white/20"
      >
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
      <h1 className="text-[60px] underline">contact.</h1>
      <section className="my-[8vh]">
        <h2 className="text-2xl">contact me</h2>
        <p>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="name" 
              required 
              value={formData.name}
              onChange={handleChange}
              className="w-[46%] mx-[1%] my-[20px] bg-transparent border-0 border-b-[3px] border-white/50 px-[10px] py-[8px] font-josefin text-lg transition-all duration-400 text-white font-bold focus:outline-none focus:border-white"
            />
            <input 
              type="email" 
              name="email"
              placeholder="email" 
              required 
              value={formData.email}
              onChange={handleChange}
              className="w-[46%] mx-[1%] my-[20px] bg-transparent border-0 border-b-[3px] border-white/50 px-[10px] py-[8px] font-josefin text-lg transition-all duration-400 text-white font-bold focus:outline-none focus:border-white"
            />
            <br />
            <textarea 
              name="message"
              placeholder="your message" 
              required 
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-[96%] mx-[1%] my-[20px] bg-transparent border-0 border-b-[3px] border-white/50 px-[10px] py-[8px] font-josefin text-lg resize-none transition-all duration-400 text-white font-bold focus:outline-none focus:border-white"
            />
            <br />
            <button 
              type="submit"
              className="text-lg font-josefin text-white bg-transparent border-[3px] border-white px-[40px] py-[8px] rounded-[80px] font-bold my-[2vh] mx-[10px] transition-all duration-400 hover:cursor-pointer hover:text-primary hover:bg-white"
            >
              send
            </button>
          </form>
        </p>
      </section>
    </div>
  );
};

export default ContactSection;