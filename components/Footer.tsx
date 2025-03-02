import React from 'react';

const Footer: React.FC = () => {
  return (
    <div id="footer" className="text-white w-auto py-[2vh] px-[4vw] text-right fixed z-[1] bottom-0 right-0 text-base font-bold md:text-center">
      made on earth by a human <br /> 
      <a href="https://nicoenea.github.io" className="text-primary">Nicolas Enea</a>
    </div>
  );
};

export default Footer;