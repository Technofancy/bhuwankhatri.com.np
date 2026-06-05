import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useTheme from './hooks/useTheme';

import DefaultLayout from './layouts/DefaultLayout';
import HomeLand from './pages/HomeLand';
import Bhuwan from './pages/Bhuwan';
import Mohanmitra from './pages/Mohanmitra';
import Technofancy from './pages/Technofancy';
import SinglePoem from './pages/SinglePoem';
import SingleBlogPost from './pages/SingleBlogPost';
import SingleProject from './pages/SingleProject';
import SingleWork from './pages/SingleWork';
import NotFound from './pages/NotFound';

function App() {
  useTheme(); // This hook now manages all theme classes on the <html> element

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomeLand />} />
          <Route path="bhuwan" element={<Bhuwan />} />
          <Route path="bhuwan/:id" element={<SingleProject />} />
          <Route path="mohanmitra" element={<Mohanmitra />} />
          <Route path="mohanmitra/:id" element={<SinglePoem />} />
          <Route path="technofancy" element={<Technofancy />} />
          <Route path="technofancy/blog/:id" element={<SingleBlogPost />} />
          <Route path="technofancy/work/:id" element={<SingleWork />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;