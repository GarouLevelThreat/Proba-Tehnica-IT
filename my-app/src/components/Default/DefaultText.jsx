const DefaultText = (props) => {
  return props.trigger ? (
		<div className="default-text">
			Opiniile sunt mai importante ca niciodată. Platformele de sondaje permit
			organizatorilor să culeagă feedback direct de la audiența lor și să
			înțeleagă mai bine nevoile și dorințele acesteia.
		</div>
	) : (
		""
	);
}

export default DefaultText