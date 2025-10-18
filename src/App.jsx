import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeLand from "./pages/HomeLand";
import Technofancy from "./pages/Technofancy";
import Mohanmitra from "./pages/Mohanmitra";
import Bhuwan from "./pages/Bhuwan";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<HomeLand />} />
          <Route path='/homeland' element={<HomeLand />} /> {/* not deployed */}
          <Route path='/technofancy' element={<Technofancy />} />
          <Route path='/mohanmitra' element={<Mohanmitra />} />
          <Route path='/bhuwan' element={<Bhuwan />} />
        </Routes>
    </Router>
  );
}

export default App;