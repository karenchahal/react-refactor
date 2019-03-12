import React from "react";

class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleInputChange = event => {
    console.log({ object: event.target });
    const { name, value } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  handleUsernameChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      username: value
    }));
  };

  handleEmailChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      email: value
    }));
  };

  handlePasswordChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      password: value
    }));
  };

  handleConfirmPasswordChange = event => {
    const { value } = event.target;
    this.setState(() => ({
      confirmPassword: value
    }));
  };

  render() {
    return (
      <form>
        <input
          name="username"
          placeholder="username"
          value={this.state.username}
          onChange={this.handleInputChange}
          type="text"
        />
        <input
          name="email"
          placeholder="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          type="text"
        />
        <input
          name="password"
          placeholder="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          type="text"
        />
        <input
          name="confirmPassword"
          placeholder="confirmPassword"
          value={this.state.confirmPassword}
          onChange={this.handleInputChange}
          type="text"
        />
      </form>
    );
  }
}

export default Inputs;
