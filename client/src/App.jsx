import { Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./pages/Blogs";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </>
  );
}

export default App;
