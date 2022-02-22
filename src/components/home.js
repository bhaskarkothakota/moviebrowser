import Hero from "./hero";
const Home = () => {
  return (
    <>
      <Hero text="Welcome to the world of Movies&copy;2022" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead" >
             <b> Are you looking to get the movie details??..........Then you are in a right place.
              Please enter the movie name that you are looking for in the search bar.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
