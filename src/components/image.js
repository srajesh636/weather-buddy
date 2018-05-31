import React, { Component } from "react";
import cold from "../weather.gif";
class Image extends Component {
  render() {
    let path = this.props.data;
    console.log(path);
    return (
      <div>
        <img src={cold} />
      </div>
    );
  }
}
export default Image;
