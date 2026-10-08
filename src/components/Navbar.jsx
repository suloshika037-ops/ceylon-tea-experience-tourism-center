import { NavLink } from 'react-router-dom'

function Navbar() {
  const navLinkStyle = ({ isActive }) => ({
    marginRight: '20px',
    textDecoration: 'none',
    fontWeight: isActive ? 'bold' : 'normal',
  })

  return (
    <nav>
      <NavLink to="/" style={navLinkStyle}>
        Home
      </NavLink>

      <NavLink to="/tea" style={navLinkStyle}>
        Ceylon Tea
      </NavLink>

      <NavLink to="/destinations" style={navLinkStyle}>
        Destinations
      </NavLink>

      <NavLink to="/experiences" style={navLinkStyle}>
        Experiences
      </NavLink>

      <NavLink to="/booking" style={navLinkStyle}>
        Booking
      </NavLink>
    </nav>
  )
}

export default Navbar