import React from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';
import Navigation from './components/Navigation';

import Footer from './components/Footer';

function App() {
  return (
    <div>
    <main>
      <Header>
      </Header>
      <Navigation></Navigation>
      <Project></Project>
    </main>
    <Footer></Footer>
  </div>
  );
}

export default App;
