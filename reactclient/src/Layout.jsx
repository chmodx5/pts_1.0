import { BrowserRouter, Routes, Link, Route, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Items from "./pages/Items";

function App() {
  return (
    <>
      <BrowserRouter>
        <header className="bg-gray-400">
          <Link to="/">Home</Link>
          <Link to="/items">Items</Link>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/items" element={<Items />} />{" "}
          </Routes>
        </main>
      </BrowserRouter>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
