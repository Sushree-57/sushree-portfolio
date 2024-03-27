import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sushree Sasmita Sa </span>
            from <span className="purple">Balasore, Odisha, India.</span>
            <br />
            I have completed Bachelor of Technology ( B.Tech ) in CSE at Srinix College of Engineering.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "If you want to shine like a sun, first burn like a sun."{" "}
          </p>
          <footer className="blockquote-footer">APJ Abdul Kalam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
