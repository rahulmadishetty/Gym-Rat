import React from 'react'
import "./MultiStepProgressBar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const MultiStepProgressBar = ({ page, onPageNumberClick }) => {

  var stepPercentage = 0;
  if (page === "pageone") {
    stepPercentage = 13;
  } else if (page === "pagetwo") {
    stepPercentage = 35;
  } else if (page === "pagethree") {
    stepPercentage = 60;
  } else if (page === "pagefour") {
    stepPercentage = 84;
  } else if (page === "pagefive") {
    stepPercentage = 100;
  } else {
    stepPercentage = 0;
  }

  return (<>
    <ProgressBar percent={stepPercentage}>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("1")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("2")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("3")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("4")}
          >
            {index + 1}
          </div>
        )}
      </Step>
      <Step>
        {({ accomplished, index }) => (
          <div
            className={`indexedStep ${accomplished ? "accomplished" : null}`}
            onClick={() => onPageNumberClick("5")}
          >
            {index + 1}
          </div>
        )}
      </Step>
    </ProgressBar>
  </>)
}

export default MultiStepProgressBar
