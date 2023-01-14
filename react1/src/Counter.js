import React , {Component} from 'react';

class Counter extends Component{
  constructor(){
    super();
    this.state = {
      count : 0
    }
  }

  increment(){
    //this.state.count = this.setState({count : this.state.count + 1} 
    //  , () => console.log(this.state.count))
    this.setState(prevState => ({count : prevState.count + 1}) , () => console.log(this.state.count))
  }

  render(){
    return (
      <div>
        {this.state.count}
        <br/>
        <button onClick = {() => this.increment()}> increment </button>
      </div>
    )
  }


}

export default Counter ; 