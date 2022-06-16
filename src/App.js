import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import EvoBioNetwork from './pages/projects/evo-bio-networks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/evolution-biologicial-networks' exact element={<EvoBioNetwork />} />
      </Routes>
    </div>
  );
}

export default App;
