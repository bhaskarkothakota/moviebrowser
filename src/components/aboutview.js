import Hero from "./hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              <b>
               Along with extensive metadata for movies, TV shows and people, we also offer one of the best selections of high resolution posters and fanart.
               On average, over 1,000 images are added every single day.
               Lets keep things simple.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
