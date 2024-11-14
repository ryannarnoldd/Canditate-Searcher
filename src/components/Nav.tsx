import { Link, useLocation } from 'react-router-dom';

function Nav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    // Rewrite using Bootstrap, keeping in mind the active class.
    // Make it very simple. Just a few lines of code.

    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <h2>Candidate Searcher</h2>
        <ul className="navbar-nav">

          <li className="nav-item">
            <Link className={`nav-link ${isActive('/') ? 'active' : ''}`} to="/">Search</Link>
          </li>

          <li className="nav-item">
            <Link className={`nav-link ${isActive('/SavedCandidates') ? 'active' : ''}`} to="/SavedCandidates">Saved Candidates</Link>
          </li>
        </ul>
    </nav>
    
    
    
  );
}

export default Nav;