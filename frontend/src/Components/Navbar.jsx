import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const [username, setUsername] = useState(localStorage.getItem("uname") || ""); 
  const [userRole, setUserRole] = useState(localStorage.getItem("role") || ""); // ✅ Get role from storage
  const navigate = useNavigate();

  useEffect(() => {
    const handleStorageChange = () => {
      setUsername(localStorage.getItem("uname") || "");
      setUserRole(localStorage.getItem("role") || ""); // ✅ Update role when storage changes
    };

    // Listen for storage changes (works across tabs)
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    localStorage.removeItem("uname");
    setUsername(""); // Update state
    setUserRole(""); // Clear role
    navigate("/signin");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container d-flex align-items-center">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="flogo.png" alt="QuickBid Logo" height="60px" className="me-2" />
          <b>QuickBid</b>
        </Link>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">Explore</Link>
            </li>

            {/* ✅ Show "Add Product" only for admins */}
            {userRole === "admin" && (
              <li className="nav-item">
                <Link className="nav-link" to="/addProduct">Add Product</Link>
              </li>
            )}

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                {username ? username : "Profile"}
              </a>
              <ul className="dropdown-menu">
                {username ? (
                  <li><button className="dropdown-item" onClick={handleLogout}>Signout</button></li>
                ) : (
                  <>
                    <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                    <li><Link className="dropdown-item" to="/signin">Signin</Link></li>
                  </>
                )}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
