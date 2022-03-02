import React, { Component } from "react";
import { rot13, rotN, base64 } from "./Ciphers";

const ciphers = { rot13, rotN, base64 };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  doNothing = () => {};

  render() {
    // TODO: I've implemented two ciphers, but this web app
    // doesn't seem to do anything. Please help...

    return (
      <div>
        <h1>Cipher Wizard</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select
            value={"Select Cipher"}
            onChange={this.doNothing /* TODO */}
            style={{ width: "15%" }}
          >
            {/* TODO */}
          </select>
          <button
            onClick={this.doNothing /* TODO */}
            style={{
              height: "20px",
              marginLeft: "27%",
              transform: "translate(-50%, 0%)",
            }}
          >
            Switch
          </button>
        </div>
        <br />
        <label>
          {"Shift: "}
          <input
            value={"Text!"}
            onChange={this.doNothing /* TODO */}
            style={{ width: "5%" }}
          />
        </label>
        <br />
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <textarea
            value={"Text!"}
            onChange={this.doNothing /* TODO */}
            style={{ height: "200px", width: "40%" }}
          />
          <textarea
            value={"Translated Text!"}
            readOnly
            style={{
              height: "200px",
              width: "40%",
              marginLeft: "2%",
              backgroundColor: "powderblue",
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
