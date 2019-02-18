import React, { Component } from 'react';
import your_carrer from '../images/your_career_your_choice.png'
import your_track from '../images/Track.png'

class Home extends Component {

  render() {
    return (
      <div>
        <img src={your_carrer} alt="your career"/>
        <img src={your_track} alt="your track"/>
      </div>
    );
  }

}

export default Home;
