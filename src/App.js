import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import EvoBioNetwork from './pages/projects/evo-bio-networks';
import WineQuality from './pages/projects/wine-quality';
import AppAnalysis from './pages/projects/app-analysis';
import Pawsitive from './pages/projects/pawsitive';
import EmoDist from './pages/projects/emo-class-dist';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route
          path="/evolution-biologicial-networks"
          exact
          element={<EvoBioNetwork />}
        />
        <Route path="/wine-quality" exact element={<WineQuality />} />
        <Route path="/app-analysis" exact element={<AppAnalysis />} />
        <Route path="/pawsitive" exact element={<Pawsitive />} />
        <Route path="/pawsitive" exact element={<Pawsitive />} />
        <Route
          path="/emotion-distribution-vectors"
          exact
          element={<EmoDist />}
        />
      </Routes>
      <Analytics />
    </div>
  );
}

export default App;
