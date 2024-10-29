import "./App.css";
import Table from "./components/Table";
import Form from "./components/Form";

import { useState } from "react";

function App() {
  const [favLinks, setFavLinks] = useState([]);

  let handleNewSubmission = (data) => {
    setFavLinks([...favLinks, data]);
  };

  return (
    <div>
      <h1 className="testClass"> Submit your fav links!</h1>

      <Form onNewSubmit={handleNewSubmission} />

      <Table links={favLinks} />
    </div>
  );
}

export default App;
