import React from "react";
import PropReceiver from "../PropReceiver/PropReceiver";
import OtherPropReceiver from "../OtherPropReceiver/OtherPropReceiver";
import './props-review.css';

function PropsReview() {
  // What is a prop?
  // A prop is a piece of data that is being passed from a parent component to a child component

  // How do we pass a prop?
  // Syntax is <CustomComponent propName={propValue} />

  // Where does it go?
  // It goes straight down to the child component and the location where it is accessed can vary based on whether the child component is a class or function component

  // * Data flow through React. greeter function is written here and then passed to a child component down below.
  function greeter(greeting, name) {
    // * Data flow: Arguments passed in down in the OtherPropReceiver child where this function was invoked are now being represented by the parameters we declared when initially wrote the function.
    console.log("Inside greeter:", greeting, name);
    alert(`${greeting} ${name}`);
  }

  return (
    <div className='props-review-container'>
      <h1 className='props-review-title'>Basic Props Review</h1>
      {/* Any data type in JavaScript can be passed as a prop to a child component */}
      <PropReceiver
        stringProp="Hello World!"
        numProp={5}
        booleanProp={true}
        objProp={{}}
        arrProp={[]}
        nullProp={null}
        undefinedProp={undefined}
        functionProp={function(){ console.log('Hello World!')}}
      />
      {/* The props being passed to OtherPropReceiver are completely different and separate from the props being passed to PropReceiver */}
      <OtherPropReceiver
        totallyDifferentProp="I am different"
        otherProp={{}}
        // * Data flow: greeter is also being passed to the OtherPropReceiver component.
        greetingFn={greeter}
      />
      {/* The following is an example of defining attributes on native jsx/html elements. Although the syntax is similar, this is different from props. */}
      <input value="Hello World!" />
    </div>
  );
}

export default PropsReview;
