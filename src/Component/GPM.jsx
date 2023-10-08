import React from 'react';
import up from './pic/up.png';
import down from './pic/down.png';
import homebg from './pic/homebg.jpg';
import gpmpic from './pic/gpmpic.png'
import { Link } from 'react-router-dom';

function GPM() {
  return (
    <div className='container'>
    <div className="svg-container">
      <img className="bg-image" src={homebg} alt="" />
      <img className="up-image" src={up} alt="" />
      <div className="down-image-container">
          <img className="down-image" src={down} alt="" />
          < Link to="/swotinfo" className="icon">Availability</Link>
          < Link to="/swotimport" className="icon2">SWOT</Link>
          < Link to="/useful" className="icon3">Useful</Link>
          < Link to="/gpm" className="icon4">GPM</Link>
        </div>
      <h1 className="title">Aquatic Adventurers</h1>
      <div className='content'>
        <h1>
        GPM IMERG Global Viewer
        </h1>
<p>GPM IMERG Global Viewer is like a magical window that lets us see the rain all around the world. I hope this explanation helps you understand! If you have any more questions, feel free to ask me!</p>
<h3>Click on the image to view more information.</h3>
<a href="https://gpm.nasa.gov/data/visualization/global-viewer"><img className="gpmpic" src={gpmpic} alt="" /></a>


      </div>
      </div>
  </div>
  );
}

export default GPM;