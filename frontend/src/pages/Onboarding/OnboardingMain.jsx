import React, { useState } from 'react'
import "../../App.css";

import MultiStepProgressBar from './Multistepprogressbar';
import OnePage from './OnePage';
import TwoPage from './TwoPage';
import ThreePage from './ThreePage';
import FourPage from './FourPage';
import FivePage from './FivePage';

const OnboardingMain = () => {

  const [page, setPage] = useState("pageone");

  const nextpage = (page) => {
    setPage(page);
  }

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour");
        break;
      case "5":
        alert("Ooops! Seems like you did not fill the form.");
        break;
      default:
        setPage("1");
    }
  };

  return (<>
    <div className='App'>
      <div className='mt-5'>
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <OnePage onButtonClick={nextpage} />,
          pagetwo: <TwoPage onButtonClick={nextpage} />,
          pagethree: <ThreePage onButtonClick={nextpage} />,
          pagefour: <FourPage onButtonClick={nextpage} />,
          pagefive: <FivePage onButtonClick={nextpage} />
        }[page]
      }
      </div>
   
    </div>
  </>)
}

export default OnboardingMain;
