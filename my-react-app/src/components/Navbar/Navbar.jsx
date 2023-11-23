import React, { useState } from "react";
import Logo from "../../assets/logo.jpg";
import "../../components/Navbar/Navbar.css";

function Navbar() {
	const [isLoginToggled, setIsLoginToggled] = useState(false);
	const [isRegisterToggled, setIsRegisterToggled] = useState(false);

	const handleClickLogin = () => {
		setIsLoginToggled(!isLoginToggled);
	};

	const handleClickRegister = () => {
		setIsRegisterToggled(!isRegisterToggled);
	};

	return (
		<nav className="navbar">
			<div className="left-side">
				<img src={Logo} alt="logo" />
			</div>
			<div className="right-side">
				<a href="#" className="login" onClick={handleClickLogin}>
					{isLoginToggled && <LoginForm />}
					Login
				</a>
				<a href="#" className="register" onClick={handleClickRegister}>
					{isRegisterToggled && <RegisterForm />}
					Register
				</a>
			</div>
		</nav>
	);
}

export default Navbar;