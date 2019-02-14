import React from 'react';

const SignUpForm = ({}) => (
  <div className="signup-form">
      <div className="card">
    <div className="card-block">

    <div className="form-header blue-gradient">
        <h3><i className="fa fa-user padding-header"></i> Register</h3>
    </div>

    <div className="md-form margin-left">
        <i className="fa fa-user prefix"></i>
        <input type="text" id="form3" className="form-control" placeholder="First Name"/>
    </div>
    <div className="md-form margin-left">
        <i className="fa fa-user prefix "></i>
        <input type="text" id="form3" className="form-control" placeholder="Last Name"/>
    </div>
    <div className="md-form margin-left">
        <i className="fa fa-envelope prefix "></i>
        <input type="text" id="form2" className="form-control" placeholder="Username"/>
    </div>

    <div className="md-form margin-left">
        <i className="fa fa-lock prefix"></i>
        <input type="password" id="form4" className="form-control " placeholder="Password"/>
    </div>

    <div className="md-form margin-left">
        <i className="fa fa-lock prefix"></i>
        <input type="password" id="form4" className="form-control " placeholder="Confirm Password"/>
    </div>

    <div className="text-center">
        <button className="btn btn-indigo">Sign up</button>
        <hr></hr>

    </div>

    </div>
    </div>
  </div>
);

export default SignUpForm;
