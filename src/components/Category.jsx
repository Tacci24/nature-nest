import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faMountain,
  faUser,
  faShapes,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import "../styles/category.css";

function Category() {
  return (
    <div className="category">
      <button className="category-item">
        <FontAwesomeIcon icon={faPaw} className="paw" />
        <span>Wildlife</span>
      </button>
      <button className="category-item">
        <FontAwesomeIcon icon={faMountain} className="mountain" />
        <span>Landscape</span>
      </button>
      <button className="category-item">
        <FontAwesomeIcon icon={faUser} className="user" />
        <span>Potraits</span>
      </button>
      <button className="category-item">
        <FontAwesomeIcon icon={faShapes} className="shapes" />
        <span>Abstract</span>
      </button>
      <button className="category-item">
        <FontAwesomeIcon icon={faTabletScreenButton} className="screen" />
        <span>Digital</span>
      </button>
    </div>
  );
}

export default Category;
