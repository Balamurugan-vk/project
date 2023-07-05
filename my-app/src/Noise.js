import React from "react";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import wall28 from '../src/Assets/noisea.jpeg';
import wall29 from '../src/Assets/noiseb.jpeg';
import wall30 from '../src/Assets/noisec.jpeg';
import wall31 from '../src/Assets/noised.jpeg';
import wall32 from '../src/Assets/noisee.jpeg';
import wall33 from '../src/Assets/noisef.jpeg';
import wall34 from '../src/Assets/noiseg.jpeg';
import wall35 from '../src/Assets/noiseh.jpeg';
import wall36 from '../src/Assets/noisei.jpeg';

const ImageGallery = () => {
    const imageItems = [
        { imageUrl: wall28, title: 'Noise Ninja ' },
{ imageUrl: wall29, title: 'Noise Rise ' },
{ imageUrl: wall30, title: 'Noise Epic ' },
{ imageUrl: wall31, title: 'Noise Blaze ' },
{ imageUrl: wall32, title: 'Noise Vision ' },
{ imageUrl: wall33, title: 'Noise Crew ' },
{ imageUrl: wall34, title: 'Noise Icon ' },
{ imageUrl: wall35, title: 'Noise Buzz ' },
{ imageUrl: wall36, title: 'Noise Caliber ' },
   
    ]
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
            <Link className="nav-link" to="/landingpage" style={{fontSize:"20px" , position:"relative",left:"950px",color:"white"}}>Home</Link>
            </li>
          </ul>
        </div>
      </nav>
      {renderImages()}
    </div>
  );
    };

export default ImageGallery;