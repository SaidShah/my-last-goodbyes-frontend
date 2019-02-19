import React, { Component } from 'react';

class Footer extends Component {

  render() {
    return (
      <div>
      <footer class="page-footer font-small blue pt-4">

          <div class="container-fluid text-center text-md-left">

            <div class="row">


              <div class="col-md-6 mt-md-0 mt-3">


                <h5 class="text-uppercase">Project Code Bootcamp</h5>
                <p>Learn Programming and Change Your Life</p>

              </div>


              <hr class="clearfix w-100 d-md-none pb-3"/>


              <div class="col-md-3 mb-md-0 mb-3">


                  <h5 class="text-uppercase">About</h5>

                  <ul class="list-unstyled">
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

                <div class="col-md-3 mb-md-0 mb-3">

                  <h5 class="text-uppercase">Resources</h5>

                  <ul class="list-unstyled">
                    <li>
                      <a href="/privacy">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="/apply">Apply Now</a>
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


          <div class="footer-copyright text-center py-3">© 2018 Copyright:
            <a href="/"> ProjectCode.com</a>
          </div>

        </footer>

      </div>
    );
  }

}

export default Footer;
