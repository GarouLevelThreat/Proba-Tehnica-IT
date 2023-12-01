import "./btn.css"

const Btn = (props) => {
	return (
		<button className={props.class} onClick={props.onClick} id={props.id}>
			{props.name}
		</button>
	);
}

export default Btn