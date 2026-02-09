const Hero = ({ text, backdrop }) => {
  return (
    <div>
      <header className="bg-dark text-white p-4 hero-container">
        <h2 className="hero-text"> {text} </h2>
        {backdrop && (
          <div
            className="hero-backdrop"
            style={{ backgroundImage: `url(${backdrop})` }}
          ></div>
        )}
      </header>
    </div>
  );
};
export default Hero;
