import Hero from "./Hero.js";

const NotFound = () => {
  return (
   <>
    <Hero text="Error 404." />
    <div className="container">
      <div className="rows">
        <div className="col-lg-8 offset-lg-2 my-5">
          <p className="lead"> The term you are trying to fetch doesn't exist. Please try fetching something else.
          </p>
        </div>
      </div>
    </div>
  </>
  )
}

export default NotFound;