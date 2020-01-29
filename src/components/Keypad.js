import React, {Component} from 'react';

export default class Keypad extends Component {

    logMessage = () => {
        console.log('Entering password...')
    }

    render(){
        return (
            <input type="password" onKeyUp={this.logMessage}/>
        )
    }
}