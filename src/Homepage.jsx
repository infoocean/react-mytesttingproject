import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Templates/Header';
import Footer from './Templates/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <div className="Maincomponent"></div>
      <Footer />
    </>
  );
}

export default Homepage;
