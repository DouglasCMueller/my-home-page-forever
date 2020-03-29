import React from "react";

import "./style.css";

//making website button

function Website(props) {
  return (
    <button 
    className="websiteButton"
        onClick = {() => props.clicked(props.id)}
    >{props.name} </button>
  );
}

export default Website;