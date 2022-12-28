// import logo from './logo.svg';
import './App.css';
import Kansarmoede from './components/Kansarmoede';
import Home from './components/Home';
import HelpendeHanden from './components/HelpendeHanden';
import Conclusie from './components/Conclusie';
import Uitdagingen from './components/Uitdagingen';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Praktijktips from './components/Praktijktips';
import React, { useState } from 'react';

function App() {
  const [page, setPage] = useState('home')

  let content;
  if (page === 'home') {
    content = <Home />
  } else if (page === 'Kansarmoede') {
    content = <Kansarmoede />

  } else if (page === 'uitdagingen') {
    content = <Uitdagingen />

  } else if (page === 'helpendeHanden') {
    content = <HelpendeHanden />
  } else if (page === 'conclusie') {
    content = <Conclusie />
  } else if (page === 'praktijktips') {
    content = <Praktijktips />
  }

  function togglePage(newPage) {
    setPage(newPage)
  }


  return (
    <>
      <NavBar onClick={togglePage} />
      <div id='content-wrap' className=''>
        {content}
      </div>
      <Footer />
    </>
  );
}

export default App;
