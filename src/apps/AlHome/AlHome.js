import React from 'react';
import './AlHome.css';

function AlHome () {
    return (
        <div className="container">
        <div className="upper-half">
          <div className="upper-upper">
            <h1>Upper Upper Section</h1>
          </div>
          <div className="upper-lower">
            <h1>Upper Lower Section</h1>
          </div>
        </div>
        <div className="lower-half">
          <div className="lower-left">
            <h1>Lower Left Section</h1>
          </div>
          <div className="lower-right">
            <h1>Lower Right Section</h1>
          </div>
        </div>
      </div>
    );
}



export default AlHome;
