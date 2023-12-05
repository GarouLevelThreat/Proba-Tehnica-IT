import "./login.css"
import {useState} from "react"
import Btn from "../Button/Btn"
import FormInput from "../FormInput/FormInput"

const Login = (props) => {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});

	const inputs = [
		{
			id: 1,
			name: "email",
			type: "email",
			placeholder: "Email",
			required: true,
		},
		{
			id: 2,
			name: "password",
			type: "password",
			placeholder: "Password",
			required: true,
		},
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = new FormData(e.target);
		//console.log(Object.fromEntries(data.entries()));
	};

	const onChange = (e) => {
		setValues({ ...values, [e.target.name]: e.target.value });
	};

	//console.log(values);
	return props.trigger ? (
		<>
			<div className="blur"></div>
			<div className="login-container">
				<form onSubmit={handleSubmit}>
					<Btn
						name="&#x2715;"
						class="close-btn"
						onClick={() => {
							props.setTrigger(false);
							props.setFooterTrigger(true);
						}}
					/>
					<h1 className="login-title">Login</h1>
					{inputs.map((input) => (
						<FormInput
							key={input.id}
							{...input}
							value={values[input.name]}
							onChange={onChange}
						/>
					))}
					<button className="login-btn" onClick={props.setLoginStatus}>
						Login
					</button>
				</form>
			</div>
		</>
	) : (
		""
	);
}

export default Login