import React, { Component } from 'react';
import Timer from './Timer';

class TimerContainer extends Component {
    state = {
        showTimer : true
    };

    render(){
        return(
            <div>
                <h3>Timer</h3>
                <input type="checkbox" checked={this.state.showTimer} onChange={ evt => this.setState({ showTimer : evt.target.checked })} />
                <span> Show Timer </span>
                {this.state.showTimer ? (<Timer/>) : null }
            </div>
        )
    }
}

export default TimerContainer;