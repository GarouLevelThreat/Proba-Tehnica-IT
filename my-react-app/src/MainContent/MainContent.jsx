import styles from "./MainContent.module.css";

function MainComponent() {
	return (
		<div className={styles.container}>
			<LoginForm />
		</div>
	);
}
