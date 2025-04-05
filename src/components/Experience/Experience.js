import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/company-logo.jpg"
import Particle from "../Particle";
import Tilt from "react-parallax-tilt";
function Experience() {
    return (
        <section>
            <Container fluid className="experience-section">
                <Particle />
                <h1 className="project-heading">
                    My  <strong className="purple">Experiences </strong>
                </h1>
                <br />

                <Row className="experience-description m-2">
                    <Col md={4} className="myAvtar">
                        <img src={myImg} className="img-fluid" alt="avatar" />

                    </Col>
                    <Col md={8} >
                        <h1 class="company-heading">
                            Sofware <strong className="purple">Engineer</strong>
                        </h1>
                        <h4 style={{ color: "white" }}>
                            <strong className="purple">CHUBB</strong> | Hyderabad
                        </h4>
                        <h4 style={{ color: "white" }}>
                            June 2022 - July 2023
                        </h4><br /><br />
                        <h5 style={{ textAlign: "justify", color: "white" }}>
                            <strong className="purple">●</strong> Developed efficient and scalable C# APIs to handle CRUD operations with MongoDB and Azure Blob Storage, optimizing data handling
                            processes.<br /><br />
                            <strong className="purple">●</strong>  Delivered responsive and user-friendly web applications using Angular (13+), seamlessly integrating APIs to enhance functionality and user
                            experience.<br /><br />
                            <strong className="purple">●</strong>  Applied modular design principles to create reusable components, improving code maintainability, and streamlining development efforts.<br /><br />
                            <strong className="purple">●</strong>  Designed and tested reliable server-side applications with Node.js, Express, and MongoDB, ensuring stability and performance through
                            comprehensive JEST testing.<br /><br />
                            <strong className="purple">●</strong>  Utilized tools like Jira and Confluence to coordinate project management tasks, foster team collaboration, and maintain organized workflows.<br /><br />
                            <strong className="purple">●</strong>  Designed and implemented APIs for Azure Blob Storage, enabling efficient file retrieval, editing, and CRUD operations directly from the
                            front end, reducing manual processing.<br /><br />
                        </h5>


                    </Col>
                </Row>
                <br />

<br /><br />

                <Row className="experience-description m-2">
                    <Col md={4} className="myAvtar">
                        <img src={myImg} className="img-fluid" alt="avatar" />

                    </Col>
                    <Col md={8} >
                        <h1 class="company-heading">
                            Sofware <strong className="purple">Engineer</strong> Intern
                        </h1>
                        <h4 style={{ color: "white" }}>
                            <strong className="purple">CHUBB</strong> | Hyderabad
                        </h4>
                        <h4 style={{ color: "white" }}>
                            September 2021 - May 2022
                        </h4><br /><br />
                        <h5 style={{ textAlign: "justify", color: "white" }}>
                            <strong className="purple">●</strong> Designed and optimized responsive, mobile-friendly UI pages using the Angular framework, improving user engagement, and ensuring a
                            consistent experience across devices.<br /><br />
                            <strong className="purple">●</strong>  Leveraged version control tools like GitHub and Git Desktop to streamline code management and enhance team collaboration during
                            development.<br /><br />
                            <strong className="purple">●</strong>  Developed and executed unit tests with Jest and the Angular Testing Library, ensuring thorough test coverage and maintaining the reliability
                            of Angular components.<br /><br />
                            <strong className="purple">●</strong>  Enhanced front-end performance by creating intuitive and dynamic user interfaces, aligned with modern design principles.<br /><br />
                            <strong className="purple">●</strong>  Maintained efficient workflows by implementing robust version control practices, and conducting code reviews to improve overall project
                            quality.<br /><br />
                        </h5>


                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Experience;
