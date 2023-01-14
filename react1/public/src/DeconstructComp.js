import React , {Component} from 'react';

class DeconstructComp extends Component{
  

  render(){
    const {name , age} = this.props
    //const {state1 , state2} = this.state
    return (
      <div>
        my name is {name} , im {age} years old ; 
      </div>
    )
  }


}

export default DeconstructComp ; 