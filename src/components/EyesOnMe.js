import React, {Component} from 'react'

export default class EyesOnMe extends Component {

    logMessage1 = () => {
        console.log('Good!')
    }

    logMessage2 = () => {
        console.log('Hey! Eyes on me!')
    }

    render(){
        return (
            <button onFocus={this.logMessage1} onBlur={this.logMessage2}> CLICK HERE
            </button>
        )
    }
}