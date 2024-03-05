import React from "react";
import { useState } from "react";
export default function Hooks() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  function handleNextClick() {
    setIndex(index + 1);
  }

  function handleMoreInfo() {
    setShowMore(!showMore);
  }
  return (
    <>
      <button onClick={handleNextClick}>Next</button>

      <button onClick={handleMoreInfo}>  
       {showMore ? 'Hide' : 'Show'} 
       Details
       </button>
       {showMore && <p>show more</p>}
    </>
  );
}
