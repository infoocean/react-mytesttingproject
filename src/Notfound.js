import * as React from 'react';
import { Link } from 'react-router-dom';

function Notfound() {
  return (
    <section class="notFound">
      <div class="text">
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <h3>BACK TO HOME?</h3>
        <Link className="notfoundlink" to="/Loginpage">
          YES
        </Link>
        <Link className="notfoundlink" to="/Loginpage">
          NO
        </Link>
      </div>
    </section>
  );
}

export default Notfound;
