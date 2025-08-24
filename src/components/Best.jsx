import artworks from "../data";
import "../styles/best.css";

function Best() {
  return (
    <div className="best">
      <h2>Best Wildlife Shots This Week</h2>
      <div className="art-list">
        {artworks.slice(0, 3).map((art) => (
          <div key={art.id} className="art-card">
            <img src={art.image} alt={art.title} />
            <div className="art-info">
              <h4>{art.title}</h4>
              <p>By {art.artist}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Best;
