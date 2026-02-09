import Hero from "./Hero.js";

const Home = () => {
  return (
   <>
    <Hero text="Welcome to Praveen's Movie Browser" />
    <div className="container">
      <div className="rows">
        <div className="col-lg-8 offset-lg-2 my-5">
          <p className="lead"> Find every movies here ! At one place. This was created by Praveen as one of his project.
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default Home;