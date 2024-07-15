import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O4.css";

gsap.registerPlugin(ScrollTrigger);

function O6() {
  useEffect(() => {
    // Animation for .p111-txt
    gsap.fromTo(".p111-txt", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".left6",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    // Animation for .p222-txt
    gsap.fromTo(".p222-txt", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".right6",
          start: "top 500px",
          end: "bottom 300px",
    
        }
      }
    );
  }, []);

  return (
    <div className="o6">
      <div className="k6">
        <div className="left6">
          <p className='p111-txt'>03 -- Zoptymalizowane Opisy i Hashtagi:</p>
        </div>
        <div className="right6">
          <p className='p222-txt'>
            Stosowanie odpowiednich hashtagów, które są aktualnie popularne i związane z treścią wideo, oraz pisanie krótkich i angażujących opisów, które dopełniają treść wideo i zachęcają do interakcji.
          </p>
        </div>
      </div>
    </div>
  );
}

export default O6;
