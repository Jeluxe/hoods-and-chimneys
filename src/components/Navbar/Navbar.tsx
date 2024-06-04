import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ isSticky }: { isSticky: boolean }) => {
  return (
    <nav className={`navbar ${isSticky ? "fixed" : ""}`}>
      <ul>
        <li><Link to="/">דף הבית</Link></li>
        <li><Link to="/about">אודות</Link></li>
        <li><Link to="/Products">מוצרים</Link></li>
        <li><Link to="/contact">צור קשר</Link></li>
      </ul>
    </nav>
  )
};

export default Navbar;