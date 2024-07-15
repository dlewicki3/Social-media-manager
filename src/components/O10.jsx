import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import "./O10.css";
import Rece from "./Rece.svg";

gsap.registerPlugin(ScrollTrigger);

function O10() {
  useEffect(() => {
    gsap.fromTo(".big-txt10", 
      { opacity: 0, y: 20 }, 
      { opacity: 1, y: 0, duration: 0.4, ease: "power2.out", 
        scrollTrigger: {
          trigger: ".big-txt10",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    gsap.fromTo(".rece", 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out", 
        scrollTrigger: {
          trigger: ".rece",
          start: "top 500px",
          end: "bottom 300px",
        }
      }
    );

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".small-txt10",
        start: "top 500px",
        end: "bottom 300px",
      }
    });

    tl
      .fromTo(".small-txt10", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.1 })
      .fromTo(".small-txt100", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.1 })
      .fromTo(".small-txt1001", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.1 })
      .fromTo(".small-txt10011", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.1 })
      .fromTo(".small-txt100111", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.1 })
      .fromTo(".small-txt1001111", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.1 })
      .fromTo(".small-txt10011111", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out", stagger: 0.1 });
  }, []);

  return (
    <div className="o10">
      <div className="k10">
        <div className="left10">
          <img className='rece' src={Rece} alt="Rece"></img>
        </div>
        <div className="right10">
          <div className="na-txt10">
            <p className='big-txt10'>
              Współpraca
            </p>
            <br />
            <br />
            <p className='small-txt10'>
              Współpraca ze mną polega na:
            </p>
            <br />
            <br />
            <p className='small-txt100'>
              01 -- Rozmowa z klientem w celu zdefiniowania celów i oczekiwań.
            </p>
            <br />
            <br />
            <p className='small-txt1001'>
              02 -- Opracowanie planu działania.
            </p>
            <br />
            <br />
            <p className='small-txt10011'>
              03 -- Kreacja i publikacja treści.
            </p>
            <br />
            <br />
            <p className='small-txt100111'>
              04 -- Zarządzanie profilami klientów.
            </p>
            <br />
            <br />
            <p className='small-txt1001111'>
              05 -- Realizacja kampanii reklamowych.
            </p>
            <br />
            <br />
            <p className='small-txt10011111'>
              06 -- Analiza wyników i regularne raportowanie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default O10;
