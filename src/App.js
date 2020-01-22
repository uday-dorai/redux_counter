import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Counter from './counter';
import { Provider } from 'react-redux';
import store from './store'

class App extends React.Component{
  
  render(){
    return (
      <Provider store={store}>
         <div className="App">
          <Counter />
        </div>
     </Provider>
       
    );
  }
 
}

export default App;
