import { Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const ColumnsBootstrapItem = () => {
  return (
    <Col className="m-5">
      <div
        style={{
          margin: "0 auto",
          height: "200px",
          width: "200px",
          backgroundColor: "#777",
          borderRadius: "50%",
        }}
      ></div>
      <h2 className="my-3">Heading</h2>
      <div className="my-3 ">
        Some representative placeholder content for the three columns of text
        below the carousel. This is the first column.
      </div>
      <button className="btn btn-secondary my-3">View Details &gt;&gt;</button>
    </Col>
  );
};

export default ColumnsBootstrapItem;
