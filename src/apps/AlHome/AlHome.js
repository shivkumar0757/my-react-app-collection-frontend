import React from 'react';
import './AlHome.css';

function AlHome () {
    return (
        <div className="container">
            <div className="header">
                <h2>Assets Vs Liabilities</h2>
            </div>
      <div className="upper">
        <div className="upper-upper">
          <h1  contenteditable="true">Income</h1>
        </div>
        <div className="upper-lower">
          <h1 contenteditable="true">Expenses</h1>
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
