import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1400,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (  
    <div className="intro" id="intro">
       
      <div className="left">
        <div className="imgContainer">
          <img src="assets/hyy.png" alt="" />
        </div>
        <div className="icon-bar">
      <a href="#" className="facebook" target="_thapa">
        Click here to visit <i className="fab fa-facebook-square"></i>
      </a>

      <a href="#" className="telegram" target="_thapa">
        Click here to visit <i className="fab fa-telegram-plane"></i>
      </a>

      <a
        href="https://www.instagram.com/saurabhp643/"
        className="instagram"
        target="_thapa"
      >
       Click here to visit <i className="fab fa-instagram"></i>
      </a>

      <a href="#" className="linkedin" target="_thapa">
        Click here visit <i className="fab fa-linkedin"></i>
      </a>

      <a
        href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
        className="youtube"
        target="_thapa"
      >
        Click here to visit <i className="fab fa-youtube-square"></i>
      </a>
    </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Saurabh Pandey</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
       
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
        
        <div className="skills">
        <div className="skills-bar">
          <div className="bar">
            <div className="info">
              <span>HTML</span>
            </div>
            <div className="progress-line"><span className="html"></span></div>
            <div className="bar">
              <div className="info">
                <span>CSS</span>
              </div>
              <div className="progress-line"><span className="css"></span></div>
              <div className="bar">
                <div className="info">
                  <span>JAVASCRIPT</span>
                </div>
                <div className="progress-line"><span className="bootstrap"></span></div>
                <div className="bar">
                  <div className="info">
                    <span>REACT JS</span>
                  </div>
                  <div className="progress-line">
                    <span className="javascript"></span>
                  </div>
                  <div className="bar">
                    <div className="info">
                      <span>C++</span>
                    </div>
                    <div className="progress-line"><span className="c"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    
      </div>
    </div>



        
  );
}
