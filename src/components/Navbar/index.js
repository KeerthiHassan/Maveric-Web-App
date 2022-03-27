import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component
{
render()
{
return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<ul className="navbar-nav">
<li className="nav-item active">
<Link className="nav-link" to="/home"><img src="maveric-logo-updated.png" alt="Logo" /></Link>
</li>
<li className="nav-item">
<a className="navbar-brand disabled" href="#"><b><h2>Maveric Connect</h2></b></a>
</li>
</ul>
</nav>

)
}
}
export default Navbar;