import React from 'react'
import './style.css'
require('react-datetime');


function DateShown (){
    var tempDate = new Date();
    var date = tempDate.getMonth()+1 + '-' + (tempDate.getDate()) + '-' + tempDate.getFullYear();
    const currDate = "Date: " + date;
    return (
      <p className="dateShown">{currDate}</p>
    );

}
export default DateShown