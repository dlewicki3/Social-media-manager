import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O4.css";

gsap.registerPlugin(ScrollTrigger);

function O8() {
  useEffect(() => {
    // Animation for .p11111-txt
    gsap.fromTo(".p11111-txt", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".left8",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    // Animation for .p22222-txt
    gsap.fromTo(".p22222-txt", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".right8",
          start: "top 500px",
          end: "bottom 300px",
      
        }
      }
    );
  }, []);

  return (
    <div className="o8">
      <div className="k8">
        <div className="left8">
          <p className='p11111-txt'>05 -- Analiza i Optymalizacja:</p>
        </div>
        <div className="right8">
          <p className='p22222-txt'>
            Regularne analizowanie wyników publikowanych rolek za pomocą narzędzi analitycznych dostępnych na Instagramie, identyfikacja najlepiej performujących treści i dostosowywanie strategii na ich podstawie, oraz eksperymentowanie z różnymi formatami i stylami treści, aby zobaczyć, co najbardziej rezonuje z odbiorcami.
          </p>
        </div>
      </div>
    </div>
  );
}

export default O8;
