import { useState, useEffect } from "react";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import NavbarLinks from "../NavbarLinks/NavbarLinks";

const ResizeNavbar = (props) => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			{isMobile ? (
				<HamburgerMenu
					isUserLogged={props.isUserLogged}
					handleClickLogin={props.handleClickLogin}
					handleClickRegister={props.handleClickRegister}
					handleClickCreatePoll={props.handleClickCreatePoll}
					handleClickLogout={props.handleClickLogout}
				/>
			) : (
				<NavbarLinks
					isUserLogged={props.isUserLogged}
					handleClickLogin={props.handleClickLogin}
					handleClickRegister={props.handleClickRegister}
					handleClickCreatePoll={props.handleClickCreatePoll}
					handleClickLogout={props.handleClickLogout}
				/>
			)}
		</>
	);
};

export default ResizeNavbar;
