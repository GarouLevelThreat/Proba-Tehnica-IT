import "./../../navbar.css";

const NavbarLinks = (props) => {
	return (
		<>
			{props.isUserLogged === false ? (
				<ul className="right-side">
					<li>
						<a href="#" onClick={props.handleClickLogin}>
							Login
						</a>
					</li>
					<li>
						<a href="#" onClick={props.handleClickRegister}>
							Register
						</a>
					</li>
				</ul>
			) : (
				<ul className="right-side">
					<li>
						<a href="#" onClick={props.handleClickCreatePoll}>
							Create poll
							{}
						</a>
					</li>
					<li>
						<a href="#" onClick={props.handleClickLogout}>
							Log out
						</a>
					</li>
				</ul>
			)}
		</>
	);
};

export default NavbarLinks;
