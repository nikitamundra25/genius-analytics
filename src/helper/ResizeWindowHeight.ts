import React, { useEffect } from "react";

export const useWindowSize = () => {
  // Initialize state with undefined width/height so server and client renders match
  const [setHeight, setsetHeight] = React.useState<string>("230px");

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      const window_width = window.innerWidth;
      // Set window width/height to state
      if (window_width < 1200) {
        setsetHeight(`230px`)
       // console.log("window_width lesss 1200",  window_width);
      }
      else{
        setsetHeight(`375px`)
       // console.log("window_width mx 1200",  window_width);
      }
    }
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Call handler right away so state gets updated with initial window size
    handleResize();
    
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return setHeight;
}