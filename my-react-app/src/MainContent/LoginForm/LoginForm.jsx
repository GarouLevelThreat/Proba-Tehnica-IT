import Btn from "../../Button/Btn";
import UserInput from "../UserInput/UserInput";
import "../login-register.css";

function LoginForm() {
	return (
		<div className="container">
			<form action="#">
				<Btn class="close-btn" name="&#10005;" />
				<h2 className="title">Login</h2>

				<div className="user-input">
					<UserInput type="text" placeholder="Email" />
					<UserInput type="password" placeholder="Password" />
				</div>

				<Btn class="login-btn" name="Login" />
			</form>
		</div>
	);
}

export default LoginForm;