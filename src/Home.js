import React from 'react';
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
// 
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
// 
import wall20 from '../src/Assets/gizmorea.jpeg';
import wall21 from '../src/Assets/gizmoreb.jpeg';
import wall22 from '../src/Assets/gizmorec.jpeg';
import wall23 from '../src/Assets/gizmored.jpeg';
import wall24 from '../src/Assets/gizmoree.jpeg';
import wall25 from '../src/Assets/gizmoref.jpeg';
import wall26 from '../src/Assets/gizmoreg.jpeg';
import wall27 from '../src/Assets/gizmoreh.jpeg';
// 
import wall28 from '../src/Assets/noisea.jpeg';
import wall29 from '../src/Assets/noiseb.jpeg';
import wall30 from '../src/Assets/noisec.jpeg';
import wall31 from '../src/Assets/noised.jpeg';
import wall32 from '../src/Assets/noisee.jpeg';
import wall33 from '../src/Assets/noisef.jpeg';
import wall34 from '../src/Assets/noiseg.jpeg';
import wall35 from '../src/Assets/noiseh.jpeg';
import wall36 from '../src/Assets/noisei.jpeg';

// const ImageGallery = () => {
//   const imageUrls = [
//     // Wall1, wall2,,wall4,wall8,wall3,wall6,wall5,wall7,wall9,
//     // wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,
//     // wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,wall36,
    
//   ];

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
    { imageUrl: wall9, title: 'Boat X pro ' },
// 
{ imageUrl: wall10, title: 'Firebolt Hurricane ' },
{ imageUrl: wall11, title: 'Firebolt Epic ' },
{ imageUrl: wall12, title: 'Firebolt Plus ' },
{ imageUrl: wall13, title: 'Firebolt Hunter ' },
{ imageUrl: wall14, title: 'Firebolt Rise ' },
{ imageUrl: wall15, title: 'Firebolt Cosmic ' },
{ imageUrl: wall16, title: 'Firebolt Drift ' },
{ imageUrl: wall17, title: 'Firebolt Ninja ' },
{ imageUrl: wall18, title: 'Firebolt Pro ' },
{ imageUrl: wall19, title: 'Firebolt Max ' },
// 
{ imageUrl: wall20, title: 'Gizmore Max ' },
{ imageUrl: wall21, title: 'Gizmore Prime ' },
{ imageUrl: wall22, title: 'Gizmore Gizfit ' },
{ imageUrl: wall23, title: 'Gizmore Vogue ' },
{ imageUrl: wall24, title: 'Gizmore Blaze ' },
{ imageUrl: wall25, title: 'Gizmore Plus ' },
{ imageUrl: wall26, title: 'Gizmore Hurricane ' },
{ imageUrl: wall27, title: 'Gizmore Rise ' },
// 
{ imageUrl: wall28, title: 'Noise Ninja ' },
{ imageUrl: wall29, title: 'Noise Rise ' },
{ imageUrl: wall30, title: 'Noise Epic ' },
{ imageUrl: wall31, title: 'Noise Blaze ' },
{ imageUrl: wall32, title: 'Noise Vision ' },
{ imageUrl: wall33, title: 'Noise Crew ' },
{ imageUrl: wall34, title: 'Noise Icon ' },
{ imageUrl: wall35, title: 'Noise Buzz ' },
{ imageUrl: wall36, title: 'Noise Caliber ' },
   
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
              <Link className="nav-link" to="/gizmore"style={{fontSize:"20px",color:"white"}}>Gizmore</Link>
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
