import React from "react";
import "./style.css";


function FavoritesButton(props) {
    return (

        <div onClick = { () => props.clicked(props.id) } className = "cardTotal" >
        <div className = "card-img" >{ props.name }</div>
        </div>
  

    );
}
export default FavoritesButton;
