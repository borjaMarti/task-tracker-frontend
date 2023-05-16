import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Footer() {
  const location = useLocation();

  return (
    <footer>
        <p>MIT 2023</p>
        {
          location.pathname === '/' ?
          <Link to="/about">About</Link>
          : <Link to="/">Go Back</Link>
        }
    </footer>
  )
}

export default Footer;