import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Map from './Map';

const App = () => {

  return (
      <div>
            <BrowserRouter>

              <Routes>
                <Route index element={<Home />} />
                <Route path="/map" element={<Dashboard />} />
                <Route path="/map/house" element={<Map />} />
              </Routes>
            </BrowserRouter>
      </div>
  );
};

export default App;