import React from 'react';
import './state-display.css';

function StateDisplay(props){
  const { boxTitle, backgroundColor, textColor, submit } = props;
  return (
    <div className='state-display-container'>
      <div className='state-display-item'>
        <label>Box Title:</label>
        <h1> {boxTitle}</h1>
      </div>
      <div className='state-display-item'>
        <label>Background Color: </label>
        <h1> {backgroundColor}</h1>
      </div>
      <div className='state-display-item'>
        <label>Text Color: </label>
        <h1> {textColor}</h1>
      </div>
      <button onClick={submit}>Submit</button>
    </div>
  )
}

export default StateDisplay;