import React, {Component} from "react";

export default class EyesOnMe extends Component {
  render() {
    return (
      <div>
        <button id="pass" type="password" name="password"
          onFocus={() => console.log("Good!")}
          onBlur={() => console.log("Hey! Eyes on me!")}>
            <span style={{fontFamily: "Courier New", color: "darkred", fontWeight: "bold"}}>EyesOnMe</span> Button
        </button>
      </div>
    );
  }
}


