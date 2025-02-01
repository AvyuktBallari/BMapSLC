import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Map from './Map';
import ContactSection from './Contact';

const App = () => {

  return (
      <div>
            <BrowserRouter>

              <Routes>
                <Route index element={<Home />} />
                <Route path="/map" element={<Dashboard />} />
                <Route path="/map/house" element={<Map />} />
                <Route path="/contact" element={<ContactSection />} />
              </Routes>
            </BrowserRouter>
      </div>
  );
};

export default App;