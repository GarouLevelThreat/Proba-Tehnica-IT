import Logo from "./assets/logo.jpg";
import { useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import PollCard from "./components/PollCard/PollCard";
import Footer from "./components/Footer/Footer";
import "./navbar.css";
import "./grid.css";
import DefaultText from "./components/Default/DefaultText";
import DefaultImage from "./components/Default/DefaultImage";

const App = () => {
	const [registerPopup, setRegisterPopup] = useState(false);
	const [loginPopup, setLoginPopup] = useState(false);
	const [isFooter, setIsFooter] = useState(true);

	const handleClickRegister = () => {
		if (!loginPopup) setRegisterPopup(true);
		setIsFooter(false);
	};

	const handleClickLogin = () => {
		if (!registerPopup) setLoginPopup(true);
		setIsFooter(false);
	};

	return (
		<>
			<nav className="navbar">
				<div className="left-side">
					<img src={Logo} alt="logo" />
				</div>
				<ul className="right-side">
					<li>
						<a href="#" onClick={handleClickLogin}>
							Login
						</a>
					</li>
					<li>
						<a href="#" onClick={handleClickRegister}>
							Register
						</a>
					</li>
				</ul>
			</nav>

			<Register
				trigger={registerPopup}
				setTrigger={setRegisterPopup}
				setFooterTrigger={setIsFooter}
			/>
			<Login
				trigger={loginPopup}
				setTrigger={setLoginPopup}
				setFooterTrigger={setIsFooter}
			/>

			<main>
				<div className="cards-container">
					<DefaultText trigger={isFooter} />
					<DefaultImage trigger={isFooter} />
					<PollCard title="Title" />
					<PollCard title="Title" />
					<PollCard title="Title" />
					<PollCard title="Title" />
					<PollCard title="Title" />
					<PollCard title="Title" />
				</div>
			</main>

			<Footer trigger={isFooter} />
		</>
	);
};

export default App;
