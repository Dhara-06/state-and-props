import { useState } from "react";
import Greeting from "./Greeting"
function GreetingMessage() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const clearName = () => {
    setName("");
  };
  return (
    <div className="container mt-5">
      <div className="mb-3">
        <label className="form-label">Name</label>
        <input type="text" className="form-control" placeholder="Enter your name" value={name} onChange={handleChange} />
      </div>
      <button className="btn btn-primary" onClick={clearName}>
        Clear
      </button>
      <Greeting name={name} />
    </div>
  );
}

export default GreetingMessage;