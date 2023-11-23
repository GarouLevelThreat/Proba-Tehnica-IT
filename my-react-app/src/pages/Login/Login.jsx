import "./Login.css";
import Navbar from "../../components/Navbar/Navbar";
import LoginForm from "../../components/LoginForm/LoginForm";
import PollCard from "../../components/PollCard/PollCard";

function Login() {
	return (
		<>
			<Navbar />
			<main className="grid-container">
				<PollCard title="Cine este coordonatorul departamentului de IT?" />
				<PollCard title="Cine este coordonatorul departamentului de IT?" />
			</main>
			<LoginForm />
		</>
	);
}

export default Login;
