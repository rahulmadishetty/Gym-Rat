import React, { useContext, useState } from 'react'
import "./PageThree.css";
import loseweight from "./loseweight.png";
import gainweight from "./gainweight.png";
import shredweight from "./shredweight.png";
import { OnboardingContext } from '../../context/Onboarding';


const PageThree = ({ onButtonClick }) => {
  const {handleOnChange} = useContext(OnboardingContext);

  const [loseweightUser, setLoseweightUser] = useState(false)

  const onClickSingleUser = () => {
    setLoseweightUser(prevLoseweightUser => !prevLoseweightUser)
  }

  const [gainweightUser, setGainweightUser] = useState(false)

  const onClickMultiUser = () => {
    setGainweightUser(prevMultiUser => !prevMultiUser)
  }

  const [shrededUser, setShrededUser] = useState(false)

  const onClickShrededUser = () => {
    setShrededUser(prevShrededUser => !prevShrededUser)
  }

  return(
  <>
    <main
      className="pt5 black-80"
      style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto", marginTop: "50px" }}
    >
      <h2>Choose your goal</h2>
      <p style={{ color: "#C0C0C0" }}>
        You can always change later
      </p>
      <div
        className="center ph4 selectionDiv"
        style={{ width: "100%", height: "310px" }}
      >
        <div className="mw5 mx-2 my-3 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          // onClick={() => onButtonClick("pagefour")}
          onClick={(e)=> {
            handleOnChange("goal", "loseweight");     
            onButtonClick("pagefour")
          }}
        >
          <img
            src={loseweight}
            className="h2 w2"
            title="loseweight user icon"
            alt="user-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Lose Weight</h1>
        </div>

        <div className="mw5 mx-2 my-3 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          // onClick={() => onButtonClick("pagefour")}
          onClick={(e)=> {
            handleOnChange("goal", "gainmuscle");     
            onButtonClick("pagefour")
          }}
        >
          <img
            src={gainweight}
            className="h2 w2"
            title="gainweight user icon"
            alt="users-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Gain Muscle</h1>
        </div>

        <div className="mw5 mx-2 my-3 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
          
          // onClick={() => onButtonClick("pagefour")}
          onClick={(e)=> {
            handleOnChange("goal", "getshredded");     
            onButtonClick("pagefour")
          }}
        >
          <img
            src={shredweight}
            className="h2 w2"
            title="shredweight user icon"
            alt="user-icon"
            style={{width:"145px",height: "185px",alignSelf: "center"}}
          />
          <h1 className="f4 pl2 pr2">Get Shredded</h1>
          
        </div>

      </div>
      {/* <input
        className="f6 grow br2 ph3 pv2 mb2 dib white submitButton"
        style={{
          borderStyle: "none",
          width: "66%",
          backgroundColor: "#664DE5",
        }}
        type="submit"
        value="Create Workspace"
        onClick={() => onButtonClick("pagefour")}
      /> */}
    </main>
  </>)
}

export default PageThree
