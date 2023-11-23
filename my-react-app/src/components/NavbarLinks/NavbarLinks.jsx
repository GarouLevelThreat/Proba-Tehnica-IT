import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import "./NavbarLinks.css";

function NavbarLinks() {
	const isMobile = useMediaQuery({ maxWidth: 768 });
	const isDesktop = useMediaQuery({ minWidth: 769 });

	const Desktop = (
		<div className="right-side">
			<a href="#" className="login">
				Login
			</a>
			<a href="#" className="register">
				Register
			</a>
		</div>
	);

	const Mobile = (
		<div className="right-side">
			<FontAwesomeIcon icon={faBars} className="hamburger-menu" />
		</div>
	);

	return (
		<div>
			{isMobile && Mobile}
			{isDesktop && Desktop}
		</div>
	);
}

export default NavbarLinks;
