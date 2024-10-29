import { useState } from "react";

function Form(props) {
  // my form component

  // function handleSubmit(){
  //   event.preventDefault()
  //   alert("Submitted!")
  // }

  const [name, setName] = useState("");
  const [URL, setURL] = useState("");

  let handleSubmit = (event) => {
    event.preventDefault();
    // alert("Submitted from arrow function!")

    if (name === "" || URL === "") {
      alert("Name and URL are required!");
    } else {
      console.log(name, URL);
      props.onNewSubmit({ name, URL }); //Why am i getting an error here?
      setName("");
      setURL("");
    }
  };

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  let handleURLChange = (event) => {
    setURL(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="linkName">Link Name</label>
      <input
        type="text"
        name="linkName"
        onChange={handleNameChange}
        value={name}
      />
      <br />
      <label htmlFor="linkURL">Link URL</label>
      <input
        type="text"
        name="linkURL"
        onChange={handleURLChange}
        value={URL}
      />

      <br />
      <br />

      <input type="submit" disabled={name === "" || URL === ""} />
    </form>
  );
}

export default Form;
