import React from 'react';
import { connect } from 'react-redux'



class Counter extends React.Component{


  increment= () =>{
    this.props.dispatch({ type:'INCREMENT'})
  }
  decrement = () =>{
    // console.log('-clicked');
    // this.setState({count:this.state.count - 1})
    this.props.dispatch({ type:'DECREMENT'})

  }


  render(){
    return (
        <div className="App">
          <h1>counter</h1>
          <div>
            <button onClick={this.increment}>+</button>
            <span>{this.props.count}</span>
            <button onClick={this.decrement}>-</button>
          </div>
        </div>
    );
  }
 
}
const mapStateToProps = state =>({
   count:state.count
})

export default connect(mapStateToProps)(Counter);
