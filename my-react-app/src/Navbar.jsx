import Logo from "./assets/logo.jpg";

function Navbar() {
	return (
		<nav className="navbar">
			<div className="left-side">
				<img src={Logo} alt="logo" />
			</div>
			<div className="right-side">
				<a href="#" className="login">
					Login
				</a>
				<a href="#" className="register">
					Register
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
