import React , {Component} from 'react';

class EhClass extends Component {
   handlerr(){
    console.log('changed');}



  render(){
    
    return(
      <div><button onClick = {this.handlerr}>tap</button></div>
    )
  }
}



export default EhClass;