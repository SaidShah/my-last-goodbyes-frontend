import React, { Component } from 'react';
import your_carrer from '../images/your_career_your_choice.png'
import your_track from '../images/Track.png'
import job_poster from '../images/job_placement.png'
import salary_poster from '../images/salary.png'
import debug_poster from '../images/debug.png'
import learn_poster from '../images/learn_by_building.png'

class Home extends Component {

  render() {
    return (
      <div>
        <img src={your_carrer} alt="your career"/>
        <img src={your_track} alt="your track"/>
        <img src={learn_poster} alt="learn poster"/>
        <img src={job_poster} alt="job placement"/>
        <img src={salary_poster} alt="salary poster"/>
        <div className="text-center top-margin">
        <a href="/apply" ><button className="btn blue">Apply Now</button></a>
        </div>
          <img src={debug_poster} alt="debug poster"/>
      </div>
    );
  }

}

export default Home;
