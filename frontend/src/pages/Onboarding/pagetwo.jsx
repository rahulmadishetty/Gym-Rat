import React, { useContext } from 'react'
import "./PageTwo.css";
import Age1 from "./Age1.png";
import Age2 from "./Age2.png";
import Age3 from "./Age3.png";
import Age4 from "./Age4.png";
import { OnboardingContext } from '../../context/Onboarding';

const PageTwo = ({ onButtonClick }) => {
  const {handleOnChange} = useContext(OnboardingContext);

  return(
  <>
    <main
      className="pt5 black-80"
      style={{ maxWidth: "65%", maxHeight: "25%", margin: "auto", marginTop: "50px" }}
    >
      <h2>Build your perfect body</h2>
      <p style={{ color: "#C0C0C0" }}>
        According to your Age and BMI
      </p>
      <div
        className="center ph4 selectionDiv"
        style={{ width: "100%", height: "310px" }}
      >
        <div className="mw5 mx-2 my-2 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          // onClick={() => onButtonClick("pagethree")}
          onClick={(e)=> {
            handleOnChange("age", "below30");
            onButtonClick("pagethree")
          }}
        >
          <img
            src={Age1}
            className="h2 w2"
            title="Age1 user icon"
            alt="user-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Age: 18-29</h1>
        </div>

        <div className="mw5 mx-2 my-2 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          // onClick={() => onButtonClick("pagethree")}
          onClick={(e)=> {
            handleOnChange("age", "below40");
            onButtonClick("pagethree")
          }}
        >
          <img
            src={Age2}
            className="h2 w2"
            title="Age2 user icon"
            alt="users-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Age: 30-39</h1>
        </div>

        <div className="mw5 mx-2 my-2 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card" data-id="age"
          
          // onClick={() => onButtonClick("pagethree")}
          onClick={(e)=> {
            handleOnChange("age", "below50");
            onButtonClick("pagethree")
          }}
        >
          <img
            src={Age3}
            className="h2 w2"
            title="Age3 user icon"
            alt="user-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Age: 40-49</h1>
        </div>
        <div className="mw5 mx-2 my-2 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          // onClick={() => onButtonClick("pagethree")}
          onClick={(e)=> {
            handleOnChange("age", "above50");
            onButtonClick("pagethree")
          }}
        >
          <img
            src={Age4}
            className="h2 w2"
            title="Age4 user icon"
            alt="user-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Age: 50+</h1>
        </div>
      </div>
    </main>
  </>)
}

export default PageTwo
