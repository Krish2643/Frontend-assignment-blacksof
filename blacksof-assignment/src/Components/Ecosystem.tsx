import React from "react";
import "./Ecosystem.css";
import f1 from '../assets/Images/lamp.png'
import f2 from '../assets/Images/lamp.png'
import f3 from '../assets/Images/lamp.png'
import f4 from '../assets/Images/lamp.png'
import f5 from '../assets/Images/lamp.png'

const Ecosystem = () => {
  return (
    <div className="ecosystem-container">
      <h1 className="heading">Ecosystem</h1>
      <p className="description">
      How does a smart street light ecosystem work?
      </p>
      <div className="icons-container">
        {/* Icon 1 */}
        <div className="icon-item">
          <div className="icon-item-double-image" >
          <img src={f1} alt="Icon 1" className="icon icon-double-img" />
          <img src={f1} alt="Icon 1" className="icon" />
          </div>
          <h3 className="icon-title">Street Light Controller</h3>
          <p className="icon-description">Activates/deactivates in response to motion/light sensing and controls the brightness of the street lamp</p>
        </div>

        {/* Dotted Line */}
        <div className="dotted-line"></div>

        {/* Middle Icon */}
        <div className="icon-item">
          <img src={f2} alt="Gateway" className="icon" />
          <h3 className="icon-title">Gateway</h3>
          <p className="icon-description">Employed for interfacing between a Controller and the Lighting Management Software.</p>
          <div className="sub-icons">
            {/* Sub-Icon 1 */}
            <div className="sub-icon-item">
              <div className="dotted-line-vertical"></div>
              <img src={f4} alt="Sub-Icon 1" className="sub-icon" />
              <h4 className="sub-icon-title">Users</h4>
              <p className="sub-icon-description">
              Data from the cloud is used to monitor and control street lights by the System Managers.
              </p>
            </div>

            {/* Sub-Icon 2 */}
            <div className="sub-icon-item">
              <div className="dotted-line-vertical"></div>
              <img src={f5} alt="Sub-Icon 2" className="sub-icon" />
              <h4 className="sub-icon-title">Evaluation</h4>
              <p className="sub-icon-description">
              Gathered insights are used to evaluate the performance of the lighting systems.
              </p>
            </div>
          </div>
        </div>

        {/* Dotted Line */}
        <div className="dotted-line"></div>

        {/* Icon 3 */}
        <div className="icon-item">
          <img src={f3} alt="Icon 3" className="icon" />
          <h3 className="icon-title">Cloud-based Management System</h3>
          <p className="icon-description">Collects information from multiple gateways.</p>
        </div>
      </div>
    </div>
  );
};

export default Ecosystem;