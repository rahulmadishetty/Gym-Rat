import React from 'react'
import "./PageOne.css";

const PageOne = ({ onButtonClick}) => {
  return(
  <>
    <main
      className="pt5 black-80 center"
      style={{ maxWidth: "40%", maxHeight: "30%", margin: "auto", padding: "50px" }}
    >
      <form className="measure">
        <h2>WELCOME! FIRST THINGS FIRST...</h2>
        <p style={{ color: "#C0C0C0" }}>Provide basic details</p>
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
              backgroundColor: "#664DE5",
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

export default PageOne
