import { useEffect } from 'react';
import $ from 'jquery';

const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      $("#loading").addClass("animated fadeOut");
      setTimeout(() => {
        $("#loading").removeClass("animated fadeOut");
        $("#loading").css("display", "none");
        $("#box").css("display", "none");
        $("#about").removeClass("animated fadeIn");
        $("#contact").removeClass("animated fadeIn");
        $("#work").removeClass("animated fadeIn");
      }, 1000);
    }, 1500);
  }, []);

  return (
    <>
      <div id="loading" className="fixed w-full h-full bg-primary z-50 flex justify-center flex-col items-center">
        <div id="spinner" className="w-[50px] h-[50px] border-[12px] border-white border-b-primary rounded-full m-0 animate-spin-slow"></div>
      </div>
      <div id="box" className="w-full h-full z-10 fixed top-0">
        <div className="box1 onlywide w-[16.66vw] h-full inline-block bg-primary animated bounceOutLeft" style={{ animationDelay: '1.7s' }}></div>
        <div className="box2 onlywide w-[16.66vw] h-full inline-block bg-primary -ml-[5px] animated bounceOutLeft" style={{ animationDelay: '1.8s' }}></div>
        <div className="box2 onlywide w-[16.66vw] h-full inline-block bg-primary -ml-[5px] animated bounceOutLeft" style={{ animationDelay: '1.9s' }}></div>
        <div className="box2 w-[16.66vw] h-full inline-block bg-primary animated bounceOutRight" style={{ animationDelay: '1.9s' }}></div>
        <div className="box2 onlywide w-[16.66vw] h-full inline-block bg-primary animated bounceOutRight" style={{ animationDelay: '1.8s' }}></div>
        <div className="box2 onlywide w-[16.66vw] h-full inline-block bg-primary animated bounceOutRight" style={{ animationDelay: '1.7s' }}></div>
      </div>
    </>
  );
};

export default Loading;