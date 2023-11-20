import InstagramLogo from "./assets/mdi_instagram.svg";
import TwitchLogo from "./assets/mdi_twitch.svg";
import FacebookLogo from "./assets/uil_facebook.svg";

function Footer() {
	return (
		<footer className="footer">
			<a href="#">
				<img src={InstagramLogo} alt="instagram-logo" />
			</a>
			<a href="#">
				<img src={FacebookLogo} alt="facebook-logo" />
			</a>
			<a href="#">
				<img src={TwitchLogo} alt="twitch-logo" />
			</a>
		</footer>
	);
}

export default Footer;
