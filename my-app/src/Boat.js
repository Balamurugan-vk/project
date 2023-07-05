import React from "react";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import Wall1 from "../src/Assets/boat.jpeg";
import wall2 from '../src/Assets/boata.jpeg';
import wall4 from '../src/Assets/boatc.jpeg';
import wall8 from '../src/Assets/boatg.jpeg';
import wall3 from '../src/Assets/boatb.jpeg';
import wall5 from '../src/Assets/boatd.jpeg';
import wall6 from '../src/Assets/boate.jpeg';
import wall7 from '../src/Assets/boatf.jpeg';
import wall9 from '../src/Assets/boath.jpeg';

const ImageGallery = () => {
    const imageItems = [
      { imageUrl: Wall1, title: 'Boat Striker' },
      { imageUrl: wall2, title: 'Boat cosmic ' },
      { imageUrl: wall3, title: 'Boat drift ' },
      { imageUrl: wall4, title: 'Boat BT ' },
      { imageUrl: wall5, title: 'Boat crown ' },
      { imageUrl: wall6, title: 'Boat X' },
      { imageUrl: wall7, title: 'Boat ' },
      { imageUrl: wall8, title: 'Boat pro x ' },
      { imageUrl: wall9, title: 'Boat X pro' },
 
  

 
     
    ];

    const renderImages = () => {
        const imagesPerRow = 6;
        const rows = [];
        let currentRow = [];
    
        imageItems.forEach((item, index) => {
          currentRow.push(
            <div className="col-sm-2" key={index}  style={{paddingTop:"100px"}}>
              <div className="card" >
                <img src={item.imageUrl} alt="" className="card-img-top" style={{ width: '100%', cursor:"pointer" }} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                </div>
              </div>
            </div>
          );
    
          if ((index + 1) % imagesPerRow === 0 || index === imageItems.length - 1) {
            rows.push(<div className="row" key={index}>{currentRow}</div>);
            currentRow = [];
          }
        });
    
        return rows;
      };
      
  return (
    <div className="home">

      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" >
      <div style={{color:"white",size:"28px"}}>
        <HomeIcon/>
        </div>
        <Link className="navbar-brand" style={{fontSize:"28px"}} to="/home">Smartwatch</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/boat" style={{fontSize:"20px",color:"white"}}>Boat</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/firebolt" style={{fontSize:"20px",color:"white"}}>Firebolt</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/noise" style={{fontSize:"20px",color:"white"}}>Noise</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gizmore" style={{fontSize:"20px",color:"white"}}>Gizmore</Link>
            </li>
            <div style={{position:"relative",left:"960px",top:"10px", color:"white"}}>
              <LogoutIcon/>
            </div>
            <li className="nav-item">
              <Link className="nav-link" to="/landingpage" style={{fontSize:"20px",position:"relative",left:"950px",color:"white"}}>Home</Link>
            </li>
          </ul>
        </div> 
      </nav>
      {renderImages()}
    </div>
  );
    };

export default ImageGallery;