import Logo from "./assets/logo.jpg";
import { useState } from "react";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import CreatePoll from "./components/CreatePoll/CreatePoll";
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

	const [isUserLogged, setIsUserLogged] = useState(false);
	const [isUserRegistered, setIsUserRegistered] = useState(false);

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

	const [pollCards, setPollCards] = useState([
		{
			id: "0",
			title: "Poll 1",
			options: ["option 1", "option 2", "option 3"],
		},
		{
			id: "1",
			title: "Poll 2",
			options: ["option 1", "option 2", "option 3"],
		},
		{
			id: "2",
			title: "Poll 3",
			options: ["option 1", "option 2", "option 3"],
		},
		{
			id: "3",
			title: "Poll 4",
			options: ["option 1", "option 2", "option 3"],
		},
	]);

	const handleDeletePoll = (deletePoll) => {
		let deletePollId = deletePoll.target.id;

		console.log(deletePoll.target.id);

		const newPollCards = pollCards.filter((poll) => deletePollId !== poll.id);
		setPollCards(newPollCards);
	};

	const handleVote = () => {
		console.log("voted");
	};

	const listPollCards = pollCards.map((poll) => (
		<PollCard
			key={poll.id}
			id={poll.id}
			title={poll.title}
			optionsList={poll.options}
			isUserLogged={isUserLogged}
			triggerUserStatus={setIsUserLogged}
			triggerDelete={handleDeletePoll}
			triggerVote={handleVote}
		/>
	));

	return (
		<>
			<nav className="navbar">
				<div className="left-side">
					<img src={Logo} alt="logo" />
				</div>
				{isUserLogged === false ? (
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
				) : (
					<ul className="right-side">
						<li>
							<a href="#" onClick={handleClickCreatePoll}>
								Create poll
								{}
							</a>
						</li>
						<li>
							<a href="#">Log out</a>
						</li>
					</ul>
				)}
			</nav>

			<Register
				trigger={registerPopup}
				setTrigger={setRegisterPopup}
				setFooterTrigger={setIsFooter}
				setRegisterStatus={handleRegisterStatus}
			/>
			<Login
				trigger={loginPopup}
				setTrigger={setLoginPopup}
				setFooterTrigger={setIsFooter}
				setLoginStatus={handleLoginStatus}
			/>
			<CreatePoll
				trigger={createPollPopup}
				setTrigger={setCreatePollPopup}
				setFooterTrigger={setIsFooter}
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
