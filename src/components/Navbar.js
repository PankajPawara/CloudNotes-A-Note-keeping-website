import { Link, useLocation } from 'react-router'

const Navbar = () => {
    let location = useLocation()
    return (
        <nav className="navbar navbar-expand-lg sticky-top navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
            <div className="container-fluid fw-bold">
                <Link className="navbar-brand fw-bolder" to="/">CloudNotes</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
                        </li>
                    </ul>
                    <form className="d-flex">
                        {
                            !localStorage.getItem('token') ? <div>
                                <Link className="btn btn-outline-success mx-2 fw-bold border-2" role="button" to="/login">Login <i class="fa-solid fa-arrow-right-to-bracket"></i></Link>
                                <Link className="btn btn-outline-primary mx-2 fw-bold border-2" role="button" to="/signup">Signup <i className="fa-solid fa-user-plus"></i></Link>
                            </div> : <Link onClick={() => { localStorage.removeItem('token');}} className="btn btn-outline-danger mx-2 fw-bolder border-2" role='button' to="/login">Logout <i className="fa-solid fa-arrow-right-from-bracket"></i></Link>
                        }
                    </form>
                </div>
            </div>
        </nav>
    )
}
export default Navbar
