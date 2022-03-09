import "./App.css";
import NavbarBootstrap from "./components/NavbarBootstrap";
import CarouselBootstrap from "./components/CarouselBootstrap";
import ColumnsBootstrap from "./components/ColumnsBootstrap";
import ContentBootstrap from "./components/ContentBootstrap";

function App() {
  return (
    <div className="App">
      <NavbarBootstrap />
      <CarouselBootstrap />
      <ColumnsBootstrap />
      <ContentBootstrap />
    </div>
  );
}

export default App;
