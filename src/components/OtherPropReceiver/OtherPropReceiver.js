import React, { Component } from "react";

class OtherPropReceiver extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
      greeting: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleGreeting = this.handleGreeting.bind(this);
  }

  handleGreeting(){
    // This is an example of invoking a function that has been passed down from a parent component and then passing it arguments.
    console.log('Inside handleGreeting')
    console.log(this.state.name)
    console.log(this.state.greeting)
    // * Data flow: greetingFn is on this.props, which means it came from the parent component. Below we are invoking the function and passing in two arguments. Next step will be back in Props review component
    this.props.greetingFn(this.state.greeting, this.state.name)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    // Props are found on this.props when inside of a class component
    console.log("OtherPropsReceiver Props:", this.props);
    return (
      <div>
        <label>Greeting</label>
        <input
          name="greeting"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <label>Name</label>
        <input
          name="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleGreeting}>Greet</button>
      </div>
    );
  }
}

export default OtherPropReceiver;
