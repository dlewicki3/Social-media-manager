import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O4.css";

gsap.registerPlugin(ScrollTrigger);

function O4() {
  useEffect(() => {
    // Animation for .p1-txt
    gsap.fromTo(".p1-txt", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".left4",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    // Animation for .p2-txt
    gsap.fromTo(".p2-txt", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".right4",
          start: "top 500px",
          end: "bottom 300px",
       
        }
      }
    );
  }, []);

  return (
    <div className="o4">
      <div className="k4">
        <div className="left4">
          <p className='p1-txt'>01 -- Trendujące Audio</p>
        </div>
        <div className="right4">
          <p className='p2-txt'>Regularne monitorowanie trendów audio na Instagramie i TikToku oraz wykorzystywanie popularnych utworów i dźwięków w rolkach, co zwiększa szansę na wyświetlanie treści przez algorytm, z użyciem narzędzi takich jak Trend Tok lub Instazood do identyfikacji najnowszych trendów audio.</p>
        </div>
      </div>
    </div>
  );
}

export default O4;
