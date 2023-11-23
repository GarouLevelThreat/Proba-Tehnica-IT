import "./Register.css";
import Navbar from "../../components/Navbar/Navbar";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import PollCard from "../../components/PollCard/PollCard";

function Register() {
	return (
		<>
			<Navbar />
			<main className="grid-container">
				<PollCard title="Cine este coordonatorul departamentului de IT?" />
				<PollCard title="Cine este coordonatorul departamentului de IT?" />
			</main>
			<RegisterForm />
		</>
	);
}

export default Register;
