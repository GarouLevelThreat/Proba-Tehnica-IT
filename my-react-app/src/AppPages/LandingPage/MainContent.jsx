import testoasa_1 from "../../assets/testoasa_1.jpg";
import PollCard from "../../components/PollCard/PollCard";
import "./mainContent.css";

function MainContent() {
	return (
		<main>
			<div className="gridContainer">
				<p className="defaultText">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod quo aut
					ratione culpa harum nulla cumque, delectus voluptas inventore quam
					molestiae voluptate libero, voluptatum veritatis molestias! Voluptates
					ipsa numquam voluptate.
				</p>
				<img className="defaultImg" src={testoasa_1} alt="" />

				<PollCard title="Ce animal se afla pe tricourile departamentului de IT?" />
				<PollCard title="Ce animal se afla pe tricourile departamentului de IT?" />
				<PollCard title="Ce animal se afla pe tricourile departamentului de IT?" />
				<PollCard title="Ce animal se afla pe tricourile departamentului de IT?" />
			</div>
		</main>
	);
}

export default MainContent;
