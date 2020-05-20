import React, { Fragment, Component } from "react";
import StateDisplay from "../StateDisplay/StateDisplay";
import './input.css';

class Input extends Component {
  constructor() {
    super();

    this.state = {
      boxTitle: "",
      backgroundColor: "",
      textColor: "",
      selectValue: "boxTitle",
    };

    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.changeSelectValue = this.changeSelectValue.bind(this);
  }

  submit() {
    const { boxTitle, backgroundColor, textColor } = this.state;
    if (boxTitle && backgroundColor && textColor) {
      this.props.addBox({ boxTitle, backgroundColor, textColor });
    } else {
      alert(`Missing a required value!`);
    }
  }

  handleChange(e) {
    this.setState({
      [this.state.selectValue]: e.target.value,
    });
  }

  changeSelectValue(e) {
    this.setState({
      selectValue: e.target.value,
    });
  }

  render() {
    const { boxTitle, backgroundColor, textColor, selectValue } = this.state;

    return (
      <Fragment>
        <StateDisplay
          boxTitle={boxTitle}
          backgroundColor={backgroundColor}
          textColor={textColor}
          submit={this.submit}
        />
        <div className='input'>
          <select className='select' onChange={this.changeSelectValue}>
            <option value="boxTitle">Box Title</option>
            <option value="backgroundColor">Background Color</option>
            <option value="textColor">Text Color</option>
          </select>
          <input value={this.state[selectValue]} onChange={this.handleChange} />
          
        </div>
      </Fragment>
    );
  }
}

export default Input;
