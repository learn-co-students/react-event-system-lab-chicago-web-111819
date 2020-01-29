import React, {Component} from "react";

export default class Keypad extends Component {
  render() {
    return (
      <div>
        <input id="pass" type="password" name="password"
          onKeyUp={() => console.log("Entering password...")} />
      </div>
    );
  }
}



