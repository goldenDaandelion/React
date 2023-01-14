import React , {useState} from 'react' ; 

function hooks() {
  const [current , setCurrent] = useState(0)

  return(
    <div>
      <button onClick = {() => setCurrent(current+1)}>counter {current}</button>
      
    </div>
  )
}



export default hooks ;