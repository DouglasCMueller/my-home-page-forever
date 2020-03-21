import React from 'react'
import { Container } from 'semantic-ui-react'
import styles from './style.css'
require('react-datetime');
const moment = require('moment');

function DateShown (){
    var tempDate = new Date();
    var date = tempDate.getMonth()+1 + '-' + (tempDate.getDate()) + '-' + tempDate.getFullYear();
    const currDate = "Current Date= "+date;
    return (
      <p>{currDate}</p>
    );

}
export default DateShown