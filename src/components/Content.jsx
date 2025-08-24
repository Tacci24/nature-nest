import artworks from "../data";
import "../styles/content.css";

function Content() {
  return (
    <section className="content-section">
      <div className="filters">
        <h3 className="filters-heading">Filters</h3>
        <form className="price-range">
          <label>Price Range</label>
          <input
            type="range"
            title="Select price range"
            min="10"
            max="100"
            step="10"
          />
        </form>
        <form className="medium-select">
          <label>Medium</label>
          <select title="Select medium">
            <option value="all">All</option>
            <option value="oil">Oil</option>
            <option value="digital">Digital</option>
            <option value="photo-print">Photo Print</option>
            <option value="acrylic">Acrylic</option>
            <option value="watercolor">Watercolor</option>
          </select>
        </form>
        <form className="location-input">
          <label>Location</label>
          <input type="text" placeholder="Enter location" />
        </form>
        <form className="digital-only">
          <input type="checkbox" id="digital" name="digital" value="digital" />
          <label htmlFor="digital">Digital Only</label>
        </form>
      </div>

      <main className="artwork-list">
        {artworks.map((art) => (
          <div key={art.id} className="artwork-card">
            <img src={art.image} alt={art.title} />

            <div className="artwork-info">
              <h4>{art.title}</h4>
              <p>By {art.artist}</p>
              <p>
                <strong>Medium</strong>: {art.medium}
              </p>
              <p>
                <strong>Location: </strong>
                {art.location}
              </p>
              <p>
                <strong>Description: </strong> {art.description}
              </p>
            </div>

            <button className="price">
              <strong>Price: </strong> ${art.price}
            </button>
          </div>
        ))}
      </main>
    </section>
  );
}

export default Content;
