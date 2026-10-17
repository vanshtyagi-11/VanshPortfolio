import "../css/Footer.css";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-top-left-logo">
            <img src={logo} alt="Vansh" />
          </div>
          <p>I am frontend devloper from Meerut, Uttar Pradesh (India).</p>
        </div>
        <div className="footer-social">
          <p>Connect with me</p>
          <div className="footer-social-links">
            <a
              href="https://www.instagram.com/__vansh__tyagi___?cplk=dTFrcWN5bno4emtv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram profile"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                focusable="false"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="4"
                  stroke="currentColor"
                  strokeWidth="1.8"
                />
                <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-tyagi-43aa85290?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path
                  fill="currentColor"
                  d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9.4H7v11.1H3.4V9.4Zm5.8 0h3.4v1.5h.1a3.8 3.8 0 0 1 3.4-1.9c3.6 0 4.3 2.4 4.3 5.5v6h-3.6v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.2V9.4Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <hr className="footer-divider" />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2026 Vansh Tyagi. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of services</p>
          <p>Privacy policy</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
