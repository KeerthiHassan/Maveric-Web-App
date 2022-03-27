import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<ul className="navbar-nav">
<li className="nav-item active">
<a className="nav-link" href="#"><img src="maveric-logo-updated.png" alt="Logo" /></a>
</li>
<li className="nav-item">
<a className="navbar-brand disabled" href="#"><b><h2>Maveric Connect</h2></b></a>
</li>
</ul>
<div className="align-right ">
<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret style={{backgroundColor:"rgb(39, 117, 233)(43, 30, 224, 0.048)"}}>
        Profile
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem >My Profile</DropdownItem>
          <DropdownItem >Setting</DropdownItem>
          <DropdownItem divider />
          <Link to="/"><DropdownItem >Logout</DropdownItem></Link>
        </DropdownMenu>
      </Dropdown></div>


</nav>
  );
}
}
export default Header;
