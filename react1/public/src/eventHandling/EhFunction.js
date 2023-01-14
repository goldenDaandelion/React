import React from 'react';


const EhFunction = () => {
  function handler() {
    console.log('button has been clicked')
  }
  return(
    <div> 
      <button onClick = {handler}> click </button>
    </div>
  )



}

export default EhFunction; 