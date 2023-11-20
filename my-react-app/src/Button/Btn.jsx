import "./Btn.css";

function Btn(props) {
	return <button className={props.class}>{props.name}</button>;
}

export default Btn;
