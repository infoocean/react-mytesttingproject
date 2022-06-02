import * as React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <>
      <nav>
        <Link to="/Loginpage">Loginpage</Link>
      </nav>
    </>
  );
}

export default Homepage;
