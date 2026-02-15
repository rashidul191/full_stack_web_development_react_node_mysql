import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/FrontEnd/Home";
import Blogs from "./pages/FrontEnd/Blogs";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />

        {/* User Panel Routes */}

        {/* Admin Panel Routes */}

        {/* NotFound Route */}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
