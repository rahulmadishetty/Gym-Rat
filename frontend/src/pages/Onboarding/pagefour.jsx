import React, { useState } from 'react'
import "./PageThree.css";
import Ectomorph from "./Ectomorph.png";
import Mesomorph from "./Mesomorph.png";
import Endomorph from "./Endomorph.png";
import BodyTypeDesc from "./BodyTypeDesc.png";


const PageFour = ({ onButtonClick }) => {
  return(
  <>
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto", marginTop: "50px" }}
    >
      <h2>Choose your body type</h2>
      <p style={{ color: "#C0C0C0" }}>
        Choose the one that is most similar to yours now. There are no good or bad body types.
      </p>
      <div
        className="center ph4 selectionDiv"
        style={{ width: "100%", height: "310px" }}
      >
        <div className="mw5 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          onClick={() => onButtonClick("pagefive")}
        >
          <img
            src={Ectomorph}
            className="h2 w2"
            title="Ectomorph user icon"
            alt="user-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Ectomorph</h1>
        </div>

        <div className="mw5 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          onClick={() => onButtonClick("pagefive")}
        >
          <img
            src={Mesomorph}
            className="h2 w2"
            title="Mesomorph user icon"
            alt="users-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Mesomorph</h1>
        </div>

        <div className="mw5 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          onClick={() => onButtonClick("pagefive")}
        >
          <img
            src={Endomorph}
            className="h2 w2"
            title="Endomorph user icon"
            alt="user-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Endomorph</h1>
        </div>
      </div>
      <div>
        <img
            src={BodyTypeDesc}
            className="h2 w2"
            title="BodyTypeDesc user icon"
            alt="user-icon"
            style={{width:"400px",height: "250px",alignSelf: "center"}}
          />
        </div>
    </main>
  </>)
}

export default PageFour
