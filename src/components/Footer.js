import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div>
      <footer className="page-footer font-small blue pt-4">

          <div className="container-fluid text-center text-md-left">

            <div className="row">

              <div className="col-md-6 mt-md-0 mt-3">

                <h5 className="text-uppercase">Project Code Bootcamp</h5>
                <p>Learn Programming and Change Your Life</p>

              </div>

              <hr className="clearfix w-100 d-md-none pb-3"/>

              <div className="col-md-3 mb-md-0 mb-3">

                  <h5 className="text-uppercase">About</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="mailto:projectCode@gmail.com">Contact Us</a>
                    </li>
                    <li>
                      <a href="/curriculum">Curriculum</a>
                    </li>
                    <li>
                      <a href="/pricing">Pricing</a>
                    </li>
                    <li>
                      <a href="/requirements">Requirements</a>
                    </li>
                  </ul>

                </div>

                <div className="col-md-3 mb-md-0 mb-3">

                  <h5 className="text-uppercase">Resources</h5>

                  <ul className="list-unstyled">
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/signup">Apply Now</a>
                    </li>
                    <li>
                      <a href="/">Statistics</a>
                    </li>
                    <li>
                      <a href="/">Home</a>
                    </li>
                  </ul>

                </div>

            </div>

          </div>

          <div className="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="/"> ProjectCode.com</a>
          </div>

        </footer>

      </div>
    );
  }

}

export default Footer;
