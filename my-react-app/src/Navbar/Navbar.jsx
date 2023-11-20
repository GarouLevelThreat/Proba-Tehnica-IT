import Logo from "../assets/logo.jpg";
import styles from "./Navbar.module.css";

function Navbar() {
	return (
		<nav className={styles.navbar}>
			<div className={styles.left_side}>
				<img src={Logo} alt="logo" />
			</div>
			<div className={styles.right_side}>
				<a href="#" className={styles.login}>
					Login
				</a>
				<a href="#" className={styles.register}>
					Register
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
