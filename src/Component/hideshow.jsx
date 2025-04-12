import React, { useState } from "react";

const HideShow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleShow = () => {
    setIsVisible(true);
  };

  const handleHide = () => {
    setIsVisible(false);
  };

  const handleToggle = () => {
    setIsVisible(prev => !prev);
  };

  return (
    <div>
      <h1>Show and Hide</h1>
      <button onClick={handleShow}>Show</button>
      <button onClick={handleHide}>Hide</button>
      <button onClick={handleToggle}>Toggle</button>
      
      {isVisible && <p>This is the text to show and hide.</p>}
    </div>
  );
};

export default HideShow;
