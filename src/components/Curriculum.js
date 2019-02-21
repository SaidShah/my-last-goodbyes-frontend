import React, { Component } from 'react';

class Curriculum extends Component {

  render() {
    return (
<div className="blue-bg">
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
      <h2 className="dark-blue-text">JavaScript <span className="half-size black-text"> &nbsp;week 4 - week 6 </span></h2>
      <h5>Week 4</h5>
      <hr className="hr-rules"/>
      <p className="curriculum-p-tag">JavaScript basics</p>
      <p className="curriculum-p-tag">Write, execute and use comments in console</p>
      <p className="curriculum-p-tag">Understand and use different data types</p>
      <p className="curriculum-p-tag">Find, listen and respond to specific events</p>
      <p className="curriculum-p-tag">Add or remove HTML from a page</p>
      <p className="curriculum-p-tag">Use local and global variables and functions</p>
        <hr className="hr-rules"/>
        <h5>Week 5</h5>
          <p className="curriculum-p-tag">Intro to the DOM</p>
          <p className="curriculum-p-tag">Identify and interact with the Document Object Model</p>
          <p className="curriculum-p-tag">Learn how JS manipulates the DOM</p>
          <p className="curriculum-p-tag">Interact and manipulate the DOM</p>
          <p className="curriculum-p-tag">Use document selectors to select elements</p>
          <p className="curriculum-p-tag">Use Conditional Statements</p>
          <p className="curriculum-p-tag">Learn arrays and objects</p>
          <p className="curriculum-p-tag">Use loops and switch statements</p>
          <p className="curriculum-p-tag">Learn scope and closure</p>
          <hr className="hr-rules"/>
          <h5>Week 6</h5>
          <p className="curriculum-p-tag">JavaScript test</p>
          <p className="curriculum-p-tag">JavaScript, HTML & CSS final project</p>
      </div>
    </div>


    <div className="row">
      <div className="col curriculum-border">
        <h2 className="dark-blue-text">Ruby &amp; Rails <span className="half-size black-text"> &nbsp;week 7 - week 9 </span> </h2>
        <h5>Week 7</h5>
        <hr className="hr-rules"/>
        <p className="curriculum-p-tag">Intro to Ruby</p>
        <p className="curriculum-p-tag">Create, write and execute a file</p>
        <p className="curriculum-p-tag">Learn and use IRB</p>
        <p className="curriculum-p-tag">Understanding the 4 common error types</p>
        <p className="curriculum-p-tag">Create, re-assign and pass variables</p>
        <p className="curriculum-p-tag">Learn and use different data types</p>
        <p className="curriculum-p-tag">Learn and use methods</p>
          <hr className="hr-rules"/>
          <h5>Week 8</h5>
          <p className="curriculum-p-tag">Intro to Rspec</p>
          <p className="curriculum-p-tag">Practice writing tests with Rspec</p>
          <p className="curriculum-p-tag">Intro to rails</p>
          <p className="curriculum-p-tag">Learn and use Rails scaffold and other generators</p>
          <p className="curriculum-p-tag">Intro to Postgres</p>
          <p className="curriculum-p-tag">Build a database with Postgres</p>
          <p className="curriculum-p-tag">Learn and use MVC file structures</p>
          <p className="curriculum-p-tag">Create API's for the Rails back-end</p>
            <hr className="hr-rules"/>
            <h5>Week 9</h5>
            <p className="curriculum-p-tag">Ruby and Rails test</p>
            <p className="curriculum-p-tag">Ruby, Rails, JavaScript, HTML & CSS final project</p>
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
    </div>
    );
  }

}

export default Curriculum;
