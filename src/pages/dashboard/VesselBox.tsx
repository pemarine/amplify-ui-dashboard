import React from 'react';
import Popup from 'reactjs-popup';
//import { Vessel } from './types'; // Import the Vessel interface
import { Vessel } from '../../models'; // Import the Vessel interface

import './VesselBox.css'; // Import the CSS file



interface VesselBoxProps {
  vessel: Vessel;
  open: boolean;
  close: () => void;
}

const VesselInfoBox: React.FC<VesselBoxProps> = ({ vessel, open, close }) => {
  console.log(vessel); // Log the vessel prop

  return (
    <Popup open={open} closeOnDocumentClick onClose={close} closeOnEscape modal>

      <div className="vessel-box">
        <div className="header-box">
            <img className="flag" src={`/flags/${vessel.FLAG}.png`} alt={vessel.FLAG ?? ""} width="30" height="20"/> 
          <h2>M/S {vessel.SHIPNAME}</h2>
        </div>
        <div className='content'>
          
          <p>Type: <span className="type-name">{vessel.TYPE_NAME}</span></p>
          <p>Destination:   {vessel.NEXT_PORT_NAME}</p>
          <p>Last port:   {vessel.LAST_PORT}</p>
          <div className="imo-box">
            <p className="imo">IMO:   {vessel.IMO}</p>
          </div>



        </div>
      </div>
    </Popup>
  );
}

export default VesselInfoBox;