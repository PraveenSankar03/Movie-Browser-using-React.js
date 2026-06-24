import Hero from "./Hero.js";

const StatCard = ({ number, label }) => (
  <div className="home-stat">
    <span className="home-stat-number">{number}</span>
    <span className="home-stat-label">{label}</span>
  </div>
);

const FeatureRow = ({ title, desc }) => (
  <div className="home-feature">
    <div>
      <h5 className="home-feature-title">{title}</h5>
      <p className="home-feature-desc">{desc}</p>
    </div>
  </div>
);

const Home = () => {
  return (
    <>
      <Hero text="Every Film. One Place." />
      <div className="container">
        <div className="home-stats">
          <StatCard number="1 Million+" label="Movies" />
          <StatCard number="Live data" label="TMDB Data" />
          <StatCard number="Free of cost" label="Always" />
        </div>

        <div className="home-divider" />

        <div className="home-features">
          <FeatureRow
            title="Instant Search"
            desc="Type a title and get results from the world's largest movie database in real time."
          />
          <FeatureRow
            title="Full Movie Details"
            desc="Title, synopsis release date and popularity, everything on a single clean page."
          />
          <FeatureRow
            title="Powered by TMDB"
            desc="Live data from The Movie Database, updated daily across every genre and language."
          />
        </div>
      </div>
    </>
  );
};

export default Home;