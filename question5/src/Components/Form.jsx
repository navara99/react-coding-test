import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import "./form.css";

function Form() {
  const [word, setWord] = useState("");

  const handleWord = (e) => {
    setWord(e.target.value);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const data = await fetch(`https://api.datamuse.com/words?rel_rhy=${word}`);
      const words = await data.json();
      console.log(words);
    } catch (e) {
      console.log(e.message);
    };

  };

  return (
    <form onSubmit={handleSubmission}>
      <TextField sx={{ m: "1em" }} value={word} onChange={handleWord} />
      <Button variant="contained" type="submit">Find Words!</Button>
    </form>
  )
}

export default Form;