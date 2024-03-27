import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.jpg";
import project2 from "../../Assets/Projects/project2.jpg";
import project3 from "../../Assets/Projects/project3.jpg";
import project4 from "../../Assets/Projects/project4.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              gitHub={false}
              demo={true}
              title="Construction and Infrastructure Management System"
              description="Led PHP development for 'Construction and Infrastructure' project, implementing robust solutions for streamlined management and communication within the construction sector. 
              Leveraged PHP expertise to design and deploy efficient features enhancing project coordination and resource allocation."
              demoLink="https://wivpl.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              gitHub={false}
              demo={true}
              title="Aquaculture And Its Global Relevance"
              description='Developed a web application titled "Aquaculture And Its Global Relevance" using PHP and Bootstrap, aimed at raising awareness about the significance of aquaculture on a global scale. 
              The web application successfully achieved its goal of educating users about the importance of aquaculture on a global scale, fostering greater awareness of sustainable practices and environmental stewardship in aquatic food production.'
              demoLink="https://arjunlime.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              gitHub={true}
              demo={true}
              title="LIBRARY MANAGEMENT SYSTEM"
              description="A front-end library management system built with HTML, CSS, and JavaScript provides a user-friendly interface for managing library resources efficiently. It facilitates tasks such as searching for books, enhancing the overall library experience for both librarians and users"
              gitHubLink="https://github.com/Sushree-57/lms"
              demoLink="https://sushree-57.github.io/lms/"              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project4}
              gitHub={false}
              demo={false}
              title=" Image Classification using Convolutional Neural Networks (CNN)"
              description="The image classification system demonstrated high accuracy and efficiency in classifying images across diverse categories, showcasing the effectiveness of CNN-based approaches in real-world applications. 
              The project contributed to advancing the understanding and adoption of deep learning techniques for image analysis and classification tasks."
              gitHubLink="/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
