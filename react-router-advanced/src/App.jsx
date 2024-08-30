import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Blog from "./components/BlogPost";
import Login from "./components/Login";
import Logout from "./components/Logout";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <div style={{
          backgroundColor: "lightgray",
          padding: "10px",
        }}>
          <nav style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
          }}>
            <ul style={{
              listStyleType: "none",
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}>
              <li style={{
                fontWeight: "bold",
                cursor: "pointer",
                textDecoration: "none",
                color: "black",
              }}>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/blog/1">Blog Post 1</Link>
              </li>
              <li>
                <Link to="/blog/2">Blog Post 2</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Logout />
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/profile/*"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route path="/blog/:id" element={<Blog />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
