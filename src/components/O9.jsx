import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O4.css";

gsap.registerPlugin(ScrollTrigger);

function O9() {
  useEffect(() => {
    // Animation for .p111111-txt
    gsap.fromTo(".p111111-txt", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".left9",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    // Animation for .p222222-txt
    gsap.fromTo(".p222222-txt", 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".right9",
          start: "top 500px",
          end: "bottom 300px",

        }
      }
    );
  }, []);

  return (
    <div className="o9">
      <div className="k9">
        <div className="left9">
          <p className='p111111-txt'>06 -- Interakcja z Publicznością:</p>
        </div>
        <div className="right9">
          <p className='p222222-txt'>
            Aktywne odpowiadanie na komentarze i wiadomości, aby zbudować lojalność i zaangażowanie społeczności, oraz korzystanie z funkcji ankiet, quizów i pytań w rolkach oraz na Instagram Stories, aby zwiększyć interakcję z użytkownikami.
          </p>
        </div>
      </div>
    </div>
  );
}

export default O9;
