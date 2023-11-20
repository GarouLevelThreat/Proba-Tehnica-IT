import Btn from "../../Button/Btn";
import UserInput from "../UserInput/UserInput";
import "../login-register.css";

function RegisterForm() {
	return (
		<div className="container">
			<form action="#">
				<Btn class="close-btn" name="&#10005;" />
				<h2 class="title">Register</h2>

				<div className="user-input">
					<UserInput type="text" placeholder="Email" />
					<UserInput type="password" placeholder="Password" />
					<UserInput type="password" placeholder="Confirm password" />
				</div>

				<Btn class="create-account-btn" name="Create Account" />
			</form>
		</div>
	);
}

export default RegisterForm;
