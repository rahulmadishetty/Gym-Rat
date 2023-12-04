import React, { useContext, useState } from 'react'
import "./PageThree.css";
import Ectomorph from "./Ectomorph.png";
import Mesomorph from "./Mesomorph.png";
import Endomorph from "./Endomorph.png";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons'

import { Tooltip } from 'react-tooltip'
import { OnboardingContext } from '../../context/Onboarding';
import BaseRequest from '../../services/requests/Base';
import { BASE_URL } from '../../constants/routes';

const BodyTypeTooltip = () => (
  <div>
    <p className='text-start'>Grip your opposite wrist using your thumb and index finger. <br /> If you're right-handed, use the right hand to grab your left wrist.</p>
    <p className='text-start'>
      Thumb and index finger:
      <ul>
        <li>
          Ectomorph - wrapping around with ease
        </li>
        <li>
          Mesomorph - touching each other
        </li>
        <li>
          Endomorph - doesn't come into contact
        </li>
      </ul>
    </p>
  </div>
);


const FourPage = ({ onButtonClick }) => {
  const { handleOnChange, onboardingData, userId } = useContext(OnboardingContext);
  const id = localStorage.getItem("userId", userId)

  const handleOnSubmit = async () => {
    try {
      await BaseRequest.postAuthenticated(`${BASE_URL}/profile/create`, { ...onboardingData, userId: id })

    } catch (err) {
      console.log(err)
    }

  }

  return (
    <>
      <main
        className="pt5 black-80"
        style={{ maxWidth: "50%", maxHeight: "25%", margin: "auto", marginTop: "50px" }}
      >
        <h2>Choose your body type <span data-tooltip-id="my-tooltip">  <FontAwesomeIcon icon={faCircleQuestion} />
        </span></h2>

        <Tooltip id="my-tooltip" className='tooltip-hover' content={<BodyTypeTooltip />} />
        <p style={{ color: "#C0C0C0" }}>
          Choose the one that is most similar to yours now. There are no good or bad body types.
        </p>
        <div
          className="center ph4 selectionDiv"
          style={{ width: "100%", height: "310px" }}
        >
          <div className="mw5 mx-2 my-2 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"

            // onClick={() => onButtonClick("pagefive")}
            onClick={(e) => {
              handleOnChange("bodyType", "ectomorph");
              handleOnSubmit()
              onButtonClick("pagefive")
            }}
          >
            <img
              src={Ectomorph}
              className="h2 w2"
              title="Ectomorph user icon"
              alt="user-icon"
              style={{ width: "145px", height: "185px", alignSelf: "center" }}
            />
            <h1 className="f4 pl2 pr2">Ectomorph</h1>
          </div>

          <div className="mw5 mx-2 my-2 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"

            // onClick={() => onButtonClick("pagefive")}
            onClick={(e) => {
              handleOnChange("bodyType", "mesomorph");
              handleOnSubmit()
              onButtonClick("pagefive")
            }}
          >
            <img
              src={Mesomorph}
              className="h2 w2"
              title="Mesomorph user icon"
              alt="users-icon"
              style={{ width: "145px", height: "185px", alignSelf: "center" }}
            />
            <h1 className="f4 pl2 pr2">Mesomorph</h1>
          </div>

          <div className="mw5 mx-2 my-2 bg-white br3 pa3 mv3 ba dib b--black-10 ma3 clicked card"
            // onClick={() => onButtonClick("pagefive")}
            onClick={(e) => {
              handleOnChange("bodyType", "endomorph");
              handleOnSubmit()
              onButtonClick("pagefive")
            }}
          >
            <img
              src={Endomorph}
              className="h2 w2"
              title="Endomorph user icon"
              alt="user-icon"
              style={{ width: "145px", height: "185px", alignSelf: "center" }}
            />
            <h1 className="f4 pl2 pr2">Endomorph</h1>
          </div>
        </div>
      </main>
    </>)
}

export default FourPage
