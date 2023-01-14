import React , {useState} from 'react';

function hooksCounter(){
  const initiale = 0 ; 
  const [current , setCounter] = useState(initiale);
  return(
    <div>
      <div>count : {current}</div>
      <button onClick = {() => {setCounter(a => a+1)}}>increment</button>
      <button onClick = {() => {setCounter(a => a-1)}}>decrement</button>
      <button onClick = {() => {setCounter(initiale)}}>initialize</button>
    </div>
  )
  
}

export default hooksCounter ; 