import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Templates/Header';
import Footer from './Templates/Footer';
import Landingpage from './Homepagecomponent/Landingpage';
import MovieCarddesign1 from './Homepagecomponent/Mycards';
import Ourservices from './Homepagecomponent/Ourservices';
import OurreactjsLearn from './Homepagecomponent/Ourlearnings';

function Homepage() {
  return (
    <>
      <Header />
      <div className="Landingcomponent">
        <Landingpage />
      </div>
      <div className="Ourservices">
        <Ourservices />
      </div>
      <div className="OurreactjsLearn">
        <OurreactjsLearn />
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
