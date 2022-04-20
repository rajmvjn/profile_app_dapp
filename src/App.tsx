import React from 'react';
import './App.scss';
import RoutesView from './routes/RoutesView';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <RoutesView />
      <Footer />
    </div>
  );
}

export default App;
