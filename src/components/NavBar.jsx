import logo from '../assets/Logo.png'
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className='navbar fixed-top navbar-expand-md navbar-dark' style={{backgroundColor: '#07193C'}}>
      <div className="container-fluid">
        <Link to="/" className='navbar-brand'>
          <img src={logo} alt="Logo" height={35} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li className="nav-item"><Link to="/" className='nav-link'>Dashboard</Link></li>
            <li className="nav-item"><Link to="/carbonintensity" className='nav-link '>Carbon Intensity</Link></li>
            <li className="nav-item"><Link to="/energenius" className='nav-link '>EnerGenius</Link></li>
            <li className="nav-item"><Link to="/about" className='nav-link '>About</Link></li>
          </ul>
        </div>
      </div>
    </nav>
    )
}
