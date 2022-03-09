import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselBootstrap = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <div style={{ height: "600px", backgroundColor: "#777" }}>
          <Carousel.Caption>
            <div style={{ textAlign: "left" }}>
              <h1 className="m-2">Example headline.</h1>
              <p className="m-2" style={{ fontSize: "1.5rem" }}>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <button className="btn btn-primary btn-lg mt-2 mb-5">
                Learn More
              </button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <div style={{ height: "600px", backgroundColor: "#777" }}>
          <Carousel.Caption>
            <h1 className="m-2">Another example headline.</h1>
            <p className="m-2" style={{ fontSize: "1.5rem" }}>
              Some representative placeholder content for the first slide of the
              carousel.
            </p>
            <button className="btn btn-primary btn-lg mt-2 mb-5">
              Learn More
            </button>
          </Carousel.Caption>{" "}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div style={{ height: "600px", backgroundColor: "#777" }}>
          <Carousel.Caption>
            <div style={{ textAlign: "right" }}>
              <h1 className="m-2">One more for good measure.</h1>
              <p className="m-2" style={{ fontSize: "1.5rem" }}>
                Some representative placeholder content for the first slide of
                the carousel.
              </p>
              <button className="btn btn-primary btn-lg mt-2 mb-5">
                Learn More
              </button>
            </div>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselBootstrap;
