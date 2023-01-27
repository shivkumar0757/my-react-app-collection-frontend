import React from 'react';
import './AlHome.css';

function AlHome () {
    return (
        <div className="container">
      <div className="upper">
        <div className="upper-upper">
          <h1>Income</h1>
        </div>
        <div className="upper-lower">
          <h1>Expenseds</h1>
        </div>
      </div>
      <div className="lower">
        <div className="lower-left">
          <h1>Assets</h1>
        </div>
        <div className="lower-right">
          <h1>LIabilities</h1>
        </div>
      </div>
    </div>
      );
}



export default AlHome;
