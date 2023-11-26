import "./createPoll.css"
import {useState} from "react"
import Btn from "../Button/Btn"
import CreatePollInput from "../../CreatePollInput/CreatePollInput"
import VotingOption from "../VotingOption/VotingOption"

const CreatePoll = (props) => {
  const [values, setValues] = useState({
    title: "",
    option: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  }

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value});
  }

  console.log(values);
  return (
  <>
    <div className="blur"></div>
    <div className='create-poll-container'>
      <form onSubmit={handleSubmit}>
        <Btn name="&#x2715;" class="close-btn" onClick={() => {
            props.setTrigger(false);
            props.setFooterTrigger(true);
          }} />
        <h1 className="create-poll-title">Create a Poll</h1>
          <div className="inputs-container">
            <p className="section-description">Title</p>
            <CreatePollInput />

            <p className="section-description">Voting Type</p>
            <VotingOption option="Single Choice"/>
            <VotingOption option="Multiple Choice"/>

            <p className="section-description">Answer Options</p>
            <div className="options-container">
              <CreatePollInput />
              <CreatePollInput />
              <CreatePollInput />
              <Btn name="+ Add Option" class="add-option-btn"/>
            </div>
          </div>
        <button className="create-poll-btn" >Create Poll</button>
      </form>
    </div>
  </>);
}

export default CreatePoll