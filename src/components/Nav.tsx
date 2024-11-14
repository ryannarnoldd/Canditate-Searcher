import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="navbar navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`} to="/SavedCanditates">Saved Canditates</Link>
            </li>
          </ul>
    </nav>
  );
}

export default Nav;