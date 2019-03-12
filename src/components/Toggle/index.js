import React, { Component } from "react";

import "./Toggle.css";

class Toggle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOn: false
    };
  }

  handleClick = () => {
    this.setState(state => ({
      isOn: !state.isOn
    }));
  };

  render() {
    const { isOn } = this.state;
    return (
      <div
        className={`container ${isOn ? "active" : ""}`}
        onClick={this.handleClick}
      >
        <div className="switch" />
      </div>
    );
  }
}

export default Toggle;
