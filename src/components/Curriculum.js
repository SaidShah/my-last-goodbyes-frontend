import React, { Component } from 'react';

class Curriculum extends Component {

  render() {
    return (

  <div className="container text-center">
    <div className="row">
      <div className="col curriculum-border">
        <h2 className="dark-blue-text">HTML &amp; CSS <span className="half-size black-text"> &nbsp;week 1 - week 3 </span></h2>

        <h5>Week 1</h5>
        <hr className="hr-rules"/>
        <p className="curriculum-p-tag">What is HTML & CSS</p>
        <p className="curriculum-p-tag">Parts and functions of HTML</p>
        <p className="curriculum-p-tag">How to use and structure HTML tags</p>
        <p className="curriculum-p-tag">The document structure</p>
        <p className="curriculum-p-tag">Using html, head and body tags</p>
        <p className="curriculum-p-tag">Using links, images and videos</p>
        <p className="curriculum-p-tag">Relative and absolute file paths</p>
          <hr className="hr-rules"/>
        <h5>Week 2</h5>
          <p className="curriculum-p-tag">CSS basics</p>
          <p className="curriculum-p-tag">Styling with CSS</p>
          <p className="curriculum-p-tag">Type and class selectors</p>
          <p className="curriculum-p-tag">Id, compound and descendent selectors</p>
          <p className="curriculum-p-tag">Child, adjacent and general sibling selectors</p>
          <p className="curriculum-p-tag">Universal and attribute selectors</p>
          <p className="curriculum-p-tag">Pseudo class selectors</p>
          <hr className="hr-rules"/>
        <h5>Week 3</h5>
        <p className="curriculum-p-tag">HTML & CSS test</p>
        <p className="curriculum-p-tag">HTML & CSS final project</p>
      </div>
      <div className="col curriculum-border">
      <h2 className="dark-blue-text">Ruby &amp; Rails <span className="half-size black-text"> &nbsp;week 4 - week 6 </span></h2>
      </div>
    </div>


    <div className="row">
      <div className="col curriculum-border">
        <h2 className="dark-blue-text">Javascript <span className="half-size black-text"> &nbsp;week 7 - week 9 </span> </h2>

      </div>
      <div className="col curriculum-border">
      <h2 className="dark-blue-text">React &amp; Redux <span className="half-size black-text"> &nbsp;week 10 - week 12 </span></h2>

      </div>
    </div>

    <div className="row">
      <div className="col curriculum-border">
        <h2 className="dark-blue-text">Data Structures &amp; Algorithms <span className="half-size black-text"> &nbsp;week 13 - week 15 </span></h2>

      </div>

    </div>
    </div>
    );
  }

}

export default Curriculum;
