import React from "react";
import up from "./pic/up.png";
import down from "./pic/down.png";
import homebg from "./pic/homebg.jpg";
import { Link } from "react-router-dom";

function swotimport() {
  return (
    <div className="container">
      <div className="svg-container">
        <img className="bg-image" src={homebg} alt="" />
        <img className="up-image" src={up} alt="" />
        <div className="down-image-container">
          <img className="down-image" src={down} alt="" />
          <Link to="/swotinfo" className="icon">
            Availability
          </Link>
          <Link to="/swotimport" className="icon2">
            SWOT
          </Link>
          <Link to="/useful" className="icon3">
            Useful
          </Link>
          <Link to="/gpm" className="icon4">
            GPM
          </Link>
        </div>
        <h1 className="title">Aquatic Adventurers</h1>
        <div className="content">
          <h1>Why SWOT Matters</h1>
          <h3>Detecting New Ocean Features</h3>
          <h3>Enabling Date Applications</h3>
          <p>
            SWOT is a water mission. It measures the height of almost all
            surface water on our planet. In one mission, SWOT will monitor the
            ocean, the land and freshwater resources, covering the entire water
            supply-demand chain. There is so far no other mission providing
            information as such. The excitement about SWOT is to build a new
            community of water scientists that will look at the Earth’s surface
            water in its entirety and movement, from ocean to land and back as a
            complete system using SWOT’s global coverage. This global and
            complete view of water will help us better describe and predict the
            water cycle and its deviations from the norms such as floods and
            droughts.
          </p>
          <h6>This animation shows how SWOT will collect data over the state of Florida, which is rich with rivers, lakes, and wetlands. Globally, SWOT will measure the height of water in the ocean and in lakes, rivers, and reservoirs on land. Credit: NASA/JPL-Caltech</h6>
          <img className="importgif"
          src="https://swot.jpl.nasa.gov/internal_resources/633/SWOT_data_gif.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default swotimport;
