import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
