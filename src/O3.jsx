import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O3.css";

gsap.registerPlugin(ScrollTrigger);

function O3() {
  useEffect(() => {
    // Animation for .skills-txt
    gsap.fromTo(".skills-txt", 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".o3",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    // Animation for .bottom3-txt
    gsap.fromTo(".bottom3-txt", 
      { opacity: 0, y: 100 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.4,
        scrollTrigger: {
          trigger: ".bottom3",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );
  }, []);

  return (
    <div className="o3">
      <div className="k3">
        <div className="top3">
          <p className='skills-txt'>Social Media<br /> Strategy</p>
        </div>
        <div className="bottom3">
          <p className="bottom3-txt">
            Algorytm Instagrama w 2024 roku skupia się na promowaniu krótkich rolkach wideo (Reels) trwających od 5 do 10 sekund. Aby skutecznie zwiększyć swoje zasięgi na tej platformie, konieczne jest stosowanie trendujących audio oraz wykorzystanie techniki hook, czyli elementu, który przyciągnie uwagę widza już na samym początku wideo. Poniżej przedstawiam strategię marketingową, która pomoże w osiągnięciu tych celów.
          </p>
        </div>
      </div>
    </div>
  );
}

export default O3;
