import React, {Component} from "react";
import './style.css'

class Timer extends Component {
    state = {
        date: new Date()
    };

    timeChange(){
        setInterval(() => {
            this.setState({ date: new Date()});
        },1000);
    }

render(){
    return(
        <div className = "timerShown">
            <p className="timerP">Time: {this.state.date.toLocaleTimeString()}</p>
            {this.timeChange()}
            </div>
    );
}
}
export default Timer;