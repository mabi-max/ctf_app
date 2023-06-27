import React from 'react';
import './App.css';

import { Footer, Blog, Possibility, Features, WhatDigiTech, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

function App() {
  return (
    <div className="App">
        <div className='gradient__bg'>
            <Navbar />
            <Header />
        </div>
        <Brand />
        <WhatDigiTech />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />

    </div>
  );
}

export default App;
