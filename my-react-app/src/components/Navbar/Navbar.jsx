import Logo from "../../assets/logo.jpg";
import "../../components/Navbar/Navbar.css";
import { Link } from "react-router-dom";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="left-side">
				<img src={Logo} alt="logo" />
			</div>
			<NavbarLinks />
		</nav>
	);
}

export default Navbar;
