import React, { Component } from 'react';

class Timer extends Component {
    state = {
        currentTime: new Date().toTimeString()
    }
    
    timerId = 0;
    
    componentDidMount() {
        this.timerId = setInterval(() =>{
            this.setState({ currentTime: new Date().toTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        console.log('timer is unmounted');
        if (this.timerId)
            clearInterval(this.timerId);
    }

    render(){
        return(
            <div>
                <span> Time : </span>
                <span>{this.state.currentTime}</span>
            </div>
        );
    }
}

export default Timer;