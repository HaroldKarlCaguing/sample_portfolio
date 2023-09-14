import  "./aboutme.css";
import Image from "./image/img1.svg";
import Converter from "./image/converter.png";
import Aklan from "./image/aklan.png";
import Mp2 from "./image/mp2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
// import ContactConfig  from "./content_option";
// import { text } from "@fortawesome/fontawesome-svg-core";
import Footer from "./footer";
const About= () => {
    return ( 
        <>
        <hr /><hr />
        <h1 className="abt">ABOUT</h1>
        <div className="container">
            
            
            <h2>I am a creative, ambitious, and dedicated individual with a deep passion for Web Development. I thrive on challenges and always strive for excellence in everything I do</h2>
        </div>
        <div className="img">
            <img src={Image} alt="" />
            
        </div>
        <div className="skillset">
            <h1 className="SS">SKILLSET</h1>
            <div className="skill-icon">
                <FontAwesomeIcon className="i" icon={faCss3Alt} />
                <FontAwesomeIcon className="i" icon={faHtml5} />
                <FontAwesomeIcon className="i" icon={faJs} />
                <FontAwesomeIcon className="i" icon={faReact} />
            </div>
        </div>
        <br /><br /><br />
        <div className="projects">
            <h1 className="P">PROJECTS</h1>
            <br /><br />
            <div className="row  justify-content-center">
                <div className="col-4">
                    <Card text="light" bg="dark" border="success" style={{ width: '18rem', height: '25rem' }}>
                        <Card.Img variant="top" src={Converter} />
                        <Card.Body>
                            <Card.Title className="title">Converter</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, nisi?
                            </Card.Text>
                            <Button className="btn" variant=""><a href="https://haroldkarlcaguing.github.io/WD76_EXERCISE13_CAGUING/"><span>Demo</span></a></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 ">
                    <Card text="light" bg="dark" border="success" style={{ width: '18rem', height: '25rem' }}>
                        <Card.Img variant="top" src={Aklan} />
                        <Card.Body>
                            <Card.Title className="title">MP1</Card.Title>
                            <Card.Text >
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, reprehenderit.
                            </Card.Text>
                            <Button className="btn" variant=""><a href="https://haroldkarlcaguing.github.io/MP1_WD76_CAGUING/"><span>Demo</span></a></Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-4 ">
                    <Card text="light" bg="dark" border="success" style={{ width: '18rem', height: '25rem', }}>
                        <Card.Img variant="top" src={Mp2} />
                        <Card.Body>
                            <Card.Title className="title">MP2</Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, quisquam.
                            </Card.Text>
                            <Button className="btn" variant=""><a href="http://127.0.0.1:5500/"><span>Demo</span></a></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        <br /><br /><br /><br /><br />
        <h1 className="C" id="CNT">CONTACT</h1>
        <br /><br /><br />
        <Container className="conteyner">
            <Row className="containerrow">
                <Col lg='5' className="mb-5">
                    <h3 className="color-sec py-4">Get In Touch</h3>
                    <address>
                        <strong><span>Email:</span> caguingharoldkarl@gmail.com</strong>
                        <br />
                        <br />
                        <p>
                            <strong><span>Phone:</span> +63 XXXX XXXXX</strong>
                        </p>
                    </address>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, dolores?</p>

                </Col>
                <Col lg='7' className="d-flex align-item-center">
                    <Form className="contact__form w-100">
                        <Row className="rowwy">
                            <Col lg='12' className="form-group w-100">
                                <input 
                                    className="form-control "
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                />
                            </Col>
                            <br /><br />
                            <Col lg='12' className="form-group w-100">
                                <input 
                                    className="form-control "
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email" />
                            
                            </Col>
                            
                            <Col lg='12' className="form-group ">
                                <textarea
                                    className="form-control w-100"
                                     id="message"
                                    name="message"
                                    placeholder="Message"
                                    rows='5'
                                >                                   
                                </textarea>
                            </Col>
                            
                            
                            <Col lg='12' className="form-group ">
                                <button className="Btn ac_btn w-100" type="submit" id="buttonn"><span>Send</span></button>
                            </Col>
                        </Row>
                    </Form>
                </Col>

            </Row>
        </Container>
        
        <br /><br /><br /><br />
        <Footer></Footer>
        </>
     );
}
 
export default About;