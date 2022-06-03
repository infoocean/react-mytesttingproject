import React from 'react';

export default function Footer() {
  return (
    <footer class="footer-16371">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-9 text-center">
            <div class="footer-site-logo mb-2">
              <a href="#">@Shubham</a>
            </div>
            <ul class="list-unstyled nav-links mb-3">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
            <div class="social mb-3">
              <h3>Stay in touch</h3>
              <span className="mailto">
                <a href="mailto:someone@example.com">sj2585097@gmail.com</a>
              </span>
            </div>
            <div class="social mb-3">
              <h3>Follow us</h3>
              <ul class="list-unstyled">
                <li class="in">
                  <a href="#">
                    <i class="fa-brands fa-instagram-square"></i>
                  </a>
                </li>
                <li class="lin">
                  <a href="#">
                    <i class="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li class="tw">
                  <a href="#">
                    <i class="fa-brands fa-twitter-square"></i>
                  </a>
                </li>
                <li class="fb">
                  <a href="#">
                    <i class="fa-brands fa-facebook-square"></i>
                  </a>
                </li>
                <li class="wts">
                  <a href="#">
                    <i class="fa-brands fa-whatsapp-square"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div class="copyright">
              <p class="mb-2">
                <small>&copy;2022 Shubham. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
