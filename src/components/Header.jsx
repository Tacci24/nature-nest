import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faComment,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <h1 className="title">WildArt</h1>
      <form className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search art or artist..."
        />
      </form>
      <div className="header-buttons">
        <button className="login-button">
          <FontAwesomeIcon icon={faUser} />
        </button>
        <button className="chat-button">
          <FontAwesomeIcon icon={faComment} />
        </button>
        <button className="cart-button">
          <FontAwesomeIcon icon={faCartShopping} />
        </button>
      </div>
    </header>
  );
}

export default Header;
