import React, { Component } from 'react';
import Navbar from '.././components/Navbar'
import SignUpForm from '.././components/SignUpForm'
import LoginForm from '.././components/LoginForm'
import Home from '.././components/Home'
import Footer from '.././components/Footer'
import Privacy from '.././components/Privacy'
import Pricing from '.././components/Pricing'
import Requirements from '.././components/Requirements'
import Apply from '.././components/Apply'
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
          <Route path="/privacy" render={()=><Privacy/>}/>
          <Route path="/apply" render={()=><Apply/>}/>
          <Route path="/pricing" render={()=><Pricing/>}/>
          <Route path="/requirements" render={()=><Requirements/>}/>
          <Route path="/"  render={()=><Home/>}/>
        </Switch>
        <Footer/>
      </div>
    );
  }

}

export default withRouter(WholePage);
