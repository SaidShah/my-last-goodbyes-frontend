import React, { Component } from 'react';
import Navbar from '.././components/Navbar'
import SignUpForm from '.././components/SignUpForm'
import LoginForm from '.././components/LoginForm'
import {Switch, Route, withRouter} from 'react-router-dom'

class WholePage extends Component {

  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/signup" render={()=><SignUpForm/>}/>
          <Route path="/login" render={()=><LoginForm/>}/>
        </Switch>
      </div>
    );
  }

}

export default withRouter(WholePage);
