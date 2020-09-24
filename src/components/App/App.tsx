import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
// Components
import {
  Header,
  Home, 
  LaunchesAll, 
  LaunchDetails, 
  Rockets, 
  RocketDetails, 
  History, 
  About,
  Footer,
  NoPage,
} from '../components';

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/launches-all" element={<div><Outlet /></div>}>
          <Route path="/" element={<LaunchesAll />} />
          <Route path=":flightNumber" element={<LaunchDetails />} />
        </Route>
        <Route path="/rockets" element={<div><Outlet /></div>}>
          <Route path="/" element={<Rockets />} />
          <Route path=":rocketId" element={<RocketDetails />} />
        </Route>
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
