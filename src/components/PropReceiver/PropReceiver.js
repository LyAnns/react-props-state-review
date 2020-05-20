import React from 'react';

function PropReceiver (props) {
  // A placeholder parameter must be specified above in order to able to access props! Whatever you name that placeholder parameter is what you will use to access props. Even though you can name it anything you should still name it props.
  console.log('PropsReceiver Props:',props);
  return(
    <div>

    </div>
  )
}

export default PropReceiver