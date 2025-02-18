import { Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
