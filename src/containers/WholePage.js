import React, { Component } from 'react';
import Navbar from '.././components/Navbar'
import SignUpForm from '.././components/SignUpForm'
import LoginForm from '.././components/LoginForm'
import Home from '.././components/Home'
import Curriculum from '.././components/Curriculum'
import {Switch, Route, withRouter} from 'react-router-dom'

class WholePage extends Component {

  handleSignUp=(values)=>{
    console.log(values)
  }

  handleLogin=(values)=>{
    console.log(values)
  }

  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route path="/signup" render={()=><SignUpForm handleSignUp={this.handleSignUp} browserProps={this.props}/>} />
          <Route path="/login" render={()=><LoginForm handleLogin={this.handleLogin} browserProps={this.props}/>}/>
          <Route path="/curriculum" render={()=><Curriculum/>}/>
          <Route path="/"  render={()=><Home/>}/>
        </Switch>
      </div>
    );
  }

}

export default withRouter(WholePage);
