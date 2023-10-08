import React, { useState } from "react";
import up from "./pic/up.png";
import down from "./pic/down.png";
import homebg from "./pic/homebg.jpg";
import watercycle from "./pic/waterCycle.jpg";
import newImage from "./pic/newImage.jpeg";
import { Link } from 'react-router-dom';

function Swotinfo() {
  const [showNewImage, setShowNewImage] = useState(false);

  const handleClick = () => {
    setShowNewImage(prevState => !prevState);
  };

  return (
    <div className="container" >
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

        <div className="content">
          <h1>Assessing Fresh Water Availability</h1>
          <p>
            Given our basic need for fresh water, hydrologic observations of
            time-related (temporal) and geography-related (spatial) variations
            in water volume stored in rivers, lakes, and wetlands are extremely
            important. By measuring water storage changes in wetlands, lakes,
            and reservoirs - making it possible to estimate discharge in rivers
            more accurately - SWOT will contribute to a fundamental
            understanding of the terrestrial branch of the global water cycle.
          </p>
          <h3>Click on the image to view more information.</h3>
          <img
            className="watercycle"
            src={showNewImage ? newImage : watercycle}
            alt=""
            onClick={handleClick}
          />
          <p>
            The SWOT mission will provide crucial information about medium to
            large land-based water bodies on Earth, offering updates
            approximately twice every 21 days. This will unveil new details
            about the changing patterns of freshwater availability that impact
            large populations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Swotinfo;
