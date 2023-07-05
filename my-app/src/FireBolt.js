import React from "react";
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';

import wall10 from '../src/Assets/firebolta.jpeg';
import wall11 from '../src/Assets/fireboltb.jpeg';
import wall12 from '../src/Assets/fireboltc.jpeg';
import wall13 from '../src/Assets/fireboltd.jpeg';
import wall14 from '../src/Assets/firebolte.jpeg';
import wall15 from '../src/Assets/fireboltf.jpeg';
import wall16 from '../src/Assets/fireboltg.jpeg';
import wall17 from '../src/Assets/firebolth.jpeg';
import wall18 from '../src/Assets/firebolti.jpeg';
import wall19 from '../src/Assets/fireboltj.jpeg';


const ImageGallery = () => {
    const imageItems = [
    { imageUrl: wall10, title: 'Firebolt Hurricane '},
    { imageUrl: wall11, title: 'Firebolt Epic ' },
    { imageUrl: wall12, title: 'Firebolt Plus ' },
    { imageUrl: wall13, title: 'Firebolt Hunter ' },
    { imageUrl: wall14, title: 'Firebolt Rise ' },
    { imageUrl: wall15, title: 'Firebolt Cosmic ' },
    { imageUrl: wall16, title: 'Firebolt Drift ' },
    { imageUrl: wall17, title: 'Firebolt Ninja ' },
    { imageUrl: wall18, title: 'Firebolt Pro ' },
    { imageUrl: wall19, title: 'Firebolt Max ' },
]

// const FireBolt = () =>{
//     return(
// <div>sdfghjk</div>
//     );
// }

// export default FireBolt;
const renderImages = () => {
    const imagesPerRow = 6;
    const rows = [];
    let currentRow = [];

    imageItems.forEach((item, index) => {
      currentRow.push(
        <div className="col-sm-2" key={index}  style={{paddingTop:"100px"}}>
          <div className="card" >
            <img src={item.imageUrl} alt="" className="card-img-top" style={{ width: '100%' , cursor:"pointer"}} />
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