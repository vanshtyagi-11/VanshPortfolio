import "../css/Footer.css";
import theme_pattern from "../assets/theme_pattern.svg";
import user_icon from "../assets/user_icon.svg";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-top-left-logo">
            <h5>Vansh</h5>
            <img src={theme_pattern} alt="" width="20%" />
            </div>
            <p>I am frontend devloper from Meerut, Uttar Pradesh (India).</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder="Enter your e-mail" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">
            © 2025 Vansh Tyagi. All rights reserved.
          </p>
          <div className="footer-bottom-right">
            <p>Terms of services</p>
            <p>Privacy policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
