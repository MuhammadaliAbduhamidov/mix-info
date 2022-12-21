import React from "react";
import flag from "../assets/img/flag.png";
import globus from "../assets/img/export.png";

function Export() {
  return (
    <div className="export">
      <div className="flag">
        <img src={flag} alt="" />
      </div>
      <div className="export-globus">
        <img src={globus} alt="" />
      </div>
    </div>
  );
}

export default Export;
