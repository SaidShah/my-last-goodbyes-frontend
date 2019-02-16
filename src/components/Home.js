import React, { Component } from 'react';
import your_carrer from '../images/your_career_your_choice.png'

class Home extends Component {

  render() {
    return (
      <div>
        <img src={your_carrer} alt="your career"/>
      </div>
    );
  }

}

export default Home;
