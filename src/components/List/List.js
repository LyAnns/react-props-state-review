import React, { Component } from "react";
import Input from "../Input/Input";
import Box from "../Box/Box";
import './list.css';

class List extends Component {
  constructor() {
    super();

    this.state = {
      list: [
        {
          boxTitle: "Box Title",
          backgroundColor: "red",
          textColor: "white",
        },
      ],
    };

    this.addBox = this.addBox.bind(this);
  }

  addBox(newBoxObj){
    this.setState({
      list: [ ...this.state.list, newBoxObj ]
    })
  }

  render() {
    return (
      <>
        <Input addBox={this.addBox} />
        <div className='list'>
          {this.state.list.map((listItem) => (
            <Box
              boxTitle={listItem.boxTitle}
              backgroundColor={listItem.backgroundColor}
              textColor={listItem.textColor}
            />
          ))}
        </div>
      </>
    );
  }
}

export default List;
