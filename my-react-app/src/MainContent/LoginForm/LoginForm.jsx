import styles from "./LoginForm.module.css";

function LoginForm() {
	return (
		<form className={container}>
			<label htmlFor="ui-1">Email</label>
			<input placeholder="Email"></input>
		</form>
	);
}
