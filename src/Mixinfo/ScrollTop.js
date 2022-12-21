import React, { useEffect } from "react";

function ScrollTop() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return <div>{null}</div>;
}

export default ScrollTop;
