import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import '@fontsource/roboto';
const App = () => {
  return (
    <>
<Navbar />
<Home/>
<About/>
<Menu/>
    </>
  );
}

export default App;
