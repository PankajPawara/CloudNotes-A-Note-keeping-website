import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className="container-fluid bg-light text-dark">
            <footer className="d-flex flex-wrap justify-content-between align-items-center border-top">
                <p className="nav col-md-4 text-body-secondary">© 2025 Company, Inc</p>

                <ul className="nav col-md-4 justify-content-end">
                    <li className="nav-item"><Link to="/" className="nav-link  text-body-secondary">Home</Link></li>
                    <li className="nav-item"><Link to="/about" className="nav-link text-body-secondary">About</Link></li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
