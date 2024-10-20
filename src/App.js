import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Forums from './pages/Forums';
import Members from './pages/Members';
import Contacts from './pages/Contacts';
import News from './pages/News';
import NavBar from './components/NavBar';

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
