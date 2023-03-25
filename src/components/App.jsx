import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology';
import Error from './Error';
import { AnimatePresence } from 'framer-motion';
import data from "../data.json";

function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  useEffect(() => {
      function handleResize() {
          setViewportWidth(window.innerWidth);
      }

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
  }, []);

  const location = useLocation();
  console.log(location.pathname)


  
  return (
    <main className='main-wrapper'>
      <Navbar viewportWidth = {viewportWidth} location={location.pathname} />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.key}>
          <Route path="/space-tourism-website" element={<Home  viewportWidth = {viewportWidth}/>} />
          <Route path="/space-tourism-website/destination" element={<Destination  destinations ={ data.destinations } viewportWidth = {viewportWidth}/>} />
          <Route path="/space-tourism-website/crew" element={<Crew crew={data.crew} viewportWidth = {viewportWidth}/>} />
          <Route path="/space-tourism-website/technology" element={<Technology technology={data.technology} viewportWidth = {viewportWidth}/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AnimatePresence>
    </main>
  );
}

export default App;
