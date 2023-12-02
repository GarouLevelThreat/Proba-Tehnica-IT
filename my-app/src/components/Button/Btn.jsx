import "./btn.css"

const Btn = (props) => {
	return props.render === true ? (
		<button className={props.class} onClick={props.onClick} id={props.id}>
			{props.name}
		</button>
	) : (
		""
	);
};

Btn.defaultProps = {
	render: true,
};

export default Btn