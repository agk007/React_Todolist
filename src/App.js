import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      items :[],
      txtcontent :""
    };
  }
  txtChange =(e)=>{
    this.setState({txtcontent:e.target.value});
  }
  addItem=(e)=>{
    e.preventDefault();
    let currentText=this.state.txtcontent;
    let currentItems=this.state.items;
    currentItems.push(currentText);
    this.setState({items:currentItems});

  }
  render(){
  return (
    <div class="App">
    <header>
      
      <form id="to-do-form">
        <input type="text" placeholder="enter text" onChange={this.txtChange}></input>
        <button type="submit" onClick={this.addItem}>Add</button>
        <ul>
          {this.state.items.map((itm,k)=>{
            return(
              <li>{itm}<button id="del">Delete</button></li>

            )
          })}
        </ul>
      </form>
    </header>
    
    </div>
  );
  }
}

export default App;
