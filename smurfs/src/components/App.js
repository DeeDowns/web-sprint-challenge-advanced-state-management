import React, { Component } from "react";
import { connect } from 'react-redux'
import { fetchSmurfs } from '../store/actions/smurfActions'
import { addSmurf } from '../store/actions/formActions'

import "./App.css";

import Smurfs from './Smurfs'
import Form from './Form'


class App extends Component {
  
  constructor(props) {
    super(props)
    console.log(props)
  }

  componentDidMount() {
    this.props.fetchSmurfs()
  }


  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <Form />
        <Smurfs smurfData={this.props}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
      smurfs: state.smurfReducer.smurfs,
      isLoading: state.smurfReducer.isLoading,
      error: state.smurfReducer.error,
      
  }
}

export default connect(mapStateToProps, { fetchSmurfs, addSmurf } )(App);
