
import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
     
        <div className="logo">
          
        </div>
       
      <header className="hero-section">
        <div className="hero-content">
          <p style={{fontSize:"100px"}}> Smartwatch</p>
          <h6 style={{color:"gold"}}>Smartwatches have revolutionized the way we interact with technology on a daily basis. These sleek and sophisticated devices are worn on the wrist, offering a wide range of features and functionalities. From tracking our health and fitness activities to providing instant access to notifications and messages, smartwatches have become an essential companion in our fast-paced lives. With their vibrant displays and intuitive touchscreens, they allow us to stay connected, organized, and productive throughout the day. Whether it's monitoring our heart rate during workouts, controlling music playback, or even making contactless payments, smartwatches have become a versatile extension of our smartphones. With their stylish designs and customizable watch faces, they seamlessly blend fashion and technology, allowing us to express our personal style. Smartwatches have truly transformed the way we manage our time and stay connected, making them an indispensable accessory for the modern individual.</h6>
          <p><h3>"The Future On Your Wrist"</h3></p>
          <Link className='cta-button' to="/home" >Click Here For More Watches</Link>
        </div>
      </header>
      
      {/* <footer className="footer-section">
        <p style={{top:"180px"}}>&copy; 2023 Smartwatch. All rights reserved.</p>
      </footer> */}
    </div>
  );
};

export default LandingPage;
