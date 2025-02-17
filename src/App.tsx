import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/login";
import LandingCustomer from "./components/Landing/LandingCustomer";
import AdminDashboard from "./components/Landing/AdminDashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/landing" element={<LandingCustomer />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );
}

export default App;
