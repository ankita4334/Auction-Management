import { Link } from "react-router-dom";
// import logo from "../assets/logo.png"; // Ensure the logo path is correct

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container d-flex align-items-center">
        {/* Logo & Brand Name (Shifted Left) */}
        <div className="me-auto d-flex align-items-center">
          <Link to="/" className="navbar-brand d-flex align-items-center">
            <img src='flogo.png' alt="QuickBid Logo" height="60px" className="me-2" />
            <b>QuickBid</b>
          </Link>
        </div>

        {/* Toggle Button for Mobile */}
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

        {/* Navbar Links (No Shifting) */}
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

            {/* Profile Dropdown */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown">
                Profile
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/signup">Signup</Link></li>
                <li><Link className="dropdown-item" to="/signin">Signin</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Signout</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
