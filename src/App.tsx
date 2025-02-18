import { lazy, Suspense } from "react";

import { Routes, Route, Link } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Overview from "./components/Overview";
const Settings = lazy(() => import("./components/Settings"));

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
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="overview" element={<Overview />} />
          <Route
            path="settings"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Settings />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

function About() {
  return <h2>About</h2>;
}

export default App;
