import React, { Component } from "react";

class Projects extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">Ztrak</h1>
        <iframe
          src="https://ztrak.herokuapp.com/"
          allowtransparency="true"
          width="500"
          height="500"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>

        <h1 className="subtopic">Pantry Chef</h1>
        <iframe
          src="https://pantry-chef-kenny.herokuapp.com/"
          allowtransparency="true"
          width="500"
          height="500"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>

        <h1 className="subtopic">First Game</h1>
        <p>This game was created with Scratch</p>
        <iframe
          src="https://scratch.mit.edu/projects/364602625/embed"
          allowtransparency="true"
          width="500"
          height="500"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>

        <h1 className="subtopic">Hollywood Holidays</h1>
        <iframe
          src="https://domenikos5.github.io/Hollywood-Holidays/"
          allowtransparency="true"
          width="500"
          height="500"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>

        <h1 className="subtopic">Weather Dashboard</h1>
        <iframe
          src="https://domenikos5.github.io/Weather-Dashboard/"
          allowtransparency="true"
          width="500"
          height="500"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>

        <h1 className="subtopic">Budget Tracker</h1>
        <iframe
          src="https://budget-app555.herokuapp.com/"
          allowtransparency="true"
          width="500"
          height="500"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>

        <h1 className="subtopic">Note Taker</h1>
        <iframe
          src="https://floating-garden-38932.herokuapp.com/"
          allowtransparency="true"
          width="500"
          height="500"
          frameborder="0"
          scrolling="no"
          allowfullscreen
        ></iframe>
      </div>
    );
  }
}

export default Projects;
