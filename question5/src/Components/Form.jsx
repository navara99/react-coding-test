import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./form.css";

function Form() {
  const [word, setWord] = useState("");

  const handleWord = (e) => {
    setWord(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmission}>
      <TextField sx={{ m: "1em" }} value={word} onChange={handleWord} />
      <Button variant="contained" type="submit">Find Words!</Button>
    </form>
  )
}

export default Form;