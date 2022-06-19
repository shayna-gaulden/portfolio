import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import EvoBioNetwork from './pages/projects/evo-bio-networks';
import WineQuality from './pages/projects/wine-quality';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/evolution-biologicial-networks' exact element={<EvoBioNetwork />} />
        <Route path='/wine-quality' exact element={<WineQuality />} />
      </Routes>
    </div>
  );
}

export default App;
