import Btn from "../../Button/Btn";
import UserInput from "../UserInput/UserInput";
import "./loginForm.css";

function LoginForm() {
	return (
		<form action="#">
			<h2 className="title">Login</h2>

			<div className="user-input">
				<UserInput type="text" placeholder="Email" />
				<UserInput type="password" placeholder="Password" />
			</div>

			<Btn class="login-btn" name="Login" />
		</form>
	);
}

export default LoginForm;
