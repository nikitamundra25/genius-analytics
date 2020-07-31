
export const getCurrentHeight = (id: string) => {
  let setHeight: string = "250px";
  const modalbtn: HTMLElement | null = document.getElementById(id);
  console.log("modalbtn", modalbtn);

  if (modalbtn) {
    setTimeout(() => {
      const check = modalbtn.getBoundingClientRect();
      const getHeight = check.height;
      const setgraphHeight = getHeight - 75;
      console.log(" height on resize", check, getHeight, setgraphHeight);
      setHeight = `${setgraphHeight}px`;
      console.log("setHeig", setHeight);
      return setHeight;
    }, 100);
  }

  // console.log("setHeighttttttt", setHeight);

  return setHeight;

};

