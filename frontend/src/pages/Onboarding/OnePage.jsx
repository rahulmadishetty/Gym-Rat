import React, { useContext } from 'react'
import "./PageOne.css";
import { OnboardingContext } from '../../context/Onboarding';

const OnePage = ({ onButtonClick}) => {
  const {handleOnChange} = useContext(OnboardingContext);

  return(
  <>
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto", padding: "50px" }}
    >
      <form className="measure">
        <h2>WELCOME! FIRST THINGS FIRST...</h2>
        <p style={{ color: "#6b6b6b" }}>Provide basic details</p>
        <fieldset id="sign_up" className="fieldset">
          <div className="input_info">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="full-name"
              style={{ textAlign: "left" }}
            >
              Full Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="full-name"
              id="full-name"
              size="30"
              onChange={(e)=> {handleOnChange("fName", e.target.value)}}
              placeholder="Enter Username"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
          <div className="input_info">
            <label
              className="db lh-copy f6 mb1"
              htmlFor="display-name"
              style={{ textAlign: "left" }}
            >
              Display Name
            </label>
            <input
              className="f6 br2 ph3 pv2 mb2 dib black w-100"
              type="text"
              name="display-name"
              onChange={(e)=> {handleOnChange("dName", e.target.value)}}
              id="display-name"
              placeholder="Enter Display Name"
              style={{
                borderStyle: "solid",
                borderWidth: "1px",
                borderColor: "#EAEEF5",
              }}
            />
          </div>
        </fieldset>
        <div>
          <input
            className="f6 grow br2 ph3 pv2 mb2 dib white"
            style={{
              borderStyle: "none",
              width: "100%",
              backgroundColor: "#69A2B0",
            }}
            type="submit"
            value="Create Workspace"
            onClick={() => onButtonClick("pagetwo")}
          />
        </div>
      </form>
    </main>
  </>)
}

export default OnePage;
