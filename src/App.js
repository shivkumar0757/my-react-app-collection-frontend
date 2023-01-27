import AssetLiabiltyComponent from './apps/AssetLiabiltyComponent';
import Home from './apps/Home';

import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom';
import './App.css';

function App() {
  return (
  
    <Router>
      <div >
        My Apps
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/asset-liability" element={<AssetLiabiltyComponent />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
