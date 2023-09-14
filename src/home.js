import IMG from "./image/zoro.jpg";
import "./home.css";
import Image from 'react-bootstrap/Image';




const Home = () => {
    return ( 
        <>
        
            <div className="container">
                <div className="item">
                    <div className="text text-light">
                        <h4>Hello,</h4>
                        <h1>and welcome to my portfolio! I'm  <span className="name"> HAROLD </span>, and I'm thrilled to have you here. This portfolio is a window into my skills, experiences, and passions.</h1>
                        <h5>I believe in the power of lifelong learning and personal growth, and I'm excited to share my journey with you.</h5>
                        
                        <br /><br />
                        <a href="#CNT">
                            <button className="buttons" >Contact</button>
                        </a>
                    </div>
                    <div className="zoro ">
                            <Image src={IMG}  roundedCircle  />
                    </div>
                </div>
            </div>
            
        
            
        </>

     );
}
 
export default Home;

