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
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/maps/:company" element={<Map />} />
                <Route path="/contact" element={<ContactSection />} />
                <Route path="/contact/:email" element={<ContactSection />} />
              </Routes>
            </BrowserRouter>
      </div>
  );
};

export default App;