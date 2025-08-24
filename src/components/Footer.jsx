import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <h3>About</h3>
        <h3>Help</h3>
        <h3>Contact</h3>
        <h3>Terms</h3>
      </div>
      <div className="social-icons">
        <p>
          <FontAwesomeIcon icon={faFacebook} />
        </p>
        <p>
          <FontAwesomeIcon icon={faTwitter} />
        </p>
        <p>
          <FontAwesomeIcon icon={faInstagram} />
        </p>
      </div>
      <p className="copyright">
        © 2025. Designed by Tacci. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
