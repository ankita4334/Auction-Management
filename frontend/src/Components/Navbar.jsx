import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    console.log("Stored Username from localStorage:", storedUsername); // Debugging

    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    console.log("User logged out, storage cleared"); // Debugging
    setUsername(null);
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container d-flex align-items-center">
        <div className="me-auto d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src="flogo.png" alt="QuickBid Logo" height="60px" className="me-2" />
            <b>QuickBid</b>
          </Link>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/explore">Explore</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/auction">Auction</Link>
            </li>

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
};

export default Navbar;
