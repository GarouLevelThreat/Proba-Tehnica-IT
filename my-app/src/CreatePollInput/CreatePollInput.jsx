import "./createPollInput.css"
import {useState} from "react"

const CreatePollInput = (props) => {
  const {errorMessage, onChange, id, ...inputProps } = props;

  return (
    <div className="create-poll-input">
      <input
        {...inputProps}
        onChange={onChange}
      />
    </div>
  );
}

export default CreatePollInput