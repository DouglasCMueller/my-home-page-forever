import React, {Component} from "react";

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
            <h2> It is {this.state.date.toLocaleTimeString()}</h2>
            {this.timeChange()}
            </div>
    );
}
}
export default Timer;