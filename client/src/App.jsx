import { Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./view/FrontEnd/pages/NotFound";
import WebRoutes from "./routes/WebRoutes";
import AdminRoutes from "./routes/AdminRoutes";
import UserRoutes from "./routes/UserRoutes";

function App() {
  return (
    <>
      <Routes>
        {/* FrontEnd Layout */}
        <WebRoutes />

        {/* Admin Panel */}
        <AdminRoutes />

        {/* User Panel */}
        <UserRoutes />

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
