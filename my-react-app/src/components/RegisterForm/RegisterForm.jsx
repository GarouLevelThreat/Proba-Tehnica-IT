import React, { useEffect } from "react";
import Btn from "../Button/Btn";
import AuthInput from "../AuthInput/AuthInput";
import "./RegisterForm.css";

function RegisterForm() {
	useEffect(() => {
		// Change body style when the component mounts
		document.body.style.backgroundColor = "var(--background-color-blured)";

		// Cleanup when the component unmounts
		return () => {
			// Remove the styles or reset to their original values
			document.body.style.backgroundColor = "var(--main-color)";
		};
	}, []);

	return (
		<div className="container">
			<form action="#">
				<Btn class="close-btn" name="&#10005;" />
				<h2 class="title">Register</h2>

				<div className="user-input">
					<AuthInput type="text" placeholder="Email" />
					<AuthInput type="password" placeholder="Password" />
					<AuthInput type="password" placeholder="Confirm password" />
				</div>

				<Btn class="create-account-btn" name="Create Account" />
			</form>
		</div>
	);
}

export default RegisterForm;
