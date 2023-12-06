import Logo from "./assets/logo.jpg";
import { useState, useEffect } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import ResizeNavbar from "./components/ResizeNavbar/ResizeNavbar";
import CreatePoll from "./components/CreatePoll/CreatePoll";
import PollCard from "./components/PollCard/PollCard";
import Footer from "./components/Footer/Footer";
import "./navbar.css";
import "./grid.css";
import DefaultText from "./components/Default/DefaultText";
import DefaultImage from "./components/Default/DefaultImage";
import axios from "axios";

const App = () => {
	const [token, setToken] = useState(localStorage.getItem("token") || "");

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

	const [isUserLogged, setIsUserLogged] = useState(false);
	const [isUserRegistered, setIsUserRegistered] = useState(false);

	if (token) {
		axios
			.get("http://localhost:8080/auth")
			.then((result) => {
				setIsUserLogged(result);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	const handleLoginStatus = () => {
		setLoginPopup(false);
		setIsUserLogged(true);
		setIsFooter(true);
	};

	const handleRegisterStatus = () => {
		setRegisterPopup(false);
		setIsUserRegistered(true);
		setIsFooter(true);
	};

	const [createPollPopup, setCreatePollPopup] = useState(false);

	const handleClickCreatePoll = () => {
		if (!createPollPopup) setCreatePollPopup(true);
		setIsFooter(false);
	};

	const handleClickLogout = () => {
		localStorage.removeItem("token");
		setToken("");
		setIsUserLogged(false);
	};

	const [idValue, setIdValue] = useState(4);

	const [pollCards, setPollCards] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8080/get-polls")
			.then((pollCards) => {
				setPollCards(pollCards.data);
			})
			.catch((err) => console.log(err));
	}, []);

	const handleAddPoll = (inputs) => {
		const newPoll = {
			title: inputs.title,
			votingOption: inputs.votingOption,
			options: inputs.pollOptions.map((option) => option.input),
		};
		setIdValue(idValue + 1);

		axios
			.post("http://localhost:8080/create-polls", newPoll)
			.then(() => {
				window.location.reload();
			})
			.catch((err) => console.log(err));
	};

	const handleVote = () => {
		console.log("voted");
	};

	const listPollCards = pollCards.map((poll) => (
		<PollCard
			key={poll.id}
			poll={poll}
			title={poll.title}
			votingOption={poll.votingOption}
			optionsList={poll.options}
			isUserLogged={isUserLogged}
			triggerUserStatus={setIsUserLogged}
			triggerVote={handleVote}
		/>
	));

	return (
		<>
			<nav className="navbar">
				<div className="left-side">
					<img src={Logo} alt="logo" />
				</div>
				<ResizeNavbar
					isUserLogged={isUserLogged}
					handleClickLogin={handleClickLogin}
					handleClickRegister={handleClickRegister}
					handleClickCreatePoll={handleClickCreatePoll}
					handleClickLogout={handleClickLogout}
				/>
			</nav>
			<Register
				trigger={registerPopup}
				setTrigger={setRegisterPopup}
				setIsUserRegistered={setIsUserRegistered}
				setFooterTrigger={setIsFooter}
				setRegisterStatus={handleRegisterStatus}
			/>
			<Login
				trigger={loginPopup}
				setTrigger={setLoginPopup}
				setIsUserLogged={setIsUserLogged}
				setFooterTrigger={setIsFooter}
				setLoginStatus={handleLoginStatus}
			/>
			<CreatePoll
				trigger={createPollPopup}
				setTrigger={setCreatePollPopup}
				setFooterTrigger={setIsFooter}
				addPoll={handleAddPoll}
			/>

			<main>
				<div className="defaults-container">
					<DefaultText trigger={isFooter} />
					<DefaultImage trigger={isFooter} />
				</div>
				<div className="cards-container">{listPollCards}</div>
			</main>

			<Footer trigger={isFooter} />
		</>
	);
};

export default App;
