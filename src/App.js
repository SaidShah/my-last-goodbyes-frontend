import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './App.css';
import WholePage from './containers/WholePage'
class App extends Component {

  render() {

    return (
      <div >
        <WholePage/>
      </div>
    );
  }
}

export default withRouter(App);
