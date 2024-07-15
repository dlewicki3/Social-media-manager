import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O11.css";
import Me from "./Me.svg";
import {Navigate} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const O11 = () => {
  useEffect(() => {
    gsap.fromTo(".me-foto", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", 
        scrollTrigger: {
          trigger: ".me-foto",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    gsap.fromTo(".btn-11", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", 
        scrollTrigger: {
          trigger: ".btn-11",
          start: "top 500px",
          end: "bottom 300px",
     
        }
      }
    );

    gsap.fromTo(".big-txt11", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", 
        scrollTrigger: {
          trigger: ".big-txt11",
          start: "top 500px",
          end: "bottom 300px",
    
        }
      }
    );
  }, []);

  return (
    <div className="o11">

      {/* <Link to = "/o11">GO TO COS TAM COS TAM</Link> */}
      <div className="k11">
        <div className="left11">
          <p className='big-txt11'>
            Sprawmy, by Twoje wymarzone media społecznościowe
            <br />
            stały się rzeczywistością
          </p>
          <br />
          <button className='btn-11'
         
          >Popracujmy razem!</button>
        </div>
        <div className="right11">
          <img className='me-foto' src={Me} alt="Me"></img>
        </div>
      </div>
    </div>
  );
}

export default O11;
