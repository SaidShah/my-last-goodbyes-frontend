import React, { Component } from 'react';

class LoginForm extends Component {

  state={
    username: '',
    password: ''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  handleLogin=(e,values)=>{
    e.preventDefault()
    this.props.handleLogin(values)
    this.setState({
      username: '',
      password: ''
    },()=>this.props.browserProps.history.push("/"))
  }

  render() {
    return (
      <form onSubmit={(e)=>this.handleLogin(e,this.state)}>
      <div className="signup-form">
          <div className="card">
        <div className="card-block">

        <div className="form-header blue-gradient">
            <h3><i className="fa fa-user padding-header"></i> Log In</h3>
        </div>

        <div className="md-form margin-left">
            <i className="fa fa-envelope prefix "></i>
            <input type="text"  className="form-control" placeholder="Username" name="username" value={this.state.username} onChange={this.handleChange} required/>
        </div>

        <div className="md-form margin-left">
            <i className="fa fa-lock prefix"></i>
            <input type="password"  className="form-control " placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange} required/>
        </div>

        <div className="text-center">
            <button className="btn btn-indigo">Sign up</button>
            <hr></hr>

        </div>

        </div>
        </div>
      </div>
      </form>
    );
  }

}

export default LoginForm;
