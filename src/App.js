import React, { Component } from "react";
import "./App.css";
import Logic from "./components/logic";
import Image from "./components/image";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      src: "../bg.jpeg"
    };
  }
  image = () => {
    console.log("hello");
  };
  render() {
    return (
      <div>
        <h2 class="title"> Weather Buddy </h2>
        <hr id="underline" />
        <div className="card">
          <div className="grid-item">
            <Image data={this.state.src} />
          </div>
          <div className="grid-item">
            <h2> Weather </h2>
            <hr />
            <br />
            <br />
            <Logic
              img={() => {
                this.image;
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
