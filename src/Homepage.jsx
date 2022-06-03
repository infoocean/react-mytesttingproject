import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import Landingpage from './Homepagecomponent/Landingpage';
import MovieCarddesign1 from './Homepagecomponent/Mycards';

function Homepage() {
  return (
    <>
      <Header />
      <div className="Landingcomponent">
        <Landingpage />
      </div>
      <div className="Featurescomponent">
        <MovieCarddesign1 />
      </div>

      <Footer />
    </>
  );
}

export default Homepage;
