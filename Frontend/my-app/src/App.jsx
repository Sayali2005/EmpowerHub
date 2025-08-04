// App.jsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import UserNavbar from "./components/UserNavbar";
import Footer from "./components/Footer";

import Body from "./components/Body";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";

// 🔁 Helper to decide which navbar to show
const NavbarWrapper = () => {
  const location = useLocation();
  const user = JSON.parse(localStorage.getItem("user"));

  // Show user navbar only for authenticated routes
  const authRoutes = ["/dashboard", "/leaderboard"];
  const isAuthRoute = authRoutes.some((route) => location.pathname.startsWith(route));

console.log("Current Path:", location.pathname);
console.log("User:", user);
  return isAuthRoute && user ? <UserNavbar /> : <Navbar />;
};

function App() {
  return (
    <div className="app-container">
      <Router>
        <NavbarWrapper />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div> 
  );
}

export default App;
