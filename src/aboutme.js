import  "./aboutme.css";
import Image from "./image/img1.svg";
import Converter from "./image/converter.png";
import Aklan from "./image/aklan.png";
import Mp2 from "./image/mp2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3Alt, faHtml5, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
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
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button className="btn" variant=""><a href="http://127.0.0.1:5500/"><span>Demo</span></a></Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
        {/* <div className="contact">
            <form action="" method="post">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" ><br><br>

                <label for="email">Email:</label>
                <input type="email" id="email" name="email" ><br><br>

                <label for="comment">Comment:</label><br>
                <textarea id="comment" name="comment" rows="4" cols="50" ></textarea><br><br>

                <input type="submit" value="" />
            </form>
        </div> */}

        <br /><br /><br /><br />
        </>
     );
}
 
export default About;