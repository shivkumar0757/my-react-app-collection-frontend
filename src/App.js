import MyComponent from './apps/AssetLiabiltyComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={MyComponent} />
    </Router>
  );
}

export default App;
