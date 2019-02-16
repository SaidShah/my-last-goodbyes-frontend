import React, { Component } from 'react';

class SignUpForm extends Component {

  state={
    firstName: '',
    lastName: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
    
  }

  render() {
    return (
      <form>
      <div className="signup-form">
          <div className="card">
        <div className="card-block">

        <div className="form-header blue-gradient">
            <h3><i className="fa fa-user padding-header"></i> Register</h3>
        </div>

        <div className="md-form margin-left">
            <i className="fa fa-user prefix"></i>
            <input type="text"  className="form-control" placeholder="First Name" value={this.state.firstName} name="firstName" onChange={this.handleChange}/>
        </div>
        <div className="md-form margin-left">
            <i className="fa fa-user prefix "></i>
            <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName} name="lastName" onChange={this.handleChange}/>
        </div>
        <div className="md-form margin-left">
            <i className="fa fa-envelope prefix "></i>
            <input type="text"  className="form-control" placeholder="Username" value={this.state.username} name="username" onChange={this.handleChange}/>
        </div>

        <div className="md-form margin-left">
            <i className="fa fa-lock prefix"></i>
            <input type="password"  className="form-control " placeholder="Password" value={this.state.password} name="password" onChange={this.handleChange}/>
        </div>

        <div className="md-form margin-left">
            <i className="fa fa-lock prefix"></i>
            <input type="password"  className="form-control " placeholder="Confirm Password" value={this.state.confirmPassword} name="confirmPassword" onChange={this.handleChange}/>
        </div>

        <div className="text-center">
            <button type="submit" className="btn btn-indigo">Sign up</button>
            <hr></hr>

        </div>

        </div>
        </div>
      </div>
      </form>
    );
  }

}

export default SignUpForm;
