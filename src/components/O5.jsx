import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O4.css";

gsap.registerPlugin(ScrollTrigger);

const O5 = () => {
  useEffect(() => {
    // Animation for .p1-txt
    gsap.fromTo(".p11-txt", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".left5",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    // Animation for .p2-txt
    gsap.fromTo(".p22-txt", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".right5",
          start: "top 500px",
          end: "bottom 300px",
     
        }
      }
    );
  }, []);

  return (
    <div className="o5">
      <div className="k5">
        <div className="left5">
          <p className='p11-txt'>02 -- Hook (Haczyk)</p>
        </div>
        <div className="right5">
          <p className='p22-txt'>
            Tworzenie mocnych, angażujących otwarć wideo, które przyciągną uwagę widza w pierwszych sekundach, poprzez używanie jasnych i wyrazistych wizualnie elementów oraz tekstów wzbudzających ciekawość i zachęcających do dalszego oglądania, a także eksperymentowanie z pytaniami, wyzwaniami, zaskakującymi faktami lub silnymi wizualnie scenami na początku każdego wideo.
          </p>
        </div>
      </div>
    </div>
  );
}

export default O5;
