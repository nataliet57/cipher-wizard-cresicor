import React, { Component, useEffect, useState } from "react";
import { rot13, rotN, base64 } from "./Ciphers";

const ciphers = { rot13, rotN, base64 };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "",
      textValue: "",
      translatedText: "",
      shiftValue: "12",
      count: 0,
    };
  }
  useLanguage = (language, word) => {
    if (language == "rotN") {
      rotN({ text: word, shift: 13 });
    }
    if (language == "rot13") {
      rot13({ text: word });
    } else {
      base64(word);
    }
  };

  render() {
    // TODO: I've implemented two ciphers, but this web app
    // doesn't seem to do anything. Please help...
    return (
      <div>
        <h1>Cipher Wizard</h1>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select
            id="input"
            value={this.state.language}
            onChange={(e) => this.setState({ language: e.target.value })}
            style={{ width: "15%" }}
          >
            <option value="rot13">rot13</option>
            <option value="rotN">rotN</option>
            <option value="base64">base64</option>
          </select>
          <div id="output"></div>
          <button
            onClick={this.handleUpdateLanguage}
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
            value={this.state.shiftValue}
            onChange={(event) =>
              this.setState({ shiftValue: event.target.value })
            }
            style={{ width: "5%" }}
          />
        </label>
        <br />
        <br />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <textarea
            value={this.state.textValue}
            onChange={(event) =>
              this.setState({ textValue: event.target.value })
            }
            style={{ height: "200px", width: "40%" }}
          />
          <textarea
            // value={this.useLanguage(this.language, this.state.textValue)}
            value={rot13({ text: this.state.textValue })}
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
