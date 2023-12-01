import Testoasa from "../../assets/testoasa 1.jpg"

const DefaultImage = (props) => {
  return props.trigger ? (
		<img className="default-image" src={Testoasa} alt="testoasa :)" />
	) : (
		""
	);
}

export default DefaultImage