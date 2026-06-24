import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About this application" />
      <div className="container">
        <div className="about-grid">

          <div className="about-card">
            <h4 className="about-card-title">The Developer</h4>
            <p className="about-card-desc">
              Hello, I'm <strong>Praveen</strong>, a developer who loves cinema
              and clean code in equal measure. This project was built to explore
              React, REST APIs, and modern UI design. You can check out my GitHub and Portfolio too !
            </p>
          </div>

          <div className="about-card">
            <h4 className="about-card-title">Tech Stack</h4>
            <ul className="about-tech-list">
              <li>React - component based UI</li>
              <li>React Router - client side routing</li>
              <li>TMDB API - live movie data</li>
              <li>Bootstrap - CSS / responsive grid</li>
            </ul>
          </div>

          <div className="about-card">
            <h4 className="about-card-title">The Goal</h4>
            <p className="about-card-desc">
              I built this movie browser application to learn more about the architecture of React and understand how it actually works ! Also to know more about React hooks such as useState() and useEffect().
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutView;