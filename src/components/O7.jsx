import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O4.css";

gsap.registerPlugin(ScrollTrigger);

function O7() {
  useEffect(() => {
    // Animation for .p1111-txt
    gsap.fromTo(".p1111-txt", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".left7",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    // Animation for .p2222-txt
    gsap.fromTo(".p2222-txt", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".right7",
          start: "top 500px",
          end: "bottom 300px",
 
        }
      }
    );
  }, []);

  return (
    <div className="o7">
      <div className="k7">
        <div className="left7">
          <p className='p1111-txt'>04 -- Konsystencja i Regularność:</p>
        </div>
        <div className="right7">
          <p className='p2222-txt'>
            Publikowanie rolek regularnie, przynajmniej 3-4 razy w tygodniu, aby utrzymać aktywność profilu, oraz stworzenie harmonogramu publikacji, który pozwoli na systematyczne dostarczanie treści.
          </p>
        </div>
      </div>
    </div>
  );
}

export default O7;
