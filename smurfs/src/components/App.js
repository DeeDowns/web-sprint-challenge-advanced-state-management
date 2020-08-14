import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions/smurfActions'

import "./App.css";

import Smurfs from './Smurfs'


class App extends Component {
  
  // constructor(props) {
  //   super(props)
  //   this.state = {

  //   }
  // }

  // componentDidMount() {
  //   this.props.fetchSmurfs()
  //   console.log(this.props.fetchSmurfs)
  // }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        {/* <Form /> */}
        <Smurfs />
      </div>
    );
  }
}

export default App;
