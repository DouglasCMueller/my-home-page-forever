import React from "react";

import "./style.css";

function WebsiteButton(props) {
  return (
  <button id = "websiteButtonId" className="websiteButton"
      onClick={ () => props.clicked(props.id, props.name, props.url, props.category)}>{props.name}
    </button>
  );
}

export default WebsiteButton;