import React from 'react';
import up from './pic/up.png';
import down from './pic/down.png';
import homebg from './pic/homebg.jpg';
import { Link } from 'react-router-dom';

function useful() {
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
        <h1> SWOT will address some of the most pressing climate change questions of our time.</h1>
        <div>
          <p>An important part of predicting our future climate is determining at what point Earth’s ocean stops absorbing heat and starts releasing it back into the atmosphere, where it could accelerate global warming. SWOT will provide crucial information about this global heat exchange between the ocean and the atmosphere, enabling researchers to test and improve future climate forecasts.</p>
        </div>
        <h1>SWOT data will be used to inform decisions about our daily lives and livelihoods.</h1>
      
      <p>As climate change accelerates the water cycle, more communities around the world will be inundated with water while others won’t have enough. SWOT data will be used to monitor drought conditions and improve flood forecasts, providing essential information to water management agencies, disaster preparedness agencies, universities, civil engineers, and others who need to track water in their local areas. SWOT data will also help industries, like shipping, by providing measurements of water levels along rivers, as well as ocean conditions, including tides, currents, and storm surges.</p>
      <img className="importgif" src="https://swot.jpl.nasa.gov/internal_resources/635/river_view.png" alt="" />
      </div>
      </div>
  </div>
  );
}

export default useful;