import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';

function Home () {
    return (
        <div style={{ 
            display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'
          }}>
            <h3>
              My Apps List
            </h3>
            <ul>
                <li>
                    <Link to="/asset-liability">Asset Liability</Link>
                </li>
            </ul>
        </div>
        
    );
}


export default Home;
