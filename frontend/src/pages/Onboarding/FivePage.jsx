import React from 'react'
import { useNavigate } from 'react-router-dom';
import tick from "./tick.png";


const FivePage = () => {

  const navigate = useNavigate();
  const handleSubmit =() =>{
    try{
      navigate("/initializing");
    }
    catch{
      console.log(err)
    }
  }

  return(
  <>
    <div
      className="mw5 mx-3 my-2 bg-white pa2-ns mt5 dib"
      style={{ maxWidth: "30%", maxHeight: '30%' }}
    >
      <img
        src={tick}
        className="h3 w3"
        title="success icon"
        alt="tick-icon"
        style={{marginTop: "55px"}}
      />
      <div className="center"><h3 className="">CONGRATULATIONS!!</h3></div>
      <p style={{ color: "#C0C0C0" }}>
        You have completed Onboarding, You are now officially a Gym Rat!
      </p>
      <input
        className="f6 grow br2 ph3 pv2 mb2 dib white"
        style={{ borderStyle: "none", width: "100%", backgroundColor: '#69A2B0', marginTop: "55px" }}
        type="submit"
        value="Home Page"
        onClick={handleSubmit}
        data-id="submit-data"
      />
    </div>
  </>)
}

export default FivePage
