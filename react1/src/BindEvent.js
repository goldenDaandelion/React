import React , {Component} from 'react' ; 

class BindEvent extends Component{
  constructor(){
    super()
    this.state = {word : 'hello'}
    /*this.change = this.change.bind(this)*/
  }
  handler(){
    this.setState({
      word : 'goodbye!'
    })
  }
  /*handler = () => {this.setState({
    word : 'goodbye!'
  })
  }*/
  
  render(){
    return(
      <div>
        <div>{this.state.word}</div>
        <button onClick = {this.handler.bind(this)}>click</button>
      </div>
    )
  }

}


export default BindEvent ; 