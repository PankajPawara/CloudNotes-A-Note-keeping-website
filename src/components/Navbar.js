import { Link, useLocation } from 'react-router'
import { jwtDecode } from "jwt-decode";

const Navbar = () => {

    let location = useLocation();
    const token = localStorage.getItem("token");
    let userName = "";

    if (token) {
        const decoded = jwtDecode(token);
        userName = decoded.user.name;
    }

    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid fw-bold">

                {/* Brand Logo */}
                <Link className="navbar-brand fw-bolder" to="/">CloudNotes</Link>

                {/* Hamburger Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Collapsible Content */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* Small screen username */}
                    {token && (
                        <div className="d-lg-none p-2 fw-bold">
                            Hi, {userName}
                        </div>
                    )}

                    {/* Nav Links */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">
                                About
                            </Link>
                        </li>
                    </ul>

                    {/* Right-side items */}
                    <form className="d-flex align-items-center">

                        {/* If not logged in */}
                        {!token ? (
                            <div>
                                <Link className="btn btn-outline-success mx-2 fw-bold border-2" to="/login">
                                    Login <i className="fa-solid fa-arrow-right-to-bracket"></i>
                                </Link>
                                <Link className="btn btn-outline-primary mx-2 fw-bold border-2" to="/signup">
                                    Signup <i className="fa-solid fa-user-plus"></i>
                                </Link>
                            </div>
                        ) : (
                            <>
                                {/* Desktop/tablet username */}
                                <span className="d-none d-lg-flex align-items-center">
                                    Hi, {userName}
                                </span>

                                <Link
                                    onClick={() => localStorage.removeItem('token')}
                                    className="btn btn-outline-danger mx-2 fw-bolder border-2"
                                    to="/login"
                                >
                                    Logout <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                </Link>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
