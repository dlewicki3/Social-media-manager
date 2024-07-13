import React from 'react'
import "./O2.css";
import Cos from './Pro.svg';

function O2() {
  return (
 <div className="o2">
    <div className="k2">
        <div className="left2">
            <img className='foto' src = {Cos}></img>
        </div>
        <div className="right2">
            <div className="top2">ABOUT ME</div>
            <div className="bottom2">
            Witam, nazywam się Dominik Lewicki, specjalizuję się w tworzeniu stron internetowych i zarządzaniu mediami społecznościowymi. Sztuczna inteligencja jest kluczowym elementem mojej pracy.
            </div>
        </div>
    </div>
 </div>
  )
}

export default O2