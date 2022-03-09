import { Row, Col } from "react-bootstrap";

const ContentBootstrapItem = () => {
  return (
    <Row className="my-5" style={{ display: "flex", flexDirection: "row" }}>
      <Col sm={5}>
        <div
          style={{
            width: "500px",
            height: "500px",
            borderRadius: "50px",
            background: "rgb(119, 119, 119)",
          }}
        ></div>
      </Col>
      <Col
        sm={7}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", textAlign: "left" }}>
          First featurette heading. It'll blow your mind.
        </h1>
        <p style={{ fontSize: "1.5rem", textAlign: "left" }}>
          Some great placeholder content for the first featurette here. Imagine
          some exciting prose here.
        </p>
      </Col>
      <hr className="h-1 my-5"></hr>
    </Row>
  );
};

export default ContentBootstrapItem;
