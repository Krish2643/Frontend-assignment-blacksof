import React from 'react';
import './PlatformAssist.css';
import img from '../assets/Images/platfrom.png'

const PlatformAssist: React.FC = () => {

  return (
    <div className="platform-container">
      <p className="heading">
      The platform assists city managers on multiple fronts
      </p>
      <div className='platform-cards' >
        <div className='platform-cards-row' >
          <div className='platfrom-card1' > <img src={img} alt="" />
           <p>Saves on power consumption & related costs</p>
           </div>
           <div className='platfrom-card2' >
           
             <img src={img} alt="" />
           <p>Lowers downtimes</p>
            
           </div>
        </div>
        <div className='platform-cards-row' >
          <div className='platfrom-card3' > <img src={img} alt="" />
           <p>Detects power thefts.</p>
           </div>
           <div className='platfrom-card4' > <img src={img} alt="" />
           <div>
           <p>Ensures smart monitoring and control of the street light infrastructure.</p>

           </div>
           </div>
        </div>
        <div className='platform-cards-row' >
          <div className='platfrom-card5' > <img src={img} alt="" />
           <p>Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage 
           failures, etc.</p>
           </div>
           <div className='platfrom-card6' > <img src={img} alt="" />
           <div>
           <p>Ensures security in the neighborhood</p>
           </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformAssist;
