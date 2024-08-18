import React from "react";
import "../components/styles/LandingPage.css"
import Navbar from "./Navbar";
import HeroPhoto from "./img-frame";
import HeroImage from '../assets/Images/Hero.jpg';
import HeroImage2 from '../assets/Images/Hero2.jpg'
import LandingCards from "./LandingPageCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faInfoCircle, faFileContract } from '@fortawesome/free-solid-svg-icons';
const LandingPage = () => {
    return ( 
 
    <div className="wrapper">
        <div><Navbar/></div> 
        <div className="Hero">
            <div className="Hero-flex">
                <div className="hero-text">
                 <h1>Never Forget a Grocery item Again</h1>
                 <p>ShopList is the ultimate shopping companion, keeping your <br/> grocery list synced across all your devices for easy access<br/> anytime, anywhere.</p>
                 <div className="hero-buttons">
                    <button className="get-started">Get Started</button>
                    <button className="learn-more">Learn More</button>
                 </div>
                </div>
                <div className="hero-img">  <img src={HeroImage} alt="Hero"  /></div>
            </div>
        </div>
        <div className="key-features">
         <span>Key Features</span>
         <h1>Simplify Your Grocery Shopping</h1>
         <p>ShopList is designed to make your grocery shopping effortless, with features that save you time and keep you <br/> organized.</p>
        </div>
        <div className="details">
            <div className="features">
              <div className="real-time easy list mobile-acc">
                <h4>Real-Time Syncing</h4>
                <p>Your shopping list is automatically synced across all your<br/>devices, so you can access it anytime, anywhere.</p>
              </div>
              <div className="real-time easy list mobile-acc">
                <h4> Easy List Management</h4>
                <p>Quickly add, edit, and check off items on your list with a user<br/>-friendly interface.</p>
              </div>
              <div className="real-time easy list mobile-acc">
                <h4>Mobile Accessibility</h4>
                   <p>Access your shopping list on the go with our mobile-friendly<br/> app.</p>
                </div>
            </div>
            <div className="image-features">
            <img src={HeroImage2} alt="Hero"  />
            </div>
        </div>
        <div className="Landing-Cards">
            <div></div>
           <LandingCards/>
        </div>
        <div className="footer">
        <footer class="footer">
        <div className="footer-content">
                <div className="social-icons">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
                <div className="footer-buttons">
                    <button className="footer-button">
                        <FontAwesomeIcon icon={faFileContract} /> Terms & Conditions
                    </button>
                    <button className="footer-button">
                        <FontAwesomeIcon icon={faInfoCircle} /> About
                    </button>
                </div>
            </div>
        </footer>

        </div>
    </div>
    
    );
}
 
export default LandingPage;