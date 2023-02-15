
/* eslint-disable */
import { useState } from 'react';
import iCircles from './img/circles.gif';
import iName from './img/Stanislav_00000.png';
import iLetters from './img/letters.png';

import iSymb1 from './img/Comp-1.gif';
import iSymb2 from './img/Comp-2.gif';
import iSymb3 from './img/Comp-3.gif';
import iSymb4 from './img/Comp-4.gif';
import iSymb5 from './img/Comp-5.gif';
import iSymb6 from './img/Comp-6.gif';
import iSymb7 from './img/Comp-7.gif';
import iSymb8 from './img/Comp-8.gif';

import iSP1 from './img/SP1.png';
import iSP2 from './img/SP2.png';
import iSP3 from './img/SP3.png';
import iSP4 from './img/SP4.png';
import iSP5 from './img/SP5.png';
import iSP6 from './img/SP6.png';


import iLogo from './img/logo.png';

import { useParallax } from 'react-scroll-parallax';

function App() {


  const [showSymbols, setShowSymbols] = useState(false);

  const handleOnEnter = () => {
    scrollToContent();
    setShowSymbols(true);
  }

  const handleOnExit = () => {
    setShowSymbols(false);
  }


  const { ref } = useParallax({ 
    onEnter: handleOnEnter,
    onExit: handleOnExit
  });

  const scrollToContent = () => {
    window.scrollBy({ 
      top: 2000, // could be negative value
      left: 0, 
      behavior: 'smooth' 
    });
    setShowSymbols(true);
  }


  
  return (

      <div className="container">
        <header className="header">
          <div className='noise'></div>
          <img className='circle' src={iCircles}></img>
          <img className='name' src={iName}></img>
          <img className='letters' src={iLetters}></img>
          <button onClick={scrollToContent} className={`btn-scroll ${showSymbols && 'hide'}`}>
            <span className="arrow"></span>
            <span>Graphic Novel Presentation</span>
            <span className="arrow"></span>
          </button>
        </header>
        
        <div className="content">

          <div className='ref-show' ref={ref}></div>
          <div className='noise'></div>
          {/* <Parallax speed={100} endScroll={275}> */}
          <div className={`symb-area ${showSymbols && 'show'}`} style={{ top: 0, left: 0 }}>
              <img src={iSymb1} style={{ top: '0%', left: '10%' }}></img>
              <img src={iSymb2} style={{ top: '0%', left: '50%' }}></img>
              <img src={iSymb3} style={{ top: '0%', left: '100%' }}></img>
              <img src={iSymb4} style={{ top: '20%', left: '25%' }}></img>
              <img src={iSymb5} style={{ top: '35%', left: '40%' }}></img>
              <img src={iSymb6} style={{ top: '50%', left: '5%' }}></img>
              <img src={iSymb7} style={{ top: '55%', left: '40%' }}></img>
              <img src={iSymb8} style={{ top: '60%', left: '20%' }}></img>
          </div>

          <div className={`symb-area ${showSymbols && 'show-2'}`} style={{ top: 0, left: '50%' }}>
              <img src={iSymb3} style={{ top: '0%', left: '80%' }}></img>
              <img src={iSymb4} style={{ top: '0%', left: '35%' }}></img>
              <img src={iSymb5} style={{ top: '20%', left: '50%' }}></img>
              <img src={iSymb6} style={{ top: '20%', left: '75%' }}></img>
              <img src={iSymb1} style={{ top: '40%', left: '70%' }}></img>
              <img src={iSymb2} style={{ top: '60%', left: '50%' }}></img>
              <img src={iSymb7} style={{ top: '70%', left: '80%' }}></img>
              <img src={iSymb8} style={{ top: '80%', left: '20%' }}></img>
          </div>

          <div className={`symb-area ${showSymbols && 'show-3'}`} style={{ top: 0, left: '50%' }}>
              <img src={iSymb8} style={{ bottom: '4%', left: '80%' }}></img>
              <img src={iSymb7} style={{ bottom: '0%', left: '0%' }}></img>
              <img src={iSymb6} style={{ bottom: '10%', left: '50%' }}></img>
              <img src={iSymb5} style={{ bottom: '0%', left: '35%' }}></img>
              <img src={iSymb4} style={{ bottom: '85%', left: '55%' }}></img>
              <img src={iSymb3} style={{ bottom: '50%', left: '42%' }}></img>
              <img src={iSymb2} style={{ bottom: '70%', left: '70%' }}></img>
              <img src={iSymb1} style={{ bottom: '78%', left: '20%' }}></img>
          </div>

          <div className={`symb-area ${showSymbols && 'show-4'}`} style={{ top: 0, left: 0 }}>
              <img src={iSymb1} style={{ bottom: '2%', left: '80%' }}></img>
              <img src={iSymb8} style={{ bottom: '0%', left: '0%' }}></img>
              <img src={iSymb4} style={{ bottom: '10%', left: '50%' }}></img>
              <img src={iSymb7} style={{ bottom: '0%', left: '35%' }}></img>
              <img src={iSymb3} style={{ bottom: '84%', left: '55%' }}></img>
              <img src={iSymb6} style={{ bottom: '60%', left: '12%' }}></img>
              <img src={iSymb2} style={{ bottom: '76%', left: '45%' }}></img>
              <img src={iSymb5} style={{ bottom: '82%', left: '20%' }}></img>
          </div>
          

          <div className={`description-container ${showSymbols && 'show'}`}>
              <div className='logo'>
                  <img src={iLogo}></img>
              </div>
              <div className='text'>
                  <span>Cafe Pracovna</span>
                  <span>Vlkova 36, 130 00 Praha 3-Žižkov</span>
                  <span>0<p>4</p>.0<p>3</p>.2023</span>
                  <span><p>18</p>:00</span>
                  <span>free entry</span>
              </div>
              <div className='sponsors'>
                  <img src={iSP1}></img>
                  <img src={iSP2} style={{ height: "calc(100% - 40px)", margin: '0 20px 13px 15px' }}></img>
                  <img src={iSP3}></img>
                  <img src={iSP4} style={{ height: "calc(100% - 35px)", margin: '0 20px 13px 10px' }}></img>
                  <img src={iSP5} style={{ height: "calc(100% - 35px)", margin: '0 20px 13px 0px', backgroundColor: 'white' }}></img>
                  <img src={iSP6} style={{ height: "calc(100% - 35px)", margin: '0 20px 13px 0px' }}></img>
              </div>
              
          </div>


          {/* </Parallax> */}

          {/* <div className='symb-area' style={{ top: 0, left: '50%' }}>
              <img src={iSymb4} style={{ top: '0%', left: '10%' }}></img>
              <img src={iSymb6} style={{ top: '0%', left: '50%' }}></img>
              <img src={iSymb2} style={{ top: '0%', left: '100%' }}></img>
              <img src={iSymb8} style={{ top: '20%', left: '25%' }}></img>
              <img src={iSymb1} style={{ top: '35%', left: '50%' }}></img>
              <img src={iSymb3} style={{ top: '50%', left: '5%' }}></img>
              <img src={iSymb5} style={{ top: '55%', left: '40%' }}></img>
              <img src={iSymb7} style={{ top: '60%', left: '20%' }}></img>
          </div> */}

        </div>
       
      </div>
  );
}

export default App;
