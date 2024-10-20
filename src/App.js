import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Events from './pages/pages/Events';
import Forums from './pages/pages/Forums';
import Members from './pages/pages/Members';
import Contacts from './pages/pages/Contacts';
import News from './pages/pages/News';
import NavBar from './components/NavBar';
import Home from './pages/pages/Home';

function App() {
  return (
    <div>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/forums" element={<Forums />} />
          <Route path="/members" element={<Members />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/news" element={<News />} />
        </Routes>
    </div>
  );
}

export default App;
