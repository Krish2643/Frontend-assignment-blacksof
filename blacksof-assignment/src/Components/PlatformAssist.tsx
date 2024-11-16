import React from 'react';
import './Products.css';
import img from '../assets/Images/platfrom.png'

const PlatformAssist = () => {
  // const items = [
  //   { text: 'Saves on power consumption & related costs' },
  //   { text: 'Lowers downtimes' },
  //   { text: 'Detects power thefts.' },
  //   { text: 'Ensures smart monitoring and control of the street light infrastructure.' },
  //   { text: 'Ensures real-time actionable analytics on power failures, lamp malfunctions, voltage failures, etc.' },
  //   { text: 'Ensures security in the neighborhood' },
  // ];

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
