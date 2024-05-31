import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
// import SkillsAndProjects from "./pages/SkillsAndProjects";

function App() {
  return (
    <Router>
      <div className='bg-slate-900'>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/SkillsAndProjects' element={<SkillsAndProjects />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;