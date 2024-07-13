import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import "./O1.css";

function O1() {
  useEffect(() => {
    gsap.fromTo(
      ".big-txt1", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, delay: 0.1 }
    );
    gsap.fromTo(
      ".big-txt2", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, delay: 0.3 }
    );
    gsap.fromTo(
      ".big-txt3", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }
    );
    gsap.fromTo(
      ".small-txt1", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, delay: 0.7 }
    );
    gsap.fromTo(
      ".small-txt2", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, delay: 0.9 }
    );
    gsap.fromTo(
      ".small-txt3", 
      { y: 50, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, delay: 1.1 }
    );
  }, []);

  return (
    <div className="o1">
      <div className="k1">
        <div className="content">
          <p className='big-txt1'>SOCIAL MEDIA</p>
          <p className='big-txt2'>MANAGER</p>
          <p className='big-txt3'>PORTFOLIO</p>
        </div>
        <div className="under-content">
          <div className='blabla-txt-div'>
            <p className='small-txt1'>Dominik Lewicki</p>
            <br />
            <p className='small-txt2'>Social Media Specialist</p>
            <br />
            <p className='small-txt3'>& Front-End Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default O1;
