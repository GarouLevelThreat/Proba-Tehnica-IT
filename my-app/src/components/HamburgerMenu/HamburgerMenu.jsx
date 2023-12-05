import "./hamburgerMenu.css";
import { useState } from "react";
import Btn from "../Button/Btn";
import NavbarLinks from "../NavbarLinks/NavbarLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const HamburgerMenu = (props) => {
	const [isClicked, setIsClicked] = useState(false);

	const handleClick = (param) => {
		setIsClicked(!isClicked);
	};

	return (
		<div className="links-parent">
			{isClicked ? (
				<Btn class="close-menu-btn" name="&#x2715;" onClick={handleClick} />
			) : (
				<FontAwesomeIcon
					className="hamburger-menu"
					icon={faBars}
					onClick={handleClick}
				/>
			)}
			{isClicked ? (
				<div className="links-container">
					<NavbarLinks
						isUserLogged={props.isUserLogged}
						handleClickLogin={props.handleClickLogin}
						handleClickRegister={props.handleClickRegister}
						handleClickCreatePoll={props.handleClickCreatePoll}
						handleClickLogout={props.handleClickLogout}
					/>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default HamburgerMenu;
