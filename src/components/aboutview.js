import Hero from "./hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              <b>Hai this is Jarvis I am here to learn react with the help of this
              Boot camp.....................
               Lets keep things simple.</b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
