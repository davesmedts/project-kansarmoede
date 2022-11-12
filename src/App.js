// import logo from './logo.svg';
import './App.css';
import Kansen from './components/Kansen';
import Home from './components/Home';
import HelpendeHanden from './components/HelpendeHanden';
import Conclusie from './components/Conclusie';
import Uitdagingen from './components/Uitdagingen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home')

  let content;
  if (page === 'home') {
    content = <Home />
  } else if (page === 'kansen') {
    content = <Kansen />

  } else if (page === 'uitdagingen') {
    content = <Uitdagingen />

  } else if (page === 'helpendeHanden') {
    content = <HelpendeHanden />
  } else if (page === 'conclusie') {
    content = <Conclusie />
  }

  function togglePage(newPage) {
    setPage(newPage)
  }


  return (
    <>
      <NavBar onClick={togglePage} />
      <div id='content-wrap'>
        {content}
      </div>
      <Footer />
    </>
  );
}

export default App;
