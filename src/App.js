import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './pages/Hero';
import CitiesPage from "./pages/CitiesPage"
import NewCity from "./pages/NewCity"
import NotFound from './pages/NotFound';
import City from './pages/City';
import WebsiteLayout from './layouts/WebsiteLayout';

function App() {
  return (
    <BrowserRouter>
    <WebsiteLayout>
        <Routes>
          <Route path='/' element={<Hero />} />
          <Route path='/cities' element={<CitiesPage />} />
          <Route path='/new-city' element={<NewCity />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/city/:title' element={<City />} />
        </Routes>
    </WebsiteLayout>
    </BrowserRouter>
  );
}

export default App;
