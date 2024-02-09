import React from 'react';
const InfoBar = ({ open, close }) => {
    return (
      open && (
        <div style={{
          position: 'absolute',
          bottom: 0,
          height: '33.33%',
          width: '100%',
          zIndex: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
        }}>
            <button onClick={close}>Close</button>

          {/* Box content */}
        </div>
      )
    );
  };
export default InfoBar;