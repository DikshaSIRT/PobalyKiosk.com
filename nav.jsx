import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="rti">Pobaly</span>
        <span className="wala">Kiosk</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/" className='a1'>Home</Link></li>
        <li><Link to="/product" className='a1'>Product</Link></li>
        <li><Link to="/rti" className='a1'>RTO drafting</Link></li>
        <li><Link to="/rti" className='a1'>RTO Form</Link></li>
        <li><Link to="/signin" className='a1'>Login</Link></li>
        <li><Link to="/walletrecharge">Wallet</Link></li>
        <li><Link to="/Aboutus">About Us</Link></li>
      </ul>
    </nav>
  );
}
