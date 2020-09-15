import React from 'react';
import { Header } from '../Header/Header';
import { Home } from '../Home/Home';
// import { Timer } from '../Timer/Timer';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      {/* <Timer secondsLeft={3000}/> */}
    </>
  );
}

export default App;
