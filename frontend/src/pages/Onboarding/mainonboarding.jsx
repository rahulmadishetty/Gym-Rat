import React, { useState } from 'react'
import "../../App.css";
import MultiStepProgressBar from './Multistepprogressbar';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';

const MainOnboarding = () => {

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
      <MultiStepProgressBar page={page} onPageNumberClick={nextPageNumber} />
      {
        {
          pageone: <PageOne onButtonClick={nextpage} />,
          pagetwo: <PageTwo onButtonClick={nextpage} />,
          pagethree: <PageThree onButtonClick={nextpage} />,
          pagefour: <PageFour onButtonClick={nextpage} />,
          pagefive: <PageFive onButtonClick={nextpage} />
        }[page]
      }
    </div>
  </>)
}

export default MainOnboarding
