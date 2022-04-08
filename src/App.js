import { useState } from "react";
import { RatingForm } from "./components/RatingForm";

function App() {
  const [submit, setSubmit] = useState(false);
  return (
    <div className="App">
      <RatingForm submit={submit} setSubmit={setSubmit} />
    </div>
  );
}

export default App;
