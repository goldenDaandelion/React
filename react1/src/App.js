import "./style.css";
import Counter from './Counter'
import New from "./New.js";
import Function from './Function.js';
import React , {Component} from 'react';
import BindEvent from './BindEvent.js'
import EhClass from './eventHandling/EhClass.js'
import EhFunction from './eventHandling/EhFunction.js'
import DeconstructComp from './DeconstructComp.js';
class App extends Component {
  constructor(){
    super();
    this.state = {
      message : 'hello'
    }
    
  }
  change(){
    this.setState({
      message : 'lol'
    })
  }
  
  render(){
    return (
      <div>
        <BindEvent />
        </div>


      /*<div>
          <EhFunction />
          <EhClass />
      </div>*/
     /*<div>
        <h1>{this.state.message}</h1>
        <p><button onClick = {() => {this.change()}} >change</button></p>
        <h1><Counter /></h1>
        <h1><New name = 'abc' /></h1>
        <h1><Function name = 'maru' age = '20' /></h1>
        <h1><DeconstructComp name = 'w' age = '22' /></h1>
      </div>*/
    );
  }
  }

export default App ; 
